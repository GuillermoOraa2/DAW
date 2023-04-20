import { useTranslation,Trans } from 'react-i18next';

import './empresa.css';

const LaEmpresa = () => {
      const { t } = useTranslation();

      return (
        <div className='container cont-emp' id='main'>
            <div className='container text-center cont-emp'>
              <h4 className='cab-1'>{t('Empresa-descripcion-cabecera')}</h4>
              <p className='parr-1'>{t('Empresa-descripcion-texto')}</p>
              <div>
              
              </div>
          </div>
            <section className="hero carousel-hero ">
              <div id="homeHerocarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#homeHerocarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#homeHerocarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#homeHerocarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner h-200">

                  <div className="carousel-item active emp-item">

                    <div className="text-center">
                      <h5 className="hero-headline dark text-center">{t('Empresa-citas-equipo')}</h5>
                      <p className="hero-subhead dark text-center fw-bold">
                        <Trans i18nKey="Empresa-citas-equipo-texto">
                          "Reunirse en equipo es el principio.<br/>Mantenerse en equipo es el progreso.<br/>Trabajar en equipo asegura el éxito"
                        </Trans>
                      </p>
                    </div>

                  </div> 

                  <div className="carousel-item emp-item" >
                    <div className="text-center">
                      <h5 className="hero-headline white text-center">Criterian</h5>
                      <p className="hero-subhead dark text-center fw-bold">{t('Empresa-citas-criterian-texto')}</p>
                    </div>
                  </div>

                  <div className="carousel-item emp-item">
                    <div className="text-center ">
                      <h5 className="hero-headline dark text-center">{t('Empresa-citas-auditoria')}</h5>
                      <p className="hero-subhead dark text-center aud fw-bold">{t('Empresa-citas-auditoria-texto')}</p>
                    </div>
                  </div> 

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#homeHerocarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homeHerocarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </section>
        </div>
        
        
      );
    
}        
export default LaEmpresa;