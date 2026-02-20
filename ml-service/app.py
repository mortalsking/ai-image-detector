from flask import Flask, request, jsonify
import os

from transformers import pipeline
from PIL import Image

app = Flask(__name__)

# Load CLIP zero-shot classifier
classifier = pipeline(
    "zero-shot-image-classification",
    model="openai/clip-vit-base-patch32"
)

labels = ["real photograph", "AI generated image"]

@app.route("/analyze", methods=["POST"])
def analyze():
    file = request.files["file"]
    image = Image.open(file).convert("RGB")

    result = classifier(image, candidate_labels=labels)

    top_result = result[0]

    prediction = top_result["label"]
    confidence = round(top_result["score"] * 100, 2)

    return jsonify({
        "prediction": prediction,
        "confidence": confidence
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
