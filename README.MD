# 🤖 AI Image Detector

AI Image Detector is a web application that detects whether an image is *AI-generated* or *real (human-captured)* using deep learning techniques.

---

## 🚀 Features

- Upload an image for detection
- Fast prediction results
- Displays confidence score
- Supports JPG, JPEG, PNG formats
- Clean and simple UI

---

## 🛠 Tech Stack

*Frontend:* React.js, HTML, CSS, JavaScript  
*Backend:* Node.js, Express.js  
*AI/ML:* Python, TensorFlow / PyTorch  

---

## 📂 Project Structure

ai-image-detector/
├── client/        # React frontend
├── server/        # Node.js backend
├── model/         # ML model files
├── uploads/       # Uploaded images
├── package.json
└── README.md

---

## ⚙️ Installation

### 1. Clone the repository

git clone https://github.com/your-username/ai-image-detector.git  
cd ai-image-detector  

### 2. Setup Backend

cd server  
npm install  
npm start  

### 3. Setup Frontend

cd client  
npm install  
npm start  

### 4. Run ML Model (if separate service)

pip install -r requirements.txt  
python app.py  

---

## 🧠 How It Works

1. User uploads an image.
2. Image is sent to backend.
3. ML model analyzes patterns and artifacts.
4. Model predicts:
   - Real Image
   - AI Generated Image
5. Result is returned with confidence score.

---

## 📌 Use Cases

- Detecting fake social media images
- News/media verification
- Digital forensics
- Content moderation

---

## 📜 License

MIT License

---

## 👨‍💻 Author

TEAM NAME - Phoenix
B.E. Computer Science & Engineering