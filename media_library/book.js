
import Media from './index';

class Book extends Media {
    constructor(title, pages) {
        super(title)
        this._pages = pages;
    }
}