import React from 'react';
import { Redirect } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { auth, db } from '../../Auth/auth';
import swal from 'sweetalert';
export default class DetailCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            isAuthenticated: false,
            userName: "",
            Notdownloaded: true
        }
    }
    componentDidMount() {

        auth.onAuthStateChanged(async (res) => {

            this.setState({ loading: true });
            if (res && res.email) {
                await this.setState({ isAuthenticated: true, loading: false, userName: auth.currentUser.displayName })
            } else {
                await this.setState({ isAuthenticated: false, loading: false })
            }
        });
    }

    componentWillMount() {
        var arr = []
        const newappname = this.props.info.name;
        auth.onAuthStateChanged(async (res) => {

            if (res && res.email) {
               await db.collection("userList").doc(`${auth.currentUser.uid}`).get().then((data) => {
                    var appData = data.data().userData.apps;
                    var flag = false;
                    appData.map(app => {
                        if (newappname === app) {
                            flag = true
                        } else {
                            return arr.push(app);
                        }
                    });
                    if (flag) {
                        this.setState({
                            Notdownloaded: false
                        })
                    }

                })
            }
        })
    }

    downloadNow(newappname) {
        var arr = []
        db.collection("userList").doc(`${auth.currentUser.uid}`).get().then((data) => {
            var appData = data.data().userData.apps;

            var flag = false;
            appData.map(app => {
                if (newappname === app) {
                    flag = true
                } else {
                    return arr.push(app);
                }
            });
            if (flag) {
                console.log('added');

                this.setState({
                    Notdownloaded: false
                })
            }

            var userData = Object.values(data.data());
            arr.push(newappname);
            userData = {
                userName: auth.currentUser.displayName,
                email: auth.currentUser.email,
                apps: arr
            }

            db.collection("userList").doc(`${auth.currentUser.uid}`).set({
                userData
            })
                .then(() => {
                    return window.location.reload()
                })
        })
    }

    uninstall(newappname) {
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
        })

    }
    render() {
        const { info } = this.props;
        const { isAuthenticated, Notdownloaded } = this.state;

        return (<div className='container' >
            {
                info.length !== 0 ?
                    <div className='row' >
                        <div className="col s12 l8 xl9">
                            <h5>Description </h5>
                            <div className="divider"></div>
                            <div className="row">
                                <div className="col s12 m8 l4 xl3 offset-m2">
                                    <div className="manga-poster-container">
                                        <img src={info.icon ?
                                            `${info.icon}` :
                                            "https://previews.123rf.com/images/mousemd/mousemd1710/mousemd171000009/87405336-404-not-found-concept-glitch-style-vector.jpg"
                                        } style={{ margin: 10, height: "100%", width: "100%" }} alt="" />
                                    </div>
                                </div>
                                <div className="col s12">
                                    <h3>{info.name}</h3>
                                    <p>{(info.description && info.description.length > 0) || (info.description !== "N/A") ? info.description : "missing ..."}</p>
                                    <div className="col m6 s12">
                                        <table className="striped centered">
                                            <tbody>
                                                <tr>
                                                    <td>Developer</td>
                                                    <td>{info.developer && info.developer.length > 0 ? info.developer : "unknown"}</td>
                                                </tr>
                                                <tr>
                                                    <td>Age Required</td>
                                                    <td>{info.age_required}</td>
                                                </tr>
                                                <tr>
                                                    <td>Downloads</td>
                                                    <td>{info.downloads ? info.downloads : 0}</td>
                                                </tr>
                                                {isAuthenticated && Notdownloaded ?
                                                    <tr>
                                                        <td><button onClick={() => {
                                                            this.downloadNow(info.name)
                                                            this.forceUpdate()
                                                        }}>Download Now!</button></td>
                                                    </tr> :
                                                    null}
                                                {isAuthenticated && !Notdownloaded ?
                                                    <tr>
                                                        <td>
                                                            <button onClick={() => {
                                                                this.uninstall(info.name)
                                                                this.forceUpdate()
                                                            }}>Uninstall</button>
                                                        </td>
                                                    </tr> : null}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col l12 m12 s12">
                                    <table className="striped centered">
                                        <tbody>
                                            <tr>
                                                <td>ratings</td>
                                                <td>
                                                    <StarRatings
                                                        rating={this.state.rating}
                                                        starRatedColor="rgb(255,215,0)"
                                                        starEmptyColor="grey"
                                                        starHoverColor="rgb(255,215,0)"
                                                        starDimension='20px'
                                                        changeRating={(e) => this.changeRating(e)}
                                                        numberOfStars={5}
                                                        name='rating'
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div> : <Redirect to='/asd' />
            }
        </div>)
    }

    changeRating = (e) => {
        this.setState({
            rating: e
        })
    }
}