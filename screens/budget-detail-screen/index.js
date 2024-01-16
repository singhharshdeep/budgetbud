import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Entypo } from '@expo/vector-icons';

import Header from '../../components/header'
import { colors, typography } from '../../theme';
import Button from '../../components/util/button';
import { useNavigation } from '@react-navigation/native';

const BudgetDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white',
      padding: 16
    }}>
      <View style={{
        flex: 1
      }}>
        <Header
          title='Budget Detail'
          rightIcon={
            <Pressable>
              <AntDesign name="delete" size={24} color="black" />
            </Pressable>
          }
        />
        <View style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <View style={{
            flexDirection: 'row',
            marginTop: 16,
            borderWidth: 1,
            borderColor: colors['gray-200'],
            padding: 16,
            backgroundColor: colors['gray-50'],
            borderRadius: 20,
            alignItems: 'center'
          }}>
            <Entypo name="shopping-bag" size={24} color={colors["yellow-400"]} />
            <Text>Shopping</Text>
          </View>
          <View style={{
            marginTop: 36,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={typography['text-3xl']}>Remaining</Text>
            <Text style={typography['text-7xl']}>$0</Text>
          </View>
          <View style={{
            marginTop: 16,
            height: 16,
            width: '100%',
            backgroundColor: colors["gray-200"],
            borderRadius: 10
          }}>
            <View style={{
              height: 16,
              width: `100%`,
              backgroundColor: 'orange',
              borderRadius: 10
            }}>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: 'red',
            borderRadius: 30,
            marginTop: 32,
            paddingHorizontal: 16,
            paddingVertical: 8,
            alignItems: 'center'
          }}>
            <AntDesign name="exclamationcircleo" size={24} color="white" />
            <Text style={[{
              color: 'white',
              marginLeft: 8
            }]}>You've exceeded the limit</Text>
          </View>
        </View>
      </View>
        <Button primary title='Edit' onPress={() => navigation.navigate('AddBudget')} />
    </SafeAreaView>
  )
}

export default BudgetDetailScreen