import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


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

const AddContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 50%;
margin: 20px 0;
`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: bold;
`;
const Amount = styled.span`
width:30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
`;
const Button = styled.button`
padding: 15px;
border-radius: 10px;
font-weight: bold;
cursor: pointer;

&:hover{
    background-color: pink;
}
`;


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
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon/>
                        <Amount>1</Amount>
                        <AddIcon />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wapper>
    </Container>
  )
}

export default ProductPage