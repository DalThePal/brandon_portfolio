import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import media from 'styles/media'

import links from 'utils/links'

import useMedia from 'hooks/useMedia'

import { ReactComponent as LogoSVG } from 'images/logo.svg'
import BGDesktopIMG from 'images/background-desktop.jpg'
import BGTabletIMG from 'images/background-tablet.jpg'
import BGMobileIMG from 'images/background-mobile.jpg'

const Hero = () => {

  const background = useMedia(BGDesktopIMG, BGDesktopIMG, BGTabletIMG, BGMobileIMG)

  return (
    <Wrapper $background={background}>
      <Logo/>
      <Title>
        <Span>Something's</Span>
        <Span2>coming</Span2>
        <Span3>soon</Span3>
      </Title>
      <Text>
        The latest version of my portfolio is currently being built. Check back soon.
      </Text>
      <Footer>
        <Left>
          <Link href={links.dribble} target="_blank">Dribble</Link>
          <Link href={links.linkedin} target="_blank">Linkedin</Link>
        </Left>
        <Link href={`mailto:${links.email}`}>Contact</Link>
      </Footer>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  background-image: url(${props => props.$background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Logo = styled(LogoSVG)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: auto;

  top: 1.875vh;
  height: 11vh;

  ${media.tablet} {
    height: 6.44vh;
    top: 1.09vh;
  }

  ${media.mobile} {
    height: 10.83vh;
    top: 1.84vh;
  }
`

const Title = styled.h1`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);

  height: 74vh;

  ${media.tablet} {
    top: 42%;
    height: 43.33vh;
  }

  ${media.mobile} {
    top: 37%;
    height: 25.12vh;
  }
`

const Span = styled.span`
  position: absolute;
  font-family: 'Neue Montreal';
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  text-align: center;
  letter-spacing: -0.04em;
  color: ${colors.white};
  left: 50%;
  transform: translateX(-50%);
  top: 0;

  font-size: 30vh;

  ${media.tablet} {
    font-size: 17.56vh;
  }

  ${media.mobile} {
    font-size: 9.85vh;
  }
`

const Span2 = styled(Span)`
  font-family: 'Ogg';
  font-style: italic;
  color: ${colors.black};
  -webkit-text-stroke: 1px ${colors.white};

  top: 20.5vh;

  ${media.tablet} {
    top: 12vh;
  }

  ${media.mobile} {
    top: 7.14vh;
  }
`

const Span3 = styled(Span)`
  top: 41vh;

  ${media.tablet} {
    top: 24vh;
  }

  ${media.mobile} {
    top: 14.28vh;
  }
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  height: 12.125vh;
  padding: 5vh 2.78vw;

  ${media.tablet} {
    height: 10.61vh;
    padding: 4.09vh 3.91vw;
  }

  ${media.mobile} {
    height: 11.94vh;
    padding: 4.92vh 10.67vw;
    justify-content: center;
    gap: 13.33vw;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
  
  gap: 3.47vw;

  ${media.tablet} {
    gap: 3.66vh;
  }

  ${media.mobile} {
    gap: 13.33vw;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: ${colors.white};
  font-family: 'Neue Montreal';
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: -0.02em;
  cursor: pointer;

  font-size: 1.875vh;

  ${media.tablet} {
    font-size: 2.19vh;
  }

  ${media.mobile} {
    font-size: 1.84vh;
  }
`

const Text = styled.p`
  position: absolute;
  font-family: 'Neue Montreal';
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  text-align: center;
  color: ${colors.white};
  display: none;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;

  ${media.tablet} {
    display: flex;
    font-size: 2.19vh;
    top: 65.30vh;
    width: 60.06vw;
  }

  ${media.mobile} {
    display: flex;
    font-size: 2.77vh;
    top: 52.83vh;
    width: 81.87vw;
  }
`