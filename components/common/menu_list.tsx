import styled from "styled-components"
import { MenuListProps, PieLink } from "../../model/model"
import Link from "next/link"

const NormalA = styled.a`
  float: left;
  margin-right: 5px;
  padding: 0 15px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: ${({ theme }) => theme.white_text};
  text-decoration: none;
  border-radius: 30px;
  &:hover {
    color: ${({ theme }) => theme.nav_text_hover};
  }
  cursor: pointer;
`

const Drop = styled.div<{ distance: number }>`
  position: absolute;
  display: none;
  padding: 10px 12px 5px;
  top: 45px;
  left: ${({ distance }) => `-${distance}px`};
  border-radius: 5px;
  background: url(/images/drop.png) no-repeat;
  background-size: 100% 100%;
`

const DropContainer = styled.div`
  position: relative;
  float: left;
  &:hover ${Drop} {
    display: block;
  }
  &:after {
    content: "";
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    height: 30px;
  }
`

const DropA = styled.a`
  display: block;
  padding: 0 8px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: ${({ theme }) => theme.black_333};

  &:hover {
    color: ${({ theme }) => theme.blue_hover_text};
  }

  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
`

export function MenuList({ active, menus }: MenuListProps) {
  const getDropDistance = (arr: PieLink[], str: string) => {
    let link = arr.sort((a, b) => {
      return b.text.length - a.text.length
    })[0]
    let longWidth = calcWidth(link.text)
    let shortWidth = calcWidth(str)
    return longWidth - shortWidth > 0 ? (longWidth - shortWidth) / 2 : 0
  }

  const calcWidth = (text: string) => {
    let span = document.createElement("span")
    let result = {
      width: span.offsetWidth,
    }
    span.style.visibility = "hidden"
    span.style.fontSize = "16px"
    span.style.fontFamily = "PingFangSC-Regular, sans-serif"
    document.body.appendChild(span)
    if (typeof span.textContent !== "undefined") {
      span.textContent = text
    } else {
      span.innerText = text
    }
    result.width = span.offsetWidth - result.width
    span.parentNode?.removeChild(span)
    return result.width
  }

  const headerScroll = (mouseIn: boolean) => {
    const header = document.getElementById("header")
    if (header != null && header?.style != null) {
      if (mouseIn) {
        header.style.overflowX = "visible"
        header.style.overflowY = "visible"
        header.style.transform = `translateX(-${
          document.documentElement.scrollLeft - 100
        }px)`
        console.log(`translateX(-${document.documentElement.scrollLeft}px)`)
      } else {
        header.style.overflowX = "scroll"
        header.style.overflowY = "hidden"
        header.style.transform = `translateX(-${0}px)`
      }
    }
  }

  return (
    <>
      {menus.map((menu, index) => {
        if (menu.drop != null && menu.drop.length > 0) {
          return (
            <DropContainer
              key={index}
              onMouseOver={() => headerScroll(true)}
              onMouseLeave={() => headerScroll(false)}
            >
              {menu.link.nofollow ? (
                <NormalA
                  href={menu.link.link}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  {menu.link.text}
                </NormalA>
              ) : (
                <Link href={menu.link.link}>
                  <NormalA>{menu.link.text}</NormalA>
                </Link>
              )}
              <Drop distance={getDropDistance(menu.drop, menu.link.text)}>
                {menu.drop != null ? (
                  menu.drop.map((link, index) => {
                    return link.nofollow ? (
                      <DropA
                        key={index}
                        href={link.link}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                      >
                        {link.text}
                      </DropA>
                    ) : (
                      <Link key={index} href={link.link}>
                        <DropA>{link.text}</DropA>
                      </Link>
                    )
                  })
                ) : (
                  <></>
                )}
              </Drop>
            </DropContainer>
          )
        } else {
          return menu.link.nofollow ? (
            <NormalA
              key={index}
              href={menu.link.link}
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              {menu.link.text}
            </NormalA>
          ) : (
            <Link key={index} href={menu.link.link}>
              <NormalA>{menu.link.text}</NormalA>
            </Link>
          )
        }
      })}
    </>
  )
}
