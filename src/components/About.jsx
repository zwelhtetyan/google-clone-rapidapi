import { Chip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const InfoItem = ({ value }) => {
   const isObj = typeof value === 'object';

   return (
      <Typography mb={1} fontSize={{ xs: '.875rem', sm: '1rem' }}>
         {isObj && (
            <Typography
               fontWeight='bold'
               component='span'
               fontSize={{ xs: '.875rem', sm: '1rem' }}
            >
               {value.title}:
            </Typography>
         )}{' '}
         <Typography component='span' fontSize='.875rem'>
            {isObj ? value.desc : value}
         </Typography>
      </Typography>
   );
};

const About = ({ knowledge_graph }) => {
   const { website, description, informations } = knowledge_graph;

   if (!website && !description && !informations.length) return;

   return (
      <Box
         ml={{ sm: 3, lg: 6 }}
         pt={{ xs: 2, md: 0 }}
         px={2}
         color='colors.c6'
         border='.5px solid'
         borderBottom={0}
         borderRight={0}
         borderTop={{ md: 0 }}
         borderColor='colors.c5'
         minWidth={{ md: '300px' }}
         maxWidth={{ md: '400px' }}
      >
         <Typography variant='h5' color='colors.c9'>
            About
         </Typography>

         {website && (
            <Chip
               label={website.split('www.')[1].replace('/', '')}
               variant='outlined'
               sx={{ marginTop: 2 }}
               onClick={() => window.open(website, '_self')}
            />
         )}

         {description && (
            <Typography py={2} fontSize={{ xs: '.875rem', sm: '1rem' }}>
               {description}
            </Typography>
         )}

         {informations.map(({ value }, i) => (
            <InfoItem value={value} key={i} />
         ))}
      </Box>
   );
};

export default About;
