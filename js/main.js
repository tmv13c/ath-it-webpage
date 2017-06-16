function FSU_writeRandomImage(images, links) {
   writeRandomImage(images, links);
}

function writeRandomImage(images, links) {
   var ry = Math.floor(Math.random() * images.length);
   if (ry == 0) ry = 1;
   if (links != null) {
      document.write('<a href='+'"' + links[ry] + '"' + '><img src="' + images[ry] + '" border="0" alt="Click here for story"></a>');
   } else {
      document.write('<img src="' + images[ry] + '" border="0" alt="FSU image">');
   }
}

function FSU_openVideo(url, openerUrl) {
   FSU_openPopup(url, 'video', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=486,height=396', openerUrl);
}

function FSU_openVideo2(url, openerUrl) {
   FSU_openPopup(url, 'video', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=486,height=346', openerUrl);
}

function FSU_openVideo3(url, openerUrl) {
   FSU_openPopup(url, 'video', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=660,height=433', openerUrl);
}
function FSU_openPopup(url, name, widgets, openerUrl) {
   openPopup(url, name, widgets, openerUrl);
}

function openPopup(url, name, widgets, openerUrl) {
   var host = location.hostname;
   window.top.name = "opener";
   var popupWin = window.open( url, name, widgets );
   if(popupWin) {cnnHasOpenPopup = 1;}
   if ( popupWin && popupWin.opener ) {
      if ( openerUrl ) {
         popupWin.opener.location = openerUrl;
      }
   }
   if ( popupWin) {
      popupWin.focus();
   }
}


/* caller url-encodes 'keywords' */
function FSU_search(type, keywords) {
   var searchURL = '';
   switch (type) {
      case 'PHFST': 
         //searchURL = 'https://cas.fsu.edu/cas?service=http://campus.fsu.edu/webapps/portal/frameset.jsp?tab_id=_1_1%26url=http%3A%2F%2Fcampus.fsu.edu%2Fwebapps%2FFSU-studentsearch-bb_bb60%2Fservlet%2FstudentSearchExternal%3FsearchStr%3D' + keywords + '&loginurl=http://campus.fsu.edu/webapps/login/bb_bb60/logincas.jsp?mc=1001';
         searchURL = 'https://cas.fsu.edu/cas?service=https://campus.fsu.edu/webapps/portal/frameset.jsp?tab_tab_group_id=_19_1%26SAurl=https%3A%2F%2Fcampus.fsu.edu%2Fwebapps%2FFSU-peoplesearch-bb_bb60%2Fservlet%2FstudentSearchExternal%3FsearchStr%3D' + keywords + '&loginurl=https://campus.fsu.edu/webapps/login/bb_bb60/logincas.jsp?mc=1001';
         break;
      case 'PHF':
         searchURL = 'http://directory.fsu.edu/cgi-bin/search/searchList.cgi?searchStr=' + keywords + '+&searchBy=lastname&submit=Search';
         break;   
      case 'DEPT':
         searchURL = 'http://fsu.edu/cgi-bin/search/new/sframes?TYPE=' + type + '&KEYWORDS=' + keywords;
         break;
      case 'FSUNEWS':
         searchURL = 'http://www.google.com/u/nole?q=site:http://www.fsu.edu/news/+&hl=en&lr=&start=90&sa=N&q=' + keywords;
         break;
      case 'GOOGLE':
      default:
         searchURL = 'http://www.fsu.edu/search/results.html?cx=001481282910879549110%3A7l5zcrhp_cg&cof=FORID%3A9&ie=UTF-8&q=' + keywords;
         break;
   }
   location.href = searchURL;
   return false;
}

function FSU_URLEncode(url) {
   var safechars = "0123456789" +            
               "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
               "abcdefghijklmnopqrstuvwxyz" +
               "-_.!~*'()";
   var hex = "0123456789ABCDEF";

   var plaintext = url;
   var encoded = "";
   for (var i = 0; i < plaintext.length; i++ ) {
      var ch = plaintext.charAt(i);
       if (ch == " ") {
          encoded += "+";
      } else if (safechars.indexOf(ch) != -1) {
          encoded += ch;
      } else {
          var charCode = ch.charCodeAt(0);
         if (charCode > 255) {
            encoded += "+";
         } else {
            encoded += "%";
            encoded += hex.charAt((charCode >> 4) & 0xF);
            encoded += hex.charAt(charCode & 0xF);
         }
      }
   } 
   return encoded;
}

function FSU_URLDecode(url) {
   var hexchars = "0123456789ABCDEFabcdef"; 
   var encoded = url;
   var plaintext = "";
   var i = 0;
   while (i < encoded.length) {
       var ch = encoded.charAt(i);
      if (ch == "+") {
          plaintext += " ";
         i++;
      } else if (ch == "%") {
         if (i < (encoded.length-2) 
               && hexchars.indexOf(encoded.charAt(i+1)) != -1 
               && hexchars.indexOf(encoded.charAt(i+2)) != -1 ) {
            plaintext += unescape(encoded.substr(i,3));
            i += 3;
         } else {
            plaintext += "%[ERROR]";
            i++;
         }
      } else {
         plaintext += ch;
         i++;
      }
   } // while
   return plaintext;
}

function FSU_writeStatsLink(id) {
   var imgURL = '';
   var type = '';
   var nocache = Math.random();
   imgURL = 'http://www.fsu.edu/.element/img/1.0/misc/spacer.gif';
   imgURL += '?' + 'id=' + id + '&nocache=' + nocache;
   document.write('<img src=' + imgURL + '" width="1" height="1" border="0" />');
}

