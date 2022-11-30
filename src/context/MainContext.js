import { createContext, useContext, useState } from 'react';

const Ctx = createContext({
   searchTerm: '',
   setSearchTerm: () => {},
   onSearchChangeHandler: () => {},
});

const MainContext = ({ children }) => {
   const [searchTerm, setSearchTerm] = useState('');

   const onSearchChangeHandler = (e) => setSearchTerm(e.target.value);

   return (
      <Ctx.Provider
         value={{
            searchTerm,
            setSearchTerm,
            onSearchChangeHandler,
         }}
      >
         {children}
      </Ctx.Provider>
   );
};

export default MainContext;

export const useMainContext = () => useContext(Ctx);
