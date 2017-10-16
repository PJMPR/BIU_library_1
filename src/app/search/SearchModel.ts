export class SearchModel {

    constructor(
        public title: string,
        public author: string,
        public publisher: string,
        public isAvailable: boolean,
        public categories: string[],
        public dateOfPublish: Date,
        public tags: string[],
    ) { }
}