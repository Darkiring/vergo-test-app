import { useNavigation } from "@react-navigation/native";

export const navigationHook = () => {
  const navigation = useNavigation();
  const hideTabNavigator = (value: boolean) => {
    navigation.setOptions({ tabBarVisible: value });
  };
  return {
    hideTabNavigator,
  };
};
