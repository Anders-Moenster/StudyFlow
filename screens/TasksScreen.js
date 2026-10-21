import React, { useState, useEffect } from 'react'; //"useStae" = Gemmer opgaverne i appen og "useEffect" = vi henter dem.
import { Text, View, FlatList, Button } from 'react-native';

import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

import { ref, onValue } from 'firebase/database';
import { database } from '../firebaseConfig';

export default function TasksScreen({ navigation }) {

    const [tasks, setTasks] = useState([]); //Start med tom tekst mens arrayet er tomt

    useEffect(() => {

        const tasksRef = ref(database, 'tasks');

        onValue(tasksRef, (snapshot) => {

            const data = snapshot.val();

            if (data) {
                const taskList = Object.keys(data).map((key) => ({ //Lav Firebase ID om til en opgave i arrayet.
                    id: key,
                    ...data[key]
                }));

                setTasks(taskList);
            }

        });

    }, []);

    return (
        <View style={GlobalStyle.container}>

            <Text style={GlobalStyle.title}>
                Mine opgaver
            </Text>

            <ButtonComponent
                title="Tilføj opgave"
                onPress={() => navigation.navigate('AddTask')}
            />

            <FlatList
                data={tasks}
                renderItem={({ item }) => {
                    return (
                        <View style={GlobalStyle.taskCard}>

                            <Text style={GlobalStyle.taskTitle}>
                                {item.title}
                            </Text>

                            <Text>
                                Fag: {item.subject}
                            </Text>

                            <Text>
                                Deadline: {item.deadline}
                            </Text>

                            <Text>
                                Status: {item.status}
                            </Text>

                            <ButtonComponent
                                title="Se opgave"
                                onPress={() => navigation.navigate('TaskDetails', { task: item })}
                            />

                        </View>
                    );
                }}
            />
        </View>
    );
}