import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

type ParticipantProps = {
  id: string
  name: string
  onRemove: (id: string) => void
}

function Participant({ id, name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onRemove(id)}
      >
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View> 
  )
}

export { Participant }
