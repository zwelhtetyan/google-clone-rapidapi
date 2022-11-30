import { Stack } from '@mui/system';
import { IconButton } from '@mui/material';
import { logoLG } from '../assets';
import FooterLink from '../utils/FooterLink';
import SearchInput from '../utils/SearchInput';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useColorMode } from '../context/ColorModeContext';

const footerLinksL = [
   {
      name: 'About',
      href: 'https://about.google/?utm_source=google-MM&amp;utm_medium=referral&amp;utm_campaign=hp-footer&amp;fg=1',
   },
   {
      name: 'Advertising',
      href: 'https://www.google.com/intl/en_mm/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpafooter&amp;fg=1',
   },
   {
      name: 'Business',
      href: 'https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpbfooter&amp;fg=1',
   },
   {
      name: 'How search works',
      href: 'https://google.com/search/howsearchworks/?fg=1',
   },
];

const footerLinksR = [
   {
      name: 'Privacy',
      href: 'https://policies.google.com/privacy?hl=en-MM&fg=1',
   },
   { name: 'Terms', href: 'https://policies.google.com/terms?hl=en-MM&fg=1' },
];

const Home = () => {
   const { mode, toggleColorMode } = useColorMode();

   return (
      <Stack height='100vh' alignItems='center'>
         <Stack
            flex='1'
            maxWidth='600px'
            width='100%'
            alignItems='center'
            padding='0 1rem'
            marginTop='15vh'
         >
            <img
               src={logoLG}
               alt='logo_large'
               width='45%'
               style={{ marginBottom: '1rem' }}
            />

            <SearchInput />
         </Stack>

         {/* footer */}
         <Stack
            mt='50vh'
            bgcolor='colors.c2'
            width='100%'
            padding='.5rem 2rem'
            direction={{ xs: 'column', md: 'row' }}
            alignItems='center'
            justifyContent={{ xs: 'space-around', lg: 'space-between' }}
         >
            <Stack
               direction='row'
               spacing={3}
               justifyContent='center'
               alignItems='center'
               flexWrap='wrap'
            >
               {footerLinksL.map((link) => (
                  <FooterLink key={link.href} {...link} />
               ))}
            </Stack>

            <Stack
               direction='row'
               spacing={3}
               justifyContent='center'
               alignItems='center'
               flexWrap='wrap'
            >
               {footerLinksR.map((link) => (
                  <FooterLink key={link.href} {...link} />
               ))}

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
         </Stack>
      </Stack>
   );
};

export default Home;
