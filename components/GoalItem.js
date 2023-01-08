import { Text,View, StyleSheet, Pressable } from "react-native";

export default function GoalItem(props) {
  
  


  return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#210644'}} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem }
                >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>

        </View>
    
  )
}

const styles= StyleSheet.create({
    goalItem:{
        borderRadius: 6,
        margin: 8,
        backgroundColor: "#5e0acc"
      },
      pressedItem: {
        opacity: 0.5
      },
      goalText: {
        color: "white",
        padding: 8
      }
})



