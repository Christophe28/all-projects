import React from 'react';
import ViewWrapper from '../components/view-wrapper/view-wrapper';

const Contact = () => {
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