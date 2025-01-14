# CustomerQueryAssistant.io
# AI-Powered Customer Query Assistant

**AI-Powered Customer Query Assistant** is a ChatGPT-driven chatbot designed to efficiently handle customer inquiries. This intelligent system provides real-time answers about products, order statuses, refunds, and store policies, enhancing customer support through automation and personalization.

## Features

- **Real-Time Responses:** Delivers accurate and natural language answers for frequently asked questions.
- **Product Inventory Integration:** Connects with inventory APIs to provide personalized and up-to-date product details.
- **Interactive Chat Interface:** 
  - React-based user interface with typing indicators.
  - Chat history for seamless conversation tracking.
- **Efficient Backend Management:** 
  - Node.js backend to handle ChatGPT API calls.
  - User session management for tailored experiences.

## Technologies Used

- **Frontend:**
  - React.js
  - HTML, CSS
- **Backend:**
  - Node.js
  - Express.js
- **API:**
  - OpenAI GPT Models
  - Product Inventory APIs
- **Deployment:**
  - Docker
  - AWS/GCP/Azure

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Lakshmiprasannamchitta/CustomerQueryAssistant.io.git
   cd CustomerQueryAssistant.io
Install frontend dependencies:

bash
Copy code
cd client
npm install
Install backend dependencies:

bash
Copy code
cd ../server
npm install
Set up environment variables:

Create a .env file in the server directory.
Add the following details:
plaintext
Copy code
OPENAI_API_KEY=your_openai_api_key
INVENTORY_API_URL=your_inventory_api_url
Start the application:

Start the backend:
bash
Copy code
cd server
npm start
Start the frontend:
bash
Copy code
cd ../client
npm start
Access the application in your browser at http://localhost:3000.

Usage
Launch the application and start a chat.
Ask questions about products, order statuses, refunds, or store policies.
View chat history and get personalized responses based on your queries.
Contribution
We welcome contributions! Please fork the repository and submit a pull request with enhancements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Author
Developed by Lakshmi Prasannam Chitta.
GitHub: Lakshmiprasannamchitta
