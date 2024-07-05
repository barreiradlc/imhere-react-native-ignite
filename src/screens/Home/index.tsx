import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { Participant } from "../../components/Participant"
import { styles } from "./styles"

function Home() {
  function handleParticipantAdd() {
    console.debug("ADD!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sext, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>

        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Rodolfo" />
      <Participant name="Julin" />
      <Participant name="Arnaldo" />
    </View>
  )
}


export { Home }
