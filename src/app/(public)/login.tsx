import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";

export default function Login() {
  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.overlay}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.form}>
          <TextInput
            placeholder="Digite seu telefone (apenas números)"
            placeholderTextColor="#666"
            keyboardType="number-pad"
            style={styles.input}
          />

          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#666"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 170,
    height: 170,
    marginTop: 120,
    marginBottom: 40,
  },

  form: {
    width: "100%",
  },

  input: {
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 17,
    fontFamily: "Inter",
    marginBottom: 10,
    color: "#000",
  },

  button: {
    backgroundColor: "#ED5514",
    height: 50,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Inter",
  },
});