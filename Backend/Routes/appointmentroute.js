const express = require('express');
const router = express.Router();
const appointment = require('../Models/Appointment');
const { jwtAuthMiddleware, generateToken } = require('./../jwt');
router.post("/book", jwtAuthMiddleware, async (req, res) => {
    try {
        const { doctorId, date } = req.body;
        const newAppointment = new appointment({
            userId: req.user.id,
            doctorId,
            date,
            videoLink: `https://meet.jit.si/${Date.now()}-${req.user.id}`
        });
        const saved = await newAppointment.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});
router.get("/my", jwtAuthMiddleware, async (req, res) => {
    try {
        const appointments = await appointment.find({ patientId: req.user.id })
            .populate("doctorId", "name specialization");
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get doctor’s appointments
router.get("/doctor", jwtAuthMiddleware, async (req, res) => {
    try {
        const appointments = await appointment.find({ doctorId: req.user.id })
            .populate("patientId", "name aadharCardNumber");
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});
// Update Appointment Status (Doctor only)
router.put("/:id/status", jwtAuthMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body; // expecting: "confirmed", "rejected", "completed"

        // 1. Validate status
        const validStatuses = ["pending", "confirmed", "rejected", "completed"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ error: "Invalid status value" });
        }

        // 2. Find appointment
        const Appointment = await appointment.findById(id);
        if (!appointment) {
            return res.status(404).json({ error: "Appointment not found" });
        }

        // 3. Ensure doctor owns this appointment
        if (Appointment.doctorId.toString() !== req.user.id) {
            return res.status(403).json({ error: "Not authorized to update this appointment" });
        }

        // 4. Update status
        Appointment.status = status;
        await Appointment.save();

        res.json({ message: `Appointment ${status}`, Appointment });
    } catch (err) {
        console.error("Update Status Error:", err);
        res.status(500).json({ error: err.message });
    }
});

module.exports=router;
// const express = require('express');
// const router = express.Router();
// const Appointment = require('../Models/Appointment'); // ✅ capitalized
// const { jwtAuthMiddleware } = require('./../jwt');
// const mongoose = require('mongoose');

// // Book Appointment
// router.post("/book", jwtAuthMiddleware, async (req, res) => {
//     try {
//         const { doctorId, date } = req.body;

//         // 1. Validate doctorId format
//         if (!mongoose.Types.ObjectId.isValid(doctorId)) {
//             return res.status(400).json({ error: "Invalid doctorId format" });
//         }

//         // 2. Validate date
//         if (!date || isNaN(new Date(date))) {
//             return res.status(400).json({ error: "Invalid date format, use ISO string" });
//         }

//         // 3. Create appointment
//         const newAppointment = new Appointment({
//             userId: req.user.id,
//             doctorId,
//             date: new Date(date),
//             videoLink: `https://meet.jit.si/${Date.now()}-${req.user.id}`
//         });

//         const saved = await newAppointment.save();
//         res.status(201).json(saved);
//     } catch (err) {
//         console.error("Book Appointment Error:", err);
//         res.status(500).json({ error: err.message }); // ✅ show real error
//     }
// });

// // Patient’s appointments
// router.get("/my", jwtAuthMiddleware, async (req, res) => {
//     try {
//         const appointments = await Appointment.find({ patientId: req.user.id })
//             .populate("doctorId", "name specialization");
//         res.json(appointments);
//     } catch (err) {
//         console.error("Get Patient Appointments Error:", err);
//         res.status(500).json({ error: err.message });
//     }
// });

// // Doctor’s appointments
// router.get("/doctor", jwtAuthMiddleware, async (req, res) => {
//     try {
//         const appointments = await Appointment.find({ doctorId: req.user.id })
//             .populate("patientId", "name aadharCardNumber");
//         res.json(appointments);
//     } catch (err) {
//         console.error("Get Doctor Appointments Error:", err);
//         res.status(500).json({ error: err.message });
//     }
// });

// module.exports = router;
