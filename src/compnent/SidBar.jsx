import React, { useState } from 'react'
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RefreshIcon from '@mui/icons-material/Refresh';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Button, TextField, styled, useTheme } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { CastConnectedOutlined, ConnectedTvOutlined, Dashboard, HomeOutlined, PeopleOutlineOutlined, PeopleOutlined, ReceiptOutlined } from '@mui/icons-material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (/** @type {import("@mui/material").Theme} */ theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    // @ts-ignore
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  
const Array1=[
  {"text":"Dashboard","icon":<HomeOutlinedIcon/>,"path":"/"},
  {"text":"Mangeteam","icon":<PeopleAltOutlinedIcon/>,"path":"/team"},
  {"text":"Contact information","icon":<ContactsOutlinedIcon/>,"path":"/contact"},
  {"text":"Invoices","icon":<ReceiptLongOutlinedIcon/>,"path":"/invoices"}
  
  
]
const Array2=[
  {"text":"Profile form","icon":<PersonOutlinedIcon/>,"path":"/from"},
  {"text":"Calender","icon":<CalendarTodayOutlinedIcon/>,"path":"/calender"},
  {"text":"FAQ page","icon":< HelpOutlineOutlinedIcon/>,"path":"/faq"}

  
  
]
const Array3=[
  {"text":"Bar Chart","icon":<BarChartOutlinedIcon/>,"path":"/bar"},
  {"text":"Pie Chart","icon":<PieChartOutlineOutlinedIcon/>,"path":"/pie"},
  {"text":"Line Chart","icon":<TimelineOutlinedIcon/>,"path":"/line"},
  {"text":"Geography Chart","icon":<MapOutlinedIcon />,"path":"/geography"}
  
  
]
// @ts-ignore
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function SidBar({open,handleDrawerClose}) {
  let location = useLocation();
  const navigate = useNavigate();
    const theme = useTheme();
    const [userName, setUserName] = useState('');
    const [userImage, setUserImage] = useState(
      ''
    );
    const [isUserNameEntered, setIsUserNameEntered] = useState(false);
    const handleRefreshClick = () => {
      window.location.reload();
    };
    
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // @ts-ignore
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleUserNameEntered = () => {
    setIsUserNameEntered(true);
  };
  return (
    

    <Drawer variant="permanent" open={open}>
         <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
        {/* Use the RefreshIcon for the refresh button */}
        <IconButton onClick={handleRefreshClick}>
          <RefreshIcon />
        </IconButton>
      </DrawerHeader>
        <Divider />
        <Avatar
        sx={{
          mx: 'auto',
          width: open ? 88 : 55,
          height: open ? 88 : 55,
          my: 1,
          border: '2px solid grey',
          transition: '0.25s',
        }}
        alt="User Image"
        src={userImage}
      />
         <input type="file" onChange={handleImageChange} accept="image/*" style={{ display: 'none' }} id="upload-button" />
      <label htmlFor="upload-button">
        <Button
         variant="contained"
         component="span"
         sx={{
           mt: 1,
           width: open ? '100%' : '2%',
           borderRadius: open ? '0' : '50%', 
           overflow: 'hidden',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           opacity: open ? 1 : 0.5, 
           transition: 'opacity 1s',
          
         }}
       >
         {open ? 'Upload your photo ' : null}
        </Button>
      </label>
      
      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        value={userName}
        onChange={handleNameChange}
        sx={{ mt: 1, display: isUserNameEntered ? 'none' : 'block' }}
      />
          
        
      
        <Typography align='center' sx={{fontSize:open?17:0,transition:"1s"}}>{userName} </Typography>
        <Typography align='center' sx={{fontSize:open?15:0,transition:"1s",color:theme.palette.info.main}}>Admin</Typography>
        <Divider />
        <List>
          {Array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton 
            
            onClick={() => {
              navigate(item.path)
            }
            }
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname===item.path? theme.palette.mode==="dark"?  grey[800]:grey[300]:null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
             {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          
          ))}
        </List>







        <Divider />


        <List>
          {Array2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={() => {
                navigate(item.path)
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname===item.path? theme.palette.mode==="dark"?  grey[800]:grey[300]:null
              }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


        <Divider />
        <List>
          {Array3.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={() => {
                navigate(item.path)
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname===item.path? theme.palette.mode==="dark"?  grey[800]:grey[300]:null
              }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>



      </Drawer>
  )
}
