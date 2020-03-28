import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Mutation: {
    addReview: async (_, {bookId, content, rate}, { request }) => {
      //console.log(request)
      isAuthenticated(request);
      const {user} = request;
      
      // const a= await prisma.users({where: {id: "ck87cquoj023v08031a7dlgbz"}})
      
      const review = await prisma.$exists.review({ user: { id: user.id }, book: { id: bookId } });
      
      try {
        if (review) {
          
          const targetReview = await prisma.reviews({where: {book: {id: bookId}, user: {id: user.id}}, last: 1 })
          console.log(targetReview[0])
          console.log(bookId)
          return prisma.updateReview({
            data: { rate: rate, content: content },
            where: { id: targetReview[0].id }
          });


        } else {
          return prisma.createReview({
            
              rate: rate,
              content: content,
              user: {
                id: user.id
              },
              book: {
                connect: {
                  id: bookId
                }
              
            }
          });
        }

      } catch (e) {
        throw Error(e.message);
      }
   

    }
  }
}