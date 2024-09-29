
  /* しばし解説を 
    #datasetについて
    d:表示される名前（実際の企画名）
    s:検索エンジンに引っ掛けるための名前。日本語、ローマ字をぶちこむ <= これ企画のクラスね、場所のクラスちゃうよ idは場所の名前やけど
    i:目的の企画の<path>のid 要はdocument.getElementById()で取得するときのidってわけ
      =>maps_は抜いてます。全部ついてるので後から += でいい
  */
/* 
  #追記
  　なんでこんなことしてるんでしょうね
  　もしこれを見てるひといたら連絡チョーダイナ
    => discord:tamago0524
*/
const dataset=[
  //f1
  {f:1,d:"食堂",i:"dining",s:"dining;食堂;しょくどう"},
  {f:1,d:"保健室",i:"hoken",s:"nurse office;保健室;ほけんしつ"},
  {f:1,d:"図書室",i:"tosyo",s:"library;図書館;図書室;としょかん;としょしつ;"},
  //f2
  {f:2,d:"愛有ーる",i:"H1A",s:"h3d;高校3年d組;こうこうさんねんdぐみ;あいあーる;aia-ru;愛有ーる"},
  //{f:2,d:"H1B",i:"H1B",s:"h1b;高校1年b組;こうこういちねんbぐみ"},
  {f:2,d:"AH! A stery",i:"H1C",s:"ah! a stery;ah!astery;"},
  {f:2,d:"籠手面堂",i:"H1D",s:"籠手面堂;こてめんどう;kotemendou;剣道有志;けんどうゆうし;kendouyusi;"},
  {f:2,d:"星光満天宮",i:"H1E",s:"星光満天宮;せいこうまんてんぐう;seikoumantengu;文芸部;ぶんげいぶ;bungeibu;"},
  {f:2,d:"ビ。",i:"M1A",s:"び。;bi.;美術部;びじゅつぶ;bijutubu;"},
  {f:2,d:"中学美術展示",i:"M1B",s:"中学美術展示;ちゅうがくびじゅつてんじ;chuugakubijututenji;"},
  //{f:2,d:"M1C",i:"M1C",s:"m1c;中学1年c組;ちゅうがくいちねんcぐみ"},
  {f:2,d:"中学一年バザー",i:"M1D",s:"中学一年ばざー;ちゅうがくいちねんばざー;chuugakuichinenbazza-;"},
  //{f:2,d:"M1E",i:"M1E",s:"m1e;中学1年e組;ちゅうがくいちねんeぐみ"},
  {f:2,d:"カトリック研究会",i:"catho",s:"かとりっく研究会;かとりっくけんきゅうかい;catholickenkyuukai;"},
  {f:2,d:"映像企画",i:"AVRoom",s:"映像企画;えいぞうきかく;eizoukikaku;audiovisualroomavroom;視聴覚室;しちょうかくしつ"},
  {f:2,d:"お化け屋敷",i:"TechRoom",s:"お化け屋敷;おばけやしき;obakeyashiki;"},
  //{f:2,d:"美術室",i:"ArtRoom",s:"artroom;美術室;びじゅつしつ"},
  {f:2,d:"受験生相談窓口",i:"juken",s:"受験生相談窓口;じゅけんせいそうだんまどぐち;jukenseisoudanmadoguchi;"},
  {f:2,d:"インフォメーション",i:"info",s:"いんふぉめーしょん;information;"},
  //f3
  {f:3,d:"んけうす",i:"H2A",s:"んけうす;nnkeusu;数学研究部;すうがくけんきゅうぶ;suugakukenkyubu;"},
  {f:3,d:"社会科展示",i:"H2B",s:"社会科展示;しゃかいかてんじ;syakaikatenji"},
  {f:3,d:"AOPIΣTOΣ",i:"H2C",s:"AOPIΣTOΣ;"},
  {f:3,d:"電気工学部",i:"H2D",s:"電気工学部;でんきこうがくぶ;denkikougakubu;"},
  {f:3,d:"ほしのこのこのこまとばんばん",i:"H2E",s:"ほしのこのこのこまとばんばん;"},//@?<
  {f:3,d:"Round-A",i:"M2A",s:"round-a;rounda;"},
  {f:3,d:"ご注文は射的ですか？",i:"M2B",s:"ご注文は射的ですか？;ご注文は射的ですか?;ごちゅうもんはしゃてきですか？;ごちゅうもんはしゃてきですか?;"},
  {f:3,d:"Hanter x Hanter",i:"M2C",s:"hanter x hanter;hanterxhanter;hanter × hanter;hanter×hanter"},
  {f:3,d:"Round2",i:"M2D",s:"round2"},
  {f:3,d:"科学の友",i:"ScienceLab",s:"科学の友;かがくのとも;kagakunotomo;science friend;sciencelabo;科学室;かがくしつ"},
  {f:3,d:"解体新書",i:"BiologyLab",s:"解体新書;かいたいしんしょ;biologylab;biologyroom;生物室;せいぶつしつ"},
  {f:3,d:"鉄道研究会",i:"SRNo3",s:"鉄道研究会;てつどうけんきゅうかい;tetudoukenkyukai;specialclassroomno3;specialroomno3;特別第3教室;とくべつだいさんきょうしつ"},
  {f:3,d:"けん玉教室",i:"SRNo4",s:"けん玉教室;けんだまきょうしつ;kendamakyousituspecialclassroomno4;specialroomno4;特別第4教室;とくべつだいよんきょうしつ"},
  //f4
  {f:4,d:"地歴部",i:"H3A",s:"地歴部;ちれきぶ;chirekibu;"},
  {f:4,d:"おばべやしき",i:"H3B",s:"おばべやしき;obabeyashiki;"},
  //{f:4,d:"H3C",i:"H3C",s:"h3c;高校3年c組;こうこうさんねんcぐみ"},
  {f:4,d:"囲碁将棋部",i:"H3D",s:"囲碁将棋部;いごしょうぎぶ;"},
  {f:4,d:"コーヒーカップ",i:"H3E",s:"こーひーかっぷ;ko-hi-kappu;coffe cup;"},
  {f:4,d:"M3A",i:"M3A",s:"m3a;中学3年a組;ちゅうがくさんねんaぐみ"},
  //{f:4,d:"M3B",i:"M3B",s:"m3b;中学3年b組;ちゅうがくさんねんbぐみ"},
  {f:4,d:"Round-C",i:"M3C",s:"round-c;roundc:らうんどc;"},
  {f:4,d:"スターライトプラネタリウム",i:"M3D",s:"すたーらいとぷらねたりうむ;starlight planetarium"},
  //{f:4,d:"M3E",i:"M3E",s:"m3e;中学3年e組;ちゅうがくさんねんeぐみ"},
  {f:4,d:"メリーゴーランド",i:"SRNo1",s:"めりーごーらんど;merry go round;merry-go-round;merrygoround;specialclassroomno1;specialroomno1;特別第1教室;とくべつだいいちきょうしつ"},
  {f:4,d:"星光王",i:"SRNo2",s:"星光王;せいこうおう;seikouking;くいず研究会;くいずけんきゅうかい;specialclassroomno2;specialroomno2;特別第2教室;とくべつだいにきょうしつ"},
  {f:4,d:"音楽室",i:"Music",s:"musicroom;音楽室;おんがくしつ"},
  {f:4,d:"写真部",i:"Physics",s:"写真部;しゃしんぶ;physicslab;物理室;ぶつりしつ"},
  //f5
  {f:5,d:"講堂",i:"gym1",s:"講堂;こうどう;koudou;hall;gymnasium;体育館;たいいくかん"},
  {f:5,d:"占いの館",i:"gym2",s:"占いの館;うらないのやかた;gymnasium2;第二体育館;だいにたいいくかん"},
];