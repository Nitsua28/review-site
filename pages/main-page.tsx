import { useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import { ItemListActions, ItemListState } from "../reducers/item-reducer";

export function MainPage(){
    const selector = useSelector((store: ItemListState) => store);
    const dispatchList = useDispatch()<ItemListActions>;

    useEffect(() => {  
        console.log("asmklfs");
        dispatchList({type: "REQUEST_GET_ALL_ITEMS"});
         
        
     },[]);
    return(
        <View style={styles.container}>
            {selector.items.map((item)=><Button key = {item.itemId} title={
                `Name:  ${item.name}
             Description:  ${item.description}
              `}></Button>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });