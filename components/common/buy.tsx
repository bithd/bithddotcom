import styled from "styled-components";
import { Content } from "./container";
import { useTranslation } from "react-i18next";
import { BuyProps } from "../../model/model";

const Container = styled.div`
  height: 60px;
  background: ${({ theme }) => theme.back_f6};
`;

const Title = styled.p`
  float: left;
  margin: 0;
  line-height: 60px;
  font-size: 24px;
  color: ${({ theme }) => theme.black_333};
`;

const BuyBtn = styled.button`
  float: right;
`;

export function Buy({ name, title }: BuyProps) {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Content>
          <Title>{title}</Title>
          <BuyBtn>{t("common.buy")}</BuyBtn>
        </Content>
      </Container>
    </>
  );
}
