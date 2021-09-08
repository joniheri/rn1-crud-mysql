import React from "react";
import axios from "axios";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import Headers from "../component/Header";

export default function DetailTodo(props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [changeStatus, setChangeStatus] = React.useState("");
  const dataTodo = {
    id: props.route.params.id,
    title: props.route.params.title,
    description: props.route.params.description,
    status: props.route.params.status,
  };

  const updateTodo = async () => {
    try {
      setIsLoading(true);
      const data = {
        status: changeStatus,
      };
      if (!data.status) {
        setIsError(true);
        setError("Please fill in all the fields");
      } else {
        if (data.status !== "Done") {
          setIsError(true);
          setError("Status Wajib Done atau Progress");
          console.log("Data", data.status);
        } else {
          const response = await axios.patch(
            `http://localhost:9001/api/v1/todo/update/${dataTodo.id}`,
            data
          );
          console.log(response.data);
          setError("Berhasil");
          setIsLoading(false);
          props.navigation.navigate("Home");
        }
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log(error);
    }
  };
  React.useEffect(() => {
    updateTodo();
  }, [dataTodo.id]);

  return (
    <View style={styles.container}>
      {console.log("isError: ", isError)}
      <Headers title="Title : " />
      <Text style={{ fontSize: 25, marginBottom: 12, color: "#5b5b5b" }}>
        {dataTodo.title}
      </Text>
      <Headers title="Description : " />
      <Text style={{ fontSize: 18, marginBottom: 12, color: "#5b5b5b" }}>
        {dataTodo.description}
      </Text>
      <Headers title="Status : " />
      <Text style={{ fontSize: 20, marginBottom: 12, color: "#5b5b5b" }}>
        {dataTodo.status}
      </Text>
      <TouchableOpacity
        style={styles.btnSave}
        onPress={() => props.navigation.navigate("Edit Todo", dataTodo)}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  btnSave: {
    width: "100%",
    backgroundColor: "#10bbeb",
    marginTop: 10,
    padding: 10,
    alignSelf: "center",
    borderRadius: 5,
  },
  btnDelete: {
    width: "100%",
    backgroundColor: "red",
    marginTop: 20,
    padding: 10,
    alignSelf: "center",
    borderRadius: 5,
  },
});
