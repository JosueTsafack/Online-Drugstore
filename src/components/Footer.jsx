import React from 'react';
import styled from 'styled-components';

import { Container, Flex } from 'styled-minimal';

const FooterWrapper = styled.footer`
  border-top: 0.1rem solid #ddd;
`;

const Footer = () => (
  <FooterWrapper>
    <Container py={3}>
      <Flex justifyContent="space-between">
        <iframe
          title="GitHub Stars"
          /*`Copyright © ${new Date().getFullYear()} Swiftdrugs Inc.`,*/
          src="https://ghbtns.com/github-btn.html?user=gilbarbara&repo=react-redux-saga-boilerplate&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="110px"
          height="20px"
        />
        <div fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Swiftdrugs Inc.</a>
        </div>
      </Flex>
    </Container>
  </FooterWrapper>
);

export default Footer;
