import './App.css';
import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";
// import {Services} from "./components/services/Services";
import {Qualification} from "./components/qualification/Qualification";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";
import {ScrollUp} from "./components/scrollup/ScrollUp";
import {Work} from "./components/work/Work";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>

            <Header/>
            <main className='main'>
                <Home/>
                <About/>
                <Skills/>
                <Qualification/>
                <Work/>
                <Contact/>


                {/*<Routes>*/}
                {/*    <Route path="/home" element={<Home />}/>*/}
                {/*    <Route path="/about" element={<About />}/>*/}
                {/*    <Route path="/skills" element={<Skills />}/>*/}
                {/*    <Route path="/qualification" element={<Qualification />}/>*/}
                {/*    <Route path="/portfolio" element={<Work />}/>*/}
                {/*    <Route path="/contact" element={<Contact />}/>*/}
                {/*</Routes>*/}

            </main>
            <Footer/>
            <ScrollUp/>
        </>
    );
}

export default App;
