import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { DataGrid } from '../../components';

const FamilyListScreen = () => {
  return (
    <View>
      <Card>
        <Card.Title>
          <Button
            onPress={() => {

            }}
            style={{
              marginTop: 16,
              backgroundColor: colors.primary,
              borderRadius: 16,
              width: "30%",
              alignSelf: 'flex-end',
            }}
            labelStyle={{
              color: 'white',
              fontSize: 16,
            }}
          >
            Agregar
          </Button>
        </Card.Title>
        <Card.Content>
          <Text>FamilyListScreen</Text>
          <DataGrid rows={[]} columns={[]} />
        </Card.Content>
      </Card>
    </View>
  );
};

export default FamilyListScreen;