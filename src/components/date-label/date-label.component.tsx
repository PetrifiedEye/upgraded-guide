import { Text, View } from "react-native";

interface DateLabelProps {
  date: string;
}

const DateLabel: React.FC<DateLabelProps> = ({ date }) => {
  return (
    <View style={{ width: 70, marginLeft: 7 }}>
      <Text>{date}</Text>
    </View>
  );
};

export default DateLabel;
