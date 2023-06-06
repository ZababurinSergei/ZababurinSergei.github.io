import {Sequelize, DataTypes} from "sequelize";
import Models from '../../models/mysql/init-models.mjs';


export default async () => {
    try {
        const sequelize = new Sequelize(
            'soundcheck',
            'root',
            'Gf68e^ej3l',
            {
                host: 'localhost',
                dialect: 'mysql'
            }
        );

        await sequelize.authenticate()
        const models = Models(sequelize)
        // const equipment = Equipment(soundcheck, DataTypes);
        return {
            sequelize: sequelize,
            models: models
        }
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}
