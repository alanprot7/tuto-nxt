import { notFound } from "next/navigation"

interface ProductReview {
    params: {
        productId: number
        reviewId: string
    }
}


export default function Review({ params }: ProductReview){

    if(parseInt(params.reviewId) > 1000){
        notFound()
    }

    if(parseInt(params.reviewId) === 900){
        throw Error('Invalid 900 Id')
    }

    return(
        <div>
            <h1>Produto {params.productId}</h1>
            <h1>Review {params.reviewId}</h1>
        </div>
    )
}