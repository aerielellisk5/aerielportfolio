// Getting the nav bar to higlight on the hover
function highlight_navlink(linkname){
  document.getElementById(linkname);
  console.log(linkname)
  // grab all of the ids of the individual links
  linkname.className += " active"
  var me = document.getElementById('link_me');
  var projects = document.getElementById('link_projects');
  var contact = document.getElementById('link_contact');
  var resume = document.getElementById('link_resume');


  // remove the active class if any of them have it!





  // var array = [me, projects, contact, resume];
  //
  // for (var i = 0; i < array.length; i++){
  //   // console.log(array[i]);
  //   if( array[i].classList.contains("active") ){
  //     console.log("i contain active");
  //     console.log(array[i]);
  //   }
  //   else{
  //
  //   }
  //
  //
  // }


}
