function getmenu(){
    var htmldata="";
    menu_list_array.length;i++){
        for(var i=0;i<menu_list_array.legth;i++){
htmldata+menu_list_array[i] + "<br>"
        }
    doucument.getElementById("").innerHTML = htmldata



}


function add_item(){
    var htmldata;
    var imgtags=<img id ="im1" src="pizzaImg.png">'
    var item=<doucument.getElemetById("aad_item").value;

    htmldata="";
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+imagtags+menu_list_array[i]+"<br>"
    }
    doucument.getElementById("display_addmenu").inner=htmldata
}