import styled from "styled-components/native";

export const ScrollContainer = styled.ScrollView`
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
`;

export const AlignEnd = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const TouchableText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  padding: 10px;
`;

export const Space = styled.View<{ value?: number }>`
  height: ${({ value }) => value || 10}px;
`;
