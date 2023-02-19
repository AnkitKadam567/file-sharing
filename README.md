# File Sharing Web Application

This is a simple web application that allows users to upload and download files. It is built using Node.js, Express, and MongoDB.

## Getting started

To get started with the application, follow these steps:

1. Clone the repository:

```
git clone https://github.com/AnkitKadam567/file-sharing.git
```


2. Install the dependencies:

```
cd file-sharing
npm install
```

3. Start the server:
```
npm devstart
```

4. Open your web browser and go to `http://localhost:3000/file`.

## Usage

1. The home page of the application give option to upload a file and set password. Here the password will be store in hashed format
2. Once the upload is done user will get url with file id
3. user can use that url for downloading file

## Configuration

The application uses environment variables for configuration. The following variables are used:

- `PORT` - the port number that the server should listen on (default is `3000`).
- `MONGODB_URI` - the URI of the MongoDB database (default is `mongodb://localhost:27017/file-sharing`).

You can set these variables in a `.env` file in the root directory of the project.

## Contributing

If you find a bug or have an idea for a new feature, feel free to [open an issue](https://github.com/AnkitKadam567/file-sharing/issues/new) or submit a pull request. All contributions are welcome!
