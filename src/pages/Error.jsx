import { Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';

const Error = () => {
   const error = useRouteError();

   return (
      <Typography
         textAlign='center'
         mt={3}
         color='colors.c9'
         fontSize={{ xs: '.875rem', sm: '1rem' }}
      >
         {error.message}
      </Typography>
   );
};

export default Error;
