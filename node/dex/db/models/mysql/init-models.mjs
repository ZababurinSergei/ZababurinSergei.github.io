import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _as_comments from  "./as_comments.mjs";
import _as_login_attempts from  "./as_login_attempts.mjs";
import _as_social_logins from  "./as_social_logins.mjs";
import _as_user_details from  "./as_user_details.mjs";
import _as_user_roles from  "./as_user_roles.mjs";
import _as_users from  "./as_users.mjs";
import _equipment from  "./equipment.mjs";
import _equipment_categories from  "./equipment_categories.mjs";
import _equipment_types from  "./equipment_types.mjs";
import _events from  "./events.mjs";
import _manufacturers from  "./manufacturers.mjs";
import _menu_categories from  "./menu_categories.mjs";
import _menu_presets from  "./menu_presets.mjs";
import _menu_presets_categories from  "./menu_presets_categories.mjs";
import _menu_presets_tags from  "./menu_presets_tags.mjs";
import _menu_tags from  "./menu_tags.mjs";
import _models_3d from  "./models_3d.mjs";
import _rider_types from  "./rider_types.mjs";
import _riders from  "./riders.mjs";
import _riders_types from  "./riders_types.mjs";
import _venues from  "./venues.mjs";

export default function initModels(sequelize) {
  const As_comments = _as_comments.init(sequelize, DataTypes);
  const As_login_attempts = _as_login_attempts.init(sequelize, DataTypes);
  const As_social_logins = _as_social_logins.init(sequelize, DataTypes);
  const As_user_details = _as_user_details.init(sequelize, DataTypes);
  const As_user_roles = _as_user_roles.init(sequelize, DataTypes);
  const As_users = _as_users.init(sequelize, DataTypes);
  const Equipment = _equipment.init(sequelize, DataTypes);
  const Equipment_categories = _equipment_categories.init(sequelize, DataTypes);
  const Equipment_types = _equipment_types.init(sequelize, DataTypes);
  const Events = _events.init(sequelize, DataTypes);
  const Manufacturers = _manufacturers.init(sequelize, DataTypes);
  const Menu_categories = _menu_categories.init(sequelize, DataTypes);
  const Menu_presets = _menu_presets.init(sequelize, DataTypes);
  const Menu_presets_categories = _menu_presets_categories.init(sequelize, DataTypes);
  const Menu_presets_tags = _menu_presets_tags.init(sequelize, DataTypes);
  const Menu_tags = _menu_tags.init(sequelize, DataTypes);
  const Models_3d = _models_3d.init(sequelize, DataTypes);
  const Rider_types = _rider_types.init(sequelize, DataTypes);
  const Riders = _riders.init(sequelize, DataTypes);
  const Riders_types = _riders_types.init(sequelize, DataTypes);
  const Venues = _venues.init(sequelize, DataTypes);


  return {
    As_comments,
    As_login_attempts,
    As_social_logins,
    As_user_details,
    As_user_roles,
    As_users,
    Equipment,
    Equipment_categories,
    Equipment_types,
    Events,
    Manufacturers,
    Menu_categories,
    Menu_presets,
    Menu_presets_categories,
    Menu_presets_tags,
    Menu_tags,
    Models_3d,
    Rider_types,
    Riders,
    Riders_types,
    Venues,
  };
}
