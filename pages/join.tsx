import type { NextPage } from "next"
import styled from "styled-components"
import { NextSeo } from "next-seo"
import { PCHeader } from "../components/header/pc_header"
import ClientOnly from "../utils/clientOnly"
import { MobiveHeader } from "../components/header/mobile_header"
import { useTranslation } from "react-i18next"

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
`

const ContainerContent = styled.div`
  margin: 40px auto;
  padding: 20px;
  max-width: 1100px;
  background: rgb(255, 255, 255);
`

const Title = styled.p`
  font-size: 20px;
  line-height: 48px;
  font-weight: 600;
`

const Title1 = styled.p`
  margin: 10px 0;
  font-size: 14px;
  line-height: 32px;
  font-weight: 600;
`

const Title3 = styled.p`
  margin: 20px 0 10px;
  font-size: 14px;
  line-height: 32px;
  font-weight: 600;
`

const Title2 = styled.p`
  margin: 8px 0;
  font-size: 14px;
  line-height: 26px;
`

const Title4 = styled.p`
  margin: 20px 0 10px;
  font-size: 14px;
  line-height: 32px;
`

const Title5 = styled.p`
  margin: 10px 0;
  font-size: 14px;
  line-height: 32px;
`

const Join: NextPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <NextSeo
        title="加入我们"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "加入我们",
          },
        ]}
      />
      <ClientOnly>
        <PCHeader active="join" />
        <MobiveHeader />
        <Container>
          <ContainerContent>
            <Title>{t("join.title")}</Title>
            <Title2>{t("join.subtitle")}</Title2>
            <Title3>{t("join.responsibility_1")}</Title3>
            <Title2>{t("join.r_1")}</Title2>
            <Title2>{t("join.r_2")}</Title2>
            <Title2>{t("join.r_3")}</Title2>
            <Title2>{t("join.r_4")}</Title2>
            <Title2>{t("join.r_5")}</Title2>
            <Title2>{t("join.r_6")}</Title2>
            <Title2>{t("join.r_7")}</Title2>
            <Title2>{t("join.r_8")}</Title2>
            <Title1>{t("join.job")}</Title1>
            <Title2>{t("join.j_1")}</Title2>
            <Title2>{t("join.j_2")}</Title2>
            <Title2>{t("join.j_3")}</Title2>
            <Title2>{t("join.j_4")}</Title2>
            <Title2>{t("join.j_5")}</Title2>
            <Title2>{t("join.j_6")}</Title2>
            <Title4>{t("join.address")}</Title4>
            <Title5
              dangerouslySetInnerHTML={{ __html: t("join.email") }}
            ></Title5>
            <Title5>{t("join.provider")}</Title5>
          </ContainerContent>
        </Container>
      </ClientOnly>
    </>
  )
}

export default Join
