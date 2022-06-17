import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//data
import initialData from './Data/initialData';
//components
import Navigation from './components/common/navigation';
//pages
import Home from './pages/home';
import Automat from './pages/automat';
import Documents from './pages/documents';
import ContactUs from "./pages/contactUs";
import Turnstile from './pages/turnstile';

function App() {
  return(
    <BrowserRouter>
      <div className="app">
      <Navigation/>
      <Routes>
        <Route path="automat" element={<Home/>}/>
        <Route path="automat/automat" element={<Automat initialData={initialData}/>}/>
        <Route path="automat/documents" element={<Documents/>}/>
        <Route path="automat/templates/turnstile" element={<Turnstile/>}/>
        <Route path="automat/contactUs" element={<ContactUs/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
