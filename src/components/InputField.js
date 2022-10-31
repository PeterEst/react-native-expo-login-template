import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const InputField = ({
  label,
  labelColor,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
  errorText,
  errorTextColor,
  fontSize,
  fontColor,
  borderBottomColor,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: borderBottomColor ? borderBottomColor : "#000",
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: errorText ? 5 : 25,
        }}
      >
        {icon}
        {(() => {
          switch (inputType) {
            case "password":
              return (
                <TextInput
                  placeholder={label}
                  placeholderTextColor={labelColor ? labelColor : "#e3aa25"}
                  keyboardType={keyboardType}
                  style={{ flex: 1, paddingVertical: 0, color: fontColor }}
                  secureTextEntry={true}
                  value={value}
                  onChangeText={onChangeText}
                />
              );
            case "restricted":
              return (
                <Text style={{ flex: 1, paddingVertical: 2, color: fontColor }}>
                  {value}
                </Text>
              );
            case "multiline":
              return (
                <TextInput
                  placeholder={label}
                  placeholderTextColor={labelColor ? labelColor : "#e3aa25"}
                  keyboardType={keyboardType}
                  style={{
                    flex: 1,
                    paddingVertical: 0,
                    color: fontColor,
                  }}
                  multiline={true}
                  value={value}
                  onChangeText={onChangeText}
                />
              );
            default:
              return (
                <TextInput
                  placeholder={label}
                  placeholderTextColor={labelColor ? labelColor : "#e3aa25"}
                  keyboardType={keyboardType}
                  style={{ flex: 1, paddingVertical: 0, color: fontColor, fontSize: fontSize || 14 }}
                  value={value}
                  onChangeText={onChangeText}
                />
              );
          }
        })()}
        <TouchableOpacity onPress={fieldButtonFunction}>
          <Text style={{ color: labelColor, fontWeight: "700" }}>
            {fieldButtonLabel}
          </Text>
        </TouchableOpacity>
      </View>
      {errorText ? (
        <Text style={{ color: errorTextColor, fontSize: 12, marginBottom: 10 }}>
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};

export default InputField;
