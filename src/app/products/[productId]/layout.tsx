export default function ProductDetailsLayout({children} : {children : React.ReactNode}){
    return (
        <>
            <p style={{
                backgroundColor: 'blue',
                color: 'white'
            }}>Especificações</p>
            {children}
        </>
    )
}