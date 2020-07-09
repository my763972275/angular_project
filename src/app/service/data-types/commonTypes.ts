export type Banner = {
    targetid :number;
    url:string;
    imageUrl:string;
}


export type HotTag = {
    id :number;
    name:string;
    position:number;
}


export type SongSheet = {
    name:string;
    id:number;
    playCount:number;
    picUrl:string;
}

export type Singer = {
    id:number;
    name:string;
    picUrl:string;
    albumSize:number;
}