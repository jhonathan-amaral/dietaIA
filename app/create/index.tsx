import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { colors } from "@/constants/colors";
import { Header } from "@/components/header/header";
import { Select } from "@/components/input/select";
import { router } from "expo-router";
import { useDataStore } from "@/store/data";

const schema = z.object({
  gender: z.string().min(1, { message: "Sexo é obrigatório" }),
  objective: z.string().min(1, { message: "O objetivo é obrigatório" }),
  level: z.string().min(1, { message: "O level é obrigatório" }),
});

type FormData = z.infer<typeof schema>;

export default function Create() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const genderOptions = [
    {
      label: "Masculino",
      value: "masculino",
    },
    {
      label: "Feminino",
      value: "feminino",
    },
  ];
  const levelOptions = [
    {
      label: "Sedentário (pouco ou nenhuma atividade física ) ",
      value: "sedentário",
    },
    {
      label: "Levemente ativo (exercícios 1 a 3 vezes na semana)",
      value: "Levemente ativo (exercícios 1 a 3 vezes na semana)",
    },
    {
      label: "Moderadamente ativo (exercícios 3 a 5 vezes na semana)",
      value: "Moderadamente ativo (exercícios 3 a 5 vezes na semana)",
    },
    {
      label: "Altamente ativo (exercícios 5 a 7 dia por semana)",
      value: "Altamente ativo (exercícios 5 a 7 dia por semana )",
    },
  ];

  const objectiveOptions = [
    {
      label: "Emagrecer",
      value: "emagrecer",
    },
    {
      label: "Hipertrofia",
      value: "hipertrofia",
    },
    {
      label: "Hipertrofia + Definição",
      value: "Hipertrofia + Definição",
    },
    {
      label: "Definição",
      value: "Definição",
    },
  ];

  const setPageTwo = useDataStore((state) => state.setPageTwo);
  function handleCreate(data: FormData) {
    setPageTwo({
      level: data.level,
      objective: data.objective,
      gender: data.gender,
    });
    router.push("/nutrition");
  }
  return (
    <View style={styles.container}>
      <Header step="Passo 2" title="Finalizando dieta" />

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Sexo:</Text>
        <Select
          control={control}
          name="gender"
          placeholder="Selecione o seu sexo "
          error={errors.gender?.message}
          options={genderOptions}
        />
        <Text style={styles.label}>Selecione nível de atividade física:</Text>
        <Select
          control={control}
          name="level"
          placeholder="Selecione seu nível de atividade física"
          options={levelOptions}
          error={errors.level?.message}
        />
        <Text style={styles.label}>Selecione seu objetivo</Text>
        <Select
          control={control}
          name="objective"
          placeholder="Selecione seu objetivo"
          error={errors.objective?.message}
          options={objectiveOptions}
        />
        <Pressable style={styles.button} onPress={handleSubmit(handleCreate)}>
          <Text style={styles.buttonText}>Gerar dieta</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  label: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    height: 40,
    backgroundColor: colors.blue,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    padding: 8,
  },
});
