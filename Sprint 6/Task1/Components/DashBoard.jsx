
import DrawerNav from '../DrawerNav'
import Typography from '@mui/material/Typography';
import { Grid3x3Rounded } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';





  
  
  function DashBoard(){
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
        }}>Task Board</Typography>
        <Grid container spacing={2} columns={{lg:3}} sx={{
            justifyContent:'center'
        }}>
            <Grid size={{lg:0.8}}>
 
                    <Card  >
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
                            <CardContent sx={{ height: '100%' ,alignItems:'center'}}>
                                <Chip sx={{height:'auto',
                                '& .MuiChip-label': {
                                    display: 'block',
                                    whiteSpace: 'normal',
                                }, padding:'50px',
                                backgroundColor:'#b9f5cd',
                                color:'#296d42',
                                fontSize:'17px',
                                fontWeight:'bold',
                                textAlign:'center'}} label="Implement User Authentication" />
                                <Typography sx={{padding:'20px',textAlign:'center', fontSize:'15px'}} variant="body2" color="text.secondary">
                                    Add user Authentication Functionality to the website 
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
                                        <Typography sx={{flexBasis:'50%'}} variant="body2" color="text.secondary">Puskar Raj</Typography>
                                        <Chip sx={{flexBasis:'50%',color:'#296d42', backgroundColor:'#b9f5cd',fontWeight:'bold'}} label="COMPLETED"  />
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
                            <CardContent sx={{ height: '100%' }}>
                                <Chip sx={{height:'auto',
                                '& .MuiChip-label': {
                                    display: 'block',
                                    whiteSpace: 'normal',
                                }, padding:'50px',
                                backgroundColor:'##e6d2fa',
                                color:'#5c2e89',
                                fontSize:'17px',
                                fontWeight:'bold',
                                textAlign:'center'}} label=" Deploy Marketing Compaign" />
                                <Typography sx={{padding:'20px',textAlign:'center', fontSize:'15px'}} variant="body2" color="text.secondary">
                                   Launch The New Marketing Compaign On Social Media.
                                </Typography>
                                <Stack direction="row" sx={{justifyContent:'space-between',padding:'15px'}}>
                                        <Box>
                                            <Typography  sx={{fontWeight:'bold',fontSize:'16px'}}>Start Date</Typography>
                                            <Typography  sx={{fontSize:'12px'}}>21/03/2024</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{fontWeight:'bold',fontSize:'16px'}}>End Date</Typography>
                                            <Typography  sx={{fontSize:'12px'}}>21/11/2024</Typography>
                                        </Box>
                                </Stack>
                                <Stack spacing={1} sx={{ justifyContent:'space-between',marginTop:'10%'}}>
                                    <Stack direction="row" spacing={1}>
                                        <Typography sx={{flexBasis:'50%'}} variant="body2" color="text.secondary">Puskar Raj</Typography>
                                        <Chip sx={{flexBasis:'50%',backgroundColor:'#e6d2fa',color:'#5c2e89',fontWeight:'bold'}} label="DEPLOYED TASK"  />
                                    </Stack>
                                    </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Grid>



            <Grid size={{lg:0.8}}>
 
                    <Card sx={{
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
                                        <Chip sx={{flexBasis:'50%',backgroundColor:'#bed7ff',color:'blue',fontWeight:'bold'}} label="IN PROGRESS TASK"  />
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

export default DashBoard
