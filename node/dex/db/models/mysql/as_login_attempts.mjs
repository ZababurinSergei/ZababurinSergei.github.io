import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class as_login_attempts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_login_attempts: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ip_addr: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    attempt_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'as_login_attempts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_login_attempts" },
        ]
      },
    ]
  });
  }
}
