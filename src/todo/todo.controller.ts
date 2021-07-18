import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getAllToDo() {
    return this.todoService.getAllToDo();
  }
  @Post()
  CreatTodo(
    @Body('name') name: string,
    @Body('desc') desc: string,
    @Body('Priority') Priority: number,
    @Body('Due') Due: number,
    @Body('Proggress') Proggress: number,
  ) {
    return this.todoService.CreatToDo(name, desc, Priority, Due, Proggress);
  }
}
