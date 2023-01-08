import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [visible, setVisible] = useState(false);

 function deleteGoalHandler(id){
  setGoals((currentGoals)=>{
    return currentGoals.filter((goal)=>{goal.id !== id});
  })
 }

 function startAddGoalHandler(){
  setVisible(true);
 }

 function closeAddGoalHandler(){
  setVisible(false);
 }

  function addGoalHandler(enteredGoalText){
    setGoals((currentGoals)=>[...currentGoals, {text:enteredGoalText, id:Math.random().toString()}])
    setVisible(false);
  };

  return (
    <>
    <StatusBar style='light'></StatusBar>
    <View style={styles.appContainer}>
      <Button onPress={startAddGoalHandler} title="Add a new Goal!" color="#5e0acc"></Button>
      <GoalInput visible={visible} addGoalHandler={addGoalHandler} closeModal={closeAddGoalHandler}></GoalInput>
      <View style={styles.goalsContainer}>
      <FlatList data={goals} renderItem={(itemData)=>{
        return(
         <GoalItem onDeleteItem={deleteGoalHandler} 
         text={itemData.item.text} 
         id={itemData.item.id}
         ></GoalItem>
        )
        
      }} alwaysBounceVertical={false} keyExtractor={(item,index)=>{return item.id;}}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
