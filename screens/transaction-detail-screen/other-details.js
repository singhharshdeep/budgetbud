import {
  View,
  Text,
  Image,
  ScrollView
} from "react-native";

import { colors, typography } from "../../theme";

const OtherDetails = () => {
  return (
    <ScrollView style={{
      padding: 16
    }}>
      <View>
        <Text style={[
          { color: colors["gray-500"] },
          typography["text-lg"]
        ]}>Description</Text>
        <Text style={[{
          marginTop: 16
        },
        typography["text-lg"]
        ]}>Duis et sunt adipisicing quis. Ullamco mollit do deserunt dolor ex sunt amet nostrud eiusmod non minim tempor. Dolore do eiusmod pariatur qui voluptate laborum ea reprehenderit.</Text>
      </View>
      <View style={{
        marginTop: 32
      }}>
        <Text style={[
          { color: colors["gray-500"] },
          typography["text-lg"]
        ]}>Attachment</Text>
        <Image
          style={{
            marginTop: 16,
            borderRadius: 20,
            objectFit: 'contain',
            width: '100%',
            height: '100%'
          }}
          source={require('../../assets/receipt.webp')}
        />
      </View>
    </ScrollView>
  )
}

export default OtherDetails