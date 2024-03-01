export const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return usernameRegex.test(username);
  };
  
  export const validatePassword = (password) => {
    // Password must contain at least 1 uppercase letter, 1 digit, 1 special character, and be at least 8 characters long
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };
  