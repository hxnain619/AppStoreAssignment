import React from 'react';
import { Link } from 'react-router-dom';
import { Reset } from '../../Auth/auth';

class ForgotPassCard extends React.Component {
    render() {
        const { hide } = this.props;
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
                                            hide();
                                        }}
                                    ><i className="material-icons right">close</i></Link>
                                    Recover Account
                                </h4>
                                <input className="col s12 m12 l12" id="forgot-email" type="email" placeholder="Enter Email" />
                                <button className="btn btn-large btn-primary pop-btn col s12 m12 l12"
                                    onClick={(e) => Reset(e, this)}
                                >Recover</button>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
}
export default ForgotPassCard;