import { Text, View } from "react-native";
import { LineChart as RNLineChart } from "react-native-gifted-charts";
import { DateLabel } from "../date-label";
import { useTheme } from "styled-components/native";
import { useDateExpenses } from "../../shared/hooks/use-date-expenses";
import { LineChartItem } from "../../shared/types/data";

interface LneChartProps {
  data: LineChartItem[];
  maxValue: number;
}

const LneChart: React.FC<LneChartProps> = ({ data, maxValue }) => {
  const {
    colors: { background, primary, primaryOpacity025, primaryOpacity050 },
  } = useTheme();

  return (
    <View style={{ flex: 1, paddingVertical: 20 }}>
      <RNLineChart
        width={300}
        height={300}
        rotateLabel
        thickness={6}
        color={primary}
        maxValue={maxValue}
        noOfSections={4}
        areaChart
        yAxisTextStyle={{ color: "lightgray" }}
        data={data}
        curved
        startFillColor={primaryOpacity025}
        endFillColor={primaryOpacity025}
        startOpacity={0.3}
        endOpacity={0.1}
        spacing={38}
        backgroundColor={background}
        rulesColor="gray"
        rulesType="solid"
        initialSpacing={20}
        yAxisColor="lightgray"
        xAxisColor="lightgray"
      />
    </View>
  );
};

export default LneChart;
