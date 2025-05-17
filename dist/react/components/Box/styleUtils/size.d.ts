type numbStr = number | string;
export interface SizeProps {
    width?: numbStr;
    w?: numbStr;
    height?: numbStr;
    h?: numbStr;
    minWidth?: numbStr;
    minW?: numbStr;
    minH?: numbStr;
    minHeight?: numbStr;
    top?: numbStr;
    bottom?: numbStr;
    left?: numbStr;
    right?: numbStr;
    maxWidth?: numbStr;
    maxH?: numbStr;
    maxW?: numbStr;
    maxHeight?: numbStr;
}
export declare const getSize: (props: {
    style: SizeProps;
}) => {
    style: any;
};
export {};
