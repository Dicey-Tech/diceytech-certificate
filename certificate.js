$(document).ready(function() {
    document.getElementById("action-print-view").addEventListener("click", printView);
});
function printView(event) {
    event.preventDefault();
    window.print();
}
function popupWindow(url, title, width, height) {
    // popup a window at center of the screen.
    var left = (screen.width/2)-(width/2);
    var top = (screen.height/2)-(height/2);
    var popupWindow = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width='+width+', height='+height+', top='+top+', left='+left);
    popupWindow.opener = null;
    return popupWindow;
}