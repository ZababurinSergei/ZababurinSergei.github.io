import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class edges extends Model {
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
      unique: "edges_unique_uri"
    },
    relation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'relations',
        key: 'id'
      }
    },
    start_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nodes',
        key: 'id'
      }
    },
    end_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nodes',
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
    tableName: 'edges',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "edge_end",
        fields: [
          { name: "end_id" },
        ]
      },
      {
        name: "edge_relation",
        fields: [
          { name: "relation_id" },
        ]
      },
      {
        name: "edge_start",
        fields: [
          { name: "start_id" },
        ]
      },
      {
        name: "edge_weight",
        fields: [
          { name: "weight" },
        ]
      },
      {
        name: "edges_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "edges_unique_uri",
        unique: true,
        fields: [
          { name: "uri" },
        ]
      },
    ]
  });
  }
}
