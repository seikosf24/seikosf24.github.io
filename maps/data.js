/* しばし解説を 
    #datasetについて
    d:表示される名前（実際の企画名）
    s:検索エンジンに引っ掛けるための名前。日本語、ローマ字をぶちこむ <= これ企画のクラスね、場所のクラスちゃうよ idは場所の名前やけど
    i:目的の企画の<path>のid 要はdocument.getElementById()で取得するときのidってわけ
      =>maps_は抜いてます。全部ついてるので後から += でいい
    l:ロゴの場所、/assets/logo は書かない 拡張子もpng固定で
    nullのやつ後で何とかしてね
  */
/* 
  #追記
  　なんでこんなことしてるんでしょうね
  　もしこれを見てるひといたら連絡チョーダイナ
    => discord:tamago0524
*/
const dataset = [
  //f1
  { f: 1, d: "食堂", i: "dining", s: "dining;食堂;しょくどう" },
  { f: 1, d: "保健室", i: "hoken", s: "nurse office;保健室;ほけんしつ" },
  {
    f: 1,
    d: "図書室",
    i: "tosyo",
    s: "library;図書館;図書室;としょかん;としょしつ;",
  },
  //f2
  {
    f: 2,
    d: "AH! A stery",
    i: "H1A",
    s: "ah! a stery;ah!astery;",
    l: "v/AHA",
  },
  //{f:2,d:"H1B",i:"H1B",s:"h1b;高校1年b組;こうこういちねんbぐみ"},
  {
    f: 2,
    d: "囲碁将棋部",
    i: "H1C",
    s: "囲碁将棋部;いごしょうぎぶ;",
    l: "b/SHO",
  },
  {
    f: 2,
    d: "星光満天宮",
    i: "H1D",
    s: "星光満天宮;せいこうまんてんぐう;seikoumantengu;文芸部;ぶんげいぶ;bungeibu;",
    l: "b/BGB",
  },
  {
    f: 2,
    d: "Round-C",
    i: "H1E",
    s: "round-c;roundc:らうんどc;",
    l: "c/M3C",
  },
  {
    f: 2,
    d: "ビ。",
    i: "M1A",
    s: "び。;bi.;美術部;びじゅつぶ;bijutubu;",
    l: "b/ART",
  },
  {
    f: 2,
    d: "中学美術展示",
    i: "M1B",
    s: "中学美術展示;ちゅうがくびじゅつてんじ;chuugakubijututenji;",
    l: null,
  },
  //{f:2,d:"M1C",i:"M1C",s:"m1c;中学1年c組;ちゅうがくいちねんcぐみ"},
  {
    f: 2,
    d: "中学一年バザー",
    i: "M1D",
    s: "中学一年ばざー;ちゅうがくいちねんばざー;chuugakuichinenbazza-;",
    l: "c/M1",
  },
  //{f:2,d:"M1E",i:"M1E",s:"m1e;中学1年e組;ちゅうがくいちねんeぐみ"},
  {
    f: 2,
    d: "カトリック研究会",
    i: "catho",
    s: "かとりっく研究会;かとりっくけんきゅうかい;catholickenkyuukai;",
    l: "b/CRC",
  },
  {
    f: 2,
    d: "映像企画",
    i: "AVRoom",
    s: "映像企画;えいぞうきかく;eizoukikaku;audiovisualroomavroom;視聴覚室;しちょうかくしつ",
    l: null,
  },
  {
    f: 2,
    d: "お化け屋敷",
    i: "TechRoom",
    s: "お化け屋敷;おばけやしき;obakeyashiki;",
    l: "b/JUD",
  },
  //{f:2,d:"美術室",i:"ArtRoom",s:"artroom;美術室;びじゅつしつ"},
  {
    f: 2,
    d: "渉外広報",
    i: "juken",
    s: "渉外広報;しょうがいこうほう;shougaikouhou;受験生相談窓口;じゅけんせいそうだんまどぐち;jukenseisoudanmadoguchi;",
    l: null,
  },
  {
    f: 2,
    d: "インフォメーション",
    i: "info",
    s: "いんふぉめーしょん;information;",
    l: null,
  },
  {
    f: 2,
    d: "ガネー社",
    i: "sp1",
    s: "がねー社;がねーしゃ;ganesha;ganesya",
    l: "v/GNS",
  },
  //f3
  {
    f: 3,
    d: "おぼべやしき",
    i: "H2A",
    s: "おぼべやしき;obobeyashiki;",
    l: "c/H2C",
  },
  //{f: 3,d: "社会科展示",i: "H2B",s: "社会科展示;しゃかいかてんじ;syakaikatenji",l: "v/SHA",},
  { f: 3, d: "Gun Bosco", i: "H2C", s: "gun bosco;gunbosco", l: "c/M3A" },
  {
    f: 3,
    d: "けん玉教室",
    i: "H2E",
    s: "けん玉教室;けんだまきょうしつ;kendamakyousitu;",
    l: "b/KDD",
  },
  { f: 3, d: "Round-A", i: "M2A", s: "round-a;rounda;", l: "c/M2A" },
  {
    f: 3,
    d: "ご注文は射的ですか？",
    i: "M2B",
    s: "ご注文は射的ですか？;ご注文は射的ですか?;ごちゅうもんはしゃてきですか？;ごちゅうもんはしゃてきですか?;",
    l: "c/M2B",
  },
  {
    f: 3,
    d: "Hanter x Hanter",
    i: "M2C",
    s: "hanter x hanter;hanterxhanter;hanter × hanter;hanter×hanter",
    l: "c/M2C",
  },
  { f: 3, d: "Round2", i: "M2D_1", s: "round2", l: "c/M2D" },
  {
    f: 3,
    d: "籠手面堂",
    i: "M2D_2",
    s: "籠手面堂;こてめんどう;kotemendou;剣道有志;けんどうゆうし;kendouyusi;",
    l: "v/KDY",
  },
  {
    f: 3,
    d: "科学の友",
    i: "ScienceLab",
    s: "科学の友;かがくのとも;kagakunotomo;science friend;sciencelabo;科学室;かがくしつ",
    l: "b/CHE",
  },
  {
    f: 3,
    d: "解体新書",
    i: "BiologyLab",
    s: "解体新書;かいたいしんしょ;biologylab;biologyroom;生物室;せいぶつしつ",
    l: "LSC",
  },
  {
    f: 3,
    d: "鉄道研究会",
    i: "SRNo3",
    s: "鉄道研究会;てつどうけんきゅうかい;tetudoukenkyukai;specialclassroomno3;specialroomno3;特別第3教室;とくべつだいさんきょうしつ",
    l: "v/TKN",
  },
  {
    f: 3,
    d: "星光王",
    i: "SRNo4",
    s: "星光王;せいこうおう;seikouking;くいず研究会;くいずけんきゅうかい;specialclassroomno4;specialroomno4;特別第4教室;とくべつだいよんきょうしつ",
    l: undefined,
  },
  //f4
  {
    f: 4,
    d: "愛有ーる",
    i: "H3A",
    s: "h3d;高校3年d組;こうこうさんねんdぐみ;あいあーる;aia-ru;愛有ーる",
    l: "c/M3D",
  },
  {
    f: 4,
    d: "地歴部",
    i: "H3C",
    s: "地歴部;ちれきぶ;chirekibu;",
    l: "b/GRD",
  },
  {
    f: 4,
    d: "社会科展示",
    i: "H3D",
    s: "社会科展示;しゃかいかてんじ;syakaikatenji",
    l: "v/SHA",
  },
  {
    f: 4,
    d: "コーヒーカップ",
    i: "H3E",
    s: "こーひーかっぷ;ko-hi-kappu;coffe cup;",
    l: "v/AMU",
  },
  {
    f: 4,
    d: "写真部",
    i: "M3A",
    s: "写真部;しゃしんぶ;physicslab;物理室;ぶつりしつ",
    l: "b/PHO",
  },
  {
    f: 3,
    d: "んけうす",
    i: "M3B",
    s: "んけうす;nnkeusu;数学研究部;すうがくけんきゅうぶ;suugakukenkyubu;",
    l: "b/SKN",
  },
  {
    f: 4,
    d: "スターライトプラネタリウム",
    i: "M3D",
    s: "すたーらいとぷらねたりうむ;starlight planetarium",
    l: "b/AST",
  },
  { f: 4, d: "AOPIΣTOΣ", i: "SF41", s: "あおりすとす;aopiΣtoΣ;aorists;", l: "v/AOR" },
  {
    f: 4,
    d: "メリーゴーランド",
    i: "SNo1",
    s: "めりーごーらんど;merry go round;merry-go-round;merrygoround;specialclassroomno1;specialroomno1;特別第1教室;とくべつだいいちきょうしつ",
    l: "c/H1A",
  },
  {
    f: 4,
    d: "ほしのこのこのこまとばんばん",
    i: "SNo2",
    s: "ほしのこのこのこまとばんばん;",
    l: "c/M3B",
  },
  {
    f: 4,
    d: "音楽室",
    i: "Music",
    s: "musicroom;音楽室;おんがくしつ",
    l: null,
  },
  {
    f: 4,
    d: "電気工学部",
    i: "Physics",
    s: "電気工学部;でんきこうがくぶ;denkikougakubu;",
    l: undefined,
  },
  //f5
  {
    f: 5,
    d: "講堂",
    i: "gym1",
    s: "講堂;こうどう;koudou;hall;gymnasium;体育館;たいいくかん",
    l: null,
  },
  {
    f: 5,
    d: "占いの館",
    i: "gym2",
    s: "占いの館;うらないのやかた;gymnasium2;第二体育館;だいにたいいくかん",
    l: "v/URN",
  },
];
//こっちはクリックしたときに弾き飛ばす用のやつ