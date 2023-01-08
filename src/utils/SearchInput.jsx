import { useLocation, useNavigate } from 'react-router-dom';
import { useMainContext } from '../context/MainContext';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { useColorMode } from '../context/ColorModeContext';
import { Stack } from '@mui/system';

const CustomInput = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 25px;
  color: ${({ color }) => color};
  background: transparent;
  outline: none;
  border: 1px solid ${({ bordercolor }) => bordercolor};
  transition: 0.2s;
  font-size: 16px;
  padding-left: 3rem;
  padding-right: 1rem;
  position: relative;

  &:hover {
    background: ${({ background }) => background};
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: transparent;
  }
`;

const SearchInput = () => {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const { searchTerm, setSearchTerm, onSearchChangeHandler } = useMainContext();
  const { mode } = useColorMode();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim() === '') return;

    const route = pathname.split('/')[2];

    navigate(`/search/${route ? route : 'all'}?q=${searchTerm.trim()}`);

    setSearchTerm('');
  };

  const queryParms = new URLSearchParams(search);
  const searchQuery = queryParms.get('q');

  return (
    <form onSubmit={handleSearch} style={{ width: '100%' }}>
      <Stack position='relative' alignItems='center' justifyContent='center'>
        <CustomInput
          aria-labelledby='search-input'
          type='text'
          defaultValue={searchQuery}
          onChange={onSearchChangeHandler}
          bordercolor={mode === 'light' ? '#dfe1e5' : '#5f6368'}
          background={mode === 'light' ? '' : '#303134'}
          color={mode === 'light' ? 'rgba(0,0,0,.87)' : '#e8eaed'}
        />
        <SearchIcon
          sx={{ position: 'absolute', left: '1rem', color: '#9aa0a6' }}
        />
      </Stack>
    </form>
  );
};

export default SearchInput;
