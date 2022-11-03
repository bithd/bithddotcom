import type { NextPage } from 'next'
import styled from 'styled-components'
import { NextSeo } from 'next-seo';
import { PCHeader } from '../components/header/pc_header';
import { Footer } from '../components/footer/footer';
import ClientOnly from '../utils/clientOnly'
import { MobiveHeader } from '../components/header/mobile_header';
import { useTranslation } from 'react-i18next';
import { isCN } from '../utils/utils';

const Container = styled.div`
  margin-top: 104px;
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

const Title = styled.p`
  margin: 20px 0;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Text = styled.p`
  margin: 0 0 24px;
  line-height: 24px;
  font-size: 16px;

  @media (max-width: 768px) {
    margin: 0 0 12px;
    font-size: 12px;
  }
`

const SubtitleContainer = styled.ul`
  margin: 0 0 24px 0;
  padding: 0;
  list-style: disc;
  line-height: 24px;
  list-style-position: inside;

  @media (max-width: 768px) {
    margin: 0 0 12px 0;
  }
`

const SubtitleContent = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.black_333};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Img = styled.img`
  margin: 0 25% 12px;
  width: 50%;
`

const LinkA = styled.a`
  color: ${({ theme }) => theme.video_link};
  text-decoration: none;
  cursor: pointer;
`

const USDT: NextPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <NextSeo
        title="USDT 矿工费代付功能"
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'USDT 矿工费代付功能'
          }
        ]} />
      <ClientOnly>
        <PCHeader active='usdt' />
        <MobiveHeader />
        <Container>
          <Content>
            <Title>{t('usdt.title')}</Title>
            <Text>{t('usdt.subtitle')}</Text>
            <SubtitleContainer>
              <SubtitleContent>{t('usdt.subtitle1')}</SubtitleContent>
              <SubtitleContent>{t('usdt.subtitle2')}</SubtitleContent>
              <SubtitleContent>{t('usdt.subtitle3')}</SubtitleContent>
            </SubtitleContainer>
            <Text>{t('usdt.p_1')}</Text>
            <Text>{t('usdt.p_2')}</Text>
            <Text>{t('usdt.p_3')}</Text>
            <Text>{t('usdt.p_4')}</Text>
            <Text>{t('usdt.p_5')}</Text>
            <Img src={isCN(i18n.language) ? '/images/pay_miner_fee_1.jpg' : '/images/pay_miner_fee_1_en.jpg'} alt='miner fee 1' />
            <Img src={isCN(i18n.language) ? '/images/pay_miner_fee_2.jpg' : '/images/pay_miner_fee_2_en.jpg'} alt='picture 2' />
            <Text>{t('usdt.link_1')}<LinkA href='https://v.qq.com/x/page/a325377sh38.html' rel='nofollow noopener noreferrer' target='_blank'>https://v.qq.com/x/page/a325377sh38.html</LinkA></Text>
            <Text>{t('usdt.link_2')}<LinkA href='https://v.qq.com/x/page/u32535clb5z.html' rel='nofollow noopener noreferrer' target='_blank'>https://v.qq.com/x/page/u32535clb5z.html</LinkA></Text>
          </Content>
        </Container>
        <Footer router='usdt' />
      </ClientOnly>
    </>
  )
}

export default USDT
