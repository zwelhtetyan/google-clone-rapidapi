import { Box, Typography } from '@mui/material';
import { lineClamp } from '../utils/LineClamp';
import LinkItem from '../utils/LinkItem';

const Article = ({ title, url, desc }) => {
   return (
      <Box component='article' color='colors.c6' mb={3}>
         <LinkItem
            url={url}
            providerName={url.split('?')[0]}
            title={title}
            titleStyleProps={{ my: '.3rem' }}
         />

         <Typography fontSize={{ xs: '.875rem', sm: '1rem' }} sx={lineClamp(2)}>
            {desc}
         </Typography>
      </Box>
   );
};

export default Article;
