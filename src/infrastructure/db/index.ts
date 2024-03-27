import { PrismaClient } from '@prisma/client';

const db = new PrismaClient({
  log: ['query', 'error'],
});

db.$use(async (params, next) => {
  const before = Date.now();
  const result = await next(params);
  const after = Date.now();

  console.log(`\t ~ Query ${params.model}.${params.action} took ${after - before}ms`);

  return result;
});

export default db;
