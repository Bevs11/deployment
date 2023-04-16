import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
margin-left: 10px;
`;
const Summary = styled.div`
flex: 1;
border: 1px solid lightgrey;
border-radius: 10px;
padding: 20px;
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

const OrderSummary = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default OrderSummary