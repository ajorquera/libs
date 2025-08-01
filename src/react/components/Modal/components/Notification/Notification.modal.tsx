import { FC, PropsWithChildren } from "react";

import { Box, Button } from "@/react";

interface Props extends PropsWithChildren {
  onClose?: () => void;
  close?: () => void;
}

const ConfirmationModal: FC<Props> = ({ children, onClose, close }) => {
  return (
    <>
      {children}
      <Box display="flex" justifyContent="end" mt={3}>
        <Button
          onClick={() => {
            onClose?.();
            close?.();
          }}
        >
          OK
        </Button>
      </Box>
    </>
  );
};

export default ConfirmationModal;
