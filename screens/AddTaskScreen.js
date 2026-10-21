import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import { GlobalStyle } from '../styles/GlobalStyle';
import ButtonComponent from '../components/ButtonComponent';

import { ref, push } from 'firebase/database';
import { database } from '../firebaseConfig'; //Firebase databasen

export default function AddTaskScreen() {
    const [title, setTitle] = useState(''); //Opret titel som starter som en tom tekst.
    const [subject, setSubject] = useState(''); //Opret fag som starter som en tom tekst. 
    const [deadline, setDeadline] = useState(''); //Opret Deadline som starter som en tom tekst.

    const addTask = () => {
        push(ref(database, 'tasks'), {
            title: title,
            subject: subject,
            deadline: deadline,
            status: 'Ikke startet',
        });

        //Nulstil inputfelter efter oprettelse af en opgave.
        setTitle('');
        setSubject('');
        setDeadline('');
    };

    return (
        <View style={GlobalStyle.container}>

            <Text style={GlobalStyle.title}>
                Tilføj opgave
            </Text>

            <Text>
                Her kan du tilføje en ny studieopgave.
            </Text>

            <TextInput
                placeholder="Opgavens titel"
                value={title}
                onChangeText={setTitle}
            />

            <TextInput
                placeholder="Fag"
                value={subject}
                onChangeText={setSubject}
            />

            <TextInput
                placeholder="Deadline"
                value={deadline}
                onChangeText={setDeadline}
            />

            <ButtonComponent
                title="Tilføj opgave"
                onPress={addTask}
            />

        </View>
    );

}