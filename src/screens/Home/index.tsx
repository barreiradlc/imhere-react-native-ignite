import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Participant } from "../../components/Participant"
import { styles } from "./styles"

function Home() {
  const participants = ["Besourinho", "Rodolfo", "Julin", "Arnaldo", "Leopoldo", "Marlom", "Gertrudina", "Rato Túlio", "Claudio", "Betino", "Pescoço", "Costela", "Ronaldo"]

  function handleParticipantAdd() {
    console.debug("ADD!")
  }
  function handleParticipantRemove(name: string) {
    console.debug(`REMOVE! ${name}`)
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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant onRemove={handleParticipantRemove} name={item} key={`${item}-${new Date().toTimeString()}`} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou ainda? Adicione participantes a lista</Text>
        )}
      />      

    </View> 
  )
}


export { Home }
