import { Box} from "@mui/material"
import DrawerNav from "../DrawerNav"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function InProgressTask(){
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
        }}>In Progress Task</Typography>
        <Grid container spacing={2} columns={{lg:3}} sx={{
            justifyContent:'center'
        }}>
            <Grid size={{lg:0.8}}>
 
 <Card  width='auto'>
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
         <CardContent sx={{ height: '100%'}}>
             <Chip sx={{height:'auto',
             '& .MuiChip-label': {
                 display: 'block',
                 whiteSpace: 'normal',
             }, padding:'50px',
             backgroundColor:'#bed7ff',
             color:'blue',
             fontSize:'17px',
             fontWeight:'bold',
             textAlign:'center'}} label=" Design New Logo" />
             <Typography sx={{padding:'20px',textAlign:'center', fontSize:'15px'}} variant="body2" color="text.secondary">
                Create New Logo For Company ReBranding
             </Typography>
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
             <Stack spacing={1} sx={{ justifyContent:'space-between',marginTop:'10%'}}>
                 <Stack direction="row" spacing={1}>
                     <Typography sx={{flexBasis:'50%'}} variant="body2" color="text.secondary">Puskar Raj</Typography>
                     <Chip sx={{flexBasis:'50%',color:'blue',fontWeight:'bold',backgroundColor:'#bed7ff'}} label="INPROGRESS"  />
                 </Stack>
                 </Stack>
         </CardContent>
     </CardActionArea>
 </Card>
</Grid>
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
                            <CardContent sx={{ height: '100%'}}>
                                <Chip sx={{height:'auto',
                                '& .MuiChip-label': {
                                    display: 'block',
                                    whiteSpace: 'normal',
                                }, padding:'50px',
                                backgroundColor:'#bed7ff',
                                color:'blue',
                                fontSize:'17px',
                                fontWeight:'bold',
                                textAlign:'center'}} label="Drop DataBase" />
                                <Typography sx={{padding:'20px',textAlign:'center', fontSize:'15px'}} variant="body2" color="text.secondary">
                                    Drop Mongo Db Database
                                </Typography>
                                <Stack direction="row" sx={{justifyContent:'space-between',padding:'15px'}}>
                                        <Typography>
                                            <Typography  sx={{fontWeight:'bold',fontSize:'16px'}}>Start Date</Typography>
                                            <Typography sx={{fontSize:'12px'}} >21/03/2024</Typography>
                                        </Typography>
                                        <Typography>
                                            <Typography sx={{fontWeight:'bold',fontSize:'16px'}}>End Date</Typography>
                                            <Typography sx={{fontSize:'12px'}}>21/11/2024</Typography>
                                        </Typography>
                                </Stack>
                                <Stack spacing={1} sx={{ justifyContent:'space-between',marginTop:'10%'}}>
                                    <Stack direction="row" spacing={1}>
                                        <Typography sx={{flexBasis:'50%'}} variant="body2" color="text.secondary">Puskar Raj</Typography>
                                        <Chip sx={{flexBasis:'50%',backgroundColor:'#bed7ff',color:'blue',fontWeight:'bold'}} label="IN PROGRESS TASK"  />
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                {/* </Box> */}
            </Grid>
        </Grid>
        </Box> 
        </Box>
        </>
    )
}

export default InProgressTask