import React from "react";
import styled from "styled-components";
import paulina1 from '../assets/images/paulina3.jpg';
import paulina2 from '../assets/images/paulina5.jpg';



const StyledInsideWrapper = styled.article`
display: flex;
width: 45%;
padding: 1em;
flex-wrap: wrap;

img{
height: 500px;
width: 100%;
object-fit: cover;
margin: 2em 0;
}

line-height: 2em;

@media screen and (max-width: 800px){
width: 95%;
}
`;

const StyledInsideWrapperRight = styled(StyledInsideWrapper)`


@media screen and (max-width: 800px){
flex-direction: column-reverse;
padding: 2%;
}

`;




const Wrapper = styled.div`
max-width: 1000px;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 800px){
flex-direction: column;
}
`;

const AboutPage = () => (

    <Wrapper>
        <StyledInsideWrapper>
        <p>
            <strong>Cześć</strong>
< br />< br />
            <strong>mam na imię Paulina, mam 23 lata i szaleńczo kocham się w życiu.</strong>
            < br />< br />
            Studiuję polonistykę, ale literaturą zajmuję się od najmłodszych lat, a poezją, odkąd odkryłam jak wielowymiarowym narzędziem jest słowo. Pisanie dzielę między innymi hobby, do których należy szeroko pojęty rozwój osobisty i duchowy, prowadzący mnie do zrozumienia istoty tego, kim naprawdę jestem ja oraz ludzie, których spotykam w swojej podróży.
        </p>
            <img src={paulina1}/>
        </StyledInsideWrapper>
        <StyledInsideWrapperRight>
        <img src={paulina2}/>
        <p>
            <h2>Paulina Ulatowska</h2>
            <strong>O poruszeniu ciał niebieskich, połknięciu słońca i kąpieli w jego ognistej wrzawie. O tym, że źródło naszych najśmielszych pragnień mieszka w sercu, wybaczenie jest drogą do wolności, a słowo ma niezwykle sprawczą moc,</strong>
            < br/> < br/>< br/>
            ślę serdeczności.

        </p>
        </StyledInsideWrapperRight>
    </Wrapper>

);

export default AboutPage;