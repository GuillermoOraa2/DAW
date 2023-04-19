import {NavLink} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from './../../../assets/images/header/cropped-cropped-criterian_transparencia.png';
import './Header.css';

const Header = ({cambiarIdioma}) => {
    const { i18n, t } = useTranslation();

    const onChangeLang = (lang_code:string) => {
        //const lang_code = e.target.value
        i18n.changeLanguage(lang_code)
        cambiarIdioma(lang_code);
    }
    const { pathname } = useLocation();

    return (
      
        <header className="sticky-top" style={{ display: pathname === '/due-diligence' ? 'none' : 'block' }}>
            
            <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <div className="logo navbar-brand">
                <a href="/" title="Criterian"><img src={logo} alt="inicio"/></a>
              </div>
              <button className="navbar-toggler shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNavDropdown" >
                <ul className="navbar-nav" >
                <li className="nav-item log">
                <button className="navbar-toggler shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                              <a href="/" title="Criterian" id="logo-index"><img src={logo} alt="inicio"/></a><span className="x"><svg width="25" height="25"  fill="blue" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z"></path></svg></span>
              </button>
                </li>
                
                  <li className="nav-item">
                    <NavLink className="nav-link " aria-current="page" to="/">{t('inicio')}</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="productos-y-servicios/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                     {t('servicios')}
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><NavLink className="dropdown-item" to="productos-y-servicios/">{t('desarrollo de software')}</NavLink></li>
                      <li><NavLink className="dropdown-item" to="https://due-diligence.criterian.es/" target="_blank">{t('due')}</NavLink></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="la-empresa/">{t('empresa')}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="casos-de-exito/">{t('exitos')}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="contacto/" id="contacto">{t('contacto')}</NavLink>
                  </li>
                  <li className="nav-item idiomas">
                    <NavLink className="nav-link" to="#"><img decoding="async" onClick={() => onChangeLang("es")} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAflBMVEX/AAD9AAD3AADxAADrAAD/eXn9bGz8YWH8WVn6UVH5SEj5Pz/3NDT0Kir9/QD+/nL+/lT18lDt4Uf6+j/39zD39yf19R3n5wDxflXsZ1Pt4Y3x8zr0wbLs1NXz8xPj4wD37t3jmkvsUU/Bz6nrykm3vJ72IiL0FBTyDAvhAABEt4UZAAAAX0lEQVR4AQXBQUrFQBBAwXqTDkYE94Jb73+qfwVRcYxVQRBRToiUfoaVpGTrtdS9SO0Z9FR9lVy/g5c99+dKl30N5uxPuviexXEc9/msC7TOkd4kHu/Dlh4itCJ8AP4B0w4Qwmm7CFQAAAAASUVORK5CYII=" alt="Castellano"/></NavLink>
                  </li>
                  <li className="nav-item idiomas">
                    <NavLink className="nav-link" to="#"><img  decoding="async" onClick={() => onChangeLang("en")} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAt1BMVEWSmb66z+18msdig8La3u+tYX9IaLc7W7BagbmcUW+kqMr/q6n+//+hsNv/lIr/jIGMnNLJyOP9/fyQttT/wb3/////aWn+YWF5kNT0oqz0i4ueqtIZNJjhvt/8gn//WVr/6+rN1+o9RKZwgcMPJpX/VFT9UEn+RUX8Ozv2Ly+FGzdYZrfU1e/8LS/lQkG/mbVUX60AE231hHtcdMb0mp3qYFTFwNu3w9prcqSURGNDaaIUMX5FNW5wYt7AAAAAjklEQVR4AR3HNUJEMQCGwf+L8RR36ajR+1+CEuvRdd8kK9MNAiRQNgJmVDAt1yM6kSzYVJUsPNssAk5N7ZFKjVNFAY4co6TAOI+kyQm+LFUEBEKKzuWUNB7rSH/rSnvOulOGk+QlXTBqMIrfYX4tSe2nP3iRa/KNK7uTmWJ5a9+erZ3d+18od4ytiZdvZyuKWy8o3UpTVAAAAABJRU5ErkJggg==" alt="Castellano"/></NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav> 
           
        </header>
      );
}        

export default Header;