import {
 DataTypes,
 InferAttributes,
 InferCreationAttributes,
 Model,
 Sequelize,
} from 'sequelize'

export class Pet extends Model<
 InferAttributes<Pet>,
 InferCreationAttributes<Pet>
> {
 declare petId: number
 declare petName: string
 declare imgUrl: string
 declare description: string
 declare createdAt?: Date
 declare updatedAt?: Date
}

export function PetFactory(sequelize: Sequelize) {
   Pet.init(
     {
       petId: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false,
       },
       petName: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       imgUrl: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       description: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       createdAt: {
         type: DataTypes.DATE,
         allowNull: false,
         defaultValue: DataTypes.NOW,
       },
       updatedAt: {
         type: DataTypes.DATE,
         allowNull: false,
         defaultValue: DataTypes.NOW,
       },
     },
     {
       freezeTableName: true,
       tableName: 'pets',
       sequelize,
     }
   )
 }