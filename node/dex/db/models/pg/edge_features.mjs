import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class edge_features extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    rel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'relations',
        key: 'id'
      }
    },
    direction: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    node_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nodes',
        key: 'id'
      }
    },
    edge_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'edges',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'edge_features',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ef_feature",
        fields: [
          { name: "rel_id" },
          { name: "direction" },
          { name: "node_id" },
        ]
      },
      {
        name: "ef_node",
        fields: [
          { name: "node_id" },
        ]
      },
    ]
  });
  }
}
