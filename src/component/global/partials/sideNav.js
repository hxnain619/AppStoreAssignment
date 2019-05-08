import React from 'react';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
    render() {
        return (
            <ul className="sidenav" id="mobile-demo">
                {this.listItems()}
            </ul>
        )
    }

    listItems() {
        let temp = [], i;

        for (i = 0; i < this.props.text.length; i++) {

            if (this.props.active === this.props.text[i]) {
                temp.push(
                    <li key={i}>
                        <Link to={this.props.text[i]} className="active waves-effect waves-light sidenav-close">
                            {this.props.text[i]}
                        </Link>
                    </li>
                )
            }
            else {
                temp.push(
                    <li key={i}>
                        <Link to={this.props.text[i]} className="waves-effect waves-light sidenav-close">
                            {this.props.text[i]}
                        </Link>
                    </li>
                )
            }

        }

        return temp;
    }
}

export default SideNav;