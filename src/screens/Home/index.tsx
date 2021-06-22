import React from 'react';
import { View } from 'react-native';

import { Profile } from '../../components/Profile';

import { styles } from './styles';

export function Home() {
  return(
    <View style={styles.header}>
      <View>
        <Profile />
      </View>
    </View>
  )
}