import { Box, Button, FormLabel, styled, Typography } from "@mui/material";
import DrawerNav from "../DrawerNav";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const textAreaStyled=styled('TextareaAutosize','TextField')(()=>({
  width:'30%'
}))
function AddNewTask(){
    return(
      <>
            <Box display='flex' >
            <DrawerNav/> 
             <Box component='main' sx={{flexGrow:1,p:2,textAlign:'center'}}>
        <Typography variant='h3' sx={{
            textAlign:'center',
            fontWeight:'bold',
            margin:'2%',
            '@media(max-width:600px)':{
              fontSize:'27px'
            }
        }}> Add New Task</Typography>
            <FormLabel sx={{fontWeight:'bold'}}> TITLE</FormLabel><br/>
            <TextField
          id="filled-title-input"
          placeholder="Text Title"
          sx={{
            width:'100%'
          }}
          type="text"
          variant="filled"
        /><br/><br/><br/>
            <FormLabel sx={{fontWeight:'bold'}}> DESCRIPTION</FormLabel><br/>
         <TextareaAutosize
         aria-label="minimum height"
         minRows={3}
         placeholder="Description"
         variant="filled"
         sx={{
          width:'100%'
        }}
         /><br/><br/><br/>
            <FormLabel sx={{fontWeight:'bold'}}> START DATE</FormLabel><br/>
          <TextField 
          id="filled-StartDate-input"
          // label="date"
          type="date"
          sx={{
            width:'100%'
          }}
          variant="filled"
        /><br/><br/><br/>
            <FormLabel sx={{fontWeight:'bold'}}> END DATE</FormLabel><br/>
            <TextField
          id="filled-endDate-input"
          // label="date"
          type="date"
          sx={{
            width:'100%'
          }}
          variant="filled"
        /><br/><br/><br/>
            <FormLabel sx={{fontWeight:'bold'}}> STATUS</FormLabel><br/>
          <TextField
          id="filled-status-input"
          label="PENDING"
          type="text"
          sx={{
            width:'100%'
          }}
          variant="filled"
        />
        <Button sx={{width:'100%'}} variant="contained">Add</Button>
            </Box> 
            </Box>
            </>
    )
}
export default AddNewTask