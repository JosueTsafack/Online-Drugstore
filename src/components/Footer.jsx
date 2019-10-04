import React from 'react';
import styled from 'styled-components';

import { Container, Flex, Group, Heading, Input, Button, Paragraph } from 'styled-minimal';

import { appColor } from 'modules/theme';

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

/* const Footer = styled.footer`
  border-top: 0.1rem solid #ddd;
  background-color: #a5d6a7 green lighten-3;
  color: black;
`; */

const FooterCopyright = styled(Container)`
  background-color: ${appColor};
  text-align: center;
  height: 35px;
  color: white;
  padding-top: 8px;
  max-width: none;

  a {
    color: white;
  }
`;

const Footer = () => {
  return (
  <MDBFooter color= "green" className="font-medium pt-4">
      <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>
        <MDBCol md="3">
        <h5 className="title">Service de livraison</h5>
        <p>
              Here you can use rows and columns here to organize your footer
              content. Here you can use rows and columns here to organize your footer
              content.Here you can use rows and columns here to organize your footer
              content.
        </p>
        </MDBCol>
        <MDBCol md="2">
        <h5 className="title">Plan de site</h5>
            
            <li className="list-unstyled">Conditions d'utilisation generales
            </li>
            <li className="list-unstyled">Categorie
            </li>
            <li className="list-unstyled">Categorie
            </li>
            
        </MDBCol>
        <MDBCol md="2">
        <h5 className="title">Contactez nous</h5>
            <ul>
              <li className="list-unstyled">6xx xx xx xx
              </li>
              <li className="list-unstyled">6xx xx xx xx
              </li>
              <li className="list-unstyled">6xx xx xx xx
              </li>
              <li className="list-unstyled">
              </li>
            </ul>
        </MDBCol>
        <MDBCol md="3">
        <h5 className="title">S'abonner a notre newsletter</h5>
          <p>
            Here you can use rows and columns here to organize your footer
            content.
          </p>
          <form class="input-group">
            <input type="text" class="form-control form-control-sm" placeholder="Your email"
              aria-label="Votre e-mail" aria-describedby="basic-addon2"/>
          </form>
          <div class="input-group-append">
              <button class="btn btn-sm btn-outline-white my-0" type="button">S'abonner</button>
          </div>
        </MDBCol>
        <MDBCol md="2">
        <h5 className="title">Modes de Paiements</h5>
        <p>
          Ici seront affiche nos modes de paiements 
        </p>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
        <FooterCopyright fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Swiftdrugs Inc. </a>
        </FooterCopyright>
    </MDBFooter>
);
  }
export default Footer;
