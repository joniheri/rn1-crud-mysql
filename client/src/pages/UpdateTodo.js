import React from "react";
import { Text } from "react-native";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";

// import config
import { API } from "../config/Api";

// import components
import Headers from "../component/Header";

export default function UpdateTodo(props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [description, setDescription] = React.useState("");

  const dataTodo = {
    id: props.route.params.id,
    title: props.route.params.title,
    description: props.route.params.description,
    status: props.route.params.status,
  };

  const updateTodo = async () => {
    try {
      // setIsLoading(true);
      // const data = {
      //   title: title,
      //   status: status,
      //   description: description,
      // };
      // console.log("DataInput: ", data);
      // if (!data.title || !data.status || !data.description) {
      //   setIsError(true);
      //   setError("Please fill in all the fields");
      //   console.log("Data", data);
      // } else {
      //   if (data.status !== "Done" && data.status !== "Progress") {
      //     setIsError(true);
      //     setError("Status Wajib Done atau Progress");
      //     console.log("Data", data.status);
      //   } else {
      //     const response = await API.post("/update-todo", data);
      //     setError("Berhasil");
      //     setIsLoading(false);
      //     props.navigation.navigate("Home");
      //   }
      // }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Headers title="Title" />
      <TextInput
        style={styles.textInput}
        value={dataTodo.title}
        onChangeText={(text) => setTitle(text)}
      />
      <Headers title="Description" />
      <TextInput
        style={{
          marginBottom: 15,
          borderWidth: 0.5,
          height: 100,
          width: "100%",
          padding: 6,
          borderRadius: 5,
        }}
        value={dataTodo.description}
        onChangeText={(text) => setDescription(text)}
      />
      <Headers title="Status" />
      <TextInput
        style={styles.textInput}
        value={dataTodo.status}
        onChangeText={(text) => setStatus(text)}
      />
      {isError && (
        <View>{error && <Text style={{ color: "red" }}>{error}</Text>}</View>
      )}
      <TouchableOpacity style={styles.btnSave} onPress={updateTodo}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 17,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 0.5,
    height: 40,
    width: "100%",
    padding: 6,
  },
  btnSave: {
    width: "100%",
    backgroundColor: "#10bbeb",
    marginTop: 20,
    padding: 10,
    alignSelf: "center",
    borderRadius: 5,
  },
});
