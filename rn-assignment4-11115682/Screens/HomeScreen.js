// screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import JobCard from '../Components/JobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const jobs = [
    { id: '1', title: 'Software Engineer', company: 'ABC Corp', location: 'San Francisco, CA' },
    { id: '2', title: 'Product Manager', company: 'XYZ Inc', location: 'New York, NY' },
    { id: '3', title: 'Data Scientist', company: 'Data Corp', location: 'Chicago, IL' },
    { id: '4', title: 'UX Designer', company: 'Design Studio', location: 'Austin, TX' },
    { id: '5', title: 'Marketing Specialist', company: 'Marketing Pro', location: 'Miami, FL' },
    { id: '6', title: 'HR Manager', company: 'HR Solutions', location: 'Seattle, WA' },
    { id: '7', title: 'Finance Analyst', company: 'Finance Co', location: 'Boston, MA' },
    { id: '8', title: 'Sales Executive', company: 'Sales Experts', location: 'Denver, CO' },
  ];

  const renderJobCard = ({ item }) => <JobCard job={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Welcome, {name}!</Text>
      <Text style={styles.label}>Your email is: {email}</Text>
      <FlatList
        data={jobs}
        renderItem={renderJobCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  list: {
    marginTop: 16,
  },
});

export default HomeScreen;
