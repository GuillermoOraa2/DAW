
import { useTranslation,Trans } from 'react-i18next';
import serv1 from '../../../assets/images/desarrollo/servicios_dirección_proyecto-350x239.png';
import serv2 from '../../../assets/images/desarrollo/servicios_diseños_software-350x239.png';
import serv3 from '../../../assets/images/desarrollo/servicios_desarrollo-350x239.png';
import serv4 from '../../../assets/images/desarrollo/servicios_otros-350x239.png';
import serv5 from '../../../assets/images/desarrollo/procesosdetrabajo_criterian.png';
import serv6 from '../../../assets/images/desarrollo/rad_app_es.png';
import './desarrollo.css';

const Desarrollo = () => {
    const { t} = useTranslation();
    return (
        <div>
            <div className="container">
              <div className='text-center mt-5'> <h3 className='fw-bold'>{t('desarrollo-titular')}</h3> </div>
              <div className="row mt-5">
                <div className="col-sm-12 col-md-6">
                  <div className="container-fluid mt-5">
                    <div className="row">
                      <div className="col-6 left">
                        <img className="img-fluid" src={serv1} alt=""/>
                      </div>
                      <div className="col-6 right">
                        <div className="text-start">
                          <h4 className='fw-bold'>{t('desarrollo-direccion-titular')}</h4>
                          <p >{t('desarrollo-direccion-punto1')}</p>
                          <p >{t('desarrollo-direccion-punto2')}</p>
                          <p >{t('desarrollo-direccion-punto3')}</p>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                <div className="container-fluid mt-5">
                    <div className="row">
                      <div className="col-6 left">
                        <img className="img-fluid" src={serv2} alt=""/>
                      </div>
                      <div className="col-6 right">
                        <div className="text-start">
                          <h4 className='fw-bold'>{t('desarrollo-diseño-titular')}</h4>
                          <p >{t('desarrollo-diseño-punto1')}</p>
                          <p >{t('desarrollo-diseño-punto2')}</p>
                          <p >{t('desarrollo-diseño-punto3')}</p>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="col-sm-12 col-md-6">
                <div className="container-fluid mt-5">
                    <div className="row">
                      <div className="col-6 left">
                        <img className="img-fluid" src={serv3} alt=""/>
                      </div>
                      <div className="col-6 right">
                        <div className="text-start">
                          <h4 className='fw-bold'>{t('desarrollo-desarrollo-titular')}</h4>
                          <p >{t('desarrollo-desarrollo-punto1')}</p>
                          <p >{t('desarrollo-desarrollo-punto2')}</p>
                          <p >{t('desarrollo-desarrollo-punto3')}</p>
                        </div>
                      </div>  
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                <div className="container-fluid mt-5">
                    <div className="row">
                      <div className="col-6 left">
                        <img className="img-fluid" src={serv4} alt=""/>
                      </div>
                      <div className="col-6 right">
                        <div className="text-start">
                          <h4 className='fw-bold'>{t('desarrollo-otros-titular')}</h4>
                          <p>{t('desarrollo-otros-punto1')}</p>
                          <p >{t('desarrollo-otros-punto2')}</p>
                          <p >{t('desarrollo-otros-punto3')}</p>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='container text-start cont-des'>
                <h3 className='text-center mt-5 mb-4 fw-bold'>{t('asi-trabajamos-cabecera')}</h3>
                <p className='fs-5'>
                <Trans i18nKey="asi-trabajamos-texto">
                  El elemento diferenciador de <strong>Criterian</strong>  es el énfasis en el análisis previo:
                   El marcar unos objetivos y criterios bien definidos y crear desde un principio 
                   los procedimientos para llegar a ellos de forma organizada hace que se optimicen 
                   las siguientes fases del desarrollo del proyecto, dando una calidad de servicio excelente 
                   y obteniendo resultados óptimos para el proyecto y por lo tanto para el cliente.
                </Trans>
                </p>
                <p className='fs-5'>
                <Trans i18nKey="proceso-trabajo">
                  El proceso de trabajo en <strong>Criterian</strong>  sigue las siguientes fases:
                </Trans>
                </p>
                <img src={serv5} alt="" className='d-block mx-auto w-100 mb-4'/>
                <p className='fs-5'>
                  <Trans i18nKey="desarrollo-rapido">
                  Para proyectos que por su naturaleza requieran más celeridad también ofrecemos un sistema de<strong> Desarrollo Rápido de Aplicaciones.</strong>
                  </Trans>
                </p>
                <img src={serv6} alt="" className='d-block mx-auto w-100 mb-5 mt-4'/>
            </div>
        </div>
      );
}        
export default Desarrollo;