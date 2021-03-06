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

      message: "^Your password must be at least 8 characters",
    },
    // format: {
    //   pattern: "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/",

    //   message: "Not complex enough",
    // },
  },
};

export default validation;
