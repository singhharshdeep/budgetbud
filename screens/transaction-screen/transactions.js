import { View, Text, SectionList } from 'react-native'

import { transactions } from '../../mocks';
import TransactionCard from '../../components/transaction-card';
import { typography } from '../../theme';

const Transactions = () => {
  const allTransactions = [
    {
      title: 'Today',
      data: transactions
    },
    {
      title: 'Yesterday',
      data: transactions
    }
  ];
  return (
    <View style={{
      marginTop: 16
    }}>
      <SectionList
        sections={allTransactions}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <TransactionCard item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ marginTop: 16 }}>
          <Text style={typography['text-2xl']}>{title}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default Transactions