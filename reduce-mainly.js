//ideas - json object fun

const transformVideoData = (videos) => {
  return videos.screens.reduce((all, screen) => {
    if (screen.type === "Selector") {
      console.log(screen.config.views);
      screen.config.views.forEach((view) => {
        all[view.id] = view;
      });
    }
    if (screen.type === "BrandWrapper") {
      if (all[screen.id]) {
        all[screen.id] = {
          ...all[screen.id],
          mp4: videos.screens
            .find((s) => s.id === screen.id)
            .config.views.find((obj) => obj.type === "smPlayerIframe")
            .files.find((f) => f.type === "mp4"),
        };
      }
    }

    return all;
  }, {});
};

let videos = {
  available: true,
  screens: [
    {
      id: "s01",
      type: "Selector",
      config: {
        views: [
          {
            id: "sintel",
            type: "selectorItem",
            thumbnail:
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=980:*",

            title: "Sintel",
            description:
              "Small video. HTML5, native controls, start poster. Bottom, right social. Video + grid",
            info: "00:51",
          },
          {
            id: "bbb",
            type: "selectorItem",
            thumbnail:
              "http://test-cdn.selectablemedia.com/test/a/bbb/assets/img/thumb_bbb.png",
            title: "Big Buck Bunny",
            description:
              "Large video. HTML5, custom controls, social hover. Video + replay",
            info: "00:33",
          },
          {
            id: "walle",
            type: "selectorItem",
            thumbnail:
              "http://test-cdn.selectablemedia.com/test/a/walle/assets/img/thumb_walle.png",
            title: "WALL-E",
            description:
              "Small video. Youtube, custom controls. Left social. Video + carousel.",
            info: "02:30",
          },
        ],
      },
    },
    {
      id: "sintel",
      type: "BrandWrapper",
      config: {
        views: [
          {
            id: "sintelBranding",
            type: "fullBranding",
            url: "sintel_single.png",
          },
          {
            id: "sintelPlayer",
            type: "smPlayerIframe",
            files: [
              {
                type: "mp4",
                codecs: "h264,aac",
                url: "https://www.youtube.com/embed/KB4_WIPE7vo",
              },
              {
                type: "mp4",
                codecs: "avc1.42E01E,mp4a.40.2",
                url: "http://test-cdn.selectablemedia.com/test/a/sintel/assets/video/sintel_trailer-1080p.mp4",
              },
              {
                type: "ogv",
                codecs: "theora,vorbis",
                url: "http://test-cdn.selectablemedia.com/test/a/sintel/assets/video/sintel_trailer-1080p.ogv",
              },
              {
                type: "flv",
                codecs: "h264,aac",
                url: "http://test-cdn.selectablemedia.com/test/a/sintel/assets/video/sintel_trailer-1080p.flv",
              },
            ],
          },
          {
            id: "sintelLeftClickArea",
            type: "brandClickArea",
            area: "leftTower",
            clickParams: {
              value: "https://durian.blender.org/",
            },
          },
          {
            id: "sintelHeaderClickArea",
            type: "brandClickArea",
            area: "header",
            clickParams: {
              value: "https://durian.blender.org/about/",
            },
          },
          {
            id: "sintelFooterClickArea",
            type: "brandClickArea",
            area: "footer",
            clickParams: {
              value: "https://durian.blender.org/gallery/",
            },
          },
        ],
      },
    },
    {
      id: "bbb",
      type: "BrandWrapper",
      config: {
        views: [
          {
            id: "bbbBrandingHeader",
            type: "header",
            url: "bbb_header.png",
          },
          {
            id: "bbbBrandingLeft",
            type: "leftTower",
            url: "bbb_tower_left.png",
          },
          {
            id: "bbbBrandingRight",
            type: "rightTower",
            url: "bbb_tower_right.png",
          },
          {
            id: "bbbBrandingFooter",
            type: "footer",
            url: "bbb_footer.png",
          },
          {
            id: "bbbPlayer",
            type: "smPlayerIframe",
            files: [
              {
                type: "mp4",
                codecs: "h264,aac",
                url: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.mp4",
              },
              {
                type: "mp4",
                codecs: "avc1.42E01E,mp4a.40.2",
                url: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.mp4",
              },
              {
                type: "ogv",
                codecs: "theora,vorbis",
                url: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.ogv",
              },
              {
                type: "flv",
                codecs: "h264,aac",
                url: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.flv",
              },
            ],
          },
          {
            id: "bbbLeftClickArea",
            type: "brandClickArea",
            area: "leftTower",
            clickParams: {
              value: "https://peach.blender.org/",
            },
          },
          {
            id: "bbbHeaderClickArea",
            type: "brandClickArea",
            area: "header",
            clickParams: {
              value: "https://peach.blender.org/",
            },
          },
          {
            id: "bbbRightClickArea",
            type: "brandClickArea",
            area: "rightTower",
            clickParams: {
              value: "https://peach.blender.org/",
            },
          },
          {
            id: "bbbFooterClickArea",
            type: "brandClickArea",
            area: "footer",
            clickParams: {
              value: "https://peach.blender.org/",
            },
          },
        ],
      },
    },
    {
      id: "walle",
      type: "BrandWrapper",
      config: {
        assetPath:
          "http://test-cdn.selectablemedia.com/test/a/walle/assets/img/",
        sizeTemplate: "smallVideo",
        views: [
          {
            id: "walleBranding",
            type: "fullBranding",
            url: "walle_single.png",
          },
          {
            id: "wallePlayer",
            type: "smPlayerIframe",
            files: [
              {
                type: "mp4",
                codecs: "h264,aac",
                url: "http://test-cdn.selectablemedia.com/test/a/walle/assets/video/wall-e-trailer-3_9_1280x544.mp4",
              },
              {
                type: "mp4",
                codecs: "avc1.42E01E,mp4a.40.2",
                url: "http://test-cdn.selectablemedia.com/test/a/walle/assets/video/wall-e-trailer-3_9_1280x544.mp4",
              },
              {
                type: "ogv",
                codecs: "theora,vorbis",
                url: "http://test-cdn.selectablemedia.com/test/a/walle/assets/video/wall-e-trailer-3_9_1280x544.ogv",
              },
              {
                type: "flv",
                codecs: "h264,aac",
                url: "http://test-cdn.selectablemedia.com/test/a/walle/assets/video/wall-e-trailer-3_9_1280x544.flv",
              },
            ],
          },
          {
            id: "wallLeftClickArea",
            type: "brandClickArea",
            area: "leftTower",
            clickParams: {
              value: "http://movies.disney.com/wall-e/",
            },
          },
          {
            id: "walleHeaderClickArea",
            type: "brandClickArea",
            area: "header",
            clickParams: {
              value: "http://movies.disney.com/wall-e/",
            },
          },
          {
            id: "walleRightClickArea",
            type: "brandClickArea",
            area: "rightTower",
            clickParams: {
              value: "http://movies.disney.com/wall-e/",
            },
          },
          {
            id: "walleFooterClickArea",
            type: "brandClickArea",
            area: "footer",
            clickParams: {
              value: "http://movies.disney.com/wall-e/",
            },
          },
        ],
      },
    },
  ],
};
