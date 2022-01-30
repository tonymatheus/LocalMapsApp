import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  headerContainer: {
    padding: 20,
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "#322153",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#6c6c80",
  },
  MapContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 450,
    height: 300,
  },
  categoriesConteiner: {
    padding: 10,
  },
  categoryItem: {
    height: 128,
    backgroundColor: "#f0f0f5",
    alignItems: "center",
    justifyContent: "center",
    width: 135,
    borderRadius: 20,
    margin: 5,
  },
  btnTitle: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    color: "#6c6c80",
  },
  image: {
    width: 50,
    height: 50,
  },
});
