type FontPropsType = {
    family?: string
    weight?: number
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Epilogue"};
    font-weight: ${weight || 200};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`