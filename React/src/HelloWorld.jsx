


export default function HelloWorld(){
    const lista = [
        {
            name: "Luci",
            idade: 666,
            escola: "5th Circle "
        },
        {
            name: "Belz",
            idade: 777,
            escola: "7th Circle"
        }
    ];

    const MapPessoas = ({pessoas}) => {
        return pessoas.map((ps, index) =>
        <div key={index}>
            <h1>{ps.name}</h1>
            <h1>{ps.idade}</h1>
            <h1>{ps.escola}</h1>
        </div>
    )}

    return(
        <>
            <MapPessoas pessoas={lista} />
        </>
    ) 
}