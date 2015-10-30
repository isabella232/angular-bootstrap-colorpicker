angular.module('colorpicker.module', [])
    .factory('Helper', function () {
      'use strict';
      return {
        closestSlider: function (elem) {
          var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;
          if (matchesSelector.bind(elem)('I')) {
            return elem.parentNode;
          }
          return elem;
        },
        getOffset: function (elem, fixedPosition) {
          var
              x = 0,
              y = 0,
              scrollX = 0,
              scrollY = 0;
          while (elem && !isNaN(elem.offsetLeft) && !isNaN(elem.offsetTop)) {
            x += elem.offsetLeft;
            y += elem.offsetTop;
            if (!fixedPosition && elem.tagName === 'BODY') {
              scrollX += document.documentElement.scrollLeft || elem.scrollLeft;
              scrollY += document.documentElement.scrollTop || elem.scrollTop;
            } else {
              scrollX += elem.scrollLeft;
              scrollY += elem.scrollTop;
            }
            elem = elem.offsetParent;
          }
          return {
            top: y,
            left: x,
            scrollX: scrollX,
            scrollY: scrollY
          };
        },
        // 140 predefined colors from the HTML Colors spec
        colors: {
          "aliceblue": "#f0f8ff",
          "antiquewhite": "#faebd7",
          "aqua": "#00ffff",
          "aquamarine": "#7fffd4",
          "azure": "#f0ffff",
          "beige": "#f5f5dc",
          "bisque": "#ffe4c4",
          "black": "#000000",
          "blanchedalmond": "#ffebcd",
          "blue": "#0000ff",
          "blueviolet": "#8a2be2",
          "brown": "#a52a2a",
          "burlywood": "#deb887",
          "cadetblue": "#5f9ea0",
          "chartreuse": "#7fff00",
          "chocolate": "#d2691e",
          "coral": "#ff7f50",
          "cornflowerblue": "#6495ed",
          "cornsilk": "#fff8dc",
          "crimson": "#dc143c",
          "cyan": "#00ffff",
          "darkblue": "#00008b",
          "darkcyan": "#008b8b",
          "darkgoldenrod": "#b8860b",
          "darkgray": "#a9a9a9",
          "darkgreen": "#006400",
          "darkkhaki": "#bdb76b",
          "darkmagenta": "#8b008b",
          "darkolivegreen": "#556b2f",
          "darkorange": "#ff8c00",
          "darkorchid": "#9932cc",
          "darkred": "#8b0000",
          "darksalmon": "#e9967a",
          "darkseagreen": "#8fbc8f",
          "darkslateblue": "#483d8b",
          "darkslategray": "#2f4f4f",
          "darkturquoise": "#00ced1",
          "darkviolet": "#9400d3",
          "deeppink": "#ff1493",
          "deepskyblue": "#00bfff",
          "dimgray": "#696969",
          "dodgerblue": "#1e90ff",
          "firebrick": "#b22222",
          "floralwhite": "#fffaf0",
          "forestgreen": "#228b22",
          "fuchsia": "#ff00ff",
          "gainsboro": "#dcdcdc",
          "ghostwhite": "#f8f8ff",
          "gold": "#ffd700",
          "goldenrod": "#daa520",
          "gray": "#808080",
          "green": "#008000",
          "greenyellow": "#adff2f",
          "honeydew": "#f0fff0",
          "hotpink": "#ff69b4",
          "indianred": "#cd5c5c",
          "indigo": "#4b0082",
          "ivory": "#fffff0",
          "khaki": "#f0e68c",
          "lavender": "#e6e6fa",
          "lavenderblush": "#fff0f5",
          "lawngreen": "#7cfc00",
          "lemonchiffon": "#fffacd",
          "lightblue": "#add8e6",
          "lightcoral": "#f08080",
          "lightcyan": "#e0ffff",
          "lightgoldenrodyellow": "#fafad2",
          "lightgrey": "#d3d3d3",
          "lightgreen": "#90ee90",
          "lightpink": "#ffb6c1",
          "lightsalmon": "#ffa07a",
          "lightseagreen": "#20b2aa",
          "lightskyblue": "#87cefa",
          "lightslategray": "#778899",
          "lightsteelblue": "#b0c4de",
          "lightyellow": "#ffffe0",
          "lime": "#00ff00",
          "limegreen": "#32cd32",
          "linen": "#faf0e6",
          "magenta": "#ff00ff",
          "maroon": "#800000",
          "mediumaquamarine": "#66cdaa",
          "mediumblue": "#0000cd",
          "mediumorchid": "#ba55d3",
          "mediumpurple": "#9370d8",
          "mediumseagreen": "#3cb371",
          "mediumslateblue": "#7b68ee",
          "mediumspringgreen": "#00fa9a",
          "mediumturquoise": "#48d1cc",
          "mediumvioletred": "#c71585",
          "midnightblue": "#191970",
          "mintcream": "#f5fffa",
          "mistyrose": "#ffe4e1",
          "moccasin": "#ffe4b5",
          "navajowhite": "#ffdead",
          "navy": "#000080",
          "oldlace": "#fdf5e6",
          "olive": "#808000",
          "olivedrab": "#6b8e23",
          "orange": "#ffa500",
          "orangered": "#ff4500",
          "orchid": "#da70d6",
          "palegoldenrod": "#eee8aa",
          "palegreen": "#98fb98",
          "paleturquoise": "#afeeee",
          "palevioletred": "#d87093",
          "papayawhip": "#ffefd5",
          "peachpuff": "#ffdab9",
          "peru": "#cd853f",
          "pink": "#ffc0cb",
          "plum": "#dda0dd",
          "powderblue": "#b0e0e6",
          "purple": "#800080",
          "red": "#ff0000",
          "rosybrown": "#bc8f8f",
          "royalblue": "#4169e1",
          "saddlebrown": "#8b4513",
          "salmon": "#fa8072",
          "sandybrown": "#f4a460",
          "seagreen": "#2e8b57",
          "seashell": "#fff5ee",
          "sienna": "#a0522d",
          "silver": "#c0c0c0",
          "skyblue": "#87ceeb",
          "slateblue": "#6a5acd",
          "slategray": "#708090",
          "snow": "#fffafa",
          "springgreen": "#00ff7f",
          "steelblue": "#4682b4",
          "tan": "#d2b48c",
          "teal": "#008080",
          "thistle": "#d8bfd8",
          "tomato": "#ff6347",
          "turquoise": "#40e0d0",
          "violet": "#ee82ee",
          "wheat": "#f5deb3",
          "white": "#ffffff",
          "whitesmoke": "#f5f5f5",
          "yellow": "#ffff00",
          "yellowgreen": "#9acd32",
          "transparent": "transparent"
        },
        // a set of RE's that can match strings and generate color tuples. https://github.com/jquery/jquery-color/
        stringParsers: [
          {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function (execResult) {
              return [
                execResult[1],
                execResult[2],
                execResult[3],
                execResult[4]
              ];
            }
          },
          {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function (execResult) {
              return [
                2.55 * execResult[1],
                2.55 * execResult[2],
                2.55 * execResult[3],
                execResult[4]
              ];
            }
          },
          {
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            parse: function (execResult) {
              return [
                parseInt(execResult[1], 16),
                parseInt(execResult[2], 16),
                parseInt(execResult[3], 16)
              ];
            }
          },
          {
            re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
            parse: function (execResult) {
              return [
                parseInt(execResult[1] + execResult[1], 16),
                parseInt(execResult[2] + execResult[2], 16),
                parseInt(execResult[3] + execResult[3], 16)
              ];
            }
          }
        ]
      };
    })
    .factory('Color', ['Helper', function (Helper) {
      'use strict';
      return {
        value: {
          h: 1,
          s: 1,
          b: 1,
          a: 1
        },
        // translate a format from Color object to a string
        'rgb': function () {
          var rgb = this.toRGB();
          return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
        },
        'rgba': function () {
          var rgb = this.toRGB();
          return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')';
        },
        'hex': function () {
          return  this.toHex();
        },

        // HSBtoRGB from RaphaelJS
        RGBtoHSB: function (r, g, b, a) {
          r /= 255;
          g /= 255;
          b /= 255;

          var H, S, V, C;
          V = Math.max(r, g, b);
          C = V - Math.min(r, g, b);
          H = (C === 0 ? null :
              V === r ? (g - b) / C :
                  V === g ? (b - r) / C + 2 :
                      (r - g) / C + 4
              );
          H = ((H + 360) % 6) * 60 / 360;
          S = C === 0 ? 0 : C / V;
          return {h: H || 1, s: S, b: V, a: a || 1};
        },

        stringToHSB: function(strVal) {
          strVal = strVal.toLowerCase();
          var alias;
          if (typeof Helper.colors[strVal] !== 'undefined') {
            strVal = Helper.colors[strVal];
            alias = 'alias';
          }
          var that = this,
            result = false;
          $.each(Helper.stringParsers, function(i, parser) {
            var match = parser.re.exec(strVal),
              values = match && parser.parse.apply(that, [match]),
              format = alias || parser.format || 'rgba';
            if (values) {
              if (format.match(/hsla?/)) {
                result = that.RGBtoHSB.apply(that, that.HSLtoRGB.apply(that, values));
              } else {
                result = that.RGBtoHSB.apply(that, values);
              }
              that.origFormat = format;
              return false;
            }
            return true;
          });
          this.value = result;
          return result;
        },

        //parse a string to HSB
        setColor: function(strVal) {
          strVal = strVal.toLowerCase().trim();
          if (strVal) {
            this.value = this.stringToHSB(strVal) || {
              h: 0,
              s: 0,
              b: 0,
              a: 1
            }; // if parser fails, defaults to black
          }
        },

        setHue: function (h) {
          this.value.h = 1 - h;
        },

        setSaturation: function (s) {
          this.value.s = s;
        },

        setLightness: function (b) {
          this.value.b = 1 - b;
        },

        setAlpha: function (a) {
          this.value.a = parseInt((1 - a) * 100, 10) / 100;
        },

        // HSBtoRGB from RaphaelJS
        // https://github.com/DmitryBaranovskiy/raphael/
        toRGB: function (h, s, b, a) {
          if (!h) {
            h = this.value.h;
            s = this.value.s;
            b = this.value.b;
          }
          h *= 360;
          var R, G, B, X, C;
          h = (h % 360) / 60;
          C = b * s;
          X = C * (1 - Math.abs(h % 2 - 1));
          R = G = B = b - C;

          h = ~~h;
          R += [C, X, 0, 0, X, C][h];
          G += [X, C, C, X, 0, 0][h];
          B += [0, 0, X, C, C, X][h];
          return {
            r: Math.round(R * 255),
            g: Math.round(G * 255),
            b: Math.round(B * 255),
            a: a || this.value.a
          };
        },

        toHex: function (h, s, b, a) {
          var rgb = this.toRGB(h, s, b, a);
          return '#' + ((1 << 24) | (parseInt(rgb.r, 10) << 16) | (parseInt(rgb.g, 10) << 8) | parseInt(rgb.b, 10)).toString(16).substr(1);
        }
      };
    }])
    .factory('Slider', ['Helper', function (Helper) {
      'use strict';
      var
          slider = {
            maxLeft: 0,
            maxTop: 0,
            callLeft: null,
            callTop: null,
            knob: {
              top: 0,
              left: 0
            }
          },
          pointer = {};

      return {
        getSlider: function() {
          return slider;
        },
        getLeftPosition: function(event) {
          return Math.max(0, Math.min(slider.maxLeft, slider.left + ((event.pageX || pointer.left) - pointer.left)));
        },
        getTopPosition: function(event) {
          return Math.max(0, Math.min(slider.maxTop, slider.top + ((event.pageY || pointer.top) - pointer.top)));
        },
        setSlider: function (event, fixedPosition) {
          var
            target = Helper.closestSlider(event.target),
            targetOffset = Helper.getOffset(target, fixedPosition),
            rect = target.getBoundingClientRect(),
            offsetX = event.clientX - rect.left,
            offsetY = event.clientY - rect.top;

          slider.knob = target.children[0].style;
          slider.left = event.pageX - targetOffset.left - window.pageXOffset + targetOffset.scrollX;
          slider.top = event.pageY - targetOffset.top - window.pageYOffset + targetOffset.scrollY;

          pointer = {
            left: event.pageX - (offsetX - slider.left),
            top: event.pageY - (offsetY - slider.top)
          };
        },
        setSaturation: function(event, fixedPosition) {
          slider = {
            maxLeft: 100,
            maxTop: 100,
            callLeft: 'setSaturation',
            callTop: 'setLightness'
          };
          this.setSlider(event, fixedPosition);
        },
        setHue: function(event, fixedPosition) {
          slider = {
            maxLeft: 0,
            maxTop: 100,
            callLeft: false,
            callTop: 'setHue'
          };
          this.setSlider(event, fixedPosition);
        },
        setAlpha: function(event, fixedPosition) {
          slider = {
            maxLeft: 0,
            maxTop: 100,
            callLeft: false,
            callTop: 'setAlpha'
          };
          this.setSlider(event, fixedPosition);
        },
        setKnob: function(top, left) {
          slider.knob.top = top + 'px';
          slider.knob.left = left + 'px';
        }
      };
    }])
    .directive('colorpicker', ['$document', '$compile', 'Color', 'Slider', 'Helper', function ($document, $compile, Color, Slider, Helper) {
      'use strict';
      return {
        require: '?ngModel',
        restrict: 'A',
        link: function ($scope, elem, attrs, ngModel) {
          var
              thisFormat = attrs.colorpicker ? attrs.colorpicker : 'hex',
              position = angular.isDefined(attrs.colorpickerPosition) ? attrs.colorpickerPosition : 'bottom',
              inline = angular.isDefined(attrs.colorpickerInline) ? attrs.colorpickerInline : false,
              fixedPosition = angular.isDefined(attrs.colorpickerFixedPosition) ? attrs.colorpickerFixedPosition : false,
              target = angular.isDefined(attrs.colorpickerParent) ? elem.parent() : angular.element(document.body),
              withInput = angular.isDefined(attrs.colorpickerWithInput) ? attrs.colorpickerWithInput : false,
              inputTemplate = withInput ? '<input type="text" name="colorpicker-input">' : '',
              closeButton = !inline ? '<button type="button" class="close close-colorpicker">&times;</button>' : '',
              template =
                  '<div class="colorpicker dropdown">' +
                      '<div class="dropdown-menu">' +
                      '<colorpicker-saturation><i></i></colorpicker-saturation>' +
                      '<colorpicker-hue><i></i></colorpicker-hue>' +
                      '<colorpicker-alpha><i></i></colorpicker-alpha>' +
                      '<colorpicker-preview></colorpicker-preview>' +
                      inputTemplate +
                      closeButton +
                      '</div>' +
                      '</div>',
              colorpickerTemplate = angular.element(template),
              pickerColor = Color,
              sliderAlpha,
              sliderHue = colorpickerTemplate.find('colorpicker-hue'),
              sliderSaturation = colorpickerTemplate.find('colorpicker-saturation'),
              colorpickerPreview = colorpickerTemplate.find('colorpicker-preview'),
              pickerColorPointers = colorpickerTemplate.find('i');

          $compile(colorpickerTemplate)($scope);

          if (withInput) {
            var pickerColorInput = colorpickerTemplate.find('input');
            pickerColorInput
                .on('mousedown', function(event) {
                  event.stopPropagation();
                })
                .on('keyup', function(event) {
                  var newColor = this.value;
                  elem.val(newColor);
                  if(ngModel) {
                    $scope.$apply(ngModel.$setViewValue(newColor));
                  }
                  event.stopPropagation();
                  event.preventDefault();
                });
            elem.on('keyup', function() {
              pickerColorInput.val(elem.val());
            });
          }

          var bindMouseEvents = function() {
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
          };

          if (thisFormat === 'rgba') {
            colorpickerTemplate.addClass('alpha');
            sliderAlpha = colorpickerTemplate.find('colorpicker-alpha');
            sliderAlpha
                .on('click', function(event) {
                  Slider.setAlpha(event, fixedPosition);
                  mousemove(event);
                })
                .on('mousedown', function(event) {
                  Slider.setAlpha(event, fixedPosition);
                  bindMouseEvents();
                })
                .on('mouseup', function(event){
                  emitEvent('colorpicker-selected-alpha');
                });
          }

          sliderHue
              .on('click', function(event) {
                Slider.setHue(event, fixedPosition);
                mousemove(event);
              })
              .on('mousedown', function(event) {
                Slider.setHue(event, fixedPosition);
                bindMouseEvents();
              })
              .on('mouseup', function(event){
                emitEvent('colorpicker-selected-hue');
              });

          sliderSaturation
              .on('click', function(event) {
                Slider.setSaturation(event, fixedPosition);
                mousemove(event);
                if (angular.isDefined(attrs.colorpickerCloseOnSelect)) {
                  hideColorpickerTemplate();
                }
              })
              .on('mousedown', function(event) {
                Slider.setSaturation(event, fixedPosition);
                bindMouseEvents();
              })
              .on('mouseup', function(event){
                emitEvent('colorpicker-selected-saturation');
              });

          if (fixedPosition) {
            colorpickerTemplate.addClass('colorpicker-fixed-position');
          }

          colorpickerTemplate.addClass('colorpicker-position-' + position);
          if (inline === 'true') {
            colorpickerTemplate.addClass('colorpicker-inline');
          }

          target.append(colorpickerTemplate);

          if(ngModel) {
            ngModel.$render = function () {
              elem.val(ngModel.$viewValue);
            };
            $scope.$watch(attrs.ngModel, function(newVal) {
              update();

              if (withInput) {
                pickerColorInput.val(newVal);
              }
            });
          }

          elem.on('$destroy', function() {
            colorpickerTemplate.remove();
          });

          var previewColor = function () {
            try {
              colorpickerPreview.css('backgroundColor', pickerColor[thisFormat]());
            } catch (e) {
              colorpickerPreview.css('backgroundColor', pickerColor.toHex());
            }
            sliderSaturation.css('backgroundColor', pickerColor.toHex(pickerColor.value.h, 1, 1, 1));
            if (thisFormat === 'rgba') {
              sliderAlpha.css.backgroundColor = pickerColor.toHex();
            }
          };

          var mousemove = function (event) {
            var
                left = Slider.getLeftPosition(event),
                top = Slider.getTopPosition(event),
                slider = Slider.getSlider();

            Slider.setKnob(top, left);

            if (slider.callLeft) {
              pickerColor[slider.callLeft].call(pickerColor, left / 100);
            }
            if (slider.callTop) {
              pickerColor[slider.callTop].call(pickerColor, top / 100);
            }
            previewColor();
            var newColor = pickerColor[thisFormat]();
            elem.val(newColor);
            if(ngModel) {
              $scope.$apply(ngModel.$setViewValue(newColor));
            }
            if (withInput) {
              pickerColorInput.val(newColor);
            }
            return false;
          };

          var mouseup = function () {
            emitEvent('colorpicker-selected');
            $document.off('mousemove', mousemove);
            $document.off('mouseup', mouseup);
          };

          var update = function () {
            pickerColor.setColor(elem.val());
            pickerColorPointers.eq(0).css({
              left: pickerColor.value.s * 100 + 'px',
              top: 100 - pickerColor.value.b * 100 + 'px'
            });
            pickerColorPointers.eq(1).css('top', 100 * (1 - pickerColor.value.h) + 'px');
            pickerColorPointers.eq(2).css('top', 100 * (1 - pickerColor.value.a) + 'px');
            previewColor();
          };

          var getColorpickerTemplatePosition = function() {
            var
                positionValue,
                positionOffset = Helper.getOffset(elem[0]);

            if(angular.isDefined(attrs.colorpickerParent)) {
              positionOffset.left = 0;
              positionOffset.top = 0;
            }

            if (position === 'top') {
              positionValue =  {
                'top': positionOffset.top - 147,
                'left': positionOffset.left
              };
            } else if (position === 'right') {
              positionValue = {
                'top': positionOffset.top,
                'left': positionOffset.left + 126
              };
            } else if (position === 'bottom') {
              positionValue = {
                'top': positionOffset.top + elem[0].offsetHeight + 2,
                'left': positionOffset.left
              };
            } else if (position === 'left') {
              positionValue = {
                'top': positionOffset.top,
                'left': positionOffset.left - 150
              };
            }
            return {
              'top': positionValue.top + 'px',
              'left': positionValue.left + 'px'
            };
          };

          var documentMousedownHandler = function() {
            hideColorpickerTemplate();
          };

          var showColorpickerTemplate = function() {

            if (!colorpickerTemplate.hasClass('colorpicker-visible')) {
              update();
              colorpickerTemplate
                .addClass('colorpicker-visible')
                .css(getColorpickerTemplatePosition());
              emitEvent('colorpicker-shown');

              if (inline === false) {
                // register global mousedown event to hide the colorpicker
                $document.on('mousedown', documentMousedownHandler);
              }

              if (attrs.colorpickerIsOpen) {
                $scope[attrs.colorpickerIsOpen] = true;
                if (!$scope.$$phase) {
                  $scope.$digest(); //trigger the watcher to fire
                }
              }
            }

          };

          if(inline === false) {
            elem.on('click', showColorpickerTemplate);
          } else {
            showColorpickerTemplate();
          }

          colorpickerTemplate.on('mousedown', function (event) {
            event.stopPropagation();
            event.preventDefault();
          });

          var emitEvent = function(name) {
            if(ngModel) {
              $scope.$emit(name, {
                name: attrs.ngModel,
                value: ngModel.$modelValue
              });
            }
          };

          var hideColorpickerTemplate = function() {
            if (colorpickerTemplate.hasClass('colorpicker-visible')) {
              colorpickerTemplate.removeClass('colorpicker-visible');
              emitEvent('colorpicker-closed');
              // unregister the global mousedown event
              $document.off('mousedown', documentMousedownHandler);

              if (attrs.colorpickerIsOpen) {
                $scope[attrs.colorpickerIsOpen] = false;
                if (!$scope.$$phase) {
                  $scope.$digest(); //trigger the watcher to fire
                }
              }
            }
          };

          colorpickerTemplate.find('button').on('click', function () {
            hideColorpickerTemplate();
            emitEvent('colorpicker-removed');
          });

          if (attrs.colorpickerIsOpen) {
            $scope.$watch(attrs.colorpickerIsOpen, function(shouldBeOpen) {

              if (shouldBeOpen === true) {
                showColorpickerTemplate();
              } else if (shouldBeOpen === false) {
                hideColorpickerTemplate();
              }

            });
          }

        }
      };
    }]);
