import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../data';

class Cards extends React.Component {
    render() {
        return (
            <div className='container' >
                <div className="row">
                    <h4>Social</h4>
                    {data.map((info, index) => {
                        return info.category === "Social" ?

                            (<div key={index} className="col s12 m4 l4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={info.icon} alt="icon" />
                                        <span className="card-title" style={{ color: 'black' }} ></span>
                                    </div>
                                    <div className="card-content">
                                        <p>{info.name}</p>
                                    </div>
                                    <div className="card-action">
                                        <Link to={{ pathname: '/detail', state: { info: info } }} >Show Detail</Link>
                                    </div>
                                </div>
                            </div>) : null
                    })}
                </div>
                <div className="row">
                    <h4>Info</h4>
                    {data.map((info, index) => {
                        return info.category === "Info" ?

                            (<div key={index} className="col s12 m4 l4">
                                <div className="card">
                                    <div className="card-image" >
                                        <img src={info.icon} alt="icon" />
                                        <span className="card-title" style={{ color: 'black' }} >{info.name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{info.description.length !== 0 ? info.description : "no description"}</p>
                                    </div>
                                    <div className="card-action">
                                        <Link to={{
                                            pathname: '/detail',
                                            state: {
                                                info: info
                                            }
                                        }} >Show Detail</Link>
                                    </div>
                                </div>
                            </div>) : null
                    })}
                </div>
                <div className="row">
                    <h4>Games</h4>
                    {data.map((info, index) => {
                        return info.category === "Games" ?

                            (<div key={index} className="col s12 m4 l4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={info.icon} alt="icon" />
                                        <span className="card-title" style={{ color: 'black' }} >{info.name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{info.description.length !== 0 ? info.description : "no description"}</p>
                                    </div>
                                    <div className="card-action">
                                        <Link to={{ pathname: '/detail', state: { info: info } }} >Show Detail</Link>
                                    </div>
                                </div>
                            </div>) : null
                    })}
                </div>
                <div className="row">
                    <h4>Earning</h4>
                    {data.map((info, index) => {
                        return info.category === "Online Earning" ?
                            (<div key={index} className="col s12 m4 l4">
                                <div className="card">
                                    <div className="card-image">
                                        <img style={{maxHeight: 400,maxWidth: 400}} src={info.icon} alt="icon" />
                                        <span className="card-title" style={{ color: 'black' }} >{info.name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{info.name.length !== 0 ? info.description : "no description"}</p>
                                    </div>
                                    <div className="card-action">
                                        <Link to={{ pathname: '/detail', state: { info: info } }} >Show Detail</Link>
                                    </div>
                                </div>
                            </div>) : null
                    })}
                </div>
            </div>
        );
    }
}

export default Cards;
