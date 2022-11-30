import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useColorMode } from '../context/ColorModeContext';

const RelatedQuestion = ({ questions }) => {
   const { mode } = useColorMode();

   const CustomAccordion = ({ question, answer_text }) => (
      <>
         {answer_text && (
            <Accordion
               sx={{
                  background: 'transparent',
                  margin: '0 !important',
                  boxShadow: 'none',
                  '&:before': { height: '0' },
                  '&:after': {
                     content: '""',
                     position: 'absolute',
                     bottom: '0',
                     left: '0',
                     right: '0',
                     height: '1px',
                     background:
                        mode === 'light'
                           ? '#d3d3d3'
                           : 'rgba(255, 255, 255, 0.12)',
                  },
               }}
            >
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1bh-content'
                  id='panel1bh-header'
                  sx={{
                     padding: '0',
                     minHeight: '0 !important',
                     height: '45px',
                  }}
               >
                  <Typography
                     color='colors.c9'
                     sx={{ fontSize: { xs: '.875rem', sm: '1rem' } }}
                  >
                     {question}
                  </Typography>
               </AccordionSummary>
               <AccordionDetails sx={{ padding: '0 0 16px' }}>
                  <Box
                     color='colors.c6'
                     sx={{ fontSize: { xs: '.875rem', sm: '1rem' } }}
                  >
                     {answer_text}
                  </Box>
               </AccordionDetails>
            </Accordion>
         )}
      </>
   );

   return (
      <Box mb={3}>
         {questions.map((q, i) => (
            <CustomAccordion key={i} {...q} />
         ))}
      </Box>
   );
};

export default RelatedQuestion;
