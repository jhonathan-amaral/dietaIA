import { colors } from "@/constants/colors";
import { Controller } from "react-hook-form";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  type KeyboardTypeOptions,
} from "react-native";

interface InputProps {
  name: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
  keyboardType: KeyboardTypeOptions;
}

export function Input({
  name,
  placeholder,
  control,
  rules,
  error,
  keyboardType,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
            keyboardType={keyboardType}
          />
        )}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    height: 44,
    backgroundColor: colors.white,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  errorText: {
    color: "red",
    marginTop: 4,
  },
});
