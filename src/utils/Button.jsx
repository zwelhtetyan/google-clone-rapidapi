import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useColorMode } from '../context/ColorModeContext';

const CustomButton = styled(Button)`
   background: ${({ bg }) => bg};
   color: ${({ textcolor }) => textcolor};
   border-radius: 30px;
   text-transform: none;
   font-weight: normal;
   font-size: 1rem;

   &:hover {
      background: ${({ hovercolor }) => hovercolor};
   }
`;

export const BtnPrimary = ({ children, onClick, size }) => {
   const { mode } = useColorMode();

   return (
      <CustomButton
         size={size || 'medium'}
         bg={mode === 'light' ? '#e5e5e5' : '#3c3c3c'}
         textcolor={mode === 'light' ? '#4D5156' : '#BDC1C6'}
         hovercolor={mode === 'light' ? '#d5d5d5' : '#2b2b2c'}
         onClick={onClick}
      >
         {children}
      </CustomButton>
   );
};
