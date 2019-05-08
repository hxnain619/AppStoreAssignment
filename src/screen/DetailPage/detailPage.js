import React from 'react';
import {Redirect} from 'react-router-dom';
import Nav from '../../component/global/nav';
import M from 'materialize-css';
import Header from '../../component/global/header';
import PopUpModal from '../../component/global/popUpModel';
import Footer from '../../component/global/footer';
import DetailCard from '../../component/RenderCards/detailCard';

export default class DetailPage extends React.Component {
    render() {

        const info  = this.props.location;

        return (<div>
            {info && info.state ?
                <div>
                    <Nav />
                    <Header id='detail' />
                    <DetailCard info={info.state.info} />
                    <PopUpModal />
                    <Footer />
                </div> : <Redirect to='/ads' />}
        </div>)
    }

    componentDidMount() {
        //JQuery Initialization
        let select = document.querySelectorAll('select'),
            sidenav = document.querySelectorAll('.sidenav'),
            collapsible = document.querySelectorAll('.collapsible'),
            dropdown = document.querySelectorAll('.dropdown-trigger'),
            tabs = document.querySelectorAll('.tabs');

        M.Dropdown.init(dropdown)
        M.FormSelect.init(select);
        M.Sidenav.init(sidenav);
        M.Collapsible.init(collapsible);
        M.Tabs.init(tabs);
    }

}