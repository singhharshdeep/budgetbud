import { curveNatural } from "d3-shape";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-svg-charts";

import { graphData } from "../../mocks";
import theme, { colors, typography } from "../../theme";

const SpendingTrends = () => {
  const [selectedInterval, setSelectedInterval] = useState("today");

  return (
    <View style={{ marginTop: 16 }}>
      <Text style={[typography["text-xl"]]}>Spending Trends</Text>
      <View style={{ marginHorizontal: -20 }}>
        <LineChart
          style={{ height: 150, width: "100%" }}
          data={graphData}
          animate
          curve={curveNatural}
          contentInset={{ top: 30 }}
          svg={{
            stroke: theme.colors.primary,
            strokeWidth: 8,
          }}
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors["gray-50"],
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8
        }}
      >
        <View
          style={{
            flexBasis: "25%",
            backgroundColor:
              selectedInterval === "today" ? colors["yellow-100"] : null,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
            borderColor: colors["gray-200"],
          }}
        >
          <TouchableOpacity onPress={() => setSelectedInterval("today")}>
            <Text
              style={{
                color:
                  selectedInterval === "today"
                    ? colors["yellow-400"]
                    : colors["gray-400"],
              }}
            >
              Today
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexBasis: "25%",
            backgroundColor:
              selectedInterval === "week" ? colors["yellow-100"] : null,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
            borderColor: colors["gray-200"],
          }}
        >
          <TouchableOpacity onPress={() => setSelectedInterval("week")}>
            <Text
              style={{
                color:
                  selectedInterval === "week"
                    ? colors["yellow-400"]
                    : colors["gray-400"],
              }}
            >
              Week
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexBasis: "25%",
            backgroundColor:
              selectedInterval === "month" ? colors["yellow-100"] : null,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
            borderColor: colors["gray-200"],
          }}
        >
          <TouchableOpacity onPress={() => setSelectedInterval("month")}>
            <Text
              style={{
                color:
                  selectedInterval === "month"
                    ? colors["yellow-400"]
                    : colors["gray-400"],
              }}
            >
              Month
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexBasis: "25%",
            backgroundColor:
              selectedInterval === "year" ? colors["yellow-100"] : null,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
            borderColor: colors["gray-200"],
          }}
        >
          <TouchableOpacity onPress={() => setSelectedInterval("year")}>
            <Text
              style={{
                color:
                  selectedInterval === "year"
                    ? colors["yellow-400"]
                    : colors["gray-400"],
              }}
            >
              Year
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SpendingTrends;
