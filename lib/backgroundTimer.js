import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';

const timer = 'backgroundTimer';

TaskManager.defineTask(timer, async () => {
    try {
        const state = await AsyncStorage.getItem('timerState');
        if (state) {
            const { time, intervalType, running } = JSON.parse(state);
            if (running && time > 0) {
                const newTime = time - 1;
                await AsyncStorage.setItem('timerState', JSON.stringify({ time: newTime, intervalType, running }));
                console.log("Background timer task: Updated time to", newTime);
            }
        }
        return BackgroundFetch.BackgroundFetchResult.NewData;
    } catch (error) {
        console.log("Background timer task error", error);
        return BackgroundFetch.BackgroundFetchResult.Failed;
    }
});

const registerBackgroundTask = async () => {
    try {
        await BackgroundFetch.registerTaskAsync(timer, {
            minimumInterval: 60, // Run the task every minute
            stopOnTerminate: false, // Continue running even if the app is terminated
            startOnBoot: true, // Automatically start the task when the device is restarted
        });
        console.log("Background timer task registered")
    } catch (error) {
        console.error("Failed to register background timer task", error);
    }
};

export default registerBackgroundTask;