import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import PlusCircleOutlined from 'react-native-vector-icons/AntDesign';
import TaskInput from './components/TaskInput';
import Item from './components/Item';

function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [tasks, setTasks] = React.useState([
    {
      text: "Faire à manger",
      isCompleted: false
    },
    {
      text: "Aller au sport",
      isCompleted: false
    },
    {
      text: "Jouer à la PS5",
      isCompleted: false
    }
  ]);
  const [nbTask, setNbTask] = useState(0);
  const [nbTaskCompleted, setNbTaskCompleted] = useState(0);
  const [currentDate, setCurrentDate] = useState('');
  var j = new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche")
  var m = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet","Août","Septembre","Octobre","Novembre","Décembre");
  
  useEffect(() => {
    var jour = j[new Date().getDay()-1];
    var date = new Date().getDate(); //Current Date
    var month = m[new Date().getMonth() + 1]; //Current Month
    setCurrentDate(
      jour + ', ' + date + ' ' + month 
    );
    setNbTask(tasks.length);
  },[]);

  const addTaskHandler = text => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
    setNbTask(tasks.length +1);
    setIsAddMode(false);
  };

  const addStatutHandler = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
    
    setNbTaskCompleted(nbTaskCompleted +1);
  };

  const removeTaskHandler = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setNbTask(tasks.length -1 );
    // setNbTaskCompleted(nbTaskCompleted -1);
  };

  const cancelTaskAdditionHandler = () => {
    setIsAddMode(false);
  };

  const renderItem = ({item ,index}) => (
    <Item title={item.text} isCompleted={item.isCompleted} index={index} onStatut={addStatutHandler} onDelete={removeTaskHandler}/>
  );
  return (
    
    <View style={styles.container}>
      <View style={styles.screen}>
        <View>
            <Text style={{color: "#000000", fontSize:20, fontWeight: 'bold', padding: 50}}>{currentDate}</Text>
        </View>       
        <View style={{display:'flex', justifyContent:'space-between', flexDirection: 'row'}}>
          <Text style={{padding:20}}>{nbTask <= 1 ? nbTask + ' Tâche créée' : nbTask + ' Tâches créées'}</Text> 
          <Text style={{padding:20}}>{nbTaskCompleted <= 1 ? nbTaskCompleted + ' Tâche complètée' : nbTaskCompleted + ' Tâches complètées'}</Text>
        </View>
        <TaskInput
          visible={isAddMode}
          onAddTask={addTaskHandler}
          onCancel={cancelTaskAdditionHandler}
        /> 
          <FlatList 
            data={tasks}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      </View>

      <PlusCircleOutlined name="pluscircle" style={styles.add} onPress={() => setIsAddMode(true)}/>
    </View>
  );
}

export default App;
// export default function App() {
//   const [courseTasks, setCourseTasks] = useState([ 
//     {value:'Manger',isCompleted: false},
//     {value:'Boire',isCompleted: false},
//     {value:'Uriner',isCompleted: false},
//   ]);
//   const [isAddMode, setIsAddMode] = useState(false);
//   const [currentDate, setCurrentDate] = useState('');
//   const [isStatus, setIsStatus] = useState(true);
//   const [nbTask, setNbTask] = useState(0);
//   const [nbTaskCompleted, setNbTaskCompleted] = useState(0);

//   var j = new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche")
//   var m = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet","Août","Septembre","Octobre","Novembre","Décembre");
  
//   useEffect(() => {
//     var jour = j[new Date().getDay()-1];
//     var date = new Date().getDate(); //Current Date
//     var month = m[new Date().getMonth() + 1]; //Current Month
//     setCurrentDate(
//       jour + ', ' + date + ' ' + month 
//     );
//   },[]);

//   const addTaskHandler = taskTitle => {
//     setCourseTasks(currentTasks => [
//       ...currentTasks,
//       { value: taskTitle, isCompleted: false},
//     ]);
//     setNbTask(courseTasks.length +1);
//     setIsAddMode(false);
//   };

//   const addStatutHandler = index => {
//     //console.log(courseTasks);
//     const newTasks = [...courseTasks];
//     newTasks[index].isCompleted = true;
//     setCourseTasks(newTasks);
//   }

//   const removeTaskHandler = taskId => {
//     setCourseTasks(currentTasks => {
//       return currentTasks.filter(task => task.id !== taskId);
//     });
//     setNbTask(courseTasks.length -1 );
//   };

//   const cancelTaskAdditionHandler = () => {
//     setIsAddMode(false);
//   };

  
//   return (
//     <View style={styles.container}>
//       <View style={styles.screen}>
//       <View>
//         <Text style={{color: "#000000", fontSize:20, fontWeight: 'bold', padding: 50}}>{currentDate}</Text>
//       </View>
//       <View style={{display:'flex', justifyContent:'space-between', flexDirection: 'row'}}>
//         <Text style={{padding:20}}>{nbTask <= 1 ? nbTask + ' Tâche créée' : nbTask + ' Tâches créées'}</Text>
//         <Text style={{padding:20}}>{nbTaskCompleted <= 1 ? nbTaskCompleted + ' Tâche complètée' : nbTaskCompleted + ' Tâches complètées'}</Text>
//       </View>
//       <TaskInput
//         visible={isAddMode}
//         onAddTask={addTaskHandler}
//         onCancel={cancelTaskAdditionHandler}
//       /> 
//       <FlatList 
//         keyExtractor={(item, index) => item.id}
//         data={courseTasks}
//         renderItem={itemData => (
//           <TaskItem
//             id={itemData.item.id}
//             index={itemData.item.index}
//             status={itemData.item.status}
//             onDelete={removeTaskHandler}
//             title={itemData.item.value}
//             click={addStatutHandler}
//           />
//         )}
//       />
//     </View>
//       <PlusCircleOutlined name="pluscircle" style={styles.add} onPress={() => setIsAddMode(true)}/>
//     </View>
    
//   );
// }

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  screen: {
    padding: 50
  },
  add:{
    position: 'absolute',
    bottom: 150,
    right: 50,
    fontSize: 60, 
    color:"#FFA500"
  }
});

