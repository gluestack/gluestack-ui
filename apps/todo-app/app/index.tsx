import React, { useState } from "react";
import { VStack } from "@/components/ui/vstack";
import { FormControl } from "@/components/ui/form-control";
import { Input, InputField, InputIcon } from "@/components/ui/input";
import { AddIcon } from "@/components/ui/icon";
import { Pressable } from "@/components/ui/pressable";
import { defaultTodos } from "@/constants/todo";
import TodoContainer, { Todo } from "@/components/app-components/TodoContainer";
import shortid from "shortid";

const Home = () => {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const addTodo = (task: string) => {
    const lastTodo = todos[todos?.length - 1];
    if (lastTodo?.task !== "" && task !== "") {
      setTodos([
        ...todos,
        {
          id: shortid.generate(),
          task: task,
          completed: false,
        },
      ]);
      setItem("");
    }
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos?.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <VStack className="flex-1 bg-secondary-100 md:bg-secondary-0 md:items-center md:justify-center ">
      <VStack className="rounded-md bg-secondary-100 md:h-[500px] md:w-[700px]">
        <FormControl className="my-4">
          <Input variant="underlined" size="sm" className="mx-6 my-2">
            <InputField
              placeholder="What is your next task?"
              value={item}
              onChangeText={(value) => setItem(value)}
              onSubmitEditing={() => addTodo(item)}
            />
            <Pressable onPress={() => addTodo(item)}>
              <InputIcon as={AddIcon} className="cursor-pointer h-3 w-3" />
            </Pressable>
          </Input>
        </FormControl>
        {todos?.map((todo: Todo, index: number) => (
          <TodoContainer
            key={index}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default Home;
