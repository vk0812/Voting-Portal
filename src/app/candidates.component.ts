import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
providedIn: 'root'
})

export class CandidatesComponent{
    constructor(private http: HttpClient){

    }


getData(){
    let url = " "; //url to call api
    return this.http.get(url);
}
}