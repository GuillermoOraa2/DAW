import React from 'react';
import './contacto.css'
class contacto extends React.Component {
    render() {
      return (
        <div>
            <div className='container mb-5'>
              <div className='mt-5 mb-4'><h3 className='fw-bold'>Contacto</h3></div>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 text-start ps-5 fs-4'>
                    <p>Calle de Juan de Mariana, 15</p>
                    <p>28045 Madrid</p>
                    <p className='text-primary'>info@criterian.es</p>
                    <iframe width="95%" height="500"  margin-height="0" margin-width="0" className='mb-5'

                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=C.%20de%20Juan%20de%20Mariana,%2015+(talent%20garden)&amp;t=&amp;z=14&amp;ie=UTF8&amp;
                    iwloc=B&amp;output=embed">
                    </iframe>
                      
                    </div>
                    <div className='col-lg-6 col-sm-12 ps-5 fs-5'>
                    <form className='text-start' >
                        {/* <!-- 4 column input --> */}
                        <div className="row mb-4">
                          <div className="col">
                            <div className="form-outline">
                              <label className="form-label fw-bold is-required" htmlFor="form-name">Nombre</label>
                              <input type="text" id="form-name" className="form-control w-50 rounded-0" />
                              
                            </div>
                          </div>
                        </div>

                        {/* <!-- Correo input --> */}
                        <div className="form-outline mb-4">
                        <label className="form-label fw-bold is-required" htmlFor="form-email">Correo electrónico</label>
                        <input type="email" id="form-email" className="form-control w-50 rounded-0" />
                        </div>

                        {/* <!-- Asunto input --> */}
                        <div className="form-outline mb-4">
                        <label className="form-label fw-bold" htmlFor="form-subject">Asunto</label>
                          <input type="text" id="form-subject" className="form-control w-50 rounded-0" />
                        
                        </div>

                        {/* <!-- Message input --> */}
                        <div className="form-outline mb-4">
                        <label className="form-label fw-bold" htmlFor="form-mensaje">Mensaje</label>
                          <textarea className="form-control h-100 rounded-0  w-75 mensaje-contacto" id="form-mensaje" rows={6}></textarea>
                        </div>

                        {/* <!-- Submit button --> */}
                        <button type="submit" className="btn enviar btn-block mb-4 fs-5 rounded-0 border">Enviar</button>
                      </form>
                    </div>
                </div>
            </div>  
        </div>
      );
    }
}        
export default contacto;