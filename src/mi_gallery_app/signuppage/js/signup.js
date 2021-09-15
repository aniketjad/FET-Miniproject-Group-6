$(document).ready(function(){
  console.log('ready');

      $('#registerBtn').click((e)=>{
              e.preventDefault();
              var uName=$("#name").val();
              var uEmail=$("#email").val();
              var uMobilenumber=$("#phone").val();
              var uPassword=$("#password").val();
             

          //Post User details to db.json
          $.get("http://localhost:3000/users", function (data){

          let prevID = Number(data[data.length - 1]['id']);
          prevID = prevID +1;
          let userPlaylist = [
              "1",
              "3",
              "5",
              "8"
          ]
          var users={"id":prevID,"name":uName,"email":uEmail,"mobileNumber":uMobilenumber,"password":uPassword }
              console.log(users);
              $.ajax({           
                  method:"POST",               
                  dataType:"json",
                  async:false,
                  url:"http://localhost:3000/users",  
                  data:users,
                  success: (response)=>{
                          alert("Registration Successful!");
                          console.log(response); 
                          window.open('../html/home.html');             
                  },
                  error:()=>{console.log("some network issue");},
                  complete:()=>{ console.log("my call completed");}
                  
              });      
      });
});
})
