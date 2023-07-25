import React from 'react';
import {Text, View} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {DataGrid} from '../../components';
import {colors} from '../../theme/appTheme';

const FamilyListScreen = () => {
  return (
    <View>
      <Card>
        <Card.Content>
          <Text>FamilyListScreen</Text>
          <DataGrid rows={[]} columns={[]} />
        </Card.Content>
      </Card>
    </View>
  );
};

export default FamilyListScreen;
