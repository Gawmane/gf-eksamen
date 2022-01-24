import style from '../Header/Header.module.scss'
import ColorWheel from '../../assets/images/ColorWheel.png'
import {Nav} from '../Nav/Nav'

const arrNav = [
   { name: 'Forside', path: '/'},
   { name: 'Delmål', path: '/delmaal'},
   { name: 'Udfordringer', path: '/udfordringer'},
   { name: 'Kontakt', path: '/kontakt'}


]
export const Header = (props) => {
	return (
        <header> 
            <img src={ColorWheel} alt="ColorWheel"/>
		<div>
            <h1>The global goals</h1>
            <h2>For sustainable Developement</h2>
        </div>
        
         <Nav navItems ={arrNav}/>
         </header>
	)
}