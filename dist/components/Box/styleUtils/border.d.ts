import { CSSProperties } from 'react';
export interface BorderProps {
    border?: CSSProperties['border'];
    borderTop?: CSSProperties['borderTop'];
    borderRight?: CSSProperties['borderRight'];
    borderBottom?: CSSProperties['borderBottom'];
    borderLeft?: CSSProperties['borderLeft'];
    borderY?: CSSProperties['borderTop'];
    borderX?: CSSProperties['borderRight'];
    borderRadius?: CSSProperties['borderRadius'];
    borderWidth?: CSSProperties['borderWidth'];
    borderStyle?: CSSProperties['borderStyle'];
    borderColor?: CSSProperties['borderColor'];
}
export declare const getBorder: (props: {
    style: BorderProps;
}) => {
    style: any;
};
