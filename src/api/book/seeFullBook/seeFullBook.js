import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFullBook: async(_, {id}, {request}) => {
      const {user} = request;
      
      const book = await prisma.book({id});
      console.log(book)
      if (user){
        const myReview = await prisma.$exists.review({user: {id: user.id}})
        return {
          book, myReview, reviews
        }
      }

      const reviews = await prisma.book({id}).reviews();
      console.log(reviews)
      return {
        book, reviews
      }
      
      
    }
  }
};