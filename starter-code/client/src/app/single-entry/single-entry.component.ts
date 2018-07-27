import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { JournalService } from 'service/journal.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  journal
  constructor(private getJou: JournalService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.journal = this.getJou.getJournal(Number(params.id)))
      
  }

}
