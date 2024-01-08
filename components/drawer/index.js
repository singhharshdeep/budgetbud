import {
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

const Drawer = ({
  isOpen,
  toggle,
  children
}) => {
  return (
    <Modal visible={isOpen} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={toggle} style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {children}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default Drawer