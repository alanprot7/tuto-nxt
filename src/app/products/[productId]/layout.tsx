export default function ProductDetailsLayout({children} : {children : React.ReactNode}){
    return (
        <>
            <p style={{
                backgroundColor: 'blue'
            }}>Especificações</p>
            {children}
        </>
    )
}