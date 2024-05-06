import { PrismaClient } from '@prisma/client';

// Vérifiez si une instance globale existe déjà, sinon créez-en une nouvelle
if (!global.prisma) {
  global.prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Activez les logs en développement pour le débogage
  });
}

const prisma = global.prisma;

export default prisma;
