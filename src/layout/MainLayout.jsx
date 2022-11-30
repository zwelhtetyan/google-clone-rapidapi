import { Box, Stack } from '@mui/material';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const MainLayout = () => {
   const { pathname, search } = useLocation();

   const urlSearchParam = new URLSearchParams(search);
   const query = urlSearchParam.get('q');

   if (pathname === '/search' || !query.trim().length) {
      return <Navigate to='/' />;
   }

   const styles = () => {
      if (pathname.includes('search/images')) {
         return { px: { xs: 2, sm: 3 }, py: 2 };
      } else {
         return { ml: { lg: '150px' }, px: { xs: 2, sm: 3 }, py: 2 };
      }
   };

   return (
      <Stack minHeight='100vh'>
         {<Header />}

         <Box sx={styles}>
            <Outlet context={query} />
         </Box>

         {<Footer />}
      </Stack>
   );
};

export default MainLayout;
