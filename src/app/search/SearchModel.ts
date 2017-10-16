export class SearchModel {

    public title: string;
    public author: string;
    public publisher: string;
    public isAvailable: boolean;
    public categories: string[];
    public dateOfPublish: Date;
    public tags: string[];

    public showAuthor: boolean;
    public showTitle: boolean;
    public showPublisher: boolean;
    constructor(){}
}