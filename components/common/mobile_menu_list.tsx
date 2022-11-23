import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { MobileMenuListProps } from "../../model/model"
import Link from "next/link"
import { useState } from "react"

const Container = styled.div<{ active: boolean }>`
  position: absolute;
  display: ${({ active }) => (active ? "block" : "none")};
  top: 44px;
  left: 0;
  width: 100%;
  max-height: 376px;
  background: ${({ theme }) => theme.white_back};
  white-space: nowrap;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const LinkContent = styled.a`
  position: relative;
  display: block;
  padding: 0 20px;
  height: 52px;
  border-bottom: ${({ theme }) => `1px solid ${theme.menu_border}`};
  text-decoration: none;
  cursor: pointer;
`

const Text = styled.p`
  float: left;
  margin: 0;
  line-height: 52px;
  font-size: 16px;
  color: ${({ theme }) => theme.black_333};
  text-decoration: none;
  cursor: pointer;
`

const Mark = styled.p`
  float: left;
  margin: 12px 0 0 3px;
  padding: 3px 6px;
  height: 10px;
  line-height: 10px;
  font-size: 10px;
  color: ${({ theme }) => theme.white_text};
  background: ${({ theme }) => theme.mark_back};
  border-radius: 11px;
  box-sizing: content-box;
`

const DropContainer = styled.div`
  position: relative;
  padding: 0 20px;
  border-bottom: ${({ theme }) => `1px solid ${theme.menu_border}`};
  overflow: auto;
`

const DropContent = styled.div`
  overflow: hidden;
`

const DropListContent = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  padding: 11px 0 8px 20px;
`

const Arrow = styled.img`
  float: right;
  margin-top: 20px;
  height: 12px;
`

const DropLink = styled.a`
  display: block;
  margin: 0;
  height: 36px;
  line-height: 18px;
  font-size: 13px;
  color: ${({ theme }) => theme.black_333};
  text-decoration: none;
`

export function MobileMenuList({
  menus,
  active,
  menuClicked,
}: MobileMenuListProps) {
  const { t, i18n } = useTranslation()

  const changeLang = (lang: string) => {
    if (lang == "English") {
      i18n.changeLanguage("en")
    } else {
      i18n.changeLanguage("zh-cn")
    }
    menuClicked()
  }

  return (
    <Container active={active}>
      <>
        {menus.map((menu, index) => {
          if (menu.drop != null && menu.drop.length > 0) {
            const [show, setShow] = useState<boolean>(false)
            const showDrop = () => {
              setShow(!show)
            }
            return (
              <DropContainer key={index}>
                <DropContent onClick={showDrop}>
                  <Text>{menu.link.text}</Text>
                  <Arrow
                    src={
                      show
                        ? "/images/arrow_down.png"
                        : "/images/arrow_right.png"
                    }
                    alt="arrow"
                  />
                </DropContent>
                <DropListContent show={show}>
                  {menu.drop.map((item, index) => {
                    return item.nofollow ? (
                      <DropLink
                        onClick={
                          item.changeLang
                            ? () => changeLang(item.text)
                            : undefined
                        }
                        key={index}
                        href={item.link}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                      >
                        {item.text}
                      </DropLink>
                    ) : (
                      <Link key={index} href={item.link}>
                        <DropLink
                          onClick={
                            item.changeLang
                              ? () => changeLang(item.text)
                              : undefined
                          }
                        >
                          {item.text}
                        </DropLink>
                      </Link>
                    )
                  })}
                </DropListContent>
              </DropContainer>
            )
          } else {
            return menu.link.nofollow ? (
              <LinkContent
                key={index}
                href={menu.link.link}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <Text>{menu.link.text}</Text>
                {menu.isMark ? <Mark>{t("header.suggest")}</Mark> : <></>}
              </LinkContent>
            ) : (
              <Link key={index} href={menu.link.link}>
                <LinkContent>
                  <Text>{menu.link.text}</Text>
                  {menu.isMark ? <Mark>{t("header.suggest")}</Mark> : <></>}
                </LinkContent>
              </Link>
            )
          }
        })}
      </>
    </Container>
  )
}
