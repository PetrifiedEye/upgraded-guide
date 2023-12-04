import { PieChart as RNPieChart } from "react-native-gifted-charts";
import { PieItem } from "../../shared/types/data";
import { useTheme } from "styled-components/native";
import { useState } from "react";
import { Text } from "react-native";

interface PieChartProps {
  data: PieItem[];
  total: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, total }) => {
  const {
    colors: { white },
  } = useTheme();
  const [selectedPieItem, setSelectedPieItem] = useState<PieItem>();

  return (
    <RNPieChart
      data={data}
      donut
      showText
      textColor={white}
      radius={150}
      textSize={16}
      focusOnPress
      textBackgroundRadius={18}
      centerLabelComponent={() => {
        if (selectedPieItem) {
          return (
            <Text>
              {selectedPieItem.label} - {selectedPieItem.value}$
            </Text>
          );
        }
        return <Text>Total - {total}$</Text>;
      }}
      onPress={(item: PieItem) => {
        if (selectedPieItem?.label === item.label) {
          setSelectedPieItem(undefined);
          return;
        }
        setSelectedPieItem(item);
      }}
    />
  );
};

export default PieChart;
