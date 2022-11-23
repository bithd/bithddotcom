import type { NextPage } from "next"
import styled from "styled-components"
import { NextSeo } from "next-seo"
import { PCHeader } from "../components/header/pc_header"
import { Footer } from "../components/footer/footer"
import ClientOnly from "../utils/clientOnly"
import { MobiveHeader } from "../components/header/mobile_header"
import { useTranslation } from "react-i18next"
import { Buy } from "../components/common/buy"
import { defaultTheme } from "../styles/theming"
import {
  Content,
  BannerImgContent,
  BannerTextContent,
  Title,
  Subtitle,
  TechnicalContent,
  BackContent,
  FlexContent,
  FlexContentReverse,
} from "../components/common/common"
import { Params } from "../model/model"
import { Dialog } from "../components/common/dialog"
import { useState } from "react"
import { Technical } from "../components/common/technical_list"

const Container = styled.div`
  margin-top: 44px;
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
`

const Banner2ImgContent = styled(BannerImgContent)`
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const BannerCenterImgContent = styled(BannerImgContent)`
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const Banner3ImgContent = styled(BannerImgContent)`
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const BannerImg = styled.img`
  height: 100%;

  @media (max-width: 768px) {
    /* width: 80%; */
    /* max-width: 200px; */
    height: 320px;
  }
`

const Banner1Img = styled(BannerImg)`
  height: 480px;

  @media (max-width: 768px) {
    height: 320px;
  }
`

const Banner6Img = styled(BannerImg)`
  height: 480px;

  @media (max-width: 768px) {
    height: 360px;
  }
`

const Banner7Img = styled(Banner1Img)`
  @media (max-width: 768px) {
    max-width: 320px;
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
  /* @media (max-width: 768px) {
    font-size: 24px;
  } */
`

const Watch2Subtitle = styled(Subtitle)`
  @media (max-width: 768px) {
    margin: 0 12px;
    font-size: 16px;
  }
`

const ZeroBottomBackImgContent = styled(BackContent)`
  @media (max-width: 768px) {
    padding: 60px 0 0;
    text-align: center;
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

  return (
    <>
      <NextSeo
        title="BITHD Watch 2 给予数字资产更安全的守护"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "护盾 ｜ BITHD Watch 2",
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
            <FlexContent>
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
            </FlexContent>
          </BackContent>

          <BackContent backColor={defaultTheme.back_fa}>
            <FlexContentReverse>
              <BannerCenterImgContent>
                <Banner1Img
                  src="/images/watch2_banner2.png"
                  alt="watch2 banner2"
                />
              </BannerCenterImgContent>
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
            </FlexContentReverse>
          </BackContent>

          <BackContent backColor={defaultTheme.white_back}>
            <FlexContent>
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
              <Banner3ImgContent>
                <Banner1Img
                  src="/images/watch2_banner3.png"
                  alt="watch2 banner3"
                />
              </Banner3ImgContent>
            </FlexContent>
          </BackContent>

          <BackContent backColor={defaultTheme.back_fa}>
            <FlexContentReverse>
              <BannerCenterImgContent>
                <Banner1Img
                  src="/images/watch2_banner4.png"
                  alt="watch2 banner4"
                />
              </BannerCenterImgContent>
              <BannerTextContent>
                <Watch2Title
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_4_title"),
                  }}
                />
                <Watch2Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_4_subtitle"),
                  }}
                />
              </BannerTextContent>
            </FlexContentReverse>
          </BackContent>

          <ZeroBottomBackImgContent backColor={defaultTheme.white_back}>
            <FlexContent>
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
                <Banner6Img
                  src="/images/watch2_banner5.png"
                  alt="watch2 banner5"
                />
              </BannerImgContent>
            </FlexContent>
          </ZeroBottomBackImgContent>

          <ZeroBottomBackImgContent backColor={defaultTheme.back_fa}>
            <FlexContentReverse>
              <Banner2ImgContent>
                <Banner6Img
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
            </FlexContentReverse>
          </ZeroBottomBackImgContent>

          <TechnicalContent>
            <FlexContent>
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
            </FlexContent>
          </TechnicalContent>
        </Container>
        <Footer router="watch2" />
      </ClientOnly>
    </>
  )
}

export default Watch2
