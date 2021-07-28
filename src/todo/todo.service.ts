import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreatToDoDTO } from './DTO/creat-todo.dto';
import { GetToDoFilter } from './DTO/Get-ToDO-Filter.dto';
import { ToDo } from './ToDo.model';

@Injectable()
export class TodoService {
  private todo: ToDo[] = [];

  getAllToDo(): ToDo[] {
    console.log(this.todo);
    return this.todo;
  }
  CreatToDo(CreatToDo: CreatToDoDTO) {
    const { name, desc, Priority, Due, Proggress } = CreatToDo;
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
  getToDoById(id: string): ToDo {
    const found = this.todo.find((todo) => todo.id === id);
    if (!found) {
      throw new NotFoundException(`Task With ID "${id}" Not Found`);
    }
    return found;
  }
  DeleteToDOById(id: string): void {
    this.todo = this.todo.filter((todo) => todo.id !== id);
  }
  UpdateToDOProggress(id: string, proggress: number) {
    const todo = this.getToDoById(id);
    todo.Proggress = proggress;
    return todo;
  }
  GetToDoWithFilter(filterDto: GetToDoFilter): ToDo[] {
    const { search } = filterDto;
    let ToDO = this.getAllToDo();
    if (search) {
      ToDO = ToDO.filter(
        (todo) => todo.name.includes(search) || todo.desc.includes(search),
      );
    }
    return ToDO;
  }
}
