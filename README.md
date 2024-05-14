# Open AI Messagin App

Clone the repository:
   ```bash
   git clone https://github.com/shaunak-09/Green_Brand_assign.git
   ```

## BACKEND

This is the backend directory for the project.

### Setup Instructions

1. Navigate to the backend directory:
   ```bash
   cd Green_Brand_assign/server
   ```
2. Install dependencies:
   ```bash
   npm i
   ```
3. Set up environment variables

   1. Create a `.env` file in the root of the backend directory.
   2. Add you MongoDB uri in MONGO_URI
   3. Go to <https://openrouter.ai/docs#quick-start> and create a free API Key   
   5. Add the following environment variables to the `.env` file:

   ```makefile
   MONGODB_URI=
   PORT=8080
   API_KEY=
   ```

   
4. Start the development server:
    ```bash
    npm run server
    ```

### Usage Guidelines
1. The backend server will run on port 8080 by default. You can change the port in the .env file if needed.
2. Ensure that the frontend application is configured to send requests to the correct backend URL.


## FRONTEND
  This is the frontend directory of the Project

  ### Setup Instructions

1. Navigate to the frontend directory:
   ```bash
   cd Green_Brand_assign/frontend
   ```
2. Install dependencies:
   ```bash
   npm i
   ```
3. Start the development client:
    ```bash
    npm start
    ```

### Usage Guidelines
1. The frontend client will run on port 3000 by default.



    
