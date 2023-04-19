// import { useTranslation,Trans } from 'react-i18next';
// import './due-diligence.css'
// import './4000-due.css'
// import './1549-due.css'
// import './990-due.css'
// import './575-due.css'
// import due15 from '../../../assets/images/due/image-15.svg' ;
// import due1 from '../../../assets/images/due/Bootstrap.svg' ;
// import due0 from '../../../assets/images/due/image.svg';
// import due2 from '../../../assets/images/due/image-1.svg'
// import due3 from '../../../assets/images/due/img.svg'
// import due4 from '../../../assets/images/due/image-2.svg'
// import due5 from '../../../assets/images/due/image-3.svg'
// import due6 from '../../../assets/images/due/image-14.svg'
// import due7 from '../../../assets/images/due/image-4.svg'
// import due8 from '../../../assets/images/due/image-6.svg'
// import due9 from '../../../assets/images/due/image-8.svg'
// import due10 from '../../../assets/images/due/image-10.svg'
// import due11 from '../../../assets/images/due/image-12.svg'
// const LaEmpresa = () => {
//       const { t } = useTranslation();
//       return ( 

// <div>
// <img alt="image" className="main-img" src={due0} />
//     <nav className="navbar navbar-expand-lg navbar-due" id="nav1">
//         <div className="container-fluid nav-div">
//         <a className="navbar-brand navbar-due-brand " href="#"><img className="navbar-logo navbar-due-logo" src={due1} alt="Bootstrap" width="auto"
//                                                 height="30px" /></a>
//         <button className="navbar-toggler navbar-due-toggler collapsed" type="button" data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
//                 aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="navbar-collapse navbar-due-collapse collapse" id="navbarSupportedContent" >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom-list"></ul>
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="due-diligence nav-item">
//                 <a id="linkDueDiligence" className="nav-link-due active" 
//                 href="#technology"><b>Due Diligence Tecnológico</b></a>
//             </li>
//             <li className="nav-item nav-item-due">
//                 <a id="linkEjes" className="nav-link-due" href="#pivots">Ejes</a>
//             </li>
//             <li className="nav-item nav-item-due">
//                 <a id="linkTipos" className="nav-link-due" href="#types">Tipos</a>
//             </li>
//             <li className="nav-item nav-item-due contact-button-container">
//                 <div className="contact">
//                 <a id="linkContacto" className="nav-link-due" 
//                     href="#contact">Contacto</a>
//                 </div>
//             </li>
//             </ul>
//         </div>
//         </div>
//     </nav>
//     {/* <!-- Hero Section --> */}
//     <section id="hero"  className="hero">
//         <div className="container">
//         <div className="title-subtitle-button">
//             <div className="title-subtitle">
//             <div className="header-title">Due Diligence Tecnológico</div>
//             <div className="header-subtitle mt-2">
//                 <p>Si buscas invertir en una empresa o eliminar la dependencia de un proveedor de tecnología, necesitas
//                 tener la mayor cantidad de información a tu alcance.</p>
//             </div>
//             </div>
//             <a className="btn button-contact mt-4" href="#contact">
//             <div className="button-contact-text">Contacto</div>
//             <img alt="image" src={due2} />
//             </a>
//         </div>
//         <div className="imag_principal" >
//             <div className="elipse-superior"></div>
//             <div className="elipse-lateral"></div>
//             <div className="elipse-gris"></div>
//             <div className="elipse-blanca"></div>
//             <img src={due3} alt="img" />
//         </div>
//         </div>
//     </section>
//     {/* <!-- Due Diligence Section --> */}
//     <section id="technology">
//         <div className="container text-center my-5">
//         <div className="due-diligence-box row">
//             <div className="col-sm-12">
//             <div className="due-diligence-title">
//                 <p>
//                 <b>Due Diligence Tecnológico</b>
//                 </p>
//             </div>
//             <div className="due-diligence-text">
//                 <p>
//                 <b>
//                     La auditoria tecnológica permite obtener una visión clara de la tecnología. Mediante una metodología y
//                     un equipo capaz de obtener y presentar de forma
//                     clara toda la información recopilada, se realiza un análisis exhaustivo y transparente, con informes
//                     detallados y justificados.</b>
//                 </p>
//             </div>
//             </div>
//         </div>

//         <div className="imag-services row">
//             <div className="col-sm-12 col-md-6">
//             <img alt="image" className="diploma-img" src={due4} />
//             </div>
//             <div className="col-sm-12 col-md-6">
//             <div className="service-question">
//                 <p className="text-diligence">
//                 <b>¿Por qué contratar un servicio de Due Diligence
//                     Tecnológico?</b>
//                 </p>
//             </div>
//             <ul className="services-description">
//                 <div className="row">
//                 <div className="col-sm-1 icon-custom-left">
//                     <img alt="image" className="mt-2 check" src={due5} />
//                 </div>
//                 <div className="col-sm-10 content-custom-right">
//                     <p className="text-diligence1">
//                     Permitirá disponer de la mayor información posible, al
//                     invertir en una empresa y para eliminar la dependencia de
//                     proveedores de tecnología.
//                     </p>
//                 </div>
//                 </div>
//                 <div className="row">
//                 <div className="col-sm-1 icon-custom-left">
//                     <img alt="image" src={due5} className="mt-2 check" />
//                 </div>
//                 <div className="col-sm-10 content-custom-right" >
//                     <p className="text-diligence2">
//                     Para conocer el estado actual de la tecnología de una
//                     empresa, lo que te permitira optimizar procesos, recursos y
//                     descubrir oportunidades de creación de valor oculto.
//                     </p>
//                 </div>
//                 </div>
//                 <div className="row">
//                 <div className="col-sm-1 icon-custom-left">
//                     <img alt="image" className="mt-2 check" src={due5}/>
//                 </div>
//                 <div className="col-sm-10 content-custom-right">
//                     <p className="text-diligence3">
//                     Para poder tomar mejores decisiones, al tener mayor control
//                     de tus activos.
//                     </p>
//                 </div>
//                 </div>
//             </ul>
//             </div>
//         </div>
//         </div>
//     </section>
//     {/* <!-- Pivots Section --> */}
//     <section id="pivots">
//         <div id="container-pivot" className="container-fluid container">
//         <div className="pivots-box">
//             <div className="row">
//             <div className="pivots-title col-12">
//                 <p>
//                 <b>Ejes de análisis</b>
//                 </p>
//             </div>
//             </div>
//             <div className="pivots-boxes-1 row">
//             <div className="col-sm-6 col-md-4 ul-container">
//                 {/* <img alt="image" id="vector1n" src="assets/image/Vectoreje1.svg" /> */}
//                 <img alt="image" id="vector1b" src={due7} />
//                 <ul className="pivot-ul pivot1">
//                 <p className="pivot-tile1"><b>Estructura de software </b></p>
//                 <li className="pivot-text1">Arquitectura</li>
//                 <li className="pivot-text1">Lenguajes</li>
//                 <li className="pivot-text1">Estructura</li>
//                 <li className="pivot-text1">Librerías de terceros</li>
//                 <li className="pivot-text1">
//                     Pruebas (cobertura unitarios e integrados)
//                 </li>
//                 <li className="pivot-text1">Herramientas</li>
//                 <li className="pivot-text1">Documentación</li>
//                 </ul>
//             </div>
//             <div className="col-sm-6 col-md-4 ul-container">
//                 <img alt="image" id="vector2n" src={due8} />
//                 {/* <img alt="image" id="vector2b" 
//                     src="assets/image/carbon_network-3-referenceeje2b.svg" /> */}
//                 <ul className="pivot-ul pivot2">
//                 <p className="pivot-tile1"><b>Producción y rendimiento</b></p>
//                 <li className="pivot-text1">Despliegue</li>
//                 <li className="pivot-text1">Monitorización</li>
//                 <li className="pivot-text1">Resolución de bugs</li>
//                 <li className="pivot-text1">Rendimiento</li>
//                 <li className="pivot-text1">Escalabilidad</li>
//                 <li className="pivot-text1">Seguridad</li>
//                 <li className="pivot-text1">Resiliencia a caídas y fallos</li>
//                 <li ></li>
//                 </ul>
//             </div>
//             <div className="col-sm-6 col-md-4 ul-container">
//                 {/* <img alt="image" id="vector3n" src="assets/image/Vectoreje3.svg" /> */}
//                 <img alt="image" id="vector3b" src={due9}  />
//                 <ul className="pivot-ul pivot3">
//                 <p className="pivot-tile1"><b>Metodología de trabajo</b></p>
//                 <li className="pivot-text1">Flujo de análisis</li>
//                 <li className="pivot-text1">Gestión de backlog</li>
//                 <li className="pivot-text1">Definición de roadmap</li>
//                 <li className="pivot-text1">Desarrollo y pruebas</li>
//                 <li className="pivot-text1">Onboarding de nuevos perﬁles</li>
//                 <li className="pivot-text1">Quality assurance</li>
//                 <li className="pivot-text1">
//                     Capacidad de debug local y otras herramientas
//                 </li>
//                 </ul>
//             </div>
//             <div className="col-sm-12 col-md-2 width-0"></div>
//             <div className="col-sm-6 col-md-4 ul-container" id="ulp1">
//                 {/* <img alt="image" id="vector4n" src="assets/image/Vectoreje4.svg" /> */}
//                 <img alt="image" id="vector4b"  src={due10}/>
//                 <ul className="pivot-ul1 pivot3">
//                 <p className="pivot-tile1"><b>Composición de equipo</b></p>
//                 <li className="pivot-text1">Características</li>
//                 <li className="pivot-text1">Perﬁles clave y riesgos asociados</li>
//                 <li className="pivot-text1">Perﬁles inexistentes (gaps)</li>
//                 <li className="pivot-text1">Estructura salarial e incentivos</li>
//                 <li className="pivot-text1">Metodología empleada</li>
//                 </ul>
//             </div>
//             <div className="col-sm-6 col-md-4 ul-container  ulp2 ">
//                 {/* <img alt="image" id="vector5n" src="assets/image/Vectoreje5.svg" /> */}
//                 <img alt="image" id="vector5b"  src={due11} />
//                 <ul className="pivot-ul1 pivot3  ulp2">
//                 <p className="pivot-tile1">
//                     <b>Seguridad</b>
//                 </p>
//                 <li className="pivot-text1">
//                     Ciberseguridad y seguridad de los equipos
//                 </li>
//                 <li className="pivot-text1">Certificaciones (PSI DSS, ISO),</li>
//                 <li className="pivot-text1">Política backup</li>
//                 <li className="pivot-text1">“Disaster Recovery”</li>
//                 </ul>
//             </div>
//             <div className="col-sm-12 col-md-2"></div>
//             </div>
//         </div>
//         </div>
//     </section>
//     {/* <!-- Types Section --> */}
//     <section  id="types">
//         <div className="container types-container">
//         <div className="row">
//             <div className="types-title col-12">
//             <p><b>Tipos de Due Diligence Tecnológico</b></p>
//             </div>
//         </div>
//         <div className="row">
//             <div className="col-sm-12 col-md-1 col-lg-2"></div>
//             <div className="col-sm-12 col-md-5 col-lg-4 column-types2">
//             <img alt="image" className="start" src={due6} />
//             <div className="color-types">
//                 <p><b> Due Diligence a Medida </b></p>
//             </div>
//             <div className="types-boxes">
//                 <div className="border-types">
//                 <p><b> Análisis 5 Ejes </b></p>
//                 </div>
//                 <div className="border-types">
//                 <p><b>Entregable</b></p>
//                 </div>
//                 <div className="border-types">
//                 <p><b>Dos Semanas</b></p>
//                 </div>
//             </div>
//             <p className="type-n1" id="sa">
//                 <b>Servicios adicionales:</b>
//             </p>
//             <ul id="ul1">
//                 <li>
//                 <p className="type-n2" id="n2"><b>Desarrollo e implementación completa de la propuesta y recomendaciones</b>
//                 </p>
//                 </li>
//                 <li>
//                 <p className="type-n2" id="n3"> <b>Asesoramiento y monitoreo periódico</b></p>
//                 </li>
//             </ul>

//             <ul>
//                 <p className="type-n1 e1"><b>Entregable:</b></p>
//                 <li>
//                 <p className="type-n2 n4">
//                     <b> Repositorio de documentación analizada</b>
//                 </p>
//                 </li>
//                 <li>
//                 <p className="type-n2 n4">
//                     <b>Conclusiones de la auditoría:</b>
//                 </p>
//                 </li>
//                 <ul>
//                 <li>
//                     <p className="type-n3"><b> Análisis detallado de cada eje</b></p>
//                 </li>
//                 <li>
//                     <p className="type-n3">
//                     <b> Propuestas y recomendaciones a seguir</b>
//                     </p>
//                 </li>
//                 <li>
//                     <p className="type-n3"><b> Informes a medida</b></p>
//                 </li>
//                 </ul>
//             </ul>
//             </div>
//             <div className="col-sm-12 col-md-5 col-lg-4 column-types1">
//             <div className="color-types">
//                 <p><b>Due Diligence Esencial</b></p>
//             </div>
//             <div className="border-types-boxes">
//                 <div className="border-types">
//                 <p><b> Análisis 5 Ejes </b></p>
//                 </div>
//                 <div className="border-types">
//                 <p><b>Precio Fijo</b></p>
//                 </div>
//                 <div className="border-types">
//                 <p><b>Dos Semanas</b></p>
//                 </div>
//             </div>
//             <b>
//                 <p className="type-n1 t1">
//                 Entregable:
//                 </p>
//             </b>
//             <ul className="u1">
//                 <li>
//                 <p className="type-n2 t2">
//                     <b>Repositorio de documentación analizada</b>
//                 </p>
//                 </li>
//                 <li>
//                 <p className="type-n2"><b>Conclusiones de la auditoría:</b></p>
//                 <ul>
//                     <li>
//                     <p className="type-n3">
//                         <b> Análisis detallado de cada eje</b>
//                     </p>
//                     </li>
//                     <li>
//                     <p className="type-n3">
//                         <b> Propuestas y recomendaciones a seguir</b>
//                     </p>
//                     </li>
//                     <li>
//                     <p className="type-n3"><b>Informes a medida</b></p>
//                     </li>
//                 </ul>
//                 </li>
//             </ul>
//             </div>
//             <div className="col-sm-12 col-md-1 col-lg-2"></div>
//         </div>
//         </div>
//     </section>
//         {/* <!-- Contact Section--> */}
//         <section  id="contact">
//         <div className="container-fluid contac1">
//             <div className="row">
//             <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
//                 <form id="contact-form">
//                 <fieldset>
//                     <legend>Nombre</legend>
//                     <div className="form-group">
//                     <div className="col-md-12">
//                         <input
//                         id="name"
//                         name="name"
//                         type="text"
//                         className="form-control"
//                         required
//                         data-error="Este campo es requerido"
//                         />
//                         <div className="help-block with-errors form-error"></div>
//                     </div>
//                     </div>
//                 </fieldset>
//                 <fieldset>
//                     <legend>Correo electrónico</legend>
//                     <div className="form-group">
//                     <div className="col-md-12">
//                         <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         className="form-control"
//                         required
//                         data-error="Este campo es requerido"
//                         />
//                         <div className="help-block with-errors form-error"></div>
//                     </div>
//                     </div>
//                 </fieldset>
//                 <fieldset>
//                     <legend>Numero de teléfono</legend>
//                     <div className="form-group">
//                     <div className="col-md-12">
//                         <input
//                         id="phone"
//                         name="phone"
//                         type="phone"
//                         className="form-control"
//                         required
//                         data-error="Este campo es requerido"
//                         />
//                         <div className="help-block with-errors form-error"></div>
//                     </div>
//                     </div>
//                 </fieldset>
//                 <fieldset>
//                     <legend>Mensaje</legend>
//                     <div className="form-group">
//                     <div className="col-md-12">
//                         <textarea name="message" className="form-control"></textarea>
//                     </div>
//                     </div>
//                 </fieldset>
//                 <div className="col-md-12 text-center mb-3">
//                     <input type="submit" role="button" value="Enviar" className="button" />
//                 </div>
//                 </form>
//             </div>
//             <div className="contact-img col-xs-12 col-sm-12 col-md-6 col-lg-6">
//                 <img
//                 alt="image"              
//                 src={due15}
//                 />
//             </div>
//             </div>
//         </div>
//         </section>

//         <div id="alert-success" className="alert alert-success">
//         <strong>Exito!</strong> El formulario se ha enviado correctamente.
//         <div><span>X</span></div>
//         </div>

//         <div id="alert-error" className="alert alert-danger">
//         <strong>Error!</strong> Ha ocurrido un error al enviar el formulario.
//         <div><span>X</span></div>
//         </div> 
//             </div>

//       );
    
//     }        
//     export default LaEmpresa;
