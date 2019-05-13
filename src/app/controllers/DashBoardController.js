const { User, Appointment } = require('../models')

class DashBoardController {
  async indexUser (req, res) {
    const { user } = req.session

    try {
      const providers = await User.findAll({ where: { provider: true } })

      const appointments = await Appointment.findAll({
        where: { user_id: user.id }
      })

      const schedules = await Promise.all(
        appointments.map(async appointment => {
          const providerAppointment = await User.findByPk(
            appointment.provider_id
          )
          return { provider: providerAppointment, appointment }
        })
      )

      return res.render('dashboard/user', { schedules, providers })
    } catch (error) {
      console.log(error.message)
      return res.redirect('/app/logout')
    }
  }

  async indexProvider (req, res) {
    const { user } = req.session

    try {
      const appointments = await Appointment.findAll({
        where: { provider_id: user.id }
      })

      const schedules = await Promise.all(
        appointments.map(async appointment => {
          const userAppointment = await User.findByPk(appointment.user_id)
          return { user: userAppointment, appointment }
        })
      )

      return res.render('dashboard/provider', { schedules })
    } catch (error) {
      console.log(error.message)
      return res.redirect('/app/logout')
    }
  }
}

module.exports = new DashBoardController()
