import { styled } from '@mui/system';
import COLORS from '../../../themes/Colors';
import CloseIcon from '@mui/icons-material/Close';
import FONTS_FAMILY from '../../../themes/FontsFamily';

export const Container = styled('div')(props => ({
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: props.backgroundColor === 'black' ? COLORS.primary : 'white',
   // minHeight: '350px',
    '@media(min-width:320px)': {
        minWidth: '300px',
    },
    '@media(min-width:768px)': {
        minWidth: '700px',
    },
    '@media(min-width:1200px)': {
      minWidth: props.maxWidth === 'xl' ? '1000px' : '600px',
       minHeight: '90vh'
    },
}));

export const ContentContainer = styled('div')({

    alignSelf: 'center',
    margin: '10px',
    width: '80%',
    display: 'flex', alignItems: 'center',
    flexDirection: 'column',
});

export const StyledBackdrop = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(8px)'
});

export const StyledCloseIcon = styled(CloseIcon)({
    alignSelf: 'center',
    color: COLORS.gray,
    '@media (min-width:320px)': {
        fontSize: '18px',
    },
    '@media (min-width:768px)': {
        fontSize: '20px',
    },
    '@media (min-width:1200px)': {
        fontSize: '23px',
    }
});

export const Title = styled('h3')({
    fontSize: '2rem',
    color: COLORS.primary,
    fontFamily: FONTS_FAMILY.regular.title,
    fontWeight: 'bold',
    textAlign: 'left',
})

export const BodyText = styled('P')({

    color: COLORS.primary,
    fontFamily: FONTS_FAMILY.regular.body,
    fontSize: '17px', lineHeight: '30px'
})


export const Image = styled("img")({
    // marginRight: '3px',
    ':hover': {
        // cursor: 'pointer',
    },
    "@media (min-width:320px)": {
        // width: "50px",
        // marginBottom: '10px',
    },
    "@media (min-width:768px)": {
        width: "45px",
    },
    "@media (min-width:1200px)": {
        width: "75px",
        margin: 0
    },

    "@media (min-width:1800px)": {
        width: "85px",
    },
});


export const ButtonContainer = styled('div')(props => ({

    display: 'flex', alignSelf: 'center',

    '@media (min-width:768px)': {
        width: '150px',
        backgroundColor: 'yelow',
    },
    '@media (min-width:1200px)': {
        width: '270px'
    },

}))

