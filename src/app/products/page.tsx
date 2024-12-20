import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Produtos'
}

export default function Products(){
    return (
        <>
            <h1>Produto 1</h1>
            <h1>Produto 2</h1>
            <h1>Produto 3</h1>
        </>
    )
}