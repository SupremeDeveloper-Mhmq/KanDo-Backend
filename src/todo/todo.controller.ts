import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreatToDoDTO } from './DTO/creat-todo.dto';
import { GetToDoFilter } from './DTO/Get-ToDO-Filter.dto';
import { ToDo } from './ToDo.model';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getToDo(@Query() filterDto: GetToDoFilter) {
    if (Object.keys(filterDto).length) {
      return this.todoService.GetToDoWithFilter(filterDto);
    }
    return this.todoService.getAllToDo();
  }

  @Get('/:id')
  getToDoById(@Param('id') id: string): ToDo {
    return this.todoService.getToDoById(id);
  }

  @Post()
  CreatTodo(@Body() CreatToDo: CreatToDoDTO): ToDo {
    return this.todoService.CreatToDo(CreatToDo);
  }
  @Delete('/:id')
  deleteToDOById(@Param('id') id: string) {
    this.todoService.DeleteToDOById(id);
  }
  @Patch('/:id/Proggress')
  UpdateToDoProggress(
    @Param('id') id: string,
    @Body('Proggress') Proggress: number,
  ): ToDo {
    return this.todoService.UpdateToDOProggress(id, Proggress);
  }
}
