import React from 'react';
import emailjs from 'emailjs-com';

import ViewWrapper from '../components/view-wrapper/view-wrapper';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("gmail", "template_aohj9ra", e.target, "service_fodgcc8")
        .then((result) => {
            console.log("Le mail est bien envoyé ", result.text);
        },
        (error) => {
            console.log(error)
        }
        )
    }

    return (
        <div className="container-contact">
            <ViewWrapper>
                <form>
                    <input type="text" placeholder="Nom"/>
                    <input type="text" placeholder="Prénom"/>
                    <input type="text" placeholder="Nom de l'entreprise" />
                    <input type="email" placeholder="Mail" />
                    <input type="submit" />
                </form>
            </ViewWrapper>
        </div>
    );
};

export default Contact;