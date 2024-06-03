import { ChangeDetectorRef, Component, ElementRef, HostListener, effect, forwardRef, inject, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'dl-img-input',
  templateUrl: './img-input.component.html',
  styleUrls: ['./img-input.component.scss'],
  standalone: true,
  imports: [TranslateModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImgInputComponent),
      multi: true,
    },
  ],
})
export class ImgInputComponent implements ControlValueAccessor {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  // public value = input<File>();
  // public valueChange = output<File>();
  public base64: string;
  public maxSize = signal<string>('1mb');
  public formats = signal<string[]>(['webp', 'png', 'jpeg']);

  public value: File;
  public disabled = false;

  public onChange: (value: File) => void = () => {};
  public onTouched: () => void = () => {};

  @HostListener('change', ['$event.target.files'])
  public emitFiles(event: FileList): void {
    const file = event && event.item(0);
    this.onChange(file);
  }

  constructor(private host: ElementRef<HTMLInputElement>) {}

  public clearImage(): void {
    this.base64 = '';
    this.value = null;
    this.onChange(null);
  }

  public writeValue(obj: any): void {
    console.log('obj', obj);
    this.value = obj;
    this.base64 = obj;
    this.changeDetectorRef.detectChanges();
  }

  public onInputChange($event: any): void {
    console.log('as');
    const file = $event.target?.files?.[0];
    if (file) {
      this.base64 = URL.createObjectURL(file);
    }
    this.onChange(this.value);
  }

  public registerOnChange(fn: (value: File) => void): void {
    console.log('as');
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    console.log('as');
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
