import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from './ToDo.model';

@Injectable()
export class TodoService {
  private todo: ToDo[] = [];

  getAllToDo(): ToDo[] {
    console.log(this.todo);
    return this.todo;
  }
  CreatToDo(
    name: string,
    desc: string,
    Priority: number,
    Due: number,
    Proggress: number,
  ) {
    const todo: ToDo = {
      id: uuidv4(),
      name,
      desc,
      Priority,
      Due,
      Proggress,
    };
    this.todo.push(todo);
    return todo;
  }
}
