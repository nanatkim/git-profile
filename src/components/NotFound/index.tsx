import React from "react";

import { Container, Img, ImgWrapper, TextWrapper } from "./styles";
import NFImg from "../../images/not-found.svg";
import ErrImg from "../../images/error.svg";

interface Data {
  message: string;
  status: number;
}

const NotFound: React.FC<Data> = ({ message, status }) => {
  return (
    <Container>
      <ImgWrapper>
        {status === 404 ? (
          <Img src={NFImg} alt={"Not Found"} />
        ) : (
          <Img src={ErrImg} alt={"Error"} />
        )}
      </ImgWrapper>
      <TextWrapper>
        <span>{message}</span>
      </TextWrapper>
    </Container>
  );
};

export default NotFound;
