from dotenv import load_dotenv
import os

load_dotenv()

class Config:
    DEBUG = os.getenv("DEBUG", "True") == "True"
    SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")
    # Add other configuration variables as needed
    # For example:
    # DATABASE_URI = os.getenv("DATABASE_URI", "sqlite:///site.db")