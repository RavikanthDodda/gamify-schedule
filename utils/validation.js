const validation = {
  email: {
    presence: {
      allowEmpty: false,
      message: "^Please enter an email address",
    },
    email: {
      message: "^Please enter a valid email address",
    },
  },

  password: {
    presence: {
      message: "^Please enter a password",
    },
    length: {
      minimum: 8,
      message: "^Your password must be at least 5 characters",
    },
  },
};

export default validation;
