import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { edge_features, edge_featuresId } from './edge_features';
import type { edges_gin, edges_ginId } from './edges_gin';
import type { nodes, nodesId } from './nodes';
import type { relations, relationsId } from './relations';

export interface edgesAttributes {
  id: number;
  uri: string;
  relation_id: number;
  start_id: number;
  end_id: number;
  weight: number;
  data: object;
}

export type edgesPk = "id";
export type edgesId = edges[edgesPk];
export type edgesCreationAttributes = edgesAttributes;

export class edges extends Model<edgesAttributes, edgesCreationAttributes> implements edgesAttributes {
  id!: number;
  uri!: string;
  relation_id!: number;
  start_id!: number;
  end_id!: number;
  weight!: number;
  data!: object;

  // edges hasMany edge_features via edge_id
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
  // edges hasMany edges_gin via edge_id
  edges_gins!: edges_gin[];
  getEdges_gins!: Sequelize.HasManyGetAssociationsMixin<edges_gin>;
  setEdges_gins!: Sequelize.HasManySetAssociationsMixin<edges_gin, edges_ginId>;
  addEdges_gin!: Sequelize.HasManyAddAssociationMixin<edges_gin, edges_ginId>;
  addEdges_gins!: Sequelize.HasManyAddAssociationsMixin<edges_gin, edges_ginId>;
  createEdges_gin!: Sequelize.HasManyCreateAssociationMixin<edges_gin>;
  removeEdges_gin!: Sequelize.HasManyRemoveAssociationMixin<edges_gin, edges_ginId>;
  removeEdges_gins!: Sequelize.HasManyRemoveAssociationsMixin<edges_gin, edges_ginId>;
  hasEdges_gin!: Sequelize.HasManyHasAssociationMixin<edges_gin, edges_ginId>;
  hasEdges_gins!: Sequelize.HasManyHasAssociationsMixin<edges_gin, edges_ginId>;
  countEdges_gins!: Sequelize.HasManyCountAssociationsMixin;
  // edges belongsTo nodes via end_id
  end!: nodes;
  getEnd!: Sequelize.BelongsToGetAssociationMixin<nodes>;
  setEnd!: Sequelize.BelongsToSetAssociationMixin<nodes, nodesId>;
  createEnd!: Sequelize.BelongsToCreateAssociationMixin<nodes>;
  // edges belongsTo nodes via start_id
  start!: nodes;
  getStart!: Sequelize.BelongsToGetAssociationMixin<nodes>;
  setStart!: Sequelize.BelongsToSetAssociationMixin<nodes, nodesId>;
  createStart!: Sequelize.BelongsToCreateAssociationMixin<nodes>;
  // edges belongsTo relations via relation_id
  relation!: relations;
  getRelation!: Sequelize.BelongsToGetAssociationMixin<relations>;
  setRelation!: Sequelize.BelongsToSetAssociationMixin<relations, relationsId>;
  createRelation!: Sequelize.BelongsToCreateAssociationMixin<relations>;

  static initModel(sequelize: Sequelize.Sequelize): typeof edges {
    return edges.init({
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
