import React from 'react';
import {Tabs} from 'expo-router';
import {Image, ImageBackground, Text, View} from "react-native";
import {icons} from "@/constants/icons";
import {images} from "@/constants/images";

const TabIcon = ({focused, icon, title}: any) => {
    if(focused){
        return (
            <>
                <View
                    className="w-auto justify-center items-center flex-row overflow-hidden min-w-[112px] min-h-16 mt-4 flex bg-accent rounded-full">
                    <Image source={icon} tintColor="#151312" className="size-5"/>
                    <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
                </View>
            </>
        )
    }
    else {
        return (
            <>
                <View className="size-full justify-center items-center mt-4 rounded-full w-full">
                    <Image
                        source={icon}
                        tintColor="#A8B5DB"
                        className="size-5"
                    />
                </View>
            </>
        )
    }
}

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    backgroundColor: '#0f0d23',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#0f0d23',
                }
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.ic_home}
                            title="Home"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.ic_search}
                            title="Search"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.ic_saved}
                            title="Saved"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.ic_profile}
                            title="Profile"
                        />
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout;