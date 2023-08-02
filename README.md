# MERN Stack Notes Web App

This is a MERN (MongoDB, Express, React, Node.js) stack web application that allows users to create accounts, log in, save important notes, update them, and delete them as needed.

## Features

- **User Authentication**: Users can sign up and log in to access the notes functionality. Express Authenticator is used for user verification.
- **Create Account**: New users can easily create an account and start using the web app immediately.
- **Save Notes**: Once logged in, users can create and save important notes to the database.
- **Update Notes**: Users can edit and update their existing notes at any time.
- **Delete Notes**: Users have the option to delete their notes when they are no longer needed.

## Technologies Used

- **Frontend**: React with Bootstrap for UI and styling.
- **Backend**: Express.js to handle API requests and connect to the MongoDB database.
- **Database**: MongoDB to store user account information and notes data.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
```
git clone https://github.com/abdulmateenzwl/notebook.git
cd notebook 
```

2. Install dependencies for both frontend and backend:
```
npm install
cd Backend
npm install
```

3. Set up the MongoDB connection:
- Replace the MongoDB connection URI in `Backend/index.js` with your own MongoDB URL.

4. Run the development server:
```
npm run both
```

5. The frontend should be accessible at: `http://localhost:5173`

## Contributing

If you would like to contribute to this project, you can submit a pull request. Please ensure your code follows the coding conventions and is well-documented.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the MERN community and the developers of Express Authenticator for their excellent tools and libraries.

Feel free to modify this README file to include more specific details about your project or additional instructions for setting it up. Good luck with your MERN stack Notes Web App!
