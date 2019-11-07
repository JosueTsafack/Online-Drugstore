import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled, { css, ThemeProvider } from 'styled-components';
import treeChanges from 'tree-changes';

import history from 'modules/history';
import theme, { headerHeight } from 'modules/theme';
import { utils } from 'styled-minimal';

import config from 'config';
import { showAlert } from 'actions/index';

import Home from 'routes/Home';
import Private from 'routes/Private';
import NotFound from 'routes/NotFound';
import Partners from 'routes/Partners';
import Contact from 'routes/Contact';
import Blog from 'routes/Blog';

import Header from 'components/Header';
import SystemAlerts from 'containers/SystemAlerts';

import Footer from 'components/Footer';
import GlobalStyles from 'components/GlobalStyles';
import RoutePublic from 'components/RoutePublic';
import RoutePrivate from 'components/RoutePrivate';
import RoutePartners from 'components/RoutePartners';
import RouteContact from 'components/RouteContact';
import RouteBlog from 'components/RouteBlog';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  opacity: 1 !important;
  position: relative;
  transition: opacity 0.5s;
`;

const MainPrivate = ({ isAuthenticated }) =>
  isAuthenticated &&
  css`
    padding: ${utils.px(headerHeight)} 0 0;
  `;

const Main = styled.main`
  min-height: 100vh;

  ${MainPrivate};

  @media (max-width: 700px) {
    padding: 126px 0 0;
  }
`;

export class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    const { changedTo } = treeChanges(this.props, nextProps);

    /* istanbul ignore else */
    if (changedTo('user.isAuthenticated', true)) {
      dispatch(showAlert('Hello! And welcome!', { variant: 'success', icon: 'bell' }));
    }

    /* componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    nav = React.createRef();

    /* handleScroll = () => {
      $(window).scroll(function(){
        if ($(window).scrollTop() >= headerHeight) {
            $(".HeaderWrapper").css({"top": "0", "position": "fixed"});
        }
        else {
          $(".HeaderWrapper").css("top", "50px");
          $(".HeaderWrapper").css("position", "absolute");
        }
      });
  }*/
  }

  render() {
    const { dispatch, user } = this.props;

    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <AppWrapper logged={user.isAuthenticated}>
            <Helmet
              defer={false}
              htmlAttributes={{ lang: 'pt-br' }}
              encodeSpecialCharacters={true}
              defaultTitle={config.name}
              titleTemplate={`%s | ${config.name}`}
              titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
            />
            {user.isAuthenticated && <Header dispatch={dispatch} user={user} />}
            <Main isAuthenticated={user.isAuthenticated}>
              <Switch>
                <RoutePublic
                  isAuthenticated={user.isAuthenticated}
                  path="/"
                  exact
                  component={Home}
                />
                <RoutePrivate
                  isAuthenticated={user.isAuthenticated}
                  path="/private"
                  component={Private}
                />
                <RoutePartners
                  isAuthenticated={user.isAuthenticated}
                  path="/partners"
                  component={Partners}
                />
                <RouteContact
                  isAuthenticated={user.isAuthenticated}
                  path="/contact"
                  component={Contact}
                />
                <RouteBlog isAuthenticated={user.isAuthenticated} path="/blog" component={Blog} />
                <Route component={NotFound} />
              </Switch>
            </Main>
            <Footer />
            <SystemAlerts />
            <GlobalStyles />
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default hot(connect(mapStateToProps)(App));
