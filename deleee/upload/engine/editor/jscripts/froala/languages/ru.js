(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            return factory(jQuery);
        };
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {
/**
 * Russian
 */

$.FE.LANGUAGE['ru'] = {
  translation: {
    // Place holder
    "Type something": "\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043e\u002d\u043d\u0438\u0431\u0443\u0434\u044c",

    // Basic formatting
    "Bold": "\u041f\u043e\u043b\u0443\u0436\u0438\u0440\u043d\u044b\u0439",
    "Italic": "\u041a\u0443\u0440\u0441\u0438\u0432",
    "Underline": "\u041f\u043e\u0434\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044b\u0439",
    "Strikethrough": "\u0417\u0430\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044b\u0439",

    // Main buttons
    "Insert": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c",
    "Delete": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
    "Cancel": "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",
    "OK": "OK",
    "Back": "\u043d\u0430\u0437\u0430\u0434",
    "Remove": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
    "More": "\u0411\u043e\u043b\u044c\u0448\u0435",
    "Update": "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",
    "Style": "\u0421\u0442\u0438\u043b\u044c",

    // Font
    "Font Family": "\u0428\u0440\u0438\u0444\u0442",
    "Font Size": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",

    // Colors
    "Colors": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0446\u0432\u0435\u0442",
    "Background": "\u0424\u043e\u043d",
    "Text": "\u0422\u0435\u043a\u0441\u0442",

    // Paragraphs
    "Paragraph Format": "\u041f\u0430\u0440\u0430\u0433\u0440\u0430\u0444",
    "Normal": "\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",
    "Code": "\u041a\u043e\u0434",
    "Heading 1": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 1",
    "Heading 2": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2",
    "Heading 3": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 3",
    "Heading 4": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 4",
    "Heading 5": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 5",
    "Paragraph": "\u041f\u0430\u0440\u0430\u0433\u0440\u0430\u0444 (P)",
    "Layer": "\u0421\u043b\u043e\u0439 (div)",
    "Preformatted": "\u0424\u043e\u0440\u043c\u0430\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 (pre)",

    // Style
    "Paragraph Style": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u0430",
    "Inline Style": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430",
    "Bordered": "\u041e\u043a\u0430\u043d\u0442\u043e\u0432\u043a\u0430 \u0441\u0432\u0435\u0440\u0445\u0443 \u0438 \u0441\u043d\u0438\u0437\u0443",
    "Spaced": "\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0431\u0443\u043a\u0432",
    "Uppercase": "\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u043c\u0438 \u0431\u0443\u043a\u0432\u0430\u043c\u0438",
    "Gray": "\u0421\u0435\u0440\u044b\u0439 \u0446\u0432\u0435\u0442",
    "Red": "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0446\u0432\u0435\u0442",
    "Blue": "\u0413\u043e\u043b\u0443\u0431\u043e\u0439 \u0446\u0432\u0435\u0442",
    "Green": "\u0417\u0435\u043b\u0435\u043d\u044b\u0439 \u0446\u0432\u0435\u0442",

    // Alignment
    "Align": "\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435",
    "Align Left": "\u041f\u043e \u043b\u0435\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e",
    "Align Center": "\u041f\u043e \u0446\u0435\u043d\u0442\u0440\u0443",
    "Align Right": "\u041f\u043e \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e",
    "Align Justify": "\u041f\u043e \u0448\u0438\u0440\u0438\u043d\u0435",
    "None": "\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",

    // Lists
    "Ordered List": "\u041d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",
    "Unordered List": "\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",

    // Indent
    "Decrease Indent": "\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043e\u0442\u0441\u0442\u0443\u043f",
    "Increase Indent": "\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0441\u0442\u0443\u043f",

    // Links
    "Insert Link": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443",
    "Open in new tab": "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435",
    "Open Link": "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443",
    "Edit Link": "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443",
    "Unlink": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443",
    "Choose Link": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443",
    "Insert protected link": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443",
    

    // Images
    "Insert Image": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
    "Upload Image": "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
    "By URL": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c URL",
    "Browse": "\u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c",
    "Drop image": "\u041f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 \u0444\u0430\u0439\u043b",
    "or click": "\u0438\u043b\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435",
    "Manage Images": "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u043c\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438",
    "Loading": "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
    "Deleting": "\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435",
    "Tags": "\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430",
    "Are you sure? Image will be deleted.": "\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b? \u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u043e.",
    "Replace": "\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c",
    "Uploading": "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
    "Loading image": "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",
    "Display": "\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",
    "Inline": "\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043e \u0432 \u0441\u0442\u0440\u043e\u043a\u0443",
    "Break Text": "\u041e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    "Alternative Text": "\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442",
    "Change Size": "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440\u044b",
    "Width": "\u0448\u0438\u0440\u0438\u043d\u0430",
    "Height": "\u0432\u044b\u0441\u043e\u0442\u0430",
    "Something went wrong. Please try again.": "\u0427\u0442\u043e\u002d\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a\u002e \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430\u002c \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437\u002e",
    "Borders": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u0440\u0430\u043d\u0438\u0446\u044b",
    "Rounded": "\u0417\u0430\u043a\u0440\u0443\u0433\u043b\u0438\u0442\u044c \u043a\u0440\u0430\u044f",
    "Padded": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0441\u0443\u043f\u044b",
    "Shadows": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043d\u0438",

    // Video
    "Insert Video": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e",
    "Embedded Code": "HTML \u043a\u043e\u0434 \u0434\u043b\u044f \u0432\u0438\u0434\u0435\u043e",

    // Tables
    "Insert Table": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443",
    "Remove Table": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443",
    "Table Header": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b",
    "Table Style": "\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",
    "Row": "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438",
    "Insert row above": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443 \u0441\u0432\u0435\u0440\u0445\u0443",
    "Insert row below": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443 \u0441\u043d\u0438\u0437\u0443",
    "Delete row": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443",
    "Column": "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0446\u0430\u043c\u0438",
    "Insert column before": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u043b\u0435\u0432\u0430",
    "Insert column after": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u043f\u0440\u0430\u0432\u0430",
    "Delete column": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446",
    "Cell": "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u044f\u0447\u0435\u0439\u043a\u0430\u043c\u0438",
    "Merge cells": "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u044f\u0447\u0435\u0439\u043a\u0438",
    "Horizontal split": "\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438",
    "Vertical split": "\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438",
    "Cell Background": "\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430 \u044f\u0447\u0435\u0439\u043a\u0438",
    "Vertical Align": "\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438",
    "Horizontal Align": "\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438",
    "Top": "\u0421\u0432\u0435\u0440\u0445\u0443",
    "Middle": "\u041f\u043e \u0446\u0435\u043d\u0442\u0440\u0443",
    "Bottom": "\u0421\u043d\u0438\u0437\u0443",
    "Align Top": "\u0421\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u0432\u0435\u0440\u0445\u043d\u044e\u044e",
    "Align Middle": "\u0412\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u043f\u043e \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435",
    "Align Bottom": "\u0421\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u043d\u0438\u0436\u043d\u044e\u044e",
    "Cell Style": "\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u044f\u0447\u0435\u0439\u043a\u0438",
    "Solid Borders": "\u0421\u043f\u043b\u043e\u0448\u043d\u044b\u0435 \u0433\u0440\u0430\u043d\u0438\u0446\u044b",
    "Dashed Borders": "\u041f\u0443\u043d\u043a\u0442\u0438\u0440\u043d\u044b\u0435 \u0433\u0440\u0430\u043d\u0438\u0446\u044b",
    "Alternate Rows": "\u0427\u0435\u0440\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0438 \u0441\u0442\u0440\u043e\u043a",
    // Files
    "Upload File": "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b",
    "Drop file": "\u043f\u0430\u0434\u0435\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430",

    // Line breaker
    "Break": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443",

    // Math
    "Subscript": "\u041d\u0438\u0436\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441",
    "Superscript": "\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441",

    // Full screen
    "Fullscreen": "\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043d\u0430 \u043f\u043e\u043b\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d",

    // Horizontal line
    "Insert Horizontal Line": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0443\u044e \u043b\u0438\u043d\u0438\u044e",

    // Clear formatting
    "Clear Formatting": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",

    // Undo, redo
    "Undo": "\u0412\u0435\u0440\u043d\u0443\u0442\u044c",
    "Redo": "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c",

    // Select all
    "Select All": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435",

    // Code view
    "Code View": "\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 HTML",

    "HEX Color": "\u041a\u043e\u0434",

    // dle
    "Insert audio": "\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0430\u0443\u0434\u0438\u043e\u0442\u0440\u0435\u043a\u0430 (mp3)",
    "Insert Quote": "\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0446\u0438\u0442\u0430\u0442\u044b",
    "Insert hidden text": "\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0441\u043a\u0440\u044b\u0442\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430",
    "Insert spoiler": "\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0441\u043f\u043e\u0439\u043b\u0435\u0440\u0430",
    "Insert source code": "\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430",
    "Page Navigation": "\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043f\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",
    "Insert page breaks": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0440\u0430\u0437\u0440\u044b\u0432 \u043c\u0435\u0436\u0434\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c\u0438",
    "Insert link to the page": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",
    "Emoticons": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u043c\u0430\u0439\u043b\u0438\u043a",
    "Uploading files": "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u043c\u0438 \u0444\u0430\u0439\u043b\u0430\u043c\u0438",
    "Link to the video": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0432\u0438\u0434\u0435\u043e",
    "Description": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
    "Link to the poster": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043f\u043e\u0441\u0442\u0435\u0440 \u043a \u0432\u0438\u0434\u0435\u043e",
    "Add to Playlist": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442",
    "Link to the audio": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0430\u0443\u0434\u0438\u043e",
    "Typographical Word Processing":"\u0422\u0438\u043f\u043e\u0433\u0440\u0430\u0444\u0441\u043a\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430",
    "Insert media link": "\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 (Youtube, Twitter и другие)",
    "Word Paste Detected": "\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0438\u0437 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 Word",
    "The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?": "\u0412\u044b \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0438\u0437 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 Word. \u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 \u0438\u043b\u0438 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0435\u0433\u043e?",
    "Clean": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",
    "Keep": "\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",

    "Image URL": "\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
    "Alignment": "\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435",
    "Not used": "\u041d\u0435\u0442",
    "Left": "\u0421\u043b\u0435\u0432\u0430",
    "Right": "\u0421\u043f\u0440\u0430\u0432\u0430",
    "Center": "\u041f\u043e \u0446\u0435\u043d\u0442\u0440\u0443",

    "Default":"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439",
    "Lower Alpha":"\u0421\u0442\u0440\u043e\u0447\u043d\u044b\u0435 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b",
    "Lower Greek":"\u0421\u0442\u0440\u043e\u0447\u043d\u044b\u0435 \u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b",
    "Lower Roman":"\u0421\u0442\u0440\u043e\u0447\u043d\u044b\u0435 \u0440\u0438\u043c\u0441\u043a\u0438\u0435 \u0446\u0438\u0444\u0440\u044b",
    "Upper Alpha":"\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0435 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b",
    "Upper Roman":"\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0435 \u0440\u0438\u043c\u0441\u043a\u0438\u0435 \u0446\u0438\u0444\u0440\u044b",
    "Circle":"\u041e\u043a\u0440\u0443\u0436\u043d\u043e\u0441\u0442\u044c",
    "Disc":"\u041a\u0440\u0443\u0433",
    "Square":"\u041a\u0432\u0430\u0434\u0440\u0430\u0442",

    // Quote
    "Quote": "\u0446\u0438\u0442\u0430\u0442\u0430",
    "Increase": "\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435",
    "Decrease": "\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435",

    // Quick Insert
    "Quick Insert": "\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0432\u0441\u0442\u0430\u0432\u043a\u0430"
  },
  direction: "ltr"
};

}));