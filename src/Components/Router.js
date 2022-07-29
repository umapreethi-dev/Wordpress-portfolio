import Home from './Home';

import Contact from "./Contact"
import {Routes,Route,BrowserRouter} from 'react-router-dom';

function Router(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Router;