import { useState } from "react";
import { Switch, View } from "react-native";
import { Octicons } from "@expo/vector-icons";

import theme, { colors } from "../../theme";
import Drawer from "../../components/drawer";
import Picker from "../../components/util/picker";
import Button from "../../components/util/button";
import { frequency } from "../../mocks";

const RepeatExpense = () => {
  const [repeat, setRepeat] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleValueChange = value => value ? toggleModal() : setRepeat(false)

  return (
    <>
      <Switch
        value={repeat}
        onValueChange={handleValueChange}
        ios_backgroundColor={colors["indigo-100"]}
        trackColor={{
          false: colors["indigo-400"],
          true: theme.colors.primary,
        }}
      />
      <Drawer
        isOpen={isOpen}
        toggle={toggleModal}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            borderRadius: 20,
          }}
        >
          <Octicons
            style={{ alignSelf: "center" }}
            name="horizontal-rule"
            size={48}
            color={colors["indigo-100"]}
          />
          <View
            style={{
              borderColor: colors["gray-300"],
              paddingHorizontal: 32,
              paddingBottom: 32
            }}
          >
            <View>
              <Picker
                placeholder='Frequency'
                options={frequency}
              />
              <View style={{
                flexDirection: 'row',
                marginTop: 16
              }}>
                <Picker containerStyle={{ flexBasis: '50%', marginRight: 4 }} placeholder="Month" />
                <Picker containerStyle={{ flexBasis: '50%' }} placeholder="Day" />
              </View>
              <Button containerStyles={{ marginTop: 16 }} primary title="Next" />
            </View>
          </View>
        </View>
      </Drawer>
    </>
  )
}

export default RepeatExpense