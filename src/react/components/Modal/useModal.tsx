import { type FC, useCallback } from "react";
import { useModalContext } from "./ModalProvider";

/**
 * Hook to control a modal.
 */

const useModal = (Component: FC, defaultProps?: any) => {
  const { render, isRendered, dismiss, update } = useModalContext();

  const open = useCallback(
    (props?: Record<string, unknown>) => {
      const mergeProps = Object.assign({}, defaultProps, props);
      render({
        ...mergeProps,
        children: <Component close={dismiss} {...mergeProps} />,
      });
    },
    [render, JSON.stringify(defaultProps), Component, dismiss]
  );

  return { open, close: dismiss, isOpen: isRendered, updateProps: update };
};

export default useModal;
