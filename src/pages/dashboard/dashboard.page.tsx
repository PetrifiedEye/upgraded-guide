import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getData } from "../../shared/utils/get-data";
import { Dashboard } from "../../components/dashboard";

const DashboardPage: React.FC = () => {
  const [data] = useState(() => getData());

  return (
    <SafeAreaView>
      <Dashboard data={data} />
    </SafeAreaView>
  );
};

export default DashboardPage;
