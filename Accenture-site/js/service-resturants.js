// function getRestaurant(){ 
//   var request = new XMLHttpRequest();
//   var url = "http://localhost:8080/restaurants";
//   //  request.open("get",url,true);
//   // request.send();
//   //controllo se databeso on/off
//   request.onreadystatechange = function () {
//     //controllo stato database se stato 200 è aposto es.404
//     if (this.readyState == 4 && this.status == 200) {
//       restaurants = JSON.parse(this.responseText); // JSON grande era scritto piccolo
//       printRestaurant(getRestaurant);
//       var filtro = null;

//       document.getElementById("input-search").addEventListener("keyup",function(){
//         var pattern = this.value; 
//         if(pattern){
//           filtro = restaurants.filter(function(francesco){
//             return francesco.name.indexOf(pattern)!='-1'
//           ||francesco.phone.indexOf(pattern)!='-1'
//           ||francesco.email.indexOf(pattern)!='-1'
//           ||francesco.address.streetAddress.indexOf(pattern)!='-1'

//           });
//           printRestaurant(filtro);
//         }else{
//           printRestaurant(getRestaurant);
//         }
//       });
//     }
//   };
//   // PORTO SOTTO
//   request.open("get", url, true);
//   request.send();
// }


// function printRestaurant(restaurants) {
//   document.getElementById("inner_container_list_item").innerHTML = ""; ///
//   document.getElementById("inner_container_list").style.disply = "block";
//   for (i = 0; i < restaurants.length; i++) {
//     var box_preview = document.createElement("div");
//     box_preview.className = "box-preview";

//     var box_preview_header = document.createElement("div");
//     box_preview_header.className = "box-preview-header";

//     var box_preview_body = document.createElement("div");
//     box_preview_body.className = "box-preview-body";

//     var box_preview_header_title = document.createElement("div");
//     box_preview_header_title.className = "box-preview-header-title"; ///

//     box_preview_header_title.innerHTML = restaurants[i].name;
//     box_preview_header.appendChild(box_preview_header_title);

//     var firstrow = '<div class="row">';
//     firstrow +=
//       '<div class="column-left"><p>phone</p>' + restaurants[i].phone + "</div>";
//     firstrow += '<div class="column-right">';

//     for (var k = 0; k < restaurants[i].stars; k++) {
//       firstrow += ' <img src="/Accenture-site/asset/star.png" alt="star">';
//     }
//     firstrow += "</div>";
//     firstrow += "</div>";

//     var secondrow = '<div class="row">';
//     secondrow += '<div class="column-left">' + restaurants[i].email + "</div>";
//     secondrow += '<div class="column-right"><p>email</p> </div>';
//     secondrow += "</div>";

//     var thirdrow = '<div class="row">';
//     thirdrow +=
//       '<div class="column-left">' +
//       restaurants[i].address.streetAddress +
//       restaurants[i].zipCode +
//       "</div>";
//     thirdrow += '<div class="column-right"><p>via</p> </div>';
//     thirdrow += "</div>";

//     box_preview_body.insertAdjacentHTML("afterbegin", thirdrow);
//     box_preview_body.insertAdjacentHTML("afterbegin", secondrow);
//     box_preview_body.insertAdjacentHTML("afterbegin", firstrow);

//     var box_preview_footer = document.createElement("div");
//     box_preview_footer.className = "box-preview-footer";

//     box_preview_footer.innerHTML =
//       '<a href="#" class="button button1" onclick="viewHotel(\'' + restaurants[i].id + '\')">View More</a';

//     box_preview.appendChild(box_preview_header);
//     box_preview.appendChild(box_preview_body);
//     box_preview.appendChild(box_preview_footer);

    
//       document.getElementById("inner_container_list_item").appendChild(box_preview);
//   }
// }

// function viewResturant(id) {
//   var i = 0;

//   var k = 0;

//   var restaurant = null;

//   var dettaglio_titolo = "";

 
//   var dettaglio_body = "";

//   for (i = 0; i < restaurants.length; i++)

//     if (restaurant[i].id == id) 
//     restaurant = restaurants[i];
    
//     dettaglio_titolo += "<div>" + restaurant.name + " ";
  

//   for (k = 0; k < restaurant.stars; k++) {
//     dettaglio_titolo += '<img src="/Accenture -site/asset/star.png" class="star" alt=""/>';
//   }

//   dettaglio_titolo += "</div>";

//   document.getElementById("inner_container_list").style.display = "none";

//   document.getElementById("inner_container_detail").style.display = "block";

//   dettaglio_body += '"<div>" + restaurant.longDescription + "</div>"';
 
//   dettaglio_body += '<div class="box-container">';

//   /** Aggiungo i box **/

//   dettaglio_body += getHtmlDetailBox("Number of rooms","/Accenture-site/asset/bed.png",restaurant.rooms,"yellow"
//   );

//   dettaglio_body += getHtmlDetailBox('Phone',"/Accenture-site/asset/telephone.png",restaurant.phone,'orange');
    
//   dettaglio_body += getHtmlDetailBox("Email","/Accenture-site/asset/email.png",restaurant.email,"red");

//   dettaglio_body += getHtmlDetailBox("Website","/Accenture-site/asset/internet.png",restaurant.website,"green");

//   dettaglio_body += "</div>";
  
//   dettaglio_body += "<div>";

//   dettaglio_body += "<address>Address:<br>";

//   dettaglio_body += "" + restaurant.address.streetAddress + ", " + restaurant.address.city + ", " + restaurant.address.country +" - " + restaurant.address.zipCode + "</address>";

//     dettaglio_body += "</div>";
    
//   document.getElementById("box-detail-title").innerHTML = dettaglio_titolo;

//   document.getElementById("box-detail-body").innerHTML = dettaglio_body;
// }
// function getHtmlDetailBox(title,img,info,color){
//      codice=""
//      codice+= '<div class="hotel_detail_box" style="background:' + color + '">';
//      codice+='<p> <strong>' + title + '</strong>' + '<img src = "">' + img + 'class="stars"'; 
//      codice+='<strong>' + info + '</strong>' + '</p>' + '</div>';
//      return codice;
// }
// function goback() {
//     document.getElementById("inner_container_list").style.display = "block";

//   document.getElementById("inner_container_detail").style.display = "none";
// }


function getRestaurant(){
  var request = new XMLHttpRequest(); 
  var url = "http://localhost:8080/restaurants";

  request.onreadystatechange = function() {

      if(this.readyState == 4 && this.status == 200) {
          resturants = JSON.parse(this.responseText);
          printResturants(resturants);
          var filtro = null;
              document.getElementById("input-search").addEventListener("keyup",function(){
                  var pattern = this.value;
                  if(pattern){
                      filtro = resturants.filter(function(francesco){
                          return francesco.address.streetAddress.indexOf(pattern) != '-1'
                                  || francesco.name.indexOf(pattern) != '-1'
                                  || francesco.phone.indexOf(pattern) != '-1'
                                  || francesco.email.indexOf(pattern) != '-1'
                      });
                  printResturants(filtro);
              }else {
                  printResturants(resturants);
              }
          });
      }
  }
  request.open("get",url,true);
  request.send();
}

function printResturants(restaurants){
  document.getElementById("inner_container_list_item").innerHTML = "";
  document.getElementById("inner_container_list").style.disply = "block";
  for(i=0; i<restaurants.length; i++) {
      var box_preview = document.createElement("div");
      box_preview.className = "box-preview";

      var box_preview_header = document.createElement("div");
      box_preview_header.className = "box-preview-header";

      var box_preview_body = document.createElement("div");
      box_preview_body.className = "box-preview-body";
       
      var box_preview_header_title = document.createElement("div");
      box_preview_header_title.className = "box-preview-header-title";

      box_preview_header_title.innerHTML = restaurants[i].name;
      box_preview_header.appendChild(box_preview_header_title);

      var firstrow = '<hr "><div class="row">';
      firstrow += '<div class="coloum-left"><p>PHONE</p>' + restaurants[i].phone +'</div>';
      firstrow += '<div class="coloum-right"></div>';
      firstrow += '</div>';

      var secondrow = '<div class="row">';
      secondrow += '<div class="coloum-left"><p>EMAIL</p> ' + restaurants[i].email +'</div>';
      secondrow += '<div class="coloum-right"></div>';
      secondrow += '</div>';

      var thirdrow = '<div class="row">';
      thirdrow += '<div class="coloum-left"><p>VIA</p>' + restaurants[i].address.streetAddress + restaurants[i].zipCode +'</div>';
      thirdrow += '<div class="coloum-right"></div>';
      thirdrow += '</div>';

      box_preview_body.insertAdjacentHTML("afterbegin",thirdrow);
      box_preview_body.insertAdjacentHTML("afterbegin",secondrow);
      box_preview_body.insertAdjacentHTML("afterbegin",firstrow);

      var box_preview_footer = document.createElement("div");
      box_preview_footer.className = "box-preview-footer";

      box_preview_footer.innerHTML = '<hr style="margin-left:10px;margin-right:10px"><a href="#" class="button button1" onclick="viewResturant(\''+ restaurants[i].id+'\')">View More</a>';

      box_preview.appendChild(box_preview_header);
      box_preview.appendChild(box_preview_body);
      box_preview.appendChild(box_preview_footer);

      document.getElementById("inner_container_list_item").appendChild(box_preview);
  }
}

function viewResturant(id){
  var i = 0;
  var resturant = null;
  var dettaglio_titolo = "";
  var dettaglio_body = "";

  for(i = 0; i < resturants.length; i++)
      if (resturants[i].id == id) resturant = resturants[i];

  dettaglio_titolo  += '<div>' + resturant.name + ' ';

  dettaglio_titolo  += '</div>';

  document.getElementById("inner_container_list").style.display = "none";
  document.getElementById("inner_container_detail").style.display = "block";

  dettaglio_body += '<hr><div>' + resturant.longDescription + '</div>';
  dettaglio_body += '<div class="box-container">';

  /** Aggiungo i box **/

  dettaglio_body += getDetailBox('Phone<br>', './Img/telefono.png', resturant.phone, 'orange');
  dettaglio_body += getDetailBox('Email<br>', './Img/posta.png', resturant.email, 'red');
  dettaglio_body += getDetailBox('Website<br>', './Img/website.png', resturant.website, 'green');
  dettaglio_body += '</div>';
  dettaglio_body += '<div>';
  dettaglio_body += getDetailBox('Address<br>','./Img/address.png',)
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
