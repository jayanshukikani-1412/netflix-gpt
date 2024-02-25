# Netflix GPT

- URL: https://netflixgpt-87f17.web.app

# NPM Installed Library

- React-Router-Dom : For routing among different pages
- Formik : For form handling
- Yup : For form validation
- React-icons : For use of different icons
- Firebase : For authentication
- Redux Toolkit : For state management in application
- React Redux : For Redux working with React
- React Toastify : For display notifications in toast box
- axios : For making api calls

# Features

- Signin/SignUp
  - Two form using one component and usage of formik and yup
  - create common input and button as component
  - rememberme functionality - store in cache
  - Protected routing implementation
  - logged user data store in redux store
  - logout functionality
- Home page
  - Header
    - Username | User Profile | Logout button
  - Main Movie
    - Trailer in background
      - Creating custom hook for getting youtube key for play video
    - Title and Description
      - Creating custom hook for getting list of now playing movie from TMDB and show one of the movie's details
  - Movie suggestions lists
- netflix GPT
  - Multi language is also supported in this page
  - SearchBar
  - Movie suggestions based on search from chat gpt
