import React from 'react';
import FontAwesomeIcons from './fontAwesomeIcons';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            linkText: [],
            show: false,
            socialClasses: ["fab fa-facebook-f", "fab fa-twitter"
                , "fab fa-google-plus-g", "fab fa-linkedin-in"]
        }
    }
    render() {

        return (
            <footer className="container-fluid footer">
                <div className="container container-first">
                    <div className="row">
                        {this.first()}
                        {this.second()}
                    </div>
                </div>
                <div className="container footer-second-container">
                    <div className="divider"></div>
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <h4  style={{fontWeight: "bold",color:"#f35698"}}>App Store</h4>
                            <div>
                                {this.renderIcons()}
                            </div>
                            <p>&copy; shopMate.com. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

    first() {
        return (
            <div className="col s12 l6">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5>QUESTIONS?</h5>
                            <div className="divider"></div>
                            <div className="row">
                                <div className="col s12">
                                    <ul>
                                        {this.getList()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    second() {
        return (
            <div className="col s12 l6">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5>What's In Store</h5>
                            <div className="divider"></div>
                            <div className="row">
                                <div className="col s12">
                                    <ul>
                                        {this.getList2()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getList() {
        const linkText = ['Help', 'Track Order', 'Return']

        let temp = [];
        for (let i = 0; i < linkText.length; i++) {

            temp.push(
                <li key={i} >
                    <Link to="#!" className="footer-link">
                        {linkText[i]}
                    </Link>
                </li>
            )
        }
        return temp
    }

    getList2() {
        var linkText = ['Games ', 'Best Websites', 'Product A-Z', 'Buy Things'];
        var temp2 = [];
        for (let i = 0; i < linkText.length; i++) {
            temp2.push(
                <li key={i} >
                    <Link to="#!" className="footer-link">
                        {linkText[i]}
                    </Link>
                </li>
            )
        }
        return temp2
    }

    renderIcons() {
        let temp = [];
        for (let i = 0; i < this.state.socialClasses.length; i++) {
            temp.push(
                <a key={i} className="btn-floating btn-large" style={{ margin: '5px' }} href="#!">
                    <FontAwesomeIcons iconClasses={this.state.socialClasses[i]} />
                </a>
            );
        }

        return temp;

    }

}

export default Footer;