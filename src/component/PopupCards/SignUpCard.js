import React from 'react';
import { Link } from 'react-router-dom';
import PopUpModal from '../global/popUpModel';
import { Register } from '../../Auth/auth';

class SignUpCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: ""
        }
        this.Popup = this.Popup.bind(this);
        this.hide = this.hide.bind(this);
    }

    render() {
        const { hide } = this.props;
        const { modal } = this.state;

        return (
            <center>
                <div className="popup-card" >
                    <div className="container">
                        <div className="row">
                            <div className="popup-form  card col s8 m8 l6" >
                                <span className="heading" >

                                    <h3 >Sign Up
                                    <Link to="#!" className="black"
                                            onClick={() => {
                                                document.getElementsByClassName('popup-card')[0].style.display = "none";
                                                hide();
                                            }}
                                        ><i className="material-icons right">close</i></Link>
                                    </h3>
                                </span>
                                <input className="col s12 m12 l12 profile-name" type="text" placeholder="Enter Username" />
                                <input className="col s12 m12 l12 signUp-email" type="email" placeholder="Enter Email" />
                                <input className="col s12 m12 l12 signUp-pass" type="password" placeholder="Enter Password" />
                                <button className="btn btn-large btn-primary pop-btn col s12 m12 l12"
                                onClick={(e) => Register(e, this)}
                                >Sign Up</button>
                                <span >Already A Member ? <Link to="#!" onClick={() => this.Popup('signIn')}
                                    className="pink" >Sign In</Link></span>
                            </div>
                        </div>
                        {<PopUpModal data={modal} hide={this.hide} />}
                    </div>
                </div>
            </center>

        )
    }
    Popup(id) {

        this.setState({
            modal: id
        })
    }

    hide() {
        this.setState({
            modal: null
        })
    }
}

export default SignUpCard;