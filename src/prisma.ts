import { PrismaClient } from '../generated/prisma';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import dotenv from 'dotenv';
dotenv.config();

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST || '',
  port: Number(process.env.DB_PORT) || 3306,
  password: process.env.DB_PASSWORD || '',
  user: process.env.DB_USER || 'root',
  database: process.env.DB_DATABASE || '',
  connectionLimit: 15,
});

const prismaClient0 = new PrismaClient({
  adapter,
});

async function connectAndVerify() {
  try {
    // 尝试连接
    await prismaClient0.$connect();
    console.log('✅ Prisma Client 成功连接到数据库。');
  } catch (error) {
    console.error('❌ 数据库连接验证失败！');
    console.error('详细错误:', error instanceof Error ? error.message : '未知连接错误');
  } finally {
  }
}

(async () => {
  // 必须确保在导出 prisma 之前完成连接测试
  await connectAndVerify();
  console.log('--- 应用程序开始初始化... ---');
})();

export const prismaClient = prismaClient0;
