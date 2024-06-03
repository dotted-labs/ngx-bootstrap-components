import { ChangeDetectionStrategy, Component, InputSignal, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'dtl-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [FormsModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DtlPaginationComponent {
  public sizeOptions: InputSignal<number[]> = input<number[]>([10, 20, 50, 100]);
  public hasPreviousPage: InputSignal<boolean> = input.required<boolean>();
  public hasNextPage: InputSignal<boolean> = input.required<boolean>();
  public page: InputSignal<number> = input<number>(1);
  public pageSize: InputSignal<number> = input<number>(10);
  public total: InputSignal<number> = input.required<number>();
  public totalPages: InputSignal<number> = input.required<number>();

  public pageChange = output<number>();
  public pageSizeChange = output<number>();

  public changePage(page: number): void {
    this.pageChange.emit(page);
  }

  public changePageSize(pageSize: number): void {
    this.pageSizeChange.emit(pageSize);
  }
}
