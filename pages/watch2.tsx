import type { NextPage } from "next"
import styled from "styled-components"
import { NextSeo } from "next-seo"
import { PCHeader } from "../components/header/pc_header"
import { Footer } from "../components/footer/footer"
import ClientOnly from "../utils/clientOnly"
import { MobiveHeader } from "../components/header/mobile_header"
import { useTranslation } from "react-i18next"
import { isCN } from "../utils/utils"
import { Buy } from "../components/common/buy"
import { defaultTheme } from "../styles/theming"
import {
  BackImgContent,
  Content,
  BannerImgContent,
  BannerTextContent,
  Title,
  Subtitle,
  TechnicalContent,
  TechnicalSubtitle,
  BackContent,
} from "../components/common/common"
import { Params } from "../model/model"

const Container = styled.div`
  margin-top: 60px;
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
`

const BannerContent = styled(Content)`
  display: flex;
  align-items: center;
  height: 100%;
`

const Banner1ImgContent = styled(BannerImgContent)`
  text-align: right;
`

const Banner1Img = styled.img`
  width: 320px;
`

const Banner1TextContent = styled(BannerTextContent)`
  margin-left: 66px;
`

const Banner1Title = styled.p`
  font-family: "PingFangSC-Semibold";
  font-size: 28px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 600;
`

const Banner1Subtitle = styled.p`
  font-family: "PingFangSC-Semibold";
  margin: 30px 0 0;
  font-size: 38px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 600;
`

const PriceContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
`

const PriceText = styled.p`
  line-height: 50px;
  font-size: 22px;
  color: ${({ theme }) => theme.black_text};
`

const BuyContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const BuyBtn = styled.button`
  font-size: 22px;
  color: ${({ theme }) => theme.blue_text};
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const BuyArrow = styled.img`
  height: 20px;
`

const Banner2Img = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 280px;
`

const Banner3Img = styled.img`
  height: 480px;
`

const Banner4Img = styled.img`
  height: 420px;
`

const TechnicalImgContent = styled(BannerImgContent)`
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`

const Warn = styled.p`
  margin: 20px auto 0;
  font-size: 10px;
  color: ${({ theme }) => theme.text_ac};
`

const Watch2: NextPage = () => {
  const { t, i18n } = useTranslation()

  const getColon = () => {
    return isCN(i18n.language) ? "：" : ":"
  }

  const params: Params[] = [
    {
      title: t("bithd_2.params1_title"),
      content: t("bithd_2.params1_content"),
    },
    {
      title: t("bithd_2.params2_title"),
      content: t("bithd_2.params2_content"),
    },
    {
      title: t("bithd_2.params3_title"),
      content: t("bithd_2.params3_content"),
    },
    {
      title: t("bithd_2.params4_title"),
      content: t("bithd_2.params4_content"),
    },
    {
      title: t("bithd_2.params5_title"),
      content: t("bithd_2.params5_content"),
    },
    {
      title: t("bithd_2.params6_title"),
      content: t("bithd_2.params6_content"),
    },
    {
      title: t("bithd_2.params7_title"),
      content: t("bithd_2.params7_content"),
    },
  ]

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
        <PCHeader active="watch2" />
        <MobiveHeader />
        <Container>
          <Buy name="bithd_2" title={t("bithd_2.title")} />

          <BackContent backColor={defaultTheme.back_fa}>
            <BannerContent>
              <BannerTextContent>
                <Title
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_1_title"),
                  }}
                />
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_1_subtitle"),
                  }}
                />
              </BannerTextContent>
              <BannerImgContent>
                <Banner3Img
                  src="/images/bithd_2_banner3.png"
                  alt="razor pro banner3"
                />
              </BannerImgContent>
            </BannerContent>
          </BackContent>

          <BackImgContent url="/images/bithd_2_back2.jpg">
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.white_text}>
                  {t("bithd_2.banner_2_title")}
                </Title>
                <Subtitle color={defaultTheme.white_text}>
                  {t("bithd_2.banner_2_subtitle")}
                </Subtitle>
              </BannerTextContent>
            </BannerContent>
            <Banner2Img
              src="/images/bithd_2_banner2.png"
              alt="razor pro banner2"
            />
          </BackImgContent>

          <BackImgContent url="/images/bithd_2_back3.jpg">
            <BannerContent>
              <BannerImgContent>
                <Banner3Img
                  src="/images/bithd_2_banner3.png"
                  alt="razor pro banner3"
                />
              </BannerImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("bithd_2.banner_3_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_3_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
          </BackImgContent>

          <BackImgContent url="/images/bithd_2_back.jpg">
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("bithd_2.banner_4_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_4_subtitle"),
                  }}
                />
              </BannerTextContent>
              <BannerImgContent>
                <Banner4Img
                  src="/images/bithd_2_banner4.png"
                  alt="razor pro banner4"
                />
              </BannerImgContent>
            </BannerContent>
          </BackImgContent>

          <TechnicalContent>
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("common.params_title")}
                </Title>
                {params.map((item, index) => {
                  return (
                    <TechnicalSubtitle key={index}>
                      {item.title}
                      {getColon()}
                      {item.content}
                    </TechnicalSubtitle>
                  )
                })}
              </BannerTextContent>
              <TechnicalImgContent>
                <div>
                  <Banner4Img
                    src="/images/bithd_2_banner5.png"
                    alt="razor pro banner5"
                  />
                  <Warn>{t("common.warn")}</Warn>
                </div>
              </TechnicalImgContent>
            </BannerContent>
          </TechnicalContent>
        </Container>
        <Footer router="watch2" />
      </ClientOnly>
    </>
  )
}

export default Watch2
