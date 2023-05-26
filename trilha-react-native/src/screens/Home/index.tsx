import React, { useState } from "react";
import { FlatList, View } from "react-native";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");

  const appoinments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true
      },
      category: "1",
      date: "22/06 às 20:40",
      description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect
          selectedCategory={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader
            title="Partidas agendadas"
            subtitle="Total 6"
          />

          <FlatList
            data={appoinments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View />
            )}
          />
        </View>
      </View>
    </View>
  );
}