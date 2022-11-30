import axios from 'axios';

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
         `https://bing-image-search1.p.rapidapi.com/images/search?q=${searchQuery}`,
         {
            headers: {
               'X-RapidAPI-Key':
                  'a643a45395mshd2cf2232cd0557ep11940cjsn3e95875da525',
               'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
            },
         }
      )
      .then(({ data }) => data.value);

export const getVideos = (searchQuery) =>
   axios
      .get(
         `https://bing-video-search1.p.rapidapi.com/videos/search?q=${searchQuery}`,
         {
            headers: {
               'X-RapidAPI-Key':
                  'a643a45395mshd2cf2232cd0557ep11940cjsn3e95875da525',
               'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com',
            },
         }
      )
      .then(({ data }) => data.value);

export const getNews = (searchQuery) =>
   axios
      .get(
         `https://bing-news-search1.p.rapidapi.com/news/search?q=${searchQuery}&freshness=DAY&textFormat=Raw&safeSearch=Moderate&originalImg=true`,
         {
            headers: {
               'X-BingApis-SDK': 'true',
               'X-RapidAPI-Key':
                  'a643a45395mshd2cf2232cd0557ep11940cjsn3e95875da525',
               'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
            },
         }
      )
      .then(({ data }) => data.value);
