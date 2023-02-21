//recuperare dati dal database
//post sono all'interno del budi
//la put modificare dati nel database
//delete per cancellare dati

function getHotels(){ 
  var request = new XMLHttpRequest();
  var url = "http://localhost:8080/hotels";
  //  request.open("get",url,true);
  // request.send();
  //controllo se databeso on/off
  request.onreadystatechange = function () {
    //controllo stato database se stato 200 è aposto es.404
    if (this.readyState == 4 && this.status == 200) {
      hotels = JSON.parse(this.responseText); // JSON grande era scritto piccolo
      printHotels(hotels);
      var filtro = null;

      document.getElementById("input-search").addEventListener("keyup",function(){
        var pattern = this.value;   
        if(pattern){
          filtro = hotels.filter(function(francesco){
            return francesco.name.indexOf(pattern)!='-1'
          ||francesco.phone.indexOf(pattern)!='-1'
          ||francesco.email.indexOf(pattern)!='-1'

          });
          printHotels(filtro);
        }else{
          printHotels(hotels);
        }
      });
    }
  }
  // PORTO SOTTO                
  request.open("get", url, true);
  request.send();
}

//al click del link sull'hotel




//concatenazione degli attributi degli hotel
function printHotels(hotels) {
  document.getElementById("inner_container_list_item").innerHTML = ""; ///
  document.getElementById("inner_container_list").style.display = "block";
  for (i = 0; i < hotels.length; i++) {
    var box_preview = document.createElement("div");
    box_preview.className = "box-preview";

    var box_preview_header = document.createElement("div");
    box_preview_header.className = "box-preview-header";

    var box_preview_body = document.createElement("div");
    box_preview_body.className = "box-preview-body";

    var box_preview_header_title = document.createElement("div");
    box_preview_header_title.className = "box-preview-header-title"; ///

    box_preview_header_title.innerHTML = hotels[i].name;
    box_preview_header.appendChild(box_preview_header_title);

    var firstrow = '<hr><div class="row">';
    firstrow +=
      '<div class="column-left"><p>PHONE</p>' + hotels[i].phone + "</div>";
    firstrow += '<div class="column-right">';

    for (var k = 0; k < hotels[i].stars; k++) {
      firstrow += ' <img src="/Accenture-site/asset/star.png" alt="star">';
    }
    firstrow += "</div>";
    firstrow += "</div>";

    var secondrow = '<div class="row">';
    secondrow += '<div class="column-right"><p>EMAIL</p> </div>';
    secondrow += '<div class="column-left">' + hotels[i].email + "</div>";
    secondrow += "</div>";

    var thirdrow = '<div class="row">';
    thirdrow += '<div class="column-right"><p>VIA</p> </div>';
    thirdrow +=
      '<div class="column-left">' +
      hotels[i].address.streetAddress +
      hotels[i].zipCode +
      "</div>";
    thirdrow += "</div>";

    box_preview_body.insertAdjacentHTML("afterbegin", thirdrow);
    box_preview_body.insertAdjacentHTML("afterbegin", secondrow);
    box_preview_body.insertAdjacentHTML("afterbegin", firstrow);

    var box_preview_footer = document.createElement("div");
    box_preview_footer.className = "box-preview-footer";

    box_preview_footer.innerHTML =
      '<a href="#" class="button button1" onclick="viewHotel(\'' +
      hotels[i].id +
      "')\">View More</a>";

    box_preview.appendChild(box_preview_header);
    box_preview.appendChild(box_preview_body);
    box_preview.appendChild(box_preview_footer);

    document
      .getElementById("inner_container_list_item")
      .appendChild(box_preview);
  }
}


function viewHotel(id) {
  var i = 0;

  var k = 0;

  var hotel = null;

  var dettaglio_titolo = "";

  var dettaglio_body = "";

  for (i = 0; i < hotels.length; i++) if (hotels[i].id == id) hotel = hotels[i];

  dettaglio_titolo += "<div class='titolo-viewmore'>" + hotel.name + " ";

  for (k = 0; k < hotel.stars; k++) {
    dettaglio_titolo += '<img src="/Accenture-site/asset/star.png" class="star" alt=""/>';
  }

  dettaglio_titolo += "</div>";

  document.getElementById("inner_container_list").style.display = "none";

  document.getElementById("inner_container_detail").style.display = "block";

  dettaglio_body += "<div class='lungadescrizione'>" + hotel.longDescription + "</div>";

  dettaglio_body += '<div class="box-container">';

  /** Aggiungo i box **/

  dettaglio_body += getHtmlDetailBox(
    "Number of rooms ",
    '<img src="/Accenture-site/asset/bed.png"/><br>',
    hotel.rooms,
    "white"
    );
  
  dettaglio_body += getHtmlDetailBox(
    "Phone",
    '<img src="/Accenture-site/asset/telephone.png"/>',
    hotel.phone,
    "white"
  );

  dettaglio_body += getHtmlDetailBox(
    "Email<br>",
    '<img src="/Accenture-site/asset/mail.png"/>',
    hotel.email,
    "white"
  );

  dettaglio_body += getHtmlDetailBox(
    "Website<br>",
    '<img src="/Accenture-site/asset/internet.png"/>',
    hotel.website,
    "white"
  );

 

  dettaglio_body += "</div>";

  document.getElementById("box-detail-title").innerHTML = dettaglio_titolo;

  document.getElementById("box-detail-body").innerHTML = dettaglio_body;
}
function getHtmlDetailBox(title,img,info,color){
     codice=""
     codice+= '<div class="hotel_detail_box" style="background:' + color + '">';
     codice+='<p> <strong>' + title + '</strong>' + '<img src = "">' + img; 
     codice+='<strong>' + info + '</strong>' + '</p>' + '</div>';
     return codice;
}
function goback() {
    document.getElementById("inner_container_list").style.display = "block";

  document.getElementById("inner_container_detail").style.display = "none";
}

