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

const Blog = () => (
  <Screen key="Blog" data-testid="BlogWrapper">
    <Container id="BlogContainer" verticalPadding>
      <Box textAlign="left" mb={4}>
        <Heading as="h1" className="homepage-links">Swiftdrugs Blog</Heading>
      </Box>
      <h1 className="homepage-links">Suivez-nous sur les réseaux sociaux afin de restez á la une sur nos nouveaux produits</h1>
      <a target="_blank" href="https://www.facebook.com/swiftdrugs/">www.facebook.com/swiftdrugs/</a>
      {/* <p>https://www.instagram.com/swiftdrugs/</p>
      <p>https://www.twitter.com/swiftdrugs/</p>     */}
      </Container>
  </Screen>
);

export default Blog;
