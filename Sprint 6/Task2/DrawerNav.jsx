import * as React from 'react';
import PropTypes from 'prop-types';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BackgroundImg from './drawerImg.jpg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BubbleChartSharpIcon from '@mui/icons-material/BubbleChartSharp';
import FmdGoodSharpIcon from '@mui/icons-material/FmdGoodSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Fab from '@mui/material/Fab';
import StoreIcon from '@mui/icons-material/Store';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SellIcon from '@mui/icons-material/Sell';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import UpdateIcon from '@mui/icons-material/Update';
import { DataGrid } from '@mui/x-data-grid';

import { LineChart } from '@mui/x-charts/LineChart';
import { Checkbox, colors, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Paper } from '@mui/material';
import { BarChart } from '@mui/x-charts';
// import { dataset, valueFormatter } from './dataSet/weather';
// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';
// import { dataset } from './basicDataset';
// import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
// import PropTypes from 'prop-types';


const drawerWidth = 250;
function valueFormatter(value) {
  return `${value}mm`;
}

function DrawerNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };


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

const  dataset1= [
      {
        london: 59,
        paris: 57,
        newYork: 86,
        seoul: 21,
        month: 'Jan',
      },
      {
        london: 50,
        paris: 52,
        newYork: 78,
        seoul: 28,
        month: 'Feb',
      },
      {
        london: 47,
        paris: 53,
        newYork: 106,
        seoul: 41,
        month: 'Mar',
      },
      {
        london: 54,
        paris: 56,
        newYork: 92,
        seoul: 73,
        month: 'Apr',
      },
      {
        london: 57,
        paris: 69,
        newYork: 92,
        seoul: 99,
        month: 'May',
      },
      {
        london: 60,
        paris: 63,
        newYork: 103,
        seoul: 144,
        month: 'June',
      },
      {
        london: 59,
        paris: 60,
        newYork: 105,
        seoul: 319,
        month: 'July',
      },
      {
        london: 65,
        paris: 60,
        newYork: 106,
        seoul: 249,
        month: 'Aug',
      },
      {
        london: 51,
        paris: 51,
        newYork: 95,
        seoul: 131,
        month: 'Sept',
      },
      {
        london: 60,
        paris: 65,
        newYork: 97,
        seoul: 55,
        month: 'Oct',
      },
      {
        london: 67,
        paris: 64,
        newYork: 76,
        seoul: 48,
        month: 'Nov',
      },
      {
        london: 61,
        paris: 70,
        newYork: 103,
        seoul: 25,
        month: 'Dec',
      },
    ];
    
const dataset2 = [
  { x: 0, y: 10 },
  { x: 20, y: 20 },
  { x: 30, y: 5 },
  { x: 40, y: 20 },
  { x: 50, y: 25 },
  { x: 60, y: 20 },
  { x: 70, y: 40 },
];

  const drawer = (
    <Box sx={{
      backgroundImage: `url(${BackgroundImg})`,
      // opacity:'0.8',  
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', 
      height: '100vh',
      width: '100%',
      color:'white',
      fontWeight:'bolder'
    }}>
      <Toolbar >
        <List>
          <ListItem>
            <ListItemIcon>
              <AcUnitIcon sx={{color:'white'}}/>
            </ListItemIcon>
          <ListItemText primary="Creative Tim" />
          </ListItem>
      </List>
      </Toolbar>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <DashboardIcon  sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="DashBoard" />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <PersonIcon  sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="UserProfile" />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <ContentPasteIcon  sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Table List" />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <LibraryBooksIcon  sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Typography" />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <BubbleChartSharpIcon  sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Icons" />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <FmdGoodSharpIcon  sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Maps" />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <NotificationsSharpIcon  sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 ,color:'red'},
    { field: 'Name', headerName: 'Name', width: 130 },
    { field: 'Salary', headerName: 'Salary',type:'number', width: 130 },
    {
      field: 'Country',
      headerName: 'Country',
      width: 90,
    },

  ];
  
  const rows = [
    { id: 1, Name: 'Karthick', Salary: 20000, Country: 'india' },
    { id: 2, Name: 'Vidya', Salary: 55000, Country: 'pakistan' },
    { id: 3, Name: 'Sandya', Salary: 35000, Country: 'Tokiya' },
    { id: 4, Name: 'Deepika', Salary: 5000, Country: 'America' },
    { id: 5, Name: 'Priya', Salary: 50000, Country: 'China' },
    { id: 6, Name: 'Venisha', Salary: 2000, Country: 'USA' },
    { id: 7, Name: 'Stephy', Salary: 'Ferrara', Country: 'India' },
    { id: 8, Name: 'Frances', Salary: 'Rossini', Country: 'China' },
    { id: 9, Name: 'Roxie', Salary: 'Harvey', Country: 'Okanda' },
  ];
  
  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Box sx={{display:'flex',backgroundColor:'#ebebeb'}}>
      <CssBaseline />

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="false"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: 'none' }, position:'fixed',top:'0',width:'10px',height:'20px',}}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: '80' } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, 
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>



      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` ,padding:'0'},height:'100%'}}
      >
      <Box sx={{ flexGrow: 1 ,margin:0,padding:0 }}>
      <AppBar position="static" sx={{color:'black',backgroundColor:'inherit',boxShadow:0}}>
        <Toolbar>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Material DashBoard
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  color="error">
                <DashboardIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
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
              <AccountCircle />
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
    </Box >
    <Grid container margin={'2%'} display={'flex'} justifyContent={'space-between'}>
    <Box width={'230px'} >
      <Card sx={{ Width: '500px',display:'flex' , flexDirection:"column",label: "hello"}}>
          
          
        <Box sx={{display:'flex'}}>
        <Box  >
          {/* <Box sx={{position:'absolute',height:"80px",padding:'20px',backgroundColor:'orange',width:'70px'}}> */}
          <Fab sx={{color:'white',borderRadius:'5px',height:"80px",padding:'20px',backgroundColor:'orange',width:'70px',marginLeft:'25%'}} color="secondary" aria-label="add">
          <ContentCopyIcon size="large"/>
          </Fab>
          {/* </Box> */}
      </Box>
        <Box sx={{flexGrow:1,padding:'5',position:'relative',textAlign:'end'}}>
        <CardContent sx={{margin:'0',paddingBottom:'5px'}}>
        <Typography variant='body2' color="text.secondary">Used Storage</Typography>
        <Typography gutterBottom variant="h6" component="div">
         49/50 GB
        </Typography>
      </CardContent>
      </Box>
      </Box>
      <Box > 
      <CardContent sx={{padding:'0',marginLeft:'10%'}}>
        <ListItemIcon marginLeft={'30%'}>
      <ReportProblemIcon color='error'/>
      <Typography component='h6' sx={{padding:'0'}}>Get More Spaces</Typography>
        </ListItemIcon>
      </CardContent>
     </Box>
    </Card>
    </Box>


    <Box width={'230px'}>
      <Card sx={{ maxWidth: '500px',display:'flex' , flexDirection:"column", Gap:'0'}}>
        <Box sx={{display:'flex'}}>
        <Box >
          <Fab sx={{color:'white',borderRadius:'5px',height:"80px",padding:'20px',backgroundColor:'green',width:'70px',marginLeft:'25%'}} color="secondary" aria-label="add">
            <StoreIcon />
          </Fab>
          {/* </Box> */}
      </Box>
        <Box sx={{flexGrow:1,padding:'5',position:'relative',textAlign:'end'}}>
        <CardContent sx={{margin:'0',paddingBottom:'5px'}}>
        <Typography variant='body2' color="text.secondary">Revenue</Typography>
        <Typography gutterBottom variant="h6" component="div">
         $34,234
        </Typography>
      </CardContent>
      </Box>
      </Box>
      <Box > 
      <CardContent sx={{padding:'0',marginLeft:'10%'}}>
        <ListItemIcon >
      <CalendarMonthIcon/>
      <Typography component='h6' sx={{padding:'0'}}>Last 24 Hours</Typography>
        </ListItemIcon>
      </CardContent>
     </Box>
    </Card>
    </Box>

    <Box  width={'230px'}>
      <Card sx={{ maxWidth: '500px',display:'flex' , flexDirection:"column", Gap:'0'}}>
        <Box sx={{display:'flex'}}>
        <Box >
          <Fab sx={{color:'white',borderRadius:'5px',height:"80px",padding:'20px',backgroundColor:'red',width:'70px',marginLeft:'30%'}} color="secondary" aria-label="add">
            <InfoOutlineIcon />
          </Fab>
          {/* </Box> */}
      </Box>
        <Box sx={{flexGrow:1,padding:'5',position:'relative',textAlign:'end'}}>
        <CardContent sx={{margin:'0',paddingBottom:'5px'}}>
        <Typography variant='body2' color="text.secondary">Fixed Issues</Typography>
        <Typography gutterBottom variant="h6" component="div">
        75
        </Typography>
      </CardContent>
      </Box>
      </Box>
      <Box > 
      <CardContent sx={{padding:'0',marginLeft:'10%'}}>
        <ListItemIcon >
      <SellIcon/>
      <Typography component='h6' sx={{padding:'0'}}>Tracked from GitHub</Typography>
        </ListItemIcon>
      </CardContent>
     </Box>
    </Card>
    </Box>

    <Box width={'230px'}>
      <Card sx={{ maxWidth: '500px',display:'flex' , flexDirection:"column", Gap:'0'}}>
        <Box sx={{display:'flex'}}>
        <Box >
          {/* <Box sx={{position:'absolute',height:"80px",padding:'20px',backgroundColor:'orange',width:'70px'}}> */}
          <Fab sx={{color:'white',borderRadius:'5px',height:"80px",padding:'20px',backgroundColor:'blue',width:'70px',marginLeft:'30%'}} color="secondary" aria-label="add">
            <AccessibilityIcon />
          </Fab>
      </Box>
        <Box sx={{flexGrow:1,padding:'5',position:'relative',textAlign:'end'}}>
        <CardContent sx={{margin:'0',paddingBottom:'5px'}}>
        <Typography variant='body2' color="text.secondary">Followers</Typography>
        <Typography gutterBottom variant="h6" component="div">
        +245
        </Typography>
      </CardContent>
      </Box>
      </Box>
      <Box > 
      <CardContent sx={{padding:'0',marginLeft:'10%'}}>
        <ListItemIcon >
      <UpdateIcon/>
      <Typography component='h6' sx={{padding:'0'}}>Just Updated</Typography>
        </ListItemIcon>
      </CardContent>
     </Box>
    </Card>
    </Box>
    </Grid>


<Grid container justifyContent={'space-between'}>

  <Box width="350px" margin={'2%'}>
  <Card >
    <Box sx={{display:'flex', flexDirection:'column'}}>
        <LineChart  sx={{backgroundColor:'green',margin:'5%'}} 
      series={[{ curve:'linear',data: [10,20,5,20,25,20,40] ,color:'white'}]}
      height={150}
      grid={{ vertical: true, horizontal: true }}
      />
      <Box  >
        <CardContent sx={{margin:'0'}}>
          <Typography sx={{fontSize:'25px',fontWeight:'bold',}}>Data Sales</Typography>
        <Typography variant='body2' color="textSecondary">55% increase in today sales</Typography>
        <Box sx={{marginTop:'5%'}}>
      <Typography variant='body2' color="textSecondary">Updated 4 Minutes </Typography>
      </Box>
        </CardContent>
      </Box >
      </Box>
      </Card>
  </Box>

  <Box width="350px" margin={'2%'}>
  <Card >
    <Box sx={{display:'flex', flexDirection:'column'}}>
    <BarChart sx={{backgroundColor:'orange',margin:'5%'}}
  dataset={dataset1}
  xAxis={[{ scaleType: 'band', dataKey: 'month',color:'white' }]}
  series={[{ dataKey: 'seoul', valueFormatter,color:'white' }]}
  layout="vertical"
  height={150}
  // {...chartSetting}
/>
      <Box  >
        <CardContent sx={{margin:'0'}}>
          <Typography sx={{fontSize:'25px',fontWeight:'bold',}}>EMail Subscriptions</Typography>
        <Typography variant='body2' color="textSecondary">Last Compaign Performance</Typography>
        <Box sx={{marginTop:'5%'}}>
      <Typography variant='body2' color="textSecondary">Compaign Send 2 days Ago </Typography>
      </Box>
        </CardContent>
      </Box >
      </Box>
      </Card>
  </Box>

  <Box width="350px" margin={'2%'}>
  <Card >
    <Box sx={{display:'flex', flexDirection:'column'}}>
    <LineChart  sx={{backgroundColor:'red',margin:'5%'}}
  series={[
    // { curve: "linear", data: [1, 5, 2, 6, 3, 9.3] },
    { curve: "linear", data: [200, 800, 400, 250, 240, 200] ,color:'white'},
  ]}
  grid={{ vertical: true, horizontal: true }}
  height={150}

/>
      <Box  >
        <CardContent sx={{margin:'0'}}>
          <Typography sx={{fontSize:'25px',fontWeight:'bold',}}>Completed Task</Typography>
        <Typography variant='body2' color="textSecondary">Last Compaign Performance</Typography>
        <Box sx={{marginTop:'5%'}}>
      <Typography variant='body2' color="textSecondary">Compaign send 2 days ago</Typography>
      </Box>
        </CardContent>
      </Box >
      </Box>
      </Card>
  </Box>
 
</Grid>


<Grid container justifyContent={'space-between'}>

   <Box sx={{ bgcolor: 'background.paper', width: 550 ,margin:'2%'}}>
      <AppBar position="static" backgroundColor="secondary">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          
          sx={{backgroundColor:'purple'}}
          >
         <Tab  label="Bugs" icon={<BugReportIcon />} {...a11yProps(0)} />
          <Tab label="Website" icon={<CodeIcon />}{...a11yProps(1)} />
          <Tab label="Server" icon={<CloudIcon />}{...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
      <FormControl sx={{ m: 0 }} component="fieldset" variant="body" >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox  name="gilad" color="secondary"/>
            }
            label="Sign Contract Of 'What are Conference Organizers Afraid Of?' " 
            />    
            <Divider/> 
            <FormControlLabel
            control={
              <Checkbox  name="gilad" color="secondary"/>
            }
            label="Lones From Great Russian Literature? or Emails From My Boss?' "
            />    
          </FormGroup>
        </FormControl>
        </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
    </Box>

    <Box margin={'2%'} elevation>
      <Box sx={{backgroundColor:'orange',padding:'10px',color:'white'}}>
        <Typography variant='h5'>Employees Stats</Typography>
        <Typography variant="body2" fontWeight={'lighter'}>New Employees on 15th September, 2016</Typography>
      </Box>
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0}}
      />
    </Paper>
    </Box>

</Grid>
</Box>
</Box>
  );
}

DrawerNav.propTypes = {
  window: PropTypes.func,
};

export default DrawerNav;
