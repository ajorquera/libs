import { MarginProps, PaddingProps, SizeProps, BorderProps, LayoutProps } from './styleUtils';
import { CSSProperties, ElementType, EventHandler, FC, MouseEvent, PropsWithChildren } from 'react';
export interface Props extends PropsWithChildren, MarginProps, PaddingProps, SizeProps, BorderProps, LayoutProps {
    style?: CSSProperties;
    display?: CSSProperties['display'];
    as?: ElementType;
    className?: string;
    onClick?: EventHandler<MouseEvent>;
}
declare const Box: FC<Props>;
export default Box;
