var umVersion="0.2"
    var hash = window.location.hash;
    var language = hash.split("#")[1];
    var langArr=["en","fr","es","es-rES","es-rMX","es-419"];
    if($.inArray(language, langArr) === -1) {
      language = "en";
    }

    if(language=="es-rES"||language=="es-rMX"||language=="es-419"){
      language="es";
    }
    var domainUrl = "http://www.alcatel-move.com/tracker/help";
    //var domainUrl = "http://127.0.0.1:9096";    
    window.location.replace(domainUrl+"/pdfjs/web/viewer.html?file=GPS_Tracker_UM_"+language+".pdf?"+umVersion)
