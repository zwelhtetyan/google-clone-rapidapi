import { Box, Typography, Stack } from '@mui/material';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { getAllInfo } from '../api';
import Article from '../components/Article';
import RelatedQuestion from '../components/RelatedQuestion';
import About from '../components/About';
import NoResult from '../utils/NoResult';
import Loading from '../utils/Loading';

const All = () => {
   const query = useOutletContext();

   const { data, isLoading, isError, error } = useQuery(
      ['getAllInfo', query],
      () => getAllInfo(query)
   );

   if (isLoading) return <Loading />;

   if (isError) {
      throw new Error(error.message);
   }

   return (
      <Stack flexDirection={{ md: 'row' }} alignItems={{ md: 'flex-start' }}>
         {/* left */}
         <Box maxWidth={{ md: '630px' }}>
            <Typography color='colors.c8' variant='body2' mb={2}>
               {data.result_stat}
            </Typography>

            <RelatedQuestion questions={data.related_questions} />

            {data.organic_results.length === 0 && <NoResult query={query} />}

            {data.organic_results.map((item, i) => (
               <Article key={i} {...item} />
            ))}
         </Box>

         {/* right */}
         <About {...data} />
      </Stack>
   );
};

export default All;
