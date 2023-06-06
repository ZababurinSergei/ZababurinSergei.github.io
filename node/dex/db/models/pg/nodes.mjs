import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class nodes extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "nodes_unique_uri"
    }
  }, {
    sequelize,
    tableName: 'nodes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "nodes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "nodes_unique_uri",
        unique: true,
        fields: [
          { name: "uri" },
        ]
      },
    ]
  });
  }
}
