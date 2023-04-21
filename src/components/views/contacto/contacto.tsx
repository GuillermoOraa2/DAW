import { useTranslation } from 'react-i18next';
import './contacto.css'
import React, { useEffect } from 'react';

// import './contacto.js'-
const Contacto =()=>{
      const { t } = useTranslation();
      // // Aquí se agrega MyComponent
      useEffect(() => {
        const form = document.getElementById("contact-form");
        if (form!=null) {
          form.addEventListener("submit", function(e) {
            e.preventDefault();
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://jfwz9jkeha.execute-api.eu-west-1.amazonaws.com/default/contact-form-lambda");
            xhr.addEventListener("load", function() {
              if (xhr.status === 200) {
                document.getElementById("alert-success").style.display = "block";
              } else {
                document.getElementById("alert-error").style.display = "block";
              }
            });
            xhr.addEventListener("error", function() {
              document.getElementById("alert-error").style.display = "block";
            });
            var formData = new FormData(document.getElementById("contact-form"));
            var jsonData = JSON.stringify(Object.fromEntries(formData));
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(jsonData);
          });
        }
      }, []);
      
      return (
        <div>
            <div className='container mb-5'>
              <div className='mt-5 mb-4'><h3 className='fw-bold'>{t('contacto')}</h3></div>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 text-start ps-5 fs-4'>
                    <p>{t('direccion')}</p>
                    <p>28045 Madrid</p>
                    <p className='text-primary maill'><a href="mailto:info@criterian.es">info@criterian.es</a></p>
                    <iframe width="95%" height="500"  margin-height="0" margin-width="0" className='mb-5'

                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=C.%20de%20Juan%20de%20Mariana,%2015+(talent%20garden)&amp;t=&amp;z=14&amp;ie=UTF8&amp;
                    iwloc=B&amp;output=embed">
                    </iframe>
                    </div>
                    <div className='col-lg-6 col-sm-12 ps-5 fs-5'>
                    <form className='text-start' id='contact-form'>
                        {/* <!-- 4 column input --> */}
                        <div className="row mb-4">
                          <div className="col">
                            <div className="form-outline">
                              <label className="form-label fw-bold is-required" htmlFor="form-name">{t('nombre')}</label>
                              <input type="text" id="name" name='name' className="form-control w-50 rounded-0" required/>
                              
                            </div>
                          </div>
                        </div>

                        {/* <!-- Correo input --> */}
                        <div className="form-outline mb-4">
                        <label className="form-label fw-bold is-required" htmlFor="form-email">{t('email')}</label>
                        <input type="email" id="email" name='email' className="form-control w-50 rounded-0" required/>
                        </div>

                        {/* <!-- Asunto input --> */}
                        <div className="form-outline mb-4">
                        <label className="form-label fw-bold" htmlFor="form-subject">{t('asunto')}</label>
                          <input type="text" id="form-subject" name='form-subject' className="form-control w-50 rounded-0" />
                        
                        </div>

                        {/* <!-- Message input --> */}
                        <div className="form-outline mb-4">
                        <label className="form-label fw-bold" htmlFor="form-mensaje">{t('message')}</label>
                          <textarea className="form-control h-100 rounded-0  w-75 mensaje-contacto" name='message' id="message" rows={6}></textarea>
                        </div>

                        {/* <!-- Submit button --> */}
                        <button type="submit" className="btn enviar btn-block mb-4 fs-5 rounded-0 border" value="enviar">{t('enviar')}</button>
                      </form>
                    </div>
                    <div id="alert-success" className="alert alert-success">
                      <strong>Exito!</strong> El formulario se ha enviado correctamente.
                      <div><span className='success-x' >X</span></div>
                    </div>

                    <div id="alert-error" className="alert alert-danger">
                      <strong>Error!</strong> Ha ocurrido un error al enviar el formulario.
                      <div><span className='error-x' >X</span></div>
                    </div>
                </div>
            </div>  
        </div>
      );
}        
export default Contacto;