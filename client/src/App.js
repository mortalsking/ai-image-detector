import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:4000/upload";
      const response = await axios.post(
        apiUrl,
        formData
      );
      setResult(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Error analyzing image");
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🧠 AI Image Detector</h1>
        <p style={styles.subtitle}>
          Upload an image to check if it's AI-generated or real.
        </p>

        <div style={styles.uploadContainer}>
          <label style={styles.uploadBox}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            {file ? (
              <span style={styles.fileName}>{file.name}</span>
            ) : (
              "Click to upload image"
            )}
          </label>
        </div>

        <button style={styles.button} onClick={handleUpload}>
          {loading ? "Analyzing..." : "Analyze Image"}
        </button>

        {result && (
          <div style={styles.resultCard}>
            <h2
              style={{
                color:
                  result.prediction === "AI generated image"
                    ? "#ff4d4d"
                    : "#4CAF50",
              }}
            >
              {result.prediction}
            </h2>

            <div style={styles.progressBarContainer}>
              <div
                style={{
                  ...styles.progressBar,
                  width: `${result.confidence}%`,
                }}
              />
            </div>

            <p style={{ marginTop: "10px" }}>
              Confidence: {result.confidence}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  card: {
    background: "white",
    padding: "50px",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
  },
  title: {
    marginBottom: "10px",
    fontSize: "28px",
  },
  subtitle: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "30px",
  },
  uploadContainer: {
    marginBottom: "20px",
  },
  uploadBox: {
    display: "block",
    border: "2px dashed #aaa",
    padding: "25px",
    borderRadius: "12px",
    cursor: "pointer",
    wordBreak: "break-word",
    background: "#fafafa",
  },
  fileName: {
    fontSize: "14px",
    color: "#333",
  },
  button: {
    background: "#667eea",
    color: "white",
    padding: "14px 30px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
    marginTop: "10px",
  },
  resultCard: {
    marginTop: "30px",
    padding: "25px",
    borderRadius: "12px",
    background: "#f5f5f5",
  },
  progressBarContainer: {
    width: "100%",
    height: "12px",
    background: "#ddd",
    borderRadius: "10px",
    marginTop: "10px",
  },
  progressBar: {
    height: "100%",
    background: "linear-gradient(90deg, #4CAF50, #00c6ff)",
    borderRadius: "10px",
  },
};

export default App;