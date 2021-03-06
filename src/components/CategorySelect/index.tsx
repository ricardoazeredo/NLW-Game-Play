import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { Category } from '../Category';

import { styles} from './styles';
import { theme } from '../../global/styles/theme';
import { categories } from '../../Utils/categories';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckedBox?: boolean;
}

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckedBox= false,
}: Props) {
  return (
    <ScrollView 
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id == categorySelected}
            onPress={() => setCategory(category.id)}
            hasCheckedBox={hasCheckedBox}
          />
        ))
      }
    </ScrollView>    
  )
}