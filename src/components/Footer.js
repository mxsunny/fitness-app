import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#fff6de">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '60px', height: '86px' }} />
    </Stack>
    <Typography variant="h1" sx={{ fontSize: { lg: '14px', xs: '20px' } }} mt="30px" textAlign="center" pb="12px">@2021 Golds Gym.in. All Rights Reserved.</Typography>
    <Typography variant="h1" sx={{ fontSize: { lg: '12px', xs: '20px' } }} textAlign="center" pb="40px">Terms & Conditions | Privacy Policy</Typography>
  </Box>
);

export default Footer;
