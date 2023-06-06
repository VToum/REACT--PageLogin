interface ICard {
    Id: number
    Paragrafo: string
    Detalhes: string
}

export const Card = ({Id, Paragrafo, Detalhes}: ICard) => {
    return(
        <div>
            <h1>Card {Id}</h1>
            <div>
                <p>{Paragrafo}</p>
                <p>{Detalhes}</p>
            </div>
        </div>
    )
}