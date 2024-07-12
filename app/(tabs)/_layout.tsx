import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Index" options={{ title: "Index" }} />
      <Tabs.Screen name="Explore" options={{ title: "Explore" }} />
    </Tabs>
  );
}
