import { useReducer } from "react";
import styled from "styled-components"

/* Styling*/
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
flex-direction: column;
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
font-family: helvetica;
font-weight: 200;
`;
const Button = styled.button`
width: 100%;
background-color: rgb(230, 230, 230);
padding: 5px;
cursor: pointer;
font-size: 30px;
font-weight: bold;
border-radius: 5px;
margin-top: 20px;


&:hover{
    background-color: pink;
}
`;
/*Styling End*/

let userInfo = {};
const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  contact: '',
  address: ''
};

function reducer(state, action) {
  console.log(action);
  return {...state, [action.input] : action.value};
}

function isValid(state) {
if(state.name) return true;
}


const Checkout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state);

  function handleClick(e) {
    e.preventDefault();
    alert(`Hey ${state.firstname.toUpperCase()} ${state.lastname.toUpperCase()}, your order has been send. Please check your email for your Confirmation Number. Thank you for shopping! `);
    userInfo = state;
    console.log(userInfo);
  }

  function onChange(e) {
    const action = {
      input: e.target.name,
      value: e.target.value
    }
    dispatch(action);
  }

  return (
    <Container>
    <Wrapper>
        <Title>ORDER FORM</Title>
        <Form>
            <Label>First Name:</Label>
            <Input 
            type='text'
            name='firstname'
            placeholder='first name'
            onChange={onChange}/>
            <Label>Last Name:</Label>
            <Input 
            type='text'
            name='lastname'
            placeholder='last name'
            onChange={onChange}/>
            <Label>Email:</Label>
            <Input 
            type='text'
            name='email'
            placeholder='email'
            onChange={onChange}/>
            <Label>Contact Number:</Label>
            <Input 
            type='text'
            name='contact'
            placeholder='contact number'
            onChange={onChange}/>
            <Label>Home Address:</Label>
            <Input 
            type='text'
            name='address'
            placeholder='address'
            onChange={onChange}/>
            <Button onClick={handleClick}>ORDER</Button>
            
        </Form>
    </Wrapper>

</Container>
  )
}

export default Checkout