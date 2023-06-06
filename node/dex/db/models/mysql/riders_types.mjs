import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class riders_types extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    rider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'riders_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rider_id" },
          { name: "type_id" },
        ]
      },
    ]
  });
  }
}
