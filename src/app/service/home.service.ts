import { Injectable, Inject } from '@angular/core';
import { ServiceModule, API_CONFIG } from './service.module'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Banner, HotTag, SongSheet } from './data-types/commonTypes';
import { map } from 'rxjs/internal/operators'
 
@Injectable({
  providedIn: ServiceModule
})
export class HomeService {

  constructor(private http: HttpClient,@Inject(API_CONFIG) private uri:string) { }

  //获取轮播图
  getBanners():Observable<Banner[]>{
       return this.http.get(this.uri + 'banner')
       .pipe(map((res:{banners:Banner[]}) => res.banners))
  }
 
   
   //获取热门歌单
   getHotTags():Observable<HotTag[]>{
       return this.http.get(this.uri + 'playlist/hot')
       .pipe(map((res:{tags:HotTag[]}) => {
         return res.tags.sort((x:HotTag,y:HotTag) => {
             return x.position - y.position
         }).slice(0,5);
       }));
   }

   //获取个人歌单
   getPersonalSheetList():Observable<SongSheet[]>{
       return this.http.get(this.uri + 'personalized')
       .pipe(map((res:{result:SongSheet[]}) => res.result.slice(0,16)))
   }
}
