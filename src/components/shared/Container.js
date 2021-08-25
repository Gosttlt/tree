import styled from 'styled-components'

const Container = (props) => {
    return <StyledContainer {...props} />
}

const StyledContainer = styled.div`
max-width: 500px;
margin: 0 auto;
background: #f8f8f8;
padding: 5px;
`


export default Container