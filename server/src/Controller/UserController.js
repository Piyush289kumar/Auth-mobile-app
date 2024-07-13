import { User } from "../Models/UserModel.js";

const registerUser = async (req, res) => {
  const { userName } = req.body;
  try {
    const result = await User.create({ userName });
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
};

export { registerUser };
