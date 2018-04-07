$.ajax({ 
   type : "GET", 
   url : "https://api.fortnitetracker.com/v1/profile/pc/mrrobin123",
   headers: {'trn-api-key':'f99edc6e-0930-43d3-82ea-3a824d15ea99'},
   dataType: "text",
   success : function(data) { 
       //set your variable to the result 
   }, 
   error : function(data) { 
     //handle the error 
   } 
 });

$.ajax({ 
   type : "GET", 
   url : "https://api.twitch.tv/kraken/channels/marwangaming",
   headers: {'client-id': 'j47taumj3y0tjjl7zj0vraoqazur37'},
   dataType: "text",
   success : function(data) { 
       //set your variable to the result 
   }, 
   error : function(data) { 
     //handle the error 
   } 
 });