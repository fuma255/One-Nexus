## Search

##### Components

* go
* close
* trigger

##### Modifiers

* visible
* input

##### Quick Look

> To avoid conficts with other elements, this module's default namespace is `searchBox`

```html
<div class="searchBox">
    <form class="container">
        <input class="searchBox_input" required type="search" placeholder="Enter search query..." />
        <div class="button_group-small">
            <button class="searchBox_go button-icon-primary" type="submit">
                <i class="fa fa-search"></i>
            </button>
            <span class="searchBox_close button-icon">
                <i class="fa fa-times"></i>
            </span>
        </div>
    <form>
</div>
```

```html
<span class="searchBox_trigger">
    <i class="fa fa-search"></i>
</span>
```

### Options

> For default values view the [`search.json`](search.json) file

<table class="table">
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>The name used when generating the CSS selector</td>
        </tr>
        <tr>
            <td>background</td>
            <td>The background color for the main search module</td>
        </tr>
        <tr>
            <td>height</td>
            <td>The height of the module</td>
        </tr>
        <tr>
            <td>input-background</td>
            <td>The background for the input element</td>
        </tr>
        <tr>
            <td>input-color</td>
            <td>The text color for the input element</td>
        </tr>
        <tr>
            <td>input-weight</td>
            <td>The font weight for the input element</td>
        </tr>
        <tr>
            <td>placeholder-color</td>
            <td>The color for the input placeholder</td>
        </tr>
        <tr>
            <td>placeholder-weight</td>
            <td>The font weight for the input placeholder</td>
        </tr>
    </tbody>
</table>

To modify any of the above options, pass them to the `search` object in your theme's config file (e.g. [themes/One-Nexus/config.json](../../../themes/One-Nexus/config.json)):

```json
{
    "app": {
        "search": {
            "background": "white",
            "input-color": "#222222"
        }
    }
}
```

### Sass

Load the search styles in your theme's main `scss` file (e.g. [themes/One-Nexus/One-Nexus.scss](../../../themes/One-Nexus/One-Nexus.scss)) by including the `scroll-top()` mixin:

```scss
@import '../../app';
@import './config.json';

@include search();
```

### JavaScript

Call the `search()` function in your theme's main `js` file (e.g. [themes/One-Nexus/One-Nexus.js](../../../themes/One-Nexus/One-Nexus.js)):

```js
import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

app.search();
```

#### API

##### Show

```js
app.search().show();
```

##### Hide

```js
app.search().hide();
```

##### Toggle

```js
app.search().toggle();
```