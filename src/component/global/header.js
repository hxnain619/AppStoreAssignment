import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const { id } = this.props;
        return (
            <div  >
                {id === "Games" ?
                    <div className="header-men"
                        style={{
                            background: "url('http://topworldgames.com/wp-content/uploads/2018/11/3458402-cod.jpeg') no-repeat"
                        }}
                    >
                        <div className="container" >
                            <h1 className="header-content">Games</h1>
                            <div className="row">
                                <div className="col l4">
                                    <ol>
                                        {list1.map((list, key) => {
                                            return (<li key={key} ><Link to="#!" >{list}</Link></li>)
                                        })}
                                    </ol>
                                </div>
                                <div className="col l4">
                                    <ol>
                                        {list2.map((list, key) => {
                                            return (<li key={key}>
                                                <Link to="#!" >{list}</Link>
                                            </li>)
                                        })}
                                    </ol>
                                </div>
                                <div className="col l4">
                                    <ol>
                                        {list3.map((list, key) => {
                                            return (<li key={key}>
                                                <Link to="#!">{list}</Link>
                                            </li>)
                                        })}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div> : id === "Online_Earning" ?
                        <div className="header-men"
                            style={{
                                background: "url('https://simarlab.it/wp-content/uploads/2016/12/simarlab_AdobeStock_81215412.jpeg.jpg') no-repeat"
                            }}
                        >
                            <div className="container" >
                                <h1 className="header-content">Online Earning</h1>
                                <div className="row">
                                    <div className="col l4">
                                        <ol>
                                            {list4.map((list, key) => {
                                                return (<li key={key} ><Link to="#!" >{list}</Link></li>)
                                            })}
                                        </ol>
                                    </div>
                                    <div className="col l4">
                                        <ol>
                                            {list5.map((list, key) => {
                                                return (<li key={key}>
                                                    <Link to="#!" >{list}</Link>
                                                </li>)
                                            })}
                                        </ol>
                                    </div>
                                    <div className="col l4">
                                        <ol>
                                            {list6.map((list, key) => {
                                                return (<li key={key}>
                                                    <Link to="#!">{list}</Link>
                                                </li>)
                                            })}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div> : id === "Social_App" ?
                            <div className="header-men"
                                style={{
                                    background: "url('https://cdn-images-1.medium.com/max/2600/1*qj4TwkmDVyfowLWcyLJ0rQ.jpeg') no-repeat"
                                }}
                            >
                                <div className="container" >
                                    <h1 className="header-content">Social Apps</h1>
                                    <div className="row">
                                        <div className="col l4">
                                            <ol>
                                                {list7.map((list, key) => {
                                                    return (<li key={key} ><Link to="#!" >{list}</Link></li>)
                                                })}
                                            </ol>
                                        </div>
                                        <div className="col l4">
                                            <ol>
                                                {list8.map((list, key) => {
                                                    return (<li key={key}>
                                                        <Link to="#!" >{list}</Link>
                                                    </li>)
                                                })}
                                            </ol>
                                        </div>
                                        <div className="col l4">
                                            <ol>
                                                {list9.map((list, key) => {
                                                    return (<li key={key}>
                                                        <Link to="#!">{list}</Link>
                                                    </li>)
                                                })}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div> : id === "Info" ?
                                <div className="header-men"
                                    style={{
                                        background: "url('https://latimesblogs.latimes.com/.a/6a00d8341c630a53ef017ee70c3a03970d-640wi')"
                                    }}
                                >
                                    <div className="container" >
                                        <h1 className="header-content">Info</h1>
                                        <div className="row">
                                            <div className="col l4">
                                                <ol>
                                                    {list10.map((list, key) => {
                                                        return (<li key={key} ><Link to="#!" >{list}</Link></li>)
                                                    })}
                                                </ol>
                                            </div>
                                            <div className="col l4">
                                                <ol>
                                                    {list11.map((list, key) => {
                                                        return (<li key={key}>
                                                            <Link to="#!" >{list}</Link>
                                                        </li>)
                                                    })}
                                                </ol>
                                            </div>
                                            <div className="col l4">
                                                <ol>
                                                    {list12.map((list, key) => {
                                                        return (<li key={key}>
                                                            <Link to="#!">{list}</Link>
                                                        </li>)
                                                    })}
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div> : id === "detail" ?
                                    <div className="header-men"
                                        style={{
                                            background: "url('https://latimesblogs.latimes.com/.a/6a00d8341c630a53ef017ee70c3a03970d-640wi')"
                                        }}
                                    >
                                        <div className="container" >
                                            <h1 className="header-content">Detail</h1>
                                        </div>
                                    </div>
                                    : null}
            </div>
        )
    }
}



export default Header;
// Games

const list1 = ["Simulations", "Adventures", "Massively Multiplayer Online", "Real Time Strategy"],
    list2 = ["First Person Shooters", "Sports", "Role-Playing", "Combat"],
    list3 = ["Actions", "Stealth Shooter", "Educational", "Puzzles"],
    // Websites

    list4 = [],
    list5 = [],
    list6 = [],
    // Social App

    list7 = [],
    list8 = [],
    list9 = [],
    // Info

    list10 = [],
    list11 = [],
    list12 = [];

