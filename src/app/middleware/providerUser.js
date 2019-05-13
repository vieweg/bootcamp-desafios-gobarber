module.exports = (req, res, next) => {
  const { user } = req.session

  if (!user.provider) return res.redirect('/app/dashboard')

  return next()
}
