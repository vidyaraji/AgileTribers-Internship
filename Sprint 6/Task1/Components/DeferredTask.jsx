import { Box} from "@mui/material"
import DrawerNav from "../DrawerNav"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function DeferredTask(){
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
        }}>Defered Task</Typography>
        <Grid container spacing={2} columns={{lg:3}} sx={{
            justifyContent:'center'
        }}>
            <Grid size={{lg:0.8}}>
 
 <Card sx={{
     // textAlign:'center'
 }}>
     <CardActionArea
     sx={{
         height: '100%',
         
         textAlign:'center',
         '&[data-active]': {
             backgroundColor: 'action.selected',
             '&:hover': {
                 backgroundColor: 'action.selectedHover',
             },
         },
     }}>
         <CardContent sx={{ height: '100%',textAlign:'center' }}>
             <Chip sx={{height:'auto',
             '& .MuiChip-label': {
                 display: 'block',
                 whiteSpace: 'normal',
             }, padding:'50px',
             backgroundColor:'#b9f5cd',
             color:'success',
             fontSize:'17px',
             fontWeight:'bold',
             textAlign:'center'}} label="Review Project TimeLines" />
             <Box  sx={{padding:'20px',textAlign:'center', fontSize:'15px'}} variant="body2" color="text.secondary">
                 Review and Adjust Project Timelines based on New Requirements
             </Box>
             <Stack direction="row" sx={{justifyContent:'space-between',padding:'15px'}}>
                     <Box>
                         <Typography  sx={{fontWeight:'bold',fontSize:'16px'}}>Start Date</Typography>
                         <Typography sx={{fontSize:'12px'}} >21/03/2024</Typography>
                     </Box>
                     <Box>
                         <Typography sx={{fontWeight:'bold',fontSize:'16px'}}>End Date</Typography>
                         <Typography sx={{fontSize:'12px'}}>21/11/2024</Typography>
                     </Box>
             </Stack>
             <Stack spacing={1} sx={{ justifyContent:'space-between', marginTop:'10%'}}>
                 <Stack direction="row" spacing={6}>
                     <Typography sx={{flexBasis:'50%'}} variant="body2" color="text.secondary">Puskar Raj</Typography>
                     <Chip sx={{flexBasis:'50%',color:'black',backgroundColor:'#e6e6eb',fontWeight:'bold'}} label="DEFERRED TASK" />
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
export default DeferredTask