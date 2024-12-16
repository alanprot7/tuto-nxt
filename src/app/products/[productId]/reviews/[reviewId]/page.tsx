interface ProductReview {
    params: {
        productId: number
        reviewId: number
    }
}


export default function Review({ params }: ProductReview){
    return(
        <div>
            <h1>Produto {params.productId}</h1>
            <h1>Review {params.reviewId}</h1>
        </div>
    )
}