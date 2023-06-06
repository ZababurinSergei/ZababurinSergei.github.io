import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { edges, edgesId } from './edges';
import type { nodes, nodesId } from './nodes';
import type { relations, relationsId } from './relations';

export interface edge_featuresAttributes {
  rel_id: number;
  direction: number;
  node_id: number;
  edge_id: number;
}

export type edge_featuresCreationAttributes = edge_featuresAttributes;

export class edge_features extends Model<edge_featuresAttributes, edge_featuresCreationAttributes> implements edge_featuresAttributes {
  rel_id!: number;
  direction!: number;
  node_id!: number;
  edge_id!: number;

  // edge_features belongsTo edges via edge_id
  edge!: edges;
  getEdge!: Sequelize.BelongsToGetAssociationMixin<edges>;
  setEdge!: Sequelize.BelongsToSetAssociationMixin<edges, edgesId>;
  createEdge!: Sequelize.BelongsToCreateAssociationMixin<edges>;
  // edge_features belongsTo nodes via node_id
  node!: nodes;
  getNode!: Sequelize.BelongsToGetAssociationMixin<nodes>;
  setNode!: Sequelize.BelongsToSetAssociationMixin<nodes, nodesId>;
  createNode!: Sequelize.BelongsToCreateAssociationMixin<nodes>;
  // edge_features belongsTo relations via rel_id
  rel!: relations;
  getRel!: Sequelize.BelongsToGetAssociationMixin<relations>;
  setRel!: Sequelize.BelongsToSetAssociationMixin<relations, relationsId>;
  createRel!: Sequelize.BelongsToCreateAssociationMixin<relations>;

  static initModel(sequelize: Sequelize.Sequelize): typeof edge_features {
    return edge_features.init({
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
