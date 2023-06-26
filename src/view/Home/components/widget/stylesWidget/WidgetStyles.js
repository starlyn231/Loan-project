import { styled } from '@mui/system';



export const ContainerWidget = styled("div")((props) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    padding: '10px',
    WebkitBoxShadow: '2px 4px 10px 1px rgba(0, 0, 0, 0.47)',
    boxShadow: ' 2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
    borderRadius: '10px',
    height: '100px'

}));

export const RowLeft = styled("div")((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

export const RowRight = styled("div")((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

export const Title = styled("span")((props) => ({
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'rgb(160, 160, 160)'
}));


export const ContentPercentage = styled("div")((props) => ({

    color: props.color === 'positive' ? 'green' : 'red',
}));

