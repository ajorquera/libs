import { type PropsWithChildren, type FC } from "react";
import BaseModal from "./components/Base";
import createRenderProvider from "@/react/utils/createRenderProvider";

const { Provider, useContext } = createRenderProvider();

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider component={BaseModal}>{children}</Provider>;
};

export default ModalProvider;
export { useContext as useModalContext };
