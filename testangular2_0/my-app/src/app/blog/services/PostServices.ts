import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { PostListItem } from './dataModule/PostListItem';
import { PostResources } from './PostResources';



@Injectable()
export class PostService {

    constructor(private postResources: PostResources) {
    }
    public getAllPostItems(): Observable<PostListItem[]>{
       return this.postResources.findAll();
    }

}