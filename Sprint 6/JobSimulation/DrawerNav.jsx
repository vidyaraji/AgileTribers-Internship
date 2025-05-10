import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Button, Card, CardActions, CardContent, ListSubheader, TextField } from '@mui/material';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { BarChart } from '@mui/x-charts/BarChart';
import Stack from '@mui/material/Stack';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import RttIcon from '@mui/icons-material/Rtt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TonalityIcon from '@mui/icons-material/Tonality';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const config = {
  height: 350,
  margin: { left: 40 },
  hideLegend: true,
};


const translations = {
  totAss: 'Total Assets',
  currAss: 'Current Assets',
  nCurrAss: 'non-Current Assets',
  totLia: 'Total Liabilities',
  curLia: 'Current Liabilities',
  nCurLia: 'non-Current Liabilities',
  totEq: 'Total Equity',
  capStock: 'Capital Stock',
  retEarn: 'Retained Earning',
  treas: 'Treasury',
  nonAffect: 'non Affected',
};

function addLabels(series) {
  return series.map((item) => ({
    ...item,
    label: translations[item.dataKey],
    valueFormatter: (v) => (v ? `$ ${v.toLocaleString()}k` : '-'),
  }));
}

const balanceSheet = [
  {
    year: '2020',
    totAss: 39280359,
    currAss: 9761580,
    nCurrAss: 29518779,
    totLia: 28215119,
    curLia: 7805785,
    nCurLia: 20409334,
    totEq: 11065240,
    capStock: 3447698,
    retEarn: 7573144,
    treas: null,
    nonAffect: 44398,
  },
  {
    year: '2021',
    totAss: 44584663,
    currAss: 8069825,
    nCurrAss: 36514838,
    totLia: 28735415,
    curLia: 8488966,
    nCurLia: 20246449,
    totEq: 15849248,
    capStock: 4024561,
    retEarn: 12689372,
    treas: 824190,
    nonAffect: -40495,
  },
  {
    year: '2022',
    totAss: 48594768,
    currAss: 9266473,
    nCurrAss: 39328295,
    totLia: 27817367,
    curLia: 7930974,
    nCurLia: 19886393,
    totEq: 20777401,
    capStock: 4637601,
    retEarn: 17181296,
    treas: 824190,
    nonAffect: -217306,
  },
  {
    year: '2023',
    totAss: 48731992,
    currAss: 9918133,
    nCurrAss: 38813859,
    totLia: 28143679,
    curLia: 8860655,
    nCurLia: 19283024,
    totEq: 20588313,
    capStock: 5145172,
    retEarn: 22589286,
    treas: 6922200,
    nonAffect: -223945,
  },
];
const closedMixin = (theme) => ({
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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));









export default function DrawerNav() {
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  
  
  
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
const menuId = 'primary-search-account-menu';
const renderMenu = (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={menuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  </Menu>
);
const settings = {
  height: 100,
  yAxis: { min: 0, max: 20 },
};

const values = [0, 2, 3, 4, 6, 8, 7, 9, 15, 6, 8, 7, 12];

const mobileMenuId = 'primary-search-account-menu-mobile';
const renderMobileMenu = (
  <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [type, setType] = React.useState('line');

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{display:'flex', justifyContent:'space-between'}}>
          <Typography variant='h4'>Berry</Typography>
          <IconButton onClick={handleDrawerClose}>
          <MenuIcon/>          
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          DashBoard
        </ListSubheader>}>
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  primary="DashBoard"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
        </List>
        <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Pages
        </ListSubheader>}>
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                 <DashboardIcon/> 
                </ListItemIcon>
                <ListItemText
                  primary="Authentication"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
        </List>
        <List subheader={
        <ListSubheader >
          Libraries
        </ListSubheader>}>
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <RttIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Typography"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
        </List>
          <List >
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <TonalityIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Shadow"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
        </List>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <ColorLensIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Color"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3,margin:'0',padding:'0' }}>
      <Box sx={{ flexGrow: 1,margin:'0',padding:'0'}}>
      <AppBar position="static" sx={{backgroundColor:'white'}}>
        <Toolbar>
          <Search  sx={{color:'black'}}>
            <SearchIconWrapper >
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <CircleNotificationsIcon sx={{color:'#BDADEA'}}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon sx={{color:'#BDADEA'}}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{color:'#BDADEA'}}  />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    <Box sx={{backgroundColor:'#e3f2f5',padding:'0',borderRadius:'10px',margin:'1%'}}>
    <Box sx={{display:'flex' ,margin:'2%', justifyContent:'space-between'}}>
       <Card sx={{ minWidth: 400 ,backgroundColor:'#5d35b0',color:'white'}}>
      <CardContent sx={{margin:"5%"}}>
        <FolderCopyIcon sx={{margin:"1%"}}/>
        <Typography variant="h3" component="div" sx={{margin:"1%"}}>
          $500.00
        </Typography>
        <Typography variant="body2" sx={{margin:"1%",marginTop:'5%'}}>
          Trial Trending
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 400 ,backgroundColor:'#1f88e4',color:'white'}}>
      <CardContent sx={{display:'flex',margin:'5%'}}>
        <Box>
        <WorkIcon sx={{margin:"1%"}}/>
         <Typography variant="h3" component="div" sx={{margin:"1%"}}>
          $961
        </Typography>
        <Typography variant="body2" sx={{margin:"1%",marginTop:'5%'}}>
          Trial Combat
        </Typography>
        </Box>
        <Box>
          <Stack sx={{ width: '100%', maxWidth: 300 }}>
      <SparkLineChart data={values} color="green" {...settings} />
      </Stack>
        </Box>
        
      </CardContent>
    </Card>
    <Box sx={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
      <Card sx={{ minWidth: 400, maxHeight:100,backgroundColor:'#1f88e4'}}>
      <CardContent sx={{display:'flex',color:'white',gap:'5%'}}>
        <Box>
          <AccountBalanceWalletIcon/>
        </Box>
        <Box sx={{flexGrow:'1'}}>
          <Typography variant="h5" component="div">
          $20.1k
        </Typography>
        <Typography variant="body2" sx={{margin:"1%"}}>
          Trial Trending
        </Typography>
        </Box>
      </CardContent>
    </Card>
          <Card sx={{ minWidth: 400, maxHeight:100}}>
      <CardContent sx={{display:'flex',gap:'5%'}}>
        <Box>
          <AccountBalanceWalletIcon sx={{color:'yellowgreen'}}/>
        </Box>
        <Box sx={{flexGrow:'1'}}>
          <Typography variant="h5" component="div">
          $20k
        </Typography>
        <Typography variant="body2" sx={{margin:"1%"}}>
          Trial Trending
        </Typography>
        </Box>
      </CardContent>
    </Card>
    </Box>
    </Box>    
    <Box sx={{display:'flex',justifyContent:'space-between',margin:'2%'}}>
      <Box sx={{width:'65%'}}>
        <Typography variant='h4'>$32450</Typography>
         <TextField
        select
        value={type}
        onChange={(event) => setType(event.target.value)}
        label="series type"
        sx={{ minWidth: 150 ,marginLeft:'80%'}}
      >
        <MenuItem value="line">Today</MenuItem>
        <MenuItem value="bar">Yesterday</MenuItem>
      </TextField>
        <BarChart
      dataset={balanceSheet}
      series={addLabels([
        { dataKey: 'currAss', stack: 'assets' },
        { dataKey: 'nCurrAss', stack: 'assets' },
        { dataKey: 'curLia', stack: 'liability' },
        { dataKey: 'nCurLia', stack: 'liability' },
        { dataKey: 'capStock', stack: 'equity' },
        { dataKey: 'retEarn', stack: 'equity' },
        { dataKey: 'treas', stack: 'equity' },
      ])}
      xAxis={[{ dataKey: 'year' }]}
      yAxis={[{ width: 80 }]}
      {...config}
    />
    
      </Box>
      <Box >
      <Card sx={{ minWidth: 400}}>
      <CardContent>
        <Typography variant='h6' >
          Popular Books
        </Typography>
         <Card sx={{Width: 300}}>
      <CardContent>
        <Box sx={{backgroundColor:'#eeeafb'}}>
        <Typography variant="h6" component="div">
          Bajaj Finance
        </Typography>
         <Stack direction="row" sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 ,}}>
        <SparkLineChart
          data={[3, 3, 5, 2, 5, 10, 8, 5, 4, 8, 7, 5]}
          height={100}
          curve="natural"
          color={'#aca1cb'}
          area
        />
        </Box>
        </Stack>
      </Box>
      </CardContent>
    </Card>
    <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'3%'}}>
      <Box>
        <Typography variant='h6'>Bajaj Finance</Typography>
          <Typography sx={{fontSize:'15px',color:'green'}}>With GST</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>$19.40</Typography>
      </Box>       
    </Box>
    <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'3%'}}>
      <Box>
        <Typography variant='h6'>ITPL</Typography>
          <Typography sx={{fontSize:'15px',color:'red'}}>With Penalty</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>$100.40</Typography>
      </Box>       
    </Box>
    <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'3%'}}>
      <Box>
        <Typography variant='h6'>BookGroup</Typography>
          <Typography sx={{fontSize:'15px',color:'green'}}>12% refund</Typography>
      </Box>
      <Box>   
        <Typography variant='h6'>$80.40</Typography>
      </Box>       
    </Box>
      </CardContent>

    </Card>
      </Box>
    </Box>
          
    
    </Box>
    </Box>
    </Box>
  );
}
