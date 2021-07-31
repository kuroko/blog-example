import { desktop, paragraph, styled, subdued, tabletUp } from "styles"

export const Container = styled.div`
  background: white;
  position: relative;
  z-index: 2;
`

export const Wrapper = styled.div`
  ${paragraph};

  background: white;
  margin: 2rem 8vw 7vw;
  padding-top: 0;
  position: relative;
  z-index: 2;

  ${tabletUp} {
    margin: 2rem 0 7vw;
    padding-left: 60px;
    padding-right: 60px;
  }

  ${desktop} {
    max-width: 108rem;
    margin: 2rem auto 86.2px;
  }

  > *:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  > * {
    max-width: 100%;

    ${tabletUp} {
      margin-left: calc(10vw - 60px);
      margin-right: calc(10vw - 60px);
    }

    ${desktop} {
      max-width: 76rem;
      margin-left: auto;
      margin-right: auto;
    }
  }

  > pre,
  > p > img[src$="#full"] {
    max-width: 96rem;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.clrForegroundL0};
    margin-top: 1em;
    margin-bottom: 1em;
  }

  blockquote,
  hr,
  img,
  ol,
  p,
  pre,
  ul {
    // This top/bottom margin should match line height.
    margin-top: 1.0625em;
    margin-bottom: 1.0625em;
  }

  blockquote {
    border-left: 1px solid ${props => props.theme.clrForegroundL4};
    font-style: italic;
    margin-inline-end: auto;
    margin-inline-start: auto;
    padding: 0 3rem;

    p {
      margin: 0;
      padding: 0;
    }
  }

  ul,
  ol {
    padding-left: 3rem;

    li {
      margin: 0;

      p {
        margin: 0 0 3rem;
        padding: 0;
      }
    }

    ul {
      margin: 0;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 3rem auto;
    border-radius: 3px;
  }

  iframe {
    display: block;
    margin: 3rem 0;
    max-width: 100%;
  }

  hr {
    background: ${props => props.theme.clrForegroundL4};
    border: none;
    height: 1px;
    margin: 3rem 0;
    width: auto;
  }

  mark {
    background: linear-gradient(to bottom, transparent 50%, rgba(167, 255, 235, 0.5) 0) center center/100% 100% no-repeat;
    color: ${props => props.theme.clrForegroundL0};
    position: relative;
  }

  pre {
    background: ${props => props.theme.clrBackgroundL2};
    border-radius: 3px;
    max-width: 96rem;
    width: 100%;
    overflow-x: auto;
    margin: 3rem 0;
  }

  code {
    background: ${props => props.theme.clrBackgroundL3};
    border-radius: 3px;
    color: ${props => props.theme.clrForegroundL0};
    padding: 0.2rem 0.5rem;
  }

  p {
    code {
      line-height: 1.7;
    }
  }

  pre {
    display: flex;
    align-items: stretch;

    code {
      flex: 1;
      display: block;
      background: inherit;
      color: inherit;
      margin: 0;
      padding: 3rem;
    }
  }

  small.caption {
    color: ${props => props.theme.clrForegroundL2};
    display: block;
    margin-bottom: 3rem;
    text-align: center;

    ${tabletUp} {
      margin-bottom: 5rem;
    }
  }

  strong {
    font-weight: bold;
  }

  // TODO: More https://github.com/seeruk/elliotdwright.com/blob/master/src/scss/components/PostContent.module.scss
`

export const Carousel = styled.div`
  padding: 50px 0;
  
  .swiper-pagination-bullet {
    background: ${props => props.theme.clrForegroundL4};
    opacity: 1;
  }
  
  .swiper-pagination-bullet-active {
    background: ${props => props.theme.clrPrimaryL4};
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${props => props.theme.clrPrimaryL4};
  }

  .swiper-button-prev {
    left: ${props => props.theme.sizeBase * 3}px;
  }

  .swiper-button-next {
    right: ${props => props.theme.sizeBase * 3}px;
  }

  .swiper-slide {
    transition: opacity 0.3s ease;
    float: left;
    height: 100%;
    width: auto !important;
    opacity: 0.3;
  }
  
  .swiper-slide-active {
    opacity: 1;
  }
`

export const CarouselSlide = styled.div`
  height: 400px;
  text-align: center;

  img {
    max-height: 400px !important;
  }
`

export const GalleryImage = styled.div`
  text-align: center;
  
  img {
    width: 100%;
    height: auto;
  }
`
