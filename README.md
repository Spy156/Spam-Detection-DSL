Email Spam Detection Project
This repository contains a full-stack project with a React frontend (client) and a Flask backend (server). Follow the instructions below to set up and run both the client and server.

Prerequisites
Node.js installed on your machine (for the client).
Python 3.11.9 installed on your machine (for the server).
VSCode or any other code editor of your choice.
Project Setup Instructions
1. Set Up the Client (Frontend)
Navigate to the client directory:

bash
Copy code
cd client
Install the required Node.js packages:

bash
Copy code
npm install
Run the React app in development mode:

bash
Copy code
npm run dev
This will start the client on your local machine, typically at http://localhost:5173 (or a similar port). You can access the app via your browser at the address provided.

2. Set Up the Server (Backend)
Ensure Python 3.11.9 is installed on your system. You can verify the version by running:

bash
Copy code
python --version
Navigate to the server directory in a new terminal:

bash
Copy code
cd server
Set up a virtual environment for the server:

bash
Copy code
python -m venv venv
Activate the virtual environment:

On Windows:
bash
Copy code
venv\Scripts\activate
On macOS/Linux:
bash
Copy code
source venv/bin/activate
Install the required Python packages:

bash
Copy code
pip install -r requirements.txt
Run the Flask server:

bash
Copy code
python app.py
This will start the server on your local machine, typically at http://127.0.0.1:5000 or http://localhost:5000.

3. Connecting the Client and Server
Once both the client and server are running, they should be able to communicate with each other via HTTP requests. Ensure both are running in their respective terminals, and the client will be able to interact with the Flask backend.

Troubleshooting
Node.js installation issues: Make sure you have Node.js installed. You can download it from here.
Python version: Ensure you are using Python 3.11.9, as this project relies on features and compatibility specific to that version.
Virtual environment activation issues: If you're having trouble activating the virtual environment, ensure your terminal is pointing to the correct Python version and that the virtual environment was created successfully.
Additional Notes
Remember to deactivate your virtual environment when you're done working on the backend:

bash
Copy code
deactivate
Ensure that sensitive files like .env and virtual environments (venv/) are excluded from Git tracking. This project uses a .gitignore file to handle that automatically.

By following these instructions, you should be able to successfully set up and run both the frontend and backend for the Email Spam Detection Project.

Let me know if you'd like to modify or expand any section!
