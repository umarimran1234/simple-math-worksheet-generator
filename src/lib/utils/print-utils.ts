import { WorkSheetSize } from "./app-constants";

export function triggerPrinter(pageSize: WorkSheetSize) : void {
    let css_A4_landscape = '@page { size: A4 landscape; }';
    let css_A4 = '@page { size: A4; }';
    if (pageSize === WorkSheetSize.A4_LANDSCAPE) {
        windowPrintWithOrientation(css_A4_landscape);
    } else {
        windowPrintWithOrientation(css_A4);
    }
}

function windowPrintWithOrientation(page_css) {

    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    style.media = 'print';

    if (style.styleSheet) {
        style.styleSheet.cssText = page_css;
    } else {
        style.appendChild(document.createTextNode(page_css));
    }

    head.appendChild(style);

    window.print();
}