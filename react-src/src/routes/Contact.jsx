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

const Contact = () => (
  <Screen key="Contact" data-testid="ContactWrapper">
    <Container id="ContactContainer" verticalPadding>
      <Box textAlign="left" mb={4}>
        <Heading as="h2">Contact</Heading>
      </Box>
      <p>
        Nous sommes une jeune équipe d'entrepreneurs dévouée á changer la facon d'acheter les
        médicaments au Cameroun. Contactez-nous au (+237) 678-999-229/ (+237) 693-267-649
      </p>
    </Container>
  </Screen>
);

export default Contact;
