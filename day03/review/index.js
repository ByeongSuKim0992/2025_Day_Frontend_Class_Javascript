// 1. 유저에게 프롬프트로 두 숫자를 입력 받고 두 숫자의 합, 차, 곱, 제곱, 나누기에서 정수화 하는거까지 콘솔로 나타내기
const first = +window.prompt("첫 번째 숫자 입력");
const second = +window.prompt("두 번째 숫자 입력");

window.console.log(
  `합:${first + second} 차:${first - second} 곱:${first * second} 제곱:${
    first ** second
  } 나누기 후 내림:${parseInt(first / second)}`
);
// 2. 유저에게 프롬프트로 하나의 숫자를 입력 받고 홀수 또는 짝수인지 콘솔로 알려주기!
const num = +window.prompt("숫자 입력");

const answer2 = num % 2 ? "홀수" : "짝수";
window.console.log(`${num}은 ${answer2}`);
// 3. 유저에게 프롬프트로 양의 정수를 입력 받고 분:초 형태로 나타내기!
//    ex) 87 -> 1분 27초
const time = +window.prompt("숫자 입력");
const minute = parseInt(time / 60);
const seconds = time % 60;
window.console.log(`${minute}분 ${seconds}초`);
