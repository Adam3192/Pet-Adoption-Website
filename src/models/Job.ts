import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize'

export class Job extends Model<
  InferAttributes<Job>,
  InferCreationAttributes<Job>
> {
  declare jobId: number
  declare companyName: string
  declare jobTitle: string
  declare description: string
  declare yearsWorked: number
  declare createdAt?: Date
  declare updatedAt?: Date
}

export function JobFactory(sequelize: Sequelize) {
    Job.init(
      {
        jobId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        companyName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        jobTitle: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        yearsWorked: {
          type: DataTypes.INTEGER,
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
        tableName: 'jobs',
        sequelize,
      }
    )
  }