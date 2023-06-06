import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class menu_presets_tags extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    preset_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'menu_presets_tags',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "preset_id" },
          { name: "tag_id" },
        ]
      },
    ]
  });
  }
}
