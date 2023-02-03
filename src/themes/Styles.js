import { styled } from '@mui/system';
import { Box, Button, TextField } from '@mui/material';
import COLORS from './Colors';
import FONTS_FAMILY from './FontsFamily';
import Pagination from '@mui/material/Pagination';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export const boxShadowConfig = "0 4px 8px 0 rgba(0,0,0,0.2)"

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

export const Row = styled('div')(props => ({
    display: 'flex',
    flexDirection: 'row',


}));

export const StyledButton = styled(Button)({
    minHeight: '38px',
    width: '100%',
    borderRadius: '12px',
    color: COLORS.white,
    backgroundColor: COLORS.secondary,
    '@media (min-width:320px)': {
        fontSize: '12px',
    },
    '@media (min-width:768px)': {
        fontSize: '13.5px',
    },
    '@media (min-width:1200px)': {
        fontSize: '15px',
    },
    fontFamily: FONTS_FAMILY.regular.body,
    '&:hover,&:focus,&:active': {
        color: COLORS.white,
        backgroundColor: COLORS.primary,
    }
});


export const StyledUpload = styled(Button)({
    minHeight: '48px',
    width: '100%',
    borderRadius: '12px',
    color: COLORS.secondary,
    backgroundColor: COLORS.lightGray,
    fontWeight: '800',

    '@media (min-width:320px)': {
        fontSize: '12px',
    },
    '@media (min-width:768px)': {
        fontSize: '13.5px',
    },
    '@media (min-width:1200px)': {
        fontSize: '18px',
        padding: '10px',
    },
    fontFamily: FONTS_FAMILY.regular.body,
    '&:hover,&:focus,&:active': {
        color: COLORS.white,
        backgroundColor: COLORS.primary,
    }
});

export const StyledButtonOutlined = styled(Button)(props => ({
    minHeight: '38px',
    width: '100%',
    // borderColor: COLORS.primary,
    borderRadius: '50px',
    border: 'none',
    color: props.active ? COLORS.white : COLORS.secondary,
    backgroundColor: props.active ? COLORS.primary : 'transparent',
    ////
    margin: '3px',
    '@media (min-width:320px)': {
        fontSize: '12px',
    },
    '@media (min-width:768px)': {
        fontSize: '13.5px',
    },
    '@media (min-width:1200px)': {
        fontSize: '15px',
    },
    fontFamily: FONTS_FAMILY.regular.body,
    '&:hover,&:focus,&:active': {
        color: COLORS.white,
        // borderRadius: '11px',
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
        border: ' 1px solid #1D1D1D',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: '50px',
    }
}));

export const StyledStartButton = styled(Button)({
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inter',
    marginBottom: '10px',
    minHeight: '68px',
    width: '80%',
    borderRadius: '10px',
    color: COLORS.primary,
    lineHeight: '24px',
    letterSpacing: '0.1em',
    // backgroundColor: COLORS.lightGray,
    fontWeight: '400',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',

    '@media (min-width:320px)': {
        fontSize: '17.5px',
    },
    '@media (min-width:768px)': {
        fontSize: '17.5px',
    },
    '@media (min-width:1200px)': {
        fontSize: '22px',
        padding: '10px',
    },
    fontFamily: FONTS_FAMILY.regular.body,
    '&:hover,&:focus,&:active': {
        //  color: COLORS.white,
        //  backgroundColor: COLORS.tertiary,
    }
});

export const StyledTextInput = styled(TextField)(props => ({
    width: '100%',
    alignSelf: 'center',
    flexGrow: 0,

    '& .MuiInputBase-input ': {
        width: '100%',
        fontSize: '17px',
        backgroundColor: 'transparent',
        padding: 7,


    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: COLORS.lightGray,
            borderRadius: '8px',
            minHeight: '44px',
            borderWidth: props.hiddenBorder ? 0 : '1px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

        },

        '&:hover fieldset': {
            //    borderColor: COLORS.secondary,
        },
        '&.Mui-focused fieldset': {

            //  borderWidth: props.hiddenBorder ? 0 : '1px',
        },
    },
}));

export const BodyText = styled('p')({
    margin: 0,
    textAlign: 'left',
    fontSize: '15px',
    color: COLORS.black,
    fontFamily: FONTS_FAMILY.regular.body
});


export const FairBodyText = styled('pre')(props => ({
    margin: 0,
    textAlign: 'left',
    fontSize: '15px',
    color: COLORS.black,
    fontFamily: FONTS_FAMILY.regular.body,
    wordBreak: 'break-all',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    cursor: props?.isUrl ? "pointer" : 'auto',
    textDecoration: props?.isUrl ? 'underline' : 'none'
}));
export const BodyTextBold = styled('p')({
    margin: 0,
    textAlign: 'left',
    fontSize: '15px',
    color: COLORS.black,
    fontFamily: FONTS_FAMILY.regular.body,
    fontWeight: 'bold',
});

export const Title = styled('h1')({
    margin: 0,
    fontFamily: FONTS_FAMILY.medium.title,
    fontSize: '40px',
    '@media(max-width:768px)': {
        fontSize: '30px',
    },
    color: COLORS.secondary,
});

export const SubTitle = styled('h4')({
    margin: 0,
    fontFamily: FONTS_FAMILY.medium.title,
    fontSize: '30px',
    '@media(max-width:768px)': {
        fontSize: '20px',
    },
    color: COLORS.secondary,
});

export const RowBodyDivider = styled('div')({
    width: '7%'
});
export const SmallHeightDivider = styled('div')({
    height: '15px'
});

export const MediumHeightDivider = styled('div')({
    height: '60px'
});

export const WpRichTextContainer = styled('div')({
    fontFamily: FONTS_FAMILY.regular.title
});

export const ButtonsMenuContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    border: ' 1px solid #1D1D1D',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '50px',

    '@media (min-width:320px)': {
        width: '100%',
    },
    '@media (min-width:768px)': {
        width: '80%',
    },
    '@media (min-width:1200px)': {
        width: '95%',

    },
});

export const CardContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    boxShadow: boxShadowConfig,
    '@media (min-width:320px)': {
        minHeight: '100px',
    },
    '@media (min-width:768px)': {
        minHeight: '130px',
    },
    '@media (min-width:1200px)': {
        minHeight: '200px',
    },
});

export const CardBodyTitle = styled('p')({
    margin: 0,
    fontFamily: FONTS_FAMILY.bold.body,
    color: COLORS.black,
    '@media(min-width:320px)': {
        fontSize: '12px',
    },
    '@media(min-width:768px)': {
        fontSize: '12px',
    },
    '@media(min-width:1200px)': {
        fontSize: '15px',
    },
});

export const CardBodyText = styled('p')({
    width: '100%',
    margin: 0,
    fontFamily: FONTS_FAMILY.regular.body,
    color: COLORS.secondary,
    '@media(min-width:320px)': {
        fontSize: '13px',
    },
    '@media(min-width:768px)': {
        fontSize: '13px',
    },
    '@media(min-width:1200px)': {
        fontSize: '17px',
    },
});

export const CardTextContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    padding: '2%'
});

export const FieldTitle = styled('p')({
    marginTop: '2px',
    color: COLORS.black,
    fontFamily: FONTS_FAMILY.regular.title,
    '@media (min-width:320px)': {
        fontSize: '11px',
    },
    '@media (min-width:768px)': {
        fontSize: '15px',
    },
    '@media (min-width:1200px)': {
        fontSize: '22px',
    }
});

export const StyledPagination = styled(Pagination)({
    '& .MuiPaginationItem-rounded': {
        '&:hover,&:focus': {
            backgroundColor: COLORS.primary,
            color: COLORS.white
        }
    },
    '& .Mui-selected': {
        backgroundColor: `${COLORS.primary} !important`,
        color: COLORS.white
    },
    '& .MuiPaginationItem-root': {
        '&:hover,&:focus': {
            backgroundColor: COLORS.primary,
            color: COLORS.white
        },
    }

});

export const StyledCheckCircleIcon = styled(CheckCircleIcon)({
    color: COLORS.success,
    '@media (min-width:320px)': {
        fontSize: '150px',
    },
    '@media (min-width:768px)': {
        fontSize: '200px',
    },
    '@media (min-width:1200px)': {
        fontSize: '250px',
    }
});

export const StyledCancelIcon = styled(CancelIcon)({
    color: COLORS.error,
    '@media (min-width:320px)': {
        fontSize: '150px',
    },
    '@media (min-width:768px)': {
        fontSize: '200px',
    },
    '@media (min-width:1200px)': {
        fontSize: '250px',
    }
});

export const ButtonGeneral = styled('button')(props => ({
    border: '1.5px solid #1D1D1D',
    borderRadius: ' 50px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    width: '100%',

    padding: '10px',
    fontSize: '16px',
    lineHeight: '24px',
    color: props.color === 'white' ? COLORS.white : 'black',
    backgroundColor: props.backgroundColor === 'black' ? COLORS.primary : 'transparent',
    cursor: ' pointer',
    //margin: '2px'

}))


export const BoxContainer = styled(Box)(props => ({
    color: 'white',
    alignSelf: 'center',
    display: 'flex',
    //alignItems: 'center',
    alignItems: props.alignItems === 'center' ? 'center' : 'flex-end',
    justifyContent: props.justifyContent === 'center' ? 'center' : 'flex-end',
    // justifyContent: 'center',
    padding: props.padding === '20px' ? '20px' : '',
    width: ' 70%',
    minHeight: '120px',
    marginTop: '-50px',

    //   left: '177px',
    zIndex: 1000,
    background: '#1D1D1D',

    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: ' 20px'


}))