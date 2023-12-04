import { DataItem } from "../../shared/types/data";
import * as Styled from "./dashboard.styles";

interface DashboardProps {
  data: DataItem[];
  scroll?: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ data, scroll = true }) => {
  return (
    <Styled.List
      data={data}
      scrollEnabled={scroll}
      ListHeaderComponent={
        <>
          <Styled.ItemContainer>
            <Styled.ItemText>Date</Styled.ItemText>

            <Styled.ItemText>Amount</Styled.ItemText>
            <Styled.ItemText>Issuer</Styled.ItemText>
            <Styled.ItemText>Passed</Styled.ItemText>
            <Styled.ItemText>Status</Styled.ItemText>
          </Styled.ItemContainer>
        </>
      }
      renderItem={({ item: { amount, date, issuer, recipe, state } }) => {
        return (
          <Styled.ItemContainer>
            <Styled.ItemText>{date}</Styled.ItemText>

            <Styled.ItemText>{amount}</Styled.ItemText>
            <Styled.ItemText>{issuer}</Styled.ItemText>
            <Styled.ItemText>{recipe}</Styled.ItemText>
            <Styled.StateItem state={state}>{state}</Styled.StateItem>
          </Styled.ItemContainer>
        );
      }}
    />
  );
};

export default Dashboard;
