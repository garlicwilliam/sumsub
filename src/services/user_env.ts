import { prismaClient } from '../prisma';

export async function createUserEnv(userAddress: string, env: string, tx?: any): Promise<boolean> {
  const address: string = userAddress.toLowerCase();
  try {
    await prismaClient.userEnv.upsert({
      where: {
        userAddress: address,
      },
      update: {
        env: env,
      },
      create: {
        userAddress: address,
        env: env,
      },
    });

    return true;
  } catch (error) {
    console.error(`Error creating/updating user env for address ${address}:`, error);
    throw error;
  }
}

export async function readUserEnv(userAddress: string): Promise<string | null> {
  const address: string = userAddress.toLowerCase();
  try {
    const userEnv = await prismaClient.userEnv.findUnique({
      where: {
        userAddress: address,
      },
      select: {
        env: true,
      },
    });

    return userEnv ? userEnv.env : null;
  } catch (error) {
    console.error(`Error reading user env for address ${address}:`, error);
    return null;
  }
}
