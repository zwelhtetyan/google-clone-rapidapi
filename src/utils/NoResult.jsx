import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const NoResult = ({ query }) => {
   return (
      <Box color='colors.c6' fontSize={{ xs: '.875rem', sm: '1rem' }}>
         <Typography fontSize='inherit'>
            Your search -{' '}
            <Typography component='span' color='colors.c9' fontSize='inherit'>
               {query}
            </Typography>{' '}
            - did not match any documents.
         </Typography>

         <Typography mt={2} fontSize='inherit'>
            Suggestion:
         </Typography>

         <ul>
            <li>Make sure that all words are spelled correctly.</li>
            <li>Try different keywords.</li>
            <li>Try more general keywords.</li>
         </ul>
      </Box>
   );
};

export default NoResult;
