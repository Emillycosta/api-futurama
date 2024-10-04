import { Link } from 'react-router-dom'
import './styles.css'

export default function Header(){
    return (
 <>
 <header className='cabecalho'>
        <h1>Universo Simpson</h1>
        <nav><ol>
        <Link to="/"> <li>  Home</li> </Link>
        <Link to ="/About"> <li> About </li> </Link>
        <Link to='/SimpsonsApi'> <li> Personagens </li> </Link>

        </ol></nav>
     </header>
 
 
 
 </>
    )
}