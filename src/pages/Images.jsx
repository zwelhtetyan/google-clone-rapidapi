import { Stack } from '@mui/system';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { getImages } from '../api';
import ImageItem from '../components/ImageItem';
import Loading from '../utils/Loading';
import NoResult from '../utils/NoResult';

const Images = () => {
  const query = useOutletContext();

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
      gridTemplateColumns={'repeat(auto-fill, minmax(150px, 1fr))'}
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
