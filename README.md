
# Easy Styles JS

A lightweight JavaScript utility for easy inline styling, inspired by Tailwind CSS. Apply CSS properties directly via class names on HTML elements—no build step required! It scans classes like `bg-ffffff`, `color-000000`, `br-10px`, and more, then applies them as inline styles. Perfect for quick prototypes or small projects.

## Features

- **Zero Dependencies**: Pure vanilla JS, no libraries needed.
- **Comprehensive Coverage**: Supports most common CSS properties (colors, spacing, typography, layout, flex/grid, shadows, transforms, etc.).
- **Dynamic Updates**: Uses MutationObserver to apply styles to newly added elements.
- **Easy Extension**: Add new class patterns in the code as needed.
- **No Media Queries**: Focuses on core styles; extend for responsive if desired.

## Installation

1. Download `easy-styles.js` and save it in your project folder.
2. Include it in your HTML before the closing `</body>` tag:

```html
<script src="easy-styles.js"></script>
```

3. That's it! Styles will auto-apply on page load and to dynamic content.

## Usage

Add class names to any HTML element following the patterns below. The script runs automatically on `DOMContentLoaded` and watches for changes.

### Colors

- Text color: `color-fdfdfd` → `color: #fdfdfd;`
- Background color: `bg-fdfdfd` → `background-color: #fdfdfd;`

### Borders

- Border: `b-1px-s-fdfdfd` → `border: 1px solid #fdfdfd;` (format: width-style-color)
  - Styles: `s` (solid), `d` (dashed), `dd` (dotted), `db` (double); default: solid
- No border: `b-none` → `border: none;`
- Border spacing: `bs-10px` → `border-spacing: 10px;`
- Border width: `bw-2px` → `border-width: 2px;`
- Border color: `bo-fdfdfd` → `border-color: #fdfdfd;`

### Spacing (Margins & Padding)

- All sides: `m-10px` → `margin: 10px;`, `p-15px` → `padding: 15px;`
- Directional:
  - `mt-5px` → `margin-top: 5px;`
  - `mr-5px` → `margin-right: 5px;`
  - `mb-5px` → `margin-bottom: 5px;`
  - `ml-5px` → `margin-left: 5px;`
- Axis:
  - `mx-20px` → `margin-left/right: 20px;`
  - `my-20px` → `margin-top/bottom: 20px;`
- Same patterns for padding: `pt-`, `pr-`, `pb-`, `pl-`, `px-`, `py-`

### Typography

- Font size: `fs-16px` → `font-size: 16px;`
- Font weight: `fw-bold` → `font-weight: bold;`, `fw-normal` → `normal`, `fw-500` → `500`, `fw-light` → `300`
- Font family: `ff-arial-sans-serif` → `font-family: Arial, sans-serif;` (use `-` for spaces)
- Font style: `fi-italic` → `font-style: italic;`, `fi-normal` → `normal`
- Text align: `txt-center` → `text-align: center;`, `txt-left`, `txt-right`, `txt-justify`
- Text decoration: `td-underline` → `text-decoration: underline;`, `td-line-through`, `td-none`
- Line height: `lh-1.5` → `line-height: 1.5;`
- Letter spacing: `ls-2px` → `letter-spacing: 2px;`

### Sizing

- Width: `w-100%` → `width: 100%;`, `w-300px` → `width: 300px;`
- Height: `h-200px` → `height: 200px;`
- Min/Max width: `min-w-200px` → `min-width: 200px;`, `max-w-full` → `max-width: 100%;`
- Min/Max height: `min-h-100px` → `min-height: 100px;`, `max-h-500px` → `max-height: 500px;`

### Layout & Display

- Display: `display-block` → `display: block;`, `display-inline` → `inline`, `display-inline-block` → `inline-block`, `display-flex` → `flex`, `display-grid` → `grid`, `display-none` → `none`
- Position: `pos-relative` → `position: relative;`, `pos-absolute` → `absolute`, `pos-fixed` → `fixed`, `pos-sticky` → `sticky`
- Positioning:
  - `t-10px` → `top: 10px;`
  - `r-10px` → `right: 10px;`
  - `b-10px` → `bottom: 10px;`
  - `l-10px` → `left: 10px;`
  - `z-999` → `z-index: 999;`
- Flex:
  - Direction: `flex-row` → `flex-direction: row;`, `flex-row-reverse` → `row-reverse`, `flex-col` → `column`, `flex-col-reverse` → `column-reverse`
  - Wrap: `flex-wrap-wrap` → `flex-wrap: wrap;`, `flex-wrap-nowrap` → `nowrap`
  - Justify: `justify-center` → `justify-content: center;`, `justify-flex-start`, `justify-flex-end`, `justify-space-between`, `justify-space-around`
  - Align:
    - Items: `align-items-center` → `align-items: center;`, `align-items-flex-start`, `align-items-flex-end`, `align-items-stretch`
    - Content: `align-content-center` → `align-content: center;`, `align-content-flex-start`, `align-content-flex-end`, `align-content-stretch`
    - Self: `align-center` → `align-self: center;`, `align-flex-start`, `align-flex-end`
  - Gap: `gap-20px` → `gap: 20px;`
- Grid:
  - Columns: `grid-cols-3` → `grid-template-columns: repeat(3, 1fr);`
  - Rows: `grid-rows-2` → `grid-template-rows: repeat(2, 1fr);`
  - Gap: `grid-gap-10px` → `grid-gap: 10px;`

### Effects

- Opacity: `op-0.5` → `opacity: 0.5;`
- Overflow: `overflow-hidden` → `overflow: hidden;`, `overflow-scroll` → `scroll`, `overflow-auto` → `auto`
- Cursor: `cursor-pointer` → `cursor: pointer;`, `cursor-default` → `default`, `cursor-wait` → `wait`
- Shadow: `shadow-sm` → small box-shadow, `shadow-md` → medium, `shadow-lg` → large, `shadow-xl` → extra large, `shadow-none` → `none`
- Transition: `trans-all` → `transition: all 0.2s ease-in-out;`, `trans-none` → `none`
- Transform:
  - Scale: `transform-scale-1.1` → `transform: scale(1.1);`
  - Rotate: `transform-rotate-90` → `rotate(90deg);` (or `transform-rotate-45deg`)
  - Translate: `transform-translate-x-10px` → `translateX(10px);`

### Other

- Border radius: `br-50per` → `border-radius: 50%;`, `br-10px` → `10px`
- Float: `float-left` → `float: left;`, `float-right` → `right`, `float-none` → `none`
- Clear: `clear-both` → `clear: both;`, `clear-left` → `left`, `clear-right` → `right`
- Visibility: `visibility-hidden` → `visibility: hidden;`, `visibility-visible` → `visible`
- Outline: `outline-none` → `outline: none;`, `outline-w-2px` → `outline-width: 2px;`
- User select: `user-select-none` → `user-select: none;`, `user-select-auto` → `auto`
- Pointer events: `pointer-events-none` → `pointer-events: none;`, `pointer-events-auto` → `auto`
- Vertical align: `vertical-align-middle` → `vertical-align: middle;`, `vertical-align-top` → `top`, `vertical-align-bottom` → `bottom`
- List style: `list-style-none` → `list-style: none;`, `list-style-disc` → `disc`, `list-style-circle` → `circle`, `list-style-square` → `square`
- Content: `content-none` → `content: none;`

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Easy Styles Demo</title>
</head>
<body>
    <div class="bg-fdfdfd color-000000 br-10px b-1px-s-cccccc p-20px m-10px w-300px txt-center fs-18px fw-bold shadow-md trans-all display-flex justify-center align-items-center">
        Hello, World! Styled with Easy JS.
    </div>
    <script src="easy-styles.js"></script>
</body>
</html>
```

## Extending

To add new patterns, edit the `applyEasyStyles` function in `easy-styles.js`. For example, add a new `else if` block for custom classes like `custom-prop-value`.

## Limitations

- Inline styles only (no pseudo-elements or media queries).
- Hex colors without `#` prefix (e.g., `fdfdfd`).
- Not production-optimized for huge DOMs (MutationObserver can be heavy).


## Contributing

Pull requests welcome! Fork, add features, and submit a PR.


Built with ❤️ for quick styling fun.
```
