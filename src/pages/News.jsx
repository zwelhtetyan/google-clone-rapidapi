import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getNews } from '../api';
import NewsItem from '../components/NewsItem';
import Loading from '../utils/Loading';
import NoResult from '../utils/NoResult';

const News = () => {
   const { search } = useLocation();

   const urlSearchParam = new URLSearchParams(search);
   const query = urlSearchParam.get('q');

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
