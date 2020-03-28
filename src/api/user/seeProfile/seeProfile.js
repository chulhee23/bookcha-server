import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeProfile: async (_, {id}, { request }) => {
      const user = await prisma.user({ id });
      return user
    }
  }
}

//ck87cquoj023v08031a7dlgbz
//793263851c90103b2c5e20b4
