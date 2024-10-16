import React, { useState } from "react";

const StringNormalizer = () => {
  const [inputString, setInputString] = useState("");
  const [normalizedString, setNormalizedString] = useState("");

  const normalizeString = (str) => {
    // Step 1: Remove extra spaces from beginning and end
    str = str.trim();

    // Step 2: Remove special characters and punctuation
    str = str.replace(/[^a-zA-Z0-9\s]/g, "");

    // Step 3: Replace multiple spaces with a single space
    str = str.replace(/\s+/g, " ");

    // Step 4: Convert to camel case
    str = str.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

    return str;
  };

  const handleInputChange = (e) => {
    setInputString(e.target.value);
  };

  const handleNormalize = () => {
    setNormalizedString(normalizeString(inputString));
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
    result: {
      marginTop: "20px",
    },
    resultHeading: {
      fontSize: "18px",
      marginBottom: "10px",
      color: "#333",
    },
    resultText: {
      backgroundColor: "#f0f0f0",
      padding: "10px",
      borderRadius: "4px",
      wordBreak: "break-all",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>String Normalizer</h1>
      <input
        type="text"
        value={inputString}
        onChange={handleInputChange}
        placeholder="Enter a string to normalize"
        style={styles.input}
      />
      <button onClick={handleNormalize} style={styles.button}>
        Normalize
      </button>
      {normalizedString && (
        <div style={styles.result}>
          <h2 style={styles.resultHeading}>Normalized String:</h2>
          <p style={styles.resultText}>{normalizedString}</p>
        </div>
      )}
    </div>
  );
};

export default StringNormalizer;
