import { User } from "../Models/UserModel.js";

const registerUser = async (req, res) => {
  const { userName } = req.body;

  try {
    const newUser = await User.create({ userName });
  } catch (error) {}
  res.json({
    userName,
  });
};

export { registerUser };
