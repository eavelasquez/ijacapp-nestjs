import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Book } from 'src/interfaces/book.interface';
import { InjectModel } from '@nestjs/mongoose';
import { BookDto } from './../../models/book/book';
import { CustomHttpException } from './../../utils/custom-http-exception';
import { CommunityActionService } from './../community-action/community-action.service';

@Injectable()
export class BookService {
    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>,
                private communityActionService: CommunityActionService) {}

    async createBook(book: BookDto) {
        return await new this.bookModel(book).save().catch(reason => {
            throw CustomHttpException.saveException(reason);
        });
    }

    async finalizeBook(communityAction: string, book: string) {
        let result;
        await this.communityActionService.findOneCommunityAction(communityAction).then(async value => {
            result = await this.bookModel.findByIdAndUpdate(book, { $push: { affiliates: [value.affiliates] } }, (err, res: any) => {
                if (err) {
                    throw CustomHttpException.internalError(err);
                } else if (res) {
                    this.communityActionService.removeAffiliatesCommunityAction(value._id, [res.affiliates._id]).then(value1 => {
                        console.log(value1);
                    });
                } else {
                    throw CustomHttpException.notFound('No se ha encontrado ese libro');
                }
            });
        }).catch(reason => {
            throw CustomHttpException.serverError(reason);
        });
        return result;
    }

    async findAllBooks(id: string) {
        return this.bookModel.findById(id).populate('communityAction').catch(reason => {
            throw CustomHttpException.serverError(reason);
        });
    }
}
