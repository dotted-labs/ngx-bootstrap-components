import { Component, input } from '@angular/core';

@Component({
  selector: 'dtl-empty-section',
  templateUrl: './empty-section.component.html',
  styleUrls: ['./empty-section.component.scss'],
  standalone: true,
  imports: [],
})
export class DtlEmptySectionComponent {
  public title = input.required();
  public icon = input('ti ti-prompt');
}
