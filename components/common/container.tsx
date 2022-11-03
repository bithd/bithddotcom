import styled from "styled-components"

export const Content = styled.div`
  margin: 0 auto;
  width: 1100px;
  overflow: hidden;
`

export const BackImgContent = styled.div<{ url: string }>`
  width: 100%;
  height: 560px;
  background-image: url(url);
  background-size: 100% 100%;
  background-repeat: no-repeat;
`
