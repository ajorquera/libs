import { FC } from "react";
import Box, { BoxProps } from "../Box";
import styles from "./Card.module.css";

export interface Props extends BoxProps {}

const Card: FC<Props> = (props) => (
  <Box {...props} className={[styles.Card, props.className].join(" ")} />
);

export default Card;
