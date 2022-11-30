import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';
import {
   searchIcon,
   searchIconActive,
   imageIcon,
   imageIconActive,
   videoIcon,
   videoIconActive,
   newsIcon,
   newsIconActive,
} from '../assets';
import { useColorMode } from '../context/ColorModeContext';

const Navbar = () => {
   const { pathname, search } = useLocation();
   const routePath = pathname.split('/')[2];

   const queryParam = new URLSearchParams(search);
   const query = queryParam.get('q');

   const isActive = (name) => (name === routePath ? 'true' : 'false'); // can not set boolearn for a non-boolean attribute `activelink`

   const { mode } = useColorMode();

   const MenuItem = styled(Link)`
      display: flex;
      position: relative;
      align-items: center;
      text-decoration: none;

      color: ${(props) =>
         mode === 'light'
            ? props.activelink === 'true'
               ? '#1a73e8'
               : '#5f6368'
            : props.activelink === 'true'
            ? '#8ab4f8'
            : '#a1a0a1'};

      &::after {
         content: '';
         width: 100%;
         height: ${(props) => (props.activelink === 'true' ? '3px' : 0)};
         position: absolute;
         bottom: -0.3rem;
         left: 0;
         background: ${mode === 'light' ? '#1a73e8' : '#8ab4f8'};
      }
   `;

   return (
      <Stack
         flexDirection='row'
         flexWrap='wrap'
         gap={{ xs: 2, sm: 3 }}
         mt={3}
         ml={{ lg: '150px' }}
      >
         <MenuItem to={`all?q=${query}`} activelink={isActive('all')}>
            <img
               src={isActive('all') === 'true' ? searchIconActive : searchIcon}
               alt=''
               width='20px'
            />
            <Typography fontSize={{ xs: '.875rem', sm: '1rem' }} ml='.3rem'>
               All
            </Typography>
         </MenuItem>

         <MenuItem to={`images?q=${query}`} activelink={isActive('images')}>
            <img
               src={isActive('images') === 'true' ? imageIconActive : imageIcon}
               alt=''
               width='20px'
            />
            <Typography fontSize={{ xs: '.875rem', sm: '1rem' }} ml='.3rem'>
               Images
            </Typography>
         </MenuItem>

         <MenuItem to={`videos?q=${query}`} activelink={isActive('videos')}>
            <img
               src={isActive('videos') === 'true' ? videoIconActive : videoIcon}
               alt=''
               width='20px'
            />
            <Typography fontSize={{ xs: '.875rem', sm: '1rem' }} ml='.3rem'>
               Videos
            </Typography>
         </MenuItem>

         <MenuItem to={`news?q=${query}`} activelink={isActive('news')}>
            <img
               src={isActive('news') === 'true' ? newsIconActive : newsIcon}
               alt=''
               width='20px'
            />
            <Typography fontSize={{ xs: '.875rem', sm: '1rem' }} ml='.3rem'>
               News
            </Typography>
         </MenuItem>
      </Stack>
   );
};

export default Navbar;
