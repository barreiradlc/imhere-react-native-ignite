import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

type ParticipantProps = {
  name: string
}

function Participant({ name }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity
        style={styles.button}
      // onPress={handleParticipantAdd}
      >
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  )
}

export { Participant }
