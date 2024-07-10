import axios from "axios"
import { useEffect, useState } from "react"
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Participant } from "../../components/Participant"
import { styles } from "./styles"

const API_URL = "http://localhost:3000/participants"

type ParticipantType = {
  name: string
  id: string
}

function Home() {
  const [participants, setParticipants] = useState<ParticipantType[]>()
  const [participantName, setParticipantName] = useState("")  


  useEffect(() => {
    refreshListOfParticipants()
  }, [])

  async function refreshListOfParticipants() {
    try {
      const { data } = await axios.get(API_URL);
      setParticipants(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function handleParticipantAdd() {
    const nameAlreadyRegistered = participants?.some(({ name }) => name === participantName)
    if (nameAlreadyRegistered) {
      return Alert.alert("Participante existente", "Participante previamente cadastrado!",)
    }

    try {
      await axios.post(API_URL, { name: participantName })
      refreshListOfParticipants()
    } catch (error) {

    }

  }

  function handleParticipantRemove(id: string) {
    Alert.alert("Remover", `Remover participante?`, [
      {
        text: "Sim",
        onPress: async () => {
          await axios.delete(`${API_URL}/${id}`);
          Alert.alert("Deletado")
          refreshListOfParticipants()
        }
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
    console.debug(`REMOVE! ${id}`)
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
          value={participantName}
          onChangeText={setParticipantName}
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
        keyExtractor={item => item.id}
        renderItem={({ item: { name, id } }) => (
          <Participant id={id} onRemove={handleParticipantRemove} name={name} key={`${name}-${new Date().toTimeString()}`} />
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
