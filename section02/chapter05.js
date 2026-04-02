let o1 = { name: "이정환" };
let o2 = o1; // 얕은 복사(기존 객체가 같이 바뀜)
let o3 = { ...o1 }; // 깊은 복사(기존 객체와는 다른 객체)

// 얕은 비교
console.log(o1 === o2); // true
console.log(o1 === o3);
dwdedwd; // false

// 깊은 비교
console.log(JSON.stringify(o1) === JSON.stringify(o3)); // 값이 같으면 true
