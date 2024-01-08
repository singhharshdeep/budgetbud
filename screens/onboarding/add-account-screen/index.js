import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";

import DetailEntry from "../../../components/detail-entry";
import Picker from "../../../components/util/picker";
import Input from "../../../components/util/text-input";
import { accountTypes, banks } from "../../../mocks";
import theme, { colors, typography } from "../../../theme";

const AddAccountScreen = () => {
  const [accountType, setAccountType] = useState(null);
  const [selectedBank, setSelectedBank] = useState(1);

  const navigation = useNavigation();

  return (
    <DetailEntry
      title="Add new account"
      balanceLabel="Balance"
      flexValue={accountType?.value === "bank" ? 8 : 4}
      backgroundColor={theme.colors.primary}
      onButtonPress={() => navigation.navigate("Success")}
    >
      <Input placeholder="Name" styles={{ marginTop: 32 }} />
      <Picker
        selectedValue={accountType}
        onValueChange={setAccountType}
        options={accountTypes}
        placeholder="Account type"
        containerStyle={{
          marginTop: 16,
        }}
      />
      {accountType?.value === "bank" ? (
        <View style={{ flex: 5, marginTop: 16 }}>
          <Text style={[typography["text-md"]]}>Bank</Text>
          <View
            style={{
              marginTop: 8,
              flexDirection: "row",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {banks.map((bank) => (
              <TouchableWithoutFeedback
                key={bank.id}
                onPress={() => setSelectedBank(bank.id)}
              >
                <View
                  style={{
                    flex: 1,
                    flexBasis: "20%",
                    padding: 8,
                    borderRadius: 10,
                    borderWidth: selectedBank === bank.id ? 1 : 0,
                    borderColor:
                      selectedBank === bank.id ? theme.colors.primary : "",
                    backgroundColor: colors["indigo-100"],
                    marginBottom: 8,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {bank.text ? (
                    <Text style={{ color: theme.colors.primary }}>
                      {bank.text}
                    </Text>
                  ) : (
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={bank.img}
                    />
                  )}
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>
      ) : null}
    </DetailEntry>
  );
};

export default AddAccountScreen;
