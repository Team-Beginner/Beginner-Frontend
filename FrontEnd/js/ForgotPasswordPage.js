const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const emailCert = document.getElementById("email-certify");
const newPw = document.getElementById("new-pw");
const rewriteNewPw = document.getElementById("rewrite-new-pw");

const form = document.getElementById("forgot-pw-form");

const errorMsgList = [
  "이메일을 다시 입력해주세요.",
  "인증코드가 다릅니다.",
  "비밀번호가 서로 다릅니다.",
];

function submit(event) {
  event.preventDefault();

  if (!CheckEmail(emailInput.value)) {
    errorShow(emailInput, 0);
  } else if (emailCert.value == "") {
    errorShow(emailCert, 1);
  } else if (newPw.value != rewriteNewPw.value || newPw.value == "") {
    errorShow(rewriteNewPw, 2);
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
