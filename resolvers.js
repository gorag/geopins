const user = {
  _id: "1",
  name: "Alex",
  email: "alex@mail.ru",
  picture: "https://cloudinary.com/asdf"
};

module.exports = {
  Query: {
    me: () => user
  }
};