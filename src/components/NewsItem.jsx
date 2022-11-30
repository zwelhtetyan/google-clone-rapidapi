import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import Moment from 'react-moment';
import { lineClamp } from '../utils/LineClamp';
import LinkItem from '../utils/LinkItem';

const Provider = ({ providerIcon, providerName }) => (
   <Stack direction='row'>
      {providerIcon && (
         <img
            src={providerIcon}
            alt='host_page'
            style={{
               width: '20px',
               height: '20px',
               borderRadius: '3px',
               marginRight: '.5rem',
            }}
         />
      )}

      <Typography fontSize='inherit' color='colors.c9' sx={lineClamp(1)}>
         {providerName}
      </Typography>
   </Stack>
);

const NewsItem = ({
   provider,
   name,
   image,
   description,
   url,
   datePublished,
}) => {
   const { name: providerName, image: providerImage } = provider[0];

   const viewNews = (e) => {
      e.stopPropagation();
      window.open(url, '_self');
   };

   return (
      <Stack
         component='article'
         color='colors.c6'
         direction='row'
         alignItems='flex-start'
         mb={3}
         sx={{ cursor: 'pointer' }}
         onClick={viewNews}
      >
         {/* left */}
         <Box flex='1' mr={2}>
            <LinkItem
               providerName={
                  <Provider
                     providerIcon={providerImage?.thumbnail.contentUrl}
                     providerName={providerName}
                  />
               }
               url={url}
               title={name}
               titleStyleProps={{ mb: '.3rem', mt: '.2rem' }}
            />

            <Typography
               fontSize={{ xs: '.875rem', sm: '1rem' }}
               sx={lineClamp(2)}
            >
               {description}
            </Typography>

            <Typography
               fontSize={{ xs: '.75rem', sm: '.875rem' }}
               color='colors.c8'
               lineHeight='1rem'
               mt='.3rem'
            >
               <Moment fromNow>{datePublished}</Moment>
            </Typography>
         </Box>

         {/* right */}
         {image && (
            <Box
               width='100px'
               height='100px'
               borderRadius='10px'
               overflow='hidden'
            >
               <img
                  src={image.thumbnail.contentUrl}
                  alt=''
                  style={{
                     objectFit: 'cover',
                  }}
               />
            </Box>
         )}
      </Stack>
   );
};

export default NewsItem;
