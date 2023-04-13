import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
flex: 1;
`
const Center = styled.div`
font-weight: bold;
font-size: 30px;
flex: 1;
text-align: center;
`
const Right = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 25px; 
flex: 1;
`

const NavigationItem = styled.div`
cursor: pointer;
font-size: 14px;
margin-left: 25px
`

const NavBar = () => {
  return (
    <Container>NavBar
        <Wrapper>
            <Left>Logo</Left>
            <Center>SOAP BOULANGERIE</Center>
            <Right>
                <NavigationItem>Home</NavigationItem>
                <NavigationItem>Products</NavigationItem>
                <NavigationItem>Cart/Checkout</NavigationItem>
            </Right>
        </Wrapper>

    </Container>
  )
}

export default NavBar