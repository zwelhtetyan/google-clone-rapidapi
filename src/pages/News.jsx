import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { getNews } from '../api';
import NewsItem from '../components/NewsItem';
import Loading from '../utils/Loading';
import NoResult from '../utils/NoResult';

const News = () => {
   const query = useOutletContext();

   const {
      data: news,
      isLoading,
      isError,
      error,
   } = useQuery(['getNews', query], () => getNews(query));

   if (isLoading) return <Loading />;

   if (isError) {
      throw new Error(error.message);
   }

   return (
      <Box maxWidth={{ md: '630px' }}>
         {news.length === 0 && <NoResult query={query} />}

         {news.map((newItem, i) => (
            <NewsItem {...newItem} key={i} />
         ))}
      </Box>
   );
};

export default News;
