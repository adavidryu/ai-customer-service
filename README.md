# Headstarter Support Chat

This is a full-stack web application built with Next.js and Node.js that provides a chat interface for a Headstarter support agent. Users can send messages, and the assistant will respond with the appropriate information using the OpenAI API.

## Features

- Users can send messages to the support agent
- The support agent responds with relevant information generated using the OpenAI API
- Messages are displayed in a chat-style interface
- Users can press Enter to send a message, or click the "Send" button
- The application uses server-side rendering with Next.js for improved performance and SEO
- The backend is built with Node.js and Express.js

## How to Use

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` in the project directory.
3. Create an account on the OpenAI platform and obtain an API key.
4. Create a `.env` file in the project directory and add your OpenAI API key as `OPENAI_API_KEY`.
5. Start the development server by running `npm run dev`.
6. Open your web browser and navigate to `http://localhost:3000`.
7. Start chatting with the support agent!

## Technologies Used

- Next.js
- Node.js
- Express.js
- Material-UI
- OpenAI API

## Limitations

This is a basic implementation and does not include advanced features such as user authentication, message history persistence, or integration with a more robust backend. It is intended as a demonstration of a chat interface powered by the OpenAI API and built with Next.js and Node.js.