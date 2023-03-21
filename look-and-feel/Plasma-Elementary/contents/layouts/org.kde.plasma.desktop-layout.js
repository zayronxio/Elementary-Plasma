var plasma = getApiVersion(1);
 /*apps for dock*/
     /*filemanager*/
      if (applicationExists("org.kde.dolphin.desktop"))
          {
           var apps01 = "applications:org.kde.dolphin.desktop";
          }
      else{
           var apps01 = "";
          }
     /*web browser*/
           var browser = `applications:${defaultApplication("browser")}`
     /*discover*/
      if (applicationExists("org.kde.discover.desktop"))
          {
           var apps02 = "applications:org.kde.discover.desktop";
          }
      else{
           var apps02 = "";
          }
     /*gwenview*/
      if (applicationExists("org.kde.gwenview.desktop"))
          {
           var apps03 = `${apps02},applications:org.kde.gwenview.desktop`;
          }
      else{
           var apps03 = `${apps02}`;
          }
           /*email*/
      if (defaultApplication("mailer"))
         {
          var apps04 = `${apps03},applications:${defaultApplication("mailer")}`;
         }
      else{
       var apps04 = `${apps03}`;
         }
     /*konsole*/
      if (applicationExists("org.kde.konsole.desktop"))
          {
           var apps05 = `${apps04},applications:org.kde.konsole.desktop`;
          }
      else{
           var apps05 = `${apps04}`;
          }
     /*settings*/
      if (applicationExists("systemsettings.desktop"))
          {
           var apps06 = `${apps05},applications:systemsettings.desktop`;
          }
      else{
           var apps06 = `${apps05}`;
          }
          /*music player*/
          if (applicationExists("org.kde.elisa.desktop"))
        {
       var apps07 = `${apps06},applications:org.kde.elisa.desktop`;
        }
     else{
      if (applicationExists("audacious.desktop"))
        {
       var apps07 = `${apps06},applications:audacious.desktop`;
        }
     else{
       if (applicationExists("file:///var/lib/flatpak/exports/share/applications/org.atheme.audacious.desktop"))
        {
       var apps07 = `${apps06},file:///var/lib/flatpak/exports/share/applications/org.atheme.audacious.desktop`;
        }
     else{
       if (applicationExists("clementine.desktop"))
        {
       var apps07 = `${apps06},applications:clementine.desktop`;
        }
     else{
       if (applicationExists("org.gnome.Lollypop.desktop"))
        {
       var apps07 = `${apps06},applications:org.gnome.Lollypop.desktop`;
        }
     else{
       if (applicationExists("com.github.neithern.g4music.desktop"))
        {
       var apps07 = `${apps06},applications:com.github.neithern.g4music.desktop`;
        }
     else{
       var apps07 = `${apps06}`;
         }
         }
         }
         }
         }
         }
     /*text-editor*/
      if (applicationExists("org.kde.kate.desktop"))
          {
           var apps08 = `${apps07},applications:org.kde.kate.desktop`;
          }
      else{
            if (applicationExists("org.kde.kwrite.desktop"))
                 {
                  var apps08 = `${apps07},applications:org.kde.kwrite.desktop`;
                 }
             else{
                  var apps08 = `${apps07}`;
                 }
          }
     /*okular*/
      if (applicationExists("okularApplication_comicbook.desktop"))
          {
           var apps09 = `${apps08},applications:okularApplication_comicbook.desktop`;
          }
      else{
           var apps09 = `${apps09}`;
          }
var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "bottom",
                    "ToolBoxButtonX": "739",
                    "ToolBoxButtonY": "983",
                    "sortMode": "-1"
                },

            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.simplekickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Appearance": {
                            "useUserLayout": "true"
                        },
                        "/Configuration/Appearance": {
                            "layout": '<html><body><center><span style="font-weight:500;">{DD:u}, {MMM:u} {m}, {k}:{ii} {AA}</span></center></body></html>'
                        }

                    },
                    "plugin": "com.marcinorlowski.htmlclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.networkmanagement"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.volume"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.notifications"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "37"
                        },
                        "/General": {
                    "fontSize": "13",
                    "iconHeight": "9",
                    "iconWidth": "20",
                    "padding": "6",
                    "showPercentage": "false"
                       }
                    },
                    "plugin": "org.kde.plasma.inlineBattery"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                        },
                    "plugin": "org.kde.milou"
                },
                                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                }

            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "74",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.4,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);

var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "0",
            "applets": [
 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1",
                            "launchers": ""
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },

                        "/General": {
                            "indicateAudioStreams": "false",
                            "launchers": `${apps01},${browser},${apps09}`,
                            "maxStripes": 1
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.trash"
                }

            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "74",
                    "DialogWidth": "1920"
                }
            },
            "height": 3.7,
            "hiding": "windowscover",
            "location": "bottom",
            "floating": 0,
            "panelVisibility": 2,
            "maximumLength": 90,
            "minimumLength": 12,
            "offset": 0,
            "alignment":"center"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);

execFile("dolphin")
