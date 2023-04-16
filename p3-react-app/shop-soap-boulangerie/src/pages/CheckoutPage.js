import styled from "styled-components"
import Checkout from "../components/Checkout";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.div`
font-size: 40px;
font-weight: bold;
margin-left: 30px;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const TopButton = styled.button`
padding: 10px;
font-weight: bold;
cursor: pointer;
margin-left: 30px;
margin: 20px 0;
`;
const TopText = styled.div``;
const Bottom = styled.div``;
const Info = styled.div``;
const Product = styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
flex-direction: column;
`;
const Image = styled.img`
width: 200px;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.div``;
const ProductId = styled.div``;

const ProductAmountContainer = styled.div`
display: flex;
align-items:center;
margin-bottom: 20px;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;
const ProductPrice = styled.div`
font-size: 30px;

`;
const Hr = styled.hr`
margin: 20px 0;
`;
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgrey;
border-radius: 10px;
padding: 10px;
margin-top: 20px;
`;
const SummaryTitle = styled.h1``;
const SummaryItem = styled.div`
margin: 20px 0;
font-weight: ${props => props.type === 'total' && 'bold'}; 
font-size: ${props => props.type === 'total' && '24px'};
`;
const SummaryItemText = styled.span`
margin-right: 10px;
`;
const SummaryItemPrice = styled.span``;



const CheckoutPage = () => {
  return (
    
    <Container>
        <Wrapper>

            <Title>CART</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopText>Shopping Bag</TopText>

            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='https://img.xcitefun.net/users/2009/12/134987,xcitefun-3.jpg' />
                            <Details>
                                <ProductName><b>Product:</b>Rainbow Heart Soap</ProductName>
                                <ProductId><b>ID:</b>0023</ProductId>

                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <RemoveIcon/>
                                <ProductAmount>2</ProductAmount>
                                <AddIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>P 45.00</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src='https://img.xcitefun.net/users/2009/12/134987,xcitefun-3.jpg' />
                            <Details>
                                <ProductName><b>Product:</b>Rainbow Heart Soap</ProductName>
                                <ProductId><b>ID:</b>0023</ProductId>

                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <RemoveIcon/>
                                <ProductAmount>2</ProductAmount>
                                <AddIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>P 45.00</ProductPrice>
                        </PriceDetail>
                    </Product>

                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Sub Total</SummaryItemText>
                        <SummaryItemPrice>P 90.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>P 60.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>P 30.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>P 120.00</SummaryItemPrice>
                    </SummaryItem>
                  


                </Summary>

            </Bottom>
        </Wrapper>
        
        <Checkout/>

    </Container>
  )
}

export default CheckoutPage