import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// import config
import { API } from "../config/Api";

// import components
import Headers from "../component/Header";

export default function Home(props) {
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTodo();
  }, []);
  const getTodo = async () => {
    try {
      setIsLoading(true);
      const response = await API.get("/todos");
      // console.log("DataTodos: ", response.data);
      setTodo(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const _renderItem = ({ item }) => {
    return (
      <ListItem
        onPress={() => props.navigation.navigate("Detail Todo", item)}
        key={item.id.toString()}
        bottomDivider
      >
        <Avatar
          rounded
          title={item.title.slice(0, 2)}
          containerStyle={{ backgroundColor: "black" }}
        />
        <ListItem.Content>
          <ListItem.Title h4 numberOfLines={1}>
            {item.title}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>
            {item.description}
          </ListItem.Subtitle>
          {item.status === "Done" && (
            <ListItem.Subtitle style={{ color: "#05f240" }} numberOfLines={2}>
              {item.status}
            </ListItem.Subtitle>
          )}
          {item.status === "Progress" && (
            <ListItem.Subtitle style={{ color: "#cc9e08" }} numberOfLines={2}>
              {item.status}
            </ListItem.Subtitle>
          )}
        </ListItem.Content>
        <TouchableOpacity>
          <Text style={Style.btnDelete}>Delete</Text>
        </TouchableOpacity>
      </ListItem>
    );
  };

  return (
    <>
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 16,
              alignItems: "center",
            }}
          >
            <Headers title="List Todo" />
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Add Todo")}
            >
              <Text style={Style.btnAdd}>Add Todo</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.container}>
            <FlatList
              data={todo}
              renderItem={_renderItem}
              keyExtractor={(item) => item.id.toString()}
              refreshing={isLoading}
              onRefresh={getTodo}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const Style = StyleSheet.create({
  btnAdd: {
    backgroundColor: "#10bbeb",
    padding: 7,
    color: "white",
    borderRadius: 6,
  },
  btnDelete: {
    backgroundColor: "red",
    padding: 7,
    color: "white",
    borderRadius: 6,
  },
  container: {
    flexDirection: "row",
  },
  checkbox: {
    flexDirection: "column",
    //alignSelf: "flex-end",
  },
});
