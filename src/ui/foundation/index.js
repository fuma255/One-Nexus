export { default as colors } from './colors/colors';
export { default as core } from './core/core';
export { default as typography } from './typography/typography';
export { default as grid } from './grid/grid';

export function foundation(ui) {
    const style = document.createElement('style');

    style.appendChild(document.createTextNode(`
        html, body {
            margin: 0;
            padding: 0;
        }

        html {
            overflow-x: hidden;
        }

        body {
            background: ${ui.core.background(ui.colors)};
            color: ${ui.core['text-color'](ui)};
            font-family: ${ui.core['font-family'](ui.typography)};
            font-size: ${ui.core['font-size'](ui.typography)};
            line-height: ${ui.core['line-height']};
        }

        ins {
            color: color('brand', 'brand-1');
            font-weight: bold;
            text-decoration: none;
        }

        h1, h2, h3, h4, h5, h6 {
            font-size: ${ui.core['font-size'](ui.typography)};
        }

        ::selection {
            background-color: ${ui.core['selection-background'](ui.colors)};
            color: ${ui.core['selection-color'](ui.colors)};
            text-shadow: none;
        }

        *::before, *::after {
            box-sizing: border-box;
        }
    `));

    document.head.appendChild(style);
}