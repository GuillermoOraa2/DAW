import { useTranslation } from 'react-i18next';
import './casosExito.css';

const Caso = ({data}) => {
  const { t } = useTranslation();
  const alt = `logo ${data.nombre}`;
  const logos=(data.logos).map((logo)=><img key={logo} src={logo} alt={alt} />);
  const urls=(data.urls).map((url)=><p key={url}><strong><a href={url} target="_blank" rel="noreferrer">{url}</a></strong></p>);  return (
      <div className='grid-container'>
        <div className={data.impar? "item1":"item2"}>
       {/*  <div className='item1'> */}
           <img src={data.imagen} alt={alt} />
        </div>
        <div className={data.impar? "item2":"item1"}>
        {/* <div className= 'item2'> */}
        <div className=' grid-container2'>
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
          <div className={data.googlePlay.enlace? "itemTienda":"itemTiendaNone"}>
            {data.googlePlay.enlace &&
              <a href={data.googlePlay.enlace} target="_blank" rel="noreferrer"><img className="alignleft image-668" src={data.googlePlay.imagen} alt={alt} /></a>
            }
            {data.appleStore.enlace &&
              <a href={data.appleStore.enlace} target="_blank" rel="noreferrer"><img className="alignleft image-668" src={data.appleStore.imagen} alt={alt} /></a>
            }
          </div>
          <div className='itemBoton'>
            <a className="btn btn-primary alignleft" href={data.urls[0]} target="_blank" rel="noreferrer">{t('ir')} {data.nombre}</a>
          </div>
        </div>
        </div>          
      </div>

      );
    
}        
export default Caso;