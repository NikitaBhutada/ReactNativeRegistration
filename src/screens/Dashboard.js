
import React, { useEffect, useState } from 'react';
import empData from '../api/empData';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';


const Dashboard = ({navigation}) => {
const [result,setresult] = useState([]);

const getEmp = async () => {
    
   // const response = await empData.get(`/employees`)
   // console.log("response data ",response.data)
   fetch(`http://dummy.restapiexample.com/api/v1/employees`, {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   }) 
   .then(response => {
       return response.json()
       .then((json)=> {
           console.log(json)
           setresult(json.data)
           console.log("result : ", result)
       })
        console.log("response data ",response)
       // setresult(response);
    })
    .catch(error => {
           console.log("error  :", error)
    //setResultLength(result.data.length);
 
  });
}
// const getEmp =  () =>{  
//     //console.log('hello');
//  empData.get(`/employees`)
// // fetch(`http://dummy.restapiexample.com/api/v1/employees`)
//   .then(response => { 
//     console.log("response data: ",response.data)
//     setresult(response.data);
// })
// .catch(error => {
//     console.log("erro :", error)
// });
//    // console.log("api resp: ",response.data);
// }
useEffect(
    ()=>{
        getEmp();
    },[]
);


return (
    
   
       < FlatList 
   
    data = {result}
        renderItem= {({ item }) => {
        return    <Text style={styles.textStyle}>{item.id}  {item.employee_name} </Text>
    
      
        }}
        />
);
}

const styles = StyleSheet.create({

    textStyle:{
        marginVertical: 5,
        marginLeft: 10
    }
});


export default Dashboard;