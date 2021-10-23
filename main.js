let reco = document.getElementById("reco");
//Dateオブジェクト　getHoursメソッド
const hour = new Date().getHours();
let aboutMeComment = document.getElementById("about-me-comment");
let recoComment = document.getElementById("reco-comment");

let songs = [
  //songs
  "Black Coffee",
  "ユートピア",
  "Blue Sunshine",
  "National Holiday",
  "アマリニモ",
  "愛しい人よGood Night...",
];

let songsComment = [
  //songsコメント
  "2015年リリースの「EPIC DAY」に収録。疲れてしまうことたくさんあるけれど、コーヒーとともに飲み干して、新しい一日を迎えよう。思わずコーヒーが飲みたくなる曲です。",
  "2013年リリースの「B'z The Best XXV 1992-2012」に収録。夢に向かって挑戦することを後押しする曲です",
  "2002年リリースの「GREEN」に収録。ある晴れた日の真昼間、主人公は意中の相手を乗せてドライブします。さわやかなアコースティックと主人公の心理描写が絶妙な曲です。",
  "2009年リリースの「イチブトゼンブ/DIVE」に収録。だらだら過ごしていたらあっという間に昼過ぎに。主人公は何も考えず服を着替えて出かけます。気持ちの良い一日を送るための曲です。",
  "2015年リリースの「EPIC DAY」に収録。男は一人、夜の商店街を歩いています。そんな中で聞こえてきた懐かしい曲、それは彼女と付き合っていた当時に流れていた曲でした...。夜道を散歩しながら聞きたい曲",
  "1990年リリース。恋人とのすれ違いを経て、二人の愛を深めていくストーリー。歌詞の素晴らしい情景描写と語りかけてくるような歌詞が身に沁みる曲。",
];

//時間によっておすすめ曲を変更
if (hour >= 0 && hour < 4) {
  reco.textContent = songs[0];
  recoComment.textContent = songsComment[0];
} else if (hour >= 4 && hour < 7) {
  reco.textContent = songs[1];
  recoComment.textContent = songsComment[1];
} else if (hour >= 8 && hour < 12) {
  reco.textContent = songs[2];
  recoComment.textContent = songsComment[2];
} else if (hour >= 12 && hour < 16) {
  reco.textContent = songs[3];
  recoComment.textContent = songsComment[3];
} else if (hour >= 16 && hour < 20) {
  reco.textContent = songs[4];
  recoComment.textContent = songsComment[4];
} else {
  reco.textContent = songs[5];
  recoComment.textContent = songsComment[5];
}

let comment = [
  //about meコメント
  "誕生日の6月23日は沖縄戦が終わった日です",
  "広島市から新幹線で一駅の辺境地に在ります",
  "サークルはJAZZ研に所属しています",
  "ポニョの町です",
];

let profileItem1 = document.getElementById("profile-item1");
let profileItem2 = document.getElementById("profile-item2");
let profileItem3 = document.getElementById("profile-item3");
let profileItem4 = document.getElementById("profile-item4");

//コメントを表示
profileItem1.onclick = function () {
  aboutMeComment.textContent = comment[0];
};
profileItem2.onclick = function () {
  aboutMeComment.textContent = comment[1];
};
profileItem3.onclick = function () {
  aboutMeComment.textContent = comment[2];
};
profileItem4.onclick = function () {
  aboutMeComment.textContent = comment[3];
};
