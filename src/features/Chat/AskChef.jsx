import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"; // Import styles
import { useState } from "react";

function AskChef() {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages((prev) => [...prev, { text: message, sender: "user" }]);

    // Simulate a bot response (replace with OpenAI API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: `You said: ${message}`, sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <MainContainer>
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
          placeholder="Type your message..."
          onSend={(message) => handleSend(message)}
        />
      </ChatContainer>
    </MainContainer>
  );
}

export default AskChef;
