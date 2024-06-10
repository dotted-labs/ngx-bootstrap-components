import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  OutputEmitterRef,
  Signal,
  TemplateRef,
  computed,
  input,
  output,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'dtl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [TranslateModule, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DtlTableComponent {
  public items: InputSignal<({ id: string } & unknown)[]> = input.required<({ id: string } & unknown)[]>();
  public columns: InputSignal<string[]> = input.required<string[]>();
  public isLoaded: InputSignal<boolean> = input.required<boolean>();
  public isLoading: InputSignal<boolean> = input.required<boolean>();
  public isEmpty: InputSignal<boolean> = input.required<boolean>();
  public error: InputSignal<string | null> = input.required<string | null>();
  public skeletonRows: InputSignal<number> = input<number>(10);
  public skeletonRowsArr: Signal<number[]> = computed<number[]>(() => Array(this.skeletonRows()));
  public rowTemplate: InputSignal<TemplateRef<unknown>> = input.required<TemplateRef<unknown>>();
  public emptyTemplate: InputSignal<TemplateRef<unknown>> = input<TemplateRef<unknown>>();
  public iconTemplate: InputSignal<TemplateRef<unknown>> = input<TemplateRef<unknown>>();
  public selectedIds: InputSignal<unknown[]> = input<unknown[]>();
  public isClickable: InputSignal<boolean> = input<boolean>(true);

  public selectItem: OutputEmitterRef<unknown> = output<unknown>();
}
