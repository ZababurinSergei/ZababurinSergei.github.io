import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sourcesAttributes {
  id: number;
  uri: string;
}

export type sourcesPk = "id";
export type sourcesId = sources[sourcesPk];
export type sourcesCreationAttributes = sourcesAttributes;

export class sources extends Model<sourcesAttributes, sourcesCreationAttributes> implements sourcesAttributes {
  id!: number;
  uri!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof sources {
    return sources.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "sources_unique_uri"
    }
  }, {
    sequelize,
    tableName: 'sources',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sources_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sources_unique_uri",
        unique: true,
        fields: [
          { name: "uri" },
        ]
      },
    ]
  });
  }
}
