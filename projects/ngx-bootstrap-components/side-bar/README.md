### SideBar Component

The `SideBarComponent` is a component that is used to display a side bar with a menu of links. It supports dynamic changes through Angular signals and adheres to the OnPush change detection strategy for performance optimization.

- **Inputs:**

  - `menu`: Array of menu items for navigation with [DtlSideBarMenu](./src/interfaces/side-bar-menu.interface.ts) type.

- **Outputs:**
  - `onNavigate`: Emits the path of the newly selected menu item with [DtlSideBarItem](./src/interfaces/side-bar-item.interface.ts) type.

#### Example Usage

To integrate the `SideBarComponent` in your Angular application, you can use the following HTML snippet:

```ts
import { SideBarComponent } from '@dotted-labs/ngx-bootstrap-components/side-bar';

const menu: DtlSideBarMenu = [
  {
    title: 'Dashboard',
    items: [{ name: 'Dashboard', url: '/dashboard', icon: 'bi bi-dashboard', active: true }],
  },
];
```

```html
<dtl-side-bar [menu]="menu" (onNavigate)="onNavigate($event)"> </dtl-side-bar>
```
