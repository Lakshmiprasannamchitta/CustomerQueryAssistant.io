
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
   ```

2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../server
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `server` directory.
   - Add the following details:
     ```plaintext
     OPENAI_API_KEY=your_openai_api_key
     INVENTORY_API_URL=your_inventory_api_url
     ```

5. Start the application:
   - Start the backend:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd ../client
     npm start
     ```

6. Access the application in your browser at `http://localhost:3000`.

## Usage

1. Launch the application and start a chat.
2. Ask questions about products, order statuses, refunds, or store policies.
3. View chat history and get personalized responses based on your queries.

## Contribution

We welcome contributions! Please fork the repository and submit a pull request with enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Developed by **Lakshmi Prasannam Chitta**.  
GitHub: [Lakshmiprasannamchitta](https://github.com/Lakshmiprasannamchitta)

---

Let me know if you need additional modifications or enhancements!
