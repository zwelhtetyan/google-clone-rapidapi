import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import {
   Home,
   All,
   Images,
   Videos,
   News,
   PageNotFound,
   Error,
   PlayVideo,
} from '../pages';

export const router = createBrowserRouter([
   { path: '/', element: <Home /> },

   {
      path: 'search',
      element: <MainLayout />,
      children: [
         { path: 'all', element: <All /> },
         { path: 'images', element: <Images /> },
         { path: 'videos', element: <Videos /> },
         { path: 'news', element: <News /> },
      ],
      errorElement: <Error />,
   },

   {
      path: 'play_video/:name/:videoId/:publisher/:creator/:datePublished',
      element: <PlayVideo />,
   },

   { path: '*', element: <PageNotFound /> },
]);
