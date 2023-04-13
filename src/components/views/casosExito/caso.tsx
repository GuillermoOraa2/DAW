import { useTranslation } from 'react-i18next';
import './casosExito.css';

const Caso = ({data}) => {
  const { t } = useTranslation();
  const alt = `logo ${data.nombre}`;
  const logos=(data.logos).map((logo)=><img src={logo} alt={alt} />);
  const urls=(data.urls).map((url)=><p><strong><a href={url}>{url}</a></strong></p>);
  return (
      <div className='grid-container'>
        <div className='item1'>
           <img src={data.imagen} alt={alt} />
        </div>
        <div className='item2 grid-container2'>
          <div className='itemLogo'>
            {logos}
          </div>
          <div className='itemNombre'>
            <h3>{data.nombre.toUpperCase()}</h3>
          </div>
          <div className='itemEnlaces'>
            {urls}
          </div>
          <div className='itemTexto'>
            <p>{t(`${data.texto}`)}</p>
          </div>
          <div className='itemTienda'>
            {data.googlePlay.enlace &&
              <a href={data.googlePlay.enlace}><img className="alignleft image-668" src={data.googlePlay.imagen} alt={alt} /></a>
            }
            {data.appleStore.enlace &&
              <a href={data.appleStore.enlace}><img className="alignleft image-668" src={data.appleStore.imagen} alt={alt} /></a>
            }
          </div>
          <div className='itemBoton'>
            <a className="btn btn-primary alignleft" href={data.urls[0]}>Ir a {data.nombre}</a>
          </div>
        </div>          
      </div>

      );
    
}        
export default Caso;