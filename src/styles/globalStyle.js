import { createGlobalStyle, css } from "styled-components";


export const GlobalStyle = createGlobalStyle`

:root{
    --colorPrimary: #27AE60;
    --colorSecondary: #EB5757;
    --grey1: #333333;
    --grey2: #828282;
    --grey3: #E0E0E0;
    --grey4: #F5F5F5;

    --sizeLogo1:40px;
    --sizeLogo2:20px;
    --size1:18px;
    --size1:16px;
    --size3:14px;
    --size4:12px;

    --lineHeight1: 34px;
    --lineHeight2: 28px;
    --lineHeight3: 24px;
    --lineHeight4: 17px;

    --fontWeight1: 900;
    --fontWeight2: 700;
    --fontWeight3: 600;
    --fontWeight4: 400;
}
`
export const fontH2 = css`
    font-size: var(--size1);
    font-weight: var(--fontWeight2);
    line-height: var(--lineHeight3);
`

export const fontParagraph = css`
    font-size: var(--size4);
    font-weight: var(--fontWeight4);
    line-height: var(--lineHeight4);
`

export const fontParagraphBold = css`
    font-size: var(--size3);
    font-weight: var(--fontWeight3);
    line-height: var(--lineHeight3);
`

export const fontPlaceholder = css`
    font-size: var(--size2);
    font-weight: var(--fontWeight4);
    line-height: var(--lineHeight4);
`

export const fontButton = css`
    font-size: var(--size2);
    font-weight: var(--fontWeight3);
    line-height: var(--lineHeight4);
`

export const fontLogoPart1 = css`
    font-size: var(--sizeLogo1);
    font-weight: var(--fontWeight1);
    line-height: var(--lineHeight1);
    color: var(--grey1);
`

export const fontLogoPart2 = css`
    font-size: var(--sizeLogo2);
    font-weight: var(--fontWeight1);
    line-height: var(--lineHeight1);
    color: var(--colorSecondary);
`