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

a:hover {
    color: ${appColor};
    text-decoration: none;
}

#HeaderIntro {
  ${'' /* background-color: #EDEDED; */}
  background-color: white;
  margin-top: -16px;
}

.btn.btn-sm.btn-outline-white.my-0 {
  font-size: 16px
}

.input-group-append {
  margin-top: 7px;
  margin-bottom: 14px;
}

.form-control.form-control-sm {
  max-width: 100%;
  -ms-flex-align: center;
  padding: 8px 16px;
  border: none;
  border-bottom: solid 1px #b3b3b3;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  font-family: lato,sans-serif;
  border-radius: 8px !important;
  height: 30px;
  font-size: 17px;
}

.headerImage {
    ${'' /* background: url(https://avatars1.githubusercontent.com/u/182219?v=4); */}
    ${'' /* background: url("C:/Users/nguem/Desktop/swiftdrugs/swiftdrugs/assets/media/images/Homepage-image.jpg"); */}
    background-image: url("C:/Users/nguem/Desktop/swiftdrugs/swiftdrugs/assets/media/images/Homepage-image.jpg");
    height: 350px;
}

.homeIntroText {
  font-size: 48px;
}





#top {
  float:right;
}
#top a {
  font-size: 20px;
  font-weight: 500;
  transition: 0.5s;
  text-decoration: none;
}
#top a:hover {
  transform: scale(1.1);
}
#top button {
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

#top button:active {
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

@media only screen and (min-width: 650px) and (max-width: 704px) {
  .Header {
    grid-template-areas: "logo burger" "nav nav";
  }
  #top {
    padding: 0px -1px 0px;
    margin-left: -54px;
    margin-top: -5px;
  }
  .Burger {
    display: inline;
  }
}
@media only screen and (min-width: 0px) and (max-width: 650px) {
  .Header {
    grid-template-areas: "logo burger" "nav nav";
  }
  #top {
    padding: 0px -1px 0px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin-left: -54px;
    margin-top: 15px;
  }
  .Burger {
    display: inline;
  }
}

@media (max-width: 638px) {
  
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
    margin-left: -39px;
    font-size: 28px;
    margin-top: -74px;
  }

  #top {
    margin-right: -108px;
  }
}

.DeliveryImage {
  background-image: url(../../assets/media/images/banniere.png);
}

.DeliveryImageHeading {
  color: #03a650;
}



/* Button */
.demo-button {
    -webkit-transition: .2s;
    transition: .2s;
    display: block;
    width: 100%;
    font-size: .875rem;
    font-weight: 700;
    padding: .75rem 1rem;
    background-color: transparent;
    border-radius: .25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-style: solid;
    border-color: #e2e8f0;
}

.demo-button.is-primary {
    background-color: ${appColor};
    color: white;
    border-style: none;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    -ms-flex-pack: center;
    line-height: 1;
}

.demo-button:disabled {
    opacity: .25;
    pointer-events: none;
}

/* Label */
.demo-label {
    display: block;
    font-weight: 700;
    font-size: .875rem;
    color: ${appColor};
    margin-bottom: .25rem;
    display: inline-flex;
    ${'' /* font-family: inherit; */}
    font-size: 16px;
    -ms-flex-pack: center;
    line-height: 1;

    font-family: "Proxima Nova";
    font-size: 20px;
    font-weight: 600;
    align-content: left;
    line-height: 24px;
    width: 100%;
    margin-top: 10px;
}
/*css of the required asterisk*/
label[for^="required"]::after {
    bottom: 0;
    color: #d13f31;
    content: '*';
    position: relative;
    transform: translate(-100%, 0);
}

/* Input */
.demo-input {
    font-size: 2rem;
    background-color: #fff;
    border-width: 1px;
    padding: .25rem .5rem;
    display: block;
    width: 100%;
    appearance: none;
    line-height: 1.5;
}

/* Form feedback */
.demo-form-feedback {
    display: block;
    font-size: .875rem;
    color: #718096;
    margin-top: .25rem;
}
.is-error .demo-form-feedback {
    color: #e53e3e;
}

.demo-form__content {
    padding: 1rem;
    margin-bottom: 1rem;
}
/* Form Group */
.demo-form-group {
    margin-bottom: 1rem;
}

/* Form */
.demo-form {
    flex-direction: column;
    background-color: #f7fafc;;
    border-width: 1px;
    border-color: #edf2f7;
    border-radius: .5rem;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
    overflow: hidden;
    margin: auto;
    width: 450px;
    padding: 20px;
    margin-top: 38px;
}

@media (min-width: 900px) {
  .demo-form {
    width: 550px;
  }
}

.is-error .demo-input {
    border-color: #e53e3e;
}

.demo-form__footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem;
    margin-top: auto;
}

`;

export default () => <GlobalStyle />;
