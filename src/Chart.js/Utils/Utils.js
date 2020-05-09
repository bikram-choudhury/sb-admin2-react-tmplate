export function numberFormat(numberToFormat, decimals, decPoint, thousandsSep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    const number = (numberToFormat + '').replace(',', '').replace(' ', '');
    const n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep,
        dec = (typeof decPoint === 'undefined') ? '.' : decPoint,
        toFixedFix = function (num, precs) {
            var k = Math.pow(10, precs);
            return '' + Math.round(num * k) / k;
        };
    let str = '';
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    str = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (str[ 0 ].length > 3) {
        str[ 0 ] = str[ 0 ].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((str[ 1 ] || '').length < prec) {
        str[ 1 ] = str[ 1 ] || '';
        str[ 1 ] += new Array(prec - str[ 1 ].length + 1).join('0');
    }
    return str.join(dec);
}

export const globalConfig = {
    defaultFontFamily: `'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,
    "Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'`,
    defaultFontColor: '#858796',
    defaultFontSize: 14
}