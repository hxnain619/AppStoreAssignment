import React from 'react';
import {Link } from 'react-router-dom';

class ContactCard extends React.Component {
    render() {
        return (
            <center>
                <div className="popup-card" >
                    <div className="container">
                        <div className="row">
                            <div className="popup-form card col s8 m8 l6" >

                               
                                <h4 style={{ color: "#f0458cee" }}>
                                <Link to="#!" className="black "
                                onClick={() => {
                                    document.getElementsByClassName('popup-card')[0].style.display = "none";
                                }}
                                ><i className="material-icons right">close</i></Link>
                                Contact Us 
                                </h4>
                                <input className="col s12 m12 l12" type="text" placeholder="Enter Name" />
                                <input className="col s12 m12 l12" type="email" placeholder="Enter Email" />
                                <textarea className="materialize-textarea col s12 m12 l12" placeholder="Your Message ..." ></textarea>
                                <button className="btn btn-large btn-primary pop-btn col s12 m12 l12">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
}
export default ContactCard;