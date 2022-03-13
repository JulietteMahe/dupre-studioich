import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className='contact-title'>Contact</div>
      <div className='contact-subtitle'>Une question, une demande ? C'est ici !</div>
      <div className="contactLeft">
        <p className="contactInfos">Contactez-nous directement </p>
        <p className="contactInfos">@ichparisthelabel@gmail.com</p>
        <p className="contactInfos">Tél. 0677119433</p>
      </div>
        <div className="contactRight">
          <form onSubmit="" className='contact-container'>
              <h2 className='contact-subtitle'>Ou via notre formulaire de contact</h2>
              <div className='contact-information-container'>
                  <div className='contact-input-container'>
                      <label for="firstname" className='contact-form-subtitle'>Prénom</label>
                      <input 
                        type="text" 
                        id="firstname" 
                        name="firstname" 
                        className='contact-input' 
                        placeholder=""
                        onFocus={(e) => e.target.placeholder = ""}  
                        onBlur={(e) => e.target.placeholder = ""}
                        onChange=""
                      />
                      <label for="lastname" className='contact-form-subtitle'>Nom</label>
                      <input 
                        type="text" 
                        id="lastname" 
                        name="lastname" 
                        className='contact-input' 
                        placeholder=""
                        onFocus={(e) => e.target.placeholder = ""}  
                        onBlur={(e) => e.target.placeholder = "doe"}
                        onChange=""
                      />
                    </div>
                    <div className='contact-input-container'>
                      <label for="email" className='contact-form-subtitle'>Email</label>
                      <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        className='contact-input' 
                        placeholder=""
                        onFocus={(e) => e.target.placeholder = ""}  
                        onBlur={(e) => e.target.placeholder = ""}
                        onChange=""
                      />
                      <label for="subject" className='contact-form-subtitle'>Site Web</label>
                      <input 
                        type="text" 
                        id="website" 
                        name="website" 
                        className='contact-input' 
                        placeholder=""
                        onFocus={(e) => e.target.placeholder = ""}  
                        onBlur={(e) => e.target.placeholder = ""}
                        onChange=""
                      />
                      <label for="description" className='contact-form-subtitle'>Message</label>
                      <textarea 
                        type="text" 
                        id="description" 
                        name="description" 
                        className='contact-input-description'
                        placeholder=""
                        onFocus={(e) => e.target.placeholder = ""}  
                        onBlur={(e) => e.target.placeholder = ""}
                        onChange=""
                      />
                  </div>
                  <button type="submit" className='contactButton'>Envoyer</button>
                </div>                
            </form> 
        </div>           
    </div>
  )
}

export default Contact;