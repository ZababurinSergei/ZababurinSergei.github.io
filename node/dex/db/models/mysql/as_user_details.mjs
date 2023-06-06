import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class as_user_details extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_user_details: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(35),
      allowNull: false,
      defaultValue: ""
    },
    last_name: {
      type: DataTypes.STRING(35),
      allowNull: false,
      defaultValue: ""
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    band_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    band_logo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "'\/img\/ridertext\/Bel_KIRP.jpg'"
    },
    public_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    private_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_rentcompany: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    basic_location: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    basic_location_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    basic_location_radius: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    }
  }, {
    sequelize,
    tableName: 'as_user_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_user_details" },
        ]
      },
    ]
  });
  }
}
