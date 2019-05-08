import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from '../Auth/auth';

// Components

import Home from "../screen/HomeComponent/home";
import Download from "../component/PopupCards/downloadCart";
import GamesPage from "../screen/Games/gamePage";
import Online_Earning from "../screen/Online_Earning/onlineEarning";
import InfoPage from "../screen/Info/infoPage";
import SocialAppPage from "../screen/SocialApp/socialPage";
import DetailPage from "../screen/DetailPage/detailPage";
import NotFoundPage from "../screen/NotFound/404Page";
import Loading from "../component/global/loading";
import Profile from "../screen/Profile/profile";

export default class AppRouter extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      loading: true
    }
  }

  componentDidMount() {

    auth.onAuthStateChanged(async (res) => {

      this.setState({ loading: true });
      if (res && res.email) {
        await this.setState({ isAuthenticated: true, loading: false })
      } else {
        await this.setState({ isAuthenticated: false, loading: false })
      }
    });
  }
  render() {
    const { isAuthenticated, loading } = this.state;
    return (
      <div>
        {loading ? <Loading /> :

          <BrowserRouter>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Games" component={GamesPage} exact />
              <Route path="/Info" component={InfoPage} exact />
              <Route path="/Online_Earning" component={Online_Earning} exact />
              <Route path="/Social_App" component={SocialAppPage} exact />
              <Route path="/detail" component={DetailPage} exact />
              <Route path="/download" component={Download} exact />
              {isAuthenticated ? <Route path='/profile' component={Profile} exact /> : null}
              <Route path="/*" component={NotFoundPage} exact />
            </Switch>
          </BrowserRouter>}
      </div>
    );
  }
};

