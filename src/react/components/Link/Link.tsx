import {FC, HTMLAttributes, PropsWithChildren} from 'react';

export interface Props extends PropsWithChildren, HTMLAttributes<HTMLAnchorElement> {
    component: FC<PropsWithChildren>;
    native?: boolean;
}

const Link: FC<Props> = ({children, native, component:Component, ...props}) => {
    const InnerComponent = (!Component || native) ? 'a' : Component || 'a';

    return (
        <InnerComponent {...props}>
            {children}
        </InnerComponent>
    ); 
};

export default Link;