//      Anlbumn ảnh
var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];
var numberCount = document.querySelector('#number');
var index =0;

function Slide(title, subtitle, background, link) {
  this.title = title;
  this.subtitle = subtitle;
  this.background = background;
  this.link = link;
  this.id = "slide" + slideIndex;
  slideIndex++;
  slideArray.push(this);
}

var messi = new Slide(
  "Lionel Messi",
  "El Punga",
  "albumn/messi.jpg",
  "https://vi.wikipedia.org/wiki/Lionel_Messi"
);

var kaka = new Slide(
  "RiCardo KaKa",
  "Thiên thần sân cỏ",
  "albumn/kaka.jpg",
  "https://vi.wikipedia.org/wiki/Kak%C3%A1"
);

var folden = new Slide(
  "Phil Fodel",
  'Tài năng trẻ ManCity',
  "albumn/folden.png",
  "https://vi.wikipedia.org/wiki/Phil_Foden"
);



var r9 = new Slide(
  "Ronaldo Dlima",
  "Người ngoài hành tinh",
  "albumn/robeo.jpg",
  "https://vi.wikipedia.org/wiki/Ronaldo"
);

var beckham = new Slide(
  "David Beckham",
  "Thiên tài với đường chọc khe",
  "albumn/beckham.jpg",
  "https://vi.wikipedia.org/wiki/David_Beckham"
);
var ronaldinho = new Slide(
  "Ronaldinho",
  "Phù thủy sân cỏ",
  "albumn/Ronaldinho111.jpg",
  "https://vi.wikipedia.org/wiki/Ronaldinho"
);
var ronaldo = new Slide(
  "Cristiano Ronaldo",
  "Tay săn bàn hàng đầu",
  "albumn/ronaldo_0.jpg",
  'https://vi.wikipedia.org/wiki/Cristiano_Ronaldo'
);

var m3p = new Slide(
  "Kylian Mbappe",
  "Thiên tài không đợi tuổi",
  "albumn/mbappe-psg.jpg",
  "https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9"
);
var neymar = new Slide(
  'Neymar Jr',
  'Tiểu Pele',
  'albumn/neymar.jpg',
  'https://en.wikipedia.org/wiki/Neymar'
)
function buildSlider() {
  var myHTML;

  for (var i = 0; i < slideArray.length; i++) {
    myHTML +=
      "<div id='" +
      slideArray[i].id +
      "' class='singleSlide' style='background-image:url(" +
      slideArray[i].background +
      ");'>" +
      "<div class='slideOverlay'>" +
      "<h1>" +
      slideArray[i].title +
      "</h1>" +
      "<h4>" +
      slideArray[i].subtitle +
      "</h4>" +
      "<a href='" +
      slideArray[i].link +
      "' target='_blank'>Open Link</a>" +
      "</div>" +
      "</div>";
  }

  document.getElementById("mySlider").innerHTML = myHTML;

  document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

buildSlider();
function prevSlide() {
  var nextSlideIndex;
  if (currentSlideIndex === 0) {
    nextSlideIndex = slideArray.length - 1;
  } else {
    nextSlideIndex = currentSlideIndex - 1;
  }

  document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  document
    .getElementById("slide" + nextSlideIndex)
    .setAttribute("class", "singleSlide slideInLeft");
  document
    .getElementById("slide" + currentSlideIndex)
    .setAttribute("class", "singleSlide slideOutRight");

  currentSlideIndex = nextSlideIndex;
  count('sliderPrev');
}

function nextSlide() {
  var nextSlideIndex;
  if (currentSlideIndex === slideArray.length - 1) {
    nextSlideIndex = 0;
  } else {
    nextSlideIndex = currentSlideIndex + 1;
  }

  document.getElementById("slide" + nextSlideIndex).style.left = "100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  document
    .getElementById("slide" + nextSlideIndex)
    .setAttribute("class", "singleSlide slideInRight");
  document
    .getElementById("slide" + currentSlideIndex)
    .setAttribute("class", "singleSlide slideOutLeft");

  currentSlideIndex = nextSlideIndex;
  count('sliderNext');
  
}



function count(direction) {
  if(direction=='sliderNext') {
    index ++;
    if(index == slideArray.length) {
      index =0;
    }
    numberCount.innerText = index+1;
  }else{
    index --;
    if(index<0) {
      index = slideArray.length -1;
    }
    numberCount.innerText=index+1;
  }
}


//                    Đăng ký thành viên
//lấy giá trị của phần tử qua id
function getValueId(id) {
  return document.getElementById(id).value.trim();
}
//lấy giá trị của phần tử qua tên
function getValueName(name) {
  return document.getElementsByName(name).value.trim();
}
// Hiển thị lỗi
function showError(key, mess) {
  document.getElementById(key + '_error').innerHTML = mess;

}

function validate() {
 var flag = true;


  var loimasv = document.getElementById('masv');
  var loihoten = document.getElementById('hoten');
  var loiemail = document.getElementById('email');



  var masv = getValueId('masv');
  var hoten = getValueId('hoten');
  var email = getValueId('email');
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;





  //check mã số sinh viên
  if (masv == '') {

    loimasv.setAttribute('class', 'loi');
    
    showError('masv', 'Vui lòng không để trống mã sinh viên');
    flag = false;
    loimasv.focus();
  } else {
    showError('masv', '');
    loimasv.setAttribute('class', 'typetext');
  }





  //check họ tên
  if (hoten == '') {
    loihoten.setAttribute('class', 'loi');
    flag = 1;
    showError('hoten', 'Vui lòng không để trống họ và tên');
    loihoten.focus();
  } else {
    showError('hoten', '');
    loihoten.setAttribute('class', 'typetext');

  }





  //check email
  if (email == '') {
    loiemail.setAttribute('class', 'loi');
    flag = false;
    showError('email', 'Vui lòng không để trống email');
    loiemail.focus();
  } else if (!mailformat.test(email)) {
    loiemail.setAttribute('class', 'loi');
    flag = false;
    showError('email', 'Vui lòng kiểm tra lại định dạng email');
    loiemail.focus();

  } else {
    showError('email', '');
    loiemail.setAttribute('class', 'typetext');
  }





  // check giới tính

  var checkGender = document.getElementsByName('gender');
  var setloi_gender = document.querySelector('#formgender');
var count=0;
  for(var i=0;i<checkGender.length;i++){
    if(checkGender[i].checked) {
count++;
    }
  }
  if(count ==0 ) {
    flag = false;
    setloi_gender.setAttribute('class', 'loi');
      showError('gender', 'Vui lòng tích Nam hoặc nữ');
    
  }else{
    showError('gender', '');
    setloi_gender.setAttribute('class', 'gender_true');
    
  }
  // check quốc tịch

  var checkQuoctich = document.getElementById('quoctich').value;
  var setloi_quoctich = document.querySelector('#quoctich');

  if (checkQuoctich =='-1')  {
    setloi_quoctich.setAttribute('class', 'loi');
    showError('quoctich', 'Vui lòng chọn 1 quốc tịch');
    flag = 1;
   
  }else {
   
    showError('quoctich', ' ');
    setloi_quoctich.setAttribute('class', 'quoctich_true');
  }




  //check sở thích

  var checkSothich = document.getElementsByName('sothich');

    if (checkSothich[0].checked || checkSothich[1].checked ||checkSothich[2].checked ||checkSothich[3].checked ||checkSothich[4].checked ||checkSothich[5].checked ) {
      showError('sothich', '');
    setloi_sothich.setAttribute('class', 'sothich_true');
   
    }else{
      flag = false;
      var setloi_sothich = document.querySelector('#sothich');
    setloi_sothich.setAttribute('class', "loi");
    showError('sothich', 'Vui lòng chọn ít nhất 1 sở thích');   
    }
  
  
   
  







//check ghi chú
  var checkGhichu = document.getElementById('info').value;
  var setloi_ghichu = document.querySelector('#info');

  if (checkGhichu.length > 200) {
    flag = false;
    setloi_ghichu.setAttribute('class', 'loi2');
    showError('ghichu', 'Bạn đã nhập quá 200 ký tự');
  } else {
    showError('ghichu', '');
    setloi_ghichu.setAttribute('class', 'ghichu_true');
  }

  if(flag){
    alert('Đăng ký thành công');
  }else{
    alert('Đăng ký thất bại');
  }

return flag;


}


//                  Danh sách bán hàng

function chonmucgia() {
  //lấy giá
  var arrGia = document.getElementsByName('gia');
  var obj = document.getElementById('select');
  mucdangchon = obj.value;
  for (var i = 0; i < arrGia.length; i++) {
    gia = parseFloat(arrGia[i].innerText);
    if (gia <= mucdangchon || mucdangchon == -1) {
      arrGia[i].parentNode.style.display = "";
    } else {
      arrGia[i].parentNode.style.display = 'none';
    }

  }
  tongtien();
}

function tich_checkbox(i) {
  var arrSL = document.getElementsByName('soluong');
  arrSL[i].disabled = !arrSL[i].disabled;

  if (arrSL[i].disabled == true) {
    arrSL[i].value = 0;
    arrSL[i].parentNode.nextElementSibling.innerText = '';
  }
  tongtien();
}

function thanhtien(x) {
  var soluong = x.value;
  var gia = x.parentNode.previousElementSibling.innerText;
  x.parentNode.nextElementSibling.innerText = soluong * gia;
  tongtien();
}


function tongtien() {
  var sum = 0;
  var arrThanhTien = document.getElementsByName('thanhtien');
  for (var i = 0; i < arrThanhTien.length; i++) {
    if (arrThanhTien[i].parentNode.style.display == '') {
      tien = arrThanhTien[i].innerText;
      sum += Number(tien);
    }
  }
  document.getElementById("tinhtong").innerText = sum;
}

