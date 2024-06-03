# NGX Bootstrap Components

This library provides a set of Angular components integrated with Bootstrap, designed to be used with Angular's latest features like signals and the OnPush change detection strategy. The components are standalone, meaning they can be imported directly without the need for an encompassing Angular module.

## 🚀 Installation

To use NGX Bootstrap Components in your project, install the package via npm:

```
npm install @dotted-labs/ngx-bootstrap-components
```

## 📖 Components

### Pagination Component

The `PaginationComponent` allows users to navigate through pages of data. It supports dynamic changes through Angular signals and adheres to the OnPush change detection strategy for performance optimization.

- **Inputs:**

  - `sizeOptions`: Array of numbers to display per page options.
  - `hasPreviousPage`: Boolean signal to indicate if there is a previous page.
  - `hasNextPage`: Boolean signal to indicate if there is a next page.
  - `page`: Current page number.
  - `pageSize`: Number of items per page.
  - `total`: Total number of items.
  - `totalPages`: Total number of pages.

- **Outputs:**
  - `pageChange`: Emits the new page number when changed.
  - `pageSizeChange`: Emits the new page size when changed.

#### Example Usage

To integrate the `PaginationComponent` in your Angular application, you can use the following HTML snippet:

```html
<dl-pagination
  [sizeOptions]="[10, 20, 50, 100]"
  [hasPreviousPage]="hasPreviousPage$ | async"
  [hasNextPage]="hasNextPage$ | async"
  [page]="currentPage$ | async"
  [pageSize]="currentPageSize$ | async"
  [total]="totalItems$ | async"
  [totalPages]="totalPages$ | async"
  (pageChange)="onPageChange($event)"
  (pageSizeChange)="onPageSizeChange($event)"
>
</dl-pagination>
```

### Table Component

The `TableComponent` displays tabular data and includes features like skeleton screens for loading states, error handling, and empty states, all managed via Angular signals.

- **Inputs:**
  - `items`: Array of items to be displayed in the table.
  - `columns`: Array of column headers.
  - `isLoaded`: Boolean signal indicating if data is fully loaded.
  - `isLoading`: Boolean signal indicating if data is currently loading.
  - `isEmpty`: Boolean signal indicating if there are no data items to display.
  - `error`: Signal for error messages.
  - `skeletonRows`: Number of skeleton rows to display during loading.
  - `rowTemplate`: Template for rendering table rows.

#### Example Usage

To integrate the `TableComponent` in your Angular application, you can use the following HTML snippet:

```html
<dl-table
  [items]="items$ | async"
  [columns]="columns"
  [isLoaded]="isLoaded$ | async"
  [isLoading]="isLoading$ | async"
  [isEmpty]="isEmpty$ | async"
  [error]="error$ | async"
  [skeletonRows]="skeletonRows"
  [rowTemplate]="rowTemplate"
></dl-table>
```

### Image Input Component

The `ImgInputComponent` is designed for image file inputs, providing a base64 preview and integration with Angular forms and signals.

- **Properties:**

  - `base64`: Base64 string of the selected image.
  - `maxSize`: Maximum file size allowed.
  - `formats`: Allowed image formats.

- **Methods:**
  - `onInputChange($event)`: Handles changes to the input field.

#### Example Usage

To integrate the `ImgInputComponent` in your Angular application, you can use the following HTML snippet:

```html
<!-- Without ReactiveForms -->
<dl-img-input [maxSize]="maxSize" [formats]="formats" [(ngModel)]="value"></dl-img-input>

<!-- With ReactiveForms and formControl -->
<dl-img-input [maxSize]="maxSize" [formats]="formats" [formControl]="formControl"></dl-img-input>

<!-- With ReactiveForms and formControlName -->
<dl-img-input [maxSize]="maxSize" [formats]="formats" formControlName="formControlName"></dl-img-input>
```

## 🛡️ License

Arcane Auth is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🧑‍💻 Contributing

We have a [contributing guideline](./CONTRIBUTING.md) available. Feel free to contact us before coding.
