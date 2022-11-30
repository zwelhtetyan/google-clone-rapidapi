import { Stack } from '@mui/material';
import FooterLink from '../utils/FooterLink';

const links = [
   {
      name: 'Help',
      href: 'https://support.google.com/websearch/?p=ws_results_help&hl=en-MM&fg=1',
   },
   {
      name: 'Privacy',
      href: 'https://policies.google.com/privacy?hl=en-MM&fg=1',
   },
   { name: 'Terms', href: 'https://policies.google.com/terms?hl=en-MM&fg=1' },
];

const Footer = () => {
   return (
      <Stack
         direction='row'
         spacing={3}
         flexWrap='wrap'
         mt='auto'
         padding='.5rem 2rem'
         bgcolor='colors.c2'
      >
         {links.map((link) => (
            <FooterLink key={link.href} {...link} />
         ))}
      </Stack>
   );
};

export default Footer;
