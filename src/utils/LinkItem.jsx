import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { lineClamp } from './LineClamp';

const CustomLinkItem = styled.a`
   color: inherit;
   text-decoration: none;

   &:hover {
      h6 {
         text-decoration: underline;
      }
   }
`;

const LinkItem = ({ url, providerName, title, titleStyleProps }) => {
   return (
      <CustomLinkItem href={url}>
         <Typography
            as='div'
            fontSize={{ xs: '.75rem', sm: '.875rem' }}
            color='colors.c9'
            sx={lineClamp(1)}
         >
            {providerName}
         </Typography>

         <Typography
            color='colors.c7'
            variant='h6'
            fontWeight='500'
            lineHeight='1.1em'
            {...titleStyleProps}
            sx={lineClamp(2)}
         >
            {title}
         </Typography>
      </CustomLinkItem>
   );
};

export default LinkItem;
