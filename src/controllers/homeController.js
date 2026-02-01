const getHomePage = (req, res) => {
  res.send("Hello World");
};

const getAbc = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getAbc,
};
