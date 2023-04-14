import React from 'react';
import serv1 from '../../../assets/images/desarrollo/servicios_dirección_proyecto-350x239.png';
import serv2 from '../../../assets/images/desarrollo/servicios_diseños_software-350x239.png';
import serv3 from '../../../assets/images/desarrollo/servicios_desarrollo-350x239.png';
import serv4 from '../../../assets/images/desarrollo/servicios_otros-350x239.png';
import serv5 from '../../../assets/images/desarrollo/procesosdetrabajo_criterian.png';
import serv6 from '../../../assets/images/desarrollo/rad-1 (1).png';
class desarrollo extends React.Component {
    render() {
      return (
        <div>
            <div className="container">
              <div className='text-center mt-5'> <h3 className='fw-bold'>Desarrollo de Software</h3> </div>
              <div className="row mt-5">
                <div className="col-sm-12 col-md-6">
                  <div className="container-fluid mt-5">
                    <div className="row">
                      <div className="col-6 left">
                        <img className="img-fluid" src={serv1} alt=""/>
                      </div>
                      <div className="col-6 right">
                        <div className="text-start">
                          <h4 className='fw-bold'>Dirección de Proyecto</h4>
                          <p >Gestión de Requisitos</p>
                          <p >Gestión de Proyectos</p>
                          <p >Definición de producto</p>
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
                          <h4 className='fw-bold'>Diseño de Software</h4>
                          <p >Diseño de UX</p>
                          <p >Arquitectura de Software</p>
                          <p >Elaboración planes de Prueba</p>
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
                          <h4 className='fw-bold'>Desarrollo</h4>
                          <p >Desarrollo de Software</p>
                          <p >Elaboración de Código Fuente</p>
                          <p >Programación</p>
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
                          <h4 className='fw-bold'>Otros Servicios</h4>
                          <p>Consultoría Informática</p>
                          <p >Mantenimiento de Sistemas</p>
                          <p >Soporte</p>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='container text-start'>
                <h3 className='text-center mt-5 mb-4 fw-bold'>Así Trabajamos</h3>
                <p className='fs-5'>El elemento diferenciador de <strong>Criterian</strong>  es el énfasis en el análisis previo:
                   El marcar unos objetivos y criterios bien definidos y crear desde un principio 
                   los procedimientos para llegar a ellos de forma organizada hace que se optimicen 
                   las siguientes fases del desarrollo del proyecto, dando una calidad de servicio excelente 
                   y obteniendo resultados óptimos para el proyecto y por lo tanto para el cliente.</p>
                <p className='fs-5'>El proceso de trabajo en <strong>Criterian</strong>  sigue las siguientes fases:</p>
                <img src={serv5} alt="" className='d-block mx-auto w-100 mb-4'/>
                <p className='fs-5'>Para proyectos que por su naturaleza requieran más celeridad también ofrecemos un sistema de<strong> Desarrollo Rápido de Aplicaciones.</strong></p>
                <img src={serv6} alt="" className='d-block mx-auto w-100 mb-5 mt-4'/>
            </div>
        </div>
      );
    }
}        
export default desarrollo;