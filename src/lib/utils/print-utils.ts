import { PaperSize } from "$lib/components/common/worksheet/WorksheetPageConstants";

export function triggerPrinter(paperSize: PaperSize): void {
    let css_A4_landscape: string = '@page { size: A4 landscape; }';
    let css_A4: string = '@page { size: A4; }';
    
    if (paperSize === PaperSize.A4_LANDSCAPE) {
        console.log('trigger printer with ', paperSize);
        windowPrintWithOrientation(css_A4_landscape);
    } else {
        console.log('trigger printer with ', paperSize);
        windowPrintWithOrientation(css_A4);
    }
}

function windowPrintWithOrientation(page_css: string) {

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