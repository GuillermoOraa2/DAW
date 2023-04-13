// import { useTranslation } from 'react-i18next';
import './inicio.css';
import slide1 from "../../../assets/images/inicio/desarrollo-software-slide-new.png";
import slide2 from "../../../assets/images/inicio/due-diligence-slide-new.png";
import slide3 from "../../../assets/images/inicio/desarrollo-fintech-slide-new.png";
import slide4 from "../../../assets/images/inicio/concepto-realidad-slide-new.png";
import inicioscr from "../../../assets/images/inicio/criterian-home-aux-img.png";
const Inicio = () => {
  // const { t } = useTranslation();
  return (
    <div>
          <div id="carouselinicio" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000"> 
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="d-block " alt="..."/>
              <div className="carousel-caption inicio-caption rounded-end">
                  <h1>Dedicados al desarrollo de software</h1>
                  <p>Somos expertos en el desarrollo de software a medida usando diferentes tecnologías y plataformas</p>
                </div>
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block " alt="..."/>
              <div className="carousel-caption inicio-caption rounded-end">
                  <h1>Due Diligence  Tecnológico</h1>
                  <p>La adquisición o inversión del capital en una compañia debe ser un proceso
                    de deción basado en la mayor información posible.
                  </p>
                </div>
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block " alt="..."/>
              <div className="carousel-caption inicio-caption rounded-end-3">
                  <h1>Especializados en desarrollo para el sector fintech</h1>
                  <p>La tecnología es cada vez más importante para las empresas.
                    Invertir en la digitalización, permite a las organizaciones aumentar
                    la competividad y la escalabilidad del negocio. 
                  </p>
                </div>
            </div>
            <div className="carousel-item">
              <img src={slide4} className="d-block " alt="..."/>
              <div className="carousel-caption inicio-caption rounded-end">
                  <h1>Del Concepto a la realidad</h1>
                  <p>Trabajamos desde la perspectiva de la empresa para maximizar resultados, siempre poniendo
                    datos, métricas y el usuario en el centro de lo que hacemos
                  </p>
                </div>
            </div>
          </div>
          <button className="carousel-control-prev inicio-control" type="button" data-bs-target="#carouselinicio" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next inicio-control" type="button" data-bs-target="#carouselinicio" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      
      {/* Segunda parte del inicio */}
    <div className="row mb-5 mt-5 presentacion-inicio">
    <div className="col-md-11 ">
      <div className="row g-0 overflow-hidden flex-md-row mb-4  position-relative ps-4">
        <div className="col p-4 d-flex flex-column position-static text-start">
          <h3 className="mb-0">La tecnología aplicada con Criterio</h3>
          <p className="card-text mb-auto pe-3"><strong>Criterian</strong>  es una compañía dedicada al desarrollo de <strong>software</strong>, especializada en la realización de <strong>auditorías técnicas.</strong> </p>
         <p><strong>Criterian</strong> prioriza en el diseño de su proceso de producción de software la obtención de soluciones de calidad, sostenibles en el tiempo. Esta calidad se estructura en torno a parámetros de <strong> alta disponibilidad, escalabilidad y usabilidad.</strong>
          </p> <p> Entendemos que en el contexto actual las compañías valoran su software como la inversión en un activo que les proporciona una mayor eficiencia en los procesos y servicios, tanto de la compañía como de sus clientes.</p>
        </div>
        <div className="col-auto ">
              <img src={inicioscr} alt=""/>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}        
export default Inicio;