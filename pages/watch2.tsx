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
import { Dialog } from "../components/common/dialog"
import { useState } from "react"
import { Technical } from "../components/common/technical_list"

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

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

const BannerContentReverse = styled(Content)`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap-reverse;
  }
`

const Banner2ImgContent = styled(BannerImgContent)`
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const BannerImg = styled.img`
  height: 100%;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 200px;
    height: auto;
  }
`

const Banner1Img = styled.img`
  height: 480px;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 200px;
    height: auto;
  }
`

const Banner7Img = styled.img`
  height: 480px;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 320px;
    height: auto;
  }
`

const TechnicalImgContent = styled(BannerImgContent)`
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const Warn = styled.p`
  margin: 20px auto 0;
  font-size: 10px;
  color: ${({ theme }) => theme.text_ac};
`

const Watch2Title = styled(Title)`
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const Watch2Subtitle = styled(Subtitle)`
  @media (max-width: 768px) {
    margin: 0 12px;
    font-size: 16px;
  }
`

const Watch2: NextPage = () => {
  const { t, i18n } = useTranslation()
  const [showDialog, setShowDialog] = useState<boolean>(false)

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
  ]

  const buyClicked = () => {
    setShowDialog(true)
  }

  const getColon = () => {
    return isCN(i18n.language) ? "：" : ":"
  }

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
          <Dialog
            type="watch2"
            isShow={showDialog}
            func={() => {
              setShowDialog(false)
            }}
          />
          <Buy func={buyClicked} title={t("bithd_2.title")} />

          <BackContent backColor={defaultTheme.white_back}>
            <BannerContent>
              <BannerTextContent>
                <Watch2Title
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_1_title"),
                  }}
                />
                <Watch2Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_1_subtitle"),
                  }}
                />
              </BannerTextContent>
              <BannerImgContent>
                <BannerImg
                  src="/images/watch2_banner1.png"
                  alt="watch2 banner1"
                />
              </BannerImgContent>
            </BannerContent>
          </BackContent>

          <BackContent backColor={defaultTheme.back_fa}>
            <BannerContentReverse>
              <Banner2ImgContent>
                <Banner1Img
                  src="/images/watch2_banner2.png"
                  alt="watch2 banner2"
                />
              </Banner2ImgContent>
              <BannerTextContent>
                <Watch2Title color={defaultTheme.black_333}>
                  {t("bithd_2.banner_2_title")}
                </Watch2Title>
                <Watch2Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_2_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContentReverse>
          </BackContent>

          <BackContent backColor={defaultTheme.white_back}>
            <BannerContent>
              <BannerTextContent>
                <Watch2Title
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_3_title"),
                  }}
                />
                <Watch2Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_3_subtitle"),
                  }}
                />
              </BannerTextContent>
              <BannerImgContent>
                <Banner1Img
                  src="/images/watch2_banner3.png"
                  alt="watch2 banner3"
                />
              </BannerImgContent>
            </BannerContent>
          </BackContent>

          <BackContent backColor={defaultTheme.back_fa}>
            <BannerContentReverse>
              <Banner2ImgContent>
                <Banner1Img
                  src="/images/watch2_banner4.png"
                  alt="watch2 banner4"
                />
              </Banner2ImgContent>
              <BannerTextContent>
                <Watch2Title color={defaultTheme.black_333}>
                  {t("bithd_2.banner_4_title")}
                </Watch2Title>
                <Watch2Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_4_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContentReverse>
          </BackContent>

          <BackContent backColor={defaultTheme.white_back}>
            <BannerContent>
              <BannerTextContent>
                <Watch2Title
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_5_title"),
                  }}
                />
                <Watch2Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_5_subtitle"),
                  }}
                />
              </BannerTextContent>
              <BannerImgContent>
                <Banner1Img
                  src="/images/watch2_banner5.png"
                  alt="watch2 banner5"
                />
              </BannerImgContent>
            </BannerContent>
          </BackContent>

          <BackContent backColor={defaultTheme.back_fa}>
            <BannerContentReverse>
              <Banner2ImgContent>
                <Banner1Img
                  src="/images/watch2_banner6.png"
                  alt="watch2 banner6"
                />
              </Banner2ImgContent>
              <BannerTextContent>
                <Watch2Title color={defaultTheme.black_333}>
                  {t("bithd_2.banner_6_title")}
                </Watch2Title>
                <Watch2Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_6_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContentReverse>
          </BackContent>

          <TechnicalContent>
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("common.params_title")}
                </Title>
                <Technical params={params} />
              </BannerTextContent>
              <TechnicalImgContent>
                <div>
                  <Banner7Img
                    src="/images/watch2_banner7.png"
                    alt="watch2 banner7"
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
