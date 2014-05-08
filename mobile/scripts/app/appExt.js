window.gdd = window.gdd || {};

gdd.init = {

  


    
    baseApiUrl: null,

    
    // Wait for Cordova to load
    indexPageLoaded: function () {
        //alert("Index Page Loaded")

        gdd.init.deviceIsReady = false;

        document.addEventListener("deviceready", gdd.init.onDeviceReady, false);

        //alert("Function: " + gdd.init.runIndexPageLoadingProcess)
        gdd.init.runIndexPageLoadingProcess();
    },

    isNativeApp: function () {

        if ((document.URL.indexOf('http://') === -1) && (document.URL.indexOf('https://') === -1)) {
            return true
        } else {
            return false
        }
    },

    pathToIndexPage: "",

    indexPagePath: function () {

        return gdd.init.pathToIndexPage;
        //if (gdd.init.indexPageIsActive()) {
        //    return location.href.substring(0, location.href.indexOf('index')) + "index.html";
        //} else {
        //    return location.origin + location.pathname.replace(location.pathname.substring(location.pathname.indexOf("mobile")), 'index.html');
        //}

    },

    indexPageIsActive: function () {
        if (location.href.indexOf('index') !== -1) {
            return true;
        } else {
            return false;

        }
    },

    onDeviceReady: function () {
        //alert("Device Is Ready")
        try {
            gdd.init.deviceIsReady = true;

            try {
               
                StatusBar.overlaysWebView(false);
                StatusBar.hide();
            } catch (e) {
               // alert("STATUS BAR ERROR: " + JSON.stringify(e))
            }
           

            setTimeout(function () {
                navigator.splashscreen.hide();
            }, 3000)



            //alert("Device Is Ready is set")

            document.addEventListener("resume", gdd.init.onAppResume, false);

            document.addEventListener("menubutton", gdd.init.onMenuKeyDown, false);

            document.addEventListener("offline", gdd.init.wentOffline, false);

            document.addEventListener("online", gdd.init.wentOnline, false);

        }
        catch (err) {
            gdd.init.showPageIndexError("The following error occured during the onDeviceReady event: " + err + ". Please check you are connected to the Internet and try again.")
        }

    },

    isReady: function () {
        //return false;
        //alert("gdd.init.requireJsComplete=" + gdd.init.requireJsComplete)
        if (gdd.init.requireJsComplete) {
            if (gdd.views) {

                if ($.mobile) {
                    //alert("$.mobile is ready")
                    if (gdd.init.isNativeApp()) {
                        //alert("is native app")
                        //alert("window.gdd.init.deviceIsReady" + gdd.init.deviceIsReady)
                        if (gdd.init.deviceIsReady) {
                            //alert("ir deviceIsReady=true")
                            return true
                        } else {
                            // alert("ir deviceIsReady=false")
                            return false
                        }

                    } else {
                        // alert("ir isNativeApp=false")
                        return true;
                    }
                } else {
                    //alert("$.mobile is NOT ready")
                    return false;
                }


            } else {
                //alert("ir views is false")
                return false;
            }
        } else {
            //  alert("ir requirejs is false")
            return false;
        }
    },

    onLine: function () {

        if (window.navigator.onLine) {
            // alert("navigator ONLINE")
            return true
        } else {
            // alert("navigator OFFLINE")
            return false
        }

    },

    onAppResume: function () {
        try {
            var restart = false;
            try {
                // alert(JSON.stringify(gdd.views.pageinfo))
                if (gdd.views.pageinfo) {
                    //alert(gdd.models.session.isSignedIn())
                    if (!gdd.models.session.isSignedIn()) {
                        restart = true
                    }
                } else {
                    restart = true;
                }
            } catch (e) {
                // alert("oops:" + err)
                restart = true;
            }
            // alert("restart: " + restart)
            if (restart) {
                if (gdd.init.indexPagePath()) {
                    // alert("href: " + gdd.init.indexPagePath())
                    window.location.href = gdd.init.indexPagePath()
                } else {
                    alert("While the application was dorment, the session data was lost. Please restart this appication.")
                }
            }

            //alert("App resume")
            //if ((gdd.init.isReady()) && (gdd.init.onLine())) {

            //    gdd.views.utils.processAppStart();
            //} else {

            //    if (gdd.init.indexPageIsActive()) {
            //        runProgressState()
            //    } else {
            //        window.location.href = gdd.init.indexPagePath();
            //    }
            //}
            //try {
            //    alert("pathToIndexPage:" + gdd.init.pathToIndexPage)

            //}
            //catch (err) {
            //    alert("index path error:" + err)

            //}
            //try {
            //    alert("views:" + JSON.stringify( gdd.views.pageinfo))
            //}
            //catch (err) {
            //    alert("views error:" + err)
            //}
            //try {
            //    alert("location:" + JSON.stringify(location))
            //    alert("Final Big Boy:" + location.origin + location.pathname.replace(location.pathname.substring(location.pathname.indexOf("mobile")), 'index.html'))

            //} catch (e) {
            //    alert("big boy error:" + err)

            //}

            //try {
            //    alert("href: " + location.href)
            //} catch (e) {
            //    alert("href err:" + err)

            //}

            //location.reload()

            //if (gdd.init.indexPageIsActive()) {
            //    gdd.init.runIndexPageLoadingProcess();
            //} else {
            //    window.location.href = gdd.init.indexPagePath();
            //}
        }
        catch (err) {
            gdd.init.showPageIndexError("The following error occurred when the application came online: " + err)
        }
    },

    wentOnline: function () {
        try {
            //alert("Work on this")

            //if ((gdd.init.isReady()) && (gdd.init.onLine())) {

            //    if (window.gdd.appWentOffline) {
            //        $.mobile.changePage(gdd.views.pageinfo.home.path)
            //        window.gdd.appWentOffline = false;
            //    }

            //} else {
            //    // alert("Online fired not ready not online")
            //    if (gdd.init.indexPageIsActive()) {
            //        runProgressState()
            //    } else {
            //        window.location.href = gdd.init.indexPagePath();
            //    }
            //}
        }
        catch (err) {
            gdd.init.showPageIndexError("The following error occured in the application as it came online: " + err)
        }

    },

    wentOffline: function () {
        try {
            //// alert("offline fired")
            //window.gdd.appWentOffline = true;

            //if (gdd.init.indexPageIsActive()) {
            //    //alert("offline fires we are on index page")
            //    gdd.init.showPageIndexError("Please check you are connected to the internet. Once you are reconnected please click try again")
            //} else {
            //    // alert("offline go to index page")
            //    window.location.href = gdd.init.indexPagePath();
            //}

        }
        catch (err) {

            gdd.init.showPageIndexError("The following occurred when app went offline: " + err);
        }

    },

    onMenuKeyDown: function () {
        try {
            //alert("Go Home")
            //$.mobile.changePage(gdd.views.pageinfo.home.path)
        }
        catch (err) {

        }

    },

    showPageIndexError: function (err) {
        // alert("page index error" + JSON.stringify(err))
        var progMsg = document.getElementById("progressState");

        progMsg.innerHTML = err;
       

    },

    progressStateInterval: {},

    runIndexPageLoadingProcess: function () {

        var attemptCount = 0;

        var rotateSplash = function (done_clb) {

            var splshDuration = 750;

            var fadeMeToggle = function fade(type, el, duration, IEsupport, clb) {

                try {
                    if (el) {


                        var isIn = (type == 'in'),
                            IE = (IEsupport) ? IEsupport : false,
                            opacity = isIn ? 0 : 1,
                            interval = 50,
                            gap = interval / duration;

                        if (isIn) {
                            el.style.display = 'block';
                            el.style.opacity = opacity;
                            if (IE) {
                                el.style.filter = 'alpha(opacity=' + opacity + ')';
                                el.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity + ')';
                            }
                        }

                        function func() {
                            opacity = isIn ? opacity + gap : opacity - gap;
                            el.style.opacity = opacity;
                            if (IE) {
                                el.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
                                el.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity * 100 + ')';
                            }
                            if (opacity <= 0 || opacity >= 1) { window.clearInterval(fading); clb() }

                            if (opacity <= 0) { el.style.display = "none"; }
                        }
                        var fading = window.setInterval(func, interval);

                    }
                }
                catch (err) {

                }
            }


            var splshNext = document.getElementById(splshView.getAttribute("data-nextid"));

            fadeMeToggle("out", splshView, splshDuration, true, function () {
                fadeMeToggle("in", splshNext, splshDuration, true, function () {
                    splshView = splshNext
                    done_clb();
                })
            })

        }

        var checkProgress = function () {
            if ((gdd.init.onLine()) && (gdd.init.isReady())) {

                         
                gdd.app.initializeApplication()

                var runSplashTransition = function () {

                    setTimeout(function () {

                        rotateSplash(function () {
                            if (gdd.init.indexPageIsActive()) {
                                runSplashTransition();
                            } 

                        })

                    }, 3000);

                }

                runSplashTransition();

               
            } else {
                attemptCount += 1;
                if (attemptCount === 5) {
                  
                    document.getElementById("btnIdxErrConn").style.display = 'block';
                    progMsg.innerHTML = "You are not connected to the Internet.";

                } else {
                  

                    setTimeout(function () {

                        rotateSplash(function () {
                            progMsg.innerHTML = stateArr[attemptCount]

                            checkProgress();
                        })

                    }, 3000);


                   
                   
                }
            }
        }

        var stateArr = new Array()
        stateArr[0] = "warming up..."
        stateArr[1] = "warming up..."
        stateArr[2] = "loading files..."
        stateArr[3] = "still working..."
        stateArr[4] = "please be patient..."
        stateArr[5] = "finalizing..."



        //alert("Loading process")
        document.getElementById("btnIdxSignIn").style.display = 'none';
        document.getElementById("btnIdxStart").style.display = 'none';
        document.getElementById("btnIdxErrConn").style.display = 'none';
        document.getElementById("progressState").style.display = 'block';
       var progMsg = document.getElementById("progressState");

       
        var splshView = document.getElementById("splashOne");

        checkProgress();


    },

    appInfo: ""
}























