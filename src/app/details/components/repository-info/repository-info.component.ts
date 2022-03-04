import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  GitHubRequestService,
  Repository,
} from 'src/app/services/git-hub-request.service';

@Component({
  selector: 'app-repository-info',
  templateUrl: './repository-info.component.html',
  styleUrls: ['./repository-info.component.scss'],
})
export class RepositoryInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private github: GitHubRequestService
  ) {}

  data?: Repository = undefined;

  ngOnInit(): void {
    /* Get repository data for template by query params */
    this.route.params.subscribe((params) => {
      this.github
        .getRepository(params['owner'], params['repo'])
        .subscribe((e) => {
          this.data = e;
        });
    });
  }
}
