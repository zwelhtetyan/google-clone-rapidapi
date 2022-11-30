import { createContext, useContext, useEffect, useState } from 'react';

const ColorMode = createContext({ mode: '', toggleColorMode: () => {} });

const ColorModeContext = ({ children }) => {
   const [mode, setMode] = useState(localStorage.getItem('theme') || 'dark');

   const toggleColorMode = () =>
      setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

   useEffect(() => {
      localStorage.setItem('theme', mode);

      if (mode === 'light') {
         document.body.classList.add('light');
         document.body.classList.remove('dark');
      } else {
         document.body.classList.add('dark');
         document.body.classList.remove('light');
      }
   }, [mode]);

   return (
      <ColorMode.Provider value={{ mode, toggleColorMode }}>
         {children}
      </ColorMode.Provider>
   );
};

export default ColorModeContext;

export const useColorMode = () => useContext(ColorMode);
