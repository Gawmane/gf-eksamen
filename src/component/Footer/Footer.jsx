import style from '../Footer/Footer.module.scss'
import logo from '../../assets/images/Partner-UNDP-Full.png'
export const Footer = () => {
	return (
        <footer>
        
        <div>
            <h2>Eksterne Links:</h2>
            <a href="https://www.verdensmaalene.dk/">https://www.verdensmaalene.dk/</a>
            <a href="https://www.globalgoals.org/">https://www.globalgoals.org/</a>
            <a href="https://www.un.org/sustainabledevelopment/">https://www.un.org/sustainabledevelopment/</a>
            <a href="https://worldslargestlesson.globalgoals.org/">https://worldslargestlesson.globalgoals.org/</a>
            <a href="https://www.unenvironment.org/">https://www.unenvironment.org/</a>
            <a href="https://ve.dk/klimaberegner/">https://ve.dk/klimaberegner/</a>
        </div>
     
        <div>
            <h2>Ressourcer:</h2>
            <a href="assets/pdf/Bliver verden bedre_ Final small.pdf"> Bliver Verden Bedre (.PDF)</a>
            <a href="assets/pdf/SPOTLIGHT-Rapport_Enkeltsider.pdf ">Spotlight Rapport (.PDF)</a>
        </div>
        
        <div>
            <img src={logo} alt="Partner-UNDP-Full "/>
        </div>
    </footer>
	)
}