import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

/* Types of object data from request */
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

  /* Get request for repository and filtered for repository only  */
  searchRepository(name: string, limit: number) {
    return this.http
      .get<{ items: Repository[] }>(
        `${this.rootUrl}/search/repositories?q=${name}&per_page=${limit}`
      )
      .pipe(map((res) => res.items));
  }

  /* Get request for repository by owner and name */
  getRepository(owner: string, name: string) {
    return this.http.get<Repository>(`${this.rootUrl}/repos/${owner}/${name}`);
  }
}
