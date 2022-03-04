import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface RepositoryOwner {
  id: number;
  login: string;
  avatar_url: string;
}

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  owner: RepositoryOwner;
  watchers_count: number;
  forks_count: number;
}

@Injectable({
  providedIn: 'root',
})
export class GitHubRequestService {
  readonly rootUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  searchRepos(name: string, limit: number) {
    return this.http
      .get<{ items: Repository[] }>(
        `${this.rootUrl}/search/repositories?q=${name}&per_page=${limit}`
      )
      .pipe(map((res) => res.items));
  }

  getRepository(owner: string, name: string) {
    return this.http.get<Repository>(`${this.rootUrl}/repos/${owner}/${name}`);
  }
}
