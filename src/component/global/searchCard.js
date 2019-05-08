import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { data } from '../../data';
import DetailCard from '../RenderCards/detailCard';

export default class SearchCard extends Component {

    render() {
        const { value } = this.props;
        return (
            <div className="search-user">
                <div className='user-list'>
                    {data.map((info, key) => {
                        return info.name.toLowerCase() === value.toLowerCase() ?

                            <Link to={{
                                pathname: '/detail',
                                state: { info }
                            }}
                            style={{
                                color: 'black'
                            }} >
                                <div
                                    key={key}
                                    className='user'>
                                    <img src={info.icon ? `${info.icon}` : ""} alt='' />
                                    <h6 style={{
                                        paddingLeft: 10
                                    }}>{info.name}</h6>
                                </div>
                            </Link>
                            : null
                    })}
                </div>
            </div>

        )
    }
}
