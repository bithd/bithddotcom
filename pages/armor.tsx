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

const Banner1Price = styled.p`
  margin: 30px 0 0;
  font-size: 22px;
  color: ${({ theme }) => theme.blue_text};
`

const Banner2Img = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 360px;
`

const Banner5Img = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 360px;
`

const Banner3Img = styled.img`
  height: 480px;
`

const Banner4Img = styled.img`
  height: 420px;
`

const TechnicalImgContent = styled(BannerImgContent)`
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Warn = styled.p`
  margin: 20px auto 0;
  font-size: 10px;
  color: ${({ theme }) => theme.text_ac};
`

const Armor: NextPage = () => {
  const { t, i18n } = useTranslation()

  const getColon = () => {
    return isCN(i18n.language) ? "：" : ":"
  }

  const params: Params[] = [
    {
      title: t("frozen.params1_title"),
      content: t("frozen.params1_content"),
    },
    {
      title: t("frozen.params2_title"),
      content: t("frozen.params2_content"),
    },
    {
      title: t("frozen.params3_title"),
      content: t("frozen.params3_content"),
    },
    {
      title: t("frozen.params4_title"),
      content: t("frozen.params4_content"),
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
        <PCHeader active="frozen" />
        <MobiveHeader />
        <Container>
          <Buy name="armor" title="Frozen Armor" />
          <BackImgContent url="/images/razor_banner3_back.jpg">
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.white_text}>
                  {t("frozen.banner_1_title")}
                </Title>
                <Subtitle color={defaultTheme.white_text}>
                  {t("frozen.banner_1_subtitle")}
                </Subtitle>
                <Banner1Price>{t("frozen.banner_1_price")}</Banner1Price>
              </BannerTextContent>

              <Banner1ImgContent>
                <Banner3Img
                  src="/images/armor_banner1.png"
                  alt="razor pro banner3"
                />
              </Banner1ImgContent>
            </BannerContent>
          </BackImgContent>

          <BackImgContent url="/images/razor_pro_back.jpg">
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("frozen.banner_2_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen.banner_2_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
            <Banner2Img src="/images/armor_banner2.png" alt="frozen banner2" />
          </BackImgContent>

          <BackImgContent url="/images/armor_banner3_back.jpg">
            <BannerContent>
              <Banner1ImgContent></Banner1ImgContent>
              <BannerTextContent>
                <Title
                  color={defaultTheme.white_text}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen.banner_3_title"),
                  }}
                />
                <Subtitle
                  color={defaultTheme.white_text}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen.banner_3_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
          </BackImgContent>

          <BackImgContent url="/images/armor_banner4_back.jpg">
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("frozen.banner_4_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen.banner_4_subtitle"),
                  }}
                />
              </BannerTextContent>
              <BannerImgContent></BannerImgContent>
            </BannerContent>
          </BackImgContent>

          <BackImgContent url="/images/razor_pro_back.jpg">
            <BannerContent>
              <BannerImgContent></BannerImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("frozen.banner_5_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen.banner_5_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
            <Banner5Img src="/images/armor_banner5.png" alt="frozen banner2" />
          </BackImgContent>

          <TechnicalContent>
            <BannerContent>
              <TechnicalImgContent>
                <div>
                  <Banner4Img
                    src="/images/armor_banner6.png"
                    alt="armor 304 banner6"
                  />
                  <Warn>{t("common.warn")}</Warn>
                </div>
              </TechnicalImgContent>
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
            </BannerContent>
          </TechnicalContent>
        </Container>
        <Footer router="frozen" />
      </ClientOnly>
    </>
  )
}

export default Armor
