/*
isVisible, v1.2.0
by Riki Fridrich <riki@fczbkk.com> (https://github.com/fczbkk)
https://github.com/fczbkk/isvisible
*/
(function() {
    var checkVisibility, getStyle, isVisible;
    getStyle = function(element, property) {
        if (element.currentStyle) {
            return element.currentStyle[property];
        } else if (window.getComputedStyle) {
            return document.defaultView.getComputedStyle(element, null).getPropertyValue(property);
        } else {
            return null;
        }
    };
    checkVisibility = function(element) {
        var is_displayed, is_visible;
        is_displayed = getStyle(element, "display") !== "none";
        is_visible = getStyle(element, "visibility") !== "hidden";
        return is_displayed && is_visible;
    };
    isVisible = function(element) {
        var _ref;
        if (!((_ref = document.body) != null ? _ref.contains(element) : void 0)) {
            return false;
        }
        while (element != null && element !== document.body) {
            if (!checkVisibility(element)) {
                return false;
            }
            element = element.parentNode;
        }
        return true;
    };
    isVisible.all = function(list) {
        var item, _i, _len;
        for (_i = 0, _len = list.length; _i < _len; _i++) {
            item = list[_i];
            if (!this(item)) {
                return false;
            }
        }
        return true;
    };
    isVisible.any = function(list) {
        var item, _i, _len;
        for (_i = 0, _len = list.length; _i < _len; _i++) {
            item = list[_i];
            if (this(item)) {
                return true;
            }
        }
        return false;
    };
    if (typeof expose !== "undefined" && expose !== null) {
        expose(isVisible, "isVisible");
    } else {
        window.isVisible = isVisible;
    }
}).call(this);