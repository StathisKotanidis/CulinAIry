import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState } from "react";
import BackButton from "../../ui/BackButton";

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      text: "Hello, I am Chef Crumb! How can I help you today?",
      sender: "bot",
    },
  ]);

  const handleSend = async (message) => {
    // Add the user's message to the conversation
    setMessages((prev) => [...prev, { text: message, sender: "user" }]);

    // Add a loading message while waiting for the bot's response
    setMessages((prev) => [
      ...prev,
      { text: "Chef Crumb is typing...", sender: "bot" },
    ]);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [
              // Start the conversation with the system message
              {
                role: "system",
                content:
                  "You are Chef Crumb, a helpful assistant specializing in cooking tips.",
              },
              // Include all previous messages to maintain the chat context
              ...messages.map((msg) => ({
                role: msg.sender === "user" ? "user" : "assistant",
                content: msg.text,
              })),
              // Add the new user message
              { role: "user", content: message },
            ],
          }),
        },
      );

      if (!response.ok) {
        const error = await response.json();
        console.error("API Error:", error);
        throw new Error(`Error ${response.status}: ${error.error.message}`);
      }

      const data = await response.json();
      const botMessage = data.choices[0].message.content;

      // Update the chat with the bot's response
      setMessages((prev) => [
        ...prev.slice(0, -1), // Remove "Chef Crumb is typing..." message
        { text: botMessage, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Fetch Error:", error);
      setMessages((prev) => [
        ...prev.slice(0, -1), // Remove "Chef Crumb is typing..." message
        {
          text: "Sorry, something went wrong. Please try again.",
          sender: "bot",
        },
      ]);
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center bg-eggplant p-4">
      <MainContainer className="main-chat-container-override">
        <ChatContainer>
          <MessageList>
            {messages.map((msg, index) => (
              <Message
                key={index}
                model={{
                  message: msg.text,
                  sentTime: "just now",
                  sender: msg.sender,
                  direction: msg.sender === "user" ? "outgoing" : "incoming",
                }}
              />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Ask Chef Crumb..."
            onSend={(message) => handleSend(message)}
          />
        </ChatContainer>
      </MainContainer>
      <BackButton />
    </div>
  );
}

export default ChatBox;
