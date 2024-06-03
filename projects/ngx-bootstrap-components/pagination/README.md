### Pagination Component

![Component Preview](../../../assets/42d8aa8f31c97e72e535954e985fbbb7.png)

The `DtlPaginationComponent` allows users to navigate through pages of data. It supports dynamic changes through Angular signals and adheres to the OnPush change detection strategy for performance optimization.

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

To integrate the `DtlPaginationComponent` in your Angular application, you can use the following HTML snippet:

```ts
import { DtlDtlPaginationComponent } from '@dotted-labs/ngx-bootstrap-components/pagination';
```

```html
<dtl-pagination
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
</dtl-pagination>
```
