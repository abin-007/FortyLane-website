import {Routes,Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import ModulePage from '../pages/ModulePage';
import AboutPage from '../pages/AboutPage';

export default function(){
    return(
        <Routes>
            <Route
            path='/'
            element={<HomePage/>}
            
            />
            <Route
            path='/contact'
            element={<ContactPage/>}
            />
            <Route
            path='/about'
            element={<AboutPage/>}
            />

            <Route
            path="/solutions/:moduleId"
            element={<ModulePage />}
            
            />

        </Routes>

    )
}