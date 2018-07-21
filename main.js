function Loadjson(file,callback) {
  var x = new XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET",file,true);
  x.onreadystatechange=function(){
    if(x.readyState===4 && x.status == "200"){
      callback(x.responseText);
    }
  };
  x.send(null);
}

Loadjson("data.json",function(text){
var data = JSON.parse(text);
console.log(data);
basics(data.details);
careerinfo(data.career);
education(data.education);
skillset(data.keyskills);
achieve(data.achievements)
})

var child1 = document.querySelector(".child1");

function basics(det){
var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);

  var name = document.createElement("h3");
  name.textContent = det.name;
  child1.appendChild(name);

  var phone = document.createElement("h3");
  phone.textContent = det.phone;
  child1.appendChild(phone);

  var email = document.createElement("a");
  email.href = "mailto:maninaidu503@gmail.com";
  email.textContent = det.email;
  child1.appendChild(email);

  var ad = document.createElement("h2");
  ad.textContent = "Address";
  child1.appendChild(ad);

  var hr = document.createElement("hr");
  child1.appendChild(hr);

  var address = document.createElement("h3");
  address.textContent = det.address;
  child1.appendChild(address);
}

var child2 = document.querySelector(".child2");

function careerinfo(car){
  var cr = document.createElement("h2");
  cr.textContent="CareerObjective";
  child2.appendChild(cr);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var info = document.createElement("p");
  info.textContent = car.info;
  child2.appendChild(info);

}

function education(edu){
  var ed = document.createElement("h2");
  ed.textContent = "Education Qualifications:";
  child2.appendChild(ed);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<edu.length;i++){
    var deg = document.createElement("h4");
    deg.textContent = edu[i].degree;
    child2.appendChild(deg);

    var ul = document.createElement("ul");
    var li = document.createElement("li");
    li.textContent = edu[i].institute;
    ul.appendChild(li);
    child2.appendChild(ul);

    var li2 = document.createElement("li");
    li2.textContent = edu[i].date;
    ul.appendChild(li2);
    child2.appendChild(ul);
  }
}


function skillset(skillinfo){
  var ke = document.createElement("h2");
  ke.textContent = "Key Skills:";
  child2.appendChild(ke);

  var hr = document.createElement("hr");
  child2.appendChild(hr);


    var skilldata = document.createElement("table");
    skilldata.border= "1";
    child2.appendChild(skilldata);

    tabledata = "";
    for (var i = 0; i < skillinfo.length; i++) {
      tabledata  += "<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].info+"</td></tr>";
    }
    skilldata.innerHTML = tabledata;


  }


  function achieve(ach){
    var ac = document.createElement("h2");
    ac.textContent = "Achievements:";
    child2.appendChild(ac);

    var hr = document.createElement("hr");
    child2.appendChild(hr);


        var achdata = document.createElement("table");
        achdata.border= "1";
        child2.appendChild(achdata);

        tabledata = "";
        for (var i = 0; i < ach.length; i++) {
          tabledata  += "<tr><td>"+ach[i].title+"</td><td>"+ach[i].info+"</td></tr>";
        }
        achdata.innerHTML = tabledata;
    
  }
