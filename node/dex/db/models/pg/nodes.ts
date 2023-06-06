import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { edge_features, edge_featuresId } from './edge_features';
import type { edges, edgesId } from './edges';

export interface nodesAttributes {
  id: number;
  uri: string;
}

export type nodesPk = "id";
export type nodesId = nodes[nodesPk];
export type nodesCreationAttributes = nodesAttributes;

export class nodes extends Model<nodesAttributes, nodesCreationAttributes> implements nodesAttributes {
  id!: number;
  uri!: string;

  // nodes hasMany edge_features via node_id
  edge_features!: edge_features[];
  getEdge_features!: Sequelize.HasManyGetAssociationsMixin<edge_features>;
  setEdge_features!: Sequelize.HasManySetAssociationsMixin<edge_features, edge_featuresId>;
  addEdge_feature!: Sequelize.HasManyAddAssociationMixin<edge_features, edge_featuresId>;
  addEdge_features!: Sequelize.HasManyAddAssociationsMixin<edge_features, edge_featuresId>;
  createEdge_feature!: Sequelize.HasManyCreateAssociationMixin<edge_features>;
  removeEdge_feature!: Sequelize.HasManyRemoveAssociationMixin<edge_features, edge_featuresId>;
  removeEdge_features!: Sequelize.HasManyRemoveAssociationsMixin<edge_features, edge_featuresId>;
  hasEdge_feature!: Sequelize.HasManyHasAssociationMixin<edge_features, edge_featuresId>;
  hasEdge_features!: Sequelize.HasManyHasAssociationsMixin<edge_features, edge_featuresId>;
  countEdge_features!: Sequelize.HasManyCountAssociationsMixin;
  // nodes hasMany edges via end_id
  edges!: edges[];
  getEdges!: Sequelize.HasManyGetAssociationsMixin<edges>;
  setEdges!: Sequelize.HasManySetAssociationsMixin<edges, edgesId>;
  addEdge!: Sequelize.HasManyAddAssociationMixin<edges, edgesId>;
  addEdges!: Sequelize.HasManyAddAssociationsMixin<edges, edgesId>;
  createEdge!: Sequelize.HasManyCreateAssociationMixin<edges>;
  removeEdge!: Sequelize.HasManyRemoveAssociationMixin<edges, edgesId>;
  removeEdges!: Sequelize.HasManyRemoveAssociationsMixin<edges, edgesId>;
  hasEdge!: Sequelize.HasManyHasAssociationMixin<edges, edgesId>;
  hasEdges!: Sequelize.HasManyHasAssociationsMixin<edges, edgesId>;
  countEdges!: Sequelize.HasManyCountAssociationsMixin;
  // nodes hasMany edges via start_id
  start_edges!: edges[];
  getStart_edges!: Sequelize.HasManyGetAssociationsMixin<edges>;
  setStart_edges!: Sequelize.HasManySetAssociationsMixin<edges, edgesId>;
  addStart_edge!: Sequelize.HasManyAddAssociationMixin<edges, edgesId>;
  addStart_edges!: Sequelize.HasManyAddAssociationsMixin<edges, edgesId>;
  createStart_edge!: Sequelize.HasManyCreateAssociationMixin<edges>;
  removeStart_edge!: Sequelize.HasManyRemoveAssociationMixin<edges, edgesId>;
  removeStart_edges!: Sequelize.HasManyRemoveAssociationsMixin<edges, edgesId>;
  hasStart_edge!: Sequelize.HasManyHasAssociationMixin<edges, edgesId>;
  hasStart_edges!: Sequelize.HasManyHasAssociationsMixin<edges, edgesId>;
  countStart_edges!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof nodes {
    return nodes.init({
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
