import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { appColor, headerHeight } from 'modules/theme';

/* import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';     
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'; */

import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { logOut } from 'actions';

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
  margin-top: -25px!important;

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
    top:0;
    color: white;
    max-width: none;
    text-align: center;
`;

const FixedHeaderInfo1 = styled(Container)`
    width: 45%;
    display:inline-block;
    color: white;
`;

const FixedHeaderInfo2 = styled(Container)`
    width: 30%;
    display:inline-block;
    color: white;
`;

const FixedHeaderInfo3 = styled(Container)`
    width: 25%;
    display:inline-block;
    color: white;
`;

const HeaderTitleWithLogo = styled(Container)`
    margin-top: -90px;
    margin-left: 90px;
    font-size: 36px;
    font-weight: 600;
    padding-left: 16px!important;
`;

const logoHeader = styled(Container)`
    width: 30%!important;
    float: left!important;
`;



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
  };


  /* handleClickLogout = () => {
    const { dispatch } = this.props;

    dispatch(logOut());
  }; */

  return (
    <div>
    <FixedHeader className="FixedHeader">
        <FixedHeaderInfo1 className="FixedHeaderInfo1">Effectuez vos achats de medicaments et faites vous livrer a domicile</FixedHeaderInfo1>
        <FixedHeaderInfo2 className="FixedHeaderInfo2">Votre Pharmacie en ligne pour le Cameroun</FixedHeaderInfo2>
        <FixedHeaderInfo3 className="FixedHeaderInfo3">+237 6xx xx xx xx</FixedHeaderInfo3>
    </FixedHeader>

    <header className="Header">
     <HeaderWrapper className="animate">
        <HeaderContainer>
        <logoHeader className="logoHeader">
          <a href="/">
            <Logo type="logo"/>
          </a>

          <a href="/">
            <HeaderTitleWithLogo className="HeaderTitleWithLogo">Swiftdrugs</HeaderTitleWithLogo>
          </a>
        </logoHeader>
    <div>
    <UncontrolledDropdown>
          <DropdownToggle caret>
            Categories
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit>
          
        <nav className="Nav">
          <a href="/">Accueil</a>
          <a href="/">A propos</a>
          <a href="/">Nos Services</a>
          <a href="/">Contactes</a>
          <a href="/">nos partenaires</a>
          <a href="/">Mentions Legales</a>
          <Logout>
            <span>logout</span>
            <Icon name="sign-out" width={16} />
        </Logout>
        </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Burger">
        🍔
      </button>
      </div>
        </HeaderContainer>
      </HeaderWrapper>

    </header>
   </div>
  );







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



}
