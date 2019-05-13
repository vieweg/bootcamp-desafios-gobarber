const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const authMiddleware = require('./app/middleware/auth')
const guestMiddleware = require('./app/middleware/quest')
const userProviderMiddleware = require('./app/middleware/userProvider')
const providerUserMiddleware = require('./app/middleware/providerUser')

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const DashBoardController = require('./app/controllers/DashBoardController')
const FileController = require('./app/controllers/FileController')
const AppointmentController = require('./app/controllers/AppointmentController')
const AvailableController = require('./app/controllers/AvailableController')

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success')
  res.locals.flashError = req.flash('error')

  return next()
})

routes.get('/', guestMiddleware, SessionController.create)

routes.get('/signup', guestMiddleware, UserController.create)
routes.post(
  '/signup',
  guestMiddleware,
  upload.single('avatar'),
  UserController.store
)

routes.get('/files/:file', FileController.show)

routes.post('/signin', guestMiddleware, SessionController.store)

routes.use('/app', authMiddleware)

routes.get(
  '/app/dashboard',
  userProviderMiddleware,
  DashBoardController.indexUser
)
routes.get(
  '/app/dashboard/provider',
  providerUserMiddleware,
  DashBoardController.indexProvider
)

routes.get('/app/logout', SessionController.destroy)

routes.get('/app/appointments/new/:id', AppointmentController.create)

routes.post('/app/appointments/new/:id', AppointmentController.store)

routes.get('/app/appointments/drop/:id', AppointmentController.destroy)

routes.get('/app/available/:id', AvailableController.index)

module.exports = routes
