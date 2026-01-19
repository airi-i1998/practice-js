const checkAdult = (age) => {
  if (typeof age !== 'number') {
    return "年齢は数字で入力してください";
  }
  if (age >= 20) {
    return "大人です";
  } else {
    return "大人ではありません";
  }
}
console.log(checkAdult('5'));

// 関数・条件分岐
const checkScore = (score) => {
  if (typeof score !== 'number') {
    return "点数は数字で入力してください";
  }
  if (score >= 60) {
    return "合格です";
  } else {
    return "不合格です";
  }
}
console.log(checkScore('55'));

const calculatePrice = (price, quantity) => {
  if (typeof price !== 'number' || typeof quantity !== 'number') {
    return "価格と数量は数字で入力してください";
  }
  return price * quantity;
}
const total = calculatePrice(1500, 3);
// toLocalString()は、数値をそのローケルに合わせた書式の文字列に変換するメソッド
// 数値を「その国でよく使用される見た目の文字列」に変換してくれる便利なメソッド
console.log(`${total.toLocaleString()}円です`);


// 配列とfor
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
