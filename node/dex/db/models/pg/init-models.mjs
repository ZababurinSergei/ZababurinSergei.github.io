import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _edge_features from  "./edge_features.mjs";
import _edges from  "./edges.mjs";
import _edges_gin from  "./edges_gin.mjs";
import _nodes from  "./nodes.mjs";
import _relations from  "./relations.mjs";
import _sources from  "./sources.mjs";

export default function initModels(sequelize) {
  const edge_features = _edge_features.init(sequelize, DataTypes);
  const edges = _edges.init(sequelize, DataTypes);
  const edges_gin = _edges_gin.init(sequelize, DataTypes);
  const nodes = _nodes.init(sequelize, DataTypes);
  const relations = _relations.init(sequelize, DataTypes);
  const sources = _sources.init(sequelize, DataTypes);

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
    edge_features,
    edges,
    edges_gin,
    nodes,
    relations,
    sources,
  };
}
