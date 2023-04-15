import styled from "styled-components"


const Container = styled.div`
width: 100vw;
height:  80vh;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
width: 40%;
padding: 20px;


`;
const Title = styled.h1`
font-size: 30px;
margin-bottom: 20px; 

`;
const Form = styled.div`
display: flex;
flex-wrap: wrap;
`;
const Input = styled.input`
flex: 1;
min-width: 50%;
height: 20px;
margin: 10px 10px 0 0;
`;
const Label = styled.label`
height: 20px;
margin: 10px 10px 0 0;
text-align: end;
`;
const Button = styled.button`
width: 40%;
background-color: rgb(230, 230, 230);
cursor: pointer;
font-size: 20px;
border-radius: 5px;
margin-top: 20px;


&:hover{
    background-color: pink;
}
`;


const Checkout = () => {
  return (
    <Container>
    <Wrapper>
        <Title>ORDER FORM</Title>
        <Form>
            <Label>First Name:</Label>
            <Input placeholder='first name'/>
            <Label>Last Name:</Label>
            <Input placeholder='last name'/>
            <Label>Email:</Label>
            <Input placeholder='email'/>
            <Label>Contact Number:</Label>
            <Input placeholder='contact number'/>
            <Label>Home Address:</Label>
            <Input placeholder='address'/>
            <Button>ORDER</Button>
            
        </Form>
    </Wrapper>

</Container>
  )
}

export default Checkout