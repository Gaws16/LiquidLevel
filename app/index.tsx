import App from "@/components/pages/App";

import { PaperProvider } from "react-native-paper";

export default function Index() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
