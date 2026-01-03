import {FC, HTMLAttributes, PropsWithChildren} from 'react';

export interface Props extends PropsWithChildren, HTMLAttributes<HTMLAnchorElement> {
    as?: FC<PropsWithChildren> | string;
    native?: boolean;
}

const Link: FC<Props> = ({children, native, as:Component, ...props}) => {
    const InnerComponent = native ? 'a' : (Component || 'a');

    return (
        <InnerComponent {...props}>
            {children}
        </InnerComponent>
    ); 
};

export default Link;