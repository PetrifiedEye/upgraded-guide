import styled from "styled-components/native";
import { State } from "../../shared/types/data";
import { FlatList } from "react-native";

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;

export const StateItem = styled.Text<{ state: State }>`
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme, state }) => {
    switch (state) {
      case "open":
        return theme.colors.stateOpen;
      case "rejected":
        return theme.colors.stateRejected;
      case "overdue":
        return theme.colors.stateOverdue;
      default:
        return theme.colors.stateOpen;
    }
  }};
  font-size: 16px;
`;

export const ItemText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`;

export const List = styled(FlatList)`` as unknown as typeof FlatList;
