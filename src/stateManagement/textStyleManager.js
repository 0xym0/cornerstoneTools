(function(cornerstoneTools) {

    'use strict';

    function textStyleManager() {

        function setFont(font) {
            var params = font.split(' ', 3);
            if (params.length === 3) {
                cornerstoneTools.toolStyle.setFont(params[0], params[1], params[2]);
            } else if (params.length === 2) {
                cornerstoneTools.toolStyle.setFont('', params[0], params[1]);
            } else {
                cornerstoneTools.toolStyle.setFont('', '', params[0]);
            }
        }

        function getFont() {
            return cornerstoneTools.toolStyle.getFont();
        }

        function setFontSize(fontSize) {
            cornerstoneTools.toolStyle.setFontSize(fontSize + 'px');
        }

        function getFontSize() {
            return parseInt(cornerstoneTools.toolStyle.getFontSize());
        }

        function setBackgroundColor(backgroundColor) {
            cornerstoneTools.toolStyle.setFontBackgroundColor(backgroundColor);
        }

        function getBackgroundColor() {
            return cornerstoneTools.toolStyle.getFontBackgroundColor();
        }

        var textStyle = {
            setFont: setFont,
            getFont: getFont,
            setFontSize: setFontSize,
            getFontSize: getFontSize,
            setBackgroundColor: setBackgroundColor,
            getBackgroundColor: getBackgroundColor
        };

        return textStyle;
    }

    // module/private exports
    cornerstoneTools.textStyle = textStyleManager();

})(cornerstoneTools);
