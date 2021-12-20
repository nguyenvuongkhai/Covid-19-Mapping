import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';
import Geolocation from 'react-native-geolocation-service';
import VNDistrict from './tabs/Data/VNDistrict.json';

export default function AnnouncementScreen() {
  const [currentPosition, setCurrentPosition] = useState({});

  useEffect(() => {
    createChannels();

    Geolocation.getCurrentPosition(
      position => {
        console.log('current position: ', position);
        setCurrentPosition(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-notification',
      channelName: 'Test Notification',
    });
  };
  const sendNotification = () => {
    if (checkCurrentLocation()) {
      PushNotification.localNotification({
        channelId: 'test-notification',
        title: 'WARNING!',
        message: 'you are in the red zone!',
      });
    }
  };

  const findMax = arr => {
    const maxLatitude = Math.max.apply(
      Math,
      arr.map(o => o[1]),
    );

    const maxLongitude = Math.max.apply(
      Math,
      arr.map(o => o[0]),
    );

    return {
      maxLatitude,
      maxLongitude,
    };
  };

  const findMin = arr => {
    const minLatitude = Math.min.apply(
      Math,
      arr.map(o => o[1]),
    );

    const minLongitude = Math.min.apply(
      Math,
      arr.map(o => o[0]),
    );

    return {
      minLatitude,
      minLongitude,
    };
  };

  const checkCurrentLocation = () => {
    let check = false;
    VNDistrict.features.map(item => {
      if (
        item.properties.Ten_Tinh == 'Quảng Trị' &&
        item.properties.Ten_Huyen == 'Hai Lang'
      ) {
        const coordinates = item.geometry.coordinates;

        for (let i = 0; i < coordinates.length; i++) {
          const element = coordinates[i];

          if (
            findMin(element).minLatitude <= currentPosition.coords.latitude &&
            currentPosition.coords.latitude <= findMax(element).maxLatitude
          ) {
            if (
              findMin(element).minLongitude <=
              currentPosition.coords.longitude &&
              currentPosition.coords.longitude <= findMax(element).maxLongitude
            ) {
              check = true;
            }
          }
        }
      }
    });

    return check;
  };

  return (
    <View>
      <Button title="Send Notification" onPress={() => sendNotification()} />
    </View>
  );
}
