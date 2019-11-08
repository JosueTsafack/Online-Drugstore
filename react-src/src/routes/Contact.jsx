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
        <Heading as="h1" className="homepage-links">Contact</Heading>
      </Box>
      <h1 className="homepage-links">Swiftdrugs inc.</h1>
      <p>Yaoundé</p>
      <p>Cameroun</p>

      <p> <strong >Tel.:</strong> (+237) 678-999-22</p>
      <p> <strong >Tel.:</strong> (+237) 693-267-649</p>
      <p> <strong >E-Mail:</strong> contact@swiftdrugs.com</p>

      <h1 className="homepage-links">Site</h1>
      <a target="_blank" href="https://www.facebook.com/swiftdrugs/">www.swiftdrugs.com</a>


      <h1 className="homepage-links">Conseil d'administration et co-fondateurs</h1>
      <h3>Joel Nguemo, Gilchrist, Josue Nguemo</h3>

      <p> <strong >CEO, Directeur Général:</strong> Joel Nguemo</p>
      <p> <strong >CFO, Directeur financier:</strong> Gilchrist</p>
      <p> <strong >CTO, Directeur de la technologie, Chef de produit:</strong> Josué Nguemo</p>
      
      <h1 className="homepage-links">Notre mission</h1>
      <p>
        Nous sommes une jeune équipe d'entrepreneurs dont le but est de mettre toutes les pharmacies 
        du Cameroun en ligne; lesquelles pourront être accessible 24h/24, donnant la possibilité 
        aux internautes de passer leur commandes en ligne et se faire livrer á domicile. 
        Vous évitant par lá des pertes de temps et d'argent.
      </p>
    </Container>
  </Screen>
);

export default Contact;
