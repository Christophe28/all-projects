import React, { useRef } from 'react';
import { useState } from 'react';

import emailjs from 'emailjs-com';

import ViewWrapper from '../components/view-wrapper/view-wrapper';
import BreadcrumbTrail from '../components/view-wrapper/breadcrumb-trail';

const Contact = () => {
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userCompany, setUserCompany] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [alertName, setAlertName] = useState({});
    const [alertSurname, setAlertSurname] = useState({});
    const [alertCompany, setAlertCompany] = useState({});
    const [alertEmail, setAlertEmail] = useState({});

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        if(userName.length > 3 && userSurname.length > 3 && userCompany.length > 3){
            if(userEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                emailjs.sendForm("service_fodgcc8", "template_aohj9ra", form.current, "GEuG8e3vedJUUDsn8")
                .then((result) => {
                    alert("Le mail est bien envoyé ", result.text);
                },
                (error) => {
                    console.log("c'est l'erreur :", error)
                }
                )
            }
            else {
                alert("L'email foire");
            }
        }
        else {
            alert("Les noms foirent")
        }
    }
    
    const alertEmptyInput = (setDataUser, dataUser, setAlertStyle) => {
        setDataUser(dataUser);

        if(dataUser.length > 2) {
            setAlertStyle({});
        }
        else {
            setAlertStyle({border: "3px solid red"})
        }
    }

    return (
        <div className="container-contact">
            <ViewWrapper>
                <BreadcrumbTrail>
                    <div className="container-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <input 
                                type="text" 
                                name="contact_name" 
                                placeholder="Nom" 
                                style={alertName} 
                                onChange={(e) => alertEmptyInput(setUserName, e.target.value, setAlertName)}
                            />
                            <input 
                                type="text" 
                                name="contact_surname" 
                                placeholder="Prénom" 
                                style={alertSurname} 
                                onChange={(e) => alertEmptyInput(setUserSurname, e.target.value, setAlertSurname)}
                            />
                            <input 
                                type="text" 
                                name="contact_company_name" 
                                placeholder="Nom de l'entreprise" 
                                style={alertCompany} onChange={(e) => alertEmptyInput(setUserCompany, e.target.value, setAlertCompany)}
                            />
                            <input 
                                type="email" 
                                name="contact_email" 
                                placeholder="Mail" 
                                style={alertEmail} 
                                onChange={(e) => alertEmptyInput(setUserEmail, e.target.value, setAlertEmail)}
                            />
                            <input 
                                type="textarea" 
                                name="contact_attention" 
                                placeholder="Information complémentaire" 
                            />
                            <input 
                                type="submit" 
                                className="submit-form" 
                            />
                        </form>
                    </div>
                </BreadcrumbTrail>
            </ViewWrapper>
        </div>
    );
};

export default Contact;