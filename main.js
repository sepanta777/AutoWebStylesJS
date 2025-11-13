function applyEasyStyles(element) {
    if (!element || !element.classList) return;
    const classes = element.className.split(' ');
    const styles = {};
    classes.forEach(cls => {
        if (cls.startsWith('color-')) {
            const hex = cls.slice(6);
            styles.color = `#${hex}`;
        } else if (cls.startsWith('bg-')) {
            const hex = cls.slice(3);
            styles.backgroundColor = `#${hex}`;
        } else if (cls.startsWith('br-')) {
            const value = cls.slice(3);
            styles.borderRadius = value;
        } else if (cls.startsWith('b-')) {
            if (cls === 'b-none') {
                styles.border = 'none';
            } else {
                const parts = cls.slice(2).split('-');
                if (parts.length >= 3) {
                    const width = parts[0];
                    let style = parts[1];
                    switch (style) {
                        case 's': style = 'solid'; break;
                        case 'd': style = 'dashed'; break;
                        case 'dd': style = 'dotted'; break;
                        case 'db': style = 'double'; break;
                        default: style = 'solid';
                    }
                    const hex = parts.slice(2).join('-');
                    styles.border = `${width} ${style} #${hex}`;
                }
            }
        } else if (cls.startsWith('bs-')) {
            const hex = cls.slice(3);
            styles.borderSpacing = hex;
        } else if (cls.startsWith('bw-')) {
            const value = cls.slice(3);
            styles.borderWidth = value;
        } else if (cls.startsWith('bo-')) {
            const hex = cls.slice(3);
            styles.borderColor = `#${hex}`;
        } else if (cls.startsWith('m-') || cls.startsWith('mt-') || cls.startsWith('mr-') || cls.startsWith('mb-') || cls.startsWith('ml-') || cls.startsWith('mx-') || cls.startsWith('my-')) {
            const value = cls.slice(cls.indexOf('-') + 1);
            if (cls.startsWith('m-')) styles.margin = value;
            else if (cls.startsWith('mt-')) styles.marginTop = value;
            else if (cls.startsWith('mr-')) styles.marginRight = value;
            else if (cls.startsWith('mb-')) styles.marginBottom = value;
            else if (cls.startsWith('ml-')) styles.marginLeft = value;
            else if (cls.startsWith('mx-')) {
                styles.marginLeft = value;
                styles.marginRight = value;
            } else if (cls.startsWith('my-')) {
                styles.marginTop = value;
                styles.marginBottom = value;
            }
        } else if (cls.startsWith('p-') || cls.startsWith('pt-') || cls.startsWith('pr-') || cls.startsWith('pb-') || cls.startsWith('pl-') || cls.startsWith('px-') || cls.startsWith('py-')) {
            const value = cls.slice(cls.indexOf('-') + 1);
            if (cls.startsWith('p-')) styles.padding = value;
            else if (cls.startsWith('pt-')) styles.paddingTop = value;
            else if (cls.startsWith('pr-')) styles.paddingRight = value;
            else if (cls.startsWith('pb-')) styles.paddingBottom = value;
            else if (cls.startsWith('pl-')) styles.paddingLeft = value;
            else if (cls.startsWith('px-')) {
                styles.paddingLeft = value;
                styles.paddingRight = value;
            } else if (cls.startsWith('py-')) {
                styles.paddingTop = value;
                styles.paddingBottom = value;
            }
        } else if (cls.startsWith('fs-')) {
            const value = cls.slice(3);
            styles.fontSize = value;
        } else if (cls.startsWith('fw-')) {
            const weight = cls.slice(3);
            styles.fontWeight = weight === 'bold' ? 'bold' : (weight === 'normal' ? 'normal' : (weight === 'light' ? '300' : weight));
        } else if (cls.startsWith('ff-')) {
            const family = cls.slice(3).replace(/-/g, ' ');
            styles.fontFamily = family;
        } else if (cls.startsWith('fi-')) {
            styles.fontStyle = cls.slice(3) === 'italic' ? 'italic' : 'normal';
        } else if (cls.startsWith('txt-')) {
            const align = cls.slice(4);
            styles.textAlign = align === 'center' ? 'center' : (align === 'left' ? 'left' : (align === 'right' ? 'right' : (align === 'justify' ? 'justify' : align)));
        } else if (cls.startsWith('td-')) {
            const dec = cls.slice(3);
            styles.textDecoration = dec === 'underline' ? 'underline' : (dec === 'line-through' ? 'line-through' : (dec === 'none' ? 'none' : dec));
        } else if (cls.startsWith('lh-')) {
            const value = cls.slice(3);
            styles.lineHeight = value;
        } else if (cls.startsWith('ls-')) {
            const value = cls.slice(3);
            styles.letterSpacing = value;
        } else if (cls.startsWith('w-')) {
            const value = cls.slice(2);
            styles.width = value;
        } else if (cls.startsWith('h-')) {
            const value = cls.slice(2);
            styles.height = value;
        } else if (cls.startsWith('min-w-')) {
            const value = cls.slice(6);
            styles.minWidth = value;
        } else if (cls.startsWith('max-w-')) {
            const value = cls.slice(6);
            styles.maxWidth = value;
        } else if (cls.startsWith('min-h-')) {
            const value = cls.slice(6);
            styles.minHeight = value;
        } else if (cls.startsWith('max-h-')) {
            const value = cls.slice(6);
            styles.maxHeight = value;
        } else if (cls.startsWith('op-')) {
            const value = cls.slice(3);
            styles.opacity = value;
        } else if (cls.startsWith('pos-')) {
            const pos = cls.slice(4);
            styles.position = pos === 'relative' ? 'relative' : (pos === 'absolute' ? 'absolute' : (pos === 'fixed' ? 'fixed' : (pos === 'sticky' ? 'sticky' : pos)));
        } else if (cls.startsWith('t-')) {
            const value = cls.slice(2);
            styles.top = value;
        } else if (cls.startsWith('r-')) {
            const value = cls.slice(2);
            styles.right = value;
        } else if (cls.startsWith('b-') && !cls.startsWith('b-') && cls.length > 2) {
            const value = cls.slice(2);
            styles.bottom = value;
        } else if (cls.startsWith('l-')) {
            const value = cls.slice(2);
            styles.left = value;
        } else if (cls.startsWith('z-')) {
            const value = cls.slice(2);
            styles.zIndex = value;
        } else if (cls.startsWith('display-')) {
            const disp = cls.slice(7);
            styles.display = disp === 'block' ? 'block' : (disp === 'inline' ? 'inline' : (disp === 'inline-block' ? 'inline-block' : (disp === 'flex' ? 'flex' : (disp === 'grid' ? 'grid' : (disp === 'none' ? 'none' : disp)))));
        } else if (cls.startsWith('flex-')) {
            const dir = cls.slice(5);
            styles.flexDirection = dir === 'row' ? 'row' : (dir === 'row-reverse' ? 'row-reverse' : (dir === 'col' ? 'column' : (dir === 'col-reverse' ? 'column-reverse' : dir)));
        } else if (cls.startsWith('flex-wrap-')) {
            const wrap = cls.slice(10);
            styles.flexWrap = wrap === 'wrap' ? 'wrap' : (wrap === 'nowrap' ? 'nowrap' : wrap);
        } else if (cls.startsWith('justify-')) {
            const just = cls.slice(7);
            styles.justifyContent = just === 'center' ? 'center' : (just === 'flex-start' ? 'flex-start' : (just === 'flex-end' ? 'flex-end' : (just === 'space-between' ? 'space-between' : (just === 'space-around' ? 'space-around' : just))));
        } else if (cls.startsWith('align-')) {
            const ali = cls.slice(6);
            if (ali.startsWith('items-')) {
                const items = ali.slice(6);
                styles.alignItems = items === 'center' ? 'center' : (items === 'flex-start' ? 'flex-start' : (items === 'flex-end' ? 'flex-end' : (items === 'stretch' ? 'stretch' : items)));
            } else if (ali.startsWith('content-')) {
                const content = ali.slice(8);
                styles.alignContent = content === 'center' ? 'center' : (content === 'flex-start' ? 'flex-start' : (content === 'flex-end' ? 'flex-end' : (content === 'stretch' ? 'stretch' : content)));
            } else {
                styles.alignSelf = ali === 'center' ? 'center' : (ali === 'flex-start' ? 'flex-start' : (ali === 'flex-end' ? 'flex-end' : ali));
            }
        } else if (cls.startsWith('gap-')) {
            const value = cls.slice(4);
            styles.gap = value;
        } else if (cls.startsWith('grid-cols-')) {
            const value = cls.slice(10);
            styles.gridTemplateColumns = `repeat(${value}, 1fr)`;
        } else if (cls.startsWith('grid-rows-')) {
            const value = cls.slice(10);
            styles.gridTemplateRows = `repeat(${value}, 1fr)`;
        } else if (cls.startsWith('grid-gap-')) {
            const value = cls.slice(9);
            styles.gridGap = value;
        } else if (cls.startsWith('overflow-')) {
            const ov = cls.slice(8);
            styles.overflow = ov === 'hidden' ? 'hidden' : (ov === 'scroll' ? 'scroll' : (ov === 'auto' ? 'auto' : ov));
        } else if (cls.startsWith('cursor-')) {
            const cur = cls.slice(7);
            styles.cursor = cur === 'pointer' ? 'pointer' : (cur === 'default' ? 'default' : (cur === 'wait' ? 'wait' : cur));
        } else if (cls.startsWith('shadow-')) {
            const sh = cls.slice(7);
            if (sh === 'sm') styles.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            else if (sh === 'md') styles.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            else if (sh === 'lg') styles.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            else if (sh === 'xl') styles.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            else if (sh === 'none') styles.boxShadow = 'none';
        } else if (cls.startsWith('trans-')) {
            const trans = cls.slice(6);
            styles.transition = trans === 'all' ? 'all 0.2s ease-in-out' : (trans === 'none' ? 'none' : trans);
        } else if (cls.startsWith('transform-')) {
            const tr = cls.slice(10);
            if (tr === 'scale-1') styles.transform = 'scale(1)';
            else if (tr.startsWith('scale-')) {
                const scale = tr.slice(6);
                styles.transform = `scale(${scale})`;
            } else if (tr === 'rotate-90') styles.transform = 'rotate(90deg)';
            else if (tr.startsWith('rotate-')) {
                const rot = tr.slice(7);
                styles.transform = `rotate(${rot})`;
            } else if (tr === 'translate-x-0') styles.transform = 'translateX(0)';
            else if (tr.startsWith('translate-x-')) {
                const tx = tr.slice(11);
                styles.transform = `translateX(${tx})`;
            }
        } else if (cls.startsWith('float-')) {
            const fl = cls.slice(6);
            styles.float = fl === 'left' ? 'left' : (fl === 'right' ? 'right' : (fl === 'none' ? 'none' : fl));
        } else if (cls.startsWith('clear-')) {
            const cl = cls.slice(6);
            styles.clear = cl === 'left' ? 'left' : (cl === 'right' ? 'right' : (cl === 'both' ? 'both' : cl));
        } else if (cls.startsWith('visibility-')) {
            const vis = cls.slice(11);
            styles.visibility = vis === 'hidden' ? 'hidden' : (vis === 'visible' ? 'visible' : vis);
        } else if (cls.startsWith('outline-')) {
            const out = cls.slice(8);
            if (out === 'none') styles.outline = 'none';
            else if (out.startsWith('w-')) {
                const width = out.slice(2);
                styles.outlineWidth = width;
            }
        } else if (cls.startsWith('user-select-')) {
            const us = cls.slice(12);
            styles.userSelect = us === 'none' ? 'none' : (us === 'auto' ? 'auto' : us);
        } else if (cls.startsWith('pointer-events-')) {
            const pe = cls.slice(15);
            styles.pointerEvents = pe === 'none' ? 'none' : (pe === 'auto' ? 'auto' : pe);
        } else if (cls.startsWith('vertical-align-')) {
            const va = cls.slice(14);
            styles.verticalAlign = va === 'middle' ? 'middle' : (va === 'top' ? 'top' : (va === 'bottom' ? 'bottom' : va));
        } else if (cls.startsWith('list-style-')) {
            const ls = cls.slice(11);
            styles.listStyle = ls === 'none' ? 'none' : (ls === 'disc' ? 'disc' : (ls === 'circle' ? 'circle' : (ls === 'square' ? 'square' : ls)));
        } else if (cls.startsWith('content-')) {
            const con = cls.slice(8);
            styles.content = con === 'none' ? 'none' : con;
        }
    });
    Object.assign(element.style, styles);
}

function initEasyStyles(container = document) {
    const elements = container.querySelectorAll('*');
    elements.forEach(el => applyEasyStyles(el));
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    applyEasyStyles(node);
                    node.querySelectorAll('*').forEach(el => applyEasyStyles(el));
                }
            });
        });
    });
    observer.observe(container, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', () => {
    initEasyStyles();
});