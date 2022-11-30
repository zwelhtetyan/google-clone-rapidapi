import axios from 'axios';

// to use env for API key

export const getAllInfo = (searchQuery) =>
   axios
      .get(`https://g-search.p.rapidapi.com/search?q=${searchQuery}`, {
         headers: {
            'X-RapidAPI-Key':
               '481b0cf735mshefde3063ad951c0p1cabd7jsn7b85d88ca55a',
            'X-RapidAPI-Host': 'g-search.p.rapidapi.com',
         },
      })
      .then(({ data }) => data.data);

export const getImages = (searchQuery) =>
   axios
      .get(
         `https://bing-image-search1.p.rapidapi.com/images/search?q=${searchQuery}&count=30`,
         {
            headers: {
               'X-RapidAPI-Key':
                  '481b0cf735mshefde3063ad951c0p1cabd7jsn7b85d88ca55a',
               'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
            },
         }
      )
      .then(({ data }) => data.value);

export const getVideos = (searchQuery) =>
   axios
      .get(
         `https://bing-video-search1.p.rapidapi.com/videos/search?q=${searchQuery}&count=15`,
         {
            headers: {
               'X-RapidAPI-Key':
                  '481b0cf735mshefde3063ad951c0p1cabd7jsn7b85d88ca55a',
               'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com',
            },
         }
      )
      .then(({ data }) => data.value);

export const getNews = (searchQuery) =>
   axios
      .get(
         `https://bing-news-search1.p.rapidapi.com/news/search?q=${searchQuery}&freshness=DAY&textFormat=Raw&safeSearch=Moderate&originalImg=true&count=15`,
         {
            headers: {
               'X-BingApis-SDK': 'true',
               'X-RapidAPI-Key':
                  '481b0cf735mshefde3063ad951c0p1cabd7jsn7b85d88ca55a',
               'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
            },
         }
      )
      .then(({ data }) => data.value);
