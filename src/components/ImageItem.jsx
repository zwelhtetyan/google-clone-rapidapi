import { useState } from 'react';
import { Box, Stack } from '@mui/system';
import { IconButton, Modal, Typography } from '@mui/material';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { BtnPrimary } from '../utils/Button';
import { useColorMode } from '../context/ColorModeContext';
import { lineClamp } from '../utils/LineClamp';

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;

  @media screen and (max-width: 359px) {
    height: auto;
  }
`;

const ModalBody = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 600px;
  width: 95%;
  max-height: 75vh;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  overflow-y: auto;
  background: ${({ bgcolor }) => bgcolor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    border-radius: 0;
  }
`;

const ImageItem = ({
  name,
  thumbnailUrl,
  hostPageUrl,
  hostPageFavIconUrl,
  hostPageDomainFriendlyName,
}) => {
  const { mode } = useColorMode();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Image
        src={thumbnailUrl}
        alt={name}
        loading='lazy'
        onClick={handleOpen}
      />

      <Box
        sx={{
          '&: hover': {
            textDecoration: 'underline',
            cursor: 'pointer',
          },
        }}
        onClick={() => window.open(hostPageUrl, '_blank')}
      >
        {hostPageFavIconUrl && hostPageDomainFriendlyName && (
          <Stack direction='row'>
            <img
              src={hostPageFavIconUrl}
              alt='host_page'
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '3px',
              }}
            />

            <Typography
              variant='caption'
              ml={1}
              color='colors.c8'
              sx={lineClamp(1)}
            >
              {hostPageDomainFriendlyName}
            </Typography>
          </Stack>
        )}

        <Typography
          variant='body2'
          color='colors.c6'
          mt='.1rem'
          sx={lineClamp(1)}
        >
          {name}
        </Typography>
      </Box>

      {/* modal */}
      <Modal
        open={open}
        onClose={handleClose}
        disableScrollLock
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <ModalBody bgcolor={mode === 'light' ? '#FFFFFF' : '#171717'}>
          <Stack
            width='100%'
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            py={1}
            px={2}
          >
            {hostPageFavIconUrl && hostPageDomainFriendlyName && (
              <Stack direction='row' alignItems='center' flex='1' mr={2}>
                <Stack
                  alignItems='center'
                  justifyContent='center'
                  width='32px'
                  height='32px'
                  borderRadius='50%'
                  bgcolor='#fff'
                  overflow='hidden'
                >
                  <img
                    src={hostPageFavIconUrl}
                    alt='host_page'
                    width='20px'
                    height='20px'
                  />
                </Stack>

                <Typography ml={1} color='colors.c9' sx={lineClamp(1)}>
                  {hostPageDomainFriendlyName}
                </Typography>
              </Stack>
            )}

            <IconButton onClick={handleClose} sx={{ marginLeft: 'auto' }}>
              <CloseIcon
                sx={{
                  cursor: 'pointer',
                }}
              />
            </IconButton>
          </Stack>

          <img
            src={thumbnailUrl}
            alt={name}
            style={{
              objectFit: 'contain',
              width: '100%',
              maxHeight: '350px',
            }}
          />

          <Stack
            sx={{ mt: 1, p: 2 }}
            width='100%'
            direction='row'
            justifyContent='space-between'
            alignItems='flex-start'
          >
            <Typography
              variant='h6'
              flex='1'
              mr={2}
              color='colors.c9'
              lineHeight='1.5rem'
            >
              {name}
            </Typography>
            <BtnPrimary onClick={() => window.open(hostPageUrl, '_blank')}>
              Visit
            </BtnPrimary>
          </Stack>
        </ModalBody>
      </Modal>
    </Box>
  );
};

export default ImageItem;
