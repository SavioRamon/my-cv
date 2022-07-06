import styled from "styled-components";

const Container = styled.div`
    font-size: ${({theme})=>theme.fonts.normalFont};
`

export const Home = () => {
    return (
        <Container>
            Home
        </Container>
    );
}
