from flask import Flask, request, jsonify
from chatbot.bot import get_bot_response

app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("message", "")
    response = get_bot_response(user_input)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)