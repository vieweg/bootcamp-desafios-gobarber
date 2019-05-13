const { User, Appointment } = require('../models')

class AppointmentController {
  async create (req, res) {
    const { id } = req.params
    const provider = await User.findByPk(id)
    return res.render('dashboard/appointments', { provider })
  }

  async store (req, res) {
    const { id: idUsuario } = req.session.user
    const { id: idProvider } = req.params
    const { date } = req.body

    try {
      await Appointment.create({
        user_id: idUsuario,
        provider_id: idProvider,
        date
      })
    } catch (error) {
      console.log(error)
    }

    return res.redirect('/app/dashboard')
  }

  async destroy (req, res) {
    const { id } = req.params
    try {
      const appointment = await Appointment.findByPk(id)
      await appointment.destroy()
    } catch (error) {
      console.log('Entidade não removida')
    }
    return res.redirect('/app/dashboard')
  }
}

module.exports = new AppointmentController()
