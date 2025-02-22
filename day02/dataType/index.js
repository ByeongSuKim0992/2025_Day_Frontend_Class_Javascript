//1. 프롬프트로 한변의 길이를 입력 받고
// 콘솔로 정사각형의 둘레와 넓이 나타내기
// answer) ~~길이는 둘레:~~ 넓이:~~ 입니다.
const side = window.prompt("한변의 길이");

window.console.log(
  `정사각형 ${side}길이는 둘레:${side * 4} 넓이:${side * side} 입니다.`
);

//2. 프로프트로 달러를 입력 받고 100$
//콘솔로 원화로 변환된 값으로 나타내기
// answer) ~~달러는 ~~원입니다.
const dollar = window.prompt("달러 입력");
const parsedDoollar = parseInt(dollar);
window.console.log(`${dollar} 달러는 ${dollar * 1430}원입니다.`);

//3. 프롬프트로 출생년도를 물어보고 ~~년생 받고
// 콘솔로 해당 출행년도의 나이를 출력하기
// answer) ~~년생은  ~~살입니다.
const year = window.prompt("출생년도 입력");
const parsedYear = parseInt(Year);
window.console.log(`${parsedYear}년생은 ${2026 - parsedYear}살입니다.`);

// 프롬프트로 첫번째 숫자 입력
// 프롬프트로 두번째 숫자 입력
// 콘솔로 두수의 합 나타내기

const first = +window.prompt("첫번째 숫자 입력");
const second = +window.prompt("두번째 숫자 입력");
console.log(`두 수의 합: ${first + second}`);
