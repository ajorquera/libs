import {
  type FC,
  type PropsWithChildren,
  useContext as useReactContext,
  createContext,
  useCallback,
  useId,
  useState,
} from "react";
import { createPortal } from "react-dom";

type Obj = Record<string, unknown>;

export interface ContextProps {
  isRendered: boolean;
  render: (props: Obj) => void;
  dismiss: () => void;
  update: (props: Obj) => void;
}

interface Props extends PropsWithChildren {
  component: FC<any>;
  dom?: HTMLElement;
  defaultProps?: Obj;
}

/**
 * Provider rendering components in the application. We assume that the properties
 * have a single level of depth.
 */
const createRenderNodeProvider = () => {
  const context = createContext<ContextProps>({
    isRendered: false,
    render: () => {},
    dismiss: () => {},
    update: () => {},
  });

  const Provider: FC<Props> = ({
    children,
    dom,
    component: Component,
    defaultProps,
  }) => {
    const id = useId();
    const [isRendered, setIsRendered] = useState(false);
    const [props, setProps] = useState(defaultProps ?? {});

    const render = useCallback(
      (props: any) => {
        props && setProps({ ...props, ...defaultProps });
        setIsRendered(true);
      },
      [setProps, setIsRendered, defaultProps]
    );

    const dismiss = useCallback(() => {
      setIsRendered(false);
    }, [setIsRendered]);

    const update = useCallback(
      (newProps: any) => {
        setProps({ ...props, ...newProps });
      },
      [setProps, props]
    );

    return (
      <context.Provider value={{ render, isRendered, dismiss, update }}>
        {isRendered &&
          createPortal(<Component id={id} {...props} />, dom ?? document.body)}
        {children}
      </context.Provider>
    );
  };

  const useContext = () => useReactContext<ContextProps>(context);

  return { Provider, useContext };
};

export default createRenderNodeProvider;
