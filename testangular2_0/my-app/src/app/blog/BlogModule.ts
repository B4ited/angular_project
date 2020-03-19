import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './services/PostServices';
import { PostResources } from './services/PostResources';
import { PostListModule } from './list/PostListModule';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({

    imports: [
        PostListModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        PostListModule
    ],
    declarations: [],
    providers: [
        PostService,
        PostResources
    ],
    
})
export class BlogModule{
}