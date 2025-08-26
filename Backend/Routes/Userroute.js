const express = require('express');
const router = express.Router();
const User = require('./../Models/User');
const { jwtAuthMiddleware, generateToken } = require('./../jwt');
router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        const newuser = new User(data);
        const response = await newuser.save();
        console.log('data saved');
        const payload = {
            id: response.id
        }
        console.log(JSON.stringify(payload));
        const token = generateToken(payload);
        res.status(200).json({response:response,token: token});
    } catch (err) {
        console.error('Signup Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
//login route

router.post('/login', async (req, res) => {
    try {
        //extract the username and password
        const { aadharCardNumber, password } = req.body;
        const existingUser = await User.findOne({ aadharCardNumber: aadharCardNumber });

        //If user does not exist or password does not match,return error
        if (!existingUser || !(await existingUser.comparePassword(password))) {
            return res.status(401).json({ error: "invalid username or password" });
        }
        //generate token
        const payload = {
            id: existingUser.id,
        }
        const token = generateToken(payload);
        //return token as response
        res.json({ token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
})
//profile
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try {
        const userData = req.user;
        const userId = userData.id;
        const existingUser = await User.findById(userId);
        res.status(200).json({ user:existingUser });
    } catch (err) {
        console.error( err);
        res.status(500).json({ error: 'internal server error' });
    }
});
//update
router.put('/profile/password', jwtAuthMiddleware, async (req, res) => {
    try {
        const userId = req.user;//extract the id from token
        const { currentPassword, newPassword } = req.body;//extract current and new pass from body

        //find the user by userid
        const existingUser = await User.findOne(userId);

        //if password does not match ,return err
         if ( !(await existingUser.comparePassword(currentPassword))) {
            return res.status(401).json({ error: "invalid username or password" });
        }

        //update the user's password
        existingUser.password=newPassword;
        await existingUser.save();
        console.log('password updated');
        res.status(200).json("password updated");
    } catch (err) {
        console.error( err);
        res.status(500).json('internal server error');
    }
});
module.exports=router;