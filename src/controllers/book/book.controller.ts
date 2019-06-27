import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { BookService } from './../../services/book/book.service';
import { BookDto } from './../../models/book/book';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }

    @Get('community-action/:id')
    async findAllBook(@Param('id') id: string) {
        this.bookService.findAllBooks(id);
    }

    @Post()
    async createBook(@Body() book: BookDto) {
        this.bookService.createBook(book);
    }

    @Put(':id')
    async finalizeBook(@Body() body, @Param('id') id) {
        this.bookService.finalizeBook(body._id, id);
    }
}
