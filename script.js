$( document ).ready(function() {
 
 $( "#submit" ).click(function() {
  //alert( "you have clicked" );
 
  $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + "YYWZHVQ5HILD3IBYRQ0ZPFYGVITKCURIKIA0ORWLMXAIOHFH" +
        "&client_secret=" + "DPFVKUQQGZBAUHNZRGHLBSPONVIIQUU0XLNJYF55M1Y2ZWWI" +
        "&v=20151209" +
        "&near=nyc" +
        "&query=pizza",
        function(data) {
         var name=(data["response"]["venues"][0]["name"]); 
         console.log(name);
         $("#results").append(name);
            // Callback code goes here. This gets executed after receiving data from the Foursquare API.
        });
 });
 
 
 
 
 
 
 
});
 