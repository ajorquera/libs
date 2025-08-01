import { CSSProperties } from 'react';
export interface LayoutProps extends Pick<CSSProperties, 'display' | 'position' | 'justifyContent' | 'alignItems' | 'flexDirection' | 'flexWrap' | 'alignContent'> {
    bg?: CSSProperties['background'];
}
export declare const getLayout: (props: {
    style: LayoutProps;
}) => {
    style: any;
};
