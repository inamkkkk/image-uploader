# Image Uploader API

A simple Node.js API for uploading images.

## Features

*   Upload images in multiple formats (JPEG, PNG, GIF).
*   Store images on the server's file system.
*   API endpoints for uploading and retrieving images.

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Install dependencies:

    
    npm install
    

3.  Configure environment variables (see `.env.example`).

4.  Run the server:

    
    npm start
    

## API Endpoints

*   `POST /api/upload`: Upload an image.
*   `GET /api/images/:filename`: Retrieve an image.

## Environment Variables

*   `PORT`: The port the server listens on (default: 3000).
*   `UPLOAD_DIR`: The directory to store uploaded images (default: ./uploads).
