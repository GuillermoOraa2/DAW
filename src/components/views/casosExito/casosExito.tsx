import Caso from './caso'
import './casosExito.css';
import {datosArbor,datosRFHE,datosEntrena,datosSavso,datosGaia,datosPella,datosAxisPharma} from './casosExito.ts';
const CasosExito = () => {
  
  
  return (
      <div className='container' id='main'>
        <Caso data={datosArbor}/> 
        <Caso data={datosRFHE}/>
        <Caso data={datosEntrena}/>
        <Caso data={datosSavso}/>
        <Caso data={datosGaia}/>
        <Caso data={datosPella}/>
        <Caso data={datosAxisPharma}/> 
      </div>

      );
    
}        
export default CasosExito;