import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import UserAvatar from "react-native-user-avatar";
import DoctorCard from "./components/DoctorCard";
import EnfermedadHorizontal from "./components/EnfermedadHorizontal";
import LiveCard from "./components/LiveCard";
import ValuableContent from "./components/ValuableContent";

const image = { uri: "/assets/splash/support.png" };

export default function App() {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#E5E5E5", color: '#000000' }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title1}>Buenos dias, Joselin!</Text>
          <UserAvatar
            size={63}
            name="Avishay Bar"
            src="https://dummyimage.com/100x100/000/fff"
          />
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="Buscar doctores"
            placeholderTextColor="#979797"
          />
          <TouchableOpacity style={styles.search__action}>
            <Text>Ir</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} style={styles.enfermedades}>
          <EnfermedadHorizontal label={"Fiebre Alta"} />
          <EnfermedadHorizontal label={"Náuseas y vómitos"} />
          <EnfermedadHorizontal label={"Resfriado"} />
        </ScrollView>
        <ScrollView>
          <Text style={styles.title2}>Especialistas</Text>
          <ScrollView horizontal={true} style={styles.doctores}>
            <DoctorCard label="Cardiólogo" />
            <DoctorCard label="Endocrinólogo" />
            <DoctorCard label="Bariatras" />
          </ScrollView>
          <Text style={styles.title2}>Expertos en vivo</Text>
          <LiveCard
            title="Importancia del ejercicio en tiempos de COVID-19"
            subtitle="En vivo con el Dr. Ramón Martinez"
            image={"/assets/splash/support.png"}
          />
          <Text style={styles.title2}>Contenido de Valor</Text>
          <ScrollView horizontal={true} style={styles.contenido__valioso}>
            <ValuableContent label={"¿Cómo tener una mejor alimentación?"} />
            <ValuableContent
              label={"¿Por qué monitoriar mis signos vitales?"}
            />
          </ScrollView>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#E5E5E5",
  },
  text: {
    fontSize: "25px",
    color: "#FFFFFF",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 63,
    width: "100%",
  },
  avatar: {
    width: 63,
    height: 63,
  },
  title1: {
    fontSize: 24,
    color: "#1B3B66D9",
  },
  title2: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 27,
    marginTop: 24,
  },
  title3: {
    fontSize: 20,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 41,
    marginHorizontal: 26,
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  search__text: {
    fontSize: 17,
    color: "#979797",
    marginLeft: 12,
  },
  search__action: {
    backgroundColor: "#ABB0BC",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    color: "#000",
    width: 41,
    height: 26,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  enfermedades: {
    marginLeft: 18,
    marginTop: 20,
    overflow: "scroll",
  },
  doctores: {
    marginLeft: 12,
    marginTop: 20,
    overflow: "scroll",
  },
  contenido__valioso: {
    marginLeft: 12,
    marginTop: 11,
    overflow: "scroll",
    marginBottom: 20,
  },
});
