import { styled } from '@mui/system';
import FONTS_FAMILY from '../../../../../themes/FontsFamily';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import COLORS from '../../../../../themes/Colors';
export const Container = styled('div')({

  display: "flex",

  flexDirection: "column",

  '@media (min-width:320px)': {
    //height: '240px',
  },
  '@media (min-width:768px)': {
    // height: '320px',
  },
  '@media (min-width:1200px)': {
    // height: '320x',
  },
  //fontFamily: FONTS_FAMILY.regular.body,
  '&:hover,&:focus,&:active': {

  }
})


export const SubHeaderIcon = styled("img")({
  ':hover': {
    cursor: 'pointer',
  },
  "@media (min-width:320px)": {
    width: "22px",

  },
  "@media (min-width:768px)": {
    width: "25px",
  },
  "@media (min-width:1200px)": {
    width: "30px",
  },
});

export const TextDate = styled("p")({
  margin: 0,
  fontWeight: 400,

  fontFamily: FONTS_FAMILY.bold.body,
  opacity: 0.6,
  "@media (min-width:768px)": {
    fontSize: "15px",
  },
  "@media (min-width:1200px)": {
    fontSize: "16px",
  },

});
export const TextDayNumber = styled("p")({

  margin: 0,
  fontWeight: 700,

  "@media (min-width:320px)": {
    width: "16px",

  },
  "@media (min-width:768px)": {
    width: "38px",
  },
  "@media (min-width:1200px)": {
    fontSize: "48px",
    lineHeight: "58px",
  },
});


export const BodyText = styled("span")({
  lineHeight: "24px",
  fontWeight: 400,
  letterSpacing: '0.1em',

  "@media (min-width:768px)": {
    fontSize: "15x",
  },
  "@media (min-width:1200px)": {
    fontSize: "20px",
  },

});

export const BodySpanText = styled("span")({

  fontWeight: 900,

  margin: '2px',

  "@media (min-width:320px)": {
    fontSize: "14px",

  },
  "@media (min-width:768px)": {
    fontSize: "19x",
  },
  "@media (min-width:1200px)": {
    fontSize: "28px",
  },

});

export const TextShare = styled('p')({
  lineHeight: "31px",
  fontWeight: 400,
  letterSpacing: '0.1em',

  margin: '0 3px 0 3px',

  "@media (min-width:768px)": {
    fontSize: "14x",
  },
  "@media (min-width:1200px)": {
    fontSize: "20px",
  },
})

export const IconTicketImg = styled("img")({
  marginRight: '10px',
  "@media (min-width:320px)": {
    width: "60px",

  },
  "@media (min-width:768px)": {
    width: "80px",
  },
  "@media (min-width:1200px)": {
    width: "80px",
  },
});

export const Title = styled('h3')({
  lineHeight: "21px",
  fontWeight: 400,
  letterSpacing: '0.1em',
  margin: 0,

  "@media (min-width:320px)": {

    fontSize: "32x",
  },
  "@media (min-width:768px)": {
    fontSize: "32x",
  },
  "@media (min-width:1200px)": {
    fontSize: "38px",
  },
})

export const SocialLink = styled('a')({
  lineHeight: "21px",
  fontWeight: 400,
  letterSpacing: '0.1em',
  margin: 0,

  "@media (min-width:320px)": {


  },
  "@media (min-width:768px)": {
    fontSize: "30x",
  },
  "@media (min-width:1200px)": {
    fontSize: "38px",
  },
})



export const StyledFacebookIcon = styled(FacebookIcon)({
  color: COLORS.blueDark,
  '@media (min-width:320px)': {
    fontSize: '22px',
  },
  '@media (min-width:768px)': {
    fontSize: '25px',
  },
  '@media (min-width:1200px)': {
    fontSize: '30px',
  }
});

export const StyledTwitterIcon = styled(TwitterIcon)({
  color: 'rgb(29, 155, 240)',
  '@media (min-width:320px)': {
    fontSize: '22px',
  },
  '@media (min-width:768px)': {
    fontSize: '25px',
  },
  '@media (min-width:1200px)': {
    fontSize: '30px',
  }
});

export const StyledEmailIcon = styled(EmailIcon)({
  color: COLORS.yellow,
  '@media (min-width:320px)': {
    fontSize: '22px',
  },
  '@media (min-width:768px)': {
    fontSize: '25px',
  },
  '@media (min-width:1200px)': {
    fontSize: '30px',
  }
});