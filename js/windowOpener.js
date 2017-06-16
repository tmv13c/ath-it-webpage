function NewWindow(mypage,myname,w,h,scroll){
	LeftPosition=(screen.width)?(screen.width-w)/2:100;
	TopPosition=(screen.height)?(screen.height-h)/2:100;
	settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=yes,directories=yes,status=yes,menubar=yes,toolbar=yes,resizable=yes';
	window.open(mypage,myname,settings);
}
