import type { NextPage } from "next"
import styled from "styled-components"
import { NextSeo } from "next-seo"
import { PCHeader } from "../components/header/pc_header"
import { Footer } from "../components/footer/footer"
import ClientOnly from "../utils/clientOnly"
import { MobiveHeader } from "../components/header/mobile_header"
import { useTranslation } from "react-i18next"
import { getClientWidth, isCN, isPc } from "../utils/utils"
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
  FlexContentReverse,
  BlankImgContent,
} from "../components/common/common"
import { Params } from "../model/model"
import { Dialog } from "../components/common/dialog"
import { useEffect, useState } from "react"
import { Technical } from "../components/common/technical_list"

const Container = styled.div`
  margin-top: 44px;
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
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`

const Banner1TextContent = styled(BannerTextContent)`
  margin-left: 66px;

  @media (max-width: 768px) {
    margin: 0;
  }
`

const Armor2BackImgContent = styled(BackImgContent)<{ height: number }>`
  height: ${({ height }) => `${height}px`};

  @media (max-width: 768px) {
    height: ${({ height }) => `${height}px`};
    text-align: center;
    background-position: left bottom;
  }
`

const MobileBackImg6Content = styled(Armor2BackImgContent)`
  @media (min-width: 768px) {
    display: none;
  }
`

const Banner1Title = styled.p<{ mark: string }>`
  position: relative;
  font-family: "PingFangSC-Semibold";
  font-size: 38px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 32px;
    color: ${({ theme }) => theme.white_text};
  }

  &::after {
    font-family: "PingFangSC-Medium";
    content: ${(props) => `"${props.mark ? props.mark : ""}"`};
    position: absolute;
    margin-left: 12px;
    padding: 2px 12px;
    font-size: 22px;
    border: ${({ theme }) => `2.5px solid ${theme.border_f5}`};
    border-radius: 11px;
    font-weight: 500;

    @media (max-width: 768px) {
      display: none;
    }
  }
`

const Banner1Subtitle = styled.p`
  font-family: "PingFangSC-Semibold";
  margin: 30px 0 0;
  font-size: 50px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 13px;
    color: ${({ theme }) => theme.white_text};
  }
`

const PriceContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;

  @media (max-width: 768px) {
    display: none;
  }
`

const PriceText = styled.p`
  line-height: 50px;
  font-size: 28px;
  color: ${({ theme }) => theme.black_text};
`

const BuyContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const BuyBtn = styled.button`
  font-size: 28px;
  color: ${({ theme }) => theme.blue_text};
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const BuyArrow = styled.img`
  height: 26px;
`

const Banner4Img = styled.img`
  height: 420px;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 320px;
    height: auto;
  }
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

const Banner6Subtitle = styled(Subtitle)`
  @media (max-width: 768px) {
    margin: 0 17px;
    text-align: left;

    a {
      color: ${({ theme }) => theme.blue_text};
      text-decoration: none;
      cursor: pointer;
    }
  }
`

const Armor2: NextPage = () => {
  const { t, i18n } = useTranslation()
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [isPcSize, setIsPcSize] = useState<boolean>(true)
  const [clientWidth, setClientWidth] = useState<number>(0)

  const params: Params[] = [
    {
      title: t("frozen_304.params1_title"),
      content: t("frozen_304.params1_content"),
    },
    {
      title: t("frozen_304.params2_title"),
      content: t("frozen_304.params2_content"),
    },
    {
      title: t("frozen_304.params3_title"),
      content: t("frozen_304.params3_content"),
    },
    {
      title: t("frozen_304.params4_title"),
      content: t("frozen_304.params4_content"),
    },
    {
      title: t("frozen_304.params5_title"),
      content: t("frozen_304.params5_content"),
    },
  ]

  const buyClicked = () => {
    setShowDialog(true)
  }

  const handleResize = () => {
    setIsPcSize(
      parseInt(document.documentElement.clientWidth.toFixed()) > 768
        ? true
        : false
    )
    setClientWidth(parseInt(document.documentElement.clientWidth.toFixed()))
  }

  const getHeight = (initHeight: number) => {
    if (isPc() && isPcSize) {
      const width = clientWidth == 0 ? getClientWidth() : clientWidth
      if (width > 1200) {
        return width / 2.56
      } else {
        return 468.75
      }
    } else {
      const initWidth = 375
      if (getClientWidth() != 0 && clientWidth != 0) {
        return clientWidth > initWidth
          ? clientWidth - initWidth + initHeight
          : initHeight
      }
      return getClientWidth() > initWidth
        ? getClientWidth() - initWidth + initHeight
        : initHeight
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, true)
    return () => window.removeEventListener("resize", handleResize, false)
  }, [])

  return (
    <>
      <NextSeo
        title="冰甲 304 千锤百炼，强硬登场"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "冰甲 304 千锤百炼，强硬登场",
          },
        ]}
      />
      <ClientOnly>
        <PCHeader active="frozen_304" />
        <MobiveHeader />
        <Container>
          <Dialog
            type="armor2"
            isShow={showDialog}
            func={() => {
              setShowDialog(false)
            }}
          />
          <Buy func={buyClicked} title="Frozen Armor 304" />
          <Armor2BackImgContent
            isZeroBottom={false}
            isFullBack={false}
            height={getHeight(700)}
            url={
              isPc() && isPcSize
                ? "/images/armor2_banner1_back.jpg"
                : "/images/armor2_m_banner1_back.jpg"
            }
          >
            <BannerContent>
              <BlankImgContent />
              <Banner1TextContent>
                <Banner1Title
                  mark={t("frozen_304.banner_1_mark")}
                  dangerouslySetInnerHTML={{
                    __html:
                      isPc() && isPcSize
                        ? t("frozen_304.banner_1_title")
                        : t("frozen_304.banner_m_1_title"),
                  }}
                />
                <Banner1Subtitle>
                  {isPc() && isPcSize
                    ? t("frozen_304.banner_1_subtitle")
                    : t("frozen_304.banner_m_1_subtitle")}
                </Banner1Subtitle>
                <PriceContent>
                  <PriceText>{t("common.price", { price: "¥699" })}</PriceText>
                  <BuyContent onClick={buyClicked}>
                    <BuyBtn>{t("common.buy")}</BuyBtn>
                    <BuyArrow src="/images/arrow_right.svg" alt="arrow" />
                  </BuyContent>
                </PriceContent>
              </Banner1TextContent>
            </BannerContent>
          </Armor2BackImgContent>

          <Armor2BackImgContent
            isZeroBottom={false}
            isFullBack={false}
            height={getHeight(637)}
            url={
              isPc() && isPcSize
                ? "/images/armor2_banner2_back.jpg"
                : "/images/armor2_m_banner2_back.jpg"
            }
          >
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.white_text}>
                  {t("frozen_304.banner_2_title")}
                </Title>
                <Subtitle color={defaultTheme.white_text}>
                  {t("frozen_304.banner_2_subtitle")}
                </Subtitle>
              </BannerTextContent>
              <BlankImgContent />
            </BannerContent>
          </Armor2BackImgContent>

          <Armor2BackImgContent
            isZeroBottom={false}
            isFullBack={false}
            height={getHeight(668)}
            url={
              isPc() && isPcSize
                ? "/images/armor2_banner3_back.jpg"
                : "/images/armor2_m_banner3_back.jpg"
            }
          >
            <BannerContent>
              <BlankImgContent />
              <BannerTextContent>
                <Title
                  color={
                    isPc() && isPcSize
                      ? defaultTheme.black_333
                      : defaultTheme.razor2_banner3_text
                  }
                >
                  {t("frozen_304.banner_3_title")}
                </Title>
                <Subtitle
                  color={
                    isPc() && isPcSize
                      ? defaultTheme.black_333
                      : defaultTheme.razor2_banner3_text
                  }
                  dangerouslySetInnerHTML={{
                    __html: t("frozen_304.banner_3_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
          </Armor2BackImgContent>

          <Armor2BackImgContent
            isZeroBottom={false}
            isFullBack={false}
            height={getHeight(667)}
            url={
              isPc() && isPcSize
                ? "/images/armor2_banner4_back.jpg"
                : "/images/armor2_m_banner4_back.jpg"
            }
          >
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.white_text}>
                  {t("frozen_304.banner_4_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.white_text}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen_304.banner_4_subtitle"),
                  }}
                />
              </BannerTextContent>
              <BlankImgContent />
            </BannerContent>
          </Armor2BackImgContent>

          <Armor2BackImgContent
            isZeroBottom={false}
            isFullBack={false}
            height={getHeight(680)}
            url={
              isPc() && isPcSize
                ? "/images/armor2_banner5_back.jpg"
                : "/images/armor2_m_banner5_back.jpg"
            }
          >
            <BannerContent>
              <BlankImgContent />
              <BannerTextContent>
                <Title
                  color={
                    isPc() && isPcSize
                      ? defaultTheme.black_333
                      : defaultTheme.white_text
                  }
                >
                  {t("frozen_304.banner_5_title")}
                </Title>
                <Subtitle
                  color={
                    isPc() && isPcSize
                      ? defaultTheme.black_333
                      : defaultTheme.white_text
                  }
                  dangerouslySetInnerHTML={{
                    __html: t("frozen_304.banner_5_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
          </Armor2BackImgContent>

          <MobileBackImg6Content
            isZeroBottom={false}
            isFullBack={false}
            height={getHeight(720)}
            url="/images/armor2_m_banner6_back.jpg"
          >
            <BannerContent>
              <BlankImgContent />
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("frozen_304.banner_6_title")}
                </Title>
                <Banner6Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen_304.banner_6_subtitle"),
                  }}
                ></Banner6Subtitle>
              </BannerTextContent>
            </BannerContent>
          </MobileBackImg6Content>

          <TechnicalContent>
            <FlexContentReverse>
              <TechnicalImgContent>
                <div>
                  <Banner4Img
                    src="/images/armor2_banner6.jpg"
                    alt="armor 304 banner6"
                  />
                  <Warn>{t("common.warn")}</Warn>
                </div>
              </TechnicalImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("common.params_title")}
                </Title>
                <Technical params={params} />
              </BannerTextContent>
            </FlexContentReverse>
          </TechnicalContent>
        </Container>
        <Footer router="frozen_304" />
      </ClientOnly>
    </>
  )
}

export default Armor2
