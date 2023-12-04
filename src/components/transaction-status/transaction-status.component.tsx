import { TransactionStatusProps } from "./transaction-status.types";
import * as Styled from "./transaction-status.styles";

const TransactionState: React.FC<TransactionStatusProps> = ({ data }) => {
  return (
    <Styled.List
      data={data}
      scrollEnabled={false}
      renderItem={({ item: { color, label, percentage, value } }) => {
        return (
          <Styled.TransactionStatusLine>
            <Styled.FillColorByPercentage
              percentage={percentage}
              color={color}
            />
            <Styled.TransactionStatusLineText>
              {label}
            </Styled.TransactionStatusLineText>
            <Styled.TransactionStatusLineText>
              {value}
            </Styled.TransactionStatusLineText>
          </Styled.TransactionStatusLine>
        );
      }}
    />
  );
};

export default TransactionState;
