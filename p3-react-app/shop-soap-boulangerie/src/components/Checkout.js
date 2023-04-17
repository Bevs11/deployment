import { useReducer, useState, useEffect } from "react";
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
const ErrorMessage = styled.small`
margin-top: 20px;
font-weight: bold;
color: red;
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





const Checkout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const regexNumber = /\d/;
  const regexLetters = /[A-Za-z]/;
  const regexSpecialCharacter = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
  // console.log(state);
  // input validation

  const [errorMessage, setErrorMessage] = useState('Please fill out all fields')

  function isValid(userInput) {
    if(userInput.firstname !== '' && userInput.lastname !== '' && userInput.email !== '' && userInput.contact !== '' && userInput.address !== '') {
      if(!regexNumber.test(userInput.firstname) && !regexNumber.test(userInput.firstname) && userInput.firstname.length > 3 && userInput.lastname.length > 3 && !regexLetters.test(userInput.contact) && !regexSpecialCharacter.test(userInput.firstname) && !regexSpecialCharacter.test(userInput.lasttname)){
        setErrorMessage('');
        return true;
      } else {
        setErrorMessage('Please provide valid first name, last name and contact number. First name and Last name must not have any numbers or special characters. ');
        return false;
      }
    }else {
      setErrorMessage('Please fill out all fields');
      return false;
    }
  };

  useEffect(()=> {
    isValid(state);
  }, [state])

  function handleClick(e) {
    e.preventDefault();
    if (isValid(state)){
      alert(`Hey ${state.firstname.toUpperCase()} ${state.lastname.toUpperCase()}, your order has been send. Please check your email for your Confirmation Number. Thank you for shopping! `);
      userInfo = state;
      console.log(userInfo);
    }
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
            onChange={onChange}
            required/>
            <Label>Last Name:</Label>
            <Input 
            type='text'
            name='lastname'
            placeholder='last name'
            onChange={onChange}
            required/>
            <Label>Email:</Label>
            <Input 
            type='text'
            name='email'
            placeholder='email'
            onChange={onChange}
            required/>
            <Label>Contact Number:</Label>
            <Input 
            type='text'
            name='contact'
            placeholder='contact number'
            onChange={onChange}
            required/>
            <Label>Home Address:</Label>
            <Input 
            type='text'
            name='address'
            placeholder='address'
            onChange={onChange}
            required/>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <Button onClick={handleClick}>ORDER</Button>
            
        </Form>
    </Wrapper>

</Container>
  )
}

export default Checkout