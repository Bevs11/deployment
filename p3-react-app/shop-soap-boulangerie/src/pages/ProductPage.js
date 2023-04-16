import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";
import { popularProducts } from "../data";

/*Styling */
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
/*End of Styling */

const ProductPage = () => {
    let id = 1;
    
    const [itemNumber, setItemNumber] = useState(1);
    const itemAdd = (event) => {
        setItemNumber(itemNumber + 1);
    }
    const itemSubtract = (event) => {
        if(itemNumber > 0) {
            setItemNumber(itemNumber - 1);
        } 
    }

    const {addToCart} = useContext(ShopContext);
  
    return (
    <Container>
        <Wapper>
            <ImgContainer>
                <Image src={popularProducts[id].img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{popularProducts[id].name}</Title>
                <Desc>{popularProducts[id].description}</Desc>
                <Price>P {popularProducts[id].price}.00 / pc</Price>
                <AddContainer>
                    <AmountContainer>
                        <button onClick={itemSubtract}>
                            <RemoveIcon/>
                        </button>
                        <Amount>{itemNumber}</Amount>
                        <button onClick={itemAdd}>
                            <AddIcon />
                        </button>
                    </AmountContainer>
                    <Button onClick={() => addToCart(1)}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wapper>
    </Container>
  )
}

export default ProductPage