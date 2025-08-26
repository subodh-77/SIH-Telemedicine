# Flask Chatbot Application

This is a simple Flask-based chatbot application that handles user messages and generates responses using a chatbot logic.

## Project Structure

```
flask-chatbot-app
├── src
│   ├── main.py          # Entry point of the application
│   ├── chatbot          # Package containing chatbot logic
│   │   ├── __init__.py  # Initialization file for the chatbot package
│   │   └── bot.py       # Contains the get_bot_response function
│   └── config.py        # Configuration settings for the Flask application
├── requirements.txt      # Lists project dependencies
└── README.md             # Documentation for the project
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd flask-chatbot-app
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```

4. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage

To run the application, execute the following command:

```
python src/main.py
```

The application will start on `http://127.0.0.1:5000/`. You can send POST requests to the `/chat` endpoint with a JSON payload containing the user's message.

## Example Request

```json
{
  "message": "Hello, chatbot!"
}
```

## License

This project is licensed under the MIT License.