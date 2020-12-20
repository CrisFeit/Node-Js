import styled from "styled-components";

const Titulo = styled.h1`
  color: ${ ({ theme })=> theme.text };
  padding: clamp(10px , .2em , 20px) 0;
  font-size: clamp(1rem,1vw + 1.2rem, 3rem)
`;

export default Titulo;
