import React from 'react';
import { data } from './../../data';
import { auth, db } from '../../Auth/auth';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class Download extends React.Component {
    constructor() {
        super();
        this.state = {
            apps: []
        }
    }
    componentDidMount() {
        db.collection("userList").doc(`${auth.currentUser.uid}`).get().then((data) => {
            var appData = data.data().userData.apps;
            this.setState({
                apps: appData
            })
        })

    }

    remove(newappname) {
        var arr = []
        db.collection("userList").doc(`${auth.currentUser.uid}`).get().then((data) => {
            var appData = data.data().userData.apps;

            var touninstall = appData.indexOf(newappname);
            var initiallength = appData.length;
            appData.splice(touninstall, 1);
            if (appData.length < initiallength) {
                this.setState({
                    Notdownloaded: true
                })
                swal('success', 'uninstall Successfully', { icon: 'success' })
            }

            var userData = Object.values(data.data());
            appData.map(data => {

                return arr.push(data);
            })
            userData = {
                userName: auth.currentUser.displayName,
                email: auth.currentUser.email,
                apps: arr
            }
            db.collection("userList").doc(`${auth.currentUser.uid}`).set({
                userData
            }, { merge: true })
                .then(() => {
                    return window.location.reload()
                })
        })

    }

    render() {
        const { apps } = this.state;
        return (
            <div className="container" >
                <div className="row">
                    <div className="card col s12 m12 l12" >
                        <center> <h3 >{apps.length} Items In Your Cart </h3> </center>
                        <div className="container">
                            <div className="row ">
                                <div className="mobile-show col s12 m7 l7">
                                    Item
                        </div>
                                <div className="mobile-hide col s12 m2 l1">
                                    Rating
                        </div>
                                <div className="mobile-hide col s12 m1 l3">
                                    Age
                        </div>
                                <div className="mobile-hide col s12 m2 l1">
                                    Downloads
                        </div>
                            </div>
                        </div>
                        <div className="divider" ></div>
                        {data.map((info, index) => {
                            return apps.map(app => {
                                return info.name === app ?
                                    <div key={index} className="container" >
                                        <div className="row" style={{ paddingTop: 20 }}>
                                            <div className="col s12 m7 l7">
                                                <img className="col s4 m4 l4 item-img" src={info.icon} alt="" />
                                                <div className="col s8 m8 l8">
                                                    <h5 className="col s12 m12 l12" >{info.name}</h5>
                                                    <p className="col s12 m12 l12" ></p>
                                                    <span className="col s12 m12 l12 pink"
                                                        onClick={() => this.remove(info.name)}
                                                    > Remove <i className="material-icons right">close</i></span>
                                                </div>
                                            </div>
                                            <div className="col s3 m1 l1">
                                                {info.rating ? info.rating : 0}
                                            </div>
                                            <div className="col s6 m3 l3">
                                                {info.age_required ? info.age_required : "no age required"}
                                            </div>
                                            <div className="col s3 m1 l1">
                                                {info.downloads ? info.downloads : 0}
                                            </div>
                                        </div>
                                    </div>
                                    : null
                            })
                        })}
                        < div className="row grey-bg" >
                            <Link to='/'><button className="btn btn-large btn-primary pop-btn col s10 m5 l3 left pink-bg">Back To Shop</button></Link>
                        </div>
                    </div>
                </ div>
            </div>
        )
    }
}

export default Download;