var firebaseConfig = {
  apiKey: "AIzaSyDv_SgDk6PGZflSi7Lt5w46_2OoDlBxGl4",
  authDomain: "kwitter-project-1ed3f.firebaseapp.com",
  databaseURL: "https://kwitter-project-1ed3f-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-1ed3f",
  storageBucket: "kwitter-project-1ed3f.appspot.com",
  messagingSenderId: "933984423356",
  appId: "1:933984423356:web:c791a346db908ce1462fb9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + " " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name- " + Room_names);
 row = "<div class='room_name id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_room.html";
}