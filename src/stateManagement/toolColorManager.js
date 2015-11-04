(function(cornerstoneTools) {

    'use strict';

    function toolColorManager() {

        function setFillColor(color) {
            cornerstoneTools.toolStyle.setFillColor(color);
        }

        function getFillColor() {
            return cornerstoneTools.toolStyle.getFillColor();
        }

        function setToolColor(color) {
            cornerstoneTools.toolStyle.setToolColor(color);
        }

        function getToolColor() {
            return cornerstoneTools.toolStyle.getToolColor();
        }

        function setActiveToolColor(color) {
            cornerstoneTools.toolStyle.setActiveColor(color);
        }

        function getActiveToolColor() {
            return cornerstoneTools.toolStyle.getActiveColor();
        }

        var toolColors = {
            setFillColor: setFillColor,
            getFillColor: getFillColor,
            setToolColor: setToolColor,
            getToolColor: getToolColor,
            setActiveColor: setActiveToolColor,
            getActiveColor: getActiveToolColor
        };

        return toolColors;
    }

    // module/private exports
    cornerstoneTools.toolColors = toolColorManager();

})(cornerstoneTools);
