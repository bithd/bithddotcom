import type { NextPage } from 'next'
import styled from 'styled-components'
import { NextSeo } from 'next-seo';
import ClientOnly from '../utils/clientOnly'
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  margin-top: 40px;
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
`

const Content = styled.div`
  margin: 40px auto 0;
  max-width: 1100px;
  background: ${({ theme }) => theme.white_back};

  @media (max-width: 768px) {
    margin: 12px;
    max-width: 100%;
  }
`

const HeaderContainer = styled.div`
  margin-bottom: 20px;
  padding-bottom: 12px;
  text-align: center;
  border-bottom: 1px dashed  #eee;
`

const HeaderTitle = styled.p`
  font-size: 20px;
  line-height: 27px;
  color: ${({ theme }) => theme.term_title};
`

const HeaderVersion = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.term_text};
`

const HeaderVersionDate = styled.span`
  &:before {
    padding: 0 5px;
    color: ${({ theme }) => theme.agreement_border};
    content: "/";
  }
`

const Title = styled.p`
  margin: 0 0 10px;
  line-height: 1.5;
  font-size: 14px;
  color: ${({ theme }) => theme.term_text};
`

const Subtitle = styled.p`
  margin: 5px 0 10px;
  line-height: 25px;
  font-size: 18px;
  color: ${({ theme }) => theme.term_subtitle};
`

const CodePre = styled.pre`
  display: block;
  margin: 0 0 10px;
  padding: 9.5px;
  line-height: 1.5;
  font-size: 13px;
  color: ${({ theme }) => theme.black_333};
  background-color: ${({ theme }) => theme.agreement_back};
  border: ${({ theme }) => `1px solid ${theme.agreement_border}`};
  border-radius: 4px;
  word-break: break-all;
  word-wrap: break-word;

  code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border-radius: 0;
  }
`

const Warn = styled.p`
  margin: 0 0 10px;
  line-height: 1.5;
  font-size: 14px;
  color: ${({ theme }) => theme.term_subtitle};
`

const Team = styled.p`
  margin: 0 0 10px;
  padding: 11px 0 7px;
  font-size: 14px;
  color: #777;
  text-align: center;
  border-top: 1px solid #777;

  @media (max-width: 768px) {
    margin: 0 0 12px;
    font-size: 12px;
  }
`

const Term: NextPage = () => {
  const { t } = useTranslation();

  const arr = [
    {
      title: t('term.t_1'),
      code: t('term.code_1')
    },
    {
      title: t('term.t_2'),
      code: t('term.code_2')
    },
    {
      title: t('term.t_3'),
      code: t('term.code_3')
    },
    {
      title: t('term.t_4'),
      code: t('term.code_4')
    },
    {
      title: t('term.t_5'),
      code: t('term.code_5')
    },
    {
      title: t('term.t_6'),
      code: t('term.code_6')
    },
    {
      title: t('term.t_7'),
      code: t('term.code_7')
    },
    {
      title: t('term.t_8'),
      code: t('term.code_8')
    },
    {
      title: t('term.t_9'),
      code: t('term.code_9')
    },
    {
      title: t('term.t_10'),
      code: t('term.code_10')
    },
    {
      title: t('term.t_11'),
      code: t('term.code_11')
    },
  ]

  return (
    <>
      <NextSeo
        title="比特派用户服务协议"
        additionalMetaTags={[
          {
            name: 'keywords',
            content: '比特派用户服务协议'
          }
        ]} />
      <ClientOnly>
        <Container>
          <Content>
            <HeaderContainer>
              <HeaderTitle>{t('term.title')}</HeaderTitle>
              <HeaderVersion>{t('term.version')}<HeaderVersionDate>{t('term.version_date')}</HeaderVersionDate></HeaderVersion>
            </HeaderContainer>
            <Title>{t('term.p_1')}</Title>
            <Title>{t('term.p_2')}</Title>
            <Title>{t('term.p_3')}</Title>
            {
              arr.map((item, index) => {
                return <div key={index}><Subtitle>{item.title}</Subtitle><CodePre><code dangerouslySetInnerHTML={{__html: item.code}}></code></CodePre></div>
              })
            }
            <Warn>{t('term.warn')}</Warn>
            <Team>{t('term.team')}</Team>
          </Content>
        </Container>
      </ClientOnly>
    </>
  )
}

export default Term
