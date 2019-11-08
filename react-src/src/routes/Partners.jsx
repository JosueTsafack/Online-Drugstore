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
        <Heading as="h1" className="homepage-links">Nos partenaires</Heading>
      </Box>
      <h1 className="homepage-links">Swiftdrugs Delivery</h1>
      <p>Votre service de livraison oú que vous soyez sur l'étandu du térritoire</p>
      <p>Service de livraison mise developée par la Start-Up Swiftdrugs</p>

      <h1 className="homepage-links">Securité des produits</h1>
      <p>
        Nous collaborons avec l'état pour se rassurer que tous les produits vendu sur notre site
        sont de vrai.
      </p>
    </Container>
  </Screen>
);

export default Partners;
