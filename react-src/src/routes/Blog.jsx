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
        <Heading as="h2">Blog</Heading>
      </Box>
      <p>Ici vous pouvez lire notre blog.</p>
    </Container>
  </Screen>
);

export default Blog;
