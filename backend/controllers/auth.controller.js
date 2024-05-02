export const signup = (req, res) => {
  try {
    const { name, username, password, confirmPassword, email } = req.body;
  } catch {}
};

export const login = (req, res) => {
  console.log("Login User");
};

export const logout = (req, res) => {
  console.log("logout");
};
