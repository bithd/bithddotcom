import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { FooterProps } from "../../model/model"

const Container = styled.div<{ router: string }>`
  width: 100%;
  overflow: hidden;
`

const Content = styled.div`
  padding: 20px 0;
  width: 100%;
  min-width: 1100px;
  text-align: center;
  background: ${({ theme }) => theme.footer_back};
  overflow: hidden;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

const Text = styled.p`
  margin: 0;
  width: 100%;
  min-width: 1100px;
  line-height: 1.5;
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.black_333};
  overflow: hidden;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

const FooterLink = styled.a`
  margin: 0;
  width: 100%;
  min-width: 1100px;
  line-height: 1.5;
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.footer_link_text};
  text-decoration: underline;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

export function Footer({ router }: FooterProps) {
  const { t, i18n } = useTranslation()

  return (
    <>
      <Container router={router}>
        <Content>
          {router == "home" ? (
            <>
              <Text>{t("footer.base_on")}</Text>
              <FooterLink
                href="https://github.com/bithd"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {t("footer.source")}
              </FooterLink>
            </>
          ) : (
            <>
              <Text>{t("footer.warn")}</Text>
            </>
          )}
        </Content>
      </Container>
    </>
  )
}
