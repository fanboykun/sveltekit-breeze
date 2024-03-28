import {  PrismaClient } from '@prisma/client';
import { v4 as uuid } from 'uuid';
const prisma = new PrismaClient();
  
  async function main() {
    const insertUser = async() => {

    // equal to password   (the password is password) 
    const hashed_password ='$argon2id$v=19$m=19456,t=2,p=1$G6oiKRT0mp658WXHisgciQ$C4aWthM+QoXp/1gJjakYVqkYK8FL9XfHx91QE3bTlsg'
    const userId = uuid()

      await prisma.user.upsert({
        where: { email: 'admin@gmail.com' },
        update: {
          hashed_password: hashed_password,
        },
        create: {
            id: userId,
            email: 'admin@gmail.com',
            name: 'Sabin Adams',
            role: 'ADMIN',
            hashed_password: hashed_password,
        },
      });
    }

    insertUser()
  }
  
  // execute the main function
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      // close the Prisma Client at the end
      await prisma.$disconnect();
    });