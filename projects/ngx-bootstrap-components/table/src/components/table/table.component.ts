import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, InputSignal, Signal, TemplateRef, computed, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [TranslateModule, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  public items: InputSignal<unknown[]> = input.required<unknown[]>();
  public columns: InputSignal<string[]> = input.required<string[]>();
  public isLoaded: InputSignal<boolean> = input.required<boolean>();
  public isLoading: InputSignal<boolean> = input.required<boolean>();
  public isEmpty: InputSignal<boolean> = input.required<boolean>();
  public error: InputSignal<string | null> = input.required<string | null>();
  public skeletonRows: InputSignal<number> = input<number>(10);
  public skeletonRowsArr: Signal<number[]> = computed<number[]>(() => Array(this.skeletonRows()));
  public rowTemplate: InputSignal<TemplateRef<unknown>> = input.required<TemplateRef<unknown>>();
}
