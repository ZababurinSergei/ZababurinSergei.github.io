import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class edges_gin extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    edge_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'edges',
        key: 'id'
      }
    },
    weight: {
      type: DataTypes.REAL,
      allowNull: false
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'edges_gin',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "edges_gin_index",
        fields: [
          { name: "data" },
        ]
      },
    ]
  });
  }
}
