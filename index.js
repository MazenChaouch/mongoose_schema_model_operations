const connectToDb = require("./db");
const user = require("./user");

connectToDb();
const creatUser = () => {
  const userone = new user({
    firstName: "Mazen",
    lastName: "Chaouch",
    email: "  m.Chaouch@gmail.com  ",
    age: 25,
    hobbies: ["foot", "base"],
    role: "user",
    address: { city: "nabeul", zip: "8064" },
  });
  userone.save();
  console.log(userone);
};
creatUser();
const upadteUser = async () => {
  const updatedUser = await user.findByIdAndUpdate("67f50a01d5a395ae2885477e", {
    age: 21,
    createdAt: new Date(),
    UpdatedAt: new Date(),
  });
  updatedUser.save();
  console.log(updatedUser);
};
