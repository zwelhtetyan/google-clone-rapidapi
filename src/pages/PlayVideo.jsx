import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';
import styled from '@emotion/styled';
import { BtnPrimary } from '../utils/Button';
import { lineClamp } from '../utils/LineClamp';

const IFrame = styled.iframe`
   max-width: 1300px;
   width: 100%;
   height: 600px;
   border-radius: 20px;

   @media screen and (max-width: 768px) {
      height: 450px;
   }

   @media screen and (max-width: 480px) {
      height: 250px;
   }
`;

const PlayVideo = () => {
   useEffect(() => window.scrollTo(0, 0), []);
   const { name, videoId, publisher, creator, datePublished } = useParams();

   const videoName = name
      .split('-')
      .join(' ')
      .split('hash')
      .join('#')
      .split('slash')
      .join('/');
   const videoCreator =
      creator === 'null' ? '' : creator.split('hash').join('#');
   const videoDatePublished = datePublished.split(',').join('.');

   return (
      <Stack
         alignItems='center'
         justifyContent='center'
         maxWidth='1200px'
         mx='auto'
         px={{ xs: 2, sm: 3 }}
         py={2}
      >
         <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='flex-start'
            mb={2}
            width='100%'
         >
            <Box flex='1' mr={3}>
               <Typography
                  variant='h4'
                  fontSize={{ xs: '1.25rem', sm: '2rem' }}
                  color='colors.c9'
                  sx={{
                     wordBreak: 'break-all',
                     ...lineClamp(2),
                  }}
               >
                  {videoName}
               </Typography>

               <Typography
                  fontSize={{ xs: '.75rem', sm: '1rem' }}
                  color='colors.c6'
               >
                  <Typography
                     component='span'
                     fontWeight='500'
                     fontSize='inherit'
                  >
                     {publisher} ·
                  </Typography>{' '}
                  {videoCreator && videoCreator + ' ·'}{' '}
                  <Moment fromNow>{videoDatePublished}</Moment>
               </Typography>
            </Box>

            <BtnPrimary
               size='large'
               onClick={() =>
                  window.open(
                     `https://www.youtube.com/watch?v=${videoId}`,
                     '_blank'
                  )
               }
            >
               YouTube <LaunchIcon sx={{ marginLeft: '.5rem' }} />
            </BtnPrimary>
         </Stack>

         <IFrame
            title={videoName}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder='0'
            allowFullScreen
            loading='lazy'
            allow='autoplay'
         />
      </Stack>
   );
};

export default PlayVideo;
