import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParamList = {
    Home: undefined;
    Quiz: undefined;
    Result: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
    StackParamList,
    'Quiz'
>;