import { styled } from '@mui/system';


export const LayoutAuthContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
})

export const RightPanelContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',

    minHeight: '90vh',

    '@media (min-width:320px)': {
        width: '100%',
    },
    '@media (min-width:768px)': {
        width: '100%',
    },
    '@media (min-width:1200px)': {
        width: '100%',
    },
});



export const LayoutBodyContainer = styled('div')({
    display: 'flex',
    width: '85%',
    maxWidth: '1920px',
    alignSelf: 'center',
    justifyContent: 'center'
})

export const LayoutDivider = styled('div')({
    height: '35px',
    '@media(max-width:768px)': {
        height: '50px',
    }
})

export const LayoutBodyDivider = styled('div')({
    height: '70px',
    '@media(max-width:768px)': {
        height: '50px',
    }
})

export const LayoutFooterDivider = styled('div')({
    height: '20px',
})