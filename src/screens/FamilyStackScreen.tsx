import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from 'react-native';

const FamilyStack = createStackNavigator();

function FamilyStackScreen() {
  return (
    <FamilyStack.Navigator
      initialRouteName="FamilyHome"
    >
      <FamilyStack.Screen name="FamilyHome" component={() => <View><Text>Family Screen Home</Text></View>} />
      <FamilyStack.Screen name="FamilyDetails" component={() => <View><Text>Family Screen Details</Text></View>} />
    </FamilyStack.Navigator>
  );
}

export default FamilyStackScreen;