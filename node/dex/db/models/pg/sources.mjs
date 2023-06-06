import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sources extends Model {
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
      unique: "sources_unique_uri"
    }
  }, {
    sequelize,
    tableName: 'sources',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sources_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sources_unique_uri",
        unique: true,
        fields: [
          { name: "uri" },
        ]
      },
    ]
  });
  }
}
