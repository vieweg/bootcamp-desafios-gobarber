module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    'Appointment',
    {
      date: DataTypes.DATE,
      user_id: DataTypes.INTEGER,
      provider_id: DataTypes.INTEGER
    },
    {
      associate: function (models) {
        Appointment.belongsTo(models.User, {
          foreingKey: 'user_id',
          as: 'user'
        })
        Appointment.belongsTo(models.User, {
          foreingKey: 'provider_id',
          as: 'provider'
        })
      }
    }
  )

  return Appointment
}
