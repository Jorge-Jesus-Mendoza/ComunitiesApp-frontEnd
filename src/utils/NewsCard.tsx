import React from 'react';
import {Button, Card, Text} from 'react-native-paper';

export const NewsCard = props => {
  const {title = {}, uri = {}, content = {}} = props;
  return (
    <Card
      style={{
        margin: 10,
      }}>
      <Card.Title title={title} titleStyle={{textAlign: 'left'}} />
      <Card.Content>
        <Text variant="bodyMedium">{content}</Text>
      </Card.Content>
      <Card.Cover
        style={{
          margin: 10,
        }}
        source={{
          uri: uri,
        }}
      />
      <Card.Actions>
        <Button buttonColor="#5a92ed" mode="contained">
          Ver más
        </Button>
      </Card.Actions>
    </Card>
  );
};
