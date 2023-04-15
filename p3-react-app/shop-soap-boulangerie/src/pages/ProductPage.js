import styled from "styled-components";


const Container = styled.div``;
const Wapper = styled.div`
padding: 50px;
display: flex;
`;
const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width:100%;
height: 90vh;
object-fit: cover;
`;
const InfoContainer = styled.div`
flex: 1;
padding: 0 50px;
`;
const Title = styled.h1`

`;
const Desc = styled.p`
margin: 20px 0;
`;
const Price = styled.span`
font-size: 40px;
`;
const FilterContainer = styled.div``;


const ProductPage = () => {
  return (
    <Container>
        <Wapper>
            <ImgContainer>
                <Image src='https://i1.wp.com/4.bp.blogspot.com/-rddGM2f90BU/Tt5OCvKBpZI/AAAAAAAAIY4/fzQPcX3sznk/s1600/IMG_5483.JPG'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Candy Cane Soap</Title>
                <Desc>This candy cane soap smells as nice as it looks! Layers of pink and white glycerin soap come together with crushed candy canes for a cute and easy gift idea this holiday season.</Desc>
                <Price>P 45.00 / pc</Price>
                <FilterContainer>

                </FilterContainer>
            </InfoContainer>
        </Wapper>
    </Container>
  )
}

export default ProductPage