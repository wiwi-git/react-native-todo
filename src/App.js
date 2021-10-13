import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Dimensions, StatusBar } from "react-native";
import Input from "./components/Input";
import IconButton from "./components/IconButton";
import { images } from "./images";
import Task from "./components/Task";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme})=>theme.background};
    align-items: center;
    justify-content: flex-start;
`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({theme})=>theme.main};
    align-self: flex-start;
    margin: 0px 20px;
`;

const List = styled.ScrollView`
    flex: 1;
    width: ${({ width})=> width - 40}px;
`


export default () => {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState({
        '1' : { id: '1', text: 'Hanbit', completed: false},
        '2' : { id: '2', text: 'Hanbit asdf ', completed: true}
    });

    const _addTask = () => {
        alert(`Add: ${newTask}`);
        setNewTask('');
    };

    const _handleTextChange = text => {
        setNewTask(text);
    };

    const width = Dimensions.get('window').width;

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar 
                    barStyle='light-content'
                    backgroundColor={theme.background}
                />
                <Title>TODO List</Title>
                <Input 
                    placeholder="+ Add a Task"
                    value={newTask}
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addTask}
                />
                <List width={width}>
                    {
                        Object.values(tasks).reverse.map(item => (
                            <Task text={item.text}/>
                        ))
                    }
                </List>
            </Container>
        </ThemeProvider>
    )
}