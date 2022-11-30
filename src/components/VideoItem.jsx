import { Box, Typography, Stack, Chip } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import React, { useState } from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
import { lineClamp } from '../utils/LineClamp';
import LinkItem from '../utils/LinkItem';

const durationFromat = (time) => {
   const timeArr = moment
      .duration(time)
      .format('hh:mm:ss', { trim: false })
      .split(':');

   if (timeArr[0] === '00') {
      timeArr.shift();
      return timeArr.join(':');
   } else {
      return timeArr.join(':');
   }
};

const VideoItem = ({
   hostPageUrl,
   publisher,
   name,
   thumbnailUrl,
   motionThumbnailUrl,
   description,
   duration,
   creator,
   datePublished,
}) => {
   const navigate = useNavigate();
   const [playMotion, setPlayMotion] = useState(false);

   const handleMouseEnter = () => setPlayMotion(true);

   const handleMouseLeave = () => setPlayMotion(false);

   const videoName = name
      .replace(/#/g, 'hash')
      .split(' ')
      .join('-')
      .replace(/\//g, 'slash');

   const videoId = hostPageUrl.includes('https://www.youtube.com/watch?v=')
      ? hostPageUrl.replace('https://www.youtube.com/watch?v=', '')
      : null;

   const videoPublisher = publisher[0].name;
   const videoCreator = creator ? creator.name.replace(/#/g, 'hash') : null;
   const videoDatePublished = datePublished.split('.').join(',');

   const navigateVideoDetails = () =>
      navigate(
         `/play_video/${videoName}/${videoId}/${videoPublisher}/${videoCreator}/${videoDatePublished}`
      );

   return (
      <Box component='article' color='colors.c6' mb={3}>
         <LinkItem
            url={hostPageUrl}
            providerName={`www.${publisher[0].name.toLowerCase()}.com`}
            title={name}
            titleStyleProps={{ mb: '.3rem' }}
         />

         <Stack
            direction='row'
            alignItems='center'
            mt={1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         >
            {/* video */}
            <Stack
               borderRadius='10px'
               overflow='hidden'
               minWidth={{ xs: '130px', sm: '170px' }}
               width={{ xs: '130px', sm: '170px' }}
               height={{ xs: '90px', sm: '110px' }}
               alignItems='center'
               justifyContent='center'
               position='relative'
               sx={{ cursor: 'pointer' }}
               onClick={navigateVideoDetails}
            >
               <PlayCircleFilledWhiteIcon
                  sx={{ position: 'absolute', color: '#fff' }}
                  fontSize='large'
               />

               <Chip
                  label={durationFromat(duration)}
                  sx={{
                     position: 'absolute',
                     bottom: '.6rem',
                     left: '.3rem',
                     color: '#fff',
                     background: 'rgba(0,0,0,.54)',
                  }}
                  size='small'
               />

               {(!playMotion || !motionThumbnailUrl) && (
                  <img
                     src={thumbnailUrl}
                     alt='img'
                     style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                     }}
                  />
               )}

               {playMotion && motionThumbnailUrl && (
                  <video
                     src={motionThumbnailUrl}
                     autoPlay
                     loop
                     muted
                     style={{
                        width: '100%',
                        height: '100%',
                     }}
                  />
               )}
            </Stack>

            {/* content */}
            <Box ml={2} flex='1' overflow='hidden'>
               <Typography
                  fontSize={{ xs: '.875rem', sm: '1rem' }}
                  sx={lineClamp(2)}
                  mb={1}
               >
                  {description}
               </Typography>

               <Typography
                  fontSize={{ xs: '.75rem', sm: '.875rem' }}
                  color='colors.c8'
                  lineHeight='1rem'
                  sx={lineClamp(2)}
               >
                  <Typography
                     component='span'
                     fontWeight='600'
                     fontSize='inherit'
                  >
                     {publisher[0].name}
                  </Typography>{' '}
                  {creator && '. ' + creator.name} ·{' '}
                  <Moment fromNow>{datePublished}</Moment>
               </Typography>
            </Box>
         </Stack>
      </Box>
   );
};

export default VideoItem;
