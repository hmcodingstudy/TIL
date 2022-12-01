
var total = document.querySelector(".total");
total.innerHTML = document.getElementsByTagName('li').length

function delList() {
  let delbtn = document.querySelector(".item__delete");
  const item__row = document.querySelector(".item__row");
  item__row.remove();
  var total = document.querySelector(".total");
  total.innerHTML = document.getElementsByTagName('li').length
}

function addList() {
  var ul = document.querySelector("ul");

  // 입력된 값 없을 시 등록 X
  var footer__input = document.querySelector(".footer__input");
  var input_value = footer__input.value;
  if(input_value == ""){
    footer__input.focus();
    return;
  }

  const newitem__row = document.createElement("li");
  newitem__row.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  let delbtn = document.querySelector(".item__delete");


  // 입력된 값 span에 입력하여 등록하기
  var item__name = document.createElement("span");
  item__name.setAttribute("class", "item__name");
  item__name.innerHTML = input_value;
  
  const item__delete = document.createElement("button");
  item__delete.setAttribute("class", "item__delete");
  item__delete.onclick = function delList() {
    const item__row = document.querySelector(".item__row");
    item__row.remove();
    var total = document.querySelector(".total");
    total.innerHTML = document.getElementsByTagName('li').length
  };

  // 체크박스
  // var checkbox = document.createElement("input");
  // checkbox.setAttribute("type", "checkbox");
  // checkbox.setAttribute("class", "check_box");

  //체크박스 이벤트 - 클릭 시 line-through
  // checkbox.onclick = function checkedList() {
  //   var item__name_s = document.querySelector(".item__name");
  //   var checkbox_s = document.querySelector(".check_box");
  //     if(checkbox_s.checked == true){
  //       // item__name_s.style.textDecoration = "line-through";
  //       alert("checked");
  //     } else if(checkbox_s.checked == false){
  //       // item__name_s.removeAttribute("style");
  //       alert("unchecked");
  //     }
  //   };

  const del_icon = document.createElement("i");
  del_icon.setAttribute("class", "fas fa-trash-alt");
  item__delete.append(del_icon);

  const item__divider = document.createElement("div");
  item__divider.setAttribute("class", "item__divider");

  // 위치 지정
  newitem__row.append(item,item__divider);
  item.append(item__name,item__delete);

  // 가장 최근에 추가한 목록이 가장 위로 올라오게
  ul.prepend(newitem__row);
  // prepend = append의 반대

  // input창 초기화
  footer__input.value = '';

  var total = document.querySelector(".total");
  total.innerHTML = document.getElementsByTagName('li').length

}

  // var total = document.querySelector(".total");
  // total.innerHTML = document.getElementsByTagName('li').length


  //체크박스 이벤트 - 클릭 시 line-through, 다시 클릭시 line 제거
  // function checkedList() {
  //   var item__name_s = document.querySelector(".item__name");
  //   var checkbox_s = document.querySelector(".check_box");
  //     if(checkbox_s.checked == true){
  //       // item__name_s.style.textDecoration = "line-through";
  //       alert("checked");
  //     } else if(checkbox_s.checked == false){
  //       // item__name_s.removeAttribute("style");
  //       alert("unchecked");
  //     }
  //   };

  // var dt = new Date();
  var td_month = new Date().toLocaleDateString("en-us", {
    month: "short",
  });

  var td_date = new Date().toLocaleDateString("en-us", {
    day: "numeric",
  });
  var td_day = new Date().toLocaleDateString("en-us", {
    weekday: "long",
  });
  var td_day2 = td_day.toUpperCase()

  var day_ = document.querySelector(".day");
  var date_ = document.querySelector(".date");
  var month_ = document.querySelector(".month");


  new Date().toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    weekday: "long",
  });


  month_.innerHTML = td_month;
  date_.innerHTML = td_date;
  day_.innerHTML = td_day2;
