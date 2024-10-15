import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const prefix = "cache";
const expiryInMinute = 5;
type ItemType = { value: string; timestamp: number };

const isExpired = (item: ItemType) => {
    const now = dayjs();
    const storedTime = dayjs(item.timestamp);
    return now.diff(storedTime, "minute") > expiryInMinute;
}

const store = async (key: string, value: string) => {
    try {
        const item: ItemType = {
            value,
            timestamp: Date.now(),
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
}

const get = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key);
        const item: ItemType = JSON.parse(value as string);

        if (!item) return null;

        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

export default {
    store,
    get,
}