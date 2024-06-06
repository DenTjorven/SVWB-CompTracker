import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import "./Navigationbar.css";

const Navigationbar = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeRoute = (route) => {
    handleDrawerClose();
    navigate(route);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "white", maxWidth: "100%" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        screenWidth={screenWidth}
        style={{ width: "100px" }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem className="LogoREV" style={{ textAlign: 'left' }}>
            <ListItemIcon>
              <img
                src="/rev_logo_transparent-1.png"
                style={{ width: '50%', height: '30px' }}
                alt="Logo"
              />
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <ListItem button onClick={() => changeRoute("/")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => changeRoute("/players")}>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="Players" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => changeRoute("/tournaments")}>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="Tournaments" />
        </ListItem>
        <Divider />
      </Drawer>

      <DivChildren>{props.children}</DivChildren>
    </div>
  );
};

export default Navigationbar;

const DivChildren = styled("div")(({ theme }) => ({
  maxWidth: `100vw`,
  minWidth: `calc(100vw - 85px)`,
  minHeight: "80vh",
  paddingTop: "70px",
  float: "right",
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme, screenWidth) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: screenWidth > 800 ? `calc(${theme.spacing(7)} + 1px)` : "0px",
  [theme.breakpoints.up("sm")]: {
    width: screenWidth > 800 ? "60px" : "0px",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open, screenWidth }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme, screenWidth),
    "& .MuiDrawer-paper": closedMixin(theme, screenWidth),
  }),
}));
