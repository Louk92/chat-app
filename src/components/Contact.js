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
            <img className="avatar" src={props.avatar} />
            <div className="Status status-text">
                <h4 className="name">{props.name}</h4>
                <p className="status ">
                    <span className={props.online ? "status-online" : "status-offline"}></span>
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

