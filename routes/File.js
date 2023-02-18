const express = require("express");
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads" });

const controller = require("../controller/File");

router.get("/", controller.renderHomePage);

router.post("/upload", upload.single("file"), controller.handleFileUpload);

router
  .route("/:fileId")
  .get(controller.handleDownload)
  .post(controller.handleDownload);

module.exports = router;
