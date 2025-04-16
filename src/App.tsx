import { Particle } from './components/particle/particle';
import './App.css'
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { AboutMe } from './layout/sections/aboutMe/AboutMe';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { GoToBtn } from './components/goToBtn/GoToBtn';

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <AboutMe/>
            <Contacts/>
            <Footer/>
            <GoToBtn/>
        </div>
    );
};

export default App
