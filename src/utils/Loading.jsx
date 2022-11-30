import { Stack, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { loadingGif } from '../assets';

const Loading = () => {
   const { pathname } = useLocation();
   const isImagePage = pathname.includes('/search/images');

   return (
      <Stack
         alignItems='center'
         mt='100px'
         ml={{ lg: !isImagePage ? '-150px' : 0 }}
      >
         <img
            src={loadingGif}
            alt='loading_gif'
            width='35px'
            height='35px'
            style={{ borderRadius: '50%' }}
         />
         <Typography
            mt={1}
            letterSpacing='1px'
            color='colors.c6'
            sx={{
               '@keyframes animateText': {
                  '0%': { opacity: 0.5 },
                  '100%': { opacity: 1 },
               },
               animation: 'animateText 1s linear alternate infinite',
            }}
         >
            Loading...
         </Typography>
      </Stack>
   );
};

export default Loading;
