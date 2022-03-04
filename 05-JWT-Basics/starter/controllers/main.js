const login = async (req, res) => {
  res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.ceil(Math.random() * 100)
  res.status(200).json({
    msg: `Hello, John Doe`, secret: `Here is your authorized data, youur lucky
  number is ${luckyNumber}`
  })
}

module.exports = { login, dashboard };