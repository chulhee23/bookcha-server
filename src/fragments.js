export const BOOK_FRAGMENT = `
  fragment BookParts on Book{
    id
    image
    title
    author
    barcode
    price
    pub_date

    review_average
    color
    
    created_at
    updated_at
  }
`

export const REVIEW_FRAGMENT = `
  fragment ReviewParts on Review{
    id
    rate
    book
    body
  }
`

