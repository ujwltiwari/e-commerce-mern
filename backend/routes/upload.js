// // const express = require("express");
// // const fileUploader = require("../lib/fileUploader");
// // const router = express.Router();
// //
// // // POST => Add an item to the cart
// // router.post("/", async (req, res) => {
// //   console.log("request", req.file);
// //   const result = await fileUploader(req.file);
// //   console.log("result", result);
// //   return res.status(200).json(result);
// // });
// //
// // module.exports = router;
//
// const express = require("express");
// const multer = require("multer");
// const fileUploader = require("../lib/fileUploader");
// const router = express.Router();
//
// // Configure multer to store files
// const upload = multer({ dest: "uploads/" }); // 'uploads/' is the folder where the files will be saved
//
// // POST => Add an item to the cart
// router.post("/", async (req, res) => {
//   console.log("post request received", req);
//   console.log("request body", req.body); // Other form fields
//
//   // You can now process the file
//   // const result = await fileUploader(req.file.path); // Pass file path if you have custom file handling logic
//   // const result = { message: "File uploaded successfully", file: req.file };
//   const result = await fileUploader(req.body.file, req.body.filename);
//   return res.status(200).json(result);
// });
//
// module.exports = router;

const express = require("express");
const multer = require("multer");
const fileUploader = require("../lib/fileUploader");
const router = express.Router();

// Configure multer to handle file uploads
const upload = multer({ dest: "uploads/" }); // Files are temporarily saved in 'uploads/'

// POST => Handle file upload
router.post("/", upload.single("file"), async (req, res) => {
  try {
    console.log("File received:", req.file);

    // File info from multer
    const filePath = req.file.path;
    const fileName = req.file.originalname;

    // Upload the file to BunnyCDN
    const result = await fileUploader(filePath, fileName);
    console.log("Upload result:", result);

    return res
      .status(200)
      .json({ message: "File uploaded successfully", result });
  } catch (error) {
    console.error("Error uploading file:", error);
    return res.status(500).json({ message: "File upload failed", error });
  }
});

module.exports = router;
