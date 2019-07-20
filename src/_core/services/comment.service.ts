import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    listComment = [
        { username: 'John', comment: 'Phim rất sâu sắc.', rating: [1, 2, 3, 4, 5] },
        { username: 'Trancy', comment: 'Phim hay, hình ảnh đẹp.', rating: [1, 2, 3] },
    ];
    constructor() { }

    getDanhSachBinhLuan() {
        return this.listComment;
    }
}