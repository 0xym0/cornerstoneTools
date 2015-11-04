(function(cornerstoneTools) {

    'use strict';

    function toolStyleManager() {
        var defaultWidth = 1,
            activeWidth = 2,
            defaultColor = 'white',
            activeColor = 'greenyellow',
            fillColor = 'transparent',
            shadowColor = '#000000',
            shadowOffsetX = 1,
            shadowOffsetY = 1,
            fontStyle = 'normal',
            fontSize = '15px',
            fontName = 'Arial',
            fontBackgroundColor = 'transparent';

        function setStyle(styleObject) {
            defaultWidth = styleObject.defaultWidth || 1;
            activeWidth = styleObject.activeWidth || 2;
            defaultColor = styleObject.defaultColor || 'white';
            activeColor = styleObject.activeColor || 'greenyellow';
            fillColor = styleObject.fillColor || 'transparent';
            shadowColor = styleObject.shadowColor || '#000000';
            shadowOffsetX = styleObject.shadowOffsetX || 1;
            shadowOffsetY = styleObject.shadowOffsetY || 1;
            fontStyle = styleObject.fontStyle || 'normal';
            fontSize = styleObject.fontSize || '15px';
            fontName = styleObject.fontName || 'Arial';
            fontBackgroundColor = styleObject.fontBackgroundColor || 'transparent';
        }
        
        function getStyle() {
            return {
                defaultWidth: defaultWidth,
                activeWidth: activeWidth,
                defaultColor: defaultColor,
                activeColor: activeColor,
                fillColor: fillColor,
                shadowColor: shadowColor,
                shadowOffsetX: shadowOffsetX,
                shadowOffsetY: shadowOffsetY,
                fontStyle: fontStyle,
                fontSize: fontSize,
                fontName: fontName,
                fontBackgroundColor: fontBackgroundColor
            };
        }

        function setFont(style, size, name) {
            fontStyle = style;
            fontSize = size;
            fontName = name;
        }
            
        function getFont() {
            return fontStyle + ' ' + fontSize + ' ' + fontName;
        }

        function setFontStyle(style) {
            fontStyle = style;
        }

        function getFontStyle() {
            return fontStyle;
        }

        function setFontName(name) {
            fontName = name;
        }

        function getFontName() {
            return fontName;
        }

        function setFontSize(size) {
            fontSize = size;
        }

        function getFontSize() {
            return fontSize;
        }

        function setFontBackgroundColor(backgroundColor) {
            fontBackgroundColor = backgroundColor;
        }

        function getFontBackgroundColor() {
            return fontBackgroundColor;
        }

        function setShadowColor(color) {
            shadowColor = color;
        }

        function getShadowColor() {
            return shadowColor;
        }

        function setShadowOffset(x, y) {
            shadowOffsetX = x;
            shadowOffsetY = y;
        }

        function getShadowOffset() {
            return [ shadowOffsetX, shadowOffsetY ];
        }

        function setFillColor(color) {
            fillColor = color;
        }

        function getFillColor() {
            return fillColor;
        }

        function setToolColor(color) {
            defaultColor = color;
        }

        function getToolColor() {
            return defaultColor;
        }

        function setActiveToolColor(color) {
            activeColor = color;
        }

        function getActiveToolColor() {
            return activeColor;
        }

        function setToolWidth(width) {
            defaultWidth = width;
        }

        function getToolWidth() {
            return defaultWidth;
        }

        function setActiveToolWidth(width) {
            activeWidth = width;
        }

        function getActiveToolWidth() {
            return activeWidth;
        }
        
        function resetToDefaults() {
            defaultWidth = 1;
            activeWidth = 2;
            defaultColor = 'white';
            activeColor = 'greenyellow';
            fillColor = 'transparent';
            shadowColor = '#000000';
            shadowOffsetX = 1;
            shadowOffsetY = 1;
            fontStyle = 'normal';
            fontSize = '15px';
            fontName = 'Arial';
            fontBackgroundColor = 'transparent';
        }

        var toolStyle = {
            setStyle: setStyle,
            getStyle: getStyle,
            resetToDefaults: resetToDefaults,
            setFont: setFont,
            getFont: getFont,
            setFontStyle: setFontStyle,
            getFontStyle: getFontStyle,
            setFontName: setFontName,
            getFontName: getFontName,
            setFontSize: setFontSize,
            getFontSize: getFontSize,
            setFontBackgroundColor: setFontBackgroundColor,
            getFontBackgroundColor: getFontBackgroundColor,
            setFillColor: setFillColor,
            getFillColor: getFillColor,
            setToolWidth: setToolWidth,
            getToolWidth: getToolWidth,
            setToolColor: setToolColor,
            getToolColor: getToolColor,
            setActiveWidth: setActiveToolWidth,
            getActiveWidth: getActiveToolWidth,
            setActiveColor: setActiveToolColor,
            getActiveColor: getActiveToolColor,
            setShadowColor: setShadowColor,
            getShadowColor: getShadowColor,
            setShadowOffset: setShadowOffset,
            getShadowOffset: getShadowOffset
        };

        return toolStyle;
    }

    // module/private exports
    cornerstoneTools.toolStyle = toolStyleManager();

})(cornerstoneTools);
