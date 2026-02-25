import { Stack } from "expo-router";
import { Image , ScrollView , StyleSheet , Text , View} from "react-native";
import { appStyles } from "./AppStyles";
import userData from "../data.json";
import { useTheme , Icon } from "react-native-paper";
import { AppTheme } from "./Theme";

export default function Index() {
  const theme = useTheme<AppTheme>();
  const styles = appStyles(theme);
  return (
    <>
      {/*Screen Name*/}
      <Stack.Screen options={{title: "User List"}}/>

      <ScrollView style={{ backgroundColor: theme.colors.background }}>
        {userData.map((users, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.card}>
              <Image
                source={{ uri:users.photo_url }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.boldText}>{users.name}</Text>
                <Text style={styles.fontColor}>{users.email}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

