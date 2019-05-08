import React from 'react';
import Nav from '../../component/global/nav';
import M from 'materialize-css';
import Header from '../../component/global/header';
import Cards from '../../component/RenderCards/Cards';
import PopUpModal from '../../component/global/popUpModel';
import Footer from  '../../component/global/footer';

class SocialAppPage extends React.Component {

    render() {
        return (
            <div>
                <Nav activeLink="Social_App" />
                <Header id='Social_App'/>
                <Cards id="Social" />
                <PopUpModal />
                <Footer />
            </div>
        )
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

export default SocialAppPage;