import style from '../Nav/Nav.module.scss'
import {NavLink } from 'react-router-dom'

export const Nav = props => {
    console.log(props);
	return (
        <nav >
        <ul>
            {props && props.navItems && props.navItems.map((value, index) => {
                return(
                    <li key={index}><NavLink to={value.path}>{value.name}</NavLink></li>
                )
            })}
            
        </ul>
    </nav>
	)
}