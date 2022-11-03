import styled from "styled-components";
import { DialogProps } from "../../model/model";
import { useState } from "react";
import Link from "next/link";

const Container = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black_half};
  z-index: 300;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 104px auto 0;
  width: 100%;
  height: calc(100% - 104px);
  overflow: scroll;
`;

const Content = styled.div`
  position: relative;
  margin: auto;
  width: 90%;
  max-width: 325px;
  text-align: center;
  background: ${({ theme }) => theme.white_back};
  border-radius: 8px;
  overflow: scroll;
`;

const Title = styled.p`
  margin: 25px 20px;
  line-height: 24px;
  font-size: 17px;
  color: ${({ theme }) => theme.black};
  text-align: center;
`;

const LinkTitle = styled.p`
  margin: 25px 20px 0;
  line-height: 24px;
  font-size: 14px;
  color: ${({ theme }) => theme.black_333};
  text-align: left;
`;

const LinkTitleA = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.warn_back};

  &:hover {
    text-decoration: underline;
  }
`;

const CheckBoxContainer = styled.div``;

const CheckBoxContent = styled.div`
  margin: 10px 15px;
  text-align: left;
`;

const CheckBox = styled.input`
  float: left;
  margin: 3px 8px 0 0;
  vertical-align: top;
  width: 13px;
`;

const CheckBoxText = styled.p`
  margin: 0;
  width: calc(100% - 21px);
  line-height: 20px;
  font-size: 14px;
`;

const ConfirmBtn = styled.button`
  margin: 32px auto 15px;
  width: 260px;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  color: ${({ theme }) => theme.white_text};
  border: none;
  border-radius: 8px;
  background-image: linear-gradient(
    49deg,
    #2ea3c9 0%,
    #3a33cf 36%,
    #320685 100%
  );
  box-shadow: ${({ theme }) => `0 2px 5px 0 ${theme.dialog_btn_shadow}`};
`;

export function Dialog({
  title,
  confirmTitle,
  checkBoxArr,
  confirmFun,
  isShow,
  cancelFun,
  linkTitle,
}: DialogProps) {
  const [boxResult, setBoxResult] = useState<boolean[]>([]);

  const confirmClicked = () => {
    console.log(checkBoxArr);
    if (checkBoxArr != null && checkBoxArr.length > 0) {
      let isCheck = true;
      for (let i = 0; i < checkBoxArr.length; i++) {
        if (!boxResult[i]) isCheck = false;
      }
      return confirmFun(isCheck);
    } else {
      confirmFun(true);
    }
  };

  const checkBoxChanged = (index: number, e: any) => {
    const arr = Array.from(boxResult);
    arr[index] = e.target.checked;
    setBoxResult(arr);
  };

  return (
    <>
      <Container isShow={isShow} onClick={cancelFun}>
        <Flex>
          <Content
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {linkTitle != null && linkTitle.length > 0 ? (
              <LinkTitle>
                {linkTitle}
                <Link href="/newsMessage/130">
                  <LinkTitleA>https://bitpie.com/newsMessage/130</LinkTitleA>
                </Link>
              </LinkTitle>
            ) : (
              <Title>{title}</Title>
            )}
            <CheckBoxContainer>
              {checkBoxArr.map((item, index) => {
                return (
                  <CheckBoxContent key={index}>
                    <CheckBox
                      type="checkbox"
                      defaultChecked={item.isSelect}
                      onChange={(e) => checkBoxChanged(index, e)}
                    />
                    <CheckBoxText>{item.text}</CheckBoxText>
                  </CheckBoxContent>
                );
              })}
            </CheckBoxContainer>
            <ConfirmBtn onClick={confirmClicked}>{confirmTitle}</ConfirmBtn>
          </Content>
        </Flex>
      </Container>
    </>
  );
}
