import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { data } from '../../data';

class Cards extends Component {

    render() {
        const { id } = this.props;
        return (
            <div className='container' style={{
                padding: 10
            }}>
                <div className="row">
                    {data.map((info, index) => {
                        return info.category === id ?

                            (<div key={index} className="col s12 m4 l4">
                                <div className="card">
                                    <div className="card-image" >
                                        <img src={info.icon} alt='' />
                                        <span className="card-title" style={{ color: 'black' }} >{}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{info.name}</p>
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
            </div>
        )
    }
}
export default Cards;