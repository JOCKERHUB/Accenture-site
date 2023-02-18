function getPlace(){
    var request = new XMLHttpRequest(); 
    var url = "http://localhost:8080/places";
  
    request.onreadystatechange = function() {
  
        if(this.readyState == 4 && this.status == 200) {
            places = JSON.parse(this.responseText);
            printPlaces(places);
            var filtro = null;
                document.getElementById("input-search").addEventListener("keyup",function(){
                    var pattern = this.value;
                    if(pattern){    
                        filtro = places.filter(function(francesco){
                            return francesco.name.indexOf(pattern) != '-1'
                                    || francesco.country.indexOf(pattern) != '-1'
                                    || francesco.longitude.indexOf(pattern) != '-1'
                                    || francesco.latitude.indexOf(pattern) != '-1'
                                    
                        });
                    printPlaces(filtro);
                }else {
                    printPlaces(places);
                }
            });
        }
    }
    request.open("get",url,true);
    request.send();
  }
  
  function printPlaces(places){
    document.getElementById("inner_container_list_item").innerHTML = "";
    document.getElementById("inner_container_list").style.display = "block";
    for(i=0; i<places.length; i++) {
        var box_preview = document.createElement("div");
        box_preview.className = "box-preview";
  
        var box_preview_header = document.createElement("div");
        box_preview_header.className = "box-preview-header";
  
        var box_preview_body = document.createElement("div");
        box_preview_body.className = "box-preview-body";
         
        var box_preview_header_title = document.createElement("div");
        box_preview_header_title.className = "box-preview-header-title";
  
        box_preview_header_title.innerHTML = places[i].name;
        box_preview_header.appendChild(box_preview_header_title);
  
        var firstrow = '<hr ><div class="row">';
        firstrow += '<div class="coloum-left"><p>Country</p>' + places[i].country + '</div>';
        firstrow += '<div class="coloum-right"></div>';
        firstrow += '</div>';
  
        var secondrow = '<div class="row">';
        secondrow += '<div class="coloum-left"><p>Longitude</p> ' + places[i].longitude +'</div>';
        secondrow += '<div class="coloum-right"></div>';
        secondrow += '</div>';
  
        var thirdrow = '<div class="row">';
        thirdrow += '<div class="coloum-left"><p>Price</p>' + places[i].latitude+ places[i].zipCode +'</div>';
        thirdrow += '<div class="coloum-right"></div>';
        thirdrow += '</div>';
  
        box_preview_body.insertAdjacentHTML("afterbegin",thirdrow);
        box_preview_body.insertAdjacentHTML("afterbegin",secondrow);
        box_preview_body.insertAdjacentHTML("afterbegin",firstrow);
  
        var box_preview_footer = document.createElement("div");
        box_preview_footer.className = "box-preview-footer";
  
        box_preview_footer.innerHTML = '<hr style="margin-left:10px;margin-right:10px"><a href="#" class="button button1" onclick="viewPlace(\''+ places[i].id+'\')">View More</a>';
  
        box_preview.appendChild(box_preview_header);
        box_preview.appendChild(box_preview_body);
        box_preview.appendChild(box_preview_footer);
  
        document.getElementById("inner_container_list_item").appendChild(box_preview);
    }
  }
  
  function viewPlace(id){
    var i = 0;
    var place = null;
    var dettaglio_titolo = "";
    var dettaglio_body = "";
  
    for(i = 0; i < places.length; i++)
        if (places[i].id == id) place = places[i];
  
    dettaglio_titolo  += '<div>' + place.name + ' ';
  
    dettaglio_titolo  += '</div>';  
  
    document.getElementById("inner_container_list").style.display = "none";
    document.getElementById("inner_container_detail").style.display = "block";
  
    dettaglio_body += '<hr><div>' + place.longDescription + '</div>';
    dettaglio_body += '<div class="box-container">';
  
    /** Aggiungo i box **/
  
    dettaglio_body += getDetailBox('Country<br>', './Img/telefono.png', place.country, 'orange');
    dettaglio_body += getDetailBox('Longitude<br>', './Img/posta.png', place.longitude, 'red');
    dettaglio_body += getDetailBox('Latitude<br>', './Img/website.png', place.latitude, 'green');
    
    document.getElementById("box-detail-title").innerHTML = dettaglio_titolo;
    document.getElementById("box-detail-body").innerHTML = dettaglio_body;
  }
  
  function getDetailBox(title,img,info,color){
    codice = "";
    codice += '<div class="resturant-detail-box" style="background:' + color +' ">';
    codice += '<p><strong>'+ title +'</strong>'; 
    codice += '<img src="' + img +'" class="img">';
    codice += '<br><strong>' + info + '</strong></p>';
    codice += '</div>';
  
    return codice;
  }
  
  function goback(){
    document.getElementById("inner_container_list").style.display = "block";
    document.getElementById("inner_container_detail").style.display = "none";
  } 
  