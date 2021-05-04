
//ADD YOUR FIREBASE LINKS HERE
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
   
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
    onsole.log("room name-"+Room_names);
    row = "<cdiv class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+= row;
          //End code
          });});}
    getData();
    function addRoom ()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name" , room_name);
    window.location="kwitter_page.html";
    }
    function redirectToRoomName(name)
    {console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
    }
    function logout() {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "kwitter.html";
    }
