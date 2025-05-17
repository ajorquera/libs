import { CSSProperties } from 'react';
export interface LayoutProps extends Pick<CSSProperties, 'display' | 'position'> {
    bg?: CSSProperties['background'];
}
export declare const getLayout: (props: {
    style: LayoutProps;
}) => {
    style: any;
};
