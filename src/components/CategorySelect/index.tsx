import React from "react";
import { ScrollView } from "react-native";

import categories from "../../utils/categories";

import { Category } from "../Category";

import { styles } from "./styles";

type CategorySelect = {
  selectedCategory: string;
  setCategory: (categoryId: string) => void;
}

export function CategorySelect({ selectedCategory, setCategory }: CategorySelect) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 24 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === selectedCategory}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}