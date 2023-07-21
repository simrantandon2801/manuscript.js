import React, { useState, } from 'react';

import { Grid, Typography, TextField, Select, MenuItem,Button ,Box,Tooltip} from '@mui/material';
import { Image } from 'mui-image'
import CancelIcon from '@mui/icons-material/Cancel'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info'
import Chip from '@mui/material/Chip';
import Header from './Header';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Dialog,DialogTitle,DialogContent,} from '@mui/material'

  import { styled } from '@mui/system';

const Manuscripts = () => {
  const [Title, setTitle] = useState('')
  const [Synopsis, setSynopsis] = useState('');
  const [Category, setCategory] = useState('');
  const [target, setTarget] = useState('');
  const [language, setLanguage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);
 
  const [isToggled, setIsToggled] = useState(false);

  const [isInfoDialogOpen, setInfoDialogOpen] = useState(false);
  

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      addChip();
    }
  };

  const addChip = () => {
    if (inputValue.trim() !== '') {
      setChips((prevChips) => [...prevChips, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDeleteChip = (chipToDelete) => () => {
    setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
  };
  const handlePdf = (event) => {
		const imageFile = event.target.files[0];
		console.log(imageFile,'fliee')
	  };
    const handlePdf1 = (event) => {
      const imageFile = event.target.files[0];
      console.log(imageFile,'fliee')
      };
      const handlePdf2 = (event) => {
        const imageFile = event.target.files[0];
        console.log(imageFile,'fliee')
        };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    // Do something with the selected file, e.g., upload it to a server
    console.log('Selected File:', selectedFile);
  };
  const handleUploadButtonClick = () => {
    // Trigger the file input click programmatically when the button is clicked
    document.getElementById('file-input').click();
  };
 
  const handleSaveChanges = () => {
   
  };
  const handleInfoIconClick = () => {
    setInfoDialogOpen(true);
  };
  
  const handleInfoDialogClose = () => {
    setInfoDialogOpen(false);
  };
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
    '& .MuiTooltip-tooltip': {
      fontSize: '12px',
        backgroundColor: 'white',
        borderRadius: '7px',
      padding:'20px 20px 20px 20px',
      color: 'black',
    },
    }));
    const [passwordValidation, setPasswordValidation] = React.useState('');
    const handleHover = () => {
      setPasswordValidation('Must contain a number, special character, and both uppercase and lowercase letters. Must be at least 8 characters in length. Must not contain your name.');
      };
  return (
    <>
    <Header/>
     <Grid container lg={12} sx={{ justifyContent: 'center', alignItems: 'center',marginTop:'76px' }}>
  <Grid container lg={10}>
  <Grid container lg={4}>
      <Grid item lg={10}>
        <Box sx={{ backgroundColor: '#FAF7F7', borderRadius: '12px', marginTop: '147px', height: '300px' }}>
          {/* Hidden input file */}
          <input type="file" id="file-input" accept="image/*" onChange={handlePdf2} style={{ display: 'none' }} />

          {/* Upload button */}
          <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
            <Typography
              style={{
                background: '#F4F1F1',
                color: '#007F85',
                borderRadius: '8px',
                marginTop: '170px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
              onClick={handleUploadButtonClick}
            >
              Add a cover
            </Typography>
          </label>
        </Box>
      </Grid>
    </Grid>
    
    <Grid container lg={8} sx={{ backgroundColor: '#FAF7F7', }}>
      <Grid container lg={12} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Grid item lg={10} sx={{ marginTop: '32px' }}>
          <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600' }}>
            Tell Us About your Story
          </Typography>
          <hr style={{ margin: '16px 0', border: 'none', borderTop: '1px solid #007F85' }} />
        </Grid>
        <Grid item lg={10}>
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter', marginTop: '8px' }}>
            Title
          </Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Write your title"
            value={Title}
            size="small"
           
            onChange={(e) => setTitle(e.target.value)}
           
            sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1', marginTop:'8px', }}
            
          />
        </Grid>
      
        <Grid item lg={10}>
  <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter', marginTop: '8px' }}>
    Synopsis
  </Typography>
  <TextField
    required
    fullWidth
    variant="outlined"
    placeholder="Write your synopsis"
    value={Synopsis}
    size="large"
    multiline 
    rows={5}  
    onChange={(e) => setSynopsis(e.target.value)}
    sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1', marginTop:'8px', }}
  />
</Grid>



<Grid container spacing={0.5}  lg={10}>
<Grid item lg={6.5} >
  <Typography
    sx={{
      textAlign: 'left',
      fontSize: '16px',
      fontWeight: '700',
      fontFamily: 'Inter',
      marginTop: '8px',
    }}
  >
    Category
  </Typography>
  <Select
    required
    fullWidth
    variant="outlined"
    value={Category}
    size="small"
    onChange={(e) => setCategory(e.target.value)}
    displayEmpty
    IconComponent={KeyboardArrowDownIcon}
    sx={{
      mb: 2,
      borderRadius: '6px',
      backgroundColor: '#F4F1F1',
      marginTop:'8px',
      '& .MuiSelect-root': {
        pl: '10px',
      },
      // Adding styles for the icon here
      '& .MuiSelect-icon': {
        color: '#1e1e1e', 
      },
    }}
  >
    <MenuItem disabled value="">
  <Typography variant="body1" style={{ fontSize: '14px', fontFamily: 'Inter' }}>
  Select a category
  </Typography>
</MenuItem>
    <MenuItem value="category1">Adventure</MenuItem>
    <MenuItem value="Horror">Horror</MenuItem>
    <MenuItem value="Fantasy">Fantasy</MenuItem>
    <MenuItem value="Fanfiction">Fanfiction</MenuItem>
    <MenuItem value="Teen Fiction">Teen Fiction</MenuItem>
    <MenuItem value="Romance">Romance</MenuItem>
    <MenuItem value="Mystery">Mystery</MenuItem>
    <MenuItem value="Science Fiction">Science Fiction</MenuItem>
    <MenuItem value="Non Fiction">Non Fiction</MenuItem>
    <MenuItem value="Poetry">Poetry</MenuItem>
    <MenuItem value="Comedy">Comedy</MenuItem>
    <MenuItem value="Thriller">Thriller</MenuItem>
  </Select>

</Grid>
</Grid>
<Grid item lg={10}>
  <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600' }}>
    Tags
    
  </Typography>

  <TextField
    variant="standard"
    value={inputValue}
    onChange={handleInputChange}
    onKeyDown={handleInputKeyDown}
  />
<CustomTooltip title={
							  <Box sx={{background:'white'}}>
        <Typography variant="body2" sx={{background:'white',color:'black'}}>
          <strong>Help readers find your story</strong>
          <br />
          Adding tags can help increase 
          <br />discoverability.<br/>
          Tags should be a word or concept, <br/> reflective of your story’s themes and subgenres. You can use upto
5 tags.
          <br />

								  </Typography>
								  </Box>
      } arrow style={{fontSize:"12px",color:'black',background:'white'}}>
    <IconButton onMouseEnter={handleHover} onMouseLeave={() => setPasswordValidation('')}>
      <InfoIcon />
    </IconButton>
  </CustomTooltip>

</Grid>






 <Grid container spacing={0.5}  lg={10}>
<Grid item lg={6.5} sx={{marginTop:'15px'}}>
  <Typography
    sx={{
      textAlign: 'left',
      fontSize: '16px',
      fontWeight: '700',
      fontFamily: 'Inter',
      marginTop: '8px',
    }}
  >
  Target Audience
  </Typography>
  <Select
    required
    fullWidth
    variant="outlined"
    value={target}
    size="small"
    onChange={(e) => setTarget(e.target.value)}
    displayEmpty
    IconComponent={KeyboardArrowDownIcon}
    sx={{
      mb: 2,
      borderRadius: '6px',
      backgroundColor: '#F4F1F1',
      marginTop:'8px',
      '& .MuiSelect-root': {
        pl: '10px',
      },
      // Adding styles for the icon here
      '& .MuiSelect-icon': {
        color: '#1e1e1e', 
      },
    }}
  >
    <MenuItem disabled value="">
  <Typography variant="body1" style={{ fontSize: '14px', fontFamily: 'Inter' }}>
  Select your primary audience?
  </Typography>
</MenuItem>
    <MenuItem value="Young Adult (13-18 yaers of age)">Young Adult (13-18 years of age)</MenuItem>
    <MenuItem value="New Adult (18-25 years of age)">New Adult (18-25 years of age)</MenuItem>
    <MenuItem value="Adult ( 25+ years of age)">Adult ( 25+ years of age)</MenuItem>
   
  
  </Select>
</Grid>
</Grid>
<Grid container spacing={0.5}  lg={10}>
<Grid item lg={6.5} sx={{marginTop:'8px'}}>
  <Typography
    sx={{
      textAlign: 'left',
      fontSize: '16px',
      fontWeight: '700',
      fontFamily: 'Inter',
      marginTop: '8px',
    }}
  >
 Language
  </Typography>
  <Select
    required
    fullWidth
    variant="outlined"
    value={language}
    size="small"
    onChange={(e) => setLanguage(e.target.value)}
    displayEmpty
    IconComponent={KeyboardArrowDownIcon}
    sx={{
      mb: 2,
      borderRadius: '6px',
      backgroundColor: '#F4F1F1',
      marginTop:'8px',
      '& .MuiSelect-root': {
        pl: '10px',
      },
      // Adding styles for the icon here
      '& .MuiSelect-icon': {
        color: '#1e1e1e', 
      },
    }}
  >
    <MenuItem disabled value="">
  <Typography variant="body1" style={{ fontSize: '14px', fontFamily: 'Inter' }}>

  Select language

  </Typography>
</MenuItem>
<MenuItem value="English">English</MenuItem>
    <MenuItem value="Hindi">Hindi</MenuItem>
    <MenuItem value="French">French</MenuItem>
    <MenuItem value="Japanese">Japanese</MenuItem>
    <MenuItem value="Spanish">Spanish</MenuItem>
   
  
  </Select>
</Grid>

</Grid>
<Grid container lg={10}>
  <Grid item lg={2}>

  
      <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600' }}>
        Rating 
        <IconButton
          color="#1E1E1E"
          aria-label="info"
          style={{ marginLeft: '8px', padding: 0,color:'#1e1e1e' }}
        >
          <InfoIcon />
        </IconButton>
      </Typography>
      </Grid>
      <Grid item lg={10}>
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Mature"
        />
      </FormGroup>
    </Grid>

   
      <Typography sx={{fontWeight:'400',fontSize:'16px',fontFamily:'Inter',color:'#787373'}}>Your story contains graphic depictions of violence, sexuality, strong language, and/ or other mature themes. For more info, please read Slushie’s Content Guidelines:<span style={{ color: '#007F85' }}>https://www.slushie.com/guidelines</span> </Typography>

      <Grid item lg={6.5} sx={{ marginTop: '26px' }}>
  <input type="file" id="file-input" accept="image/*" onChange={handlePdf} style={{ display: 'none' }} />
  <label id="file-input">
    <Button
      variant="contained"
      color="primary"
      style={{
        background: '#F4F1F1',
        border: '1px solid #007F85',
        color: '#007F85',
        borderRadius: '8px',
        textTransform: 'none', 
      }}
      onClick={handleUploadButtonClick}
    >
      Upload Full Manuscript
    </Button>
    <IconButton
      color="#1E1E1E"
      aria-label="info"
      style={{ marginLeft: '8px', padding: 0, color: '#1e1e1e' }}
    >
      <InfoIcon />
    </IconButton>
  </label>
</Grid>

      <Grid item lg={7.5} sx={{marginTop:'20px',marginBottom:'29px'}}>
   
   <input type="file" id="file-input" accept="image/*" onChange={handlePdf1} style={{ display: 'none' }} />
   {/* <Button variant="contained" color="primary" onClick={handleUploadButtonClick}>
     Upload
   </Button> */}
   <label id="file-input">
   <Button variant="contained" color="primary" style={{ background: '#F4F1F1', border: '1px solid #007F85', color: '#007F85', borderRadius: '8px',textTransform:'none'}} onClick={handleUploadButtonClick}>
   Upload Sample Chapters
    
   </Button>
   </label>
  

   
   </Grid>
   <Grid item lg={3} sx={{margin:'auto',marginTop:'58px',marginBottom:'40px',}}>
   <Button
  variant="contained"
  color="primary"
  onClick={handleSaveChanges}
  sx={{
    borderRadius: '8px',
    backgroundColor: '#007F85',
    fontSize:'16px',fontWeight:'500',fontFamily:'Inter' ,textTransform:'none'
  }}
>
  Save Changes
</Button>

</Grid>
   
    </Grid>



      </Grid>
    </Grid>
  </Grid>
</Grid>

    </>
  )
}

export default Manuscripts
