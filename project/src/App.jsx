import { useState } from "react";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([
    {
      text: "🏏 Hello! I'm your Cricket Bot assistant. How can I help you today? Whether it's match predictions, player stats, or cricket strategies, I'm here to assist!",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const callMLModel = {};

  function handleSubmit() {
    messages.push();
  }

  return (
    <div>
      <header className="header">
        <h1>🏏 Cricket Bot Assistant</h1>
        <p>
          Your AI-powered cricket expert for match analysis, player stats, and
          game strategies
        </p>
      </header>

      <div className="container">
        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.isBot ? "bot-message" : "user-message"
                }`}
              >
                {message.text}
              </div>
            ))}
            {isLoading && (
              <div className="message bot-message">
                <div className="loading-indicator">
                  Analyzing your query... 🏏
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about matches, players, statistics..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              Send
              <span>🏏</span>
            </button>
          </form>
        </div>

        <div className="features">
          <div className="feature-card">
            <h3>🎯 Match Predictions</h3>
            <p>
              Get AI-powered predictions and analysis for upcoming cricket
              matches based on historical data and current form
            </p>
          </div>
          <div className="feature-card">
            <h3>📊 Player Stats</h3>
            <p>
              Access comprehensive statistics, performance metrics, and detailed
              analysis of cricket players worldwide
            </p>
          </div>
          <div className="feature-card">
            <h3>⚡ Strategy Insights</h3>
            <p>
              Receive expert tactical recommendations, field placements, and
              game strategies based on match situations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
