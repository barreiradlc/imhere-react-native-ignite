import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',    
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: '#1F1E25',
    alignItems: "center",
    marginBottom: 10
  },
  name: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    marginLeft: 16
  },
  buttonText: {
    color: "#fff",
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    justifyContent: "center",
    alignItems: "center"
  },
})

export { styles };
