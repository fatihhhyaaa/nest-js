import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Roles } from 'src/auth/decorators/role.decorators';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Roles('MEMBER')
  @Post('create')
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }
  @Roles('MEMBER')
  @Get('findall')
  findAll() {
    return this.bookService.findAll();
  }
  @Roles('MEMBER')
  @Get('findone/:id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }
  @Roles('MEMBER')
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }
  @Roles('MEMBER')
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
