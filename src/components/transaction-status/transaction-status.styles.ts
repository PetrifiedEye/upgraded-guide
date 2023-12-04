import styled from "styled-components/native";
import { TransactionStatusItem } from "./transaction-status.types";
import { FlatList } from "react-native";

type TransactionStatusLineProps = Pick<
  TransactionStatusItem,
  "color" | "percentage"
>;

export const TransactionStatusLine = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TransactionStatusLineText = styled.Text`
  font-size: 16px;
  padding: 10px;
`;

export const FillColorByPercentage = styled.View<TransactionStatusLineProps>`
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background-color: ${({ color }) => color};
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ percentage }) => percentage}%;
`;

export const List = styled(FlatList)`
  margin: 0 10px;
` as unknown as typeof FlatList;
