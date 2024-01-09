import { View, Text, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/header'
import { useNavigation } from '@react-navigation/native';
import { colors, typography } from '../../theme';
import Transactions from '../../components/transactions';

const AccountDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 16,
      backgroundColor: 'white'
    }}>
      <Header
        title="Account"
        rightIcon={
          <Pressable onPress={() => navigation.navigate("AddAccount", {
            type: 'edit'
          })}>
            <Feather name="edit-2" size={24} color="black" />
          </Pressable>
        }
      />
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 64 }}>
        <View style={{
          backgroundColor: colors['indigo-100'],
          padding: 16,
          borderRadius: 20
        }}>
          <Image style={{ width: 30, height: 30 }} source={require('../../assets/scotia.png')} />
        </View>
        <Text style={[ { marginTop: 8 }, typography['text-xl'] ]}>Scotiabank</Text>
        <Text style={[ { marginTop: 8 }, typography['text-4xl'], typography['font-semibold'] ]}>$9400</Text>
      </View>
      <View>
        <Transactions />
      </View>
    </SafeAreaView>
  )
}

export default AccountDetailScreen