const express = require("express");
const multer = require("multer");
const axios = require("axios");
const cors = require("cors");
const FormData = require("form-data");
const fs = require("fs");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path;

    const formData = new FormData();
    formData.append("file", fs.createReadStream(filePath));

    const response = await axios.post(
      process.env.ML_SERVICE_URL || "http://127.0.0.1:5000/analyze",
      formData,
      { headers: formData.getHeaders() }
    );


    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error analyzing image" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
