import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { appColor } from 'modules/theme';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

  $breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
);

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body {
    font-family: Lato, sans-serif;
    font-size: 16px; /* stylelint-disable unit-blacklist */
    margin: 0;
    min-height: 100vh;
    padding: 0;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  a {
    color: ${appColor};
    text-decoration: none;

    &.disabled {
      pointer-events: none;
    }
  }

  button {
    appearance: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    line-height: 1;
    padding: 0;
  }

.myFixedHeader {
align-text: middle;
}


@media (max-width: 546px) {
  .FixedHeaderInfo1 {
    overflow: auto;
    padding-bottom:48px;
  } 

  .FixedHeaderInfo2 {
    overflow: auto;
    padding-bottom: 24px;
  }

  .FixedHeaderInfo3 {
    overflow: auto;
    padding-bottom: 72px;
  }
}

@media only screen and (min-width: 546px) and (max-width: 768px) {
  .FixedHeaderInfo1 {
    overflow: auto;
    padding-bottom:48px;
  } 

  .FixedHeaderInfo2 {
    overflow: auto;
    padding-bottom: 48px;
  }

  .FixedHeaderInfo3 {
    overflow: auto;
    padding-bottom: 72px;
  }
}

@media only screen and (min-width: 799px) and (max-width: 834px) {
  .FixedHeaderInfo1 {
    overflow: auto;
    padding-bottom: 72px; 
  } 
  .FixedHeaderInfo2 {
    overflow: auto;
    padding-bottom: 48px;
  }

  .FixedHeaderInfo3 {
    overflow: auto;
    padding-bottom: 72px;
  } 
}

@media only screen and (min-width: 1200px) and (max-width: 1265px) {
  .FixedHeaderInfo1 {
    overflow: auto;
    padding-bottom: 41px;
  } 

  .FixedHeaderInfo2 {
    overflow: auto;
    padding-bottom: 41px;
  }

  .FixedHeaderInfo3 {
    overflow: auto;
    padding-bottom: 65px;
  } 
}

@media only screen and (min-width: 1265px) and (max-width: 1303px) {
  .FixedHeaderInfo1 {
    overflow: auto;
    padding-bottom: 65px;
  } 

  .FixedHeaderInfo2 {
    overflow: auto;
    padding-bottom: 41px;
  }

  .FixedHeaderInfo3 {
    overflow: auto;
    padding-bottom: 65px;
  } 
}

@media only screen and (min-width: 1303px) and (max-width: 1700px) {
  .FixedHeaderInfo1 {
    overflow: auto;
    padding-bottom: 115px;
  } 

  .FixedHeaderInfo2 {
    overflow: auto;
    padding-bottom: 115px;
  } 

  .FixedHeaderInfo3 {
    overflow: auto;
    padding-bottom: 115px;
  }
}

${'' /* @media only screen and (min-width: 546px) and (max-width: 768px) {
  .FixedHeaderInfo2 {
    overflow: auto;
    padding-bottom: 24px;
  }
} */}

@media (max-width: 576px) {
  .FixedHeader {
  }
}  


@media (min-width: 576px) {
  .FixedHeader {
  }
}


@media (min-width: 768px) {
  .FixedHeader {
  }
}

@media (min-width: 992px) {
  .FixedHeader {
    padding-top: 0px;
  }
} 

@media (min-width: 1200px) {
  .FixedHeader {
    padding-top: 9px;
  }
} 

.Heading {
  font-size: 32px;
}
  





.Header {
  /* position: fixed;
  top: 0; Stick it to the top
  max-height: 70px;
  width: 100vw; */

  display: grid;
  grid-template-areas: "logo nav";

  /* Cosmetics */
  background-color: #282c34;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.Logo {
  grid-area: logo;
  height: 70px;
}

.Nav {
  display: grid;
  grid-area: nav;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-items: center;
}
.Nav a {
  ${'' /* color: #fff; */}
  font-size: 20px;
  font-weight: 500;
  transition: 0.5s;
  text-decoration: none;
}
.Nav a:hover {
  transform: scale(1.1);
}
.Nav button {
  padding: 10px;
  outline: none;
  border: none;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  background-color: rgba(255, 0, 0, 0.5);
  box-shadow: 0px 5px 0px 0px rgba(255, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: 70ms;
}

.Nav button:active {
  transform: translateY(3px);
  box-shadow: 0px 2px 0px 0px rgba(255, 0, 0, 0.25);
}

.Burger {
  display: none;
  grid-area: burger;
  margin: 0 20px 0 0;
  padding: 0;
  justify-self: end;
  font-size: 40px;
  border: none;
  background: none;
  outline: none;
  transition: 0.1s;
}
.Burger:active {
  transform: scale(1.2);
}

@media (max-width: 700px) {
  .Header {
    grid-template-areas: "logo burger" "nav nav";
  }
  .Nav {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: none;
    grid-row-gap: 20px;

    padding: 30px 0 30px;
    background: rgba(40, 44, 47, 0.95);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .Burger {
    display: inline;
  }
}

.NavAnimation-enter {
  opacity: 0;
  transform: scale(0.5);
}
.NavAnimation-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 350ms, transform 350ms;
}
.NavAnimation-exit {
  opacity: 1;
}
.NavAnimation-exit-active {
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 350ms, transform 350ms;
}


@media (max-width: 1023px) {
  .logoHeader {
    margin-left: -112px;
  }

  .HeaderTitleWithLogo {
    margin-left: 82px;
    font-size: 28px;
  }

  .Nav {
    margin-right: -108px;
  }
}






`;

export default () => <GlobalStyle />;
