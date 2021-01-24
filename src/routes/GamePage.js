import React from 'react';

import Header from '../components/Header.js';
import Game from '../components/Game.js';
import { Box } from '@chakra-ui/react';

function GamePage() {
  return (
    <Box>
      <Header />
      <Game />
    </Box>
  );
}

export default GamePage;