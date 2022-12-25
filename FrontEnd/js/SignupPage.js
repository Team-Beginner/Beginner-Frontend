const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const emailCert = document.getElementById("email-certify");
const classNum = document.getElementById("class-num");
const stdName = document.getElementById("name");
const password = document.getElementById("password");
const rewritePw = document.getElementById("rewrite-pw");

const form = document.getElementById("forgot-pw-form");

const errorMsgList = [
  "이메일을 다시 입력해주세요.",
  "인증코드가 다릅니다.",
  "학번을 다시 입력해주세요.",
  "이름을 다시 입력해 주세요.",
  "비밀번호가 서로 다릅니다.",
];

function submit(event) {
  event.preventDefault();

  if (!CheckEmail(emailInput.value)) {
    errorShow(emailInput, 0);
  } else if (emailCert.value == "") {
    errorShow(emailCert, 1);
  } else if (classNum.value == "") {
    errorShow(classNum, 2);
  } else if (stdName.value == "") {
    errorShow(stdName, 3);
  } else if (password.value != rewritePw.value || password.value == "") {
    errorShow(password, 4);
  }
}

function errorShow(str, num) {
  errorMsg.innerText = errorMsgList[num];
  errorMsg.setAttribute("class", "visible");
  str.style.borderColor = "#FF3737";
  setTimeout(() => {
    errorMsg.setAttribute("class", "hidden");
    str.style.borderColor = "#999999";
  }, 3000);
}

function CheckEmail(str) {
  var reg_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
}

form.addEventListener("submit", submit);
