File Sharing Web Application
This is a simple web application that allows users to upload and download files. It is built using Node.js, Express, and MongoDB.

Getting started
To get started with the application, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/AnkitKadam567/file-sharing.git
Install the dependencies:

bash
Copy code
cd file-sharing
npm install
Start the server:

sql
Copy code
npm start
Open your web browser and go to http://localhost:3000.

Usage
The home page of the application displays a list of all the files that have been uploaded.

To upload a file, click on the "Upload" button on the home page and select the file you want to upload.

To download a file, click on its name in the list on the home page.

To delete a file, click on its "Delete" button in the list on the home page.

Configuration
The application uses environment variables for configuration. The following variables are used:

PORT - the port number that the server should listen on (default is 3000).
MONGODB_URI - the URI of the MongoDB database (default is mongodb://localhost:27017/file-sharing).
You can set these variables in a .env file in the root directory of the project.
