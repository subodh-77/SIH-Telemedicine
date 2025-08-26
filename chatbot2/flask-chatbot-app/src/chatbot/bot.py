def get_bot_response(user_input):
    # Simple chatbot logic for demonstration purposes
    responses = {
        "hello": "Hi there! How can I help you?",
        "how are you?": "I'm just a program, but thanks for asking!",
        "bye": "Goodbye! Have a great day!",
    }
    
    return responses.get(user_input.lower(), "I'm sorry, I don't understand that.")