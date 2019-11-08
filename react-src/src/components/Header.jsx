import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { appColor, headerHeight } from 'modules/theme';

import { CSSTransition } from 'react-transition-group';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'; */

/* import { logOut } from 'actions'; */

import { Container, utils } from 'styled-minimal';
import Icon from 'components/Icon';
import Logo from 'components/Logo';

const { responsive, spacer } = utils;

const HeaderWrapper = styled.header`
  /* background-color: #113740; */
  height: ${headerHeight}px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;

  width: 100%;
  /* height: 60px; */
  background-color: white;
  position: absolute;
  transition: all 2s ease;
  top: 45px;

  padding-left: 100px;
  padding-right: 100px;

  /* .animate {
    top: 50px;
  } */

  &:before {
    background-color: ${appColor};
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: 0;
    position: absolute;
    right: 0;
  }
`;

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  padding-bottom: ${spacer(2)};
  padding-top: ${spacer(3)};
`;

const Logout = styled.button`
  align-items: center;
  color: green;
  display: flex;
  font-size: 1.3rem;
  padding: ${spacer(2)};
  margin-top: -25px !important;

  ${responsive({ lg: 'font-size: 1.6rem;' })}; /* stylelint-disable-line */

  &.active {
    color: #fff;
  }

  span {
    display: inline-block;
    margin-right: 0.4rem;
    text-transform: uppercase;
  }
`;

const FixedHeader = styled(Container)`
  width: 100%;
  height: 45px;
  background-color: #008000;
  position: absolute;
  top: 0;
  color: white;
  max-width: none;
  text-align: center;
`;

const HeaderTitleWithLogo = styled(Container)`
  margin-top: -78px;
  margin-left: 90px;
  font-size: 36px;
  font-weight: 600;
  padding-left: 16px !important;
`;

const LogoHeader = styled(Container)`
  width: 30% !important;
  float: left !important;
`;

const StyledNavbar = styled(Navbar).attrs({
  as: 'header',
  variant: 'dark',
  role: 'banner',
})`
  @import '../../assets/css/theme.scss';
  min-height: 4rem;
  background-color: $darker;
  width: 100%;
  @include media-breakpoint-up(md) {
    position: sticky;
    top: 0;
    z-index: 1040;
  }
`;

const SkipToContentLink = styled('a')`
  composes: sr-only sr-only-focusable bg-primary text-white px-4 py-2 mr-2 from global;
`;

const StyledNavLink = styled(Nav.Link)`
  @import '../../assets/css/theme.scss';
  & + & {
    margin-left: $spacer;
  }
  &:global(.active) {
    font-width: 700;
  }
`;

const NAV_LINKS = [
  {
    link: '/',
    title: 'Accueil',
    exact: true,
  },
  {
    link: '/partners',
    title: 'Nos partenaires',
  },
  {
    link: '/contact',
    title: 'Contact',
  },
  ,
  {
    link: '/blog',
    title: 'Blog',
  },
];

const propTypes = {
  activePage: PropTypes.string,
};

function Header({ activePage }) {
  return (
    <div>
      <FixedHeader className="FixedHeader">
        <ol className="HomeColumns u-clearfix">
          <li className="HomeColumn HomeColumn--smaller">
            <h6 className="HomeBlock-title HomeBlock-title--secondary FixedHeaderInfo">
              Effectuez vos achats de medicaments et faites vous livrer à domicile
            </h6>
          </li>
          <li className="HomeColumn HomeColumn--smaller HomeColumn--middle">
            <h6 className="HomeBlock-title HomeBlock-title--secondary FixedHeaderInfo">
              Votre Pharmacie en ligne pour le Cameroun
            </h6>
          </li>
          <li className="HomeColumn HomeColumn--smaller">
            <h6 className="HomeBlock-title HomeBlock-title--secondary FixedHeaderInfo">
              (+237) 678-999-229/ (+237) 693-267-649
            </h6>
          </li>
        </ol>
      </FixedHeader>
      <header className="Header">
        <HeaderWrapper className="animate">
          <HeaderContainer>
            <StyledNavbar expand collapseOnSelect>
              <Navbar.Brand href="/">
                <LogoHeader className="LogoHeader">
                  <Logo type="logo" />
                  <HeaderTitleWithLogo className="HeaderTitleWithLogo">
                    Swiftdrugs
                  </HeaderTitleWithLogo>
                </LogoHeader>
              </Navbar.Brand>
              <Nav role="navigation" id="top" className="d-flex d-md-flex">
                {NAV_LINKS.map(({ link, title, exact }) => (
                  <StyledNavLink
                    key={link}
                    href={link}
                    active={exact ? activePage === link : link}
                    /* active={exact ? activePage === link : activePage.startsWith(link)}*/
                  >
                    {title}
                  </StyledNavLink>
                ))}
              </Nav>
            </StyledNavbar>
          </HeaderContainer>
        </HeaderWrapper>
      </header>
    </div>
  );
}

Header.propTypes = propTypes;

export default Header;

/*
export default function Header() {

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  }; */

/*
export default class Header extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      FixedHeader: true
    }
 }

  <div>
      {this.state.FixedHeader ? <FixedHeader className="FixedHeader">
        <FixedHeaderInfo1 className="FixedHeaderInfo1">Effectuez vos achats de medicaments et faites vous livrer a domicile</FixedHeaderInfo1>
        <FixedHeaderInfo2 className="FixedHeaderInfo2">Votre Pharmacie en ligne pour le Cameroun</FixedHeaderInfo2>
        <FixedHeaderInfo3 className="FixedHeaderInfo3">+237 6xx xx xx xx</FixedHeaderInfo3>
      </FixedHeader> : null }
      <HeaderWrapper className={`showHeader${this.state.FixedHeader ? ' animate' : ''}`}>
        <HeaderContainer>
        <logoHeader>
          <a href="/">
            <Logo type="logo"/>
          </a>

          <a href="/">
            <HeaderTitleWithLogo>Swiftdrugs</HeaderTitleWithLogo>
          </a>
        </logoHeader>

          <Logout onClick={this.handleClickLogout}>
            <span>logout</span>
            <Icon name="sign-out" width={16} />
          </Logout>
        </HeaderContainer>
      </HeaderWrapper>
      </div> */

/* static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  handleClickLogout = () => {
    const { dispatch } = this.props;

    dispatch(logOut());
  };
  render() {
    return (
      <UncontrolledDropdown>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  } */
/* } */
