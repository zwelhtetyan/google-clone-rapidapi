import { Box } from '@mui/system';
import React from 'react';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { getVideos } from '../api';
import VideoItem from '../components/VideoItem';
import Loading from '../utils/Loading';
import NoResult from '../utils/NoResult';

const Videos = () => {
   const query = useOutletContext();

   const {
      data: videos,
      isLoading,
      isError,
      error,
   } = useQuery(['getVideos', query], () => getVideos(query));

   if (isLoading) return <Loading />;

   if (isError) {
      throw new Error(error.message);
   }

   return (
      <Box maxWidth={{ md: '630px' }}>
         {videos.length === 0 && <NoResult query={query} />}

         {videos.map((video, i) => (
            <VideoItem {...video} key={i} />
         ))}
      </Box>
   );
};

export default Videos;
