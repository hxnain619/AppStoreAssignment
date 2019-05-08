import React, { Component } from 'react';
import Nav from '../../component/global/nav';
import M from 'materialize-css';
import Footer from  '../../component/global/footer';
import Cards from '../../component/RenderCards/HomeCards';
import ImageSlider from '../../component/ImageSlider/slider';
import PopUpModal from '../../component/global/popUpModel';

class Home extends Component {
    render() {
        
        return (<div className="app">
            <Nav activeLink="home" />
            <ImageSlider />
            <Cards />
            <PopUpModal  />
            <Footer />
        </div>)
    }
    componentDidMount() {
        //JQuery Initialization
        let select = document.querySelectorAll('select'),
            sidenav = document.querySelectorAll('.sidenav'),
            collapsible = document.querySelectorAll('.collapsible'),
            tabs = document.querySelectorAll('.tabs');

        M.FormSelect.init(select);
        M.Sidenav.init(sidenav);
        M.Collapsible.init(collapsible);
        M.Tabs.init(tabs);
    }
}
export default Home;