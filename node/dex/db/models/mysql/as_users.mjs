import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class as_users extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: "username"
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    confirmation_key: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    confirmed: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false,
      defaultValue: "N"
    },
    password_reset_key: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    password_reset_confirmed: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false,
      defaultValue: "N"
    },
    password_reset_timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    register_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    user_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    banned: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'as_users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "username",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
  }
}
