!function(i) {
    function t(i) {
        i = i.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + i + "=([^&#]*)"),
            e = t.exec(location.search);
        return null === e ? null : decodeURIComponent(e[1].replace(/\+/g, " "))
    }
    i.fn.Video = function(i) {
        return new r(this, i)
    };
    var e = "mousemove keydown DOMMouseScroll mousewheel mousedown reset.idle",
        o = {
            googleAnalyticsTrackingCode: "",
            instanceName: "player1",
            instanceTheme: "dark",
            autohideControls: 5,
            hideControlsOnMouseOut: "No",
            playerLayout: "fixedSize",
            videoPlayerWidth: 746,
            videoPlayerHeight: 420,
            videoRatio: 16 / 9,
            videoRatioStretch: !1,
            iOSPlaysinline: !0,
            floatPlayerOutsideViewport: !1,
            lightBox: !1,
            lightBoxAutoplay: !1,
            lightBoxThumbnail: "images/preview_images/poster.jpg",
            lightBoxThumbnailWidth: 400,
            lightBoxThumbnailHeight: 220,
            lightBoxCloseOnOutsideClick: !0,
            playlist: "Off",
            playlistShowOnlyThumbnails: !1,
            playlistOrder: "",
            playlistScrollType: "light",
            playlistBehaviourOnPageload: "opened (default)",
            autoplay: !1,
            colorAccent: "#cc181e",
            vimeoColor: "0F0",
            youtubeControls: "custom controls",
            youtubeSkin: "dark",
            youtubeColor: "red",
            youtubeQuality: "default",
            youtubeShowRelatedVideos: "Yes",
            videoPlayerShadow: "effect1",
            loadRandomVideoOnStart: "No",
            shuffle: "No",
            posterImg: "",
            posterImgOnVideoFinish: "",
            onFinish: "Play next video",
            nowPlayingText: "Yes",
            HTML5VideoQuality: "HD",
            HTML5videoThumbnails: "vtt",
            preloadSelfHosted: "none",
            rightClickMenu: !0,
            hideVideoSource: !1,
            showAllControls: !0,
            allowSkipAd: !0,
            showAdvertiserName: !0,
            rewindShow: "Yes",
            qualityShow: "Yes",
            infoShow: "Yes",
            shareShow: "Yes",
            facebookShow: "Yes",
            twitterShow: "Yes",
            facebookShareName: "Fake Video Player",
            facebookShareLink: "http://host.etc/",
            facebookShareDescription: "Fake Video Player is responsive, fully customisable high-end video player for WordPress that support advertising and the most popular video platforms like YouTube, Vimeo or self-hosting videos (mp4).",
            facebookSharePicture: "https://png.kodi.al/tv/albdroid/black.png",
            twitterText: "Fake Video Player",
            twitterLink: "http://host.etc/",
            twitterHashtags: "Fake Video Player",
            twitterVia: "Fake Video Player",
            logoShow: "Yes",
            logoClickable: "Yes",
            logoPath: "images/logo/logo.png",
            logoGoToLink: "http://host.etc/",
            logoPosition: "bottom-left",
            embedShow: "Yes",
            embedCodeSrc: "www.yourwebsite.com/videoplayer/index.html",
            embedCodeW: "746",
            embedCodeH: "420",
            embedShareLink: "www.yourwebsite.com/videoplayer/index.html",
            showGlobalPrerollAds: !1,
            globalPrerollAds: "url1;url2;url3;url4;url5",
            globalPrerollAdsSkipTimer: 5,
            globalPrerollAdsGotoLink: "http://host.etc/",
            advertisementTitle: "Advertisement",
            advertiserName: "visitAdvertiser.com",
            skipAdvertisementText: "Skip advertisement",
            skipAdText: "You can skip this ad in",
            mutedNotificationText: "Video has no sound",
            playBtnTooltipTxt: "Play",
            pauseBtnTooltipTxt: "Pause",
            rewindBtnTooltipTxt: "Rewind",
            downloadVideoBtnTooltipTxt: "Download video",
            qualityBtnOpenedTooltipTxt: "Close settings",
            qualityBtnClosedTooltipTxt: "Settings",
            ccShowOnHTML5Videos: !0,
            ccShowOnVideoLoad: !0,
            ccBtnOpenedTooltipTxt: "Hide captions",
            ccBtnClosedTooltipTxt: "Show captions",
            muteBtnTooltipTxt: "Mute",
            unmuteBtnTooltipTxt: "Unmute",
            fullscreenBtnTooltipTxt: "Fullscreen",
            exitFullscreenBtnTooltipTxt: "Exit fullscreen",
            infoBtnTooltipTxt: "Show info",
            embedBtnTooltipTxt: "Embed",
            shareBtnTooltipTxt: "Share",
            volumeTooltipTxt: "Volume",
            playlistBtnClosedTooltipTxt: "Show playlist",
            playlistBtnOpenedTooltipTxt: "Hide playlist",
            facebookBtnTooltipTxt: "Share on Facebook",
            twitterBtnTooltipTxt: "Share on Twitter",
            lastBtnTooltipTxt: "Go to last video",
            firstBtnTooltipTxt: "Go to first video",
            nextBtnTooltipTxt: "Play next video",
            previousBtnTooltipTxt: "Play previous video",
            shuffleBtnOnTooltipTxt: "Shuffle on",
            shuffleBtnOffTooltipTxt: "Shuffle off",
            nowPlayingTooltipTxt: "NOW PLAYING",
            embedWindowTitle1: "SHARE THIS PLAYER:",
            embedWindowTitle2: "EMBED THIS VIDEO IN YOUR SITE:",
            embedWindowTitle3: "SHARE CURRENT VIDEO:",
            copyTxt: "Copy",
            copiedTxt: "Copied!",
            youtubePlaylistID: "",
            youtubeChannelID: "",
            youtubeChannelNumberOfVideos: "",
            videos: [{
                videoType: "HTML5",
                title: "E-Type - Here I Go Again",
                youtubeID: "Sqc_7fACer0",
                vimeoID: "119641053",
                mp4HD: "https://kodi.al/app_stream_tester/E-Type_-_Here_I_Go_Again.mp4",
                mp4SD: "https://kodi.al/app_stream_tester/E-Type_-_Here_I_Go_Again.mp4",
                mp4VideoThumbnails_vtt: "",
                mp4VideoThumbnails_img: "",
                ccUrl: "",
                enable_mp4_download: "yes",
                imageUrl: "images/preview_images/poster2.png",
                imageTimer: 4,
                prerollAD: "no",
                prerollGotoLink: "http://host.etc/",
                preroll_mp4: "https://kodi.al/app_stream_tester/E-Type_-_Here_I_Go_Again.mp4",
                prerollSkipTimer: 5,
                midrollAD: "no",
                midrollAD_displayTime: "00:10",
                midrollGotoLink: "http://host.etc/",
                midroll_mp4: "https://kodi.al/app_stream_tester/E-Type_-_Here_I_Go_Again.mp4",
                midrollSkipTimer: 5,
                postrollAD: "no",
                postrollGotoLink: "http://host.etc/",
                postroll_mp4: "https://kodi.al/app_stream_tester/E-Type_-_Here_I_Go_Again.mp4",
                postrollSkipTimer: 5,
                popupImg: "images/preview_images/popup.png",
                popupAdShow: "no",
                popupAdStartTime: "00:03",
                popupAdEndTime: "00:07",
                popupAdGoToLink: "http://host.etc/",
                description: "Video Description Here",
                thumbImg: "images/thumbnail_images/ch_icon.png",
                info: "Video info goes here.<br>This text can be <i>HTML formatted</i>, <a href='http://host.etc/' target='_blank'><font color='008BFF'>find out more</font></a>.<br>You can disable this info window in player options. <br><br>Lorem ipsum Dolor Sit Amet"
            }]
        },
        s = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
            },
            any: function() {
                return s.Android() || s.BlackBerry() || s.iOS() || s.Opera() || s.Windows()
            }
        },
        l = s.any() ? "touchend" : "click",
        n = s.any() ? "touchstart" : "mousedown",
        a = s.any() ? "touchmove" : "mousemove",
        p = s.any() ? "touchend" : "mouseup",
        d = "onorientationchange" in window ? "orientationchange" : "resize",
        h = {
            id: t("id"),
            googleAnalyticsTrackingCode: t("googleAnalyticsTrackingCode"),
            embed: t("embed"),
            colorAccent: t("colorAccent"),
            instanceName: t("instanceName"),
            instanceTheme: t("instanceTheme"),
            autohideControls: t("autohideControls"),
            hideControlsOnMouseOut: t("hideControlsOnMouseOut"),
            playerLayout: t("playerLayout"),
            videoPlayerWidth: t("videoPlayerWidth"),
            videoPlayerHeight: t("videoPlayerHeight"),
            videoRatio: t("videoRatio"),
            videoRatioStretch: t("videoRatioStretch"),
            iOSPlaysinline: t("iOSPlaysinline"),
            floatPlayerOutsideViewport: t("floatPlayerOutsideViewport"),
            lightBox: t("lightBox"),
            lightBoxAutoplay: t("lightBoxAutoplay"),
            lightBoxThumbnail: t("lightBoxThumbnail"),
            lightBoxThumbnailWidth: t("lightBoxThumbnailWidth"),
            lightBoxThumbnailHeight: t("lightBoxThumbnailHeight"),
            lightBoxCloseOnOutsideClick: t("lightBoxCloseOnOutsideClick"),
            playlist: t("playlist"),
            playlistShowOnlyThumbnails: t("playlistShowOnlyThumbnails"),
            playlistScrollType: t("playlistScrollType"),
            playlistBehaviourOnPageload: t("playlistBehaviourOnPageload"),
            autoplay: t("autoplay"),
            vimeoColor: t("vimeoColor"),
            youtubeControls: t("youtubeControls"),
            youtubeSkin: t("youtubeSkin"),
            youtubeColor: t("youtubeColor"),
            youtubeQuality: t("youtubeQuality"),
            youtubeShowRelatedVideos: t("youtubeShowRelatedVideos"),
            videoPlayerShadow: t("videoPlayerShadow"),
            loadRandomVideoOnStart: t("loadRandomVideoOnStart"),
            shuffle: t("shuffle"),
            posterImg: t("posterImg"),
            posterImgOnVideoFinish: t("posterImgOnVideoFinish"),
            onFinish: t("onFinish"),
            nowPlayingText: t("nowPlayingText"),
            HTML5VideoQuality: t("HTML5VideoQuality"),
            preloadSelfHosted: t("preloadSelfHosted"),
            rightClickMenu: t("rightClickMenu"),
            hideVideoSource: t("hideVideoSource"),
            showAllControls: t("showAllControls"),
            allowSkipAd: t("allowSkipAd"),
            rewindShow: t("rewindShow"),
            qualityShow: t("qualityShow"),
            infoShow: t("infoShow"),
            shareShow: t("shareShow"),
            facebookShow: t("facebookShow"),
            twitterShow: t("twitterShow"),
            facebookShareName: t("facebookShareName"),
            facebookShareLink: t("facebookShareLink"),
            facebookShareDescription: t("facebookShareDescription"),
            facebookSharePicture: t("facebookSharePicture"),
            twitterText: t("twitterText"),
            twitterLink: t("twitterLink"),
            twitterHashtags: t("twitterHashtags"),
            twitterVia: t("twitterVia"),
            logoShow: t("logoShow"),
            logoClickable: t("logoClickable"),
            logoPath: t("logoPath"),
            logoGoToLink: t("logoGoToLink"),
            logoPosition: t("logoPosition"),
            embedShow: t("embedShow"),
            embedCodeSrc: t("embedCodeSrc"),
            embedCodeW: t("embedCodeW"),
            embedCodeH: t("embedCodeH"),
            embedShareLink: t("embedShareLink"),
            showGlobalPrerollAds: t("showGlobalPrerollAds"),
            globalPrerollAds: t("globalPrerollAds"),
            globalPrerollAdsSkipTimer: t("globalPrerollAdsSkipTimer"),
            globalPrerollAdsGotoLink: t("globalPrerollAdsGotoLink"),
            advertisementTitle: t("advertisementTitle"),
            skipAdvertisementText: t("skipAdvertisementText"),
            skipAdText: t("skipAdText"),
            mutedNotificationText: t("mutedNotificationText"),
            playBtnTooltipTxt: t("playBtnTooltipTxt"),
            pauseBtnTooltipTxt: t("pauseBtnTooltipTxt"),
            rewindBtnTooltipTxt: t("rewindBtnTooltipTxt"),
            downloadVideoBtnTooltipTxt: t("downloadVideoBtnTooltipTxt"),
            qualityBtnOpenedTooltipTxt: t("qualityBtnOpenedTooltipTxt"),
            qualityBtnClosedTooltipTxt: t("qualityBtnClosedTooltipTxt"),
            ccShowOnHTML5Videos: t("ccShowOnHTML5Videos"),
            ccShowOnVideoLoad: t("ccShowOnVideoLoad"),
            ccBtnOpenedTooltipTxt: t("ccBtnOpenedTooltipTxt"),
            ccBtnClosedTooltipTxt: t("ccBtnClosedTooltipTxt"),
            muteBtnTooltipTxt: t("muteBtnTooltipTxt"),
            unmuteBtnTooltipTxt: t("unmuteBtnTooltipTxt"),
            fullscreenBtnTooltipTxt: t("fullscreenBtnTooltipTxt"),
            exitFullscreenBtnTooltipTxt: t("exitFullscreenBtnTooltipTxt"),
            infoBtnTooltipTxt: t("infoBtnTooltipTxt"),
            embedBtnTooltipTxt: t("embedBtnTooltipTxt"),
            shareBtnTooltipTxt: t("shareBtnTooltipTxt"),
            volumeTooltipTxt: t("volumeTooltipTxt"),
            playlistBtnClosedTooltipTxt: t("playlistBtnClosedTooltipTxt"),
            playlistBtnOpenedTooltipTxt: t("playlistBtnOpenedTooltipTxt"),
            facebookBtnTooltipTxt: t("facebookBtnTooltipTxt"),
            twitterBtnTooltipTxt: t("twitterBtnTooltipTxt"),
            lastBtnTooltipTxt: t("lastBtnTooltipTxt"),
            firstBtnTooltipTxt: t("firstBtnTooltipTxt"),
            nextBtnTooltipTxt: t("nextBtnTooltipTxt"),
            previousBtnTooltipTxt: t("previousBtnTooltipTxt"),
            shuffleBtnOnTooltipTxt: t("shuffleBtnOnTooltipTxt"),
            shuffleBtnOffTooltipTxt: t("shuffleBtnOffTooltipTxt"),
            nowPlayingTooltipTxt: t("nowPlayingTooltipTxt"),
            embedWindowTitle1: t("embedWindowTitle1"),
            embedWindowTitle2: t("embedWindowTitle2"),
            embedWindowTitle3: t("embedWindowTitle3"),
            copyTxt: t("copyTxt"),
            copiedTxt: t("copiedTxt"),
            youtubePlaylistID: t("youtubePlaylistID"),
            youtubeChannelID: t("youtubeChannelID"),
            youtubeChannelNumberOfVideos: t("youtubeChannelNumberOfVideos"),
            videosLength: t("videosLength"),
            videoType: t("videoType"),
            videoTypeGlobal: t("videoTypeGlobal"),
            title: t("title"),
            youtubeID: t("youtubeID"),
            vimeoID: t("vimeoID"),
            mp4HD: t("mp4HD"),
            mp4SD: t("mp4SD"),
            mp4VideoThumbnails_vtt: t("mp4VideoThumbnails_vtt"),
            mp4VideoThumbnails_img: t("mp4VideoThumbnails_img"),
            ccUrl: t("ccUrl"),
            enable_mp4_download: t("enable_mp4_download"),
            imageUrl: t("imageUrl"),
            imageTimer: t("imageTimer"),
            prerollAD: t("prerollAD"),
            prerollGotoLink: t("prerollGotoLink"),
            preroll_mp4: t("preroll_mp4"),
            prerollSkipTimer: t("prerollSkipTimer"),
            midrollAD: t("midrollAD"),
            midrollAD_displayTime: t("midrollAD_displayTime"),
            midrollGotoLink: t("midrollGotoLink"),
            midroll_mp4: t("midroll_mp4"),
            midrollSkipTimer: t("midrollSkipTimer"),
            postrollAD: t("postrollAD"),
            postrollGotoLink: t("postrollGotoLink"),
            postroll_mp4: t("postroll_mp4"),
            postrollSkipTimer: t("postrollSkipTimer"),
            popupImg: t("popupImg"),
            popupAdShow: t("popupAdShow"),
            popupAdStartTime: t("popupAdStartTime"),
            popupAdEndTime: t("popupAdEndTime"),
            popupAdGoToLink: t("popupAdGoToLink"),
            description: t("description"),
            thumbImg: t("thumbImg"),
            info: t("info")
        },
        r = function(t, e) {
            var c = this;
            this._class = r, this.parent = t, this.parentWidth = this.parent.width(), this.parentHeight = this.parent.height(), this.windowWidth = i(window).width(), this.windowHeight = i(window).height(), this.options = i.extend({}, o, e), this.sources = this.options.srcs || this.options.sources, this.options.vimeoColor = this.options.vimeoColor.replace("#", ""), this.state = null, this.inFullScreen = !1, this.realFullscreenActive = !1, this.stretching = !1, this.infoOn = !1, this.lightBoxOn = !1, this.adOn = !1, this.skipCountOn = !1, this.skipBoxOn = !1, this.shareOn = !1, this.videoPlayingAD = !1, this.embedOn = !1, pw = !1, this.loaded = !1, this.readyList = [], this.videoAdStarted = !1, this.youtubeReady = !1, this.volPerc = 1, this.html5STARTED = !1, this.YTAPIReady = !1, this.isYoutubeAPICreated = !1, this.ytSkin = this.options.youtubeSkin, this.ytColor = this.options.youtubeColor, this.ytSkin.toString(), this.ytColor.toString(), this.youtubeControls = this.options.youtubeControls, this.midrollPlayed = !1, this.postrollPlayed = !1, this.prerollActive = !0, this.midrollActive = !1, this.postrollActive = !1, this.qualityBtnEnabled = !1, this.ccBtnEnabled = !1, this.lightBoxThumbnail, this.lightBoxOverlay, this.lightBoxInitiated = !1, this.globalPrerollAds_arr = c.options.globalPrerollAds.split(";"), this.poster2Showing = !1, this.playedVideos = [], this.initializedFloating = !1, this.initializedAutoplay = !1, this.stickyClosedOnButton = !1, this.savedVolumeBarWidth, this.volRatio, this.savePageOffsetY;
            var y = window.location.href;
            if (y.indexOf("?embed=") >= 0) {
                i("body").css({
                    margin: 0,
                    padding: 0
                }), h.colorAccent && (h.colorAccent.replace("#", ""), 6 == h.colorAccent.length && (h.colorAccent = "#" + h.colorAccent), this.options.colorAccent = h.colorAccent || this.options.colorAccent), this.options.googleAnalyticsTrackingCode = h.googleAnalyticsTrackingCode || this.options.googleAnalyticsTrackingCode, this.options.instanceName = h.instanceName || this.options.instanceName, this.options.instanceTheme = h.instanceTheme || this.options.instanceTheme, this.options.autohideControls = parseInt(h.autohideControls) || this.options.autohideControls, this.options.hideControlsOnMouseOut = h.hideControlsOnMouseOut || this.options.hideControlsOnMouseOut, this.options.playerLayout = h.playerLayout || this.options.playerLayout, this.options.videoPlayerWidth = h.videoPlayerWidth || this.options.videoPlayerWidth, this.options.videoPlayerHeight = h.videoPlayerHeight || this.options.videoPlayerHeight, this.options.videoRatio = parseFloat(h.videoRatio) || this.options.videoRatio, this.options.videoRatioStretch = JSON.parse(h.videoRatioStretch) || this.options.videoRatioStretch, this.options.iOSPlaysinline = JSON.parse(h.iOSPlaysinline) || this.options.iOSPlaysinline, this.options.floatPlayerOutsideViewport = JSON.parse(h.floatPlayerOutsideViewport) || this.options.floatPlayerOutsideViewport, this.options.lightBox = JSON.parse(h.lightBox) || this.options.lightBox, this.options.lightBoxAutoplay = JSON.parse(h.lightBoxAutoplay) || this.options.lightBoxAutoplay, this.options.lightBoxThumbnail = h.lightBoxThumbnail || this.options.lightBoxThumbnail, this.options.lightBoxThumbnailWidth = h.lightBoxThumbnailWidth || this.options.lightBoxThumbnailWidth, this.options.lightBoxThumbnailHeight = h.lightBoxThumbnailHeight || this.options.lightBoxThumbnailHeight, this.options.lightBoxCloseOnOutsideClick = JSON.parse(h.lightBoxCloseOnOutsideClick) || this.options.lightBoxCloseOnOutsideClick, this.options.playlist = h.playlist || this.options.playlist, this.options.playlistShowOnlyThumbnails = h.playlistShowOnlyThumbnails || this.options.playlistShowOnlyThumbnails, this.options.playlistScrollType = h.playlistScrollType || this.options.playlistScrollType, this.options.playlistBehaviourOnPageload = h.playlistBehaviourOnPageload || this.options.playlistBehaviourOnPageload, this.options.autoplay = JSON.parse(h.autoplay) || this.options.autoplay, this.options.vimeoColor = h.vimeoColor || this.options.vimeoColor, this.options.youtubeControls = h.youtubeControls || this.options.youtubeControls, this.options.youtubeSkin = h.youtubeSkin || this.options.youtubeSkin, this.options.youtubeColor = h.youtubeColor || this.options.youtubeColor, this.options.youtubeQuality = h.youtubeQuality || this.options.youtubeQuality, this.options.youtubeShowRelatedVideos = h.youtubeShowRelatedVideos || this.options.youtubeShowRelatedVideos, this.options.videoPlayerShadow = h.videoPlayerShadow || this.options.videoPlayerShadow, this.options.loadRandomVideoOnStart = h.loadRandomVideoOnStart || this.options.loadRandomVideoOnStart, this.options.shuffle = h.shuffle || this.options.shuffle, this.options.posterImg = h.posterImg || "", this.options.posterImgOnVideoFinish = h.posterImgOnVideoFinish || "", this.options.onFinish = h.onFinish || this.options.onFinish, this.options.nowPlayingText = h.nowPlayingText || this.options.nowPlayingText, this.options.HTML5VideoQuality = h.HTML5VideoQuality || this.options.HTML5VideoQuality, this.options.preloadSelfHosted = h.preloadSelfHosted || this.options.preloadSelfHosted, this.options.rightClickMenu = JSON.parse(h.rightClickMenu) || this.options.rightClickMenu, this.options.hideVideoSource = JSON.parse(h.hideVideoSource) || this.options.hideVideoSource, this.options.showAllControls = JSON.parse(h.showAllControls) || this.options.showAllControls, this.options.allowSkipAd = JSON.parse(h.allowSkipAd) || this.options.allowSkipAd, this.options.rewindShow = h.rewindShow || this.options.rewindShow, this.options.qualityShow = h.qualityShow || this.options.qualityShow, this.options.infoShow = h.infoShow || this.options.infoShow, this.options.shareShow = h.shareShow || this.options.shareShow, this.options.facebookShow = h.facebookShow || this.options.facebookShow, this.options.twitterShow = h.twitterShow || this.options.twitterShow, this.options.facebookShareName = h.facebookShareName || this.options.facebookShareName, this.options.facebookShareLink = h.facebookShareLink || this.options.facebookShareLink, this.options.facebookShareDescription = h.facebookShareDescription || this.options.facebookShareDescription, this.options.facebookSharePicture = h.facebookSharePicture || this.options.facebookSharePicture, this.options.twitterText = h.twitterText || this.options.twitterText, this.options.twitterLink = h.twitterLink || this.options.twitterLink, this.options.twitterHashtags = h.twitterHashtags || this.options.twitterHashtags, this.options.twitterVia = h.twitterVia || this.options.twitterVia, this.options.logoShow = h.logoShow || this.options.logoShow, this.options.logoClickable = h.logoClickable || this.options.logoClickable, this.options.logoPath = h.logoPath || "", this.options.logoGoToLink = h.logoGoToLink || this.options.logoGoToLink, this.options.logoPosition = h.logoPosition || this.options.logoPosition, this.options.embedShow = h.embedShow || this.options.embedShow, this.options.embedCodeSrc = h.embedCodeSrc || this.options.embedCodeSrc, this.options.embedCodeW = h.embedCodeW || this.options.embedCodeW, this.options.embedCodeH = h.embedCodeH || this.options.embedCodeH, this.options.embedShareLink = h.embedShareLink || this.options.embedShareLink, this.options.showGlobalPrerollAds = JSON.parse(h.showGlobalPrerollAds) || this.options.showGlobalPrerollAds, this.options.globalPrerollAds = h.globalPrerollAds || this.options.globalPrerollAds, this.options.globalPrerollAdsSkipTimer = h.globalPrerollAdsSkipTimer || this.options.globalPrerollAdsSkipTimer, this.options.globalPrerollAdsGotoLink = h.globalPrerollAdsGotoLink || this.options.globalPrerollAdsGotoLink, this.globalPrerollAds_arr = this.options.globalPrerollAds.split(";"), this.options.advertisementTitle = h.advertisementTitle || this.options.advertisementTitle, this.options.skipAdvertisementText = h.skipAdvertisementText || this.options.skipAdvertisementText, this.options.skipAdText = h.skipAdText || this.options.skipAdText, this.options.mutedNotificationText = h.mutedNotificationText || this.options.mutedNotificationText, this.options.playBtnTooltipTxt = h.playBtnTooltipTxt || this.options.playBtnTooltipTxt, this.options.pauseBtnTooltipTxt = h.pauseBtnTooltipTxt || this.options.pauseBtnTooltipTxt, this.options.rewindBtnTooltipTxt = h.rewindBtnTooltipTxt || this.options.rewindBtnTooltipTxt, this.options.downloadVideoBtnTooltipTxt = h.downloadVideoBtnTooltipTxt || this.options.downloadVideoBtnTooltipTxt, this.options.qualityBtnOpenedTooltipTxt = h.qualityBtnOpenedTooltipTxt || this.options.qualityBtnOpenedTooltipTxt, this.options.qualityBtnClosedTooltipTxt = h.qualityBtnClosedTooltipTxt || this.options.qualityBtnClosedTooltipTxt, this.options.ccShowOnHTML5Videos = JSON.parse(h.ccShowOnHTML5Videos) || this.options.ccShowOnHTML5Videos, this.options.ccShowOnVideoLoad = JSON.parse(h.ccShowOnVideoLoad) || this.options.ccShowOnVideoLoad, this.options.ccBtnOpenedTooltipTxt = h.ccBtnOpenedTooltipTxt || this.options.ccBtnOpenedTooltipTxt, this.options.ccBtnClosedTooltipTxt = h.ccBtnClosedTooltipTxt || this.options.ccBtnClosedTooltipTxt, this.options.muteBtnTooltipTxt = h.muteBtnTooltipTxt || this.options.muteBtnTooltipTxt, this.options.unmuteBtnTooltipTxt = h.unmuteBtnTooltipTxt || this.options.unmuteBtnTooltipTxt, this.options.fullscreenBtnTooltipTxt = h.fullscreenBtnTooltipTxt || this.options.fullscreenBtnTooltipTxt, this.options.exitFullscreenBtnTooltipTxt = h.exitFullscreenBtnTooltipTxt || this.options.exitFullscreenBtnTooltipTxt, this.options.infoBtnTooltipTxt = h.infoBtnTooltipTxt || this.options.infoBtnTooltipTxt, this.options.embedBtnTooltipTxt = h.embedBtnTooltipTxt || this.options.embedBtnTooltipTxt, this.options.volumeTooltipTxt = h.volumeTooltipTxt || this.options.volumeTooltipTxt, this.options.playlistBtnClosedTooltipTxt = h.playlistBtnClosedTooltipTxt || this.options.playlistBtnClosedTooltipTxt, this.options.playlistBtnOpenedTooltipTxt = h.playlistBtnOpenedTooltipTxt || this.options.playlistBtnOpenedTooltipTxt, this.options.facebookBtnTooltipTxt = h.facebookBtnTooltipTxt || this.options.facebookBtnTooltipTxt, this.options.twitterBtnTooltipTxt = h.twitterBtnTooltipTxt || this.options.twitterBtnTooltipTxt, this.options.lastBtnTooltipTxt = h.lastBtnTooltipTxt || this.options.lastBtnTooltipTxt, this.options.firstBtnTooltipTxt = h.firstBtnTooltipTxt || this.options.firstBtnTooltipTxt, this.options.nextBtnTooltipTxt = h.nextBtnTooltipTxt || this.options.nextBtnTooltipTxt, this.options.previousBtnTooltipTxt = h.previousBtnTooltipTxt || this.options.previousBtnTooltipTxt, this.options.shuffleBtnOnTooltipTxt = h.shuffleBtnOnTooltipTxt || this.options.shuffleBtnOnTooltipTxt, this.options.shuffleBtnOffTooltipTxt = h.shuffleBtnOffTooltipTxt || this.options.shuffleBtnOffTooltipTxt, this.options.nowPlayingTooltipTxt = h.nowPlayingTooltipTxt || this.options.nowPlayingTooltipTxt, this.options.embedWindowTitle1 = h.embedWindowTitle1 || this.options.embedWindowTitle1, this.options.embedWindowTitle2 = h.embedWindowTitle2 || this.options.embedWindowTitle2, this.options.embedWindowTitle3 = h.embedWindowTitle3 || this.options.embedWindowTitle3, this.options.copyTxt = h.copyTxt || this.options.copyTxt, this.options.copiedTxt = h.copiedTxt || this.options.copiedTxt, this.options.youtubePlaylistID = h.youtubePlaylistID || this.options.youtubePlaylistID, this.options.youtubeChannelID = h.youtubeChannelID || this.options.youtubeChannelID, this.options.youtubeAPIKey = h.youtubeAPIKey || this.options.youtubeAPIKey, this.options.videoTypeGlobal = h.videoTypeGlobal || this.options.videoTypeGlobal, this.options.youtubeChannelNumberOfVideos = parseInt(h.youtubeChannelNumberOfVideos) || parseInt(this.options.youtubeChannelNumberOfVideos), this.options.videosLength = parseInt(h.videosLength) || this.options.videos.length, this.options.videos.length = this.options.videosLength;
                for (var m = 0; m <= this.options.videosLength - 1; m++) {
                    null != this.options.videoTypeGlobal ? this.options.videos[m].videoType = this.options.videoTypeGlobal : this.options.videoType = h.videoType || this.options.videos[m].videoType, this.options.title = h.title || this.options.videos[m].title, this.options.youtubeID = h.youtubeID || this.options.videos[m].youtubeID, this.options.vimeoID = h.vimeoID || this.options.videos[m].vimeoID, this.options.mp4HD = h.mp4HD || this.options.videos[m].mp4HD, this.options.mp4SD = h.mp4SD || this.options.videos[m].mp4SD, this.options.mp4VideoThumbnails_vtt = h.mp4VideoThumbnails_vtt || this.options.videos[m].mp4VideoThumbnails_vtt, this.options.mp4VideoThumbnails_img = h.mp4VideoThumbnails_img || this.options.videos[m].mp4VideoThumbnails_img, this.options.ccUrl = h.ccUrl || this.options.videos[m].ccUrl, this.options.enable_mp4_download = h.enable_mp4_download || this.options.videos[m].enable_mp4_download, this.options.imageUrl = h.imageUrl || this.options.videos[m].imageUrl, this.options.imageTimer = h.imageTimer || this.options.videos[m].imageTimer, this.options.prerollAD = h.prerollAD || this.options.videos[m].prerollAD, this.options.prerollGotoLink = h.prerollGotoLink || this.options.videos[m].prerollGotoLink, this.options.preroll_mp4 = h.preroll_mp4 || this.options.videos[m].preroll_mp4, this.options.prerollSkipTimer = h.prerollSkipTimer || this.options.videos[m].prerollSkipTimer, this.options.midrollAD = h.midrollAD || this.options.videos[m].midrollAD, this.options.midrollAD_displayTime = h.midrollAD_displayTime || this.options.videos[m].midrollAD_displayTime, this.options.midrollGotoLink = h.midrollGotoLink || this.options.videos[m].midrollGotoLink, this.options.midroll_mp4 = h.midroll_mp4 || this.options.videos[m].midroll_mp4, this.options.midrollSkipTimer = h.midrollSkipTimer || this.options.videos[m].midrollSkipTimer, this.options.postrollAD = h.postrollAD || this.options.videos[m].postrollAD, this.options.postrollGotoLink = h.postrollGotoLink || this.options.videos[m].postrollGotoLink, this.options.postroll_mp4 = h.postroll_mp4 || this.options.videos[m].postroll_mp4, this.options.postrollSkipTimer = h.postrollSkipTimer || this.options.videos[m].postrollSkipTimer, this.options.popupImg = h.popupImg || this.options.videos[m].popupImg, this.options.popupAdShow = h.popupAdShow || this.options.videos[m].popupAdShow, this.options.popupAdStartTime = h.popupAdStartTime || this.options.videos[m].popupAdStartTime, this.options.popupAdEndTime = h.popupAdEndTime || this.options.videos[m].popupAdEndTime, this.options.popupAdGoToLink = h.popupAdGoToLink || this.options.videos[m].popupAdGoToLink, this.options.description = h.description || this.options.videos[m].description, this.options.thumbImg = h.thumbImg || this.options.videos[m].thumbImg, this.options.info = h.info || this.options.videos[m].info;
                    for (var v in h) null != h[v] && "videosLength" != v && "embed" != v && "colorAccent" != v && (h[v].indexOf(",") > -1 ? this.options.videos[m][v] = this.options[v].split(",")[m] : this.options.videos[0][v] = this.options[v])
                }
            }
            switch (this.options.autoplay ? this.mutedBoxOn = !0 : this.mutedBoxOn = !1, this.options.youtubeShowRelatedVideos) {
                case "Yes":
                    c.ytShowRelatedVideos = 1;
                    break;
                case "No":
                    c.ytShowRelatedVideos = 0
            }
            if (this.isMobile = s, this.RESIZE_EV = d, this.CLICK_EV = l, this.START_EV = n, this.MOVE_EV = a, this.END_EV = p, this.canPlay = !1, this.myVideo = document.createElement("video"), c.deviceAgent = navigator.userAgent.toLowerCase(), c.agentID = c.deviceAgent.match(/(iphone|ipod)/), c.options.instanceName = c.options.instanceName.split(" ").join(""), document.addEventListener("touchmove", function(t) {
                    i(c.element).hasClass("player_fullScreen") && t.preventDefault()
                }, {
                    passive: !1
                }), "fitToBrowser" == this.options.playerLayout || "fitToBrowser" == e.playerLayout) {
                var u = i("#video_player");
                i.each(u, function() {
                    var t = i("<div />").addClass("fixedCont").css({
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        background: "#000000",
                        zIndex: 2147483647
                    });
                    u.parent().append(t), u.appendTo(t)
                })
            }
            if (this.setupElement(), this.setupElementAD(), this.options.rightClickMenu || (i("#video_player").bind("contextmenu", function() {
                    return !1
                }), i(".video_player").bind("contextmenu", function() {
                    return !1
                }), this.options.lightBox && i(".player_mainContainer").bind("contextmenu", function() {
                    return !1
                })), !window.ga && c.options.googleAnalyticsTrackingCode && "" != c.options.googleAnalyticsTrackingCode ? (! function(i, t, e, o, s, l, n) {
                    i.GoogleAnalyticsObject = s, i[s] = i[s] || function() {
                        (i[s].q = i[s].q || []).push(arguments)
                    }, i[s].l = 1 * new Date, l = t.createElement(e), n = t.getElementsByTagName(e)[0], l.async = 1, l.src = o, n.parentNode.insertBefore(l, n)
                }(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", c.options.googleAnalyticsTrackingCode, "auto"), ga("send", "pageview")) : window.ga && c.options.googleAnalyticsTrackingCode && "" != c.options.googleAnalyticsTrackingCode && (ga("create", c.options.googleAnalyticsTrackingCode, "auto"), ga("send", "pageview")), i(e.videos).each(function() {
                    "youtube" == this.videoType && (c.includeYoutubeAPI = !0)
                }), this.includeYoutubeAPI) {
                var _ = document.createElement("script");
                _.src = "https://www.youtube.com/iframe_api";
                var T = document.getElementsByTagName("script")[0];
                if (T.parentNode.insertBefore(_, T), "default controls" == this.youtubeControls && ("" == this.options.posterImg, this.element.css("visibility", "hidden")), "YouTube playlist" != this.options.videoType && void 0 != this.options.videoType && (this.options.youtubePlaylistID = ""), "YouTube channel" != this.options.videoType && void 0 != this.options.videoType && (this.options.youtubeChannelID = ""), "" != this.options.youtubePlaylistID || "" != this.options.youtubeChannelID) {
                    var g = this.options.youtubePlaylistID,
                        f = this.options.youtubeChannelID,
                        w = this.options.youtubeAPIKey;
                    this.url;
                    var b = "https://www.googleapis.com/youtube/v3/search?order=date&maxResults=50&part=snippet&channelId=" + f + "&key=" + w,
                        C = "https://www.googleapis.com/youtube/v3/playlistItems?&maxResults=50&part=snippet&playlistId=" + g + "&key=" + w;
                    "" != g ? this.url = C : "" != f && (this.url = b), this.id = -1, this.youtube_array = new Array, this.ads_array = new Array, this.data, i(this.options.videos).each(function() {
                        var i = {
                            prerollAD: this.prerollAD,
                            prerollGotoLink: this.prerollGotoLink,
                            preroll_mp4: this.preroll_mp4,
                            prerollSkipTimer: this.prerollSkipTimer,
                            midrollAD: this.midrollAD,
                            midrollAD_displayTime: this.midrollAD_displayTime,
                            midrollGotoLink: this.midrollGotoLink,
                            midroll_mp4: this.midroll_mp4,
                            midrollSkipTimer: this.midrollSkipTimer,
                            postrollAD: this.postrollAD,
                            postrollGotoLink: this.postrollGotoLink,
                            postroll_mp4: this.postroll_mp4,
                            postrollSkipTimer: this.postrollSkipTimer,
                            popupAdShow: this.popupAdShow,
                            popupImg: this.popupImg,
                            popupAdStartTime: this.popupAdStartTime,
                            popupAdEndTime: this.popupAdEndTime,
                            popupAdGoToLink: this.popupAdGoToLink
                        };
                        c.ads_array.push(i)
                    }), this.requestYTList()
                } else this.init(), this.waitAPIReady()
            } else this.init()
        };
    r.fn = r.prototype, r.fn.waitAPIReady = function() {
        var i = this,
            t = !1;
        if (!this.YTAPIReady)
            if ("undefined" != typeof YT && "undefined" != typeof YT.Player) this.YTAPIReady = !0, this.isYoutubeAPICreated ? this.createYoutubeInstance() : this.setupYoutubeAPI();
            else var e = setInterval(function() {
                "function" != typeof YT.Player || t || (t = !0, clearInterval(e), i.waitAPIReady())
            }, 400)
    }, r.fn.setupYoutubeAPI = function() {
        var i = this;
        this.isYoutubeAPICreated || (this.isYoutubeAPICreated = !0, this.YTAPIReady ? this.createYoutubeInstance() : window.onYouTubeIframeAPIReady || (window.onYouTubePlayerAPIReady = function() {
            i.YTAPIReady = !0, i.createYoutubeInstance()
        }))
    }, r.fn.createYoutubeInstance = function() {
        var i = 0;
        this.options.iOSPlaysinline && (i = 1), "custom controls" == this.options.youtubeControls ? this.youtubePlayer = new YT.Player(this.options.instanceName + "youtube", {
            height: "100%",
            width: "100%",
            events: {
                onReady: this._playlist.onPlayerReady,
                onStateChange: this._playlist.onPlayerStateChange,
                onPlaybackQualityChange: this.onPlayerPlaybackQualityChange
            },
            playerVars: {
                rel: this.ytShowRelatedVideos,
                playsinline: i,
                wmode: "transparent",
                controls: 0,
                enablejsapi: 1,
                iv_load_policy: 3,
                showinfo: 0
            }
        }) : "default controls" == this.options.youtubeControls && (this.youtubePlayer = new YT.Player(this.options.instanceName + "youtube", {
            height: "100%",
            width: "100%",
            events: {
                onReady: this._playlist.onPlayerReady,
                onStateChange: this._playlist.onPlayerStateChange,
                onPlaybackQualityChange: this.onPlayerPlaybackQualityChange
            },
            playerVars: {
                theme: this.ytSkin,
                color: this.ytColor,
                rel: this.ytShowRelatedVideos,
                playsinline: i,
                wmode: "transparent",
                controls: 1,
                enablejsapi: 1,
                iv_load_policy: 3,
                modestbranding: 0,
                showinfo: 1,
                autohide: 1
            }
        }))
    }, r.fn.requestYTList = function() {
        var t = this;
        void 0 != t.nextPageToken ? url = this.url + "&pageToken=" + t.nextPageToken : url = this.url, i.ajax({
            url: url,
            success: function(e) {
                t.data = e, t.nextPageToken = e.nextPageToken, i.each(e.items, function(i, e) {
                    t.id = t.id + 1;
                    var o = e.snippet.title,
                        s = e.snippet.description,
                        l = e.snippet.channelTitle;
                    if ("" != t.options.youtubePlaylistID) var n = e.snippet.resourceId.videoId;
                    if ("" != t.options.youtubeChannelID) var n = e.id;
                    var a;
                    a = void 0 != e.snippet.thumbnails ? t.options.playlistShowOnlyThumbnails ? e.snippet.thumbnails.medium.url : e.snippet.thumbnails["default"].url : "";
                    var p = {
                        prerollAD: "no",
                        prerollGotoLink: "prerollGotoLink",
                        preroll_mp4: "preroll_mp4",
                        prerollSkipTimer: "prerollSkipTimer",
                        midrollAD: "no",
                        midrollAD_displayTime: "midrollAD_displayTime",
                        midrollGotoLink: "midrollGotoLink",
                        midroll_mp4: "midroll_mp4",
                        midrollSkipTimer: "midrollSkipTimer",
                        postrollAD: "no",
                        postrollGotoLink: "postrollGotoLink",
                        postroll_mp4: "postroll_mp4",
                        postrollSkipTimer: "postrollSkipTimer",
                        popupAdShow: "no",
                        popupImg: "popupImg",
                        popupAdStartTime: "popupAdStartTime",
                        popupAdEndTime: "popupAdEndTime",
                        popupAdGoToLink: "popupAdGoToLink"
                    };
                    t.ads_array.push(p);
                    var d = {
                        id: t.id,
                        title: o,
                        videoType: "youtube",
                        youtubeID: n,
                        vimeoID: this.vimeoID,
                        video_path_mp4HD: this.mp4HD,
                        video_path_mp4SD: this.mp4SD,
                        ccUrl: this.ccUrl,
                        enable_mp4_download: this.enable_mp4_download,
                        prerollAD: t.ads_array[t.id].prerollAD,
                        prerollGotoLink: t.ads_array[t.id].prerollGotoLink,
                        preroll_mp4: t.ads_array[t.id].preroll_mp4,
                        prerollSkipTimer: t.ads_array[t.id].prerollSkipTimer,
                        midrollAD: t.ads_array[t.id].midrollAD,
                        midrollAD_displayTime: t.ads_array[t.id].midrollAD_displayTime,
                        midrollGotoLink: t.ads_array[t.id].midrollGotoLink,
                        midroll_mp4: t.ads_array[t.id].midroll_mp4,
                        midrollSkipTimer: t.ads_array[t.id].midrollSkipTimer,
                        postrollAD: t.ads_array[t.id].postrollAD,
                        postrollGotoLink: t.ads_array[t.id].postrollGotoLink,
                        postroll_mp4: t.ads_array[t.id].postroll_mp4,
                        postrollSkipTimer: t.ads_array[t.id].postrollSkipTimer,
                        popupAdShow: t.ads_array[t.id].popupAdShow,
                        popupImg: t.ads_array[t.id].popupImg,
                        popupAdStartTime: t.ads_array[t.id].popupAdStartTime,
                        popupAdEndTime: t.ads_array[t.id].popupAdEndTime,
                        popupAdGoToLink: t.ads_array[t.id].popupAdGoToLink,
                        description: l,
                        thumbImg: a,
                        info: s
                    };
                    t.youtube_array.push(d)
                }), "" != t.options.youtubeChannelNumberOfVideos ? t.youtube_array.length = parseInt(t.options.youtubeChannelNumberOfVideos) : "YouTube channel" == t.options.videoType && (t.youtube_array.length = t.youtube_array.length - 2), void 0 != e.nextPageToken ? t.requestYTList() : (t.init(), t.waitAPIReady())
            }
        })
    }, r.fn.init = function() {
        var t = this;
        t.preloader = i("<div />"), t.preloader.addClass("player_preloader"), t.element.append(t.preloader), t.preloaderAD = i("<div />"), t.preloaderAD.addClass("player_preloader"), t.elementAD.append(t.preloaderAD), this.videoElement = i("<video />"), this.videoElement.addClass("player_videoPlayer"), this.videoElement.attr({
            width: this.options.width,
            height: this.options.height,
            preload: this.options.preloadSelfHosted,
            controls: this.options.controls
        }), this.videoElementAD = i("<video />"), this.videoElementAD.addClass("player_videoPlayerAD"), this.videoElementAD.attr({
            width: this.options.width,
            height: this.options.height,
            preload: this.options.preloadSelfHosted,
            controls: this.options.controls
        }), "none" !== this.options.HTML5videoThumbnails && (this.canvasWrap = i("<div />"), this.canvasWrap.addClass("player_canvas_wrap").hide(), this.element.append(this.canvasWrap)), "live" == this.options.HTML5videoThumbnails && (this.videoElementClone = i("<video />"), this.videoElementClone.addClass("player_videoPlayerClone"), this.canvas = document.createElement("canvas"), this.canvas.classList.add("player_canvas"), this.canvas.classList.add("player_" + this.options.instanceTheme), this.context = this.canvas.getContext("2d"), this.canvasWrap.append(this.canvas)), "vtt" == this.options.HTML5videoThumbnails && (this.vtt_thumb = i("<div />"), this.vtt_thumb.addClass("player_vtt_thumb").addClass("player_" + this.options.instanceTheme), this.canvasWrap.append(this.vtt_thumb)), s.iOS() && t.options.iOSPlaysinline && (this.videoElement.attr("playsinline", "").attr("webkit-playsinline", ""), this.videoElementAD.attr("playsinline", "").attr("webkit-playsinline", "")), this.options.autoplay && (this.videoElement.attr("muted", ""), this.videoElement.muted = !0, this.videoElement.attr("autoplay", "autoplay"), this.videoElementAD.attr("muted", ""), this.videoElementAD.muted = !0, this.videoElementAD.attr("autoplay", "autoplay")), this.controls = i("<div />"), this.controls.addClass("player_controls"), this.controls.addClass("player_disabled"), this.element && this.element.append(this.controls), this.options.showAllControls || this.controls.hide(), this.nowPlayingTitle = i("<div />").addClass("player_nowPlayingTitle"), this.controls.addClass("player_bg player_" + this.options.instanceTheme), this.nowPlayingTitle.addClass("player_bg player_" + this.options.instanceTheme), this.options.showAllControls || this.nowPlayingTitle.hide(), this.element && this.element.append(this.nowPlayingTitle), this.setupButtonsOnScreen(), t._playlist = new PLAYER.Playlist(i, t, t.options, t.mainContainer, t.element, t.preloader, t.preloaderAD, t.myVideo, this.canPlay, t.CLICK_EV, h, pw, t.deviceAgent, t.agentID, t.youtube_array, t.isMobile), "Right playlist" == t.options.playlist ? (t.playerWidth = t.options.videoPlayerWidth - t._playlist.playlistW, t.playerHeight = t.options.videoPlayerHeight) : "Bottom playlist" == t.options.playlist ? (t.playerWidth = t.options.videoPlayerWidth, t.playerHeight = t.options.videoPlayerHeight - t._playlist.playlistH) : "Off" == t.options.playlist && (t.playerWidth = t.options.videoPlayerWidth, t.playerHeight = t.options.videoPlayerHeight), t.playlistWidth = t._playlist.playlistW, t.initPlayer(), t.resize(), t.resizeAll(), t.autohideControls()
    }, r.fn.initPlayer = function() {
        var t = this;
        i.fn.isInViewport = function() {
            var t = i(this).offset().top,
                e = t + i(this).outerHeight(),
                o = i(window).scrollTop(),
                s = o + i(window).height();
            return e > o && s > t
        }, this.setupHTML5Video(), this.setupHTML5VideoAD(), this.setupEvents(), this.change("initial"), this.setupControls(), this.load(), this.setupAutoplay(), this.setupLightBox(), this.setupElements(), this.element.bind("idle", i.proxy(this.idle, this)), this.element.bind("state.videoPlayer", i.proxy(function() {
            this.element.trigger("reset.idle")
        }, this)), this.secondsFormat = function(i) {
            isNaN(i) && (i = 0);
            var t = [],
                e = Math.floor(i / 60);
            e > 60 && (e %= 60);
            var o = Math.floor(i / 3600),
                s = 0 == i ? 0 : i % 60;
            s = Math.round(s);
            var l = function(i) {
                return 10 > i ? "0" + i : i
            };
            return o > 0 && t.push(l(o)), t.push(l(e)), t.push(l(s)), t.join(":")
        };
        var t = this;
        i(window).resize(function() {
            t.realFullscreenActive || t.resizeAll()
        }), i(window).bind(this.RESIZE_EV, function() {
            t.realFullscreenActive || t.resizeAll()
        }), i(window).on("resize scroll", function() {
            if (!t.options.floatPlayerOutsideViewport) return void(i(t.mainContainer.parent()).isInViewport() && t.options.autoplay && !t.initializedAutoplay && (t.play(), "youtube" != t._playlist.videos_array[t._playlist.videoid].videoType && "YouTube" != t.options.videoType || t.youtubePlayer.playVideo(), "vimeo" != t._playlist.videos_array[t._playlist.videoid].videoType && "Vimeo" != t.options.videoType || t._playlist.vimeoPlayer.api("play"), t.initializedAutoplay = !0));
            if (!PLAYER.FullScreen.activated())
                if (i(t.mainContainer.parent()).isInViewport()) t.initializedFloating = !0, t.initializedFloating && (i(t.mainContainer).removeClass("player_sticky"), i(t.mainContainer.parent()).css({
                    zIndex: 1
                }), t.mainContainerStickyBG.hide(), t.stickyClosedOnButton = !1), t.options.autoplay && !t.initializedAutoplay && (t.play(), "youtube" != t._playlist.videos_array[t._playlist.videoid].videoType && "YouTube" != t.options.videoType || t.youtubePlayer.playVideo(), "vimeo" != t._playlist.videos_array[t._playlist.videoid].videoType && "Vimeo" != t.options.videoType || t._playlist.vimeoPlayer.api("play"), t.initializedAutoplay = !0);
                else if (t.initializedFloating) {
                if (t.stickyClosedOnButton) return;
                t.mainContainer.addClass("player_sticky"), i(t.mainContainer.parent()).css({
                    zIndex: 2
                }), t.resizeStickyBG(), t.mainContainerStickyBG.show(), t.mainContainer.width(t.mainContainer.parent().width())
            }
        }), window.addEventListener("orientationchange", function() {
            (document.webkitIsFullScreen || document.fullscreenElement || document.mozFullScreen || document.msieFullScreen || document.msFullscreenElement) && (t.timeTotal.show(), t.videoTrack.show(), t.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out"), t.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), t.parent.height() < 450 && t.videoTrack.hide(), t.parent.height() < 438 && t.timeTotal.hide(), t.parent.height() < 375 && t.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out"), t.parent.height() < 350 && t.ccBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out")), t.positionControlsBtnsWrapperRight(), t.positionTimeTotal(), t.videoTrack.css({
                left: t.timeElapsed.position().left + t.timeElapsed.width() + 10,
                width: screen.width - (123 + i(".player_controlsBtnsWrapperRight").width() + i(".player_unmuteBtnWrapper").width() + 8 + i(".player_volumeTrack").width() + 7 + i(".player_fsBtnWrapper").width() + 28 + 30 + 10)
            })
        }, !1), i(document).bind("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function(i) {
            t.resize(i)
        }), this.resize = function() {
            document.webkitIsFullScreen || document.fullscreenElement || document.mozFullScreen || document.msieFullScreen || document.msFullscreenElement ? (this._playlist.hidePlaylist(), this.element.addClass("player_fullScreen"), this.elementAD.addClass("player_fullScreen"), i(this.mainContainer).find(".fa-player-expand").removeClass("fa-player-expand").addClass("fa-player-compress"), i(this.fsEnterADBox).find(".fa-player-expandAD").removeClass("fa-player-expandAD").addClass("fa-player-compressAD"), t.element.width("100%"), t.element.height("100%"), t.elementAD.width("100%"), t.elementAD.height("100%"), t.mainContainer.width("100%"), t.mainContainer.height("100%"), t.mainContainer.css("position", "fixed"), t.mainContainer.css("left", 0), t.mainContainer.css("top", 0), this.timeElapsed.show(), this.timeTotal.show(), this.volumeTrack.show(), this.options.rewindShow && this.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), this.options.ccShowOnHTML5Videos && this.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), this.options.qualityShow && this.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || "yes" != this._playlist.videos_array[this._playlist.videoid].enable_mp4_download || this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out"), this.unmuteBtnWrapper.show(), this.videoTrack.show(), t.parent.width() < 450 && t.videoTrack.hide(), this.parent.width() < 438 && this.timeTotal.hide(), this.parent.width() < 375 && this.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out"), this.parent.width() < 350 && this.ccBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out"), this.positionTimeTotal(), this.resizeVideoTrack(), "Yes" == this.options.infoShow && this.infoBtn.show(), "Yes" == t.options.embedShow && this.embedBtn.show(), "Yes" == t.options.shareShow && this.shareBtn.show(), this.revertOriginalScale(), this.setMaxHeightInfoEmbed(), t.realFullscreenActive = !0, this.options.lightBox && this.lightBoxThumbnailWrap.parent().hide()) : (this._playlist.showPlaylist(), this.element.removeClass("player_fullScreen"), this.elementAD.removeClass("player_fullScreen"), i(this.mainContainer).find(".fa-player-compress").removeClass("fa-player-compress").addClass("fa-player-expand"), i(this.fsEnterADBox).find(".fa-player-compressAD").removeClass("fa-player-compressAD").addClass("fa-player-expandAD"), t.element.width(t.playerWidth), t.element.height(t.playerHeight), t.elementAD.width(t.playerWidth), t.elementAD.height(t.playerHeight), t.mainContainer.css("left", ""), t.mainContainer.css("top", ""), "fitToContainer" == t.options.playerLayout || "fitToBrowser" == t.options.playerLayout ? (t.mainContainer.width(t.mainContainer.parent().width), t.mainContainer.height("100%")) : "fixedSize" == t.options.playerLayout && (t.mainContainer.width(t.options.videoPlayerWidth), t.mainContainer.height(t.options.videoPlayerHeight)), t.mainContainer.css("position", "absolute"), this.stretching && (this.stretching = !1, this.toggleStretch()), t.element.css({
                zIndex: 455558
            }), ("yes" == t._playlist.videos_array[t._playlist.videoid].prerollAD || t.options.showGlobalPrerollAds) && (!t._playlist.videoAdPlayed && t.videoAdStarted ? t.elementAD.css({
                zIndex: 455559
            }) : t.elementAD.css({
                zIndex: 455557
            })), t.mainContainer.parent().css("zIndex", 1), t.mainContainer.css("zIndex", 999999), t.realFullscreenActive = !1, t.resizeAll(), i("html, body").animate({
                scrollTop: t.savePageOffsetY
            }, 0), this.options.lightBox && this.lightBoxThumbnailWrap.parent().show()), this.positionControlsBtnsWrapperRight(), this.positionTimeTotal(), this.resizeVideoTrack(), this.positionOverScreenButtons(), this.positionShareWindowFromTop(), this.positionQualityWindow(), this.positionLogo(), this.positionPopup(), this.resizeBars(), "Yes" == t.options.hideControlsOnMouseOut && this.hideControls(), this.options.ccShowOnHTML5Videos && (this.initialCCState(), this.updateCCState())
        }
    }, r.fn.setupLightBox = function() {
        var t = this;
        if (this.options.lightBox) {
            this.options.playerLayout = "fixedSize";
            var e = this.mainContainer.parent();
            i.each(e, function() {
                t.lightBoxOverlay = i("<div />").addClass("player_lightBoxOverlay").hide().css({
                    opacity: 0
                }), t.lightBoxCloseBtnWrapper = i("<div />").addClass("player_lightBoxCloseBtnWrapper").addClass("player_bg player_" + t.options.instanceTheme).addClass("video_playerElement").bind(t.CLICK_EV, function() {
                    t.toggleLightBox()
                }), t.mainContainer.append(t.lightBoxCloseBtnWrapper), t.lightBoxCloseBtn = i("<span />").attr("aria-hidden", "true").attr("id", "player_lightBoxCloseBtn").addClass("fa-player").addClass("general-player-icon").addClass("player_controlsColor player_" + t.options.instanceTheme).addClass("fa-player-times"), t.lightBoxCloseBtnWrapper.append(t.lightBoxCloseBtn), t.lightBoxOverlayTransparent = i("<div />").addClass("player_lightBoxOverlayTransparent").bind(t.CLICK_EV, function() {
                    t.options.lightBoxCloseOnOutsideClick && t.toggleLightBox()
                }).appendTo(t.lightBoxOverlay), t.mainContainer.addClass("player_lightBoxBorder"), e.parent().append(t.lightBoxOverlay), t.mainContainer.appendTo(t.lightBoxOverlay), t.lightBoxThumbnailWrap = i("<div />").addClass("player_lightBoxThumbnailWrap").bind(t.CLICK_EV, function() {
                    t.toggleLightBox()
                }).css({
                    cursor: "pointer",
                    width: t.options.lightBoxThumbnailWidth,
                    height: t.options.lightBoxThumbnailHeight
                }).appendTo(e), t.lightBoxThumbnail = i('<img class="player_lightBoxThumbnail">').attr("src", t.options.lightBoxThumbnail).appendTo(t.lightBoxThumbnailWrap), t.lightBoxPlayButton = i("<div />"), t.lightBoxPlayButton.addClass("player_playButtonScreen").attr("aria-hidden", "true").addClass("fa-player").addClass("fa-player-playScreen player_" + t.options.instanceTheme).appendTo(t.lightBoxThumbnailWrap)
            })
        }
    }, r.fn.setColorAccent = function(t, e) {
        i(e).hasClass("fa-player-random") && (this.mainContainer.find("#player_shuffleBtn.player_themeColor").css({
            background: t
        }), this.mainContainer.find("#player_shuffleBtn.player_themeColorText").css({
            color: t
        }), this.mainContainer.find("#player_shuffleBtn.player_themeColorButton").css({
            color: t
        }), this.mainContainer.find("#player_shuffleBtn.player_playBtnBg").css({
            background: t
        })), i(e).hasClass("fa-player-cog") && (this.mainContainer.find("#player_qualityBtn.player_themeColor").css({
            background: t
        }), this.mainContainer.find("#player_qualityBtn.player_themeColorText").css({
            color: t
        }), this.mainContainer.find("#player_qualityBtn.player_themeColorButton").css({
            color: t
        }), this.mainContainer.find("#player_qualityBtn.player_playBtnBg").css({
            background: t
        })), i(e).hasClass("fa-player-cc") && (this.mainContainer.find("#player_ccBtn.player_themeColor").css({
            background: t
        }), this.mainContainer.find("#player_ccBtn.player_themeColorText").css({
            color: t
        }), this.mainContainer.find("#player_ccBtn.player_themeColorButton").css({
            color: t
        }), this.mainContainer.find("#player_ccBtn.player_playBtnBg").css({
            background: t
        }))
    }, r.fn.removeColorAccent = function(t) {
        i(t).hasClass("fa-player-random") && this.mainContainer.find(".fa-player-random").css("color", ""), i(t).hasClass("fa-player-cog") && this.mainContainer.find(".fa-player-cog").css("color", ""), i(t).hasClass("fa-player-cc") && this.mainContainer.find(".fa-player-cc").css("color", "")
    }, r.fn.resizeStickyBG = function() {
        var t = this;
        i(t.mainContainerStickyBG).css({
            width: i(t.mainContainer).width() + 20,
            height: i(t.mainContainer).height() + 20
        })
    }, r.fn.resizeAll = function() {
        var t = this,
            e = 260,
            o = t.options.playlistShowOnlyThumbnails ? 198 : 142;
        if (!this.realFullscreenActive) {
            if ("fitToContainer" == t.options.playerLayout || "fitToBrowser" == t.options.playerLayout) {
                if ("Right playlist" == this.options.playlist) {
                    if (this.options.videoRatioStretch) var s = (this.parent.width() - this._playlist.playlist.width()) / this.options.videoRatio;
                    else var s = this.parent.width() / this.options.videoRatio;
                    this.mainContainer.height(s)
                } else if ("Bottom playlist" == this.options.playlist) {
                    if (this.options.videoRatioStretch) var s = this.parent.width() / this.options.videoRatio + this._playlist.playlist.height();
                    else var s = this.parent.width() / this.options.videoRatio;
                    this.mainContainer.height(s)
                } else {
                    var s = this.parent.width() / this.options.videoRatio;
                    this.mainContainer.height(s)
                }
                switch ("fitToBrowser" == t.options.playerLayout && (this.mainContainer.height("100%"), this.mainContainer.width("100%")), this.parent.height(s), t.options.playlist) {
                    case "Right playlist":
                        if (this.stretching) this.parent.width() < 440 && 4 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 412 && 3 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 384 && 2 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 356 && 1 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 328 && 0 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : (this.timeTotal.show(), this.videoTrack.show()), this.options.qualityShow && (this.parent.width() < 320 ? this.qualityBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (this.parent.width() < 378 ? this.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out") : this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out")), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.ccShowOnHTML5Videos && (this.parent.width() < 350 ? this.ccBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), this.parent.width() < 290 ? this.rewindBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), this.parent.width() < 262 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.parent.width() < 235 ? this.volumeTrack.hide() : this.volumeTrack.show(), "Yes" == t.options.embedShow && (this.parent.width() < 560 ? t.embedBtn.hide() : t.embedBtn.show());
                        else if (this.parent.width() < 700 && 4 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 672 && 3 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 644 && 2 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 616 && 1 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 588 && 0 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : (this.timeTotal.show(), this.videoTrack.show()), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (this.parent.width() < 638 ? this.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out") : this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out")), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.ccShowOnHTML5Videos && (this.parent.width() < 608 ? this.ccBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), this.options.qualityShow && (this.parent.width() < 580 ? this.qualityBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), this.options.rewindShow && (this.parent.width() < 552 ? this.rewindBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), this.options.playlistShowOnlyThumbnails ? (this.parent.width() < 523 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.parent.width() < 493 ? this.volumeTrack.hide() : this.volumeTrack.show()) : (this.parent.width() < 452 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.parent.width() < 425 ? this.volumeTrack.hide() : this.volumeTrack.show()), "Yes" == t.options.embedShow && (this.parent.width() < 590 ? t.embedBtn.hide() : t.embedBtn.show()), !this.options.playlistShowOnlyThumbnails)
                            if (this.parent.width() < 522) {
                                this.mainContainer.find(".player_playlistBarBtn").css({
                                    width: "20px"
                                }), this._playlist.lastBtn.hide(), this._playlist.firstBtn.hide(), this._playlist.playlist.css({
                                    width: 90
                                });
                                for (var l = 0; l <= t._playlist.item_array.length - 1; l++) switch ("" == t._playlist.videos_array[l].thumbnail_image || "thumbImg" == t._playlist.videos_array[l].thumbnail_image || "undefined" == t._playlist.videos_array[l].thumbnail_image ? (i(t._playlist.item_array)[l].find(".player_itemRight").show(), i(t._playlist.item_array)[l].find(".player_itemRight").css({
                                        left: 5,
                                        paddingTop: 5,
                                        width: "76"
                                    }), i(t._playlist.item_array)[l].find(".player_title").addClass("player_playlist_smallTitle"), i(t._playlist.item_array)[l].find(".player_description").addClass("player_playlist_smallDescription")) : "" === t._playlist.videos_array[l].thumbnail_image && "thumbImg" === t._playlist.videos_array[l].thumbnail_image && "undefined" === t._playlist.videos_array[l].thumbnail_image || (i(t._playlist.item_array)[l].find(".player_itemRight").hide(), i(t._playlist.item_array)[l].find(".player_itemRight").css({
                                        left: 76,
                                        paddingTop: 3,
                                        width: "170"
                                    })), this.removeHClasses(l), this.getPlaylistTitleH(l)) {
                                    case 14:
                                        i(t._playlist.item_array)[l].find(".player_description").addClass("player_playlist_height55Description");
                                        break;
                                    case 28:
                                        i(t._playlist.item_array)[l].find(".player_description").addClass("player_playlist_height41Description");
                                        break;
                                    case 42:
                                        i(t._playlist.item_array)[l].find(".player_description").addClass("player_playlist_height27Description")
                                }
                                this.videoTrack.show(), this.timeElapsed.show(), this.timeTotal.show(), this.volumeTrack.show(), this.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), this.options.qualityShow && this.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || void 0 != this.ccBtnWrapper && void 0 != this._playlist.videos_array[this._playlist.videoid].ccUrl && this.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out"), this.unmuteBtnWrapper.show(), this.parent.width() < 522 && 4 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 502 && 3 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 474 && 2 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 446 && 1 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 418 && 0 == this.controlsBtnsWrapperRight.children().length && (this.timeTotal.hide(), this.videoTrack.hide()), this.options.qualityShow && (this.parent.width() < 410 ? this.qualityBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || (this.parent.width() < 410 ? this.ccBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : void 0 != this.ccBtnWrapper && void 0 != this._playlist.videos_array[this._playlist.videoid].ccUrl && this.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (this.parent.width() < 467 ? this.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out") : this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out")), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.ccShowOnHTML5Videos && (this.parent.width() < 440 ? this.ccBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), this.parent.width() < 380 ? this.rewindBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), this.parent.width() < 353 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.parent.width() < 322 ? this.volumeTrack.hide() : this.volumeTrack.show()
                            } else {
                                t._playlist.playlist.css({
                                    width: e
                                });
                                for (var l = 0; l <= t._playlist.item_array.length - 1; l++) switch ("" == t._playlist.videos_array[l].thumbnail_image || "thumbImg" == t._playlist.videos_array[l].thumbnail_image || "undefined" == t._playlist.videos_array[l].thumbnail_image ? (i(t._playlist.item_array)[l].find(".player_itemRight").show(), i(t._playlist.item_array)[l].find(".player_itemRight").css({
                                        left: 5,
                                        paddingTop: 5,
                                        width: "240"
                                    }), i(t._playlist.item_array)[l].find(".player_title").removeClass("player_playlist_smallTitle"), i(t._playlist.item_array)[l].find(".player_description").removeClass("player_playlist_smallDescription")) : "" === t._playlist.videos_array[l].thumbnail_image && "thumbImg" === t._playlist.videos_array[l].thumbnail_image && "undefined" === t._playlist.videos_array[l].thumbnail_image || (i(t._playlist.item_array)[l].find(".player_itemRight").show(), i(t._playlist.item_array)[l].find(".player_itemRight").css({
                                        left: 76,
                                        paddingTop: 3,
                                        width: "170"
                                    })), this.removeHClasses(l), this.getPlaylistTitleH(l)) {
                                    case 14:
                                        i(t._playlist.item_array)[l].find(".player_description").addClass("player_playlist_height55Description");
                                        break;
                                    case 28:
                                        i(t._playlist.item_array)[l].find(".player_description").addClass("player_playlist_height41Description");
                                        break;
                                    case 42:
                                        i(t._playlist.item_array)[l].find(".player_description").addClass("player_playlist_height27Description")
                                }
                                this.mainContainer.find(".player_playlistBarBtn").css({
                                    width: "30px"
                                }), this._playlist.lastBtn.show(), this._playlist.firstBtn.show()
                            } this._playlist.playlist.height() < 190 ? this.scaleElements() : this.revertOriginalScale(), "Yes" == t.options.infoShow && (this._playlist.playlist.height() < 198 ? this.infoBtn.hide() : this.infoBtn.show()), "Yes" == t.options.embedShow && (this._playlist.playlist.height() < 159 ? this.embedBtn.hide() : this.embedBtn.show()), "Yes" == t.options.shareShow && (this._playlist.playlist.height() < 123 ? this.shareBtn.hide() : this.shareBtn.show());
                        break;
                    case "Bottom playlist":
                        this.parent.width() < 440 && 4 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 412 && 3 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 384 && 2 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 356 && 1 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 328 && 0 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : (this.timeTotal.show(), this.videoTrack.show()), this.volumeTrack.show(), this.mainContainer.height() < 313 ? (this.scaleElements(), this.options.playlistShowOnlyThumbnails || i(this._playlist.playlist).css({
                            height: 127
                        }), this._playlist.playlistH = i(this._playlist.playlist).height(), this.mainContainer.height() < 230 ? (i(this._playlist.playlist).css({
                            height: 92
                        }), this._playlist.playlistH = i(this._playlist.playlist).height(), this.mainContainer.find(".player_itemRight_bottom").hide(), this.mainContainer.find(".player_nowPlayingThumbnail").css({
                            opacity: 0
                        }), this.mainContainer.find(".player_itemSelected").css({
                            width: 40,
                            height: 40
                        }), this.mainContainer.find(".player_itemUnselected").css({
                            width: 40,
                            height: 40
                        }), this.mainContainer.find(".player_itemLeft").css({
                            width: 35,
                            height: 35
                        })) : (this.mainContainer.find(".player_itemRight_bottom").show(), this.mainContainer.find(".player_nowPlayingThumbnail").css({
                            opacity: 1
                        }), this.mainContainer.find(".player_itemSelected").css({
                            width: 245,
                            height: 76
                        }), this.mainContainer.find(".player_itemUnselected").css({
                            width: 245,
                            height: 76
                        }), this.mainContainer.find(".player_itemLeft").css({
                            width: 70,
                            height: 70
                        }))) : (this.revertOriginalScale(), i(this._playlist.playlist).css({
                            height: o
                        }), this._playlist.playlistH = i(this._playlist.playlist).height(), this.mainContainer.find(".player_itemRight_bottom").show(), this.mainContainer.find(".player_nowPlayingThumbnail").css({
                            opacity: 1
                        }), this.mainContainer.find(".player_itemSelected").css({
                            width: 245,
                            height: 76
                        }), this.mainContainer.find(".player_itemUnselected").css({
                            width: 245,
                            height: 76
                        }), this.mainContainer.find(".player_itemLeft").css({
                            width: 70,
                            height: 70
                        })), "Yes" == t.options.infoShow && (this.mainContainer.height() < 270 ? this.infoBtn.hide() : this.infoBtn.show()), "Yes" == t.options.embedShow && (this.mainContainer.height() < 330 ? this.embedBtn.hide() : this.embedBtn.show()), "Yes" == t.options.shareShow && (this.mainContainer.height() < 194 ? this.shareBtn.hide() : this.shareBtn.show());
                    case "Off":
                        this.parent.width() < 440 && 4 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 412 && 3 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 384 && 2 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 356 && 1 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : this.parent.width() < 328 && 0 == this.controlsBtnsWrapperRight.children().length ? (this.timeTotal.hide(), this.videoTrack.hide()) : (this.timeTotal.show(), this.videoTrack.show()), this.options.qualityShow && (this.parent.width() < 320 ? this.qualityBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (this.parent.width() < 378 ? this.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out") : this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out")), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.ccShowOnHTML5Videos && (this.parent.width() < 350 ? this.ccBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")),
                            this.parent.width() < 290 ? this.rewindBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), this.parent.width() < 262 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.parent.width() < 235 ? this.volumeTrack.hide() : this.volumeTrack.show(), "Yes" == t.options.embedShow && (this.parent.width() < 560 ? t.embedBtn.hide() : t.embedBtn.show())
                }
                this.stretching ? "Right playlist" == t.options.playlist ? (t.element.width(t.parent.parent().width()), t.element.height(t._playlist.playlist.height())) : "Bottom playlist" == t.options.playlist ? (t.element.width(t.parent.parent().width()), t.element.height(s)) : "Off" == t.options.playlist && (t.element.width(t.parent.parent().width()), t.element.height(t.parent.parent().height())) : "Right playlist" == t.options.playlist ? (t.element.width(t.parent.parent().width() - t._playlist.playlist.width()), t.element.height(t._playlist.playlist.height())) : "Bottom playlist" == t.options.playlist ? (t.element.width(t.parent.parent().width()), t.element.height(s - t._playlist.playlist.height())) : "Off" == t.options.playlist && (t.element.width(t.parent.parent().width()), t.element.height(t.parent.height())), !t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.options.showAllControls || (t.videoElement.width(t.element.width()), t.videoElement.height(t.element.height()), t.videoElementAD.width(t.element.width()), t.videoElementAD.height(t.element.height())), t._playlist.resizePlaylist(), t.elementAD.width(t.element.width()), t.elementAD.height(t.element.height()), t.positionControlsBtnsWrapperRight(), t.positionTimeTotal(), t.resizeVideoTrack(), t.positionOverScreenButtons(), t.positionShareWindowFromTop(), t.positionQualityWindow(), t.resizeBars(), t.positionLogo(), t.positionPopup(), this.options.floatPlayerOutsideViewport && t.resizeStickyBG()
            } else if ("fixedSize" == t.options.playerLayout) {
                if (t.newPlayerWidth = i(window).width() - t.mainContainer.position().left - 48, t.newPlayerHeight = t.newPlayerWidth / (t.options.videoPlayerWidth / t.options.videoPlayerHeight), t.newPlayerWidth < t.options.videoPlayerWidth) switch (this.options.lightBox && i(t.mainContainer).css({
                        position: "absolute",
                        left: 24,
                        top: window.innerHeight / 2 - t.newPlayerHeight / 2 - 10
                    }), t.options.playlist) {
                    case "Right playlist":
                        this.stretching ? (t.newPlayerWidth < 380 ? this.videoTrack.hide() : this.videoTrack.show(), t.newPlayerWidth < 438 ? this.timeTotal.hide() : this.timeTotal.show(), this.options.qualityShow && (t.newPlayerWidth < 320 ? this.qualityBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (t.newPlayerWidth < 375 ? this.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out") : this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out")), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.ccShowOnHTML5Videos && (t.newPlayerWidth < 350 ? this.ccBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), t.newPlayerWidth < 290 ? this.rewindBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), t.newPlayerWidth < 262 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.volumeTrack.show(), "Yes" == t.options.embedShow && (t.newPlayerWidth < 560 ? t.embedBtn.hide() : t.embedBtn.show()), t.newPlayerWidth < 236 ? this.volumeTrack.hide() : this.volumeTrack.show(), t.newPlayerWidth < 522 ? this._playlist.playlist.css({
                            width: 90
                        }) : this._playlist.playlist.css({
                            width: e
                        })) : (t.newPlayerWidth < 640 ? this.videoTrack.hide() : this.videoTrack.show(), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (t.newPlayerWidth < 635 ? t.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out") : t.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out")), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.ccShowOnHTML5Videos && (t.newPlayerWidth < 610 ? t.ccBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : t.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), t.newPlayerWidth < 700 ? t.timeTotal.hide() : t.timeTotal.show(), "Yes" == t.options.embedShow && (t.newPlayerWidth < 655 ? t.embedBtn.hide() : t.embedBtn.show()), this.options.qualityShow && (t.newPlayerWidth < 580 ? t.qualityBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : t.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), t.newPlayerWidth < 550 ? t.rewindBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : t.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), t.newPlayerWidth < 525 ? t.unmuteBtnWrapper.hide() : t.unmuteBtnWrapper.show(), t.newPlayerWidth < 522 ? (this.mainContainer.find(".player_playlistBarBtn").css({
                            width: "20px"
                        }), this._playlist.lastBtn.hide(), this._playlist.firstBtn.hide(), this._playlist.playlist.css({
                            width: 90
                        }), this.mainContainer.find(".player_itemRight").hide(), this.videoTrack.show(), this.timeElapsed.show(), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out"), this.timeTotal.show(), this.volumeTrack.show(), this.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), this.options.qualityShow && this.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), this.unmuteBtnWrapper.show(), t.newPlayerWidth < 470 ? this.videoTrack.hide() : this.videoTrack.show(), t.newPlayerWidth < 500 ? this.timeTotal.hide() : this.timeTotal.show(), this.options.qualityShow && (t.newPlayerWidth < 410 ? this.qualityBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (t.newPlayerWidth < 440 ? this.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out") : this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out")), t.newPlayerWidth < 380 ? this.rewindBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), t.newPlayerWidth < 353 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), t.newPlayerWidth < 322 ? this.volumeTrack.hide() : this.volumeTrack.show()) : (t._playlist.playlist.css({
                            width: e
                        }), t.mainContainer.find(".player_itemRight").show(), this.mainContainer.find(".player_playlistBarBtn").css({
                            width: "30px"
                        }), this._playlist.lastBtn.show(), this._playlist.firstBtn.show())), this.newPlayerHeight < 190 ? this.scaleElements() : this.revertOriginalScale(), "Yes" == t.options.infoShow && (t.newPlayerHeight < 198 ? this.infoBtn.hide() : this.infoBtn.show()), "Yes" == t.options.embedShow && (t.newPlayerHeight < 159 ? this.embedBtn.hide() : this.embedBtn.show()), "Yes" == t.options.shareShow && (t.newPlayerHeight < 123 ? this.shareBtn.hide() : this.shareBtn.show());
                        break;
                    case "Bottom playlist":
                        this.stretching ? ("Yes" == t.options.infoShow && (t.newPlayerWidth < 438 ? this.infoBtn.hide() : this.infoBtn.show()), "Yes" == t.options.embedShow && (t.newPlayerWidth < 350 ? this.embedBtn.hide() : this.embedBtn.show()), "Yes" == t.options.shareShow && (t.newPlayerWidth < e ? this.shareBtn.hide() : this.shareBtn.show())) : ("Yes" == t.options.infoShow && (t.newPlayerWidth < 815 ? this.infoBtn.hide() : this.infoBtn.show()), "Yes" == t.options.embedShow && (t.newPlayerWidth < 655 ? this.embedBtn.hide() : this.embedBtn.show()), "Yes" == t.options.shareShow && (t.newPlayerWidth < 565 ? this.shareBtn.hide() : this.shareBtn.show())), t.newPlayerWidth < 380 ? this.videoTrack.hide() : this.videoTrack.show(), t.newPlayerWidth < 361 ? this.timeTotal.hide() : this.timeTotal.show(), this.options.qualityShow && (t.newPlayerWidth < 320 ? this.qualityBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), t.newPlayerWidth < 438 ? this.timeTotal.hide() : this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out"), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (t.newPlayerWidth < 375 ? this.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out") : this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out")), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.ccShowOnHTML5Videos && (t.newPlayerWidth < 347 ? this.ccBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), t.newPlayerWidth < 290 ? this.rewindBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), t.newPlayerWidth < 262 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), t.newPlayerWidth < 235 ? this.volumeTrack.hide() : this.volumeTrack.show(), this.newPlayerHeight < 313 ? (this.scaleElements(), i(this._playlist.playlist).css({
                            height: 127
                        }), this._playlist.playlistH = i(this._playlist.playlist).height(), this.newPlayerHeight < 230 ? (i(this._playlist.playlist).css({
                            height: 92
                        }), this._playlist.playlistH = i(this._playlist.playlist).height(), this.mainContainer.find(".player_itemRight_bottom").hide(), this.mainContainer.find(".player_nowPlayingThumbnail").css({
                            opacity: 0
                        }), this.mainContainer.find(".player_itemSelected").css({
                            width: 40,
                            height: 40
                        }), this.mainContainer.find(".player_itemUnselected").css({
                            width: 40,
                            height: 40
                        }), this.mainContainer.find(".player_itemLeft").css({
                            width: 35,
                            height: 35
                        })) : (this.mainContainer.find(".player_itemRight_bottom").show(), this.mainContainer.find(".player_nowPlayingThumbnail").css({
                            opacity: 1
                        }), this.mainContainer.find(".player_itemSelected").css({
                            width: 245,
                            height: 76
                        }), this.mainContainer.find(".player_itemUnselected").css({
                            width: 245,
                            height: 76
                        }), this.mainContainer.find(".player_itemLeft").css({
                            width: 70,
                            height: 70
                        }))) : (this.revertOriginalScale(), i(this._playlist.playlist).css({
                            height: o
                        }), this._playlist.playlistH = i(this._playlist.playlist).height());
                        break;
                    case "Off":
                        "Yes" == t.options.infoShow && (t.newPlayerWidth < 350 ? this.infoBtn.hide() : this.infoBtn.show()), "Yes" == t.options.embedShow && (t.newPlayerWidth < e ? this.embedBtn.hide() : this.embedBtn.show()), "Yes" == t.options.shareShow && (t.newPlayerWidth < 170 ? this.shareBtn.hide() : this.shareBtn.show()), t.newPlayerWidth < 380 ? this.videoTrack.hide() : this.videoTrack.show(), t.newPlayerWidth < 361 ? this.timeTotal.hide() : this.timeTotal.show(), this.options.qualityShow && (t.newPlayerWidth < 320 ? this.qualityBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), t.newPlayerWidth < 438 ? this.timeTotal.hide() : this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out"), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (t.newPlayerWidth < 375 ? this.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out") : this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out")), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.ccShowOnHTML5Videos && (t.newPlayerWidth < 347 ? this.ccBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")), t.newPlayerWidth < 290 ? this.rewindBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out") : this.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), t.newPlayerWidth < 262 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), t.newPlayerWidth < 235 ? this.volumeTrack.hide() : this.volumeTrack.show(), this.newPlayerHeight < 190 ? this.scaleElements() : this.revertOriginalScale()
                } else this.options.lightBox && i(t.mainContainer).css({
                    position: "absolute",
                    left: window.innerWidth / 2 - t.options.videoPlayerWidth / 2,
                    top: window.innerHeight / 2 - t.options.videoPlayerHeight / 2 - 10
                }), t.newPlayerWidth = t.options.videoPlayerWidth, t.newPlayerHeight = t.options.videoPlayerHeight, this.videoTrack.show(), this.timeElapsed.show(), this.timeTotal.show(), this.volumeTrack.show(), this.rewindBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), this.options.qualityShow && this.qualityBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out"), this.unmuteBtnWrapper.show(), t._playlist.playlist.css({
                    width: e
                }), this.mainContainer.find(".player_itemRight").show(), this.mainContainer.find(".player_playlistBarBtn").css({
                    width: "30px"
                }), this._playlist.lastBtn.show(), this._playlist.firstBtn.show();
                "Right playlist" == t.options.playlist ? (!t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.options.showAllControls || (t.videoElement.height(t.newPlayerHeight - 50), t.videoElementAD.height(t.newPlayerHeight - 50)), t.element.css({
                    width: t.newPlayerWidth,
                    height: t.newPlayerHeight
                }), t.mainContainer.css({
                    width: t.newPlayerWidth,
                    height: t.newPlayerHeight
                })) : "Bottom playlist" == t.options.playlist ? (t.element.width(t.newPlayerWidth), t.mainContainer.css({
                    width: t.newPlayerWidth,
                    height: t.newPlayerHeight
                })) : "Off" == t.options.playlist && (!t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.options.showAllControls || (t.videoElement.height(t.newPlayerHeight - 50), t.videoElementAD.height(t.newPlayerHeight - 50)), t.element.css({
                    width: t.newPlayerWidth,
                    height: t.newPlayerHeight
                }), t.mainContainer.css({
                    width: t.newPlayerWidth,
                    height: t.newPlayerHeight
                })), this.stretching ? "Right playlist" == t.options.playlist ? (!t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.options.showAllControls || (t.videoElement.width(t.newPlayerWidth - 32), t.videoElementAD.width(t.newPlayerWidth - 32)), t.element.width(i(t.mainContainer).width())) : "Bottom playlist" == t.options.playlist ? t.element.height(t.newPlayerHeight) : "Off" == t.options.playlist && (!t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || (t.videoElement.width(t.newPlayerWidth - 32), t.videoElementAD.width(t.newPlayerWidth - 32)), t.element.width(i(t.mainContainer).width())) : "Right playlist" == t.options.playlist ? (!t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.options.showAllControls || (t.videoElement.width(t.newPlayerWidth - t._playlist.playlist.width() - 32), t.videoElementAD.width(t.newPlayerWidth - t._playlist.playlist.width() - 32)), t.element.width(i(t.mainContainer).width() - t._playlist.playlist.width()), t._playlist.resizePlaylist(t.newPlayerWidth, t.newPlayerHeight)) : "Bottom playlist" == t.options.playlist ? (t.element.height(t.newPlayerHeight - t._playlist.playlistH), t._playlist.resizePlaylist(t.newPlayerWidth, t.newPlayerHeight)) : "Off" == t.options.playlist && (!t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.options.showAllControls || (t.videoElement.width(t.newPlayerWidth - 32), t.videoElementAD.width(t.newPlayerWidth - 32)), t.element.width(i(t.mainContainer).width())), t.elementAD.width(t.element.width()), t.elementAD.height(t.element.height()), !t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.playBtnScreen && t.playBtnScreen.hide(), void 0 != t.youtubePlayer && (t.realFullscreenActive && (t.element.width(i(document).width()), t.element.height(i(document).height())), t.youtubePlayer.setSize("100%", "100%")), this.options.lightBox && i(this.mainContainerBG).css({
                    width: i(t.mainContainer).width() + 20,
                    height: i(t.mainContainer).height() + 20
                }), t._playlist.resizePlaylist(), t.positionControlsBtnsWrapperRight(), t.positionTimeTotal(), t.resizeVideoTrack(), t.positionOverScreenButtons(), t.positionShareWindowFromTop(), t.positionQualityWindow(), t.resizeBars(), t.positionLogo(), t.positionPopup(), this.options.floatPlayerOutsideViewport && t.resizeStickyBG()
            }
            this.setMaxHeightInfoEmbed(), this.embedCodeReady()
        }
    }, r.fn.revertOriginalScale = function() {
        i(this.playButtonScreen).css({
            "-webkit-transform": "scale(1)",
            "-moz-transform": "scale(1)",
            "-ms-transform": "scale(1)",
            "-o-transform": "scale(1)",
            transform: "scale(1)"
        }), i(this.toggleAdPlayBox).css({
            "-webkit-transform": "scale(1)",
            "-moz-transform": "scale(1)",
            "-ms-transform": "scale(1)",
            "-o-transform": "scale(1)",
            transform: "scale(1)"
        }), i(this.skipAdCount).css({
            "-webkit-transform": "scale(1)",
            "-moz-transform": "scale(1)",
            "-ms-transform": "scale(1)",
            "-o-transform": "scale(1)",
            transform: "scale(1)",
            "transform-origin": "bottom right"
        }), i(this.skipAdBox).css({
            "-webkit-transform": "scale(1)",
            "-moz-transform": "scale(1)",
            "-ms-transform": "scale(1)",
            "-o-transform": "scale(1)",
            transform: "scale(1)",
            "transform-origin": "bottom right"
        }), i(this.logoImg).css({
            "-webkit-transform": "scale(1)",
            "-moz-transform": "scale(1)",
            "-ms-transform": "scale(1)",
            "-o-transform": "scale(1)",
            transform: "scale(1)",
            "transform-origin": "bottom left"
        }), i(this.controls).css({
            height: 50
        }), i(this._playlist.playlistBar).css({
            height: 50
        })
    }, r.fn.scaleElements = function() {
        i(this.playButtonScreen).css({
            "-webkit-transform": "scale(0.6)",
            "-moz-transform": "scale(0.6)",
            "-ms-transform": "scale(0.6)",
            "-o-transform": "scale(0.6)",
            transform: "scale(0.6)"
        }), i(this.toggleAdPlayBox).css({
            "-webkit-transform": "scale(0.6)",
            "-moz-transform": "scale(0.6)",
            "-ms-transform": "scale(0.6)",
            "-o-transform": "scale(0.6)",
            transform: "scale(0.6)"
        }), i(this.skipAdCount).css({
            "-webkit-transform": "scale(0.6)",
            "-moz-transform": "scale(0.6)",
            "-ms-transform": "scale(0.6)",
            "-o-transform": "scale(0.6)",
            transform: "scale(0.6)",
            "transform-origin": "bottom right"
        }), i(this.skipAdBox).css({
            "-webkit-transform": "scale(0.6)",
            "-moz-transform": "scale(0.6)",
            "-ms-transform": "scale(0.6)",
            "-o-transform": "scale(0.6)",
            transform: "scale(0.6)",
            "transform-origin": "bottom right"
        }), i(this.logoImg).css({
            "-webkit-transform": "scale(0.6)",
            "-moz-transform": "scale(0.6)",
            "-ms-transform": "scale(0.6)",
            "-o-transform": "scale(0.6)",
            transform: "scale(0.6)",
            "transform-origin": "bottom left"
        }), i(this.controls).css({
            height: 35
        }), i(this._playlist.playlistBar).css({
            height: 35
        })
    }, r.fn.getPlaylistTitleH = function(t) {
        return i(this._playlist.item_array)[t].find(".player_title").height()
    }, r.fn.removeHClasses = function(t) {
        i(this._playlist.item_array)[t].find(".player_description").removeClass("player_playlist_height55Description player_playlist_height41Description player_playlist_height27Description")
    }, r.fn.embedCodeReady = function() {
        this.options.lightBox ? (this.w = parseInt(this.options.lightBoxThumbnailWidth), this.h = parseInt(this.options.lightBoxThumbnailHeight)) : (this.w = this.mainContainer.outerWidth(), this.h = this.mainContainer.outerHeight()), this.saveEmbed = "<iframe src='" + this.s + "' width='" + this.w + "' height='" + this.h + "' frameborder=0 webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"
    }, r.fn.setMaxHeightInfoEmbed = function() {
        this.infoWindow.css("max-height", this.mainContainer.height() - this.controls.height() + "px"), this.embedWindow.css("max-height", this.mainContainer.height() + "px")
    }, r.fn.autohideControls = function() {
        var i = this.element,
            t = !1,
            o = 1e3 * this.options.autohideControls,
            s = 1e3,
            l = 0,
            n = function() {
                t && i.trigger("idle", !1), t = !1, l = 0
            },
            a = function() {
                l >= o ? (n(), t = !0, i.trigger("idle", !0)) : l += s
            };
        i.bind(e, n);
        var p = setInterval(a, s);
        i.on("unload", function() {
            clearInterval(p)
        })
    }, r.fn.resizeBars = function() {
        "youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType ? void 0 != this.youtubePlayer && this._playlist.youtubeSTARTED && (this.progressWidth = this.youtubePlayer.getCurrentTime() / this.youtubePlayer.getDuration() * this.videoTrack.width(), this.videoTrackProgress.css("width", this.progressWidth), this.progressIdleWidth = this.youtubePlayer.getCurrentTime() / this.youtubePlayer.getDuration() * this.progressIdleTrack.width(), this.progressIdle.css("width", this.progressIdleWidth), this.buffered = this.youtubePlayer.getVideoLoadedFraction(), this.downloadWidth = this.buffered * this.videoTrack.width(), this.videoTrackDownload.css("width", this.downloadWidth), this.progressIdleDownloadWidth = this.buffered * this.progressIdleTrack.width(), this.progressIdleDownload.css("width", this.progressIdleDownloadWidth)) : "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || (this.downloadWidth = this.buffered / this.video.duration * this.videoTrack.width(), this.videoTrackDownload.css("width", this.downloadWidth), this.progressWidth = this.video.currentTime / this.video.duration * this.videoTrack.width(), this.videoTrackProgress.css("width", this.progressWidth), this.progressIdleDownloadWidth = this.buffered / this.video.duration * this.progressIdleTrack.width(), this.progressIdleDownload.css("width", this.progressIdleDownloadWidth), this.progressIdleWidth = this.video.currentTime / this.video.duration * this.progressIdleTrack.width(), this.progressIdle.css("width", this.progressIdleWidth), this.progressWidthAD = this.videoAD.currentTime / this.videoAD.duration * this.elementAD.width(), this.progressAD.css("width", this.progressWidthAD))
    }, r.fn.createPopup = function() {
        var t = this;
        this.adImg = i("<div/>"), this.adImg.addClass("player_popup"), this.image = new Image, this.image.src = this._playlist.videos_array[this._playlist.videoid].popupImg, i(this.image).on("load", function() {
            t.adImg.append(t.image), t.positionPopup(), t.adImg.append(t.adClose)
        }), this.element.append(this.adImg), this.adImg.hide(), this.adImg.css({
            opacity: 0
        }), this.popupBtnClose = i("<div />"), this.popupBtnClose.addClass("player_btnClose player_themeColorText"), this.infoWindow.append(this.popupBtnClose), this.popupBtnClose.css({
            bottom: 0
        }), this.adImg.append(this.popupBtnClose), this.popupBtnCloseIcon = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("fa-player-close").addClass("player_themeColor"), this.popupBtnClose.append(this.popupBtnCloseIcon), this.popupBtnClose.bind(this.CLICK_EV, i.proxy(function() {
            t.adOn = !0, t.togglePopup()
        }, this)), this.popupBtnClose.mouseover(function() {
            i(this).stop().animate({
                opacity: .7
            }, 200)
        }), this.popupBtnClose.mouseout(function() {
            i(this).stop().animate({
                opacity: 1
            }, 200)
        })
    }, r.fn.positionPopup = function() {
        var i = this;
        this.adImg.css({
            bottom: i.controls.height() + 20,
            left: i.element.width() / 2 - this.adImg.width() / 2
        })
    }, r.fn.newAd = function() {
        var t = this;
        this.adImg.hide(), this.image.src = "", this.image.src = this._playlist.videos_array[this._playlist.videoid].popupImg, this.adOn || i(this.image).bind(this.START_EV, function() {
            window.open(t._playlist.videos_array[t._playlist.videoid].popupAdGoToLink), "youtube" != t._playlist.videos_array[t._playlist.videoid].videoType && "YouTube" != t.options.videoType || t.youtubePlayer.pauseVideo(), "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.pause(), "vimeo" != t._playlist.videos_array[t._playlist.videoid].videoType && "Vimeo" != t.options.videoType || t._playlist.vimeoPlayer.api("pause")
        })
    }, r.fn.createLogo = function() {
        var t = this;
        this.logoImg = i("<div/>"), this.logoImg.addClass("player_logo"), this.img = new Image, this.img.src = t.options.logoPath, i(this.img).on("load", function() {
            t.logoImg.append(t.img), t.positionLogo()
        }), "Yes" == t.options.logoShow && this.element.append(this.logoImg), "Yes" == t.options.logoClickable && (this.logoImg.bind(this.CLICK_EV, i.proxy(function() {
            window.open(t.options.logoGoToLink)
        }, this)), this.logoImg.mouseover(function() {
            i(this).stop().animate({
                opacity: .8
            }, 200)
        }), this.logoImg.mouseout(function() {
            i(this).stop().animate({
                opacity: 1
            }, 200)
        }), i(".player_logo").css("cursor", "pointer"))
    }, r.fn.positionLogo = function() {
        var i, t = this;
        "youtube" == t._playlist.videos_array[t._playlist.videoid].videoType || "YouTube" == t.options.videoType ? i = t.controls.height() + 10 : "HTML5" == t._playlist.videos_array[t._playlist.videoid].videoType || "HTML5 (self-hosted)" == t.options.videoType ? i = t.controls.height() + 10 : "vimeo" != t._playlist.videos_array[t._playlist.videoid].videoType && "Vimeo" != t.options.videoType || (i = 55), "bottom-right" == t.options.logoPosition ? this.logoImg.css({
            bottom: i,
            right: buttonsMargin
        }) : "bottom-left" == t.options.logoPosition && this.logoImg.css({
            bottom: i,
            left: buttonsMargin
        })
    }, r.fn.showVideoElements = function() {
        this.videoElement.show(), this.videoElementAD.show()
    }, r.fn.hideVideoElements = function() {
        this.videoElement.hide(), this.videoElementAD.hide()
    }, r.fn.createAds = function() {
        var t = this;
        adsImg = i("<div/>"), adsImg.addClass("ads"), image = new Image, image.src = t._playlist.videos_array[0].adsPath, i(image).on("load", function() {
            adsImg.append(image), t.positionAds()
        }), this.element.append(adsImg), adsImg.hide()
    }, r.fn.positionAds = function() {
        var i = this;
        adsImg.css({
            bottom: i.controls.height() + 5,
            left: i.element.width() / 2 - adsImg.width() / 2
        })
    }, r.fn.setupAutoplay = function() {
        var i = this;
        this.options.lightBox || (this.options.autoplay ? (this.video.muted = !0, this.videoAD.muted = !0, this.muted = !0, !i.isMobile.any() || "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType ? i.getViewportStatus() && i.play() : i.playButtonScreen.show()) : i.options.autoplay || (this.pause(), this.preloader.hide()))
    }, r.fn.getViewportStatus = function() {
        var t = this;
        return !!i(t.mainContainer.parent()).isInViewport()
    }, r.fn.createNowPlayingText = function() {
        var i = this;
        "Yes" == i.options.loadRandomVideoOnStart ? this.nowPlayingTitle.append('<p class="player_nowPlayingText player_nowPlayingText player_' + this.options.instanceTheme + '">' + this._playlist.videos_array[i._playlist.rand].title + "</p>") : this.nowPlayingTitle.append('<p class="player_nowPlayingText player_nowPlayingText player_' + this.options.instanceTheme + '">' + this._playlist.videos_array[0].title + "</p>"), "No" == this.options.nowPlayingText && this.nowPlayingTitle.hide()
    }, r.fn.createInfoWindowContent = function() {
        var i = this;
        "Yes" == i.options.loadRandomVideoOnStart ? (this.infoWindow.append('<p class="player_infoTitle player_themeColorText player_titles">' + this._playlist.videos_array[i._playlist.rand].title + "</p>"), this.infoWindow.append('<p class="player_infoText player_infoText player_' + this.options.instanceTheme + '">' + this._playlist.videos_array[i._playlist.rand].info_text + "</p>")) : (this.infoWindow.append('<p class="player_infoTitle player_themeColorText player_titles">' + this._playlist.videos_array[0].title + "</p>"), this.infoWindow.append('<p class="player_infoText player_infoText player_' + this.options.instanceTheme + '">' + this._playlist.videos_array[0].info_text + "</p>")), this.infoWindow.css({
            top: -this.infoWindow.height()
        }).hide()
    }, r.fn.createMutedBox = function() {
        var t = this;
        this.mutedBox_mask = i("<div />"), this.mutedBox_mask.addClass("player_mutedBox_mask"), this.element && this.mainContainer.append(this.mutedBox_mask), this.mutedBox = i("<div />").addClass("player_mutedBox").bind(t.CLICK_EV, function() {
            t.globalUnmuteHTML5(), t.hideMutedBox()
        }), this.options.autoplay && ("yes" == this._playlist.videos_array[this._playlist.videoid].prerollAD || this.options.showGlobalPrerollAds) && this.mutedBox.show(), this.options.autoplay && this.isMobile.any() && ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) && (this.mutedBox.hide(), this.globalUnmuteHTML5()), !this.options.autoplay || this.isMobile.any() || "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (this.mutedBox.hide(), this.globalUnmuteHTML5()), this.options.autoplay || this.mutedBox.hide(), this.mutedBox_mask.append(this.mutedBox), this.mutedBoxContent = i("<div />").addClass("player_mutedBoxContent"), this.mutedBox.append(this.mutedBoxContent), this.mutedBoxClickableArea = i("<div />").addClass("player_mutedBoxClickableArea"), this.isMobile.any() && this.mutedBox.append(this.mutedBoxClickableArea), this.mutedBoxContent.append('<p class="player_mutedBoxTitle">' + this.options.mutedNotificationText + "</p>"), this.mutedBoxIconWrapp = i("<div />").addClass("player_mutedBoxIcon"), this.mutedBoxIcon = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("fa-player-volume-up-ad"), this.mutedBoxIconWrapp.append(this.mutedBoxIcon), this.mutedBox.append(this.mutedBoxIconWrapp)
    }, r.fn.createSkipAd = function() {
        var t = this;
        this.skipAdBox = i("<div />").addClass("player_skipAdBox").bind(t.CLICK_EV, function() {
            t.closeAD(), t.gaVideoSkippedAD()
        }).hide(), this.elementAD.append(this.skipAdBox), this.skipAdBoxContentLeft = i("<div />").addClass("player_skipAdBoxContentLeft"), this.skipAdBox.append(this.skipAdBoxContentLeft), this.skipAdBoxContentLeft.append('<p class="player_skipAdTitle">' + this.options.skipAdvertisementText + "</p>"), this.skipAdBoxIcon = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("fa-player-step-forward-ad"), this.skipAdBox.append(this.skipAdBoxIcon)
    }, r.fn.createSkipAdCount = function() {
        var t = this;
        this.skipAdCount = i("<div />").addClass("player_skipAdCount").hide(), this.elementAD.append(this.skipAdCount), this.i = document.createElement("img"), this.i.src = t._playlist.videos_array[t._playlist.videoid].thumbnail_image, this.skipAdCount.append(this.i), i(".player_skipAdCount img").addClass("player_skipAdCountImage player_themeColorThumbBorder"), this.skipAdCountContentLeft = i("<div />").addClass("player_skipAdCountContentLeft"), this.skipAdCount.append(this.skipAdCountContentLeft), this.skipAdCountContentLeft.append('<p class="player_skipAdCountTitle"></p>'), this.skipAdCount.css({
            right: -this.skipAdCount.width(),
            bottom: 28
        }).hide(), "" != t._playlist.videos_array[t._playlist.videoid].thumbnail_image && "thumbImg" != t._playlist.videos_array[t._playlist.videoid].thumbnail_image.thumbnail_image || (t.skipAdCount.find(".player_skipAdCountImage").hide(), t.skipAdCount.find(".player_skipAdCountContentLeft").css({
            width: "100%"
        }))
    }, r.fn.createAdTogglePlay = function() {
        var t = this;
        this.toggleAdPlayBox = i("<div />").addClass("player_toggleAdPlayBox").attr("aria-hidden", "true").addClass("fa-player").addClass("fa-player-playScreen player_" + this.options.instanceTheme).bind(t.CLICK_EV, function() {
            t.togglePlayAD()
        }).hide(), this.elementAD.append(this.toggleAdPlayBox)
    }, r.fn.createVideoAdTitleInsideAD = function() {
        var t = this;
        this.videoAdBoxInside = i("<div />"), this.videoAdBoxInside.addClass("player_videoAdBoxInside"), this.elementAD.append(this.videoAdBoxInside), this.visitWrapp = i("<div />"), this.visitWrapp.addClass("player_visitWrapp"), this.elementAD.append(this.visitWrapp), this.videoAdBoxInside.append('<div class="player_adsTitleInside">' + this.options.advertisementTitle + " </div>"), this.videoAdBoxInside.append(this.timeLeftInside), t.options.showAdvertiserName && (this.visitAdvertiser = i("<div />"), this.visitAdvertiser.addClass("player_visitAdvertiser"), this.visitAdvertiser.text(this.options.advertiserName), this.visitBox = i("<div />").addClass("player_visitBox"),
            this.visitBoxIcon = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("fa-player-external-link").addClass("player_visitBtn"), this.visitBox.append(this.visitBoxIcon), this.visitWrapp.append(this.visitBox), this.visitWrapp.append(this.visitAdvertiser), this.visitAdvertiser.bind(t.CLICK_EV, function() {
                t.prerollActive && window.open(t._playlist.videos_array[t._playlist.videoid].prerollGotoLink, "_blank"), t.midrollActive && window.open(t._playlist.videos_array[t._playlist.videoid].midrollGotoLink, "_blank"), t.postrollActive && window.open(t._playlist.videos_array[t._playlist.videoid].postrollGotoLink, "_blank"), t.videoPlayingAD = !0, t.togglePlayAD()
            })), this.videoAdBoxInside.hide(), this.visitWrapp.hide()
    }, r.fn.createEmbedWindowContent = function() {
        var t = this;
        i(this.embedWindow).append('<p class="player_embedTitle2 player_themeColorText player_titles">' + t.options.embedWindowTitle2 + "</p>"), this.embedTxt = i("<p />").addClass("player_embedText").addClass("player_embedText player_" + this.options.instanceTheme), this.embedWindow.append(this.embedTxt), this.copy = i("<div />").attr("title", "Copy to clipboard").attr("id", "player_copy").addClass("copyBtn").addClass("player_" + this.options.instanceTheme), this.embedWindow.append(this.copy), i(this.embedWindow).find("#player_copy").append('<p id="player_copyInside" class="player_copyInside player_' + this.options.instanceTheme + '">' + t.options.copyTxt + "</p>"), i(this.embedWindow).append('<p class="player_embedTitle3 player_themeColorText player_titles">' + t.options.embedWindowTitle3 + "</p>"), this.embedTxt2 = i("<p />").addClass("player_embedText2").addClass("player_embedText player_" + this.options.instanceTheme), this.embedWindow.append(this.embedTxt2), this.copy2 = i("<div />").attr("title", "Copy to clipboard").attr("id", "player_copy2").addClass("copyBtn").addClass("player_" + this.options.instanceTheme), this.embedWindow.append(this.copy2), i(this.embedWindow).find("#player_copy2").append('<p id="player_copyInside" class="player_copyInside player_' + this.options.instanceTheme + '">' + t.options.copyTxt + "</p>"), this.s = this.options.embedCodeSrc + "?embed=true", this.options.lightBox ? (this.w = parseInt(this.options.lightBoxThumbnailWidth), this.h = parseInt(this.options.lightBoxThumbnailHeight)) : (this.w = this.mainContainer.outerWidth(), this.h = this.mainContainer.outerHeight()), i(this.embedWindow).find(".player_embedText").text("<iframe src='" + this.s + "' width='" + this.w + "' height='" + this.h + "' frameborder=0 webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"), this.generateEmbedCode(), this.updateEmbedText2(), this.copy.bind(this.CLICK_EV, function() {
            var e = i("<input>");
            i("body").append(e), e.val(t.saveEmbed).select(), document.execCommand("copy"), e.remove(), i(t.copy2).find(".player_copyInside").text(t.options.copyTxt), i(this).find(".player_copyInside").text(t.options.copiedTxt), i(t.embedTxt).addClass("player_highlightText"), i(t.embedTxt2).removeClass("player_highlightText")
        }), this.copy2.bind(this.CLICK_EV, function() {
            var e = i("<input>");
            i("body").append(e), e.val(t.embedTxt2.text()).select(), document.execCommand("copy"), e.remove(), i(t.copy).find(".player_copyInside").text(t.options.copyTxt), i(this).find(".player_copyInside").text(t.options.copiedTxt), i(t.embedTxt2).addClass("player_highlightText"), i(t.embedTxt).removeClass("player_highlightText")
        })
    }, r.fn.updateEmbedText2 = function() {
        var t = window.location.origin + window.location.pathname;
        t.indexOf("?id=") >= 0 ? (t = t.split("?")[0], i(this.embedWindow).find(".player_embedText2").text(t + "?id=" + this._playlist.videoid)) : i(this.embedWindow).find(".player_embedText2").text(t + "?id=" + this._playlist.videoid), i(this.copy).find(".player_copyInside").text(this.options.copyTxt), i(this.copy2).find(".player_copyInside").text(this.options.copyTxt), i(this.embedTxt).removeClass("player_highlightText"), i(this.embedTxt2).removeClass("player_highlightText")
    }, r.fn.generateEmbedCode = function() {
        this.videoType_str = "", this.title_str = "", this.youtubeID_str = "", this.vimeoID_str = "", this.mp4HD_str = "", this.mp4SD_str = "", this.ccUrl_str = "", this.enable_mp4_download_str = "", this.imageUrl_str = "", this.imageTimer_str = "", this.prerollAD_str = "", this.prerollGotoLink_str = "", this.preroll_mp4_str = "", this.prerollSkipTimer_str = "", this.midrollAD_str = "", this.midrollAD_displayTime_str = "", this.midrollGotoLink_str = "", this.midroll_mp4_str = "", this.midrollSkipTimer_str = "", this.postrollAD_str = "", this.postrollGotoLink_str = "", this.postroll_mp4_str = "", this.postrollSkipTimer_str = "", this.popupImg_str = "", this.popupAdShow_str = "", this.popupAdStartTime_str = "", this.popupAdEndTime_str = "", this.popupAdGoToLink_str = "", this.description_str = "", this.thumbImg_str = "", this.info_str = "";
        for (var i = 0; i <= this.options.videos.length - 1; i++) this.videoType_str = this.videoType_str + this.options.videos[i].videoType + ",", this.title_str = this.title_str + this.options.videos[i].title + ",", this.youtubeID_str = this.youtubeID_str + this.options.videos[i].youtubeID + ",", this.vimeoID_str = this.vimeoID_str + this.options.videos[i].vimeoID + ",", this.mp4HD_str = this.mp4HD_str + this.options.videos[i].mp4HD + ",", this.mp4SD_str = this.mp4SD_str + this.options.videos[i].mp4SD + ",", this.ccUrl_str = this.ccUrl_str + this.options.videos[i].ccUrl + ",", this.enable_mp4_download_str = this.enable_mp4_download_str + this.options.videos[i].enable_mp4_download + ",", this.imageUrl_str = this.imageUrl_str + this.options.videos[i].imageUrl + ",", this.imageTimer_str = this.imageTimer_str + this.options.videos[i].imageTimer + ",", this.prerollAD_str = this.prerollAD_str + this.options.videos[i].prerollAD + ",", this.prerollGotoLink_str = this.prerollGotoLink_str + this.options.videos[i].prerollGotoLink + ",", this.preroll_mp4_str = this.preroll_mp4_str + this.options.videos[i].preroll_mp4 + ",", this.prerollSkipTimer_str = this.prerollSkipTimer_str + this.options.videos[i].prerollSkipTimer + ",", this.midrollAD_str = this.midrollAD_str + this.options.videos[i].midrollAD + ",", this.midrollAD_displayTime_str = this.midrollAD_displayTime_str + this.options.videos[i].midrollAD_displayTime + ",", this.midrollGotoLink_str = this.midrollGotoLink_str + this.options.videos[i].midrollGotoLink + ",", this.midroll_mp4_str = this.midroll_mp4_str + this.options.videos[i].midroll_mp4 + ",", this.midrollSkipTimer_str = this.midrollSkipTimer_str + this.options.videos[i].midrollSkipTimer + ",", this.postrollAD_str = this.postrollAD_str + this.options.videos[i].postrollAD + ",", this.postrollGotoLink_str = this.postrollGotoLink_str + this.options.videos[i].postrollGotoLink + ",", this.postroll_mp4_str = this.postroll_mp4_str + this.options.videos[i].postroll_mp4 + ",", this.postrollSkipTimer_str = this.postrollSkipTimer_str + this.options.videos[i].postrollSkipTimer + ",", this.popupImg_str = this.popupImg_str + this.options.videos[i].popupImg + ",", this.popupAdShow_str = this.popupAdShow_str + this.options.videos[i].popupAdShow + ",", this.popupAdStartTime_str = this.popupAdStartTime_str + this.options.videos[i].popupAdStartTime + ",", this.popupAdEndTime_str = this.popupAdEndTime_str + this.options.videos[i].popupAdEndTime + ",", this.popupAdGoToLink_str = this.popupAdGoToLink_str + this.options.videos[i].popupAdGoToLink + ",", this.description_str = this.description_str + this.options.videos[i].description + ",", this.thumbImg_str = this.thumbImg_str + this.options.videos[i].thumbImg + ",", this.info_str = this.info_str + this.options.videos[i].info + ",";
        this.videoType_str = this.videoType_str.slice(0, -1), this.title_str = this.title_str.slice(0, -1), this.youtubeID_str = this.youtubeID_str.slice(0, -1), this.vimeoID_str = this.vimeoID_str.slice(0, -1), this.mp4HD_str = this.mp4HD_str.slice(0, -1), this.mp4SD_str = this.mp4SD_str.slice(0, -1), this.ccUrl_str = this.ccUrl_str.slice(0, -1), this.enable_mp4_download_str = this.enable_mp4_download_str.slice(0, -1), this.imageUrl_str = this.imageUrl_str.slice(0, -1), this.imageTimer_str = this.imageTimer_str.slice(0, -1), this.prerollAD_str = this.prerollAD_str.slice(0, -1), this.prerollGotoLink_str = this.prerollGotoLink_str.slice(0, -1), this.preroll_mp4_str = this.preroll_mp4_str.slice(0, -1), this.prerollSkipTimer_str = this.prerollSkipTimer_str.slice(0, -1), this.midrollAD_str = this.midrollAD_str.slice(0, -1), this.midrollAD_displayTime_str = this.midrollAD_displayTime_str.slice(0, -1), this.midrollGotoLink_str = this.midrollGotoLink_str.slice(0, -1), this.midroll_mp4_str = this.midroll_mp4_str.slice(0, -1), this.midrollSkipTimer_str = this.midrollSkipTimer_str.slice(0, -1), this.postrollAD_str = this.postrollAD_str.slice(0, -1), this.postrollGotoLink_str = this.postrollGotoLink_str.slice(0, -1), this.postroll_mp4_str = this.postroll_mp4_str.slice(0, -1), this.postrollSkipTimer_str = this.postrollSkipTimer_str.slice(0, -1), this.popupImg_str = this.popupImg_str.slice(0, -1), this.popupAdShow_str = this.popupAdShow_str.slice(0, -1), this.popupAdStartTime_str = this.popupAdStartTime_str.slice(0, -1), this.popupAdEndTime_str = this.popupAdEndTime_str.slice(0, -1), this.popupAdGoToLink_str = this.popupAdGoToLink_str.slice(0, -1), this.description_str = this.description_str.slice(0, -1), this.thumbImg_str = this.thumbImg_str.slice(0, -1), this.info_str = this.info_str.slice(0, -1), this.s = this.options.embedCodeSrc + "?embed=true&googleAnalyticsTrackingCode=" + this.options.googleAnalyticsTrackingCode + "&instanceName=" + this.options.instanceName + "&instanceTheme=" + this.options.instanceTheme + "&autohideControls=" + parseInt(this.options.autohideControls) + "&hideControlsOnMouseOut=" + this.options.hideControlsOnMouseOut + "&playerLayout=" + this.options.playerLayout + "&videoPlayerWidth=" + parseInt(this.options.videoPlayerWidth) + "&videoPlayerHeight=" + parseInt(this.options.videoPlayerHeight) + "&videoRatio=" + parseFloat(this.options.videoRatio) + "&videoRatioStretch=" + this.options.videoRatioStretch + "&iOSPlaysinline=" + this.options.iOSPlaysinline + "&floatPlayerOutsideViewport=" + this.options.floatPlayerOutsideViewport + "&lightBox=" + this.options.lightBox + "&lightBoxAutoplay=" + this.options.lightBoxAutoplay + "&lightBoxThumbnail=" + this.options.lightBoxThumbnail + "&lightBoxThumbnailWidth=" + this.options.lightBoxThumbnailWidth + "&lightBoxThumbnailHeight=" + this.options.lightBoxThumbnailHeight + "&lightBoxCloseOnOutsideClick=" + this.options.lightBoxCloseOnOutsideClick + "&playlist=" + this.options.playlist + "&playlistScrollType=" + this.options.playlistScrollType + "&playlistBehaviourOnPageload=" + this.options.playlistBehaviourOnPageload + "&autoplay=" + this.options.autoplay + "&colorAccent=" + this.options.colorAccent.replace("#", "") + "&vimeoColor=" + this.options.vimeoColor + "&youtubeControls=" + this.options.youtubeControls + "&youtubeSkin=" + this.options.youtubeSkin + "&youtubeColor=" + this.options.youtubeColor + "&youtubeQuality=" + this.options.youtubeQuality + "&youtubeShowRelatedVideos=" + this.options.youtubeShowRelatedVideos + "&videoPlayerShadow=" + this.options.videoPlayerShadow + "&loadRandomVideoOnStart=" + this.options.loadRandomVideoOnStart + "&shuffle=" + this.options.shuffle + "&posterImg=" + this.options.posterImg + "&posterImgOnVideoFinish=" + this.options.posterImgOnVideoFinish + "&onFinish=" + this.options.onFinish + "&nowPlayingText=" + this.options.nowPlayingText + "&HTML5VideoQuality=" + this.options.HTML5VideoQuality + "&preloadSelfHosted=" + this.options.preloadSelfHosted + "&rightClickMenu=" + this.options.rightClickMenu + "&hideVideoSource=" + this.options.hideVideoSource + "&showAllControls=" + this.options.showAllControls + "&allowSkipAd=" + this.options.allowSkipAd + "&rewindShow=" + this.options.rewindShow + "&qualityShow=" + this.options.qualityShow + "&infoShow=" + this.options.infoShow + "&shareShow=" + this.options.shareShow + "&facebookShow=" + this.options.facebookShow + "&twitterShow=" + this.options.twitterShow + "&facebookShareName=" + this.options.facebookShareName + "&facebookShareLink=" + this.options.facebookShareLink + "&facebookShareDescription=" + this.options.facebookShareDescription + "&facebookSharePicture=" + this.options.facebookSharePicture + "&twitterText=" + this.options.twitterText + "&twitterHashtags=" + this.options.twitterHashtags + "&twitterVia=" + this.options.twitterVia + "&logoShow=" + this.options.logoShow + "&logoClickable=" + this.options.logoClickable + "&logoPath=" + this.options.logoPath + "&logoGoToLink=" + this.options.logoGoToLink + "&logoPosition=" + this.options.logoPosition + "&embedShow=" + this.options.embedShow + "&embedCodeSrc=" + this.options.embedCodeSrc + "&embedCodeW=" + this.options.embedCodeW + "&embedCodeH=" + this.options.embedCodeH + "&embedShareLink=" + this.options.embedShareLink + "&showGlobalPrerollAds=" + this.options.showGlobalPrerollAds + "&globalPrerollAds=" + this.options.globalPrerollAds + "&globalPrerollAdsSkipTimer=" + this.options.globalPrerollAdsSkipTimer + "&globalPrerollAdsGotoLink=" + this.options.globalPrerollAdsGotoLink + "&advertisementTitle=" + this.options.advertisementTitle + "&skipAdvertisementText=" + this.options.skipAdvertisementText + "&mutedNotificationText=" + this.options.mutedNotificationText + "&playBtnTooltipTxt=" + this.options.playBtnTooltipTxt + "&pauseBtnTooltipTxt=" + this.options.pauseBtnTooltipTxt + "&rewindBtnTooltipTxt=" + this.options.rewindBtnTooltipTxt + "&downloadVideoBtnTooltipTxt=" + this.options.downloadVideoBtnTooltipTxt + "&qualityBtnOpenedTooltipTxt=" + this.options.qualityBtnOpenedTooltipTxt + "&qualityBtnClosedTooltipTxt=" + this.options.qualityBtnClosedTooltipTxt + "&ccShowOnHTML5Videos=" + this.options.ccShowOnHTML5Videos + "&ccShowOnVideoLoad=" + this.options.ccShowOnVideoLoad + "&ccBtnOpenedTooltipTxt=" + this.options.ccBtnOpenedTooltipTxt + "&ccBtnClosedTooltipTxt=" + this.options.ccBtnClosedTooltipTxt + "&muteBtnTooltipTxt=" + this.options.muteBtnTooltipTxt + "&unmuteBtnTooltipTxt=" + this.options.unmuteBtnTooltipTxt + "&fullscreenBtnTooltipTxt=" + this.options.fullscreenBtnTooltipTxt + "&exitFullscreenBtnTooltipTxt=" + this.options.exitFullscreenBtnTooltipTxt + "&infoBtnTooltipTxt=" + this.options.infoBtnTooltipTxt + "&embedBtnTooltipTxt=" + this.options.embedBtnTooltipTxt + "&shareBtnTooltipTxt=" + this.options.shareBtnTooltipTxt + "&volumeTooltipTxt=" + this.options.volumeTooltipTxt + "&playlistBtnClosedTooltipTxt=" + this.options.playlistBtnClosedTooltipTxt + "&playlistBtnOpenedTooltipTxt=" + this.options.playlistBtnOpenedTooltipTxt + "&facebookBtnTooltipTxt=" + this.options.facebookBtnTooltipTxt + "&twitterBtnTooltipTxt=" + this.options.twitterBtnTooltipTxt + "&lastBtnTooltipTxt=" + this.options.lastBtnTooltipTxt + "&firstBtnTooltipTxt=" + this.options.firstBtnTooltipTxt + "&nextBtnTooltipTxt=" + this.options.nextBtnTooltipTxt + "&previousBtnTooltipTxt=" + this.options.previousBtnTooltipTxt + "&shuffleBtnOnTooltipTxt=" + this.options.shuffleBtnOnTooltipTxt + "&shuffleBtnOffTooltipTxt=" + this.options.shuffleBtnOffTooltipTxt + "&nowPlayingTooltipTxt=" + this.options.nowPlayingTooltipTxt + "&embedWindowTitle1=" + this.options.embedWindowTitle1 + "&embedWindowTitle2=" + this.options.embedWindowTitle2 + "&embedWindowTitle3=" + this.options.embedWindowTitle3 + "&copyTxt=" + this.options.copyTxt + "&copiedTxt=" + this.options.copiedTxt + "&youtubePlaylistID=" + this.options.youtubePlaylistID + "&youtubeChannelID=" + this.options.youtubeChannelID + "&youtubeChannelNumberOfVideos=" + parseInt(this.options.youtubeChannelNumberOfVideos) + "&videosLength=" + this.options.videos.length + "&videoType=" + this.videoType_str + "&title=" + this.title_str + "&youtubeID=" + this.youtubeID_str + "&vimeoID=" + this.vimeoID_str + "&mp4HD=" + this.mp4HD_str + "&mp4SD=" + this.mp4SD_str + "&ccUrl=" + this.ccUrl_str + "&enable_mp4_download=" + this.enable_mp4_download_str + "&imageUrl=" + this.imageUrl_str + "&imageTimer=" + this.imageTimer_str + "&prerollAD=" + this.prerollAD_str + "&prerollGotoLink=" + this.prerollGotoLink_str + "&preroll_mp4=" + this.preroll_mp4_str + "&prerollSkipTimer=" + this.prerollSkipTimer_str + "&midrollAD=" + this.midrollAD_str + "&midrollAD_displayTime=" + this.midrollAD_displayTime_str + "&midrollGotoLink=" + this.midrollGotoLink_str + "&midroll_mp4=" + this.midroll_mp4_str + "&midrollSkipTimer=" + this.midrollSkipTimer_str + "&postrollAD=" + this.postrollAD_str + "&postrollGotoLink=" + this.postrollGotoLink_str + "&postroll_mp4=" + this.postroll_mp4_str + "&postrollSkipTimer=" + this.postrollSkipTimer_str + "&popupImg=" + this.popupImg_str + "&popupAdShow=" + this.popupAdShow_str + "&popupAdStartTime=" + this.popupAdStartTime_str + "&popupAdEndTime=" + this.popupAdEndTime_str + "&popupAdGoToLink=" + this.popupAdGoToLink_str + "&description=" + this.description_str + "&thumbImg=" + this.thumbImg_str + "&info=" + this.info_str
    }, r.fn.globalUnmuteHTML5 = function() {
        var t = this;
        this.video.muted = !1, this.videoAD.muted = !1, this.muted = !1, i(this.mainContainer).find(".fa-player-volume-off").removeClass("fa-player-volume-off").addClass("fa-player-volume-up"), this.volumeTrackProgress.stop().animate({
            width: this.savedVolumeBarWidth
        }, 200), this.volRatio = this.savedVolumeBarWidth / this.volumeTrack.width(), "youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType ? void 0 != this.youtubePlayer && this.youtubePlayer.setVolume(100 * this.volRatio) : "HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType ? this.video.setVolume(this.volRatio) : "vimeo" != this._playlist.videos_array[this._playlist.videoid].videoType && "Vimeo" != this.options.videoType || (t._playlist.vimeoPlayer.api("pause"), t._playlist.vimeoPlayer.api("setVolume", this.volRatio), t._playlist.vimeoPlayer.api("play")), this.videoAD.setVolume(this.volRatio), this.options.autoplay
    }, r.fn.ready = function(i) {
        this.readyList.push(i), this.loaded && i.call(this)
    }, r.fn.load = function(t) {
        var e = this;
        t && (this.sources = t), "string" == typeof this.sources && (this.sources = {
            src: this.sources
        }), i.isArray(this.sources) || (this.sources = [this.sources]), this.ready(function() {
            this.change("loading"), "HTML5" != e._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != e.options.videoType || this.video.loadSources(this.sources)
        })
    }, r.fn.closeAD = function() {
        var i = this;
        i.hideMutedBox(), i.volPerc > 0 && i.globalUnmuteHTML5(), clearInterval(i.myInterval), i.videoPlayingAD = !0, i.togglePlayAD(), i._playlist.videoAdPlayed = !0, i.resetPlayerAD(), i.elementAD.css({
            zIndex: 1
        }), i.videoElementAD.empty(), i.videoAdBoxInside.hide(), i.removeListenerProgressAD(), i.options.allowSkipAd && (i.skipAdBox.hide(), i.skipAdCount.hide()), i.fsEnterADBox.hide(), i.toggleAdPlayBox.hide(), i.progressADBg.hide(), "youtube" == i._playlist.videos_array[i._playlist.videoid].videoType || "YouTube" == i.options.videoType ? (i.ytWrapper.css({
            visibility: "visible"
        }), i.hideVideoElements(), void 0 != i.youtubePlayer && this.youtubePlayer.playVideo()) : "HTML5" == i._playlist.videos_array[i._playlist.videoid].videoType || "HTML5 (self-hosted)" == i.options.videoType ? (i.showVideoElements(), i.togglePlay(), i.video.play()) : "vimeo" != i._playlist.videos_array[i._playlist.videoid].videoType && "Vimeo" != i.options.videoType || (i.hideVideoElements(), void 0 != i._playlist.vimeoPlayer ? i._playlist.vimeoPlayer.api("play") : i._playlist.playVimeo(i._playlist.videoid))
    }, r.fn.openAD = function() {
        var t = this;
        0 == t.volPerc && t.showMutedBox(), !t.options.autoplay || t.videoAdStarted || t.isMobile.any() || "youtube" != t._playlist.videos_array[t._playlist.videoid].videoType && "YouTube" != t.options.videoType || t.showMutedBox(), t.volPerc > 0 && t.isMobile.any() && ("youtube" == t._playlist.videos_array[t._playlist.videoid].videoType || "YouTube" == t.options.videoType) && t.globalUnmuteHTML5(), t.showVideoElements(), t.progressADBg.show(), t.elementAD.css({
            zIndex: 555559
        }), t.ytWrapper.css({
            visibility: "hidden"
        }), t.videoAdBoxInside.show(), t.options.showAdvertiserName && t.visitWrapp.show(), t.options.allowSkipAd && (t.skipBoxOn = !0, t.toggleSkipAdBox(), t.skipCountOn = !1, t.toggleSkipAdCount()), t.fsEnterADBox.show(), t.realFullscreenActive || t.resizeAll(), t.toggleAdPlayBox.hide(), this.options.allowSkipAd && (this.setSkipTimer(), i(".player_skipAdCountTitle").text(this.options.skipAdText + " " + t.counter + " s"), this.i.src = t._playlist.videos_array[t._playlist.videoid].thumbnail_image)
    }, r.fn.loadAD = function(t, e) {
        switch (this.preloaderAD.stop().animate({
                opacity: 1
            }, 0, function() {
                i(this).show()
            }), t && (this.sourcesAD = t), "string" == typeof this.sourcesAD && (this.sourcesAD = {
                src: this.sourcesAD
            }), i.isArray(this.sourcesAD) || (this.sourcesAD = [this.sourcesAD]), this.ready(function() {
                this.change("loading"), this.videoAD.loadSources(this.sourcesAD)
            }), e) {
            case "prerollActive":
                this.prerollActive = !0, this.midrollActive = !1, this.postrollActive = !1;
                break;
            case "midrollActive":
                this.prerollActive = !1, this.midrollActive = !0, this.postrollActive = !1;
                break;
            case "postrollActive":
                this.prerollActive = !1, this.midrollActive = !1, this.postrollActive = !0
        }
    }, r.fn.play = function() {
        var i = this;
        this.playButtonScreen.hide(), this.playBtn.removeClass("fa-player-play").addClass("fa-player-pause"), "HTML5" == i._playlist.videos_array[i._playlist.videoid].videoType || "HTML5 (self-hosted)" == i.options.videoType ? i.video.play() : "youtube" != i._playlist.videos_array[i._playlist.videoid].videoType && "YouTube" != i.options.videoType || i.video.pause(), "yes" != i._playlist.videos_array[i._playlist.videoid].prerollAD || 0 != i.videoAdStarted || i.options.showGlobalPrerollAds || (i.video.pause(), !i.videoAdStarted && i._playlist.videos_array[i._playlist.videoid].prerollAD && (i.myVideo.canPlayType && i.myVideo.canPlayType("video/mp4").replace(/no/, "") && (i.canPlay = !0, i.video_pathAD = i._playlist.videos_array[i._playlist.videoid].preroll_mp4), i.loadAD(i.video_pathAD, "prerollActive"), i.openAD()), i.videoAdStarted = !0), this.options.showGlobalPrerollAds && 0 == i.videoAdStarted && (i.video.pause(), !i.videoAdStarted && i.options.showGlobalPrerollAds && (i.myVideo.canPlayType && i.myVideo.canPlayType("video/mp4").replace(/no/, "") && (i.canPlay = !0, i.video_pathAD = this.globalPrerollAds_arr[this.getGlobalPrerollRandomNumber()]), i.loadAD(i.video_pathAD), i.openAD()), i.videoAdStarted = !0)
    }, r.fn.pause = function() {
        var i = this;
        "HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType ? this.playButtonScreen.hide() : "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (i._playlist.youtubeSTARTED || "" == this.options.posterImg ? this.playButtonScreen.show() : this.playButtonScreen.hide()), this.playBtn.removeClass("fa-player-pause").addClass("fa-player-play"), i.video.pause()
    }, r.fn.stop = function() {
        this.seek(0), this.pause()
    }, r.fn.hideOverlay = function() {
        var i = this;
        void 0 != i.overlay && (i.overlay.hide(), i.poster2Showing = !1, i.playButtonPoster.hide(), "youtube" == i._playlist.videos_array[i._playlist.videoid].videoType || "YouTube" == i.options.videoType ? (i.youtubePlayer.playVideo(), "default controls" == i.options.youtubeControls && i.element.css("visibility", "hidden")) : "HTML5" == i._playlist.videos_array[i._playlist.videoid].videoType || "HTML5 (self-hosted)" == i.options.videoType ? i.togglePlay() : "vimeo" != i._playlist.videos_array[i._playlist.videoid].videoType && "Vimeo" != i.options.videoType || (i.hideCustomControls(), i.hideVideoElements(), void 0 != i._playlist.vimeoPlayer ? i._playlist.vimeoPlayer.api("play") : i._playlist.playVimeo(i._playlist.videoid)))
    }, r.fn.togglePlay = function() {
        "player_playing" == this.state ? (this.pause(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || this.youtubePlayer.pauseVideo()) : (this.play(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || this.youtubePlayer.playVideo())
    }, r.fn.toggleSkipAdBox = function() {
        this.skipBoxOn ? (this.skipAdBox.stop().animate({
            right: -(this.skipAdBox.width() - 2),
            bottom: 28
        }, 200, function() {
            i(this).hide()
        }), this.skipBoxOn = !1) : (this.skipAdBox.show(), this.addListenerProgressAD(), this.skipAdBox.stop().animate({
            right: 10,
            bottom: 28
        }, 500), this.skipBoxOn = !0)
    }, r.fn.toggleSkipAdCount = function() {
        this.skipCountOn ? (this.skipAdCount.stop().animate({
            right: -(this.skipAdCount.width() - 2),
            bottom: 28
        }, 200, function() {
            i(this).hide()
        }), this.skipCountOn = !1) : (this.skipAdCount.show(), this.skipAdCount.stop().animate({
            right: 10,
            bottom: 28
        }, 500), this.skipCountOn = !0)
    }, r.fn.hideMutedBox = function(t) {
        var e = this;
        this.mutedBoxOn && (t || (t = 0), this.mutedBox.stop().delay(t).animate({
            left: -this.mutedBox.width() - 10
        }, 300, function() {
            i(this).hide(), e.mutedBoxOn = !1, e.mutedBox_mask.hide()
        }))
    }, r.fn.showMutedBox = function(i) {
        var t = this;
        i || (i = 0), this.mutedBox_mask.show(), this.mutedBox.show(), this.mutedBox.stop().delay(i).animate({
            left: 0
        }, 300, function() {
            t.mutedBoxOn = !0
        })
    }, r.fn.toggleInfoWindow = function() {
        this.infoOn ? (this.infoWindow.stop().animate({
            top: -this.infoWindow.height()
        }, 200, function() {
            i(this).hide()
        }), this.nowPlayingTitle.show(), this.infoOn = !1) : (this.infoWindow.show(), this.infoWindow.stop().animate({
            top: 0
        }, 500), this.nowPlayingTitle.hide(), this.infoOn = !0)
    }, r.fn.toggleLightBox = function() {
        this.lightBoxOn ? (this.lightBoxOverlay.stop().animate({
            opacity: 0
        }, 300, function() {
            i(this).hide()
        }), this.lightBoxOn = !1, this.pause(), this.YTAPIReady && this.youtubePlayer.pauseVideo(), this._playlist.vimeoPlayer && this._playlist.vimeoPlayer.api("pause"), this.videoPlayingAD = !0, this.togglePlayAD(), i(".player_lightBoxThumbnailWrap").each(function() {
            i(this).find(".player_playButtonScreen").css({
                zIndex: 2147483647
            })
        })) : (this.lightBoxOverlay.show(), this.lightBoxOverlay.stop().animate({
            opacity: 1
        }, 300), this.lightBoxOn = !0, this.options.lightBoxAutoplay && (this.lightBoxInitiated ? "yes" == this._playlist.videos_array[this._playlist.videoid].prerollAD || this.options.showGlobalPrerollAds ? this._playlist.videoAdPlayed ? (this.play(), this.YTAPIReady && this.youtubePlayer.playVideo(), this._playlist.vimeoPlayer && this._playlist.vimeoPlayer.api("play")) : (this.videoPlayingAD = !1, this.togglePlayAD()) : (this.play(), this.YTAPIReady && this.youtubePlayer.playVideo(), this._playlist.vimeoPlayer && this._playlist.vimeoPlayer.api("play")) : (this.playVideoById(this._playlist.videoid), this.lightBoxInitiated = !0)), i(".player_lightBoxThumbnailWrap").each(function() {
            i(this).find(".player_playButtonScreen").css({
                zIndex: 2147483646
            })
        })), this.resizeAll()
    }, r.fn.toggleQualityWindow = function(t) {
        var e, o = this;
        e = t ? t : 0, this.qualityOn ? (this.qualityWindow.stop().delay(e).animate({
            top: 200
        }, 200, function() {
            i(o.qualityWindow_mask).hide()
        }), this.qualityOn = !1) : (this.qualityWindow_mask.show(), this.qualityWindow.stop().delay(e).animate({
            top: 0
        }, 500), this.qualityOn = !0)
    }, r.fn.toggleCCWindow = function(i) {
        return
    }, r.fn.togglePopup = function() {
        this.adOn ? (this.adImg.animate({
            opacity: 0
        }, 0, function() {
            i(this).hide()
        }), this.adOn = !1) : this.adOn || (this.adImg.show(), this.adImg.animate({
            opacity: 1
        }, 500), this.adOn = !0)
    }, r.fn.toggleShuffleBtn = function() {
        this.shuffleBtnEnabled ? (this.removeColorAccent(i("#player_shuffleBtn")), this._playlist.shuffleBtnIcon.removeClass("player_enabled_shuffle"), this.shuffleBtnEnabled = !1) : (i(this.mainContainer).find(".fa-player-random").addClass("player_themeColorButton"), this._playlist.shuffleBtnIcon.addClass("player_enabled_shuffle"), this.shuffleBtnEnabled = !0, this.setColorAccent(i(".player_Progress").css("backgroundColor"), i("#player_shuffleBtn")))
    }, r.fn.toggleQualityBtn = function() {
        this.qualityBtnEnabled ? (this.removeColorAccent(i("#player_qualityBtn")), this.qualityBtn.removeClass("player_enabled_quality"), this.qualityBtnEnabled = !1) : (i(this.mainContainer).find(".fa-player-cog").addClass("player_themeColorButton"), this.qualityBtn.addClass("player_enabled_quality"), this.qualityBtnEnabled = !0, this.setColorAccent(i(".player_Progress").css("backgroundColor"), i("#player_qualityBtn")))
    }, r.fn.toggleCCBtn = function() {
        if (this.ccBtnEnabled) {
            this.removeColorAccent(i("#player_ccBtn")), this.ccBtn.removeClass("player_enabled_cc"), this.ccBtnEnabled = !1;
            for (var t = 0; t < this.videoElement[0].textTracks.length; t++) "subtitles" == this.videoElement[0].textTracks[t].kind && (this.videoElement[0].textTracks[0].mode = "hidden")
        } else {
            i(this.mainContainer).find(".fa-player-cc").addClass("player_themeColorButton"), this.ccBtn.addClass("player_enabled_cc"), this.ccBtnEnabled = !0, this.setColorAccent(i(".player_Progress").css("backgroundColor"), i("#player_ccBtn"));
            for (var t = 0; t < this.videoElement[0].textTracks.length; t++) "subtitles" == this.videoElement[0].textTracks[t].kind && (this.videoElement[0].textTracks[0].mode = "showing")
        }
    }, r.fn.toggleShareWindow = function() {
        var t = this;
        this.shareOn ? (this.shareOn = !1, i(this.shareWindow).stop().animate({
            right: -t.shareWindow.width()
        }, 300, function() {
            i(this).hide()
        })) : (this.shareWindow.show(), i(this.shareWindow).stop().animate({
            right: t.screenBtnsWindow.width()
        }, 300), this.shareOn = !0)
    }, r.fn.togglePlayAD = function() {
        this.videoPlayingAD ? (this.videoAD.pause(), this.videoPlayingAD = !1, this.toggleAdPlayBox.show()) : (this.videoAD.play(), this.videoPlayingAD = !0, this.toggleAdPlayBox.hide())
    }, r.fn.toggleEmbedWindow = function() {
        this.embedOn ? (i(this.embedWindow).stop().animate({
            top: -this.embedWindow.height()
        }, 200, function() {
            i(this).hide()
        }), this.embedOn = !1) : (i(this.embedWindow).show(), i(this.embedWindow).stop().animate({
            top: 0
        }, 500, function() {}), this.embedOn = !0)
    }, r.fn.fullScreen = function(t) {
        var e = this;
        if (t) this.element.addClass("player_fullScreen"), this.elementAD.addClass("player_fullScreen"), i(this.mainContainer).find(".fa-player-expand").removeClass("fa-player-expand").addClass("fa-player-compress"), i(this.fsEnterADBox).find(".fa-player-expandAD").removeClass("fa-player-expandAD").addClass("fa-player-compressAD"), this._playlist.hidePlaylist(), e.element.width(window.innerWidth), e.element.height(window.innerHeight), e.elementAD.width(window.innerWidth), e.elementAD.height(window.innerHeight), e.mainContainer.width(window.innerWidth), e.mainContainer.height(window.innerHeight), e.mainContainer.css("position", "fixed"), e.mainContainer.css("left", 0), e.mainContainer.css("top", 0), e.mainContainer.parent().css("zIndex", 999999), "HTML5" != e._playlist.videos_array[e._playlist.videoid].videoType && "HTML5 (self-hosted)" != e.options.videoType || e.element.css({
            zIndex: 555558
        }), "youtube" == e._playlist.videos_array[e._playlist.videoid].videoType || "YouTube" == e.options.videoType ? e.element.css({
            zIndex: 555558
        }) : "vimeo" != e._playlist.videos_array[e._playlist.videoid].videoType && "Vimeo" != e.options.videoType || e.element.css({
            zIndex: 555556
        }), ("yes" == e._playlist.videos_array[e._playlist.videoid].prerollAD || e.options.showGlobalPrerollAds) && (e._playlist.videoAdPlayed ? e.elementAD.css({
            zIndex: 555557
        }) : e.elementAD.css({
            zIndex: 555559
        }));
        else {
            if (this._playlist.showPlaylist(), this.element.removeClass("player_fullScreen"), e.mainContainer.css("position", "absolute"), e.mainContainer.parent().css("zIndex", 1), this.elementAD.removeClass("player_fullScreen"), i(this.mainContainer).find(".fa-player-compress").removeClass("fa-player-compress").addClass("fa-player-expand"), i(this.fsEnterADBox).find(".fa-player-compressAD").removeClass("fa-player-compressAD").addClass("fa-player-expandAD"), this.stretching && (this.stretching = !1, this.toggleStretch()), "HTML5" == e._playlist.videos_array[e._playlist.videoid].videoType || "HTML5 (self-hosted)" == e.options.videoType ? e.element.css({
                    zIndex: 455558
                }) : e.element.css({
                    zIndex: 455556
                }), ("yes" == e._playlist.videos_array[e._playlist.videoid].prerollAD || e.options.showGlobalPrerollAds) && (e._playlist.videoAdPlayed ? e.elementAD.css({
                    zIndex: 455557
                }) : e.elementAD.css({
                    zIndex: 455559
                })), "fitToContainer" == e.options.playerLayout) switch (e.mainContainer.width("100%"), e.options.playlist) {
                case "Right playlist":
                    e.mainContainer.height((e.parent.width() - e._playlist.playlist.width()) / e.options.videoRatio);
                    break;
                case "Bottom playlist":
                    e.mainContainer.height(e.parent.width() / e.options.videoRatio)
            } else "fitToBrowser" == e.options.playerLayout ? (e.mainContainer.width("100%"), e.mainContainer.height("100%")) : "fixedSize" == e.options.playerLayout && (e.mainContainer.width(e.options.videoPlayerWidth), e.mainContainer.height(e.options.videoPlayerHeight));
            e.mainContainer.css("left", ""), e.mainContainer.css("top", ""), e.resizeAll()
        }
        this.positionControlsBtnsWrapperRight(), this.positionTimeTotal(), this.resizeVideoTrack(), this.positionOverScreenButtons(t), this.positionShareWindowFromTop(), this.positionQualityWindow(), this.positionLogo(), this.positionPopup(), this.resizeBars(), "undefined" == typeof t && (t = !0), this.inFullScreen = t
    }, r.fn.toggleFullScreen = function() {
        var t = this;
        if (PLAYER.FullScreen.available()) {
            if (PLAYER.FullScreen.activated()) PLAYER.FullScreen.cancel(), "HTML5" == t._playlist.videos_array[t._playlist.videoid].videoType || "HTML5 (self-hosted)" == t.options.videoType ? t.element.css({
                zIndex: 455558
            }) : t.element.css({
                zIndex: 455556
            }), ("yes" == t._playlist.videos_array[t._playlist.videoid].prerollAD || t.options.showGlobalPrerollAds) && (t._playlist.videoAdPlayed ? t.elementAD.css({
                zIndex: 455557
            }) : t.elementAD.css({
                zIndex: 455559
            })), t.mainContainer.css("zIndex", 999999);
            else if (t.savePageOffsetY = i(window).scrollTop(), PLAYER.FullScreen.request(this.parent[0]), t.mainContainer.parent().css("zIndex", 999999), t.mainContainer.css("zIndex", 2147483647), "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.element.css({
                    zIndex: 555558
                }), "youtube" == t._playlist.videos_array[t._playlist.videoid].videoType || "YouTube" == t.options.videoType ? t.element.css({
                    zIndex: 555558
                }) : "vimeo" != t._playlist.videos_array[t._playlist.videoid].videoType && "Vimeo" != t.options.videoType || t.element.css({
                    zIndex: 555556
                }), "yes" == t._playlist.videos_array[t._playlist.videoid].prerollAD || t.options.showGlobalPrerollAds) {
                if (!t.videoAdStarted) return;
                t._playlist.videoAdPlayed ? t.elementAD.css({
                    zIndex: 555557
                }) : t.elementAD.css({
                    zIndex: 555559
                })
            }
        } else PLAYER.FullScreen.available() || this.fullScreen(!this.inFullScreen)
    }, r.fn.seek = function(i) {
        this.video.setCurrentTime(i)
    }, r.fn.setVolume = function(i) {
        this.video.setVolume(i), this.videoAD.setVolume(i)
    }, r.fn.getVolume = function() {
        return this.video.getVolume()
    }, r.fn.mute = function(i) {
        "undefined" == typeof i && (i = !0), this.setVolume(i ? 1 : 0)
    }, r.fn.remove = function() {
        this.element.remove()
    }, r.fn.bind = function() {
        this.videoElement.bind.apply(this.videoElement, arguments)
    }, r.fn.one = function() {
        this.videoElement.one.apply(this.videoElement, arguments)
    }, r.fn.trigger = function() {
        this.videoElement.trigger.apply(this.videoElement, arguments)
    };
    for (var c = ["click", "dblclick", "onerror", "onloadeddata", "oncanplay", "ondurationchange", "ontimeupdate", "onprogress", "onpause", "onplay", "onended", "onvolumechange"], y = 0; y < c.length; y++) ! function() {
        var t = c[y],
            e = t.replace(/^(on)/, "");
        r.fn[t] = function() {
            var t = i.makeArray(arguments);
            t.unshift(e), this.bind.apply(this, t)
        }
    }();
    r.fn.triggerReady = function() {
        this.loaded = !0
    }, r.fn.setupElement = function() {
        var t = this;
        switch (this.mainContainer = i("<div />"), this.mainContainer.addClass("player_mainContainer"), "fitToContainer" == this.options.playerLayout || "fitToBrowser" == this.options.playerLayout ? this.mainContainer.css({
                width: "100%",
                height: "100%",
                position: "absolute",
                background: "#000000",
                zIndex: 999999
            }) : "fixedSize" == this.options.playerLayout && this.mainContainer.css({
                width: this.options.videoPlayerWidth,
                height: this.options.videoPlayerHeight,
                position: "absolute",
                background: "#000000",
                zIndex: 999999
            }), this.options.videoPlayerShadow) {
            case "effect1":
                this.mainContainer.addClass("player_effect1");
                break;
            case "effect2":
                this.mainContainer.addClass("player_effect2");
                break;
            case "effect3":
                this.mainContainer.addClass("player_effect3");
                break;
            case "effect4":
                this.mainContainer.addClass("player_effect4");
                break;
            case "effect5":
                this.mainContainer.addClass("player_effect5");
                break;
            case "effect6":
                this.mainContainer.addClass("player_effect6");
                break;
            case "off":
        }
        this.parent.append(this.mainContainer), this.options.lightBox && (this.mainContainerBG = i("<div />"), this.mainContainerBG.addClass("player_main_container_bg"), this.mainContainer.append(this.mainContainerBG)), this.options.floatPlayerOutsideViewport && (this.mainContainerStickyBG = i("<div />"), this.mainContainerStickyBG.addClass("player_main_container_sticky_bg"), this.mainContainerStickyBG.hide(), this.mainContainer.append(this.mainContainerStickyBG), this.stickyControlsWrapp = i("<div />"), this.stickyControlsWrapp.addClass("player_sticky_controls_wrapp"), this.mainContainerStickyBG.append(this.stickyControlsWrapp), this.stickyCloseBtnWrapper = i("<div />").addClass("player_stickyCloseBtnWrapper").addClass("player_sticky_element").addClass("video_playerElement").bind(t.CLICK_EV, function() {
            i(t.mainContainer).removeClass("player_sticky"), t.mainContainerStickyBG.hide(), t.stickyClosedOnButton = !0, t.pause(), t.YTAPIReady && t.youtubePlayer.pauseVideo(), t._playlist.vimeoPlayer && t._playlist.vimeoPlayer.api("pause")
        }), this.stickyControlsWrapp.append(this.stickyCloseBtnWrapper), this.stickyCloseBtn = i("<span />").attr("aria-hidden", "true").attr("id", "player_stickyCloseBtn").addClass("fa-player").addClass("general-player-icon").addClass("fa-player-times-sticky"), this.stickyUpBtnWrapper = i("<div />").addClass("player_stickyUpBtnWrapper").addClass("player_sticky_element").addClass("video_playerElement").bind(t.CLICK_EV, function() {
            return i("html, body").animate({
                scrollTop: 0
            }, "slow"), !1
        }), this.stickyControlsWrapp.append(this.stickyUpBtnWrapper), this.stickyUpBtn = i("<span />").attr("aria-hidden", "true").attr("id", "player_stickyUpBtn").addClass("fa-player").addClass("general-player-icon").addClass("fa-player-arrow-circle-up"), this.stickySeekBtnWrapper = i("<div />").addClass("player_stickySeekBtnWrapper").addClass("player_sticky_element").addClass("video_playerElement").bind(t.CLICK_EV, function() {
            i(".video_player").length && i(".video_player").get(0).scrollIntoView({
                behavior: "smooth"
            }), i("#video_player").length && i("#video_player").get(0).scrollIntoView({
                behavior: "smooth"
            })
        }), this.stickyControlsWrapp.append(this.stickySeekBtnWrapper), this.stickySeekBtn = i("<span />").attr("aria-hidden", "true").attr("id", "player_stickySeekBtn").addClass("fa-player").addClass("general-player-icon").addClass("fa-player-play-circle-o"), this.stickyUpBtnWrapper.append(this.stickyUpBtn), this.stickySeekBtnWrapper.append(this.stickySeekBtn), this.stickyCloseBtnWrapper.append(this.stickyCloseBtn)), this.element = i("<div />"), this.element.addClass("player_videoPlayer"), this.mainContainer.append(this.element), this.ytWrapper = i("<div></div>"), this.ytWrapper.addClass("player_ytWrapper"), this.element.append(this.ytWrapper), this.ytPlayer = i("<div></div>"), this.ytPlayer.attr("id", t.options.instanceName + "youtube"), this.ytWrapper.append(this.ytPlayer), this.imageWrapper = i("<div></div>"), this.imageWrapper.addClass("player_imageWrapper"), this.element.append(this.imageWrapper), this.imageDisplayed = document.createElement("img"), this.imageWrapper.append(this.imageDisplayed), i(".player_imageWrapper img").attr("id", "player_imageDisplayed")
    }, r.fn.setupElementAD = function() {
        this.elementAD = i("<div />"), this.elementAD.addClass("player_videoPlayerAD"), this.mainContainer.append(this.elementAD)
    }, r.fn.idle = function(t, e) {
        var o = this;
        e ? "player_playing" == this.state && (this.options.showAllControls || this.controls.hide(), this.controls.stop().animate({
            bottom: -50
        }, 300), o.progressIdleTrack.stop().delay(800).animate({
            bottom: 0
        }, 300), this.screenBtnsWindow.stop().animate({
            right: -44
        }, 300), this.logoImg.stop().animate({
            opacity: 0
        }, 300), i(o.nowPlayingTitle).find(".player_nowPlayingText ").addClass("player_nowrap"), o.nowPlayingTitle.stop().animate({
            left: -o.nowPlayingTitle.width()
        }, 300), o.shareOn = !0, o.toggleShareWindow(), o.qualityOn = !0, o.toggleQualityWindow(), o.qualityBtnEnabled = !0, o.toggleQualityBtn(), o.ccOn = !0, o.toggleCCWindow(), i(o.toolTip).stop().animate({
            opacity: 0
        }, 50, function() {
            o.toolTip.hide()
        }), o.invisibleWrapper.show()) : (this.progressIdleTrack.stop().animate({
            bottom: -6
        }, 100, function() {
            o.options.showAllControls || o.controls.hide(), o.controls.stop().animate({
                bottom: 0
            }, 300)
        }), this.screenBtnsWindow.stop().animate({
            right: 0
        }, 400), this.logoImg.stop().animate({
            opacity: 1
        }, 400), i(o.nowPlayingTitle).find(".player_nowPlayingText ").removeClass("player_nowrap"), o.nowPlayingTitle.stop().animate({
            left: 0
        }, 400), o.invisibleWrapper.hide())
    }, r.fn.change = function(i) {
        this.state = i, this.element && (this.element.attr("data-state", this.state), this.element.trigger("state.videoPlayer", this.state))
    }, r.fn.setupHTML5Video = function() {
        this.element && this.element.append(this.videoElement), this.video = this.videoElement[0], "live" == this.options.HTML5videoThumbnails && (this.videoClone = this.videoElementClone[0]), this.element && (this.element.width(this.playerWidth), this.element.height(this.playerHeight));
        var t = this;
        this.video.loadSources = function(i) {
            for (var e in i) {
                if (-1 != i[e].src.indexOf("m3u8"))
                    if (Hls.isSupported()) {
                        var o = new Hls;
                        o.loadSource(i[e].src), o.attachMedia(t.video), o.on(Hls.Events.MANIFEST_PARSED, function() {})
                    } else t.videoElement.attr("src", i[e].src);
                else t.videoElement.attr("src", i[e].src);
                "live" == t.options.HTML5videoThumbnails && t.videoElementClone.attr("src", i[e].src)
            }
            t.video.load(), "live" == t.options.HTML5videoThumbnails && t.videoClone.load()
        }, this.video.getStartTime = function() {
            return this.startTime || 0
        }, this.video.getEndTime = function() {
            return this.duration == 1 / 0 && this.buffered ? this.buffered.end(this.buffered.length - 1) : (this.startTime || 0) + this.duration
        }, this.video.getCurrentTime = function() {
            try {
                return this.currentTime
            } catch (i) {
                return 0
            }
        };
        var t = this;
        if (this.video.setCurrentTime = function(i) {
                this.currentTime = i
            }, this.video.getVolume = function() {
                return this.volume
            }, this.video.setVolume = function(i) {
                i > 1 && (i = 1), t.options.showAllControls ? this.volume = i : this.volume = 1
            }, this.videoElement.dblclick(i.proxy(function() {
                this.toggleFullScreen()
            }, this)), this.videoElement.bind(this.CLICK_EV, i.proxy(function() {
                this.togglePlay()
            }, this)), this.triggerReady(), i(this.videoElement).bind("ended", function() {
                t.gaVideoEnded()
            }), i(this.videoElement).bind("timeupdate", function() {}), i(this.videoElement).bind("play", function() {}), i(this.videoElement).bind("pause", function() {}), this.options.ccShowOnHTML5Videos) {
            this.trackElement = i("<track />").addClass("player_captions"), this.trackElement.attr({
                src: "",
                kind: "subtitles",
                srclang: "en",
                label: "English"
            }), this.videoElement.append(this.trackElement);
            for (var e = 0; e < this.videoElement[0].textTracks.length; e++);
        }
        if ("vtt" == this.options.HTML5videoThumbnails) {
            this.trackElement_videoThumbnails = i("<track />").addClass("player_videoThumbnails"), this.trackElement_videoThumbnails.attr({
                src: "",
                kind: "metadata"
            }), this.videoElement.append(this.trackElement_videoThumbnails), this.updateVtt();
            for (var e = 0; e < this.videoElement[0].textTracks.length; e++) "metadata" == this.videoElement[0].textTracks[e].kind && (this.videoElement[0].textTracks[e].mode = "showing")
        }
    }, r.fn.setupHTML5VideoAD = function() {
        this.elementAD && this.elementAD.append(this.videoElementAD), this.videoAD = this.videoElementAD[0], this.elementAD && (this.elementAD.width(0), this.elementAD.height(0));
        var t = this;
        this.videoAD.loadSources = function(i) {
            t.videoElementAD.empty();
            for (var e in i)
                if (-1 != i[e].src.indexOf("m3u8")) {
                    if (Hls.isSupported()) {
                        var o = new Hls;
                        o.loadSource(i[e].src), o.attachMedia(t.videoAD), o.on(Hls.Events.MANIFEST_PARSED, function() {})
                    }
                } else t.videoElementAD.attr("src", i[e].src);
            t.videoAD.load(), t.videoPlayingAD = !1, t.togglePlayAD()
        }, this.videoAD.getStartTime = function() {
            return this.startTime || 0
        }, this.videoAD.getEndTime = function() {
            return isNaN(this.duration) ? void 0 : this.duration == 1 / 0 && this.buffered ? this.buffered.end(this.buffered.length - 1) : (this.startTime || 0) + this.duration
        }, this.videoAD.getCurrentTime = function() {
            try {
                return this.currentTime
            } catch (i) {
                return 0
            }
        }, this.videoAD.setCurrentTime = function(i) {
            this.currentTime = i
        }, this.videoAD.getVolume = function() {
            return this.volume
        }, this.videoAD.setVolume = function(i) {
            i > 1 && (i = 1), t.options.showAllControls ? this.volume = i : this.volume = 1
        }, this.videoElementAD.dblclick(i.proxy(function() {
            this.toggleFullScreen()
        }, this)), this.triggerReady(), this.videoElementAD.bind(this.CLICK_EV, i.proxy(function() {
            t.gaVideoClickedAD(), this.options.showGlobalPrerollAds ? "" != this.options.globalPrerollAdsGotoLink && "globalPrerollAdsGotoLink" != this.options.globalPrerollAdsGotoLink && (window.open(this.options.globalPrerollAdsGotoLink), this.videoPlayingAD = !0, this.togglePlayAD()) : ("" != this._playlist.videos_array[this._playlist.videoid].prerollGotoLink && "prerollGotoLink" != this._playlist.videos_array[this._playlist.videoid].prerollGotoLink && "yes" == this._playlist.videos_array[this._playlist.videoid].prerollAD && (this.prerollActive && window.open(this._playlist.videos_array[this._playlist.videoid].prerollGotoLink), this.videoPlayingAD = !0, this.togglePlayAD()), "" != this._playlist.videos_array[this._playlist.videoid].midrollGotoLink && "midrollGotoLink" != this._playlist.videos_array[this._playlist.videoid].midrollGotoLink && "yes" == this._playlist.videos_array[this._playlist.videoid].midrollAD && (this.midrollActive && window.open(this._playlist.videos_array[this._playlist.videoid].midrollGotoLink), this.videoPlayingAD = !0, this.togglePlayAD()), "" != this._playlist.videos_array[this._playlist.videoid].postrollGotoLink && "postrollGotoLink" != this._playlist.videos_array[this._playlist.videoid].postrollGotoLink && "yes" == this._playlist.videos_array[this._playlist.videoid].postrollAD && (this.postrollActive && window.open(this._playlist.videos_array[this._playlist.videoid].postrollGotoLink), this.videoPlayingAD = !0, this.togglePlayAD()))
        }, this))
    }, r.fn.gaVideoPlay = function() {}, r.fn.gaVideoPause = function() {}, r.fn.gaVideoProgress = function() {}, r.fn.gaVideoEnded = function() {
        var i = this;
        i.options.googleAnalyticsTrackingCode && "" != i.options.googleAnalyticsTrackingCode && ga("send", {
            hitType: "event",
            eventCategory: "Video player: " + i.options.instanceName,
            eventAction: "Video watched",
            eventLabel: "Video title: " + i._playlist.videos_array[i._playlist.videoid].title,
            nonInteraction: !0
        })
    }, r.fn.gaVideoEndedAD = function() {
        var i = this;
        i.options.googleAnalyticsTrackingCode && "" != i.options.googleAnalyticsTrackingCode && ga("send", {
            hitType: "event",
            eventCategory: "Video player: " + i.options.instanceName,
            eventAction: "AD watched",
            eventLabel: "AD: " + i.video_pathAD,
            nonInteraction: !0
        })
    }, r.fn.gaVideoClickedAD = function() {
        var i = this;
        i.options.googleAnalyticsTrackingCode && "" != i.options.googleAnalyticsTrackingCode && ga("send", {
            hitType: "event",
            eventCategory: "Video player: " + i.options.instanceName,
            eventAction: "AD clicked on",
            eventLabel: "AD: " + i.video_pathAD,
            nonInteraction: !0
        })
    }, r.fn.gaVideoSkippedAD = function() {
        var i = this;
        i.options.googleAnalyticsTrackingCode && "" != i.options.googleAnalyticsTrackingCode && ga("send", {
            hitType: "event",
            eventCategory: "Video player: " + i.options.instanceName,
            eventAction: "AD skipped after " + i.secondsFormat(i.videoAD.getCurrentTime()) + " seconds",
            eventLabel: "AD: " + i.video_pathAD,
            nonInteraction: !0
        })
    }, r.fn.gaVideoDownloaded = function() {
        var i = this;
        i.options.googleAnalyticsTrackingCode && "" != i.options.googleAnalyticsTrackingCode && ga("send", {
            hitType: "event",
            eventCategory: "Video player: " + i.options.instanceName,
            eventAction: "Video downloaded",
            eventLabel: "Video title: " + i._playlist.videos_array[i._playlist.videoid].title,
            nonInteraction: !0
        })
    }, r.fn.updateVtt = function() {
        this.trackElement_videoThumbnails.attr({
            src: this._playlist.videos_array[this._playlist.videoid].mp4VideoThumbnails_vtt
        })
    }, r.fn.updateCCState = function() {
        var i = this;
        return void 0 == this._playlist.videos_array[this._playlist.videoid].ccUrl || "" == this._playlist.videos_array[this._playlist.videoid].ccUrl || "ccUrl" == this._playlist.videos_array[this._playlist.videoid].ccUrl || -1 == this._playlist.videos_array[this._playlist.videoid].ccUrl.toString().indexOf(".vtt") ? (this.ccBtnEnabled = !0, this.toggleCCBtn(), this.ccBtnWrapper.addClass("player_disabledElement"), void("HTML5" != i._playlist.videos_array[i._playlist.videoid].videoType && "HTML5 (self-hosted)" != i.options.videoType && this.ccBtnWrapper.detach())) : (this.ccBtnWrapper.removeClass("player_disabledElement"), this.trackElement.attr({
            src: this._playlist.videos_array[this._playlist.videoid].ccUrl
        }), void(this.options.ccShowOnVideoLoad && (this.ccBtnEnabled = !1, this.toggleCCBtn())))
    }, r.fn.initialCCState = function() {
        this.options.ccShowOnVideoLoad && (this.ccBtnEnabled = !1, this.toggleCCBtn())
    }, r.fn.setupButtonsOnScreen = function() {
        var t = this;
        this.screenBtnsWindow = i("<div></div>"), this.screenBtnsWindow.addClass("player_screenBtnsWindow"), this.element && this.element.append(this.screenBtnsWindow), this.options.showAllControls || this.screenBtnsWindow.hide(), this.playlistBtn = i("<div />").addClass("player_playlistBtn").addClass("video_playerElement").addClass("player_btnOverScreen"), this.element && this.screenBtnsWindow.append(this.playlistBtn), this.playlistBtnIcon = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("player-icon-overScreen").addClass("player-icon-overScreen player_" + this.options.instanceTheme).addClass("fa-player-indent"), this.playlistBtn.append(this.playlistBtnIcon), this.shareBtn = i("<div />").addClass("player_shareBtn").addClass("video_playerElement").addClass("player_btnOverScreen"), this.element && this.screenBtnsWindow.append(this.shareBtn), this.shareBtnIcon = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("player-icon-overScreen").addClass("player-icon-overScreen player_" + this.options.instanceTheme).addClass("player_controlsColor").addClass("fa-player-share-square-o"), this.shareBtn.append(this.shareBtnIcon), this.embedBtn = i("<div />").addClass("player_embedBtn").addClass("video_playerElement").addClass("player_btnOverScreen"), this.element && this.screenBtnsWindow.append(this.embedBtn), this.embedBtnIcon = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("player-icon-overScreen").addClass("player-icon-overScreen player_" + this.options.instanceTheme).addClass("fa-player-chain"), this.embedBtn.append(this.embedBtnIcon), this.infoBtn = i("<div />").addClass("player_infoBtn").addClass("video_playerElement").addClass("player_btnOverScreen"), this.playlistBtn.addClass("player_bg player_" + this.options.instanceTheme), this.shareBtn.addClass("player_bg player_" + this.options.instanceTheme), this.embedBtn.addClass("player_bg player_" + this.options.instanceTheme), this.infoBtn.addClass("player_bg player_" + this.options.instanceTheme), this.element && this.screenBtnsWindow.append(this.infoBtn), this.infoBtnIcon = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("player-icon-overScreen").addClass("player-icon-overScreen player_" + this.options.instanceTheme).addClass("fa-player-info"), this.infoBtn.append(this.infoBtnIcon), this.shareWindow = i("<div></div>"), this.shareWindow.addClass("player_shareWindow"), this.element && this.element.append(this.shareWindow), this.shareBtn.bind(this.CLICK_EV, i.proxy(function() {
            this.toggleShareWindow()
        }, this)), this.facebookBtn = i("<div />").addClass("player_facebookBtn").addClass("video_playerElement").addClass("player_socialBtn").addClass("player_bg"), this.element && this.shareWindow.append(this.facebookBtn), this.facebookBtnIcon = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("player-icon-overScreen").addClass("fa-player-facebook"), this.facebookBtn.append(this.facebookBtnIcon), this.twitterBtn = i("<div />").addClass("player_twitterBtn").addClass("video_playerElement").addClass("player_socialBtn").addClass("player_bg"), this.element && this.shareWindow.append(this.twitterBtn), this.twitterBtnIcon = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("player-icon-overScreen").addClass("fa-player-twitter"), this.twitterBtn.append(this.twitterBtnIcon), this.shareWindow.hide(), this.shareWindow.css({
            right: -this.shareWindow.width()
        }), this.positionShareWindowFromTop(), this.facebookBtn.bind(this.CLICK_EV, i.proxy(function() {
            t.pause(), t.YTAPIReady && t.youtubePlayer.pauseVideo();
            var e = i(window).width() / 2 - 300,
                o = i(window).height() / 2 - 200,
                s = window.open("https://www.facebook.com/dialog/feed?app_id=787376644686729&display=popup&name=" + t.options.facebookShareName + "&link=" + t.options.facebookShareLink + "&redirect_uri=https://facebook.com&description=" + t.options.facebookShareDescription + "&picture=" + t.options.facebookSharePicture, "popup", "width=600, height=400, top=" + o + ", left=" + e);
            window.focus && s.focus()
        }, this)), this.twitterBtn.bind(this.CLICK_EV, i.proxy(function() {
            t.pause(), t.YTAPIReady && t.youtubePlayer.pauseVideo();
            var e = i(window).width() / 2 - 300,
                o = i(window).height() / 2 - 200,
                s = window.open("https://twitter.com/intent/tweet?text=" + t.options.twitterText + "&url=" + t.options.twitterLink + "&hashtags=" + t.options.twitterHashtags + "&via=" + t.options.twitterVia, "popup", "width=600, height=400, top=" + o + ", left=" + e);
            window.focus && s.focus()
        }, this)), i(".player_shareBtn, .player_embedBtn, .player_playlistBtn, .player_infoBtn, .player_infoBtn, .player_facebookBtn, .player_twitterBtn").mouseover(function() {
            i(this).find(".player-icon-overScreen").removeClass("player-icon-overScreen").addClass("player-icon-overScreen-hover")
        }), i(".player_shareBtn, .player_embedBtn, .player_playlistBtn, .player_infoBtn, .player_infoBtn, .player_facebookBtn, .player_twitterBtn").mouseout(function() {
            i(this).find(".player-icon-overScreen-hover").removeClass("player-icon-overScreen-hover").addClass("player-icon-overScreen")
        }), this.mainContainer.find(".player_btnOverScreen").mouseover(function() {
            i(this).css("background", t.options.colorAccent)
        }), this.mainContainer.find(".player_btnOverScreen").mouseout(function() {
            i(this).css("background", "")
        }), "No" == t.options.shareShow && this.shareBtn.hide(), "No" == t.options.embedShow && this.embedBtn.hide(), "No" == t.options.infoShow && this.infoBtn.hide(), "No" == t.options.facebookShow && this.facebookBtn.hide(), "No" == t.options.twitterShow && this.twitterBtn.hide(), buttonsMargin = 5, this.positionOverScreenButtons(), this.positionShareWindowFromTop(), this.playlistBtn.bind(this.CLICK_EV, function() {
            t.toggleStretch(), t.resizeAll()
        })
    }, r.fn.toggleStretch = function() {
        var i = this;
        this.stretching ? (i.shrinkPlayer(), this.stretching = !1, this.playlistBtnIcon.removeClass("fa-player-dedent").addClass("fa-player-indent")) : (i.stretchPlayer(), this.stretching = !0, this.playlistBtnIcon.removeClass("fa-player-indent").addClass("fa-player-dedent")), this.positionControlsBtnsWrapperRight(), this.positionTimeTotal(), this.resizeVideoTrack(), this.positionOverScreenButtons(), this.positionShareWindowFromTop(), this.positionQualityWindow(), this.positionLogo(), this.positionPopup(), this.resizeBars(), this.resizeAll()
    }, r.fn.stretchPlayer = function() {
        this.element.width(this.options.videoPlayerWidth)
    }, r.fn.shrinkPlayer = function() {
        this.element.width(this.playerWidth)
    }, r.fn.positionOverScreenButtons = function(i) {
        this.element && (document.webkitIsFullScreen || document.fullscreenElement || document.mozFullScreen || i ? this.playlistBtn.hide() : "Right playlist" == this.options.playlist || "Bottom playlist" == this.options.playlist ? this.playlistBtn.show() : this.playlistBtn.hide())
    }, r.fn.positionShareWindowFromTop = function() {
        this.shareWindow.css({
            top: this.shareBtn.position().top + 5
        })
    }, r.fn.positionQualityWindow = function() {
        var i = this,
            t = parseInt(i.controlsBtnsWrapperRight.css("right").replace(/[^-\d\.]/g, ""));
        t -= "Yes" == this.options.rewindShow ? 10 : 37, i.qualityWindow_mask.css({
            right: t,
            bottom: i.controls.height() + 2
        })
    }, r.fn.hideControls = function() {
        var t = this;
        i(this.element).hover(function() {
            t.options.showAllControls || t.controls.hide(), t.controls.stop().animate({
                bottom: 0
            }, 300), t.progressIdleTrack.stop().animate({
                bottom: -6
            }, 100), t.screenBtnsWindow.stop().animate({
                right: 0
            }, 300), t.logoImg.stop().animate({
                opacity: 1
            }, 300), i(t.nowPlayingTitle).find(".player_nowPlayingText ").removeClass("player_nowrap"), t.nowPlayingTitle.stop().animate({
                left: 0
            }, 300)
        }, function() {
            t.options.showAllControls || t.controls.hide(), t.controls.stop().animate({
                bottom: -50
            }, 300), t.progressIdleTrack.stop().delay(800).animate({
                bottom: 0
            }, 300), t.screenBtnsWindow.stop().animate({
                right: -44
            }, 300), t.logoImg.stop().animate({
                opacity: 0
            }, 300), i(t.nowPlayingTitle).find(".player_nowPlayingText ").addClass("player_nowrap"), t.nowPlayingTitle.stop().animate({
                left: -t.nowPlayingTitle.width()
            }, 300)
        })
    }, r.fn.setupButtons = function() {
        var t = this;
        this.controlsBtnsWrapperRight = i("<div></div>"), this.controlsBtnsWrapperRight.addClass("player_controlsBtnsWrapperRight"), this.controls.append(this.controlsBtnsWrapperRight), "default controls" == this.options.youtubeControls && this.controlsBtnsWrapperRight.hide(), this.playBtn = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("player-icon-overScreen").addClass("fa-player-play").addClass("video_playerElement").addClass("player_themeColor").attr("id", "player_playBtn"), this.playBtnBg = i("<div />").addClass("player_playBtnBg").addClass("video_playerElement").bind(t.CLICK_EV, function() {
            t.togglePlay()
        }), this.controls.append(this.playBtnBg), this.playBtnBg.append(this.playBtn), s.iOS() && (this.ytOverlay = i("<div></div>"), this.ytOverlay.addClass("player_ytOverlay"), this.ytWrapper.append(this.ytOverlay), this.ytOverlay.bind(this.CLICK_EV, i.proxy(function() {
            t.togglePlay(), t.ytOverlay.hide()
        }, this))), this.rewindBtnWrapper = i("<div />").addClass("player_controlsBtn").addClass("video_playerElement").addClass("player_rewindBtnWrapper").bind(t.CLICK_EV, function() {
            t.seek(0), t.play(), void 0 != t.youtubePlayer && (t.youtubePlayer.seekTo(0), t.youtubePlayer.playVideo())
        }), this.rewindBtn = i("<span />").attr("aria-hidden", "true").attr("id", "player_rewindBtn").addClass("fa-player").addClass("general-player-icon").addClass("player_controlsColor player_" + this.options.instanceTheme).addClass("fa-player-repeat"), this.rewindBtnWrapper.append(this.rewindBtn), this.qualityBtnWrapper = i("<div />").addClass("player_controlsBtn").addClass("video_playerElement").addClass("player_qualityBtnWrapper").bind(t.CLICK_EV, function() {
            t.toggleQualityBtn(), t.toggleQualityWindow(), i(this).children(":first").toggleClass("fa-player-rotate-90")
        }).css("visibility", "hidden"), "youtube" != t._playlist.videos_array[t._playlist.videoid].videoType && "YouTube" != t.options.videoType || this.qualityBtnWrapper.css("visibility", "visible"), this.qualityBtn = i("<span />").attr("aria-hidden", "true").attr("id", "player_qualityBtn").addClass("fa-player").addClass("general-player-icon").addClass("player_controlsColor player_" + this.options.instanceTheme).addClass("fa-player-cog"), this.qualityBtnWrapper.append(this.qualityBtn), this.HD_indicator = i("<div />").addClass("player_HD_indicator").addClass("general-player-icon").addClass("player_qualityWindowText").text("HD").hide(), this.qualityBtnWrapper.append(this.HD_indicator), this.ccBtnWrapper = i("<div />").addClass("player_controlsBtn").addClass("video_playerElement").addClass("player_ccBtnWrapper").bind(t.CLICK_EV, function() {
            t.toggleCCBtn(), t.toggleCCWindow()
        }).css("visibility", "hidden"), "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || this.ccBtnWrapper.css("visibility", "visible"), this.ccBtn = i("<span />").attr("aria-hidden", "true").attr("id", "player_ccBtn").addClass("fa-player").addClass("general-player-icon").addClass("player_controlsColor player_" + this.options.instanceTheme).addClass("fa-player-cc"), this.ccBtnWrapper.append(this.ccBtn), this.downloadBtnLink = i("<a />").attr("href", this._playlist.videos_array[this._playlist.videoid].video_path_mp4HD).attr("download", "").hide(), this.downloadBtnWrapper = i("<div />").addClass("player_controlsBtn").addClass("video_playerElement").addClass("player_downloadBtnWrapper").bind(t.CLICK_EV, function() {
            t.gaVideoDownloaded()
        }), this.downloadBtnLink.append(this.downloadBtnWrapper), this.downloadBtn = i("<span />").attr("aria-hidden", "true").attr("id", "player_downloadBtn").addClass("fa-player").addClass("general-player-icon").addClass("player_controlsColor player_" + this.options.instanceTheme).addClass("fa-player-download"), this.downloadBtnWrapper.append(this.downloadBtn), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || "yes" != this._playlist.videos_array[this._playlist.videoid].enable_mp4_download || this.downloadBtnLink.css("visibility", "visible").show(), "Yes" == t.options.shuffle ? (this.shuffleBtnEnabled = !1, this.toggleShuffleBtn()) : this.shuffleBtnEnabled = !1, this.playButtonScreen = i("<div />"), this.playButtonScreen.addClass("player_playButtonScreen").attr("aria-hidden", "true").addClass("fa-player").addClass("fa-player-playScreen player_" + this.options.instanceTheme).hide(), this.playButtonScreen.bind(this.CLICK_EV, i.proxy(function() {
            this.togglePlay()
        }, this)), this.element && this.element.append(this.playButtonScreen), this.fsBtnWrapper = i("<div />").addClass("player_fsBtnWrapper").addClass("video_playerElement").bind(this.CLICK_EV, i.proxy(function() {
            this.toggleFullScreen()
        }, this)), this.controls.append(this.fsBtnWrapper), this.fsEnter = i("<span />"), this.fsEnter.attr("aria-hidden", "true").attr("id", "player_fsBtn").addClass("fa-player").addClass("general-player-icon").addClass("player_controlsColor player_" + this.options.instanceTheme).addClass("fa-player-expand"), this.fsBtnWrapper.append(this.fsEnter), this.fsEnterADBox = i("<div />").addClass("player_fsEnterADBox").hide(), this.elementAD.append(this.fsEnterADBox), this.fsEnterAD = i("<span />"), this.fsEnterAD.attr("aria-hidden", "true").addClass("fa-player").addClass("fa-player-expandAD").bind(this.CLICK_EV, i.proxy(function() {
            this.toggleFullScreen()
        }, this)).mouseover(function() {
            i(this).stop().animate({
                opacity: .75
            }, 200)
        }).mouseout(function() {
            i(this).stop().animate({
                opacity: 1
            }, 200)
        }), this.fsEnterADBox.append(this.fsEnterAD), 1 != this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && "yes" != this._playlist.videos_array[this._playlist.videoid].enable_mp4_download || this.controlsBtnsWrapperRight.append(this.downloadBtnLink), t.options.ccShowOnHTML5Videos && this.controlsBtnsWrapperRight.append(this.ccBtnWrapper), "Yes" == this.options.qualityShow && this.controlsBtnsWrapperRight.append(this.qualityBtnWrapper), "Yes" == this.options.rewindShow && this.controlsBtnsWrapperRight.append(this.rewindBtnWrapper), this.qualityBtnWrapper.css("visibility", "visible"), this.playButtonScreen.mouseover(function() {
            i(this).stop().animate({
                opacity: .85
            }, 200)
        }), this.playButtonScreen.mouseout(function() {
            i(this).stop().animate({
                opacity: 1
            }, 200)
        }), this.positionControlsBtnsWrapperRight()
    }, r.fn.positionControlsBtnsWrapperRight = function() {
        this.controlsBtnsWrapperRight.css({
            right: 153
        })
    }, r.fn.positionTimeTotal = function() {
        this.timeTotal.css({
            right: 153 + this.controlsBtnsWrapperRight.width() + 35 - 7
        })
    }, r.fn.createInfoWindow = function() {
        this.infoWindow = i("<div />"), this.infoWindow.addClass("player_infoWindow"), this.infoWindow.addClass("player_bg player_" + this.options.instanceTheme), this.element && this.element.append(this.infoWindow), this.infoBtnClose = i("<div />"), this.infoBtnClose.addClass("player_btnClose player_themeColorText"), this.infoWindow.append(this.infoBtnClose), this.infoBtnClose.css({
            bottom: 0
        }), this.infoBtnCloseIcon = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("fa-player-close").addClass("player_themeColor"), this.infoBtnClose.append(this.infoBtnCloseIcon), this.infoBtn.bind(this.CLICK_EV, i.proxy(function() {
            this.toggleInfoWindow()
        }, this)), this.infoBtnClose.bind(this.CLICK_EV, i.proxy(function() {
            this.toggleInfoWindow()
        }, this)), this.infoBtnClose.mouseover(function() {
            i(this).stop().animate({
                opacity: .7
            }, 200)
        }), this.infoBtnClose.mouseout(function() {
            i(this).stop().animate({
                opacity: 1
            }, 200)
        })
    }, r.fn.createQualityWindow = function() {
        var t = this;
        this.qualityWindow_mask = i("<div />"), this.qualityWindow_mask.addClass("player_qualityWindowMask"), this.element && this.element.append(this.qualityWindow_mask), this.qualityWindow = i("<div />"), this.qualityWindow.addClass("player_qualityWindow"), this.qualityWindow.addClass("player_bg player_" + this.options.instanceTheme), this.element && this.qualityWindow_mask.append(this.qualityWindow);
        var e = parseInt(t.controlsBtnsWrapperRight.css("right").replace(/[^-\d\.]/g, ""));
        t.qualityWindow_mask.css({
            right: e + t.qualityBtnWrapper.position().left + t.qualityBtnWrapper.width() / 2 - t.qualityWindow_mask.width() / 2,
            bottom: t.controls.height() + 2
        }).hide(), this.qualityWindow.css({
            top: 200
        }), this.createQualityWindowByType()
    }, r.fn.initStateYTQualityMenu = function() {
        switch (this.options.youtubeQuality) {
            case "hd1080":
                i(".hd1080").append(this.qualityCheck), this.HD_indicator.show();
                break;
            case "hd720":
                i(".hd720").append(this.qualityCheck), this.HD_indicator.show();
                break;
            case "large":
                i(".large").append(this.qualityCheck);
                break;
            case "medium":
                i(".medium").append(this.qualityCheck);
                break;
            case "small":
                i(".small").append(this.qualityCheck);
                break;
            case "tiny":
                i(".default").append(this.qualityCheck);
                break;
            case "default":
                i(".default").append(this.qualityCheck)
        }
    }, r.fn.initStateHTML5QualityMenu = function() {
        var t = this.selectedHTML5Quality || this.options.HTML5VideoQuality;
        switch (t) {
            case "HD":
                i(".HD").append(this.qualityCheck), this.HD_indicator.show();
                break;
            case "SD":
                i(".SD").append(this.qualityCheck), this.HD_indicator.hide()
        }
    }, r.fn.updateYoutubeQuality = function(i) {
        if (this.youtubePlayer.getPlaybackQuality() != i) {
            if ("unknown" == this.youtubePlayer.getPlaybackQuality()) return void this.youtubePlayer.setPlaybackQuality(i);
            var t = this.youtubePlayer.getCurrentTime();
            this.youtubePlayer.stopVideo(), this.youtubePlayer.setPlaybackQuality(i), this.youtubePlayer.playVideo(), this.youtubePlayer.seekTo(t)
        }
    }, r.fn.updateHTML5Quality = function(i) {
        var t = this.video.getCurrentTime();
        if (this.pause(), this.myVideo.canPlayType && this.myVideo.canPlayType("video/mp4").replace(/no/, "")) switch (this.canPlay = !0, i) {
            case "HD":
                this.video_path = this._playlist.videos_array[this._playlist.videoid].video_path_mp4HD;
                break;
            case "SD":
                this.video_path = this._playlist.videos_array[this._playlist.videoid].video_path_mp4SD
        }
        this.load(this.video_path, this._playlist.videoid), this.video.setCurrentTime(t), this.play()
    }, r.fn.createQualityWindowByType = function() {
        var t = this;
        this.qualityWindow.html(""), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (this.qualityWindow.append('<div class="player_list"><div class="player_qualityListItem video_playerElement hd1080"><p class="player_qualityNum general-player-icon player_controlsColor player_qualityWindowText player_' + this.options.instanceTheme + '">1080p</p><p class="player_qualityHD general-player-icon player_qualityWindowText">HD</p></div><div class="player_qualityListItem video_playerElement hd720"><p class="player_qualityNum general-player-icon player_controlsColor player_qualityWindowText player_' + this.options.instanceTheme + '">720p</p><p class="player_qualityHD general-player-icon player_qualityWindowText">HD</p></div><div class="player_qualityListItem video_playerElement large"><p class="player_qualityNum general-player-icon player_controlsColor player_qualityWindowText player_' + this.options.instanceTheme + '">480p</p></div><div class="player_qualityListItem video_playerElement medium"><p class="player_qualityNum general-player-icon player_controlsColor player_qualityWindowText player_' + this.options.instanceTheme + '">360p</p></div><div class="player_qualityListItem video_playerElement small"><p class="player_qualityNum general-player-icon player_controlsColor player_qualityWindowText player_' + this.options.instanceTheme + '">240p</p></div><div class="player_qualityListItem video_playerElement tiny"><p class="player_qualityNum general-player-icon player_controlsColor player_qualityWindowText player_' + this.options.instanceTheme + '">144p</p></div><div class="player_qualityListItem video_playerElement default"><p class="player_qualityNum general-player-icon player_controlsColor player_qualityWindowText player_' + this.options.instanceTheme + '">auto</p></div></div>'), this.qualityWindow_mask.css("height", "170px")), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || (this.qualityWindow.append('<div class="player_list"><div class="player_qualityListItem video_playerElement HD"><p class="player_qualityNum general-player-icon player_controlsColor player_qualityWindowText player_' + this.options.instanceTheme + '">HD</p><p class="player_qualityHD general-player-icon player_qualityWindowText">HD</p></div><div class="player_qualityListItem video_playerElement SD"><p class="player_qualityNum general-player-icon player_controlsColor player_qualityWindowText player_' + this.options.instanceTheme + '">SD</p></div></div>'), this.qualityWindow_mask.css("height", "50px")), this.qualityCheck = i("<span />").attr("aria-hidden", "true").attr("id", "qualityCheck").addClass("fa-player").addClass("fa-player-check").addClass("player_qualityCheck").addClass("player_qualityListItem_activeColor player_" + this.options.instanceTheme), this.qualityListItem = i(".player_qualityListItem"), i(this.qualityListItem).click(function() {
            i(".player_qualityWindow").find(".player_qualityListItem_activeColor player_" + t.options.instanceTheme).removeClass("player_qualityListItem_activeColor player_" + t.options.instanceTheme), i(this).addClass("player_qualityListItem_activeColor player_" + t.options.instanceTheme), i(this).append(t.qualityCheck), i(this).hasClass("hd1080") && (t.selectedYoutubeQuality = "hd1080", t.HD_indicator.show()), i(this).hasClass("hd720") && (t.selectedYoutubeQuality = "hd720", t.HD_indicator.show()), i(this).hasClass("large") && (t.selectedYoutubeQuality = "large", t.HD_indicator.hide()), i(this).hasClass("medium") && (t.selectedYoutubeQuality = "medium", t.HD_indicator.hide()), i(this).hasClass("small") && (t.selectedYoutubeQuality = "small", t.HD_indicator.hide()), i(this).hasClass("tiny") && (t.selectedYoutubeQuality = "tiny", t.HD_indicator.hide()), i(this).hasClass("default") && (t.selectedYoutubeQuality = "default"), i(this).hasClass("HD") && (t.selectedHTML5Quality = "HD", t.HD_indicator.show()), i(this).hasClass("SD") && (t.selectedHTML5Quality = "SD", t.HD_indicator.hide()), t.qualityOn = !0, t.toggleQualityWindow(350), t.toggleQualityBtn(), "HTML5" == t._playlist.videos_array[t._playlist.videoid].videoType || "HTML5 (self-hosted)" == t.options.videoType ? t.updateHTML5Quality(t.selectedHTML5Quality) : "youtube" != t._playlist.videos_array[t._playlist.videoid].videoType && "YouTube" != t.options.videoType || t.updateYoutubeQuality(t.selectedYoutubeQuality)
        }), "HTML5" == t._playlist.videos_array[t._playlist.videoid].videoType || "HTML5 (self-hosted)" == t.options.videoType ? t.initStateHTML5QualityMenu() : "youtube" != t._playlist.videos_array[t._playlist.videoid].videoType && "YouTube" != t.options.videoType || t.initStateYTQualityMenu()
    }, r.fn.onPlayerPlaybackQualityChange = function() {}, r.fn.createCaptionsWindow = function() {
        var t = this;
        this.ccWindow_mask = i("<div />"), this.ccWindow_mask.addClass("player_ccWindowMask"), this.element && this.element.append(this.ccWindow_mask), this.ccWindow = i("<div />"), this.ccWindow.addClass("player_ccWindow"), this.ccWindow.addClass("player_bg " + this.options.instanceTheme), this.element && this.ccWindow_mask.append(this.ccWindow), this.ccWindow_mask.css({
            right: 144,
            bottom: this.controls.height() + 2
        }).hide(), this.ccWindow.css({
            top: 200
        }), this.ccWindow.append('<div class="player_list"><div class="player_captionsListItem video_playerElement hd1080"><p class="player_captionsNum general-player-icon player_controlsColor player_ccWindowText ' + this.options.instanceTheme + '">1080p</p><p class="player_captionsHD general-player-icon player_ccWindowText">HD</p></div><div class="player_captionsListItem video_playerElement hd720"><p class="player_captionsNum general-player-icon player_controlsColor player_ccWindowText ' + this.options.instanceTheme + '">720p</p><p class="player_captionsHD general-player-icon player_ccWindowText">HD</p></div></div>'), this.captionsCheck = i("<span />").attr("aria-hidden", "true").attr("id", "captionsCheck").addClass("fa-player").addClass("fa-player-check").addClass("player_captionsCheck").addClass("player_captionsListItem_activeColor " + this.options.instanceTheme), this.captionsListItem = i(".player_captionsListItem"), i(this.captionsListItem).click(function() {
            i(".player_captionsWindow").find(".player_captionsListItem_activeColor " + t.options.instanceTheme).removeClass("player_captionsListItem_activeColor " + t.options.instanceTheme), i(this).addClass("player_captionsListItem_activeColor " + t.options.instanceTheme), i(this).append(t.captionsCheck), t.ccOn = !0, t.toggleCCWindow(350), t.toggleCCBtn()
        })
    }, r.fn.createEmbedWindow = function() {
        this.embedWindow = i("<div />"), this.embedWindow.addClass("player_embedWindow player_bg player_" + this.options.instanceTheme), this.element && this.element.append(this.embedWindow), this.embedBtnClose = i("<div />"), this.embedBtnClose.addClass("player_btnClose player_themeColorText"), this.embedWindow.append(this.embedBtnClose), this.embedBtnClose.css({
            bottom: 0
        }), this.embedWindow.css({
            top: -this.embedWindow.height()
        }), this.embedWindow.hide(), this.embedBtnCloseIcon = i("<span />").attr("aria-hidden", "true").addClass("fa-player").addClass("fa-player-close").addClass("player_themeColor"), this.embedBtnClose.append(this.embedBtnCloseIcon), this.embedBtn.bind(this.CLICK_EV, i.proxy(function() {
            this.toggleEmbedWindow()
        }, this)), this.embedBtnClose.bind(this.CLICK_EV, i.proxy(function() {
            this.toggleEmbedWindow()
        }, this)), this.embedBtnClose.mouseover(function() {
            i(this).stop().animate({
                opacity: .7
            }, 200)
        }), this.embedBtnClose.mouseout(function() {
            i(this).stop().animate({
                opacity: 1
            }, 200)
        })
    }, r.fn.setupVideoTrack = function() {
        var t = this;
        this.videoTrack = i("<div />"), this.videoTrack.addClass("player_videoTrack").addClass("player_videoTrack player_" + this.options.instanceTheme).addClass("video_playerElement"), this.controls.append(this.videoTrack), this.progressIdleTrack = i("<div />"), this.progressIdleTrack.addClass("player_progressIdleTrack").addClass("player_progressIdleTrack player_" + this.options.instanceTheme), this.options.showAllControls || this.progressIdleTrack.hide(), this.progressIdleTrack.css({
            bottom: -6
        }), this.element.append(this.progressIdleTrack), this.progressIdleDownload = i("<div />"), this.progressIdleDownload.addClass("player_progressIdleDownload").addClass("player_progressIdleDownload player_" + this.options.instanceTheme), this.progressIdleDownload.css("width", 0), this.progressIdleTrack.append(this.progressIdleDownload), this.progressIdle = i("<div />"), this.progressIdle.addClass("player_progressIdle player_themeColor"), this.progressIdleTrack.append(this.progressIdle), this.progressIdle.css("width", 0), this.progressADBg = i("<div />"), this.progressADBg.addClass("player_progressADBg").hide(), this.elementAD.append(this.progressADBg), this.progressAD = i("<div />"), this.progressAD.addClass("player_progressAD"), this.progressADBg.append(this.progressAD), this.videoTrackDownload = i("<div />"), this.videoTrackDownload.addClass("player_videoTrackDownload").addClass("player_videoTrackDownload player_" + this.options.instanceTheme), this.videoTrackDownload.css("width", 0), this.videoTrack.append(this.videoTrackDownload), this.videoTrackProgress = i("<div />"), this.videoTrackProgress.addClass("player_Progress player_themeColor"), this.videoTrackProgress.css("width", 0), this.videoTrack.append(this.videoTrackProgress), this.toolTip = i("<div />"), this.toolTip.addClass("player_toolTip player_controlsColor player_" + this.options.instanceTheme), this.toolTip.addClass("player_bg player_" + this.options.instanceTheme), this.toolTip.hide(), this.toolTip.css({
            opacity: 0,
            top: t.controls.position().top - t.toolTip.outerHeight() - 2
        }), this.mainContainer.append(this.toolTip), i(this.mainContainer).find(".video_playerElement").bind("mousemove mouseenter click", function(e) {
            t.toolTip.css("left", ""), t.toolTip.css("right", ""), t.toolTip.css("bottom", ""), t.toolTip.css("top", "");
            var o = e.pageX - i(this).offset().left - t.toolTip.outerWidth() / 2,
                s = e.pageX - i(this).offset().left - i(t.canvasWrap).outerWidth() / 2;
            if (i(this).hasClass("player_videoTrack")) {
                var l = e.pageX - t.videoTrack.offset().left,
                    n = l / t.videoTrack.width();
                if ("youtube" == t._playlist.videos_array[t._playlist.videoid].videoType || "YouTube" == t.options.videoType ? t.toolTip.text(t.secondsFormat(t.youtubePlayer.getDuration() * n)) : "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.toolTip.text(t.secondsFormat(t.video.duration * n)), t.toolTip.css("left", o + i(this).position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.isHTML5videoThumbnails() && (i(t.canvasWrap).css("left", s + i(this).position().left), i(t.canvasWrap).css("top", t.controls.position().top - i(t.canvasWrap).outerHeight() - t.toolTip.outerHeight() - 6)), 0 >= l ? (t.toolTip.hide(), "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.isHTML5videoThumbnails() && i(t.canvasWrap).hide()) : (t.toolTip.show(), "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.isHTML5videoThumbnails() && i(t.canvasWrap).show()), "live" == t.options.HTML5videoThumbnails && ("" != t.videoClone.currentSrc && (t.videoClone.currentTime = t.videoClone.duration * ((e.pageX - t.videoTrack.offset().left) / t.videoTrack.width())), t.context.drawImage(t.videoClone, 0, 0, t.videoClone.videoWidth, t.videoClone.videoHeight), t.videoClone.addEventListener("canplay", function() {
                        t.context.drawImage(t.videoClone, 0, 0, t.videoClone.videoWidth, t.videoClone.videoHeight)
                    })), "vtt" == t.options.HTML5videoThumbnails) {
                    for (var a = 0; a < t.videoElement[0].textTracks.length; a++)
                        if ("metadata" == t.videoElement[0].textTracks[a].kind) var p = t.videoElement[0].textTracks[a].cues;
                    if (!p.length) return;
                    for (var d = Math.abs((e.pageX - t.videoTrack.offset().left) * t.video.duration / t.videoTrack.width()), a = 0; a < p.length && !(p[a].startTime <= d && p[a].endTime > d); a++);
                    var h = t._playlist.videos_array[t._playlist.videoid].mp4VideoThumbnails_img.replace(p[a].text.split("#")[0], ""),
                        r = p[a].text.substr(p[a].text.indexOf("=") + 1).split(",");
                    t.vtt_thumb[0].style.backgroundImage = "url(" + h + "/" + p[a].text.split("#")[0] + ")", t.vtt_thumb[0].style.backgroundPosition = "-" + r[0] + "px -" + r[1] + "px", t.vtt_thumb[0].style.width = r[2] + "px", t.vtt_thumb[0].style.height = r[3] + "px"
                }
            } else if (i(this).hasClass("player_volumeTrack player_" + t.options.instanceTheme)) {
                var l = e.pageX - t.volumeTrack.offset().left,
                    n = l / t.volumeTrack.width();
                l >= 0 && l <= t.volumeTrack.width() && t.toolTip.text(t.options.volumeTooltipTxt + Math.ceil(100 * n) + "%"), t.toolTip.css("left", o + i(this).position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()
            } else i(this).children().hasClass("fa-player-play") ? (t.toolTip.text(t.options.playBtnTooltipTxt), t.toolTip.css("left", 0), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-pause") ? (t.toolTip.text(t.options.pauseBtnTooltipTxt), t.toolTip.css("left", 0), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-repeat") ? (t.toolTip.text(t.options.rewindBtnTooltipTxt), t.toolTip.css("left", o + i(this).position().left + t.controlsBtnsWrapperRight.position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-download") ? (t.toolTip.text(t.options.downloadVideoBtnTooltipTxt), t.toolTip.css("left", o + i(this).position().left + t.controlsBtnsWrapperRight.position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-cog") ? (t.qualityBtnEnabled ? t.toolTip.text(t.options.qualityBtnOpenedTooltipTxt) : t.toolTip.text(t.options.qualityBtnClosedTooltipTxt), o = e.pageX - i(this).offset().left - t.toolTip.outerWidth() / 2, t.toolTip.css("left", o + i(this).position().left + t.controlsBtnsWrapperRight.position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-cc") ? (t.ccBtnEnabled ? t.toolTip.text(t.options.ccBtnOpenedTooltipTxt) : t.toolTip.text(t.options.ccBtnClosedTooltipTxt), o = e.pageX - i(this).offset().left - t.toolTip.outerWidth() / 2, t.toolTip.css("left", o + i(this).position().left + t.controlsBtnsWrapperRight.position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-random") ? (t.shuffleBtnEnabled ? t.toolTip.text(t.options.shuffleBtnOnTooltipTxt) : t.toolTip.text(t.options.shuffleBtnOffTooltipTxt), o = e.pageX - i(this).offset().left - t.toolTip.outerWidth() / 2, t.toolTip.css("left", o + t._playlist.playlist.position().left + t._playlist.playlistBarInside.position().left + i(this).position().left), t.toolTip.css("top", t.mainContainer.height() - t._playlist.playlistBar.height() - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-volume-up") ? (t.toolTip.text(t.options.muteBtnTooltipTxt), o = e.pageX - i(this).offset().left - t.toolTip.outerWidth() / 2, t.toolTip.css("left", o + i(this).position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-volume-off") ? (t.toolTip.text(t.options.unmuteBtnTooltipTxt), o = e.pageX - i(this).offset().left - t.toolTip.outerWidth() / 2, t.toolTip.css("left", o + i(this).position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-expand") ? (t.toolTip.text(t.options.fullscreenBtnTooltipTxt), t.toolTip.css("left", t.element.width() - t.toolTip.outerWidth()), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-compress") ? (t.toolTip.text(t.options.exitFullscreenBtnTooltipTxt), t.toolTip.css("left", t.element.width() - t.toolTip.outerWidth()), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).hasClass("player_infoBtn") ? (t.toolTip.text(t.options.infoBtnTooltipTxt), t.toolTip.css("left", t.screenBtnsWindow.position().left - t.toolTip.outerWidth()), t.toolTip.css("top", i(this).position().top + i(this).outerHeight(!0) / 2 - t.toolTip.outerHeight() / 2), t.toolTip.show()) : i(this).hasClass("player_embedBtn") ? (t.toolTip.text(t.options.embedBtnTooltipTxt), t.toolTip.css("left", t.screenBtnsWindow.position().left - t.toolTip.outerWidth()), t.toolTip.css("top", i(this).position().top + i(this).outerHeight(!0) / 2 - t.toolTip.outerHeight() / 2), t.toolTip.show()) : i(this).hasClass("player_shareBtn") ? (t.toolTip.text(t.options.shareBtnTooltipTxt), t.toolTip.css("left", t.screenBtnsWindow.position().left - t.toolTip.outerWidth()), t.toolTip.css("top", i(this).position().top + i(this).outerHeight(!0) / 2 - t.toolTip.outerHeight() / 2), t.toolTip.show()) : i(this).hasClass("player_playlistBtn") ? (t.stretching ? t.toolTip.text(t.options.playlistBtnClosedTooltipTxt) : t.toolTip.text(t.options.playlistBtnOpenedTooltipTxt), t.toolTip.css("left", t.screenBtnsWindow.position().left - t.toolTip.outerWidth()), t.toolTip.css("top", i(this).position().top + i(this).outerHeight(!0) / 2 - t.toolTip.outerHeight() / 2), t.toolTip.show()) : i(this).hasClass("player_facebookBtn") ? (t.toolTip.text(t.options.facebookBtnTooltipTxt), t.toolTip.css("left", t.shareWindow.position().left + i(this).position().left + i(this).outerWidth(!0) / 2 - t.toolTip.outerWidth() / 2), t.toolTip.css("top", t.shareWindow.position().top - t.toolTip.outerHeight() - 5), t.toolTip.show()) : i(this).hasClass("player_twitterBtn") ? (t.toolTip.text(t.options.twitterBtnTooltipTxt), t.toolTip.css("left", t.shareWindow.position().left + i(this).position().left + i(this).outerWidth(!0) / 2 - t.toolTip.outerWidth() / 2), t.toolTip.css("top", t.shareWindow.position().top - t.toolTip.outerHeight() - 5), t.toolTip.show()) : i(this).children().hasClass("fa-player-step-forward") ? (t.toolTip.text(t.options.lastBtnTooltipTxt), t.toolTip.css("left", o + t._playlist.playlist.position().left + t._playlist.playlistBarInside.position().left + i(this).position().left), t.toolTip.css("top", t.mainContainer.height() - t._playlist.playlistBar.height() - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-step-backward") ? (t.toolTip.text(t.options.firstBtnTooltipTxt), t.toolTip.css("left", o + t._playlist.playlist.position().left + t._playlist.playlistBarInside.position().left + i(this).position().left), t.toolTip.css("top", t.mainContainer.height() - t._playlist.playlistBar.height() - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-forward") ? (t.toolTip.text(t.options.nextBtnTooltipTxt), t.toolTip.css("left", o + t._playlist.playlist.position().left + t._playlist.playlistBarInside.position().left + i(this).position().left), t.toolTip.css("top", t.mainContainer.height() - t._playlist.playlistBar.height() - t.toolTip.outerHeight() - 2), t.toolTip.show()) : i(this).children().hasClass("fa-player-backward") && (t.toolTip.text(t.options.previousBtnTooltipTxt), t.toolTip.css("left", o + t._playlist.playlist.position().left + t._playlist.playlistBarInside.position().left + i(this).position().left), t.toolTip.css("top", t.mainContainer.height() - t._playlist.playlistBar.height() - t.toolTip.outerHeight() - 2), t.toolTip.show());
            t.toolTip.stop().animate({
                opacity: 1
            }, 100), "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.isHTML5videoThumbnails() && i(t.canvasWrap).stop().animate({
                opacity: 1
            }, 100), t.isMobile.any() && (t.tooltip_timeout = setTimeout(function() {
                i(t.toolTip).stop().animate({
                    opacity: 0
                }, 50, function() {
                    t.toolTip.hide()
                })
            }, 1e3), t.tooltip_timeout = setTimeout(function() {
                i(t.canvasWrap).stop().animate({
                    opacity: 0
                }, 50, function() {
                    t.isHTML5videoThumbnails() && i(t.canvasWrap).hide()
                })
            }, 3e3))
        }), i(this.mainContainer).find(".video_playerElement").bind("mouseout", function() {
            i(t.toolTip).stop().animate({
                opacity: 0
            }, 50, function() {
                t.toolTip.hide()
            }), "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || (i(t.canvasWrap).stop().animate({
                opacity: 0
            }, 50, function() {
                t.isHTML5videoThumbnails() && i(t.canvasWrap).hide()
            }), "live" == t.options.HTML5videoThumbnails && t.context.clearRect(0, 0, t.videoClone.videoWidth, t.videoClone.videoHeight))
        }), this.videoTrack.bind(t.CLICK_EV, function(e) {
            if ("youtube" == t._playlist.videos_array[t._playlist.videoid].videoType || "YouTube" == t.options.videoType) {
                if (t.isMobile.any()) var o = e.originalEvent.changedTouches[0].pageX - t.videoTrack.offset().left;
                else var o = e.pageX - t.videoTrack.offset().left;
                t.videoTrackProgress.css("width", o);
                var s = o / t.videoTrack.width();
                t.youtubePlayer.seekTo(t.youtubePlayer.getDuration() * s)
            } else if ("HTML5" == t._playlist.videos_array[t._playlist.videoid].videoType || "HTML5 (self-hosted)" == t.options.videoType) {
                if (t.preloader.stop().animate({
                        opacity: 1
                    }, 0, function() {
                        i(this).show()
                    }), t.isMobile.any()) var o = e.originalEvent.changedTouches[0].pageX - t.videoTrack.offset().left;
                else var o = e.pageX - t.videoTrack.offset().left;
                t.videoTrackProgress.css("width", o);
                var s = o / t.videoTrack.width();
                t.video.setCurrentTime(t.video.duration * s)
            }
        }), this.progressIdleTrack.bind(t.CLICK_EV, function(i) {
            if (t.isMobile.any()) var e = i.originalEvent.changedTouches[0].pageX;
            else var e = i.pageX;
            t.progressIdle.css("width", e);
            var o = e / t.progressIdleTrack.width();
            t.video.setCurrentTime(t.video.duration * o)
        }), this.onloadeddata(i.proxy(function() {
            t.timeElapsed.text(this.secondsFormat(this.video.getCurrentTime())), t.timeTotal.text(this.secondsFormat(this.video.getEndTime())), t.resizeVideoTrack(), t.loaded = !0, t.preloader.stop().animate({
                opacity: 0
            }, 300, function() {
                i(this).hide()
            }), t.onprogress(i.proxy(function() {
                t.html5STARTED = !0, t.video.buffered.length - 1 >= 0 && (t.buffered = t.video.buffered.end(t.video.buffered.length - 1)), t.downloadWidth = t.buffered / t.video.duration * t.videoTrack.width(), t.videoTrackDownload.css("width", t.downloadWidth), t.progressIdleDownloadWidth = t.buffered / t.video.duration * t.progressIdleTrack.width(), t.progressIdleDownload.css("width", t.progressIdleDownloadWidth)
            }, t)), "live" == this.options.HTML5videoThumbnails && (t.canvas.width = t.video.videoWidth, t.canvas.height = t.video.videoHeight), i(t.canvasWrap).css({
                height: i(t.canvasWrap).width() / (t.video.videoWidth / t.video.videoHeight)
            })
        }, this)), this.ontimeupdate(i.proxy(function() {
            if (pw && "AD 5 sec + Pieces After Effects project" != t.options.videos[0].title && "Pieces After Effects project" != t.options.videos[0].title && "AD 5 sec + Space Odyssey After Effects Project" != t.options.videos[0].title && "AD 5 sec Swimwear Spring Summer" != t.options.videos[0].title && "i Create" != t.options.videos[0].title && "Swimwear Spring Summer" != t.options.videos[0].title && "PLxKkYph0URW7m7cMaHq9Df1sjNF38huut" != t.options.youtubePlaylistID && "Google drive video example" != t.options.videos[0].title && "Dropbox video example" != t.options.videos[0].title && "Livestream HLS m3u8 video example" != t.options.videos[0].title && "Openload video example" != t.options.videos[0].title && "Youtube 360 VR video" != t.options.videos[0].title && "Subtitles video example" != t.options.videos[0].title && "Live YouTube" != t.options.videos[0].title && "HTML5 Live video thumbnails" != t.options.videos[0].title && "HTML5 vtt video thumbnails" != t.options.videos[0].title && (this.element.css({
                    width: 0,
                    height: 0
                }), this.elementAD.css({
                    width: 0,
                    height: 0
                }), this.playButtonScreen.hide(), i(this.element).find(".nowPlayingText").hide(), this.controls.hide()), this.preloader.stop().animate({
                    opacity: 0
                }, 300, function() {
                    i(this).hide()
                }), this.progressWidth = this.video.currentTime / this.video.duration * this.videoTrack.width(), this.videoTrackProgress.css("width", this.progressWidth), this.progressIdleWidth = this.video.currentTime / this.video.duration * this.progressIdleTrack.width(), this.progressIdle.css("width", this.progressIdleWidth), "yes" == t._playlist.videos_array[t._playlist.videoid].popupAdShow && t.enablePopup(), t.secondsFormat(t.video.getCurrentTime()) == t._playlist.videos_array[t._playlist.videoid].midrollAD_displayTime) {
                if (t.midrollPlayed) return;
                t.midrollPlayed = !0, "yes" == t._playlist.videos_array[t._playlist.videoid].midrollAD && (t.myVideo.canPlayType && t.myVideo.canPlayType("video/mp4").replace(/no/, "") && (t.canPlay = !0, t.video_pathAD = t._playlist.videos_array[t._playlist.videoid].midroll_mp4), t.pause(), t.loadAD(t.video_pathAD, "midrollActive"), t.openAD())
            }
            if (t.secondsFormat(t.video.getCurrentTime()) >= t.secondsFormat(t.video.getEndTime()) && t.video.getEndTime() > 0) {
                if (t.postrollPlayed) return;
                t.postrollPlayed = !0, "yes" == t._playlist.videos_array[t._playlist.videoid].postrollAD && (t.myVideo.canPlayType && t.myVideo.canPlayType("video/mp4").replace(/no/, "") && (t.canPlay = !0, t.video_pathAD = t._playlist.videos_array[t._playlist.videoid].postroll_mp4), t.pause(), t.loadAD(t.video_pathAD, "postrollActive"), t.openAD())
            }
        }, this))
    }, r.fn.enablePopup = function() {
        var i = this;
        "youtube" != i._playlist.videos_array[i._playlist.videoid].videoType && "YouTube" != i.options.videoType || (this.secondsFormat(i.youtubePlayer.getCurrentTime()) == i._playlist.videos_array[i._playlist.videoid].popupAdStartTime ? (i.newAd(), i.adOn = !1, i.togglePopup()) : this.secondsFormat(i.youtubePlayer.getCurrentTime()) >= i._playlist.videos_array[i._playlist.videoid].popupAdEndTime && (i.adOn = !0, i.togglePopup())), "HTML5" != i._playlist.videos_array[i._playlist.videoid].videoType && "HTML5 (self-hosted)" != i.options.videoType || (this.secondsFormat(this.video.getCurrentTime()) == i._playlist.videos_array[i._playlist.videoid].popupAdStartTime ? (i.newAd(), i.adOn = !1, i.togglePopup()) : this.secondsFormat(this.video.getCurrentTime()) >= i._playlist.videos_array[i._playlist.videoid].popupAdEndTime && (i.adOn = !0, i.togglePopup())), "vimeo" != i._playlist.videos_array[i._playlist.videoid].videoType && "Vimeo" != i.options.videoType || (this.secondsFormat(i._playlist.vimeo_time) == i._playlist.videos_array[i._playlist.videoid].popupAdStartTime ? (i.newAd(), i.adOn = !1, i.togglePopup()) : this.secondsFormat(i._playlist.vimeo_time) >= i._playlist.videos_array[i._playlist.videoid].popupAdEndTime && (i.adOn = !0, i.togglePopup()))
    }, r.fn.removeListenerProgressAD = function() {
        var t = this;
        this.progressADBg.unbind(t.CLICK_EV), i(".player_progressADBg").css("cursor", "default")
    }, r.fn.addListenerProgressAD = function() {
        var t = this;
        this.progressADBg.bind(t.CLICK_EV, function(e) {
            if (t.isMobile.any()) var o = e.originalEvent.changedTouches[0].pageX - t.progressADBg.offset().left;
            else var o = e.pageX - t.progressADBg.offset().left;
            t.progressAD.css("width", o);
            var s = o / t.progressADBg.width();
            t.videoAD.setCurrentTime(t.videoAD.duration * s), t.preloaderAD.stop().animate({
                opacity: 1
            }, 0, function() {
                i(this).show()
            })
        }), i(".player_progressADBg").css("cursor", "pointer")
    }, r.fn.isHTML5videoThumbnails = function() {
        return "live" == this.options.HTML5videoThumbnails ? !0 : "vtt" == this.options.HTML5videoThumbnails && "" != this._playlist.videos_array[this._playlist.videoid].mp4VideoThumbnails_vtt && "undefined" != this._playlist.videos_array[this._playlist.videoid].mp4VideoThumbnails_vtt && "" != this._playlist.videos_array[this._playlist.videoid].mp4VideoThumbnails_img && "undefined" != this._playlist.videos_array[this._playlist.videoid].mp4VideoThumbnails_img ? !0 : void 0
    }, r.fn.pw = function() {
        this.element.css({
            width: 0,
            height: 0
        }), i(".player_videoPlayerAD").css({
            width: 0,
            height: 0,
            zIndex: 0
        }), i(this.element).find("#ytWrapper").css("z-index", 0), i(this.element).find("#vimeoWrapper").css("z-index", 0), i(".player_mainContainer ").hide()
    }, r.fn.resetPlayer = function() {
        this.videoTrackDownload.css("width", 0), this.videoTrackProgress.css("width", 0), this.progressIdle.css("width", 0), this.progressIdleDownload.css("width", 0), this.timeElapsed.text("00:00"), this.timeTotal.text("00:00")
    }, r.fn.resetPlayerAD = function() {
        this.progressAD.css("width", 0), this.timeLeftInside.text("(00:00)"), this.options.allowSkipAd && (this.skipAdBox.hide(), this.skipAdCount.hide()), this.fsEnterADBox.hide(), this.fsEnterADBox.hide(), this.toggleAdPlayBox.hide()
    }, r.fn.setupVolumeTrack = function() {
        var t = this;
        t.volumeTrack = i("<div />"), t.volumeTrack.addClass("player_volumeTrack").addClass("player_volumeTrack player_" + this.options.instanceTheme).addClass("video_playerElement"), this.controls.append(t.volumeTrack), t.volumeTrackProgress = i("<div />"), t.volumeTrackProgress.addClass("player_Progress player_themeColor"), t.volumeTrack.append(t.volumeTrackProgress);
        var e = i("<div />");
        e.addClass("player_volumeTrackProgressScrubber"), t.volumeTrackProgress.append(e), this.toolTipVolume = i("<div />"), this.toolTipVolume.addClass("player_toolTipVolume"), this.toolTipVolume.hide(), this.toolTipVolume.css({
            opacity: 0,
            bottom: 50
        }), this.controls.append(this.toolTipVolume);
        var o = i("<div />");
        o.addClass("player_toolTipTextVolume"), this.toolTipVolume.append(o);
        var s = i("<div />");
        s.addClass("player_toolTipTriangleVolume"), this.toolTipVolume.append(s), this.unmuteBtnWrapper = i("<div />").addClass("player_unmuteBtnWrapper").addClass("video_playerElement"), this.controls.append(this.unmuteBtnWrapper), this.unmuteBtn = i("<span />").attr("aria-hidden", "true").attr("id", "player_unmuteBtn").addClass("fa-player").addClass("general-player-icon").addClass("player_controlsColor player_" + this.options.instanceTheme).addClass("fa-player-volume-up"), this.unmuteBtnWrapper.append(this.unmuteBtn), t.muted = !1, this.initialVolumeProgressWidth = t.volumeTrackProgress.width(), this.savedVolumeBarWidth = this.initialVolumeProgressWidth, t.options.autoplay && (t.volumeTrackProgress.css("width", "0px"), i(t.mainContainer).find(".fa-player-volume-up").removeClass("fa-player-volume-up").addClass("fa-player-volume-off")), t.video.setVolume(1), t.videoAD.setVolume(1), this.unmuteBtnWrapper.bind(this.CLICK_EV, i.proxy(function() {
            t.muted ? (t.globalUnmuteHTML5(), t.hideMutedBox()) : (t.savedVolumeBarWidth = t.volumeTrackProgress.width(), i(t.mainContainer).find(".fa-player-volume-up").removeClass("fa-player-volume-up").addClass("fa-player-volume-off"), t.volumeTrackProgress.stop().animate({
                width: 0
            }, 200), t.volPerc = 0, "youtube" == t._playlist.videos_array[t._playlist.videoid].videoType || "YouTube" == t.options.videoType ? t.youtubePlayer.setVolume(t.volPerc) : "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || (bottomMargin = 70), this.setVolume(t.volPerc), t.muted = !0, t.options.autoplay && (this.video.muted = !1))
        }, this)), t.volumeTrack.bind("mousedown", function(e) {
            if (i(t.mainContainer).find(".fa-player-volume-off").removeClass("fa-player-volume-off").addClass("fa-player-volume-up"), t.isMobile.any()) var o = e.originalEvent.pageX - t.volumeTrack.offset().left;
            else var o = e.pageX - t.volumeTrack.offset().left;
            t.volPerc = o / (t.volumeTrack.width() + 2), "youtube" == t._playlist.videos_array[t._playlist.videoid].videoType || "YouTube" == t.options.videoType ? t.youtubePlayer.setVolume(100 * t.volPerc) : "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.video.setVolume(t.volPerc), t.videoAD.setVolume(t.volPerc), t.volumeTrackProgress.stop().animate({
                width: o
            }, 200), t.savedVolumeBarWidth = o, i(document).mousemove(function(e) {
                t.isMobile.any() ? t.volumeTrackProgress.stop().animate({
                        width: e.originalEvent.changedTouches[0].pageX - t.volumeTrack.offset().left
                    }, 0) : t.volumeTrackProgress.css({
                        width: e.pageX - t.volumeTrack.offset().left
                    }),
                    t.volumeTrackProgress.width() >= t.volumeTrack.width() ? t.volumeTrackProgress.stop().animate({
                        width: t.volumeTrack.width()
                    }, 0) : t.volumeTrackProgress.width() <= 0 && t.volumeTrackProgress.stop().animate({
                        width: 0
                    }, 200), "youtube" == t._playlist.videos_array[t._playlist.videoid].videoType || "YouTube" == t.options.videoType ? t.youtubePlayer.setVolume(t.volumeTrackProgress.width() / t.volumeTrack.width() * 100) : "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || (t.video.setVolume(t.volumeTrackProgress.width() / t.volumeTrack.width()), t.videoAD.setVolume(t.volumeTrackProgress.width() / t.volumeTrack.width())), e.pageX - t.volumeTrack.offset().left <= 0 ? i(t.mainContainer).find(".fa-player-volume-up").removeClass("fa-player-volume-up").addClass("fa-player-volume-off") : i(t.mainContainer).find(".fa-player-volume-off").removeClass("fa-player-volume-off").addClass("fa-player-volume-up")
            }), t.muted = !1, t.video.muted = !1, t.videoAD.muted = !1, t.videoElement.removeAttr("muted"), t.videoElementAD.removeAttr("muted"), t.hideMutedBox()
        }), i(document).mouseup(function() {
            i(document).unbind("mousemove")
        })
    }, r.fn.setupTiming = function() {
        var t = this;
        this.timeElapsed = i("<div />"), this.timeTotal = i("<div />"), this.timeLeftInside = i("<div />"), this.timeElapsed.text("00:00"), this.timeTotal.text("00:00"), this.timeLeftInside.text("(00:00)"), this.timeElapsed.addClass("player_timeElapsed player_controlsColor player_" + this.options.instanceTheme), this.timeTotal.addClass("player_timeTotal player_controlsColor player_" + this.options.instanceTheme), this.timeLeftInside.addClass("player_timeLeftInside"), this.ontimeupdate(i.proxy(function() {
            this.timeElapsed.text(t.secondsFormat(this.video.getCurrentTime())), this.timeTotal.text(t.secondsFormat(this.video.getEndTime()))
        }, this)), this.videoElement.one("canplay", i.proxy(function() {
            this.videoElement.trigger("timeupdate")
        }, this)), this.controls.append(this.timeElapsed), this.controls.append(this.timeTotal)
    }, r.fn.calculateYoutubeElapsedTime = function(i) {
        var t = this;
        this.timeElapsed.text(t.secondsFormat(i))
    }, r.fn.calculateYoutubeTotalTime = function(i) {
        var t = this;
        return this.timeTotal.text(t.secondsFormat(i)), t.secondsFormat(i)
    }, r.fn.setupElements = function() {
        i(".video_playerElement").on({
            mouseenter: function() {
                i(this).children(":first").addClass("general-player-icon-hover")
            },
            mouseleave: function() {
                i(this).children(":first").removeClass("general-player-icon-hover")
            }
        }), this.mainContainer.find(".player_themeColor").css({
            background: this.options.colorAccent
        }), this.mainContainer.find(".player_themeColorText").css({
            color: this.options.colorAccent
        }), this.mainContainer.find(".player_themeColorButton").css({
            color: this.options.colorAccent
        }), this.mainContainer.find(".player_playBtnBg").css({
            background: this.options.colorAccent
        }), this.qualityBtnEnabled || this.removeColorAccent(i("#player_qualityBtn")), this.ccBtnEnabled || this.removeColorAccent(i("#player_ccBtn"))
    }, r.fn.setupControls = function() {
        var i = this;
        this.setupVolumeTrack(), this.setupTiming(), this.createVideoOverlay(), this.createInvisibleWrapper(), this.setupButtons(), this.createInfoWindow(), this.createInfoWindowContent(), this.createNowPlayingText(), this.createEmbedWindow(), this.createEmbedWindowContent(), this.setupVideoTrack(), this.resizeVideoTrack(), this.createPopup(), this.createLogo(), this.createQualityWindow(), this.createCaptionsWindow(), this.options.allowSkipAd && (this.createSkipAd(), this.createSkipAdCount()), this.createMutedBox(), this.createAdTogglePlay(), this.createVideoAdTitleInsideAD(), "closed" == i.options.playlistBehaviourOnPageload && "vimeo" != i._playlist.videos_array[i._playlist.videoid].videoType && "Vimeo" != i.options.videoType && i.toggleStretch(), this.resizeAll()
    }, r.fn.createVideoOverlay = function() {
        if (!("" == this.options.posterImg && "" == this.options.posterImgOnVideoFinish || this.options.autoplay)) {
            var t = this;
            t.overlay = i("<div />"), t.overlay.addClass("player_overlay"), t.element && t.element.append(t.overlay);
            var e = document.createElement("img");
            if (e.onload = function() {
                    t.posterImageW = this.width, t.posterImageH = this.height
                }, e.src = t.options.posterImg, t.overlay.append(e), i(".player_overlay img").attr("id", "player_overlayPoster"), this.playButtonPoster = i("<div />"), this.playButtonPoster.addClass("player_playButtonPoster").attr("aria-hidden", "true").addClass("fa-player").addClass("fa-player-playScreen player_" + this.options.instanceTheme), "youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == t.options.videoType) var o = setInterval(function() {
                t._playlist.YTAPI_onPlayerReady && (t.addPlayButtonPosterListener(), clearInterval(o))
            }, 100);
            else this.addPlayButtonPosterListener();
            this.element && this.element.append(this.playButtonPoster), "" == this.options.posterImg && (this.overlay.hide(), this.playButtonPoster.hide())
        }
    }, r.fn.addPlayButtonPosterListener = function() {
        this.playButtonPoster.bind(this.CLICK_EV, i.proxy(function() {
            this.hideOverlay()
        }, this))
    }, r.fn.createInvisibleWrapper = function() {
        var t = this;
        t.invisibleWrapper = i("<div />").addClass("player_invisibleWrapper").hide(), t.element && t.element.append(t.invisibleWrapper)
    }, r.fn.resizeVideoTrack = function() {
        var i = this;
        i.realFullscreenActive || this.videoTrack.css({
            left: i.timeElapsed.position().left + i.timeElapsed.width() + 10,
            width: i.timeTotal.position().left - (i.timeElapsed.position().left + i.timeElapsed.width() + 10 + 10)
        })
    }, r.fn.removeHTML5elements = function() {
        var t = this;
        this.videoElement && (this.pause(), this.playButtonScreen.hide(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != t.options.videoType || (i(this.shareWindow).animate({
            opacity: 1
        }, 500, function() {
            i(this).hide()
        }), i(this.embedWindow).animate({
            opacity: 1
        }, 500, function() {
            i(this).hide()
        }), this.shareOn = !1, this.embedOn = !1))
    }, r.fn.showHTML5elements = function() {
        this.videoElement && (this.video.poster = "", this.preloader.show(), this.logoImg.show(), this.playButtonScreen.show(), this.options.showAllControls ? this.options.showAllControls && this.controls.show() : (this.controls.hide(), this.progressIdleTrack.hide(), this.nowPlayingTitle.hide(), this.screenBtnsWindow.hide()))
    }, r.fn.generateRandomNumber = function() {
        var i = this;
        i.rand = Math.floor(Math.random() * i.options.videos.length + 0), -1 != jQuery.inArray(i.rand, i.playedVideos) ? (i.playedVideos.length == i.options.videos.length && (i.playedVideos = []), i.generateRandomNumber()) : i.playedVideos.push(i.rand)
    }, r.fn.getGlobalPrerollRandomNumber = function() {
        return this.randomGlobalPrerollNum = Math.floor(Math.random() * this.globalPrerollAds_arr.length)
    }, r.fn.setPlaylistItem = function(t) {
        var e = this;
        switch (e._playlist.playlistContent.mCustomScrollbar("scrollTo", e._playlist.item_array[t]), e.mainContainer.find(".player_nowPlayingThumbnail").hide(), e.mainContainer.find(".player_thumbnail_imageSelected").removeClass("player_thumbnail_imageSelected").addClass("player_thumbnail_image"), i(e._playlist.item_array[t]).find(".player_nowPlayingThumbnail").show(), i(e._playlist.item_array[t]).find(".player_thumbnail_image").removeClass("player_thumbnail_image").addClass("player_thumbnail_imageSelected"), e.options.playlist) {
            case "Right playlist":
                e.mainContainer.find(".player_itemSelected").removeClass("player_itemSelected").addClass("player_itemUnselected"), i(e._playlist.item_array[t]).removeClass("player_itemUnselected").addClass("player_itemSelected");
                break;
            case "Bottom playlist":
                e.mainContainer.find(".player_itemSelected_bottom").removeClass("player_itemSelected_bottom").addClass("player_itemUnselected_bottom"), i(e._playlist.item_array[t]).removeClass("player_itemUnselected_bottom").addClass("player_itemSelected_bottom")
        }
        e.mainContainer.find(".player_infoTitle").html(e._playlist.videos_array[t].title), e.mainContainer.find(".player_infoText").html(e._playlist.videos_array[t].info_text), e.mainContainer.find(".player_nowPlayingText").html(e._playlist.videos_array[t].title)
    }, r.fn.showCustomControls = function() {
        var i = this;
        i.controls.css({
            zIndex: 2147483647
        }), i.screenBtnsWindow.css({
            zIndex: 2147483647
        }), i.nowPlayingTitle.css({
            zIndex: 2147483647
        }), i.progressIdleTrack && i.progressIdleTrack.css({
            zIndex: 2147483647
        })
    }, r.fn.hideCustomControls = function() {
        var i = this;
        i.controls.css({
            zIndex: 200
        }), i.screenBtnsWindow.css({
            zIndex: 200
        }), i.nowPlayingTitle.css({
            zIndex: 200
        }), i.progressIdleTrack && i.progressIdleTrack.css({
            zIndex: 200
        })
    }, r.fn.playVideoById = function(t) {
        var e = this;
        if (e.volPerc = e.volumeTrackProgress.width() / e.volumeTrack.width(), this.hideOverlay(), this.midrollPlayed = !1, this.postrollPlayed = !1, this.manageButtonsByVideoType(), this.createQualityWindowByType(), this.updateEmbedText2(), "HTML5" == e._playlist.videos_array[t].videoType || "HTML5 (self-hosted)" == e.options.videoType) {
            if (this.options.ccShowOnHTML5Videos && this.updateCCState(), "vtt" == this.options.HTML5videoThumbnails && this.updateVtt(), e.video.setVolume(e.volPerc), e.videoAD.setVolume(e.volPerc), e.element.css("visibility", "visible"), e.controlsBtnsWrapperRight.show(), e.closeAD(), e.showVideoElements(), e._playlist.videoAdPlayed = !1, e.ytWrapper.css({
                    zIndex: 0
                }), e.ytWrapper.css({
                    visibility: "hidden"
                }), e.imageWrapper.css({
                    zIndex: 0
                }), e.imageWrapper.css({
                    visibility: "hidden"
                }), e._playlist.vimeoWrapper.css({
                    zIndex: 0
                }), i("iframe#" + e.options.instanceName).attr("src", ""), e.showHTML5elements(), e.resizeAll(), void 0 != e.youtubePlayer && e._playlist.youtubePLAYING && (e.youtubePlayer.stopVideo(), e.youtubePlayer.clearVideo()), e.myVideo.canPlayType && e.myVideo.canPlayType("video/mp4").replace(/no/, "")) {
                switch (this.canPlay = !0, e.selectedHTML5Quality || e.options.HTML5VideoQuality) {
                    case "HD":
                        e.video_path = e._playlist.videos_array[t].video_path_mp4HD;
                        break;
                    case "SD":
                        e.video_path = e._playlist.videos_array[t].video_path_mp4SD
                }
                e.options.showGlobalPrerollAds ? e.video_pathAD = e.globalPrerollAds_arr[e.getGlobalPrerollRandomNumber()] : e.video_pathAD = e._playlist.videos_array[t].preroll_mp4
            }
            e.load(e.video_path, t), e.play(), ("yes" == e._playlist.videos_array[t].prerollAD || e.options.showGlobalPrerollAds) && (e.pause(), e.loadAD(e.video_pathAD), e.openAD()), this.loaded = !1
        } else "youtube" == e._playlist.videos_array[t].videoType || "YouTube" == e.options.videoType ? (e.showCustomControls(), void 0 != e.youtubePlayer && e.youtubePlayer.setVolume(100 * e.volPerc), "default controls" == e.options.youtubeControls ? (e.element.css("visibility", "hidden"), e.controlsBtnsWrapperRight.hide()) : "custom controls" == e.options.youtubeControls && (e.element.css("visibility", "visible"), e.controlsBtnsWrapperRight.show()), e.hideVideoElements(), e.closeAD(), e._playlist.videoAdPlayed = !1, e.preloader.stop().animate({
            opacity: 0
        }, 0, function() {
            i(this).hide()
        }), e.ytWrapper.css({
            zIndex: 501
        }), e.ytWrapper.css({
            visibility: "visible"
        }), e.imageWrapper.css({
            zIndex: 0
        }), e.imageWrapper.css({
            visibility: "hidden"
        }), e.removeHTML5elements(), e._playlist.vimeoWrapper.css({
            zIndex: 0
        }), i("iframe#" + e.options.instanceName).attr("src", ""), void 0 != e.youtubePlayer && (e.youtubePlayer.setSize("100%", "100%"), e.youtubePlayer.loadVideoById(e._playlist.videos_array[t].youtubeID), e.youtubePlayer.playVideo()), e.options.youtubeQuality = e.selectedYoutubeQuality, e.youtubePlayer.setPlaybackQuality(e.options.youtubeQuality), e.resizeAll()) : "vimeo" == e._playlist.videos_array[t].videoType || "Vimeo" == e.options.videoType ? (e.hideCustomControls(), e.hideVideoElements(), e.closeAD(), e._playlist.videoAdPlayed = !1, e._playlist.vimeoWrapper.css({
            zIndex: 501
        }), e.isMobile.any() ? i("#" + e.options.instanceName).attr("src", "https://player.vimeo.com/video/" + e._playlist.videos_array[t].vimeoID + "?autoplay=1?api=1&player_id=" + e.options.instanceName + "&color=" + e.options.vimeoColor) : i("#" + e.options.instanceName).attr("src", "https://player.vimeo.com/video/" + e._playlist.videos_array[t].vimeoID + "?autoplay=1?api=1&player_id=" + e.options.instanceName + "&color=" + e.options.vimeoColor), i("#" + e.options.instanceName).on("load", function() {
            e.preloader.stop().animate({
                opacity: 0
            }, 200, function() {
                i(this).hide()
            })
        }), e.removeHTML5elements(), e.ytWrapper.css({
            zIndex: 0
        }), e.ytWrapper.css({
            visibility: "hidden"
        }), e.imageWrapper.css({
            zIndex: 0
        }), e.imageWrapper.css({
            visibility: "hidden"
        }), void 0 != e.youtubePlayer && e._playlist.youtubePLAYING && (e.youtubePlayer.stopVideo(), e.youtubePlayer.clearVideo())) : "image" != e._playlist.videos_array[t].videoType && "Image" != e.options.videoType || (e.hideCustomControls(), e.hideVideoElements(), e.closeAD(), e._playlist.videoAdPlayed = !1, e.removeHTML5elements(), e.ytWrapper.css({
            zIndex: 0
        }), e.ytWrapper.css({
            visibility: "hidden"
        }), void 0 != e.youtubePlayer && e._playlist.youtubePLAYING && (e.youtubePlayer.stopVideo(), e.youtubePlayer.clearVideo()), e.imageWrapper.css({
            zIndex: 502
        }), e.imageWrapper.css({
            visibility: "visible"
        }), i(e.imageDisplayed).src = "#", i(e.imageDisplayed).removeAttr("src"), e.imageDisplayed.src = e._playlist.videos_array[t].imageUrl, i(e.imageDisplayed).on("load", function() {
            e.preloader.stop().animate({
                opacity: 0
            }, 300, function() {
                i(this).hide()
            }), e.setImageTimer()
        }))
    }, r.fn.manageButtonsByVideoType = function() {
        "HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType ? ("yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download ? (this.downloadBtnLink.css("visibility", "visible").show().children().css("transition", "all .2s ease-out"), this.downloadBtnLink.attr("href", this._playlist.videos_array[this._playlist.videoid].video_path_mp4HD)) : this.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out"), void 0 != this.ccBtnWrapper && void 0 != this._playlist.videos_array[this._playlist.videoid].ccUrl ? "undefined" != this.ccBtnWrapper && "undefined" != this._playlist.videos_array[this._playlist.videoid].ccUrl && (i(this.downloadBtnLink).is(":visible") ? i(this.ccBtnWrapper).insertAfter(this.downloadBtnLink) : this.controlsBtnsWrapperRight.prepend(this.ccBtnWrapper), this.ccBtnWrapper.css("visibility", "visible").children().css("transition", "all .2s ease-out")) : this.ccBtnWrapper.css("visibility", "hidden").children().css("transition", "all .0s ease-out")) : (void 0 != this.ccBtnWrapper && this.ccBtnWrapper.detach(), void 0 != this.downloadBtnLink && this.downloadBtnLink.css("visibility", "hidden").hide().children().css("transition", "all .0s ease-out"))
    }, r.fn.setImageTimer = function() {
        var i = this;
        clearTimeout(i.image_timeout), i.image_timeout = setTimeout(function() {
            i.shuffleBtnEnabled ? (i.generateRandomNumber(), i._playlist.videoid = i.rand, i.setPlaylistItem(i.videoid)) : i._playlist.videoid = parseInt(i._playlist.videoid) + 1, i._playlist.videos_array.length == i._playlist.videoid && (i._playlist.videoid = 0), i.setPlaylistItem(i._playlist.videoid), i.playVideoById(i._playlist.videoid)
        }, 1e3 * i._playlist.videos_array[i._playlist.videoid].imageTimer)
    }, r.fn.setSkipTimer = function() {
        if (this.options.showGlobalPrerollAds) this.counter = this.options.globalPrerollAdsSkipTimer - Math.round(this.videoAD.getCurrentTime());
        else {
            var i = this.video_pathAD || this._playlist.video_pathAD;
            i == this._playlist.videos_array[this._playlist.videoid].preroll_mp4 && (this.counter = this._playlist.videos_array[this._playlist.videoid].prerollSkipTimer - Math.round(this.videoAD.getCurrentTime())), i == this._playlist.videos_array[this._playlist.videoid].midroll_mp4 && (this.counter = this._playlist.videos_array[this._playlist.videoid].midrollSkipTimer - Math.round(this.videoAD.getCurrentTime())), i == this._playlist.videos_array[this._playlist.videoid].postroll_mp4 && (this.counter = this._playlist.videos_array[this._playlist.videoid].postrollSkipTimer - Math.round(this.videoAD.getCurrentTime()))
        }
    }, r.fn.showPoster2 = function() {
        this.mainContainer.find(".player_overlay img").attr("src", this.options.posterImgOnVideoFinish), this.overlay.show(), this.playButtonPoster.show(), this.playButtonScreen.hide(), this.poster2Showing = !0
    }, r.fn.setupEvents = function() {
        var t = this;
        this.onpause(i.proxy(function() {
            this.element.addClass("vp_paused"), this.element.removeClass("player_playing"), this.change("vp_paused")
        }, this)), this.onplay(i.proxy(function() {
            this.element.removeClass("vp_paused"), this.element.addClass("player_playing"), this.change("player_playing")
        }, this)), i(t.videoElementAD).bind("ended", function() {
            t.closeAD(), t._playlist.videoAdPlayed = !0, t.gaVideoEndedAD()
        }), i(t.videoElementAD).bind("loadeddata", function() {
            t.preloader.stop().animate({
                opacity: 0
            }, 300, function() {
                i(this).hide()
            }), t.preloaderAD.stop().animate({
                opacity: 0
            }, 300, function() {
                i(this).hide()
            }), clearInterval(t.myInterval), t.myInterval = setInterval(function() {
                t.isPaused && !t.options.allowSkipAd || (t.setSkipTimer(), i(t.skipAdCountContentLeft).find(".player_skipAdCountTitle").text(t.options.skipAdText + " " + t.counter + " s"), 0 == t.counter && (t.toggleSkipAdCount(), t.skipBoxOn = !1, t.toggleSkipAdBox(), clearInterval(t.myInterval)))
            }, 1e3)
        }), i(t.videoElementAD).bind("pause", function() {
            t.isPaused = !0
        }), i(t.videoElementAD).bind("play", function() {
            t.isPaused = !1
        }), i(t.videoElementAD).bind("timeupdate", function() {
            t.timeLeftInside.text("(-" + t.secondsFormat(t.videoAD.getEndTime() - t.videoAD.getCurrentTime()) + ")"), t.progressWidthAD = t.videoAD.currentTime / t.videoAD.duration * t.elementAD.width(), t.progressAD.css("width", t.progressWidthAD), t.preloaderAD.stop().animate({
                opacity: 0
            }, 300, function() {
                i(this).hide()
            })
        }), this.onended(i.proxy(function() {
            t.midrollPlayed = !1, t.postrollPlayed = !1, this._playlist.videoid = parseInt(this._playlist.videoid) + 1, this._playlist.videos_array.length == this._playlist.videoid && (this._playlist.videoid = 0), t.preloader && t.preloader.stop().animate({
                opacity: 1
            }, 0, function() {
                i(this).show()
            }), "Play next video" == t.options.onFinish ? (t._playlist.videoAdPlayed = !1, t.shuffleBtnEnabled ? (t.generateRandomNumber(), t._playlist.videoid = t.rand, t.setPlaylistItem(t.videoid)) : t.setPlaylistItem(t._playlist.videoid), t.playVideoById(t._playlist.videoid), t.shuffleBtnEnabled ? t.setPlaylistItem(t.randEnd) : t.setPlaylistItem(t._playlist.videoid)) : "Restart video" == t.options.onFinish ? (this.resetPlayer(), this.seek(0), this.play(), this.preloader.hide()) : "Stop video" == t.options.onFinish && (this.pause(), this.preloader.hide(), "" != this.options.posterImgOnVideoFinish && (this.resetPlayer(), this.seek(0), this.pause(), this.showPoster2()))
        }, this)), this.oncanplay(i.proxy(function() {
            this.canPlay = !0, this.controls.removeClass("player_disabled")
        }, this)), this.mainContainer.parent().hover(function() {}), this.mainContainer.parent().hover(function() {
            i(document).keydown(i.proxy(function(i) {
                return 32 == i.keyCode ? (t.togglePlay(), !1) : void 0
            }, this))
        }, function() {
            i(document).unbind("keydown")
        })
    }, window.Video = r
}(jQuery);