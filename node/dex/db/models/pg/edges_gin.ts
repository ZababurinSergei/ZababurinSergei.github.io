import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { edges, edgesId } from './edges';

export interface edges_ginAttributes {
  edge_id: number;
  weight: number;
  data: object;
}

export type edges_ginCreationAttributes = edges_ginAttributes;

export class edges_gin extends Model<edges_ginAttributes, edges_ginCreationAttributes> implements edges_ginAttributes {
  edge_id!: number;
  weight!: number;
  data!: object;

  // edges_gin belongsTo edges via edge_id
  edge!: edges;
  getEdge!: Sequelize.BelongsToGetAssociationMixin<edges>;
  setEdge!: Sequelize.BelongsToSetAssociationMixin<edges, edgesId>;
  createEdge!: Sequelize.BelongsToCreateAssociationMixin<edges>;

  static initModel(sequelize: Sequelize.Sequelize): typeof edges_gin {
    return edges_gin.init({
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
