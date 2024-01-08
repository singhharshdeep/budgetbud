import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import Drawer from '../../components/drawer';

import theme, { colors, typography } from "../../theme";
import Button from "../../components/util/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            paddingHorizontal: 16,
            paddingVertical: 4,
            borderRadius: 20,
            borderColor: colors["gray-200"],
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={theme.colors.primary}
          />
          <Text>Month</Text>
        </View>
      </TouchableOpacity>
      <View style={{ borderWidth: 1, borderRadius: 10, padding: 8, borderColor: colors["gray-200"] }}>
        <TouchableOpacity onPress={toggleModal}>
          <Octicons name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>
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
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <Text style={ typography["text-lg"]}>Filter transactions</Text>
                <TouchableOpacity style={{ backgroundColor: colors["indigo-200"], paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 }}>
                  <Text style={{ color: theme.colors.primary }}>Reset</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 16 }}>
                <Text style={ typography["text-lg"] }>Filter By</Text>
                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                  <TouchableOpacity style={{ alignItems: 'center', flexBasis: '30%', backgroundColor: colors["indigo-200"], padding: 16, borderRadius: 20 }}>
                    <Text style={{ color: theme.colors.primary }}>Income</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ alignItems: 'center', flexBasis: '30%', marginHorizontal: 16, backgroundColor: colors["indigo-200"], padding: 16, borderRadius: 20 }}>
                    <Text style={{ color: theme.colors.primary }}>Expense</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginTop: 16 }}>
                <Text style={ typography["text-lg"] }>Sort By</Text>
                <View style={{ flexDirection: 'row', marginTop: 16, flexWrap: 'wrap' }}>
                  <TouchableOpacity style={{ alignItems: 'center', flexBasis: '30%', backgroundColor: colors["indigo-200"], padding: 16, borderRadius: 20 }}>
                    <Text style={{ color: theme.colors.primary }}>Income</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ alignItems: 'center', flexBasis: '30%', marginLeft: 16, backgroundColor: colors["indigo-200"], padding: 16, borderRadius: 20 }}>
                    <Text style={{ color: theme.colors.primary }}>Expense</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ alignItems: 'center', flexBasis: '30%', marginLeft: 16, backgroundColor: colors["indigo-200"], padding: 16, borderRadius: 20 }}>
                    <Text style={{ color: theme.colors.primary }}>Expense</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ alignItems: 'center', flexBasis: '30%', marginTop: 16, backgroundColor: colors["indigo-200"], padding: 16, borderRadius: 20 }}>
                    <Text style={{ color: theme.colors.primary }}>Expense</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Button containerStyles={{ marginTop: 16 }} primary title="Apply" />
            </View>
          </View>
        </View>
      </Drawer>
    </View>
  )
}

export default Header