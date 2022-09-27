
import { styled } from '@mui/system';


export const Container = styled('div')({
  /*display: 'flex',
  height: '60vh',
  minWidth: ' 280px',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fcf5f5',
  alignItems: 'center',
  flexDirection: 'column',*/
  //display: 'flex',
  '@media only screen and  (max-width:680px)': {

  },
});


export const Title = styled('h1')({
  marginLeft: '10px'
})

export const FilterContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',

});


export const Filter = styled('div')({
  margin: ' 20px',
  '@media only screen and  (max-width:380px)': {
    width: "0px 20px", display: "flex", flexDirection: "column"
  },
});

export const FilterText = styled('span')({
  fontSize: '20px',
  fontWeight: ' 600',
  marginRight: '20px',
  '@media only screen and  (max-width:380px)': {
    margin: 0
  },
})

export const Select = styled('select')({
  marginRight: '20px',
  padding: '10px',
  '@media only screen and  (max-width:380px)': {
    margin: "10px 0px"
  }
})
export const Option = styled('option')({

});