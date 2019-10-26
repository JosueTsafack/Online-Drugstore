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

  @media only screen and (min-width: 0) and (max-width: 360px) {
    margin-top: 12px;
  }
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
          Cliquez, Commander et faites-vous livrer à domicile
        </Text>
      </BoxHeading>
      </div>
    </BoxHeader>
    <Container id="HeaderIntro" verticalPadding>
      <Header>
        <Heading className="Heading">Abonnez-vous et notre equipe vous contactera</Heading>
        {/* <Paragraph>
          You can get this boilerplate{' '}
          <Link href="https://github.com/gilbarbara/react-redux-saga-boilerplate/" target="_blank">
            here
          </Link>
        </Paragraph> */}
      </Header>
      <Box textAlign="center" mb={4}>
        <Heading as="h5">Beneficiez des nombreux avantages qu'offre Swiftdrugs</Heading>
        <Text fontSize={1}>
          <i>Votre Pharmacie en ligne...</i>
        </Text>
      </Box>
      <PharmacyForm />
    </Container>

    <Container id="ServicesContainer" verticalPadding>
      <Box textAlign="left" mb={4}>
          <Heading className="DeliveryImageHeading" as="h3">Les services qu'offre Swiftdrugs</Heading>
      </Box> 
      <div class="topServiceContainer">
        <ol class="HomeColumns u-clearfix">
            <li class="HomeColumn HomeColumn--smaller">
              <h3 class="HomeBlock-title HomeBlock-title--secondary">Moins chére</h3>
              <p class="u-gray u-marginNone">Economisez en temps et en argent.</p>
            </li>
            <li class="HomeColumn HomeColumn--smaller HomeColumn--middle">
              <h3 class="HomeBlock-title HomeBlock-title--secondary">Rapide</h3>
              <p class="u-gray u-marginNone">Plus besoin de fouillez toute la ville á la recherche de pharmacies de gardes!</p>
            </li>
            <li class="HomeColumn HomeColumn--smaller">
              <h3 class="HomeBlock-title HomeBlock-title--secondary">Recevez vos medicaments directement à la maison</h3>
              <p class="u-gray u-marginNone">Commandez et faites vous livrez chez vous, même dans la nuit! Ca peut sauver des vies.</p>
            </li>
          </ol>

      </div>
    </Container>

    <Container verticalPadding>
      <Box textAlign="left" mb={4}>
          <Heading className="DeliveryImageHeading" as="h3">Votre service de livraison à domicile</Heading>
      </Box> 
      <DeliveryImage />
    </Container>
  </Screen>
);

export default Private;
