import React from 'react';
import './Contact.css';

const name = "Mamed"
const avatar = 'https://randomuser.me/api/portraits/men/39.jpg'
const status = window.navigator.onLine;


function Contact() {
    return (
        <div className="Contact" >
            <img class="avatar" src={avatar} />
            <div class="Status status-text">
                <h4 class="name">{name}</h4>
                <p class="status"><span class="status-online"></span>{status ? "online" : "offline"}</p>

            </div>
        </div>
    )
}


export default Contact;

/**<p>Salade, Tomates, oignons ?</p> */