import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: var(--orange);
  border-radius: 5px;
  padding: 10px;

  span {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  max-width: 100%;
  vertical-align: middle;
  max-height: 300px;
`;
