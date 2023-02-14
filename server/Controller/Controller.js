import taskuser from "../Schema/schema.js";

export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new taskuser(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const userLogin = async (req, res) => {
  const userdetail = req.body;
  const { email, password } = req.body;
  try {
    const userexist = await taskuser.findOne({ email });
    // const password = await taskuser.findOne({ password });

    if (!userexist) {
      return res.status(404).json({ message: "usr not found" });
    }

    res.status(200).json({ user: userexist.email, email: userexist.password });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getUser = async (req, res) => {
  try {
    let data = await taskuser.find();
    res.send(data);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
