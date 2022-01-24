import style from '../Goal/Goal.module.scss'




export const Goal = () => {
	return (
        <section id="delmål">
       
        <div class="top">
            <h2>DELMÅLENE</h2>
            <a href="#top">Tilbage til top</a>
        </div>
        <p>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål. </p>
        <h4>Se eksempler på enkelte delmål her:</h4>

     
        <div className="galleri">

            <figure> <img src={require('../../assets/images/Goals/Goal-No-Poverty.png')} alt="no-proverty" /> </figure>
            <figure> <img src={require('../../assets/images//Goals/Goal-No-Hunger.png')} alt="no-proverty" /> </figure>
            <figure> <img src={require('../../assets/images//Goals/Goal-Good-Health.png')} alt="no-proverty" /> </figure>
            <figure><img src={require('../../assets/images//Goals/Goal-Good-Education.png')} alt="no-proverty" /> </figure>
            <figure><img src={require('../../assets/images//Goals/Goal-Gender-Equality.png')} alt="no-proverty" /> </figure>
            <figure><img src={require('../../assets/images//Goals/Goal-Clean-Water.png')} alt="no-proverty" /> </figure>
        </div>
        
        <div className="galleri">
            <figure><img src={require('../../assets/images//Goals/Goal-Clean-Energy.png')}  /> </figure>
            <figure> <img src={require('../../assets/images//Goals/Goal-Decent-Work.png')}  alt="no-proverty" /> </figure>
            <figure> <img src={require('../../assets/images//Goals/Goal-Industry.png')}  alt="no-proverty" /> </figure>
            <figure><img src={require('../../assets/images//Goals/Goal-Inequalities.png')}  alt="no-proverty" /> </figure>
            <figure><img src={require('../../assets/images//Goals/Goal-Sustainable-Cities.png')}  alt="no-proverty" /> </figure>
            <figure><img src={require('../../assets/images//Goals/Goal-Responsible-Consumption.png')}  alt="no-proverty" /> </figure>
        </div>
       
        <div className="galleri">
            <figure><img src={require('../../assets/images//Goals/Goal-Climate-Action.png')}  alt="no-proverty" /> </figure>
            <figure> <img src={require('../../assets/images//Goals/Goal-Life-Water.png')}  alt="no-proverty" /> </figure>
            <figure> <img src={require('../../assets/images//Goals/Goal-Life-Land.png')}  alt="no-proverty" /> </figure>
            <figure><img src={require('../../assets/images//Goals/Goal-Institutions.png')}  alt="no-proverty" /> </figure>
            <figure><img src={require('../../assets/images//Goals/Goal-Partnership.png')}  alt="no-proverty" /> </figure>
            <figure><img src={require('../../assets/images//Goals/Global-Goals.png')}  alt="no-proverty" /> </figure>
        </div>
    </section>
	)
}