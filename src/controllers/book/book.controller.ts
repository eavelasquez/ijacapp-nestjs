import { Controller, Get, Param, Post, Body, Put, Res } from '@nestjs/common';
import { BookService } from './../../services/book/book.service';
import { BookDto } from './../../models/book/book';
import { getCurves } from 'crypto';
import { ExportExcelService } from './../../services/export-excel/export-excel/export-excel.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService, private exportExcel: ExportExcelService) { }

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

    @Get('/csv/:id')
    async  getCurves(@Param('id') id, @Res() res) {
        let documents = [
            {
                Make: 'Nissan',
                Model: 'Murano',
                Year: '2013',
                Specifications: {
                    Mileage: '7106',
                    Trim: 'S AWD'
                }
            },
            {
                Make: 'BMW',
                Model: 'X5',
                Year: '2014',
                Specifications: {
                    Mileage: '3287',
                    Trim: 'M'
                }
            }
        ];
        const data = this.exportExcel.convetTpCsv(documents);
        await this.exportExcel.saveFile(data, `example${id}`)
            .then(function (result) {
                result.saveFiles('files');
                console.log(result.file.url);
                res.json({ url: result.file.url });
            });

    }
}
