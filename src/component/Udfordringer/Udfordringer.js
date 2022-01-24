import style from '../Udfordringer/Udfordringer.module.scss'
import img1 from '../../assets/images/Image-Sustainability.jpg'
import img2 from '../../assets/images/Image-Leave-No-One.jpg'
import img3 from '../../assets/images/Image-Hunger.jpg'


export const Udfordringer = () => {
	return (
        
<section>
        
        <div class="top">
            <h2>UDFORDRINGER</h2>
            <a href="#top">Tilbage til top</a>
        </div>
        <h4>Der er en lang række faktorer der har indvirkning på opfyldelsen af de mål, man gennem aftaler har forpligtiget sig til. </h4>
        
        <figure>
            <figcaption>
                <article>
                    <h3>Vækst vs. bæredygtighed.</h3>
                    <p>En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund. </p>
                    <p>Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer. </p>
                    <p>De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større. </p>
                </article>
            </figcaption>
            <img src={img1} alt="Image-Sustainability"/>
        </figure>

       
        <figure>
            <figcaption>
                <article>
                    <h3>Leave no-one behind.</h3>
                    <p>I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken. </p>
                    <p>Arbejdet med verdensmålene skal begynde med, at de fattigste og mest marginaliserede adresseres først. </p>
                    <p>Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende. </p>
                    <p>Med ander ord: “Leave On-One behind”.</p>
                </article>
            </figcaption>
            <img src={img2} alt="Image-Leave-No-One"/>
        </figure>
        
        <figure>
            <figcaption>
                <article>
                    <h3>Fattigdom og sult.</h3>
                    <p>Det første af FN’s verdensmål handler om at afskaffe verdens fattigdom inden 2030. </p>
                    <p>Det handler især om at give muligheder for mennesker i verdens fattigste lande. Verdensbanken definerer ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars om dagen – dvs. cirka 13 kroner. </p>
                    <p>En stor udfordring, men vi er allerede godt på vej.</p>
                </article>
            </figcaption>
            <img src={img3} alt="Image-Hunger"/>
        </figure>

    </section>
	)
}

