import AsyncStorage from "@react-native-async-storage/async-storage";

export const lerItem = (key: string) => AsyncStorage.getItem(key);
export const gravarItem = (key: string, value: string) => AsyncStorage.setItem(key, value);
export const removerItem = (key: string) => AsyncStorage.removeItem(key);