// 1번. 사용자로부터 음료의 종류를 나타내는 정수 1~3과 투입한 금액을 나타내는 양의 정수를 입력받습니다. 각 음료와 그 가격은 다음과 같습니다.
//    1. 아메리카노 - 3000원
//    2. 레몬에이드 - 4000원
//    3. 카페라떼 - 3500원
//   사용자가 선택한 음료의 이름과 투입한 금액에서 음료 가격을 뺀 잔돈을 출력하는 프로그램을 작성하세요. 단 아무것도 입력하지 않으면 자동으로 시내버스와 성인으로 계산됩니다.

// const beverage = +window.prompt("음료 종류 고르기(1~3)");
// const money = +window.prompt("금액 투입");

// if (beverage == 1 && money >= 3000) {
//   window.console.log("아메리카노");
//   window.console.log(`잔돈: ${moeny - 3000}`);
// } else if (beverage == 2 && money >= 4000) {
//   window.console.log("레몬에이드");
//   window.console.log(`잔돈: ${moeny - 4000}`);
// } else if (beverage == 3 && money >= 3500) {
//   window.console.log("라떼");
//   window.console.log(`잔돈: ${moeny - 3500}`);
// } else {
//   window.console.log("없는 음료 종류이거나 금액이 적습니다.");
// }

// const beverage = +window.prompt("음료 종류 고르기(0~2)");
// const money = +window.prompt("금액 투입");

// const menu = ["아메리카노", "레몬에이드", "라떼"];
// const cost = [3000, 4000, 3500];

// if (beverage < 0 || 2 < beverage) {
//   window.console.log("없는 메뉴입니다.");
// } else {
//   if (cost[beverage] > money) {
//     window.console.log("금액이 모자랍니다.");
//   } else {
//     window.console.log(`음료:${menu[beverage]} 잔돈:${money - cost[beverage]}`);
//   }
// }

// 2번. 사용자로부터 버스 노선의 종류를 나타내는 정수와 승객의 나이를 입력받습니다. 노선별 기본 요금은 다음과 같습니다.
//    1. 시내버스 - 1200원
//    2. 광역버스 - 2000원
//    3. 마을버스 - 1000원
// 연령별 할인율은 다음과 같습니다.
// - 어린이(7세이하): 무료
// - 청소년(8세~19세); 30% 할인
// - 노인(65세 이상): 무료
// 사용자의 나이와 선택한 노선에 따라 할인을 적용한 최종 버스 요금을 계산하여 출력하는 프로그램을
const bus = +window.prompt("버스 노선 종류 선택(1~3)") - 1;
const age = +window.prompt("승객의 나이 입력");

// const busName = ["시내버스", "광역버스", "마을버스"];
// const busCost = [1200, 2000, 1000];

// if (age <= 7 || 65 <= age) {
//   window.console.log(`${busName[bus]} 무료입니다.`);
// } else if (8 <= age && age <= 19) {
//   window.console.log(` ${busName[bus]} 30% 할인 ${busCost[bus] * 0.7}입니다`);
// } else {
//   window.console.log(` ${busName[bus]} 정가 ${busCost[bus] * 1}입니다.`);
// }

const busObject = [
  { name: "시내버스", cost: 1200 },
  { name: "광역버스", cost: 2000 },
  { name: "마을버스", cost: 1000 },
];

if (age <= 7 || 65 <= age) {
  console.log("무료");
} else if (8 <= age && age <= 19) {
  console.log(
    `버스종류:${busObject[bus].name} 버스금액:${busObject[bus].cost * 0.7}`
  );
} else {
  console.log(
    `버스종류:${busObject[bus].name} 버스금액:${busObject[bus].cost}`
  );
}
