//Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

//Compontes 
import {Header} from '../src/component/Header/Header';
import {Main} from '../src/component/Main/Main';

import {Footer} from '../src/component/Footer/Footer';

//Routes
import {Home} from '../src/component/Pages/Home/Home';
import {About} from '../src/component/Pages/About/About';
import {ContactRouter} from '../src/component/Pages/Contact/Contact';
import {UdfordringerRouter} from '../src/component/Pages/Udfordringer/Udfrdringer';




//Style
import './App.scss';

function App() {
  return (
    //React fragment = <> </>
    <>
    <Router>
    <Header/>
    <Main>
      <Routes>
        //Viser hvilken Page der skal være for den valgte path
        <Route index element={<Home />}/>
        <Route path="/delmaal" element={<About />}/>
        <Route path="/udfordringer" element={<UdfordringerRouter />}/>
        <Route path="/kontakt" element={<ContactRouter />}/>
       

      </Routes>
      </Main>
      <Footer/>
    </Router>
    
    
    
    
    </>
  );
}

export default App;
