import type { Sequelize } from "sequelize";
import { edge_features as _edge_features } from "./edge_features";
import type { edge_featuresAttributes, edge_featuresCreationAttributes } from "./edge_features";
import { edges as _edges } from "./edges";
import type { edgesAttributes, edgesCreationAttributes } from "./edges";
import { edges_gin as _edges_gin } from "./edges_gin";
import type { edges_ginAttributes, edges_ginCreationAttributes } from "./edges_gin";
import { nodes as _nodes } from "./nodes";
import type { nodesAttributes, nodesCreationAttributes } from "./nodes";
import { relations as _relations } from "./relations";
import type { relationsAttributes, relationsCreationAttributes } from "./relations";
import { sources as _sources } from "./sources";
import type { sourcesAttributes, sourcesCreationAttributes } from "./sources";

export {
  _edge_features as edge_features,
  _edges as edges,
  _edges_gin as edges_gin,
  _nodes as nodes,
  _relations as relations,
  _sources as sources,
};

export type {
  edge_featuresAttributes,
  edge_featuresCreationAttributes,
  edgesAttributes,
  edgesCreationAttributes,
  edges_ginAttributes,
  edges_ginCreationAttributes,
  nodesAttributes,
  nodesCreationAttributes,
  relationsAttributes,
  relationsCreationAttributes,
  sourcesAttributes,
  sourcesCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const edge_features = _edge_features.initModel(sequelize);
  const edges = _edges.initModel(sequelize);
  const edges_gin = _edges_gin.initModel(sequelize);
  const nodes = _nodes.initModel(sequelize);
  const relations = _relations.initModel(sequelize);
  const sources = _sources.initModel(sequelize);

  edge_features.belongsTo(edges, { as: "edge", foreignKey: "edge_id"});
  edges.hasMany(edge_features, { as: "edge_features", foreignKey: "edge_id"});
  edges_gin.belongsTo(edges, { as: "edge", foreignKey: "edge_id"});
  edges.hasMany(edges_gin, { as: "edges_gins", foreignKey: "edge_id"});
  edge_features.belongsTo(nodes, { as: "node", foreignKey: "node_id"});
  nodes.hasMany(edge_features, { as: "edge_features", foreignKey: "node_id"});
  edges.belongsTo(nodes, { as: "end", foreignKey: "end_id"});
  nodes.hasMany(edges, { as: "edges", foreignKey: "end_id"});
  edges.belongsTo(nodes, { as: "start", foreignKey: "start_id"});
  nodes.hasMany(edges, { as: "start_edges", foreignKey: "start_id"});
  edge_features.belongsTo(relations, { as: "rel", foreignKey: "rel_id"});
  relations.hasMany(edge_features, { as: "edge_features", foreignKey: "rel_id"});
  edges.belongsTo(relations, { as: "relation", foreignKey: "relation_id"});
  relations.hasMany(edges, { as: "edges", foreignKey: "relation_id"});

  return {
    edge_features: edge_features,
    edges: edges,
    edges_gin: edges_gin,
    nodes: nodes,
    relations: relations,
    sources: sources,
  };
}
