import React, { useState } from "react";

const questionAnswerPairs = [
  { question: "What is your name?", answer: "My name is Chatbot." },
  {
    question: "How can I help you?",
    answer: "I can assist you with your queries.",
  },
  { question: "What is the weather today?", answer: "The weather is sunny." },
];

const SimpleChatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatbotResponse, setChatbotResponse] = useState("");

  const findClosestMatch = (input) => {
    let bestMatch = null;
    let highestScore = 0;

    questionAnswerPairs.forEach((pair) => {
      const score = calculateMatchScore(input, pair.question);
      if (score > highestScore) {
        highestScore = score;
        bestMatch = pair;
      }
    });

    return bestMatch
      ? bestMatch.answer
      : "I'm sorry, I don't have an answer for that.";
  };

  const calculateMatchScore = (input, question) => {
    const inputWords = input.toLowerCase().split(" ");
    const questionWords = question.toLowerCase().split(" ");
    let score = 0;

    inputWords.forEach((word) => {
      if (questionWords.includes(word)) {
        score++;
      }
    });

    return score;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = findClosestMatch(userInput);
    setChatbotResponse(response);
    setUserInput("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Simple Chatbot</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask a question..."
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
      {chatbotResponse && (
        <div style={styles.responseContainer}>
          <p style={styles.responseLabelCSS}>Chatbot:</p>
          <p style={styles.responseTextCSS}>{chatbotResponse}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
  responseContainer: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "4px",
  },
  responseLabelCSS: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  responseTextCSS: {
    margin: "0",
  },
};

export default SimpleChatbot;
