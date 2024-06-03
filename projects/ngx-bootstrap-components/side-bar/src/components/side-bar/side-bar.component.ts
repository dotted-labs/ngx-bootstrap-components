import { ChangeDetectionStrategy, Component, InputSignal, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DtlSideBarMenu } from '../../interfaces/side-bar-menu.interface';
import { DtlSideBarItem } from '../../public_api';

@Component({
  selector: 'dtl-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  standalone: true,
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DtlSideBarComponent {
  public menu: InputSignal<DtlSideBarMenu> = input.required<DtlSideBarMenu>();
  public currentUrl: InputSignal<string> = input.required<string>();

  public onNavigate = output<DtlSideBarItem>();

  public navigateTo(item: DtlSideBarItem): void {
    this.onNavigate.emit(item);
  }
}
