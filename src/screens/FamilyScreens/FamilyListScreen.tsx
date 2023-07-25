import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DataGrid } from '../../components';
import { RootStackParams } from '../../navigator/StackNavigator';
import { colors } from '../../theme/appTheme';

const FamilyListScreen = ({ navigation, route }: StackScreenProps<RootStackParams>) => {

  console.log('navigation', navigation, '\nroute', route);
  return (
    <View>
      <Card>
        <Card.Content>
          <Button
            onPress={() => {
              navigation.navigate('FamilyHomeScreen');
            }}
            style={{
              marginTop: 16,
              backgroundColor: colors.primary,
              borderRadius: 16,
              width: "50%",
              alignSelf: 'flex-end',
            }}
            labelStyle={{
              color: 'white',
              fontSize: 13,
            }}
          >
            Crear Núcleo Familiar
          </Button>
          <Text>FamilyListScreen</Text>
          <DataGrid rows={[]} columns={[]} />
        </Card.Content>
      </Card>
    </View>
  );
};

export default FamilyListScreen;