import React from 'react';
import styled from 'styled-components';

import { Container, Flex } from 'styled-minimal';

import { appColor } from 'modules/theme';

const FooterWrapper = styled.footer`
  border-top: 0.1rem solid #ddd;
`;

const FooterCopyright = styled(Container)`
  background-color: ${appColor};
  text-align: center;
  height: 35px;
  color: white;
  padding-top: 8px;

  a {
    color: white;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Container py={3}>
      <Flex justifyContent="space-between">
        <iframe
          title="GitHub Stars"
          src="https://ghbtns.com/github-btn.html?user=gilbarbara&repo=react-redux-saga-boilerplate&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="110px"
          height="20px"
        />
      </Flex>
    </Container>
    <FooterCopyright>
      &copy; {new Date().getFullYear()} Copyright:    <a href="https://www.MDBootstrap.com">Swiftdrugs Inc.</a>
    </FooterCopyright> 
  </FooterWrapper>
);

export default Footer;
