// quiz.html + quiz.js

// 1. 프롬프트로 당신의 자주가는 커피점은?
// const coffee_shop = window.prompt("당신의 자주가는 커피점은?");
// 2. 프롬프트로 당신이 자주 시키는 커피는?
// const coffee_favorite = window.prompt("당신이 자주 시키는 커피는?");
// 3. 프롬프트로 당신이 자주 시키는 사이즈는?
// const coffee_size = window.prompt("당신이 자주 시키는 사이즈는?");
// 4. 프롬프트로 당신이 좋아하는 원두는?
// const coffee_been = window.prompt("당신이 좋아하는 원두는?");
// -> 알럿으로 ~~커피숍에 ~~사이즈인 ~~커피를 시키고
// 원두를 ~~으로 즐겨 마시는 당신은 커피 애호가!😁
// window.alert(
//   `${coffee_shop}숍에 ${coffee_size} 사이즈인 ${coffee_favorite} 커피를 시키고 원두를 ${coffee_been} 으로 즐겨 마시는 당신은 커피 애호가!😁`
// );

// 자기소개 프롬프트
// 1. 당신의 이름은?
// 2. 당신의 전공은?
// 3. 당신의 생년월일은?
// 4. 당신의 MBTI?
const your_name = window.prompt("당신의 이름은?");
const your_major = window.prompt("당신의 전공은?");
const your_birth = window.prompt("당신의 생년월일은?");
const your_mbti = window.prompt("당신의 MBTI?");
window.alert(
  `이름 ${your_name} 전공 ${your_major} 생년월일 ${your_birth} MBTI ${your_mbti}`
);
// 알럿으로 ~~ 전공 ~~ 생년월일 ~~ MBTI ~~

// 배민 프롬프트
// 1. 주로 시키는 종류는?
// 2. 주로 시키는 프렌차이즈는?
// 3. 주로 시키는 메뉴는?
// 4. 주로 시키는 배달 방식은?
// 5. 주로 걸리는 시간은?
const baemin_type = window.prompt("주로 시키는 종류는?");
const baemin_franchise = window.prompt("주로 시키는 프렌차이즈는?");
const baemin_menu = window.prompt("주로 시키는 메뉴는?");
const baemin_delivery = window.prompt("주로 시키는 배달 방식은?");
const baemin_take_time = window.prompt("주로 걸리는 시간은?");
window.alert(
  `${baemin_type} 종류에서 ${baemin_franchise} 프렌차이즈 집에서  ${baemin_menu} 메뉴를 ${baemin_delivery} 방식으로 시키시는데 ${baemin_take_time} 시간 걸리시군요!`
);

// 알럿으로 ~~종류에서 ~~프렌차이즈 집에서 ~~메뉴를 ~~방식으로 시키시는데 ~~시간 걸리시군요!
