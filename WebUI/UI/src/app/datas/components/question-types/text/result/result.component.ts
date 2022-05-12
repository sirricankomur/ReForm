import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-text-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {}

  getTitle() {
    return this.localStorageService.getLoadedQuestion().title;
  }
}
