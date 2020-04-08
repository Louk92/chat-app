import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { online: props.online }
    }
    render() {
        const { name, online, avatar } = this.props;

        return (
            <div className="Contact" >
                <img className="avatar" src={avatar} alt="avatar" />
                <div className="Status status-text">
                    <h4 className="name">{name}</h4>
                    <p className="status ">
                        <span
                            className={this.state.online ? "status-online" : "status-offline"}
                            onClick={event => {
                                const newStatus = !this.state.online;
                                this.setState({ online: newStatus });
                            }
                        }>
                        </span>
                        {this.state.online ? 'online' : "offline"}
                    </p>
                </div>
            </div>
        );
    }
}



export default Contact;

