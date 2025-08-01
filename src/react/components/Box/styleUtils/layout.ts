import { CSSProperties } from "react";
import { pipe, removeProps, setPropValueFromPriority } from "@/utils";

export interface LayoutProps extends Pick<CSSProperties, 'display' | 'position' | 'justifyContent' | 'alignItems' | 'flexDirection' | 'flexWrap' | 'alignContent'> {
  bg?: CSSProperties['background']
}

export const getLayout = (props: { style: LayoutProps }) => {
    const style = pipe(
        setPropValueFromPriority('backgroundColor', ['backgroundColor', 'bg']),
    )({ ...props });

    const newProps = removeProps(['backgroundColor', 'bg'])(props as any);

    return { ...newProps, style: { ...style, ...props.style } };
}