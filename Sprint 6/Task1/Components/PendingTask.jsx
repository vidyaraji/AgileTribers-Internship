
import { Box} from "@mui/material"
import DrawerNav from "../DrawerNav"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function PendingTask(){
    return(
        <>
        <Box display='flex' >
        <DrawerNav/> 
         <Box component='main' sx={{flexGrow:1,p:2}}>
         <Typography variant='h3' sx={{
            textAlign:'center',
            fontWeight:'bold',
            margin:'2%',
            fontFamily:'cursive',
            '@media(max-width:600px)':{
              fontSize:'27px'
            }
        }}>Pending Task</Typography>
        <Grid container spacing={2} columns={{lg:3}} sx={{
            justifyContent:'center'
        }}>
             <Grid size={{lg:0.8}}>
 
 <Card >
     <CardActionArea
     sx={{
         height: '100%',
         '&[data-active]': {
             backgroundColor: 'action.selected',
             '&:hover': {
                 backgroundColor: 'action.selectedHover',
             },
         },
     }}>
         <CardContent sx={{ height: '100%' }}>
             <Chip sx={{height:'auto',
             '& .MuiChip-label': {
                 display: 'block',
                 whiteSpace: 'normal',
             }, padding:'50px',
             backgroundColor:'#faf087',
             color:'#815e17',
             fontSize:'17px',
             fontWeight:'bold',
             textAlign:'center'}} label="Update Website Content" />
             <Typography sx={{padding:'20px',textAlign:'center', fontSize:'15px'}} variant="body2" color="text.secondary">
                 Update The About Us Page With New Team Members
             </Typography>
             <Stack direction="row" sx={{justifyContent:'space-between',padding:'15px'}}>
                     <Box>
                         <Typography  sx={{fontWeight:'bold',fontSize:'16px'}}>Start Date</Typography>
                         <Typography  sx={{fontSize:'12px'}}>21/03/2024</Typography>
                     </Box>
                     <Box>
                         <Typography sx={{fontWeight:'bold',fontSize:'16px'}}>End Date</Typography>
                         <Typography sx={{fontSize:'12px'}}>21/11/2024</Typography>
                     </Box>
             </Stack>
             <Stack spacing={1} sx={{ justifyContent:'space-between',marginTop:'10%'}}>
                 <Stack direction="row" spacing={1}>
                     <Typography sx={{flexBasis:'50%'}}  variant="body2" color="text.secondary">Puskar Raj</Typography>
                     <Chip sx={{flexBasis:'50%',backgroundColor:'#faf087',color:"#815e17",fontWeight:'bold'}} label="PENDING"  />
                 </Stack>
                 </Stack>
         </CardContent>
     </CardActionArea>
 </Card>
</Grid>
        </Grid>
        </Box> 
        </Box> 
        </>
    )
}

export default PendingTask