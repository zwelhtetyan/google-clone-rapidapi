import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import SearchContext from './context/MainContext';
import { useColorMode } from './context/ColorModeContext';
import { router } from './routes';
import { customTheme } from './theme';

const App = () => {
   const { mode } = useColorMode();

   const colorTheme = useMemo(() => customTheme(mode), [mode]);

   return (
      <ThemeProvider theme={colorTheme}>
         <SearchContext>
            <CssBaseline />
            <RouterProvider router={router} />
         </SearchContext>
      </ThemeProvider>
   );
};

export default App;
