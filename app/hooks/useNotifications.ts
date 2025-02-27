import { useEffect, useRef, useState } from 'react';
import expoPushTokensApi from '../api/expoPushTokens';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
});

const useNotifications = () => {
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    
    useEffect(() => {
        registerForPushNotifications();
    
        // This listener is fired whenever a notification is received while the app is foregrounded
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });
    
        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response.notification.request.content.body);
        });
    
        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current!);
            Notifications.removeNotificationSubscription(responseListener.current!);
        };
    
    }, []);

    const registerForPushNotifications = async () => {
        try {
            const permissions = await Notifications.requestPermissionsAsync();
            if (!permissions.granted) {
                const finalPermissions = await Notifications.requestPermissionsAsync();
                if (!finalPermissions.granted) {
                    console.log("permissions NOT granted!");
                    return;
                }
            }
            console.log("permissions granted!");

            const token = (await Notifications.getExpoPushTokenAsync()).data;
            expoPushTokensApi.register(token);
        } catch (error) {
            console.log("Error getting a push token: ", error);
        }
    }
}

export default useNotifications;