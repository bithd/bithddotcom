import type { NextPage } from "next";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { PCHeader } from "../components/header/pc_header";
import { Footer } from "../components/footer/footer";
import ClientOnly from "../utils/clientOnly";
import { MobiveHeader } from "../components/header/mobile_header";
import { useTranslation } from "react-i18next";
import { isCN } from "../utils/utils";
import { Buy } from "../components/common/buy";

const Container = styled.div`
  margin-top: 60px;
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
`;

const Content = styled.div`
  margin: 40px auto 0;
  max-width: 1100px;
  background: ${({ theme }) => theme.white_back};

  @media (max-width: 768px) {
    margin: 12px;
    max-width: 100%;
  }
`;

const USDT: NextPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <NextSeo
        title="USDT 矿工费代付功能"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "USDT 矿工费代付功能",
          },
        ]}
      />
      <ClientOnly>
        <PCHeader active="razor2" />
        <MobiveHeader />
        <Container>
          <Buy name="razor2" title="BITHD Razor Pro" />
          <Content></Content>
        </Container>
        <Footer router="razor2" />
      </ClientOnly>
    </>
  );
};

export default USDT;
