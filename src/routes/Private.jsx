import React from 'react';
import styled from 'styled-components';

/* import Github from 'containers/GitHub'; */
import PharmacyForm from 'containers/PharmacyForm';

import { Box, Container, Heading, Link, Paragraph, Screen, Text, utils } from 'styled-minimal';
import DeliveryImage from 'components/DeliveryImage';  
/* import { DeliveryImage } from '../../assets/media/images/banniere.png'; */

// console.log(DeliveryImage);

const Header = styled.div`
  margin-bottom: ${utils.spacer(3)};
  text-align: center;
  /* padding: 100px 0 0; */ font-size: 32px;
`;

Screen = styled(Screen)`
  ${/* sc-custom '@media-query' */ utils.responsive({
    0: `
    padding: 60px 0 0;
    `,
  })};
`;

const Private = () => (
  <Screen key="Private" data-testid="PrivateWrapper">
    <Container verticalPadding>
      <Header>
        <Heading className="Heading">S'inscrire</Heading>
        {/* <Paragraph>
          You can get this boilerplate{' '}
          <Link href="https://github.com/gilbarbara/react-redux-saga-boilerplate/" target="_blank">
            here
          </Link>
        </Paragraph> */}
      </Header>
      <Box textAlign="center" mb={4}>
        <Heading as="h5">Inscrivez-vous et beneficiez des nombreux avantages qu'offre Swiftdrugs</Heading>
        <Text fontSize={1}>
          <i>Votre Pharmacie en ligne...</i>
        </Text>
      </Box>
      {/* <Github /> */}
      <PharmacyForm />
      
    </Container>
    <Container verticalPadding>
      <Box textAlign="left" mb={4}>
          <Heading className="DeliveryImageHeading" as="h3">Votre service de livraison a domicile</Heading>
      </Box>
      <DeliveryImage />
      {/* <img src='https://avatars1.githubusercontent.com/u/182219?v=4' alt="DeliveryImage" />
      <img src='C:\Users\nguem\Desktop\swiftdrugs\swiftdrugs\assets\media\images\banniere.png' alt="DeliveryImage" />; */}
    </Container>
  </Screen>
);

export default Private;
