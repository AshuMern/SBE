import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    // <Router>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ mr: "5px" }}>
              <img src="/sbeicon.png" width="60px" alt="A" />
            </Box>
            <Link to="/">
              <Typography
                 variant="h6"
                 noWrap
                 component="a"
                 href="/"
                 sx={{
                   mr: 2,
                   display: { xs: 'none', md: 'flex' },
                   fontFamily: 'monospace',
                   fontWeight: 700,
                   letterSpacing: '.3rem',
                   color: 'inherit',
                   textDecoration: 'none',
                 }}
              >
                ShriBalajiEnterprise
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "flex" },
                }}
              >
                <MenuItem sx={{ display: {xs: "block", md: "flex"} }} onClick={handleCloseNavMenu}>
                <Link to="/"> <Typography >Home</Typography></Link>
                  <Link to="/about">
                    <Typography >About Us</Typography>
                  </Link>
                  <Link to="/policy">
                    <Typography >Privacy Policy</Typography>
                  </Link>
                  <Link to="/cancel">
                    <Typography >Cancellation Policy</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to='/policy'><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Privacy Policy
              </Button></Link>
              <Link to="/about">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  About Us
                </Button>
              </Link>
              <Link to="/cancel">
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >Cancellation Policy Policy</Button>
                  </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}></Box>
          </Toolbar>
        </Container>
      </AppBar>
    // </Router>
  );
}
export default ResponsiveAppBar;
