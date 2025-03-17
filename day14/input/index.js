import { hasSpecialChar, lengthValid } from "./func.js";

const input = document.querySelector(".input");
const textNum = document.querySelector(".textNum");
const condition = document.querySelector(".condition");

input.addEventListener("input", () => {
  const { length } = input.value;
  textNum.innerText = length;
  textNum.style.color = lengthValid(length);
  condition.style.color = hasSpecialChar(input.value, "!@#^&~");
});

// 1. 숫자 10글자 넘으면 빨간색 아니면 검은색
// 2. !, @, # 포함 조건이 합당하면
//  -1.condition 글씨색이 초록색
//  -2. 아니면 condition 글씨색이 검은색
