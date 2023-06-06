import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { edge_features, edge_featuresId } from './edge_features';
import type { edges, edgesId } from './edges';

export interface relationsAttributes {
  id: number;
  uri: string;
  directed: boolean;
}

export type relationsPk = "id";
export type relationsId = relations[relationsPk];
export type relationsCreationAttributes = relationsAttributes;

export class relations extends Model<relationsAttributes, relationsCreationAttributes> implements relationsAttributes {
  id!: number;
  uri!: string;
  directed!: boolean;

  // relations hasMany edge_features via rel_id
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
  // relations hasMany edges via relation_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof relations {
    return relations.init({
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
