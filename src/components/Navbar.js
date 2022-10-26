import { MovieFilter } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, NavLink, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import UserLog from "../auth/UserLog";
import useMovieStore from "../store/movie";

const navItems = [
  // { text: "Indonesian", link: "/indonesian" },
  // { text: "Pricing", link: "/pricing" },
  // { text: "About", link: "/about" },
];



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 1,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



const Navbar = () => {
  const navigate = useNavigate();
  const searchKeyword = useMovieStore(state => state.searchKeyword);
  const setSearchKeyword = useMovieStore(state => state.setSearchKeyword);
  const [searchParams, setSearchParams] = useSearchParams();


  React.useEffect(() => {
    setSearchKeyword(searchParams.get('search'));
  }, [searchParams]);

  const searchMovie = (event) => {
    if (event.key === 'Enter') {
      setSearchKeyword(event.target.value);
      event.target.value ? navigate(`/?search=${searchKeyword}`) : navigate(`/`);
    }
  };

  const onSearchChange = ({ target }) => {
    setSearchKeyword(target.value);
  }

  return (
    <Box sx={{ display: "flex", mb: 10 }}>
      <AppBar>
        <Toolbar>
          <MovieFilter sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: "block",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              NONTON
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={onSearchChange}
              onKeyUpCapture={searchMovie}
              value={searchKeyword}
            />
          </Search>
          <Box sx={{ display: "block" }}>
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.text}
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-inactive"
                }
              >
                {item.text}
              </NavLink>
            ))}
            <UserLog />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
