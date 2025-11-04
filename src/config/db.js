import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

// Kết nối bằng DATABASE_URL do Render cấp
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true, // bắt buộc với Render
      rejectUnauthorized: false, // bỏ verify chứng chỉ
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
});

export default sequelize;
