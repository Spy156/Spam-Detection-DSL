# Email Spam Detection Project

This repository contains a full-stack project with a React frontend (client) and a Flask backend (server). Follow the instructions below to set up and run both the client and server.

## Prerequisites

- **Node.js** installed on your machine (for the client).
- **Python 3.11.9** installed on your machine (for the server).
- **VSCode** or any other code editor of your choice.

---

## Project Setup Instructions

### 1. Set Up the Client (Frontend)

1. **Navigate to the `client` directory**:
   ```bash
   cd client
   ```

2. **Install the required Node.js packages**:
   ```bash
   npm install
   ```

3. **Run the React app in development mode**:
   ```bash
   npm run dev
   ```

   This will start the client on your local machine, typically at `http://localhost:5173` (or a similar port). You can access the app via your browser at the address provided.

---

### 2. Set Up the Server (Backend)

1. **Ensure Python 3.11.9 is installed** on your system. You can verify the version by running:
   ```bash
   python --version
   ```

2. **Navigate to the `server` directory** in a **new terminal**:
   ```bash
   cd server
   ```

3. **Set up a virtual environment** for the server:
   ```bash
   python -m venv venv
   ```

4. **Activate the virtual environment**:
   - On **Windows**:
     ```bash
     venv\Scripts\activate
     ```
   - On **macOS/Linux**:
     ```bash
     source venv/bin/activate
     ```

5. **Install the required Python packages**:
   ```bash
   pip install -r requirements.txt
   ```

6. **Run the Flask server**:
   ```bash
   python app.py
   ```

   This will start the server on your local machine, typically at `http://127.0.0.1:5000` or `http://localhost:5000`.

---

### 3. Connecting the Client and Server

Once both the client and server are running, they should be able to communicate with each other via HTTP requests. Ensure both are running in their respective terminals, and the client will be able to interact with the Flask backend.

---

### Troubleshooting

- **Node.js installation issues**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **Python version**: Ensure you are using Python 3.11.9, as this project relies on features and compatibility specific to that version.
- **Virtual environment activation issues**: If you're having trouble activating the virtual environment, ensure your terminal is pointing to the correct Python version and that the virtual environment was created successfully.

---

### Additional Notes

- Remember to **deactivate** your virtual environment when you're done working on the backend:
  ```bash
  deactivate
  ```

- Ensure that sensitive files like `.env` and virtual environments (`venv/`) are excluded from Git tracking. This project uses a `.gitignore` file to handle that automatically.

---

By following these instructions, you should be able to successfully set up and run both the frontend and backend for the Email Spam Detection Project.
