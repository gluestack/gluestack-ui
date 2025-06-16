import React from "react";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { CheckIcon, CloseIcon, Icon } from "@/components/ui/icon";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";

export interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

const TodoContainer = ({
  todo,
  toggleTodo,
  deleteTodo,
  ...props
}: {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}) => {
  return (
    <HStack
      {...props}
      className="rounded-md hover:bg-secondary-200 justify-between items-center"
    >
      <Checkbox
        onChange={(_isChecked) => toggleTodo(todo.id)}
        size="sm"
        aria-label={todo.task}
        value={todo.task}
        isChecked={todo.completed}
        className="pl-6 py-2 flex-1"
      >
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel className="text-sm data-[checked=true]:line-through">
          {todo.task}
        </CheckboxLabel>
      </Checkbox>
      <Pressable className="pr-6 py-2" onPress={() => deleteTodo(todo.id)}>
        {({ hovered }: { hovered: boolean }) => {
          return (
            <Icon
              as={CloseIcon}
              size="xs"
              className={hovered ? "stroke-red-400" : "stroke-primary-50"}
            />
          );
        }}
      </Pressable>
    </HStack>
  );
};

export default TodoContainer;
