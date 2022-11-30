import { createTheme } from '@mui/material';

export const customTheme = (mode) =>
   createTheme({
      breakpoints: {
         values: {
            xs: 0,
            sm: 480,
            md: 800,
            lg: 1080,
            xl: '1200',
         },
      },

      palette: {
         mode,
         ...(mode === 'light'
            ? {
                 background: {
                    default: '#ffffff',
                 },

                 colors: {
                    c1: '#70757a',
                    c2: '#F2F2F2',
                    c3: '#dfe1e5',
                    c4: '#ffffff',
                    c5: '#D2D2D2',
                    c6: '#4D5156',
                    c7: '#4661CE',
                    c8: '#70757a',
                    c9: '#202124',
                    c10: '#d3d3d3',
                 },
              }
            : {
                 background: {
                    default: '#202124',
                 },

                 colors: {
                    c1: '#999da2',
                    c2: '#171717',
                    c3: '#5f6368',
                    c4: '#303134',
                    c5: '#656262',
                    c6: '#BDC1C6',
                    c7: '#8ab4f8',
                    c8: '#A1A0A1',
                    c9: '#e8eaed',
                    c10: 'rgba(255, 255, 255, 0.12)',
                 },
              }),
      },
   });
