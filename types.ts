import { NativeStackScreenProps } from "@react-navigation/native-stack"


// The purpose of this file is to set up and declare what our screens are going to be and what their props are:

// define the props for each screen:
export type RootStackParamList = {
    // use undefined to not take in any props
    Main: undefined,


}

// Set up the types of our props:
export type Props = {
    // one sub-type for screens with no props
    main: NativeStackScreenProps<RootStackParamList, 'Main'>


}