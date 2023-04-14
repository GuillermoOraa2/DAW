import { useTranslation } from 'react-i18next';

import './empresa.css';

const LaEmpresa = () => {
      const { t } = useTranslation();

      return (
        <div className='container cont-emp' id='main'>
            <div className='container text-center cont-emp'>
              <h4>Filosofía</h4>
              <p className='parr-1'>Creemos en la adaptación de procesos de producción definidos por otras disciplinas de la ingeniería porque aportan a nuestros desarrollos las tres cualidades por las que se miden los productos del sector informático; fiabilidad, usabilidad y eficiencia.El nombre de la compañía representa nuestra vocación de aplicar el mejor criterio a nuestro trabajo. Sentirnos orgullosos de nuestra labor por la satisfacción que proporciona a quienes utilizan nuestras soluciones es el mayor estímulo.</p>
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
                      <h5 className="hero-headline dark text-center">Equipo</h5>
                      <p className="hero-subhead dark text-center fw-bold">"Reunirse en equipo es el principio.<br/>Mantenerse en equipo es el progreso.<br/>
                      Trabajar en equipo asegura el éxito"
                      </p>
                    </div>

                  </div> 

                  <div className="carousel-item emp-item" >
                    <div className="text-center">
                      <h5 className="hero-headline white text-center">Criterian</h5>
                      <p className="hero-subhead dark text-center fw-bold">Criterian: Procesos de calidad en la industria del software</p>
                    </div>
                  </div>

                  <div className="carousel-item emp-item">
                    <div className="text-center ">
                      <h5 className="hero-headline dark text-center">Auditoría Tecnológica</h5>
                      <p className="hero-subhead dark text-center aud fw-bold">Hoy en día la tecnología juega un
                       rol cada vez más importante para las
                       empresa, invertir en la digitalización,
                       permite a las organizaciones aumentar la competividad 
                       y la escalabilidad del negocio, además de optimizar y mejorar los procesos internos, 
                       genera una mejor posición en el mercado y maximiza la capacidad de obtener clientes</p>
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