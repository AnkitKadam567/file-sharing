const bcrypt = require("bcrypt");
const File = require("../model/File");

exports.renderHomePage = (req, res, next) => {
  res.render("home");
};

exports.handleDownload = async (req, res) => {
  const fileData = await File.findById(req.params["fileId"]);
  const reqPass = req.body.password;

  if (fileData.password != null && reqPass == null) {
    res.render("password");
    return;
  }

  if (!(await bcrypt.compare(reqPass, fileData.password))) {
    res.render("password", { error: true });
    return;
  }
  fileData.downloadCount++;
  await fileData.save();
  res.download(fileData.path, fileData.originalName);
};

exports.handleFileUpload = async (req, res, next) => {
  const fileData = {
    path: req.file.path,
    originalName: req.file.originalname,
  };

  const pass = req.body.password;

  if (pass !== null && pass !== "") {
    fileData.password = await bcrypt.hash(pass, 10);
  }

  const file = await File.create(fileData);

  res.render("home", { fileLink: `${req.headers.origin}/file/${file._id}` });
};
