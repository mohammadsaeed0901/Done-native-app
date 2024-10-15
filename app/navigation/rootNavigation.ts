import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

const navigate = (name: string, params?: any) => navigationRef.current?.navigate(name, params);

export default {
    navigate,
}