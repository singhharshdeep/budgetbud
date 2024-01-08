import { useState } from "react";
import { View, Text, Switch } from "react-native";

import DetailEntry from "../../components/detail-entry";
import FilePicker from "../../components/util/file-picker";
import Picker from "../../components/util/picker";
import Input from "../../components/util/text-input";
import { accountTypes, categories } from "../../mocks";
import theme, { colors, typography } from "../../theme";
import { capitalize } from "../../util";
import RepeatExpense from "./repeat-expense";

const AddTransactionScreen = ({ route }) => {
  const [category, setCategory] = useState(null);
  const [accountType, setAccountType] = useState(null);

  const { type } = route.params;

  return (
    <DetailEntry
      title={capitalize(type)}
      balanceLabel="How much?"
      flexValue={9}
      backgroundColor={
        type === "income" ? colors["green-700"] : colors["red-700"]
      }
      onButtonPress={() => {}}
    >
      <Picker
        selectedValue={category}
        onValueChange={setCategory}
        options={categories}
        placeholder="Category"
        containerStyle={{
          marginTop: 16,
        }}
      />
      <Input placeholder="Description" styles={{ marginTop: 16 }} />
      <Picker
        selectedValue={accountType}
        onValueChange={setAccountType}
        options={accountTypes}
        placeholder="Account"
        containerStyle={{
          marginTop: 16,
        }}
      />
      <FilePicker containerStyle={{ marginTop: 16 }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 16,
          marginTop: 16,
        }}
      >
        <View>
          <Text style={typography["text-lg"]}>Repeat</Text>
          <Text style={{ color: colors["gray-400"] }}>Repeat Transaction</Text>
        </View>
        <RepeatExpense />
      </View>
    </DetailEntry>
  );
};

export default AddTransactionScreen;
