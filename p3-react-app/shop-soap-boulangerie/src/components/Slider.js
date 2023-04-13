import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from "../data";

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: yellow;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props=> props.direction =='left' && '10px'};
right: ${props=> props.direction =='right' && '10px'};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(0vw);
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`;
const ImgContainer = styled.div`
height: 100%;
flex:1;
`;

const Image = styled.img`
height: 80%;
`;

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: bold;
letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
font-weight: bold;
background-color: pink;
cursor: pointer;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {};
  
    return (
    <Container>
        <Arrow direction='left' onClick={()=> handleClick('left')}>
            <ArrowLeftIcon />
        </Arrow>
        <Wrapper>
            <Slide num='1'>
                <ImgContainer>
                    <Image src='https://i.pinimg.com/736x/46/f0/b6/46f0b66a8574f60868d0388d271bab4a.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>GET 30% OFF FOR SUMMER SOAP COLLECTION</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide num='2'>
                <ImgContainer>
                    <Image src='https://i.pinimg.com/originals/91/12/b1/9112b17a158c02e58741400c2e924d81.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>RAINY SEASON</Title>
                    <Desc>GET 30% OFF FOR RAINY SEASON SOAP COLLECTION</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide num='3'>
                <ImgContainer>
                    <Image src='https://chulaleague.org/wp-content/uploads/gravity_forms/41-94b1452192a94a48e77fa96a6a8e8f81/2019/08/soaps.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>NEW CUSTOMER DISCOUNT</Title>
                    <Desc>GET 20% OFF FOR YOUR 1ST PURCHASE</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction='right' onClick={()=> handleClick('left')}>
            <ArrowRightIcon />
        </Arrow>
    </Container>
  )
}

export default Slider