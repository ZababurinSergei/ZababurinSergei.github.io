import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class relations extends Model {
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
      unique: "relations_unique_uri"
    },
    directed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'relations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "relations_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "relations_unique_uri",
        unique: true,
        fields: [
          { name: "uri" },
        ]
      },
    ]
  });
  }
}
