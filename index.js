function MW_Table_Code(form) {

    MWtablewidth = document.MW_Table_Gen.MWTableWidth.value;
    MWtablewidthmetric = document.MW_Table_Gen.MWTableWidthMetric.value;
    MW_backgroundcolor = document.MW_Table_Gen.MW_BackgroundColor.value;
    MW_rowcount = document.MW_Table_Gen.MW_RowCount.value;
    MW_columncount = document.MW_Table_Gen.MW_ColumnCount.value;
    MW_padding = document.MW_Table_Gen.MW_Padding.value;
    MW_paddingmetric = document.MW_Table_Gen.MW_PaddingMetric.value;
    MW_textcolor = document.MW_Table_Gen.MW_TextColor.value;
    MW_headercolor = document.MW_Table_Gen.MW_HeaderColor.value;
    MW_headertext = document.MW_Table_Gen.MW_headertext.value;
    MW_textAlignheader = document.MW_Table_Gen.MW_textAlignheader.value;
    MW_textAligncells = document.MW_Table_Gen.MW_textAligncells.value;
    MW_displaysampletext = document.MW_Table_Gen.MW_DisplaySampleText.checked;
    MW_borderwidth = document.MW_Table_Gen.MW_BorderWidth.value;
    MW_borderwidthmetric = document.MW_Table_Gen.MW_BorderWidthMetric.value;
    MW_bordercolor = document.MW_Table_Gen.MW_BorderColor.value;
    MW_borderstyle = document.MW_Table_Gen.MW_BorderStyle.value;
    MW_bordercollapse = document.MW_Table_Gen.MW_BorderCollapse.checked;

    MW_tablerows = '  <tbody>\n';
    MW_tablehead = '  <thead>\n    <tr>\n';
    MW_tableheadtext = '';
    MW_tabletext = '      <td></td>\n';

    for (MW_thisRow = 1; MW_thisRow <= MW_rowcount; MW_thisRow++) {

        MW_tablerows = MW_tablerows + '    <tr>\n';

        for (MW_thisColumn = 1; MW_thisColumn <= MW_columncount; MW_thisColumn++) {

            /* Header */
            if (MW_thisRow == 1) {
                if (MW_displaysampletext == "1") {
                    MW_tableheadtext = MW_tableheadtext + '      <th>My Header</th>\n';
                } else {
                    MW_tableheadtext = MW_tableheadtext + '      <th></th>\n';
                }
            }

            /* Normal Row */
            if (MW_displaysampletext == "1") {

                MW_tabletext = '      <td>My Cell</td>\n';

            }

            MW_tablerows = MW_tablerows + MW_tabletext;
        }
        MW_tablerows = MW_tablerows + '    </tr>\n';
    }

    MW_tablehead = MW_tablehead + MW_tableheadtext + '    </tr>\n  </thead>\n';
    MW_tablerows = MW_tablerows + '  </tbody>\n';

    output =
        '<style>\n' +
        'table.MW_GeneratedTable {\n' +
        ((MWtablewidth) ? '  width: ' + MWtablewidth + MWtablewidthmetric + ';\n' : '') +
        ((MW_backgroundcolor) ? '  background-color: ' + MW_backgroundcolor + ';\n' : '') +
        ((MW_bordercollapse) ? '  border-collapse: collapse;' + '\n' : 'border-collapse: separate;' + '\n') +
        ((MW_borderwidth) ? '  border-width: ' + MW_borderwidth + MW_borderwidthmetric + ';\n' : '') +
        ((MW_bordercolor) ? '  border-color: ' + MW_bordercolor + ';\n' : '') +
        ((MW_borderstyle) ? '  border-style: ' + MW_borderstyle + ';\n' : '') +
        ((MW_textcolor) ? '  color: ' + MW_textcolor + ';\n' : '') +
        '}\n\n' +

        'table.MW_GeneratedTable td, table.MW_GeneratedTable th {\n' +
        ((MW_borderwidth) ? '  border-width: ' + MW_borderwidth + MW_borderwidthmetric + ';\n' : '') +
        ((MW_bordercolor) ? '  border-color: ' + MW_bordercolor + ';\n' : '') +
        ((MW_borderstyle) ? '  border-style: ' + MW_borderstyle + ';\n' : '') +
        ((MW_padding) ? '  padding: ' + MW_padding + MW_paddingmetric + ';\n' : '') +
        '}\n\n' +
        'table.MW_GeneratedTable tbody {\n' +
        ((MW_textAligncells) ? '  text-align: ' + MW_textAligncells + ';\n' : '') + '\n}' +
        'table.MW_GeneratedTable thead {\n' +
        ((MW_headercolor) ? '  background-color: ' + MW_headercolor + ';\n' : '') + '\n' +
        ((MW_headertext) ? '  color: ' + MW_headertext + ';\n' : '') +
        ((MW_textAlignheader) ? '  text-align: ' + MW_textAlignheader + ';\n' : '') +
        '}\n' +
        '</style>\n\n' +

        '<!-- HTML Code -->\n' +
        '<table class="MW_GeneratedTable">\n' +
        MW_tablehead +
        MW_tablerows +
        '</table>\n' +
        '<!-- Codes by Mehngiweb.com -->\n\n';

    document.MW_Table_Gen.generatedCode.value = output;
    document.getElementById('displayResult').innerHTML = output;

    return output;
}