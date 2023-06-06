import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class riders extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    JSON: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    change_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: "SET('NEW','SENT','PROPOSED','ACCEPTED','DISCUSSED','DELETED','PUBLIC')",
      allowNull: false,
      defaultValue: "new"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    published_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    version_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    origin_version_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    contact: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    band_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    band_logo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "\/img\/ridertext\/IMG-20180913-WA0005.jpg"
    }
  }, {
    sequelize,
    tableName: 'riders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
