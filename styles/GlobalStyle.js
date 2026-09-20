import { StyleSheet } from 'react-native';

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    marginBottom: 30,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    backgroundColor: '#2563EB',
    margin: 10,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  taskCard: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});