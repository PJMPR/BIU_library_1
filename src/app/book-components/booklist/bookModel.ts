export class BookModel {

    constructor(
        public id:number,
        public imgURL:string,
        public title:string,
        public publisher:string,
        public authors:string[],
        public quantity:number        
    ) { }

    
    
   

}