interface ProductParams {
    params : {
        productId: number
    }
}


export default function Product({ params } : ProductParams){
    return(
        <h1>Produto {params.productId}</h1>
    )
}