import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const ProfileScreen = () => {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const menuItems = [
    {label: 'Edit Profile', icon: 'edit', onPress: () => {}},
    {label: 'Change Password', icon: 'lock', onPress: () => {}},
    {
      label: 'Turn on Location',
      icon: 'location-pin',
      toggle: true,
      value: locationEnabled,
      onToggle: () => setLocationEnabled(!locationEnabled),
    },
    {
      label: 'Email Notifications',
      icon: 'mail-outline',
      toggle: true,
      value: emailNotifications,
      onToggle: () => setEmailNotifications(!emailNotifications),
    },
    {label: 'Settings', icon: 'settings', onPress: () => {}},
    {label: 'Logout', icon: 'logout', color: '#E63946', onPress: () => {}},
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://randomuser.me/api/portraits/men/75.jpg',
          }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Feather name="edit" size={16} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.profileName}>Dedi Cahyadi</Text>
      </View>

      <View style={styles.menuList}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.onPress}
            activeOpacity={item.toggle ? 1 : 0.7}>
            <View style={styles.menuIconText}>
              <Icon
                name={item.icon}
                size={20}
                color={item.color || '#333'}
                style={styles.icon}
              />
              <Text
                style={[styles.menuLabel, item.color && {color: item.color}]}>
                {item.label}
              </Text>
            </View>
            {item.toggle ? (
              <Switch
                value={item.value}
                onValueChange={item.onToggle}
                trackColor={{false: '#ccc', true: '#007bff'}}
              />
            ) : (
              <Feather name="chevron-right" size={18} color="#aaa" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#007bff',
  },
  editIcon: {
    position: 'absolute',
    right: 120 / 2 - 15,
    top: 100 - 25,
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 20,
    zIndex: 1,
  },
  profileName: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  menuList: {
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  menuIconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 26,
  },
  menuLabel: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
});
