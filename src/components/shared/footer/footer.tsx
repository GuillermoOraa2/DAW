import { useTranslation } from 'react-i18next';
import mapsIcon from '../../../assets/images/footer/Maps-icon.png';
import mailIcon from '../../../assets/images/footer/Mail-icon.png';
import facebookIcon from '../../../assets/images/footer/facebook-icon-1.png';
import twitterIcon from '../../../assets/images/footer/twitter-icon.png';
import linkedinIcon from '../../../assets/images/footer/linkedin-icon.png';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();
    const { pathname } = useLocation();
      return (
        <div id="sidebar-footer" className="footer-widgets visibility-all" style={{ display: pathname === '/due-diligence' ? 'none' : 'block' }}>
        <div className="container">
            <div className="footer-widgets-grid">
            <div className="sidebar-column">
                <aside id="text-7" className="widget">			
                <div className="textwidget footerMailDirection">
                    <div className="aligncenter"><img decoding="async" src={mapsIcon} alt="" width="32" height="32"/></div>
                    <p><span className="tL8wMe">{t('direccion')}<br/>Madrid<br/></span><span className="tL8wMe">28028</span></p>
                </div>
                </aside>			
            </div>
                        
            <div className="sidebar-column">
                <aside className="widget widget_text">			
                <div className="textwidget footerMailDirection">
                    <div className="aligncenter"><img decoding="async" src={mailIcon} alt="" width="32" height="32" /></div>
                    <p>Email:<a href="mailto:info@criterian.es" target="blank" rel="noopener"><br/>info@criterian.es </a></p>
                </div>
                </aside>			
            </div>
                        
            <div className="sidebar-column">
                <aside className="widget widget_text">			
                <div className="textwidget footerRedesSociales">
                    <div>
                    <a href="https://www.facebook.com/criteriansoftware/" target="_blank" rel="noopener" ><img decoding="async" 
                    title="https://www.facebook.com/criteriansoftware/" src={facebookIcon} 
                    alt="" width="32" height="32" /></a> 
                    </div>
                    <div>
                        <a href="https://twitter.com/Criterian_Softw/" target="_blank" rel="noopener">
                            <img decoding="async" src={twitterIcon} alt="" width="32" height="32" /> 
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/criterian-software-305241135" target="_blank" rel="noopener"> 
                            <img decoding="async" src={linkedinIcon} alt="" width="32" height="32" />
                        </a>
                    </div>
                </div>
                </aside>			
            </div>		
            </div>
        </div>
        </div>	
      );

  }

export default Footer;