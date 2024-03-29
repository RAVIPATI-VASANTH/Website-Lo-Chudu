"use strict";
//Data containers
var currentLandmarks = [];
var dumpValue;
var obj = {
  hname: "",
  oname: "",
  ocontact: "",
  hgender: "male",
  htype: "public",
  hcommunityname: "",
  hlandmark: "",
  hlocation: "",
  htablesname: "",
  hid: "",
  hpassword: "",
};

var objsignal = {
  hname: false,
  oname: false,
  ocontact: false,
  hgender: true,
  htype: true,
  hcommunityname: false,
  hlandmark: false,
  hlocation: false,
  htablesname: true,
  hid: false,
  hpassword: false,
};

//UI interacted functions
function checkChange(value) {
  var obj = window.obj;
  var objsignal = window.objsignal;
  switch (value) {
    case 0:
      var s = document.getElementById("hostel-name").value;
      var n = 50;
      document.getElementById("hostel-name-message").innerHTML =
        n - s.length + " charecters remaining";
      if (s.length > 50) {
        document.getElementById("hostel-name-message").innerHTML = "Invalid";
        objsignal.hname = false;
      } else if (s.length !== 0) {
        objsignal.hname = true;
        obj.hname = s;
      }
      break;
    case 1:
      var s = document.getElementById("hostel-owner-name").value;
      var n = 25;
      document.getElementById("owner-name-message").innerHTML =
        n - s.length + " charecters remaining";
      obj.oname = s;
      objsignal.oname = true;
      if (s.length > 25) {
        objsignal.oname = false;
        document.getElementById("hostel-name-message").innerHTML = "Invalid";
      }
      break;
    case 2:
      var n = 10;
      var s = document.getElementById("hostel-owner-contact").value;
      document.getElementById("contact-message").innerHTML =
        n - s.length + " charecters remaining";
      obj.ocontact = s;
      objsignal.ocontact = true;
      if (s.length > 10) {
        document.getElementById("contact-message").innerHTML = "Invalid";
        objsignal.ocontact = false;
      }
      break;
    case 3:
      if (document.getElementById("hostel-type-community").checked) {
        document
          .getElementById("community-name")
          .setAttribute("class", "text-input");
        document
          .getElementById("community-message")
          .setAttribute("class", "notes message");
        obj.htype = "community";
      } else {
        document
          .getElementById("community-name")
          .setAttribute("class", "text-input hide");
        document
          .getElementById("community-message")
          .setAttribute("class", "notes message hide");
        obj.htype = "public";
      }
      break;
    case 4:
      var n = 10;
      var s = document.getElementById("community-name").value;
      document.getElementById("community-message").innerHTML =
        n - s.length + " charecters remaining";
      obj.hcommunityname = s;
      objsignal.hcommunityname = true;
      if (s.length > 10) {
        obj.hcommunityname = "";
        objsignal.hcommunityname = false;
        document.getElementById("community-message").innerHTML = "Invalid";
      }
      break;
    case 5:
      if (document.getElementById("hostel-gender-male").checked) {
        obj.hgender = "male";
      } else {
        obj.hgender = "female";
      }
      generateHostelId();
      break;

    case 6:
      var loc = document.getElementById("location-input").value;
      if (loc.includes("www.google.com/maps")) {
        obj.hlocation = document.getElementById("location-input").value;
        objsignal.hlocation = true;
      } else {
        obj.hlocation = "";
        objsignal.hlocation = false;
      }
      break;
    case 7:
      var pass = document.getElementById("password").value;
      obj.hpassword = pass;
      objsignal.hpassword = true;
      if (obj.hpassword === "") {
        obj.hpassword = "";
        objsignal.hpassword = false;
      }
      if (
        document.getElementById("password").value ===
        document.getElementById("re-password").value
      ) {
        document
          .getElementById("password-message")
          .setAttribute("class", "notes message hide");
      }
      break;
  }

  window.obj = obj;
  window.objsignal = objsignal;
}

function checkPassword() {
  var i = document.getElementById("password").value;
  var j = document.getElementById("re-password").value;
  if (i === j) {
    document
      .getElementById("password-message")
      .setAttribute("class", "notes message hide");
    obj.hpassword = j;
    objsignal.hpassword = true;
  } else {
    document
      .getElementById("password-message")
      .setAttribute("class", "notes message");
    obj.hpassword = "";
    objsignal.hpassword = true;
  }
}

function checkReRegistering() {
  currentLandmarks.forEach((element) => {
    element.hostel_ids.forEach((hid) => {
      if (hid === window.obj.hid) {
        return true;
      }
    });
  });
  return false;
}

function checkDataValidation() {
  var signal = true;
  if (checkReRegistering()) {
    alert("Please Reload the Page.");
    signal = false;
  } else if (!objsignal.hname) {
    alert("Enter a valid Hostel Name");
    signal = false;
  } else if (!objsignal.oname) {
    alert("Enter a valid Owner Name");
    signal = false;
  } else if (!objsignal.ocontact) {
    alert("Enter a valid Contact");
    signal = false;
  } else if (obj.htype === "community") {
    if (!objsignal.hcommunityname) {
      alert("Enter Community Name");
      signal = false;
    }
  } else if (!objsignal.hlocation) {
    alert("Add Loaction");
    signal = false;
  } else if (!objsignal.hlandmark) {
    alert("Enetr a valid Landmark");
    signal = false;
  } else if (!objsignal.hid) {
    alert("Generate Hostel Id");
    signal = false;
  } else if (!objsignal.hpassword) {
    alert("Check the Password");
    signal = false;
  } else if (obj.hpassword.length > 15) {
    alert("Your Password can't be allowed with more than 15 charecters");
    signal = false;
  }
  console.log(obj);
  if (signal) {
    sendNewHostelData();
  }
}

function sortHids(list) {
  var l = [];
  list.forEach((element) => {
    l.push(Number(element.split("_")[1]));
  });
  for (var i = 0; i < l.length - 1; i++) {
    for (var j = 0; j < l.length - i - 1; j++) {
      if (l[j] > l[j + 1]) {
        var temp = l[j];
        l[j] = l[j + 1];
        l[j + 1] = temp;
      }
    }
  }
  return l[l.length - 1] + 1;
}

//Preloading tasks related
function generateHostelId() {
  var lan = window.obj.hlandmark;
  var num = 1;
  currentLandmarks.forEach((element) => {
    if (element.minicode === lan) {
      window.obj.htablesname = element.htablesname;
      if (element.hostel_ids.length !== 0) {
        num = sortHids(element.hostel_ids);
      }
    }
  });
  console.log(num);
  document.getElementById("hostel-id").value = lan + "_" + num;
  window.obj.hid = document.getElementById("hostel-id").value;
  window.objsignal.hid = true;
}

function updateLandmarksDatalist(data) {
  var list = JSON.parse(data);
  currentLandmarks = list;
  window.dumpValue = document.getElementById("landmark").value;
  window.obj.hlandmark = window.dumpValue;
  window.objsignal.hlandmark = true;
  generateHostelId();
}

function getLandmarks() {
  $.get(
    "hostelRegister",
    {
      signal: 1,
    },
    function (data, status) {
      if (status == "success") {
        updateLandmarksDatalist(data);
      }
    }
  );
}

window.onload = function () {
  getLandmarks();
};

function cleanupPage() {
  document.getElementById("hostel-name").value = "";
  document.getElementById("hostel-owner-name").value = "";
  document.getElementById("hostel-owner-contact").value = "";
  document.getElementById("location-input").value = "";
}

//processing functions
function processString(s) {
  s = s.replaceAll("\r", "");
  s = s.replaceAll("\n", "");
  return s;
}

//Sending Data to servlets

function sendNewHostelData() {
  var obj = window.obj;
  $.post(
    "hostelRegister",
    {
      signal: 1,
      hname: processString(obj.hname),
      oname: processString(obj.oname),
      ocontact: processString(obj.ocontact),
      hgender: processString(obj.hgender),
      htype: processString(obj.htype),
      hcommunityname: processString(obj.hcommunityname),
      hlandmark: processString(obj.hlandmark),
      hlocation: processString(obj.hlocation),
      hid: processString(obj.hid),
      htablename: processString(obj.htablesname), //this was generated in generate hostel id
      hpassword: processString(obj.hpassword), //this was generated in generate hostel id
    },
    function (data, status) {
      if (status === "success") {
        window.getLandmarks();
        window.cleanupPage();
        window.location.assign("hostelWorkspace.jsp");
      } else {
        alert("Something Went Wrong..!!");
      }
    }
  );
}
