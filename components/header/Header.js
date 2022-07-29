import * as React from "react";
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material'
import { ContentCut } from '@mui/icons-material'

// const [anchorElNav, setAnchorElNav] = React.useState([]);
// const pages = ["Services", "Dressers", "About", "Contact"];

// const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
// }

export default function Header() {
    return (
        <Box sx={{height: '15%'}}>
            <AppBar position="absolute">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <ContentCut sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Arial',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        SWAG DRESSERS
                    </Typography>
                    {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                            horizontal: "left"
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left"
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" }
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box> */}

                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
        
    );
};