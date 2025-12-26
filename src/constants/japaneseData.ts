export interface Kana {
  char: string;
  romaji: string;
  code: string; // KanjiVG 유니코드 파일명
}

// 5열 기준 그리드 데이터 (빈 칸은 null 처리)
export const HIRAGANA_GRID: (Kana | null)[] = [
  // あ행
  { char: "あ", romaji: "a", code: "03042" },
  { char: "い", romaji: "i", code: "03044" },
  { char: "う", romaji: "u", code: "03046" },
  { char: "え", romaji: "e", code: "03048" },
  { char: "お", romaji: "o", code: "0304a" },
  // か행
  { char: "か", romaji: "ka", code: "0304b" },
  { char: "き", romaji: "ki", code: "0304d" },
  { char: "く", romaji: "ku", code: "0304f" },
  { char: "け", romaji: "ke", code: "03051" },
  { char: "こ", romaji: "ko", code: "03053" },
  // さ행
  { char: "さ", romaji: "sa", code: "03055" },
  { char: "し", romaji: "shi", code: "03057" },
  { char: "す", romaji: "su", code: "03059" },
  { char: "せ", romaji: "se", code: "0305b" },
  { char: "そ", romaji: "so", code: "0305d" },
  // た행
  { char: "た", romaji: "ta", code: "0305f" },
  { char: "ち", romaji: "chi", code: "03061" },
  { char: "つ", romaji: "tsu", code: "03064" },
  { char: "て", romaji: "te", code: "03066" },
  { char: "と", romaji: "to", code: "03068" },
  // な행
  { char: "な", romaji: "na", code: "0306a" },
  { char: "に", romaji: "ni", code: "0306b" },
  { char: "ぬ", romaji: "nu", code: "0306c" },
  { char: "ね", romaji: "ne", code: "0306d" },
  { char: "の", romaji: "no", code: "0306e" },
  // は행
  { char: "は", romaji: "ha", code: "0306f" },
  { char: "ひ", romaji: "hi", code: "03072" },
  { char: "ふ", romaji: "fu", code: "03075" },
  { char: "へ", romaji: "he", code: "03078" },
  { char: "ほ", romaji: "ho", code: "0307b" },
  // ま행
  { char: "ま", romaji: "ma", code: "0307e" },
  { char: "み", romaji: "mi", code: "0307f" },
  { char: "む", romaji: "mu", code: "03080" },
  { char: "め", romaji: "me", code: "03081" },
  { char: "も", romaji: "mo", code: "03082" },
  // や행 (중간 빈 칸 처리)
  { char: "や", romaji: "ya", code: "03084" },
  null,
  { char: "ゆ", romaji: "yu", code: "03086" },
  null,
  { char: "よ", romaji: "yo", code: "03088" },
  // ら행
  { char: "ら", romaji: "ra", code: "03089" },
  { char: "り", romaji: "ri", code: "0308a" },
  { char: "る", romaji: "ru", code: "0308b" },
  { char: "れ", romaji: "re", code: "0308c" },
  { char: "ろ", romaji: "ro", code: "0308d" },
  // わ행 및 ん
  { char: "わ", romaji: "wa", code: "0308f" },
  null,
  null,
  null,
  { char: "を", romaji: "wo", code: "03092" },
  null,
  null,
  { char: "ん", romaji: "n", code: "03093" },
  null,
  null,
];

export const KATAKANA_GRID: (Kana | null)[] = [
  // ア행
  { char: "ア", romaji: "a", code: "030a2" },
  { char: "イ", romaji: "i", code: "030a4" },
  { char: "ウ", romaji: "u", code: "030a6" },
  { char: "エ", romaji: "e", code: "030a8" },
  { char: "オ", romaji: "o", code: "030aa" },
  // カ행
  { char: "カ", romaji: "ka", code: "030ab" },
  { char: "キ", romaji: "ki", code: "030ad" },
  { char: "ク", romaji: "ku", code: "030af" },
  { char: "ケ", romaji: "ke", code: "030b1" },
  { char: "コ", romaji: "ko", code: "030b3" },
  // サ행
  { char: "サ", romaji: "sa", code: "030b5" },
  { char: "シ", romaji: "shi", code: "030b7" },
  { char: "ス", romaji: "su", code: "030b9" },
  { char: "セ", romaji: "se", code: "030bb" },
  { char: "ソ", romaji: "so", code: "030bd" },
  // タ행
  { char: "タ", romaji: "ta", code: "030bf" },
  { char: "チ", romaji: "chi", code: "030c1" },
  { char: "ツ", romaji: "tsu", code: "030c4" },
  { char: "テ", romaji: "te", code: "030c6" },
  { char: "ト", romaji: "to", code: "030c8" },
  // ナ행
  { char: "ナ", romaji: "na", code: "030ca" },
  { char: "ニ", romaji: "ni", code: "030cb" },
  { char: "ヌ", romaji: "nu", code: "030cc" },
  { char: "ネ", romaji: "ne", code: "030cd" },
  { char: "ノ", romaji: "no", code: "030ce" },
  // ハ행
  { char: "ハ", romaji: "ha", code: "030cf" },
  { char: "ヒ", romaji: "hi", code: "030d2" },
  { char: "フ", romaji: "fu", code: "030d5" },
  { char: "ヘ", romaji: "he", code: "030d8" },
  { char: "ホ", romaji: "ho", code: "030db" },
  // マ행
  { char: "マ", romaji: "ma", code: "030de" },
  { char: "ミ", romaji: "mi", code: "030df" },
  { char: "ム", romaji: "mu", code: "030e0" },
  { char: "メ", romaji: "me", code: "030e1" },
  { char: "モ", romaji: "mo", code: "030e2" },
  // ヤ행
  { char: "ヤ", romaji: "ya", code: "030e4" },
  null,
  { char: "ユ", romaji: "yu", code: "030e6" },
  null,
  { char: "ヨ", romaji: "yo", code: "030e8" },
  // ラ행
  { char: "ラ", romaji: "ra", code: "030e9" },
  { char: "リ", romaji: "ri", code: "030ea" },
  { char: "ル", romaji: "ru", code: "030eb" },
  { char: "レ", romaji: "re", code: "030ec" },
  { char: "ロ", romaji: "ro", code: "030ed" },
  // ワ행 및 ン
  { char: "ワ", romaji: "wa", code: "030ef" },
  null,
  null,
  null,
  { char: "ヲ", romaji: "wo", code: "030f2" },
  null,
  null,
  { char: "ン", romaji: "n", code: "030f3" },
  null,
  null,
];
