import PropTypes from 'prop-types';
import React from 'react';
import './Contact.css';

/*const name = "Mamed"
const avatar = 'https://randomuser.me/api/portraits/men/39.jpg'
const status = window.navigator.onLine;
*/

function Contact(props) {
    return (
        <div className="Contact" >
            <img class="avatar" src={props.avatar} />
            <div class="Status status-text">
                <h4 class="name">{props.name}</h4>
                <p class="status ">
                    <div class={props.online ? "status-online" : "status-offline"}></div>
                    {props.online ? 'online' : "offline"}
                </p>
            </div>
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;

