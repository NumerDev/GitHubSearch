import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GitHubRequestService } from 'src/app/services/git-hub-request.service';
import { Repository } from 'src/app/services/git-hub-request.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss'],
})
export class SearchViewComponent {
  items: Repository[] = [];

  constructor(private gitHubService: GitHubRequestService) {}

  /* Get limited repositories from GitHub by name  */
  getRepositories(name: string, limit: number): Subscription {
    return this.gitHubService.searchRepos(name, limit).subscribe((repos) => {
      this.items = repos;
    });
  }
}
