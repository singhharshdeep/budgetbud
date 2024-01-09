import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/header'
import theme, { colors, typography } from '../../theme'
import Button from '../../components/util/button';
import { accounts } from '../../mocks';

const AccountSettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{
      padding: 16,
      flex: 1,
      backgroundColor: 'white'
    }}>
      <Header title="Account" />
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        padding: 56
      }}>
        <Text style={{ color: colors['gray-400'] }}>Account Balance</Text>
        <Text style={[
          typography['text-5xl']
        ]}>$9400</Text>
      </View>
      <FlatList
        data={accounts}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("AccountDetail", {
                id: item.id
              })}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <View style={{
                  backgroundColor: colors['gray-200'],
                  padding: 16,
                  borderRadius: 20
                }}>
                  {item.icon}
                </View>
                <Text style={[{ marginLeft: 16 }, typography['text-xl']]}>{item.name}</Text>
              </View>
              <Text style={[{ marginRight: 16 }, typography['text-xl']]}>${item.balance}</Text>
            </TouchableOpacity>
            {(index + 1) !== accounts.length && <View style={{ borderWidth: 1, marginVertical: 16, borderColor: colors['gray-200'] }} />}
          </View>
        )}
      />
      <View>
        <Button onPress={() => navigation.navigate("AddAccount", { type: 'new' })} primary title="Add new account" />
      </View>
    </SafeAreaView>
  )
}

export default AccountSettingsScreen