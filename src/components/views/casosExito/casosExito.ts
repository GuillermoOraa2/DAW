import logoArbor from '../../../assets/images/casosExito/logo-arbor.png';
import imagenArbor from '../../../assets/images/casosExito/mockup_arbor.png';

import logoRFHE from '../../../assets/images/casosExito/logo-rfhe.png';
import imagenRFHE from '../../../assets/images/casosExito/mockup_rfhe.png';

import logoEntrenaVirtual from '../../../assets/images/casosExito/logo-entrena-virtual.png';
import imagenEntrenaVirtual from '../../../assets/images/casosExito/mockup_entrena.png';

import logoSavso from '../../../assets/images/casosExito/logo-savso.png';
import imagenSavso from '../../../assets/images/casosExito/mockup_savso.png';

import logoGaia from '../../../assets/images/casosExito/logo-gaia.png';
import logoFUE from '../../../assets/images/casosExito/logo-fue.png';
import imagenGaia from '../../../assets/images/casosExito/mockup_gaia.png';

import logoPella from '../../../assets/images/casosExito/logo-pella.png';
import imagenPella from '../../../assets/images/casosExito/mockup_pella-2.png';

import logoAxis from '../../../assets/images/casosExito/logo-axispharma.png';
import imagenAxis from '../../../assets/images/casosExito/mockup_axispharma.png';

import googlePlayImagen from '../../../assets/images/casosExito/googleplay.png';
import appleStoreImagen from '../../../assets/images/casosExito/appstore.png';


const datosArbor={impar:true,logos:[logoArbor],
    nombre:"Arbor", urls:["https://www.arborfintech.com"],texto:"textoArbor", imagen:imagenArbor, 
    googlePlay:{imagen:googlePlayImagen,enlace:"https://play.google.com/store/apps/details?id=com.arbor.arbor&utm_source=landing1_bot%C3%B3n1&pli=1"},
    appleStore:{imagen:appleStoreImagen,enlace:"https://apps.apple.com/app/apple-store/id1265936537?utm_source=landing1_bot%C3%B3n1"}}
    
const datosRFHE={impar:false,logos:[logoRFHE],
    nombre:"Real Federación Hípica Española", urls:["https://www.rfhe.com"],texto:"textoRFHE", imagen:imagenRFHE, 
    googlePlay:{imagen:"",enlace:false},
    appleStore:{imagen:"",enlace:false}}
  
const datosEntrena={impar:true,logos:[logoEntrenaVirtual],
    nombre:"Entrena Virtual", urls:["https://www.entrenavirtual.es/app"],texto:"textoEntrenaVirtual", imagen:imagenEntrenaVirtual, 
    googlePlay:{imagen:googlePlayImagen,enlace:"https://play.google.com/store/apps/details?id=com.entrenavirtual.app&pli=1"},
    appleStore:{imagen:appleStoreImagen,enlace:"https://apps.apple.com/es/app/entrena-virtual/id1582517944?l=en"}}
      
const datosSavso={impar:false,logos:[logoSavso],
    nombre:"Savso", urls:["https://www.savso.es"],texto:"textoSavso", imagen:imagenSavso, 
    googlePlay:{imagen:"",enlace:false},
    appleStore:{imagen:"",enlace:false}}
    
const datosGaia={impar:true,logos:[logoGaia,logoFUE],
    nombre:"Gaia Program", urls:["https://www.gaianext.com","https://www.bridgenext.es"],texto:"textoGaia", imagen:imagenGaia, 
    googlePlay:{imagen:"",enlace:false},
    appleStore:{imagen:"",enlace:false}}
  
const datosPella={impar:false,logos:[logoPella],
    nombre:"Pella Athletika", urls:["https://pellaathletika.com/"],texto:"textoPella", imagen:imagenPella, 
    googlePlay:{imagen:googlePlayImagen,enlace:"https://play.google.com/store/apps/details?id=com.criterian.pella"},
    appleStore:{imagen:appleStoreImagen,enlace:"https://apps.apple.com/au/app/pella/id1212159923"}}
       
const datosAxisPharma={impar:true,logos:[logoAxis],
    nombre:"Axis Pharma", urls:["https://es.axispharma.com/"],texto:"textoAxis", imagen:imagenAxis, 
    googlePlay:{imagen:"",enlace:false},
    appleStore:{imagen:"",enlace:false}}

export {datosArbor,datosRFHE,datosEntrena,datosSavso,datosGaia,datosPella,datosAxisPharma}