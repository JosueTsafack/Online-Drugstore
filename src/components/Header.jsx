import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { appColor, headerHeight } from 'modules/theme';

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
  top: 50px;

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
`;

const logoHeader = styled(Container)`
    width: 30%!important;
    float: left!important;
`;

export default class Header extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      FixedHeader: true
    }
 }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  handleClickLogout = () => {
    const { dispatch } = this.props;

    dispatch(logOut());
  };

  render() {
    return (
      <div>
      {this.state.FixedHeader ? <FixedHeader className="FixedHeader">
      <ul>
        <FixedHeaderInfo1>Effectuez vos achats de medicaments et faites vous livrer a domicile</FixedHeaderInfo1>
        <FixedHeaderInfo2>Votre Pharmacie en ligne pour le Cameroun</FixedHeaderInfo2>
        <FixedHeaderInfo3>+237 6xx xx xx xx</FixedHeaderInfo3>
      </ul>
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
      </div>
    );
  }
}
