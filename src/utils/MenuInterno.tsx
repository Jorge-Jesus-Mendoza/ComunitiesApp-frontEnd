import {DrawerContentScrollView} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {Drawer} from 'react-native-paper';

export const MenuInterno = () => {
  const [active, setActive] = useState('');
  return (
    <DrawerContentScrollView>
      <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => setActive('second')}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};
