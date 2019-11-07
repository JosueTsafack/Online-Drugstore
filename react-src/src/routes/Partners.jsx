import React from 'react';
import styled from 'styled-components';

import { Box, Container, Heading, Link, Paragraph, Screen, Text, utils } from 'styled-minimal';

Screen = styled(Screen)`
  ${/* sc-custom '@media-query' */ utils.responsive({
    0: `
    padding: 60px 0 0;
    `,
  })};
`;

const Partners = () => (
  <Screen key="Partners" data-testid="PartnersWrapper">
    <Container id="PartnersContainer" verticalPadding>
      <Box textAlign="left" mb={4}>
        <Heading as="h2">Nos Partners</Heading>
      </Box>
      <p>
        Nous collaborons avec l'état pour se rassurer que tous les produits vendu sur notre site
        sont de vrai.
      </p>
    </Container>
  </Screen>
);

export default Partners;
