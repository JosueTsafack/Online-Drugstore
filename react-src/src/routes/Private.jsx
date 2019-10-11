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
  font-size: 32px;
`;

const BoxHeader = styled.div`
  margin-bottom: ${utils.spacer(3)};
  font-size: 32px;
  background-color: #4caf50;
  color: white;
  height: 350px;
  margin-top: -15px;
`;

const BoxHeading = styled.div`
  width: 350px;
  width: 400px;
  margin-left: 140px;
  padding-top: 35px;

  @media only screen and (min-width: 0) and (max-width: 1023px) {
    margin-left: 38px;
  }
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
    <BoxHeader mb={4}>
    
      {/* <img src='https://avatars1.githubusercontent.com/u/182219?v=4' alt="DeliveryImage" /> */}
      {/* C:\Users\nguem\Desktop\swiftdrugs\swiftdrugs\assets\media\images\Homepage-image.jpg */}
      <div className="headerImage"> 
      <BoxHeading textAlign="center" mb={4}>
        <Heading as="h1" className="homeIntroText">Premiere pharmacie en ligne au Cameroun</Heading>
        <Text fontSize={4}>
          Cliquez, Commander et faites-vous livrer a domicile
        </Text>
      </BoxHeading>
      </div>
    </BoxHeader>
    <Container id="HeaderIntro" verticalPadding>
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
      <PharmacyForm />
    </Container>

    <Container verticalPadding>
      <Box textAlign="left" mb={4}>
          <Heading className="DeliveryImageHeading" as="h3">Votre service de livraison a domicile</Heading>
      </Box> 
      <DeliveryImage />
    </Container>
  </Screen>
);

export default Private;
