### Image Input Component

![Component Preview](../../../assets/135036d14517e5224054a004c964ff52.png)

The `DtlImgInputComponent` is designed for image file inputs, providing a base64 preview and integration with Angular forms and signals.

- **Inputs:**

  - `maxSize`: Maximum file size - example: `1mb`.
  - `formats`: Allowed image formats - example: `['jpg', 'png']`.

#### Example Usage

To integrate the `DtlImgInputComponent` in your Angular application, you can use the following HTML snippet:

```ts
import { DtlImgInputComponent } from '@dotted-labs/ngx-bootstrap-components/img-input';
```

```html
<!-- Without ReactiveForms -->
<dtl-img-input [maxSize]="maxSize" [formats]="formats" [(ngModel)]="value"></dtl-img-input>

<!-- With ReactiveForms and formControl -->
<dtl-img-input [maxSize]="maxSize" [formats]="formats" [formControl]="formControl"></dtl-img-input>

<!-- With ReactiveForms and formControlName -->
<dtl-img-input [maxSize]="maxSize" [formats]="formats" formControlName="formControlName"></dtl-img-input>
```
