// const abc = '1234'
// const abcd = +abc
// console.log(typeof abc)
// console.log(typeof abcd)

document.getElementById("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const myName = document.getElementById("myName").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const menu = document.getElementById("selectMenu").value;
  const formData = {
    name: myName,
    age: age,
    gender: gender,
    menu: menu,
  };
  // console.log(JSON.stringify(formData));
  // const jsonData = JSON.stringify(formData)
  // localStorage.setItem(formData.name, jsonData)

  addData(formData);
});

const addData = (formData) => {
  const { name, age, gender, menu } = formData;
  if (!name || !age || !gender || !menu) {
    return;
  }
  let myData = getData();
  myData[formData.name] = formData; // dynamically write object key and inside its value
  const stringiFiedData = JSON.stringify(myData);
  localStorage.setItem("form", stringiFiedData);
};

const displayData = (data) => {
  console.log("total rows:", data.length);

  let tbody = document.getElementById("showData");
  for (i = 0; i < data.length; i++) {
    let row = document.getElementById("showData").insertRow();
    // console.log(row);
    row.setAttribute("id", i + 1);
    row.insertCell(0).innerHTML = i + 1;
    row.insertCell(1).innerHTML = data[i].name;
    row.insertCell(2).innerHTML = data[i].age;
    row.insertCell(3).innerHTML = data[i].gender;
    row.insertCell(4).innerHTML = data[i].menu;
    row.insertCell(5).innerHTML = `<div style="display:flex">
        <button
            id="submitBtn"
            onclick= "seeDetails(this)"
            type="submit"
            class="btn btn-primary btn-sm"
            style="margin:5px"
          >
            See Details
          </button>
          <button
            id="updateBtn"
            onclick= "updateRow()"
            type="submit"
            class="btn btn-secondary btn-sm"
            style="margin:5px"
          >
            Update
          </button>
          <button
            id="updateBtn"
            onclick= "deleteRow()"
            type="submit"
            class="btn btn-danger btn-sm"
            style="margin:5px"
          >
            Delete
          </button>
          </div>
          `;
  }
};

const getData = () => {
  const myData = localStorage.getItem("form");
  let objMyData;
  if (myData) {
    objMyData = JSON.parse(myData);
  } else {
    objMyData = {};
  }
  return objMyData;
};

const setData = () => {
  const localData = getData();
  let myArr = [];
  for (key in localData) {
    // console.log(localData[key].age);
    // console.log(localData[key]);
    myArr.push(localData[key]);
  }
  displayData(myArr);
};
setData();

// see Details

function seeDetails(e) {
  //   console.log("clicked", e);
  let table = document.getElementById("table");
  if (table !== null) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        // tableText(this)
        // console.log("==>", this);
        let rowDetails = {
          name: this.childNodes[1].innerText,
          age: this.childNodes[2].innerText,
          gender: this.childNodes[3].innerText,
          menu: this.childNodes[4].innerText,
        };
        console.log(rowDetails);
        // console.log("==>", this.childNodes[2].innerText);
        // console.log("==>", this.childNodes[3].innerText);
        // console.log("==>", this.childNodes[4].innerText);
      };
    }
  }
}
// function tableText(tableRow) {
//     console.log(tableRow);
// }

// function seeDetails(e) {
//     var table = document.getElementById("table");
//     for (let i in table.rows) {
//         let row = table.rows[i]
//         //iterate through rows
//         //rows would be accessed using the "row" variable assigned in the for loop
//         for (let j in row.cells) {
//             let col = row.cells[j]
//             console.log(col);
//             //iterate through columns
//             //columns would be accessed using the "col" variable assigned in the for loop
//         }
//     }
// }

function updateRow() {
  let table = document.getElementById("table");
  let updateBtn = document.getElementById("submitBtn");
  // changing btn to make update
  updateBtn.innerHTML = "Update";
  updateBtn.setAttribute("class", "btn btn-success");

  if (table !== null) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        //   console.log(rows[i]);
        // tableText(this)
        console.log("==>", this);
        let rowDetails = {
          name: this.childNodes[1].innerText,
          age: this.childNodes[2].innerText,
          gender: this.childNodes[3].innerText,
          menu: this.childNodes[4].innerText,
        };
        // console.log(rowDetails);
        showOldData(rowDetails);
      };
    }
  }

  function showOldData(rowDetails) {
    let formData2 = {
      name: "",
      age: "",
      gender: "",
      menu: "",
    };
    //grab the input filed by id
    const myName2 = document.getElementById("myName");
    const age2 = document.getElementById("age");
    const gender2 = document.getElementById("gender");
    const menu2 = document.getElementById("selectMenu");

    // get old data to set the field
    formData2.myName2 = rowDetails.name;
    formData2.age = rowDetails.age;
    formData2.gender2 = rowDetails.gender;
    formData2.menu2 = rowDetails.menu;
    // console.log(formData2.myName2);

    // showing now the old data in input field to make update
    myName2.value = formData2.myName2;
    age2.value = formData2.age;
    gender2.value = formData2.gender2;
    menu2.value = formData2.menu2;
  }

  //
}

// delete row
function deleteRow(event) {
  let table = document.getElementById("table");
  var rowId = table.rows[index];
  //   let rowId = this.event.target.parentNode.parentNode.id;
  console.log(rowId.id);
  //   document.getElementById("rowId").remove();
}
