import React, { ReactNode } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
interface LabelProps extends TextProps {
  children: ReactNode;
}
const Label: React.FC<LabelProps> = ({ children, style, ...props }) => {
  return (
    <Text style={(styles.label, style)} {...props}>
      {children}
    </Text>
  );
};
export default Label;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
