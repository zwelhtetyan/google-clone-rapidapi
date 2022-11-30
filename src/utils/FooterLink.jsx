import { Typography } from '@mui/material';
import React from 'react';

const FooterLink = ({ href, name }) => {
   return (
      <Typography
         component='a'
         color='colors.c1'
         target='_blank'
         padding='.3rem'
         href={href}
         sx={{
            textDecoration: 'none',
            fontSize: '14px',
            userSelect: 'none',
            '&:hover': { textDecoration: 'underline' },
         }}
      >
         {name}
      </Typography>
   );
};

export default FooterLink;
