import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { logoSM } from '../assets';

const PageNotFound = () => {
   const { pathname, search } = useLocation();

   return (
      <Box
         mx='auto'
         maxWidth='600px'
         mt='10vh'
         color='colors.c6'
         px={{ xs: 2, sm: 3 }}
         py={2}
      >
         <img
            src={logoSM}
            alt='logo'
            width='150px'
            style={{ margin: 'auto', display: 'block' }}
         />
         <Typography mb={1} mt={2}>
            <Typography color='colors.c9' component='span' fontWeight='bold'>
               404.
            </Typography>{' '}
            That’s an error.
         </Typography>

         <Typography>
            The requested URL{' '}
            <Typography color='colors.c9' component='span'>
               {pathname + search}
            </Typography>{' '}
            was not found on this server. That’s all we know.
         </Typography>
      </Box>
   );
};

export default PageNotFound;
