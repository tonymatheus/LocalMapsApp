import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacityBase,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, MapViewProps } from "react-native-maps";
import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { useNavigation } from "@react-navigation/native";

export interface IMarker {
  category: string;
  contact: string;
  description: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
}

export function Home() {
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("http://192.168.1.123:3000/store").then(async (request) => {
      const data = await request.json();

      setMarkers(data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.subtitle}>
          Encontre no Mapa um ponto de negócio abaixo
        </Text>
      </View>
      <MapView
        style={styles.MapContainer}
        initialRegion={{
          latitude: markers[0].latitude,
          longitude: markers[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((item) => {
          return (
            <Marker
              key={item.id}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              onPress={() => {
                navigation.navigate("Details", item);
              }}
            />
          );
        })}
      </MapView>
      <View style={styles.categoriesConteiner}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.key} style={styles.categoryItem}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.btnTitle}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
