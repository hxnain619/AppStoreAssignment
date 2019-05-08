import React from 'react';
import { Link } from 'react-router-dom';
import PopUpModal from '../global/popUpModel';
import { login } from '../../Auth/auth';

class SignInCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: ""
        }
        this.Popup = this.Popup.bind(this)
        this.hide = this.hide.bind(this);
    }
    render() {
        const { hide } = this.props;
        const { modal } = this.state;
        return (
            <div className="popup-card" >
                <div className="container">
                    <div className="row">
                        <div className="popup-form card col s8 m8 l6" >
                            <span className="heading" >
                                <h3 >Sign In
                                    <Link to="#!" onClick={() => {
                                        document.getElementsByClassName('popup-card')[0].style.display = "none";
                                        hide();
                                    }} className="black" ><i className="material-icons right">close</i></Link></h3>
                            </span>
                            <input className="col s12 m12 l12 " id='signIn-email' type="email" placeholder="Enter Email" />
                            <input className="col s12 m12 l12 " id='signIn-pass' type="password" placeholder="Enter Password" />
                            <p>
                                <label>
                                    <input name="group1" type="checkbox" />
                                    <span  >Remember Me</span>
                                </label>
                            </p>
                            <button className="btn btn-large btn-primary pop-btn col s12 m12 l12"
                            onClick={(e) => login(e)}
                            >Sign In</button>
                            <Link to="#!" onClick={() => {
                                this.Popup('forgot')
                            }} className="pink left">Forgot Password</Link>
                            <Link to="#!" onClick={() => this.Popup('signUp')} className="pink right">Have An Account?</Link>
                        </div>
                    </div>
                    {<PopUpModal data={modal} hide={this.hide} />}
                </div>
            </div>
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

    show() {
        var elem = document.querySelector('.popup-card');
        if (elem.hasAttribute('style')) {
            elem.removeAttribute('style');
        }
    }

}

export default SignInCard;