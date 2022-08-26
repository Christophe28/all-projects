import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import ViewWrapper from '../components/view-wrapper/view-wrapper';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_fodgcc8", "template_aohj9ra", form.current, "GEuG8e3vedJUUDsn8")
        .then((result) => {
            console.log("Le mail est bien envoyé ", result.text);
        },
        (error) => {
            console.log("c'est l'erreur :", error)
        }
        )
    }

    return (
        <div className="container-contact">
            <ViewWrapper>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="contact_name" placeholder="Nom"/>
                    <input type="text" name="contact_surname" placeholder="Prénom"/>
                    <input type="text" name="contact_company_name" placeholder="Nom de l'entreprise" />
                    <input type="email" name="contact_email" placeholder="Mail" />
                    <input type="textarea" name="contact_attention" placeholder="Information complémentaire" />
                    <input type="submit" />
                </form>
            </ViewWrapper>
        </div>
    );
};

export default Contact;