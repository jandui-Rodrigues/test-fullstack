import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from ".";

class SequelizeClient
  extends Model<
    InferAttributes<SequelizeClient>,
    InferCreationAttributes<SequelizeClient>
  > {
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare phone: string;
  declare CPF: string;
  declare status: string;
}

SequelizeClient.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CPF: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: "clients",
   timestamps: false,
});

export default SequelizeClient;
