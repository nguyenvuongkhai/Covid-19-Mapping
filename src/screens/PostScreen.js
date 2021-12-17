import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import PushNotification from 'react-native-push-notification';

export default function PostScreen() {
  useEffect(() => {
    createChannels();
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-notification',
      channelName: 'Test Notification',
    });
  };
  const sendNotification = () => {
    PushNotification.localNotification({
      channelId: 'test-notification',
      title: 'Clicked!',
      message: "Because I'm very lazy to test it!",
    });
  };

  return (
    <View>
      <Text>PostScreen</Text>
      <Button title="Notification" onPress={() => sendNotification()}></Button>
    </View>
  );
}
