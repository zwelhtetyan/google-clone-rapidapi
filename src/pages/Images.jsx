import { Stack } from '@mui/system';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getImages } from '../api';
import ImageItem from '../components/ImageItem';
import Loading from '../utils/Loading';
import NoResult from '../utils/NoResult';

const Images = () => {
   const { search } = useLocation();

   const urlSearchParam = new URLSearchParams(search);
   const query = urlSearchParam.get('q');

   const {
      data: images,
      isLoading,
      isError,
      error,
   } = useQuery(['getImages', query], () => getImages(query));

   if (isLoading) return <Loading />;

   if (isError) {
      throw new Error(error.message);
   }

   if (images.length === 0) return <NoResult query={query} />;

   return (
      <Stack
         display='grid'
         gridTemplateColumns={{
            xs: 'repeat(auto-fit, minmax(150px, 1fr))',
            sm: 'repeat(auto-fit, minmax(200px, 1fr))',
         }}
         gap={2}
         mb={4}
      >
         {images.map((item, i) => (
            <ImageItem key={i} {...item} />
         ))}
      </Stack>
   );
};

export default Images;
