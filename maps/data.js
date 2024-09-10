
  /* しばし解説を 
    #datasetについて
    d:表示される名前（実際の企画名）
    s:検索エンジンに引っ掛けるための名前。日本語、ローマ字をぶちこむ
    i:目的の企画の<path>のid 要はdocument.getElementById()で取得するときのidってわけ
      =>maps_は抜いてます。全部ついてるので後から += でいい
  */
const dataset=[
  //f1
  {f:1,d:"食堂",i:"dining",s:"dining;食堂;しょくどう"},
  {f:1,d:"保健室",i:"hoken",s:"nurse office;保健室;ほけんしつ"},
  {f:1,d:"図書室",i:"tosyo",s:"library;図書館;図書室;としょかん;としょしつ;"},
  //f2
  {f:2,d:"H1A",i:"H1A",s:"h1a;高校1年a組;こうこういちねんaぐみ"},
  {f:2,d:"H1B",i:"H1B",s:"h1b;高校1年b組;こうこういちねんbぐみ"},
  {f:2,d:"H1C",i:"H1C",s:"h1c;高校1年c組;こうこういちねんcぐみ"},
  {f:2,d:"H1D",i:"H1D",s:"h1d;高校1年d組;こうこういちねんdぐみ"},
  {f:2,d:"H1E",i:"H1E",s:"h1e;高校1年e組;こうこういちねんeぐみ"},
  {f:2,d:"M1A",i:"M1A",s:"m1a;中学1年a組;ちゅうがくいちねんaぐみ"},
  {f:2,d:"M1B",i:"M1B",s:"m1b;中学1年b組;ちゅうがくいちねんbぐみ"},
  {f:2,d:"M1C",i:"M1C",s:"m1c;中学1年c組;ちゅうがくいちねんcぐみ"},
  {f:2,d:"M1D",i:"M1D",s:"m1d;中学1年d組ちゅうがくいちねんdぐみ"},
  {f:2,d:"M1E",i:"M1E",s:"m1e;中学1年e組;ちゅうがくいちねんeぐみ"},
  {f:2,d:"視聴覚室",i:"AVRoom",s:"audiovisualroomavroom;視聴覚室;しちょうかくしつ"},
  {f:2,d:"技術室",i:"TechRoom",s:"techroomtechnicaldepartment;技術室;ぎじゅつしつ"},
  {f:2,d:"美術室",i:"ArtRoom",s:"artroom;美術室;びじゅつしつ"},
  //f3
  {f:3,d:"H2A",i:"H2A",s:"h2a;高校2年a組;こうこうにねんaぐみ"},
  {f:3,d:"H2B",i:"H2B",s:"h2b;高校2年b組;こうこうにねんbぐみ"},
  {f:3,d:"H2C",i:"H2C",s:"h2c;高校2年c組;こうこうにねんcぐみ"},
  {f:3,d:"H2D",i:"H2D",s:"h2d;高校2年d組;こうこうにねんdぐみ"},
  {f:3,d:"H2E",i:"H2E",s:"h2e;高校2年e組;こうこうにねんeぐみ"},
  {f:3,d:"M2A",i:"M2A",s:"m2a;中学2年a組;ちゅうがくにねんaぐみ"},
  {f:3,d:"M2B",i:"M2B",s:"m2b;中学2年b組;ちゅうがくにねんbぐみ"},
  {f:3,d:"M2C",i:"M2C",s:"m2c;中学2年c組;ちゅうがくにねんcぐみ"},
  {f:3,d:"M2D",i:"M2D",s:"m2d;中学2年d組;ちゅうがくにねんdぐみ"},
  {f:3,d:"M2E",i:"M2E",s:"m2e;中学2年e組;ちゅうがくにねんeぐみ"},
  {f:3,d:"化学室",i:"ScienceLab",s:"sciencelabo;科学室;かがくしつ"},
  {f:3,d:"生物室",i:"BiologyLab",s:"biologylab;biologyroom;生物室;せいぶつしつ"},
  {f:3,d:"特別第三教室",i:"SRNo3",s:"specialclassroomno3;specialroomno3;特別第3教室;とくべつだいさんきょうしつ"},
  {f:3,d:"特別第四教室",i:"SRNo4",s:"specialclassroomno4;specialroomno4;特別第4教室;とくべつだいよんきょうしつ"},
  //f4
  {f:4,d:"H3A",i:"H3A",s:"h3a;高校3年a組;こうこうさんねんaぐみ"},
  {f:4,d:"H3B",i:"H3B",s:"h3b;高校3年b組;こうこうさんねんbぐみ"},
  {f:4,d:"H3C",i:"H3C",s:"h3c;高校3年c組;こうこうさんねんcぐみ"},
  {f:4,d:"H3D",i:"H3D",s:"h3d;高校3年d組;こうこうさんねんdぐみ"},
  {f:4,d:"H3E",i:"H3E",s:"h3e;高校3年e組;こうこうさんねんeぐみ"},
  {f:4,d:"M3A",i:"M3A",s:"m3a;中学3年a組;ちゅうがくさんねんaぐみ"},
  {f:4,d:"M3B",i:"M3B",s:"m3b;中学3年b組;ちゅうがくさんねんbぐみ"},
  {f:4,d:"M3C",i:"M3C",s:"m3c;中学3年c組;ちゅうがくさんねんcぐみ"},
  {f:4,d:"M3D",i:"M3D",s:"m3d;中学3年d組;ちゅうがくさんねんdぐみ"},
  {f:4,d:"M3E",i:"M3E",s:"m3e;中学3年e組;ちゅうがくさんねんeぐみ"},
  {f:4,d:"特別第一教室",i:"SRNo1",s:"specialclassroomno1;specialroomno1;特別第1教室;とくべつだいいちきょうしつ"},
  {f:4,d:"特別第二教室",i:"SRNo2",s:"specialclassroomno2;specialroomno2;特別第2教室;とくべつだいにきょうしつ"},
  {f:4,d:"音楽室",i:"Music",s:"musicroom;音楽室;おんがくしつ"},
  {f:4,d:"物理室",i:"Physics",s:"physicslab;物理室;ぶつりしつ"},
  //f5
  {f:5,d:"体育館",i:"gym1",s:"gymnasium;体育館;たいいくかん"},
  {f:5,d:"第二体育館",i:"gym2",s:"gymnasium2;第二体育館;だいにたいいくかん"},
];