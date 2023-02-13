function getFlights(){
    var request = new XMLHttpRequest(); 
    var url = "http://localhost:8080/flights";
  
    request.onreadystatechange = function() {
  
        if(this.readyState == 4 && this.status == 200) {
            flights = JSON.parse(this.responseText);
            printflights(flights);
            var filtro = null;
                document.getElementById("input-search").addEventListener("keyup",function(){
                    var pattern = this.value;
                    if(pattern){    
                        filtro = flights.filter(function(francesco){
                            return francesco.departure.date.indexOf(pattern) != '-1'
                                    || francesco.name.indexOf(pattern) != '-1'
                                    || francesco.arrival.date.indexOf(pattern) != '-1'
                                    || francesco.price.indexOf(pattern) != '-1'
                                    
                        });
                    printflights(filtro);
                }else {
                    printflights(flights);
                }
            });
        }
    }
    request.open("get",url,true);
    request.send();
  }
  
  function printResturants(flight){
    document.getElementById("inner_container_list_item").innerHTML = "";
    document.getElementById("inner_container_list").style.disply = "block";
    for(i=0; i<flight.length; i++) {
        var box_preview = document.createElement("div");
        box_preview.className = "box-preview";
  
        var box_preview_header = document.createElement("div");
        box_preview_header.className = "box-preview-header";
  
        var box_preview_body = document.createElement("div");
        box_preview_body.className = "box-preview-body";
         
        var box_preview_header_title = document.createElement("div");
        box_preview_header_title.className = "box-preview-header-title";
  
        box_preview_header_title.innerHTML = flight[i].name;
        box_preview_header.appendChild(box_preview_header_title);
  
        var firstrow = '<hr style="margin-left:10px;margin-right:10px"><div class="row">';
        firstrow += '<div class="coloum-left"><p>Departure</p>' + flight[i].departure.date+'</div>';
        firstrow += '<div class="coloum-right"></div>';
        firstrow += '</div>';
  
        var secondrow = '<div class="row">';
        secondrow += '<div class="coloum-left"><p>Arrival</p> ' + flight[i].arrival.date +'</div>';
        secondrow += '<div class="coloum-right"></div>';
        secondrow += '</div>';
  
        var thirdrow = '<div class="row">';
        thirdrow += '<div class="coloum-left"><p>Price</p>' + flight[i].price+ flight[i].zipCode +'</div>';
        thirdrow += '<div class="coloum-right"></div>';
        thirdrow += '</div>';
  
        box_preview_body.insertAdjacentHTML("afterbegin",thirdrow);
        box_preview_body.insertAdjacentHTML("afterbegin",secondrow);
        box_preview_body.insertAdjacentHTML("afterbegin",firstrow);
  
        var box_preview_footer = document.createElement("div");
        box_preview_footer.className = "box-preview-footer";
  
        box_preview_footer.innerHTML = '<hr style="margin-left:10px;margin-right:10px"><a href="#" class="button button1" onclick="viewFlight(\''+ flight[i].id+'\')">View More</a>';
  
        box_preview.appendChild(box_preview_header);
        box_preview.appendChild(box_preview_body);
        box_preview.appendChild(box_preview_footer);
  
        document.getElementById("inner_container_list_item").appendChild(box_preview);
    }
  }
  
  function viewFlight(id){
    var i = 0;
    var flight = null;
    var dettaglio_titolo = "";
    var dettaglio_body = "";
  
    for(i = 0; i < flights.length; i++)
        if (flights[i].id == id) flight = flights[i];
  
    dettaglio_titolo  += '<div>' + flight.name + ' ';
  
    dettaglio_titolo  += '</div>';
  
    document.getElementById("inner_container_list").style.display = "none";
    document.getElementById("inner_container_detail").style.display = "block";
  
    dettaglio_body += '<hr><div>' + flight.longDescription + '</div>';
    dettaglio_body += '<div class="box-container">';
  
    /** Aggiungo i box **/
  
    dettaglio_body += getDetailBox('Departure<br>', './Img/telefono.png', departure.date, 'orange');
    dettaglio_body += getDetailBox('Arrival<br>', './Img/posta.png', arrival.date, 'red');
    dettaglio_body += getDetailBox('Price<br>', './Img/website.png', price, 'green');
    dettaglio_body += '</div>';
    dettaglio_body += '<div>';
    dettaglio_body += '<address style="text-align: left;">Address:<br>';    
    dettaglio_body += ''+ resturant.address.streetAddress+', ' + resturant.address.city+', '+ resturant.address.country+' , '+ resturant.address.zipCode+ '</address>';
    dettaglio_body += '</div>';
  
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
  