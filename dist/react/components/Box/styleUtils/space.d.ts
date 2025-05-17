type numbStr = number | string;
export interface MarginProps {
    margin?: numbStr;
    marginTop?: numbStr;
    marginRight?: numbStr;
    marginBottom?: numbStr;
    marginLeft?: numbStr;
    m?: numbStr;
    mt?: numbStr;
    mr?: numbStr;
    mb?: numbStr;
    ml?: numbStr;
    my?: numbStr;
    mx?: numbStr;
}
export declare const getMargin: (props: {
    style: MarginProps;
}) => {
    style: any;
};
export interface PaddingProps {
    padding?: numbStr;
    paddingTop?: numbStr;
    paddingRight?: numbStr;
    paddingBottom?: numbStr;
    paddingLeft?: numbStr;
    pt?: numbStr;
    pr?: numbStr;
    pb?: numbStr;
    pl?: numbStr;
    px?: numbStr;
    py?: numbStr;
    p?: numbStr;
}
export declare const getPadding: (props: {
    style: PaddingProps;
}) => {
    style: any;
};
export {};
