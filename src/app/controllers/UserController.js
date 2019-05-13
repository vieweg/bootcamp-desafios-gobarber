const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    try {
      const { filename } = req.file
      await User.create({ ...req.body, avatar: filename })
      return res.redirect('/')
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new UserController()
