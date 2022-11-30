import { Box, IconButton } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { logoSM } from '../assets';
import SearchInput from '../utils/SearchInput';
import Navbar from '../components/Navbar';
import { useColorMode } from '../context/ColorModeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {
   const { mode, toggleColorMode } = useColorMode();

   return (
      <Box
         borderBottom='.5px solid'
         borderColor='colors.c5'
         p={{ xs: 2, sm: 3 }}
      >
         <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            mb={2}
            display={{ xs: 'flex', md: 'none' }}
         >
            <Box>
               <Link
                  to='/'
                  style={{
                     marginRight: '1rem',
                     display: 'flex',
                     alignItems: 'center',
                  }}
               >
                  <img src={logoSM} alt='logo' height='35px' />
               </Link>
            </Box>

            <Stack
               alignItems='center'
               justifyContent='center'
               marginLeft='3rem'
               onClick={toggleColorMode}
            >
               <IconButton>
                  {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
               </IconButton>
            </Stack>
         </Stack>

         <Stack
            flexDirection='row'
            height='40px'
            alignItems='center'
            justifyContent='space-between'
         >
            <Stack
               flexDirection='row'
               alignItems='center'
               flex='1'
               maxWidth='800px'
            >
               <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  <Link
                     to='/'
                     style={{
                        marginRight: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                     }}
                  >
                     <img src={logoSM} alt='logo' height='35px' />
                  </Link>
               </Box>

               <Box flex='1'>
                  <SearchInput />
               </Box>
            </Stack>

            <Stack
               alignItems='center'
               justifyContent='center'
               marginLeft='3rem'
               sx={{ display: { xs: 'none', md: 'block' } }}
               onClick={toggleColorMode}
            >
               <IconButton>
                  {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
               </IconButton>
            </Stack>
         </Stack>

         <Navbar />
      </Box>
   );
};

export default Header;
