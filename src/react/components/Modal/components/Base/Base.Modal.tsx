import {
  type FC,
  type PropsWithChildren,
  type ReactNode,
  useCallback,
  useEffect,
} from "react";

import { useModalContext } from "../../ModalProvider";

import styles from "./Base.module.css";
import { Card, Box, Text } from "@/react";

export interface Props extends PropsWithChildren {
  title?: ReactNode;
  onClose?: (close: () => void) => void;
}

const BaseModal: FC<Props> = ({ children, onClose, title, ...props }) => {
  const { dismiss: closeModal } = useModalContext();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const eventListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keyup", eventListener);

    return () => {
      window.removeEventListener("keyup", eventListener);
      document.body.style.overflow = "unset";
    };
  }, []);

  const innerClose = useCallback(() => {
    if (onClose) {
      onClose(closeModal);
    } else {
      closeModal();
    }
  }, [onClose, closeModal]);

  return (
    <Box className={styles.container}>
      <div className={styles.overlay} onClick={innerClose} />
      <Card className={styles.box} {...props}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text variant="h2">{title}</Text>
        </Box>
        <Box mt={3}>{children}</Box>
      </Card>
    </Box>
  );
};

export default BaseModal;
