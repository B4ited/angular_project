import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiConfig} from '../ApiConfig'
import { PostListItem } from './dataModule/PostListItem';
@Injectable()
export class PostResources {
    private readonly URL =ApiConfig.url + '/posts';
    constructor(private httpClient: HttpClient) {
    }

    public findAll(): Observable<PostListItem[]> {
       return this.httpClient.get(this.URL) as Observable<PostListItem[]>;
    }


}