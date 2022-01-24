import style from '../Form/Form.module.scss'
import Formimg from '../../assets/images/UN-Logo-Large.png'
export const Form = () => {
	return (
        <section>
            <div class="top" >
                <h2>KONTAKT OS</h2>
                <a href="#top">Tilbage til top</a>
            </div>
            <p>Kontakt os og hør mere om De Sytten Verdensmål. Udfyld formularen herunder:</p>
          
            <div>
                <img src={Formimg} alt="UN-Logo"/>
               
               
                <form >
                
                    <input type="text" name="fullname" id="fullname" placeholder="Indtast dit fulde navn"/>
                    <input type="text" name="email" id="email" placeholder="Indtast gyldig E-Mail"/>
                    <input type="text" name="number" id="number" placeholder="Indtast Telefonnummer"/>
    
                    
                    <textarea name="message" id="message" placeholder="Evt.Besked"></textarea>
    
                
                    <div id="Text" ></div>
                   
                    <button type="reset" id="reset">Fortryd</button>
                    <button type="button"  id="submit">Send</button>
                </form>
            </div>
            </section>
	)
}