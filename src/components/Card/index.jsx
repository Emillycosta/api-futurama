import './styles.css'

export default function Card({data:personagem}){
    return (
        <img src={personagem.image} alt="teste" />
    )
}