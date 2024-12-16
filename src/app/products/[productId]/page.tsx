import { notFound } from "next/navigation"

interface ProductParams {
    params : {
        productId: string
    }
}


export default function Product({ params } : ProductParams){

    if(parseInt(params.productId) > 100){
        notFound()
    }

    return(
        <h1>Produto {params.productId}</h1>
    )
}