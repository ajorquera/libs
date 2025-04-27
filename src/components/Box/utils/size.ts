import { numbStr } from '@/interfaces';
import { pipe, removeProps, setPropValueFromPriority } from '@/utils';

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

export const getSize = (props: { style: SizeProps }) => {
    const style = pipe(
        setPropValueFromPriority('width', ['width', 'w']),
        setPropValueFromPriority('height', ['height', 'h']),
        setPropValueFromPriority('minWidth', ['minWidth', 'minW']),
        setPropValueFromPriority('minHeight', ['minHeight', 'minH'])
    )({ ...props });

    const newProps = removeProps(['width', 'height', 'minWidth', 'minHeight'])(props as any);

    return { ...newProps, style: { ...props.style, ...style } };
}