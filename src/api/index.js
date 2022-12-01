import axios from 'axios';

// use env for API key later

export const getAllInfo = async (searchQuery) => {
   const response = await axios.get(
      `https://g-search.p.rapidapi.com/search?q=${searchQuery}`,
      {
         headers: {
            'X-RapidAPI-Key':
               '481b0cf735mshefde3063ad951c0p1cabd7jsn7b85d88ca55a',
            'X-RapidAPI-Host': 'g-search.p.rapidapi.com',
         },
      }
   );

   return response.data.data;
};

export const getImages = async (searchQuery) => {
   const response = await axios.get(
      `https://bing-image-search1.p.rapidapi.com/images/search?q=${searchQuery}&count=30`,
      {
         headers: {
            'X-RapidAPI-Key':
               '481b0cf735mshefde3063ad951c0p1cabd7jsn7b85d88ca55a',
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
         },
      }
   );

   return response.data.value;
};

export const getVideos = async (searchQuery) => {
   const response = await axios.get(
      `https://bing-video-search1.p.rapidapi.com/videos/search?q=${searchQuery}&count=10`,
      {
         headers: {
            'X-RapidAPI-Key':
               '481b0cf735mshefde3063ad951c0p1cabd7jsn7b85d88ca55a',
            'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com',
         },
      }
   );

   return response.data.value;
};

export const getNews = async (searchQuery) => {
   const response = await axios.get(
      `https://bing-news-search1.p.rapidapi.com/news/search?q=${searchQuery}&freshness=DAY&textFormat=Raw&safeSearch=Moderate&originalImg=true&count=10`,
      {
         headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key':
               '481b0cf735mshefde3063ad951c0p1cabd7jsn7b85d88ca55a',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
         },
      }
   );

   return response.data.value;
};
