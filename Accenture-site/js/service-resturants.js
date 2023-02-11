// // function getRestaurant(){ 
// //   var request = new XMLHttpRequest();
// //   var url = "http://localhost:8080/restaurants";
// //   //  request.open("get",url,true);
// //   // request.send();
// //   //controllo se databeso on/off
// //   request.onreadystatechange = function () {
// //     //controllo stato database se stato 200 è aposto es.404
// //     if (this.readyState == 4 && this.status == 200) {
// //       Restaurants = JSON.parse(this.responseText); // JSON grande era scritto piccolo
// //       printRestaurant(getRestaurant);
// //       var filtro = null;

// //       document.getElementById("input-search").addEventListener("keyup",function(){
// //         var pattern = this.value; 
// //         if(pattern){
// //           filtro = Restaurants.filter(function(francesco){
// //             return francesco.name.indexOf(pattern)!='-1'
// //           ||francesco.phone.indexOf(pattern)!='-1'
// //           ||francesco.email.indexOf(pattern)!='-1'

// //           });
// //           printRestaurant(filtro);
// //         }else{
// //           printRestaurant(getRestaurant);
// //         }
// //       });
// //     }
// //   }
// //   // PORTO SOTTO
// //   request.open("get", url, true);
// //   request.send();
// // }


// // function printRestaurant(Restaurants) {
// //   document.getElementById("inner_container_list_item").innerHTML = ""; ///
// //   document.getElementById("inner_container_list").style.disply = "block";
// //   for (i = 0; i < Restaurants.length; i++) {
// //     var box_preview = document.createElement("div");
// //     box_preview.className = "box-preview";

// //     var box_preview_header = document.createElement("div");
// //     box_preview_header.className = "box-preview-header";

// //     var box_preview_body = document.createElement("div");
// //     box_preview_body.className = "box-preview-body";

// //     var box_preview_header_title = document.createElement("div");
// //     box_preview_header_title.className = "box-preview-header-title"; ///

// //     box_preview_header_title.innerHTML = Restaurants[i].name;
// //     box_preview_header.appendChild(box_preview_header_title);

// //     var firstrow = '<div class="row">';
// //     firstrow +=
// //       '<div class="column-left"><p>phone</p>' + Restaurants[i].phone + "</div>";
// //     firstrow += '<div class="column-right">';

// //     for (var k = 0; k < Restaurants[i].stars; k++) {
// //       firstrow += ' <img src="/Accenture -site/asset/star.png" alt="star">';
// //     }
// //     firstrow += "</div>";
// //     firstrow += "</div>";

// //     var secondrow = '<div class="row">';
// //     secondrow += '<div class="column-left">' + Restaurants[i].email + "</div>";
// //     secondrow += '<div class="column-right"><p>email</p> </div>';
// //     secondrow += "</div>";

// //     var thirdrow = '<div class="row">';
// //     thirdrow +=
// //       '<div class="column-left">' +
// //       Restaurants[i].address.streetAddress +
// //       Restaurants[i].zipCode +
// //       "</div>";
// //     thirdrow += '<div class="column-right"><p>via</p> </div>';
// //     thirdrow += "</div>";

// //     box_preview_body.insertAdjacentHTML("afterbegin", thirdrow);
// //     box_preview_body.insertAdjacentHTML("afterbegin", secondrow);
// //     box_preview_body.insertAdjacentHTML("afterbegin", firstrow);

// //     var box_preview_footer = document.createElement("div");
// //     box_preview_footer.className = "box-preview-footer";

// //     box_preview_footer.innerHTML =
// //       '<a href="#" class="button button1" onclick="viewHotel(\'' +
// //       Restaurants[i].id +
// //       "')\">View More</a>";

// //     box_preview.appendChild(box_preview_header);
// //     box_preview.appendChild(box_preview_body);
// //     box_preview.appendChild(box_preview_footer);

// //     document
// //       .getElementById("inner_container_list_item")
// //       .appendChild(box_preview);
// //   }
// // }

// // function viewResturant(id) {
// //   var i = 0;

// //   var k = 0;

// //   var restaurant = null;

// //   var dettaglio_titolo = "";

 
// //   var dettaglio_body = "";

// //   for (i = 0; i < Restaurants.length; i++)

// //     if (restaurant[i].id == id) restaurant = Restaurants[i];
    
// //     dettaglio_titolo += "<div>" + restaurant.name + " ";
  

// //   for (k = 0; k < restaurant.stars; k++) {
// //     dettaglio_titolo += '<img src="/Accenture -site/asset/star.png" class="star" alt=""/>';
// //   }

// //   dettaglio_titolo += "</div>";

// //   document.getElementById("inner_container_list").style.display = "none";

// //   document.getElementById("inner_container_detail").style.display = "block";

// //   dettaglio_body += "<div>" + restaurant.longDescription + "</div>";
 
// //   dettaglio_body += '<div class="box-container">';

// //   /** Aggiungo i box **/

// //   dettaglio_body += getHtmlDetailBox(
// //     "Number of rooms",
// //     "assets/img/room.png",
// //     restaurant.rooms,
// //     "yellow"
// //   );

// //   dettaglio_body += getHtmlDetailBox(
// //     "Phone",
// //     "assets/img/phone.png",
// //     restaurant.phone,
// //     "orange"
// //     );
    
// //     dettaglio_body += getHtmlDetailBox(
// //     "Email",
// //     "assets/img/email.png",
// //     restaurant.email,
// //     "red"
// //   );

// //   dettaglio_body += getHtmlDetailBox(
// //     "Website",
// //     "assets/img/web.png",
// //     restaurant.website,
// //     "green"
// //   );

// //   dettaglio_body += "</div>";
  
// //   dettaglio_body += "<div>";

// //   dettaglio_body += "<address>Address:<br>";

// //   dettaglio_body +=
// //     "" +
// //     restaurant.address.streetAddress +
// //     ", " +
// //     restaurant.address.city +
// //     ", " +
// //     restaurant.address.country +
// //     " - " +
// //     restaurant.address.zipCode +
// //     "</address>";

// //     dettaglio_body += "</div>";
    
// //   document.getElementById("box-detail-title").innerHTML = dettaglio_titolo;

// //   document.getElementById("box-detail-body").innerHTML = dettaglio_body;
// // }
// // function getHtmlDetailBox(title,img,info,color){
// //      codice=""
// //      codice+= '<div class="hotel_detail_box" style="background:' + color + '">';
// //      codice+='<p> <strong>' + title + '</strong>' + '<img src = "">' + img + 'class="stars"'; 
// //      codice+='<strong>' + info + '</strong>' + '</p>' + '</div>';
// //      return codice;
// // }
// // function goback() {
// //     document.getElementById("inner_container_list").style.display = "block";

// //   document.getElementById("inner_container_detail").style.display = "none";
// // }

function getRestaurants(){
    var request = new XMLHttpRequest(); 
    var url = " http://localhost:8080/restaurants";
    
    //controllo se databeso on/off
    request.onreadystatechange = function() {
         //controllo stato database se stato 200 è aposto es.404
         if(this.readyState==4 && this.status==200) {
             restaurants = JSON.parse(this.responseText);
             printRestaurants(restaurants);   
 
             var filtro = null;
             document.getElementById("input-search").addEventListener("keyup",function(){
                 var PATTERN = this.value;
                     if(PATTERN) {
                         filtro = restaurants.filter(function(francesco) {
                         return francesco.name.indexOf(PATTERN)!='-1'
                             || francesco.phone.indexOf(PATTERN)!='-1'
                             || francesco.email.indexOf(PATTERN)!='-1'
                             || francesco.address.streetAddress.indexOf(PATTERN)!='-1'
                     });
                      
                         printRestaurants(filtro);
                     } else {printRestaurants(restaurants);}
             });
         } 
     };
 
     
    request.open("get",url,true);
    request.send(); 
 }


 
 
 
 //al click del link sull'hotel 
 function viewRestaurants(id){
     var i = 0;
     var k = 0;
     var restaurant = null;
     var dettaglio_titolo = "";
     var dettaglio_body = "";
     for(i = 0; i < restaurants.length; i++)
         if (restaurants[i].id == id) 
         restaurant= restaurants[i];
     dettaglio_titolo  += '<br><div>' + restaurant.name + ' ';
     dettaglio_titolo  += '</div>';
     document.getElementById("inner_container_list").style.display = "none";
     document.getElementById("inner_container_detail").style.display = "block";
     dettaglio_body += '<br><br><div style="margin-left:10px;margin-right:10px;text-align:justify">' + restaurant.longDescription + '</div>';
     dettaglio_body += '<br><br><div class="box-container">';
     dettaglio_body += getHtmlDetailBox('Name', '<br><img src="/immagini/home_FILL0_wght400_GRAD0_opsz48.png"><br>', restaurant.name, 'yellow');
     dettaglio_body += getHtmlDetailBox('Phone',  '<br><img src="/immagini/call_FILL0_wght400_GRAD0_opsz48.png"><br>', restaurant.phone, 'orange');
     dettaglio_body += getHtmlDetailBox('Email', '<br><img src="/immagini/mail_FILL0_wght400_GRAD0_opsz48.png"><br>',restaurant.email,'red');
     dettaglio_body += getHtmlDetailBox('Website', '<br><img src="/immagini/travel_explore_FILL0_wght400_GRAD0_opsz48.png"><br>', restaurant.website, 'green');
     dettaglio_body += '</div>';
     dettaglio_body += '<div>';
     dettaglio_body += '<address style="margin-left:10px;margin-right:10px;">Address:<br>';
     dettaglio_body += ''+restaurant.address.streetAddress+', ' +restaurant.address.city+', '+restaurant.address.country+' - '+restaurant.address.zipCode+ '</address>';
     dettaglio_body += '</div>';
     document.getElementById("box-detail-title").innerHTML = dettaglio_titolo;
     document.getElementById("box-detail-body").innerHTML = dettaglio_body;
 }
 function getHtmlDetailBox(title,img,info,color){
    codice="";
    codice+= '<div class="hotel_detail_box" style="background:' + color + '">';
    codice+= '<strong>'+ title + '</strong>' + '<img src="">' + img;
    codice+= '<br><strong>' + info + '</strong>' + '</p>';
    codice+= '</div>';
    return codice;
 }
 function goback(){
    document.getElementById("inner_container_list").style.display="block";
    document.getElementById("inner_container_detail").style.display="none";
 }
 
 //concatenazione degli attributi degli hotel
 function printRestaurants(hotels) {
    document.getElementById("inner_container_list_item").innerHTML = "";                 ///
    document.getElementById("inner_container_list").style.display = "block";
    for(i=0; i<hotels.length; i++) {
        var box_preview = document.createElement("div");
        box_preview.className = "box-preview";

        var box_preview_header = document.createElement("div");
        box_preview_header.className = "box-preview-header";

        var box_preview_body = document.createElement("div");
        box_preview_body.className = "box-preview-body";
        
        var box_preview_header_title = document.createElement("div");
        box_preview_header_title.className = "box-preview-header-title";                /// 

        box_preview_header_title.innerHTML = hotels[i].name;
        box_preview_header.appendChild(box_preview_header_title);

        var firstrow = '<div class="row">';
        firstrow += '<div class="column-left"><p>Phone</p>' +restaurants[i].phone +'</div>';
        firstrow += '<div class="column-right">';

        for(var k=0; k<hotels[i].stars; k++) {
            firstrow += '<div class="box-praview-rating"> <img src="img/stella.webp" width="10px" height="10px"> </div>';
        }
        firstrow += '</div>';
        firstrow += '</div>';
        
        var secondrow = '<div class="row">';
        secondrow += '<div class="column-right">' +restaurants[i].email +'</div>';
        secondrow += '<div class="column-left"><p>Email</p> </div>';
        secondrow += '</div>';

        var thirdrow = '<div class="row">';
        thirdrow += '<div class="column-right">' +restaurants[i].address.streetAddress +restaurants[i].zipCode +'</div>';
        thirdrow += '<div class="column-left"><p>Via</p> </div>';
        thirdrow += '</div>';

   
        box_preview_body.insertAdjacentHTML("afterbegin",thirdrow);
        box_preview_body.insertAdjacentHTML("afterbegin",secondrow);
        box_preview_body.insertAdjacentHTML("afterbegin",firstrow);

        var box_preview_footer = document.createElement("div");
        box_preview_footer.className = "box-preview-footer";

        box_preview_footer.innerHTML = '<a href="#" class="button button1" onclick="viewRestaurants(\''+restaurants[i].id+'\')">View More</a>';
        
        box_preview.appendChild(box_preview_header);
        box_preview.appendChild(box_preview_body);
        box_preview.appendChild(box_preview_footer);
        
        document.getElementById("inner_container_list_item").appendChild(box_preview);
    }
}
