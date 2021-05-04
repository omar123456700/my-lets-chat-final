//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAK_GXHuG_7v9TeI5WMynNhYOuVSJCO0Pw",
      authDomain: "kwitter-project-e6792.firebaseapp.com",
      databaseURL: "https://kwitter-project-e6792-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-e6792",
      storageBucket: "kwitter-project-e6792.appspot.com",
      messagingSenderId: "311801638042",
      appId: "1:311801638042:web:cfb8f3409a2dd5c2a04323",
      measurementId: "G-YW12NTG9Z0"
    };
    // Initialize Firebase
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
like=message_data['like'];
message=message_data['message'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
 message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
  like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
  row = name_with_tag + message_with_tag +like_button + span_with_tag;
   document.getElementById("output").innerHTML += row;
   

//End code
      } });  }); }
getData();
function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function updateLike(message_id)
{
      console.log(message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes =Number(likes) +1;
      firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}