import { Quiz } from '@/types/quiz';

export const quizAll: Quiz[] = [
  {
    quizId: '1',
    question:
      'ハンター応募カードに書かれていた内容からの問題です。\n「わたしは はんたーしかくしけんにせいしきに おうぼいたします。」次の文は？',
    options: [
      {
        optionId: '0',
        text: 'てすとのさいにしょうじる あらゆるじこについてせきにんをおいます。',
      },
      {
        optionId: '1',
        text: 'しけんのさいてんは すべてはんたーきょうかいにゆだねます。',
      },
      { optionId: '2', text: 'せいせいどうどう たたかうことをちかいます。' },
      { optionId: '3', text: 'いかなるしれんも のりこえることをちかいます。' },
      { optionId: '4', text: 'わたしは ぷろのはんたーになることのぞみます。' },
    ],
  },
  {
    quizId: '2',
    question:
      'ゴンはキツネグマに襲われた時、カイトに助けてもらいました。\nこの時、カイトは何を聞いてゴンを助けに来た？',
    options: [
      { optionId: '0', text: 'マダラリスの警告音' },
      { optionId: '1', text: 'キツネグマの叫び声' },
      { optionId: '2', text: 'ゴンの叫び声' },
      { optionId: '3', text: 'キツネグマに怯える小生物の叫び声' },
      { optionId: '4', text: 'キツネグマがゴンを殴った音' },
    ],
  },
  {
    quizId: '3',
    question:
      'ゴンがカイトと初めて出会ったのは、ゴンがハンター試験を受けた日から何年前？',
    options: [
      { optionId: '0', text: '3年前' },
      { optionId: '1', text: '2年前' },
      { optionId: '2', text: '4年前' },
      { optionId: '3', text: '5年前' },
      { optionId: '4', text: '6年前' },
    ],
  },
  {
    quizId: '4',
    question:
      'ハンター試験に向かう船での、船長とゴンのやりとりからの問題です。\n嵐が過ぎ去った後、さらにすごい嵐が来ることがゴンは分かりました。\nなぜ、嵐が来ることが分かったのか船長に尋ねられ、ゴンが回答した内容はどれ？',
    options: [
      {
        optionId: '0',
        text: '風が生ぬるくて塩気が多いし、ウミヅルも注意しあっているから',
      },
      { optionId: '1', text: '雲の流れが早く、色もくすんで来ているから' },
      { optionId: '2', text: '流れに反して、魚が陸の方へ泳ぎはじめているから' },
      {
        optionId: '3',
        text: 'かもめが狩りを中止して、南へ飛んでいっているから',
      },
      { optionId: '4', text: '風が強く、波が強くなってきているから' },
    ],
  },
  {
    quizId: '5',
    question: 'ゴンの出身地は？',
    options: [
      { optionId: '0', text: 'くじら島' },
      { optionId: '1', text: 'いるか島' },
      { optionId: '2', text: 'しゃち島' },
      { optionId: '3', text: 'まぐろ島' },
      { optionId: '4', text: 'とびうお島' },
    ],
  },
  {
    quizId: '6',
    question:
      'ハンター試験に向かう船での、船長とゴンのやりとりからの問題です。\nゴンは嵐が過ぎ去った後、さらにすごい嵐が来ることが分かりました。ゴンは何時間後にくると予想した？',
    options: [
      { optionId: '0', text: '3時間後' },
      { optionId: '1', text: '1.5時間後' },
      { optionId: '2', text: '5時間後' },
      { optionId: '3', text: '2時間後' },
      { optionId: '4', text: '1時間後' },
    ],
  },
  {
    quizId: '7',
    question:
      'クラピカの一族が幻影旅団に皆殺しにされたのは、クラピカがハンター試験を受けた日から何年前？',
    options: [
      { optionId: '0', text: '4年前' },
      { optionId: '1', text: '3年前' },
      { optionId: '2', text: '5年前' },
      { optionId: '3', text: '6年前' },
      { optionId: '4', text: '7年前' },
    ],
  },
  {
    quizId: '8',
    question:
      'ハンター試験の試験会場に向かう船の中からの問題です。\nクラピカは船長にハンターになりたい理由を話しました。その時語った、クラピカが最も恐れていることは何？',
    options: [
      { optionId: '0', text: '怒りがやがて風化してしまうこと' },
      {
        optionId: '1',
        text: '復讐のことしか考えられない人間になってしまうこと',
      },
      { optionId: '2', text: '旅団がクラピカ以外の手により潰されてしまうこと' },
      { optionId: '3', text: 'クルタ族の血が途切れてしまうこと' },
      { optionId: '4', text: '攫われた父がすでに殺されていること' },
    ],
  },
  {
    quizId: '9',
    question:
      'ハンター試験の試験会場に向かう船の中からの問題です。\nレオリオは船長にハンターになりたい理由を尋ねられ、『金さ！！金さえあれゃ何でも手に入るからな』と答えました。このレオリオの発言に対して、クラピカは『○○は金で買えないよ』と答えました。○○に入る言葉は何？',
    options: [
      { optionId: '0', text: '品性' },
      { optionId: '1', text: '知性' },
      { optionId: '2', text: '強さ' },
      { optionId: '3', text: '愛' },
      { optionId: '4', text: '命' },
    ],
  },
  {
    quizId: '10',
    question: 'クラピカは何族の生き残り？',
    options: [
      { optionId: '0', text: 'クルタ族' },
      { optionId: '1', text: 'クラタ族' },
      { optionId: '2', text: 'クロタ族' },
      { optionId: '3', text: 'クロル族' },
      { optionId: '4', text: 'クラル族' },
    ],
  },
  {
    quizId: '11',
    question:
      'ハンター試験を受けにゴンは船に乗りました。船がついた場所はどこ？',
    options: [
      { optionId: '0', text: 'ドーレ港' },
      { optionId: '1', text: 'ハーレ港' },
      { optionId: '2', text: 'ミーレ港' },
      { optionId: '3', text: 'ヤハナ港' },
      { optionId: '4', text: 'ヤーレ港' },
    ],
  },
  {
    quizId: '12',
    question:
      'ハンター試験編からの問題です。\nゴンが受けた年の試験会場の受付は何地区？',
    options: [
      { optionId: '0', text: 'ザバン地区' },
      { optionId: '1', text: 'ヤドリ地区' },
      { optionId: '2', text: 'ミーラ地区' },
      { optionId: '3', text: 'イハマ地区' },
      { optionId: '4', text: 'カマリ地区' },
    ],
  },
  {
    quizId: '13',
    question:
      'ゴン達がハンター試験を受けるために、一本杉に向かっていました。\n途中に出てきたおばぁちゃん達が出題したクイズは何クイズ？',
    options: [
      { optionId: '0', text: 'ドキドキニ択クイズ' },
      { optionId: '1', text: 'ワクワクニ択クイズ' },
      { optionId: '2', text: 'ハラハラニ択クイズ' },
      { optionId: '3', text: 'バクバクニ択クイズ' },
      { optionId: '4', text: 'ウキウキニ択クイズ' },
    ],
  },
  {
    quizId: '14',
    question:
      'ハンター試験編からの問題です。\n「母親と恋人が悪党につかまり一人しか助けられない１母親２恋人どちらを助ける？」と聞かれた男は何と答えた？',
    options: [
      { optionId: '0', text: '1' },
      { optionId: '1', text: '2' },
      { optionId: '2', text: '沈黙' },
      { optionId: '3', text: '両方助ける' },
      { optionId: '4', text: 'どちらも助けない' },
    ],
  },
  {
    quizId: '15',
    question:
      'ゴン達がハンター試験を受けるために、一本杉に向かう途中に出てきたおばぁちゃん達が出題した「ドキドキニ択クイズ」からの出題です。\nゴン達の前に答えた男の問題は、「母親と恋人が○○につかまり一人しか助けられない。１母親２恋人どちらを助ける？」でした。○○に入る言葉を選べ。',
    options: [
      { optionId: '0', text: '悪党' },
      { optionId: '1', text: '魔獣' },
      { optionId: '2', text: '浮気相手' },
      { optionId: '3', text: '幻影旅団' },
      { optionId: '4', text: '殺人鬼' },
    ],
  },
  {
    quizId: '16',
    question:
      'ゴン達がハンター試験を受けるために、一本杉に向かう途中に出てきたおばぁちゃん達が出題した「ドキドキニ択クイズ」からの出題です。\nゴン達へのクイズは、「○○と○○が誘拐された一人しか取り戻せない。どちらを取り戻す？」でした。○○と○○の正しい組み合わせは？',
    options: [
      { optionId: '0', text: '息子と娘' },
      { optionId: '1', text: '父と母' },
      { optionId: '2', text: '母と娘' },
      { optionId: '3', text: '父と息子' },
      { optionId: '4', text: '祖母と母' },
    ],
  },
  {
    quizId: '17',
    question:
      'ゴン達がハンター試験を受けるために、一本杉に向かっていました。途中に出てきたおばぁちゃん達が出題したクイズを見事クリアし正しい道を教えて貰いました。\nその時、おばぁちゃんにどのくらい歩けば着くと言われた？',
    options: [
      { optionId: '0', text: '2時間' },
      { optionId: '1', text: '3時間' },
      { optionId: '2', text: '4時間' },
      { optionId: '3', text: '5時間' },
      { optionId: '4', text: '6時間' },
    ],
  },
  {
    quizId: '18',
    question:
      'ハンター試験編からの問題です。\nゴンたちのナビゲーターになってくれた魔獣「キリコ」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '凶狸狐' },
      { optionId: '1', text: '霧殺' },
      { optionId: '2', text: '斬狐' },
      { optionId: '3', text: '鬼鞭子' },
      { optionId: '4', text: '奇里虚' },
    ],
  },
  {
    quizId: '19',
    question:
      'ハンター試験編からの問題です。\nゴンたちのナビゲーターになってくれた魔獣のうち、ゴンとクラピカに殴られた魔獣は誰？',
    options: [
      { optionId: '0', text: '夫' },
      { optionId: '1', text: '妻' },
      { optionId: '2', text: '息子' },
      { optionId: '3', text: '娘' },
      { optionId: '4', text: '息子の友人' },
    ],
  },
  {
    quizId: '20',
    question:
      'ハンター試験編からの問題です。\nゴンたちのナビゲーターになってくれた魔獣の娘はある刺青を入れていました。この刺青はある一族の女性が掘るものなのですが、ある一族とは？',
    options: [
      { optionId: '0', text: 'スミ賊' },
      { optionId: '1', text: 'マリア賊' },
      { optionId: '2', text: 'カラ賊' },
      { optionId: '3', text: 'ムハ賊' },
      { optionId: '4', text: 'イミカ賊' },
    ],
  },
  {
    quizId: '21',
    question: 'ゴンが試験を受けた年のハンター試験会場の住所は？',
    options: [
      { optionId: '0', text: 'ザバン市ツバシ町2-5-10' },
      { optionId: '1', text: 'ザバン市ツバシ町2-7-12' },
      { optionId: '2', text: 'ザバン市ツバシ町2-7-8' },
      { optionId: '3', text: 'ザバン市ツバシ町1-7-12' },
      { optionId: '4', text: 'ザバン市ツバシ町2-6-8' },
    ],
  },
  {
    quizId: '22',
    question:
      'ハンター試験編からの問題です。\nナビゲーター「凶狸狐」に案内された試験会場の入口はなんと、普通の定食屋でした。\nこの定食屋の名前は？',
    options: [
      { optionId: '0', text: 'めしどころ ごはん' },
      { optionId: '1', text: 'にくりょうりのていしょくや' },
      { optionId: '2', text: 'わふうりょうり にほんてい' },
      { optionId: '3', text: 'おおもりていしょく ちから' },
      { optionId: '4', text: 'はんばーくていしょく かていのあじ' },
    ],
  },
  {
    quizId: '23',
    question:
      'ハンター試験編からの問題です。\nナビゲーター「凶狸狐」に案内された試験会場の入口はなんと、普通の定食屋でした。\n定食屋の中に入り、凶狸狐は何を頼んだ？',
    options: [
      { optionId: '0', text: 'ステーキ定食' },
      { optionId: '1', text: '焼肉定食' },
      { optionId: '2', text: 'ハンバーグ定食' },
      { optionId: '3', text: '焼き鳥定食' },
      { optionId: '4', text: '生姜焼き定食' },
    ],
  },
  {
    quizId: '24',
    question:
      'ハンター試験編からの問題です。\nナビゲーター「凶狸狐」に案内された試験会場の入口はなんと、普通の定食屋でした。\n中に入り、凶狸狐はステーキ定食を頼みました。\n焼き方を尋ねられなんて答えた？',
    options: [
      { optionId: '0', text: '弱火でじっくり' },
      { optionId: '1', text: '弱火でさっと' },
      { optionId: '2', text: '中火でさっと' },
      { optionId: '3', text: '強火でさっと' },
      { optionId: '4', text: '強火でじっくり' },
    ],
  },
  {
    quizId: '25',
    question:
      'ハンター試験編、ナビゲーター「凶狸狐」が教えてくれた内容からの問題です。\nハンター試験会場までたどり着く確率はどのくらい？',
    options: [
      { optionId: '0', text: '1万人に1人' },
      { optionId: '1', text: '10万人に1人' },
      { optionId: '2', text: '100万人に1人' },
      { optionId: '3', text: '500万人に1人' },
      { optionId: '4', text: '1000万人に1人' },
    ],
  },
  {
    quizId: '26',
    question:
      'ハンター試験にルーキーが合格する確率はどのくらいと言われている？',
    options: [
      { optionId: '0', text: '3年に1人' },
      { optionId: '1', text: '4年に1人' },
      { optionId: '2', text: '5年に1人' },
      { optionId: '3', text: '7年に1人' },
      { optionId: '4', text: '10年に1人' },
    ],
  },
  {
    quizId: '27',
    question: '世界大富豪ランキング100にはハンターが何人、名をつらねている？',
    options: [
      { optionId: '0', text: '60人' },
      { optionId: '1', text: '64人' },
      { optionId: '2', text: '70人' },
      { optionId: '3', text: '82人' },
      { optionId: '4', text: '56人' },
    ],
  },
  {
    quizId: '28',
    question:
      'ハンター試験からの問題です。\n新人潰しのトンパは、ゴンに「俺は何回試験を受けている」と言った？',
    options: [
      { optionId: '0', text: '35回' },
      { optionId: '1', text: '30回' },
      { optionId: '2', text: '40回' },
      { optionId: '3', text: '25回' },
      { optionId: '4', text: '20回' },
    ],
  },
  {
    quizId: '29',
    question: 'ゴンが試験を受けた年のハンター試験、一次試験参加者は何人？',
    options: [
      { optionId: '0', text: '404人' },
      { optionId: '1', text: '405人' },
      { optionId: '2', text: '406人' },
      { optionId: '3', text: '407人' },
      { optionId: '4', text: '408人' },
    ],
  },
  {
    quizId: '30',
    question:
      'ゴンが試験を受けた年のハンター試験からの問題です。\n一次試験、最初の脱落者は誰？',
    options: [
      { optionId: '0', text: 'ニコル' },
      { optionId: '1', text: 'ニコニコ' },
      { optionId: '2', text: 'ニコ' },
      { optionId: '3', text: 'ニコロ' },
      { optionId: '4', text: 'ニクロ' },
    ],
  },
  {
    quizId: '31',
    question:
      'ゴンが試験を受けた年のハンター試験からの問題です。\n一次試験、最初の脱落者となったのはニコルでした。\nニコルは何キロ地点で脱落した？',
    options: [
      { optionId: '0', text: '80キロメートル地点' },
      { optionId: '1', text: '75キロメートル地点' },
      { optionId: '2', text: '115キロメートル地点' },
      { optionId: '3', text: '250キロメートル地点' },
      { optionId: '4', text: '60キロメートル地点' },
    ],
  },
  {
    quizId: '32',
    question:
      'ゴンが試験を受けた年のハンター試験、一次試験から難易度マックスの問題です。\n地上への階段中間地点で脱落者の人数が示されています。\n何人でしょうか？',
    options: [
      { optionId: '0', text: '37人' },
      { optionId: '1', text: '58人' },
      { optionId: '2', text: '36人' },
      { optionId: '3', text: '59人' },
      { optionId: '4', text: '60人' },
    ],
  },
  {
    quizId: '33',
    question:
      'ゴンが試験を受けた年のハンター試験、一次試験からの問題です。\n階段を登り切ったとき、サトツさんを偽物だと訴える人が現れました。\n彼はヒソカにトランプで殺されますが、そのトランプの数字の組み合わせは？',
    options: [
      { optionId: '0', text: '4・8・10' },
      { optionId: '1', text: '4・6・10' },
      { optionId: '2', text: '1・8・10' },
      { optionId: '3', text: '1・5・9' },
      { optionId: '4', text: '1・7・8' },
    ],
  },
  {
    quizId: '34',
    question:
      'ゴンが試験を受けた年のハンター試験、一次試験からの問題です。\n階段を登り切ったとき、サトツさんを偽物だと訴える人が現れました。\n彼はヒソカにトランプで殺されますが、その時のトランプの絵柄の組み合わせは？',
    options: [
      { optionId: '0', text: 'スペード、ハート、ダイヤ' },
      { optionId: '1', text: 'ハート、ハート、ダイヤ' },
      { optionId: '2', text: 'スペード、スペード、スペード' },
      { optionId: '3', text: 'ダイヤ、スペード、クローバー' },
      { optionId: '4', text: 'ハート、ハート、スペード' },
    ],
  },
  {
    quizId: '35',
    question:
      'ゴンが試験を受けた年のハンター試験、一次試験からの問題です。\n階段を登り切ったとき、サトツさんを偽物の試験官だと訴える人が現れました。\nヒソカは、本物の試験官を見極めるために、二人にトランプを投げました。\nこの時サトツさんに投げていないトランプはどれ？',
    options: [
      { optionId: '0', text: 'ハートの9' },
      { optionId: '1', text: 'ダイヤの4' },
      { optionId: '2', text: 'ダイヤの2' },
      { optionId: '3', text: 'スペードの5' },
      { optionId: '4', text: 'クローバーの9' },
    ],
  },
  {
    quizId: '36',
    question:
      'ゴンが試験を受けた年のハンター試験、一次試験からの問題です。\nヌメーレ湿原へ突入できたのは何人？',
    options: [
      { optionId: '0', text: '311人' },
      { optionId: '1', text: '290人' },
      { optionId: '2', text: '288人' },
      { optionId: '3', text: '289人' },
      { optionId: '4', text: '287人' },
    ],
  },
  {
    quizId: '37',
    question:
      'ゴンが試験を受けた年のハンター試験、一次試験からの問題です。\n階段を登り切ったあとに突入した湿原の名前は？',
    options: [
      { optionId: '0', text: 'ヌメーレ湿原' },
      { optionId: '1', text: 'ナメール湿原' },
      { optionId: '2', text: 'オヌール湿原' },
      { optionId: '3', text: 'カメーロ湿原' },
      { optionId: '4', text: 'タローモ湿原' },
    ],
  },
  {
    quizId: '38',
    question:
      'ゴンが試験を受けた年のハンター試験、一次試験からの問題です。\n霧の深い日だけ活動する背中に群生するヒトニイチゴを使い、霧で迷い込んだ人間を誘い、襲う生物の名前は？',
    options: [
      { optionId: '0', text: 'キリヒトノセガメ' },
      { optionId: '1', text: 'ヒトキリイチゴ' },
      { optionId: '2', text: 'イチゴキリヒト' },
      { optionId: '3', text: 'キリヒトイチゴ' },
      { optionId: '4', text: 'ヒトノキリセガメ' },
    ],
  },
  {
    quizId: '39',
    question:
      'ゴンが試験を受けた年のハンター試験、一次試験からの問題です。\n非常に動きがのろいのでもっぱら地中に姿を隠し、大口を開けて獲物がその上を通るのをひたすら待つ生物の名前は？',
    options: [
      { optionId: '0', text: 'マチボッケ' },
      { optionId: '1', text: 'オオグチガエル' },
      { optionId: '2', text: 'キリヒトノセガメ' },
      { optionId: '3', text: 'カクレガエル' },
      { optionId: '4', text: 'オオグチノロマ' },
    ],
  },
  {
    quizId: '40',
    question:
      'ゴンが試験を受けた年のハンター試験、一次試験からの問題です。\nウソ八百を並べたてて人間を罠に誘い込んで殺し、屍肉をあさる生物の名前は？',
    options: [
      { optionId: '0', text: 'ホラガラス' },
      { optionId: '1', text: 'ウソツキカラス' },
      { optionId: '2', text: 'ウソダカラ' },
      { optionId: '3', text: 'ホライイガラス' },
      { optionId: '4', text: 'ウソガラス' },
    ],
  },
  {
    quizId: '41',
    question:
      'ゴンが試験を受けた年のハンター試験、一次試験からの問題です。\n踏むと爆発し動けなくなった獲物に胞子をまいて繁殖する生物の名前は？',
    options: [
      { optionId: '0', text: 'ジラシイタケ' },
      { optionId: '1', text: 'パラセクト' },
      { optionId: '2', text: 'ホウシマキダケ' },
      { optionId: '3', text: 'ホウシダケ' },
      { optionId: '4', text: 'ホウシマキ' },
    ],
  },
  {
    quizId: '42',
    question:
      'ゴンが試験を受けた年のハンター試験、一次試験からの問題です。\n不思議な飛び方で獲物を眠らせ生きたまま幼虫のエサにする生物の名前は？',
    options: [
      { optionId: '0', text: 'サイミンチョウ' },
      { optionId: '1', text: 'ネムラセチョウ' },
      { optionId: '2', text: 'スイミンチョウ' },
      { optionId: '3', text: 'チョウキモチイ' },
      { optionId: '4', text: 'ネンリキチョウ' },
    ],
  },
  {
    quizId: '43',
    question:
      'ゴンが試験を受けた年のハンター試験からの問題です。\nヒソカが一次試験の途中で試験管ごっこを始めました。\n「君達まとめてこれ一枚で十分かな。」と発言し、次々と他の受験者を倒していきました。\nこの時、使用していた一枚のトランプは何？',
    options: [
      { optionId: '0', text: 'ハートの4' },
      { optionId: '1', text: 'ハートの6' },
      { optionId: '2', text: 'スペードの5' },
      { optionId: '3', text: 'ハートの8' },
      { optionId: '4', text: 'ハートの10' },
    ],
  },
  {
    quizId: '44',
    question:
      'ゴンが試験を受けた年のハンター試験からの問題です。\nヒソカが一次試験の途中で試験管ごっこを始めました。\n「君達まとめてこれ一枚で十分かな。」と発言し、次々と他の受験者を倒していきました。\n残った3人のうち、クラピカ、レオリオでない人の、プレートの番号は何番？',
    options: [
      { optionId: '0', text: '76' },
      { optionId: '1', text: '85' },
      { optionId: '2', text: '154' },
      { optionId: '3', text: '354' },
      { optionId: '4', text: '147' },
    ],
  },
  {
    quizId: '45',
    question:
      'ゴンが試験を受けた年のハンター試験からの問題です。\nヒソカが一次試験の途中で試験管ごっこを始めました。\nゴンたちは試験管ごっこに巻き込まれてしまいサトツさんと離れてしまいました。\n試験管ごっこのあと、ゴンとクラピカはどうやって二次試験会場まで向かった？',
    options: [
      { optionId: '0', text: 'レオリオの匂いをたどった' },
      { optionId: '1', text: 'キルアの匂いをたどった' },
      { optionId: '2', text: 'クラピカの匂いをたどった' },
      { optionId: '3', text: 'ヒソカの匂いをたどった' },
      { optionId: '4', text: 'サトツさんの匂いをたどった' },
    ],
  },
  {
    quizId: '46',
    question:
      'ゴンが試験を受けた年のハンター試験からの問題です。\n二次試験の会場はどこ？',
    options: [
      { optionId: '0', text: 'ビスカ森林公園' },
      { optionId: '1', text: 'ヨセミテ国立公園' },
      { optionId: '2', text: 'アオラキ/マウント・クック国立公園' },
      { optionId: '3', text: 'コモド国立公園' },
      { optionId: '4', text: 'カカドゥ国立公園' },
    ],
  },
  {
    quizId: '47',
    question:
      'ゴンが試験を受けた年のハンター試験からの問題です。 \n二次試験は何時から始まった？',
    options: [
      { optionId: '0', text: '12：00' },
      { optionId: '1', text: '13：00' },
      { optionId: '2', text: '14：00' },
      { optionId: '3', text: '15：00' },
      { optionId: '4', text: '10：00' },
    ],
  },
  {
    quizId: '48',
    question:
      'ゴンが試験を受けた年のハンター試験、二次試験からの問題です。 \nブタの丸焼きを作るように、要求してきた試験官の名前は？',
    options: [
      { optionId: '0', text: 'ブハラ' },
      { optionId: '1', text: 'サトツ' },
      { optionId: '2', text: 'メンチ' },
      { optionId: '3', text: 'ブタリ' },
      { optionId: '4', text: 'メロチ' },
    ],
  },
  {
    quizId: '49',
    question:
      'ゴンが試験を受けた年のハンター試験、二次試験からの問題です。 \n二次試験の参加者は何人？',
    options: [
      { optionId: '0', text: '148人' },
      { optionId: '1', text: '252人' },
      { optionId: '2', text: '322人' },
      { optionId: '3', text: '323人' },
      { optionId: '4', text: '54人' },
    ],
  },
  {
    quizId: '50',
    question:
      'ゴンが試験を受けた年のハンター試験、二次試験からの問題です。\n試験管ブハラの試験メニューは豚の丸焼きでした。ビスカの森には豚は一種類しか生息しません。その豚の名前は？',
    options: [
      { optionId: '0', text: 'グレイトスタンプ' },
      { optionId: '1', text: 'マンガリッツァ' },
      { optionId: '2', text: 'メイシャントン' },
      { optionId: '3', text: 'デュロック' },
      { optionId: '4', text: 'ランドレース' },
    ],
  },
  {
    quizId: '51',
    question:
      'ゴンが試験を受けた年のハンター試験、二次試験からの問題です。\n試験管ブハラの試験メニューは豚の丸焼きでした。この豚の弱点は？',
    options: [
      { optionId: '0', text: '頭部' },
      { optionId: '1', text: '口' },
      { optionId: '2', text: '背中' },
      { optionId: '3', text: '右足' },
      { optionId: '4', text: '目' },
    ],
  },
  {
    quizId: '52',
    question:
      'ゴンが試験を受けた年のハンター試験、二次試験からの問題です。 \n試験管ブハラは豚の丸焼きを何頭食べた？',
    options: [
      { optionId: '0', text: '70頭' },
      { optionId: '1', text: '45頭' },
      { optionId: '2', text: '60頭' },
      { optionId: '3', text: '55頭' },
      { optionId: '4', text: '40頭' },
    ],
  },
  {
    quizId: '53',
    question:
      'ゴンが試験を受けた年のハンター試験からの問題です。\n二次試験の試験管は二人いました。\nブハラともう一人は誰？',
    options: [
      { optionId: '0', text: 'メンチ' },
      { optionId: '1', text: 'チキン' },
      { optionId: '2', text: 'トン' },
      { optionId: '3', text: 'ハム' },
      { optionId: '4', text: 'ゲイ' },
    ],
  },
  {
    quizId: '54',
    question:
      'ゴンが試験を受けた年のハンター試験から難易度マックスの問題です。\n二次試験が行われていた時、ネテロ会長は何号室にいた？',
    options: [
      { optionId: '0', text: '1209' },
      { optionId: '1', text: '3145' },
      { optionId: '2', text: '5042' },
      { optionId: '3', text: '4701' },
      { optionId: '4', text: '1192' },
    ],
  },
  {
    quizId: '55',
    question:
      'ゴンが試験を受けた年のハンター試験、二次試験からの問題です。\n試験管メンチが熱くなってしまい、一時は合格者が0人となりました。\nしかしメンチに非があったとネテロ会長は判断して、別の試験を用意しました。その試験は崖にある卵を取ってくることでした。\nさて、その卵は何の卵？',
    options: [
      { optionId: '0', text: 'クモワシ' },
      { optionId: '1', text: 'コマツグミ' },
      { optionId: '2', text: 'ウタスズメ' },
      { optionId: '3', text: 'アレンハチドリ' },
      { optionId: '4', text: 'オウゴンヒワ' },
    ],
  },
  {
    quizId: '56',
    question:
      'ゴンが試験を受けた年のハンター試験、二次試験からの問題です。\n試験管メンチが熱くなってしまい、一時は合格者が0人となりました。\nしかしメンチに非があったとネテロ会長は判断して別の試験を用意しました。その試験は崖にある卵を取ってくることでした。\nさて、その試験は何という山で行われた？',
    options: [
      { optionId: '0', text: 'マフタツ山' },
      { optionId: '1', text: 'アララト山' },
      { optionId: '2', text: 'アンナプルナ' },
      { optionId: '3', text: 'ダウラギリ' },
      { optionId: '4', text: 'コングール山' },
    ],
  },
  {
    quizId: '57',
    question:
      'キルアが使う、暗殺術の一つ。足運びに緩急をつけることで残像を生じさせ敵を幻惑するワザ。安保と呼ばれる無音歩行術を応用した高等テクニックの名称は？',
    options: [
      { optionId: '0', text: '肢曲' },
      { optionId: '1', text: '足曲' },
      { optionId: '2', text: '腰曲' },
      { optionId: '3', text: '腿曲' },
      { optionId: '4', text: '膨曲' },
    ],
  },
  {
    quizId: '58',
    question:
      'ゴンがハンター試験を受けた年のハンター試験から難易度マックスの問題です。\n三次試験の試験会場に移動している飛行船の中で、ゴンとキルアはネテロ会長とボール取りゲームをしました。\nゲーム終了後にキルアは、絡んできた二人の人間を殺しました。殺された二人の番号の組み合わせはどれ？',
    options: [
      { optionId: '0', text: '390番と391番' },
      { optionId: '1', text: '15番と16番' },
      { optionId: '2', text: '280番と281番' },
      { optionId: '3', text: '360番と361番' },
      { optionId: '4', text: '89番と90番' },
    ],
  },
  {
    quizId: '59',
    question:
      'ゴンがハンター試験を受けた年のハンター試験から、難易度マックスの問題です。\n三次試験の試験会場に移動している飛行船の中で、ゴンとキルアはネテロ会長とボール取りゲームをしました。キルアは途中で辞めましたがゴンは朝方までボール取りゲームを続けました。\nゴンが勝った気になり、やめたのは何時頃？一番近いものを選べ。',
    options: [
      { optionId: '0', text: '午前4時18分' },
      { optionId: '1', text: '午前5時20' },
      { optionId: '2', text: '午前3時54分' },
      { optionId: '3', text: '午前2時38分' },
      { optionId: '4', text: '午前4時44分' },
    ],
  },
  {
    quizId: '60',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\n三次試験の制限時間は何時間？',
    options: [
      { optionId: '0', text: '72時間' },
      { optionId: '1', text: '96時間' },
      { optionId: '2', text: '84時間' },
      { optionId: '3', text: '60時間' },
      { optionId: '4', text: '65時間30分' },
    ],
  },
  {
    quizId: '61',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\n三次試験は、72時間以内に生きて下まで降りることでした。その試験で外の壁を使って降りようとした一流ロッククライマーがいました。\nしかし、降りている途中に化物の鳥に殺されてしまいました。この殺された受験生のナンバープレートは何番？',
    options: [
      { optionId: '0', text: '86' },
      { optionId: '1', text: '371' },
      { optionId: '2', text: '384' },
      { optionId: '3', text: '194' },
      { optionId: '4', text: '103' },
    ],
  },
  {
    quizId: '62',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n二つ目の質問は「どっちに行く？○→右　×→左」でした。この時、右と答えたメンバーの正しい組み合わせは？',
    options: [
      { optionId: '0', text: 'キルア、クラピカ、トンパ' },
      { optionId: '1', text: 'キルア、ゴン、クラピカ' },
      { optionId: '2', text: 'キルア、レオリオ、トンパ' },
      { optionId: '3', text: 'レオリオ、クラピカ、トンパ' },
      { optionId: '4', text: 'ゴン、クラピカ、トンパ' },
    ],
  },
  {
    quizId: '63',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n試煉官5人とゴンたち5人での戦いがありました。\nこの時、初戦はトンパ対誰だったでしょうか？',
    options: [
      { optionId: '0', text: 'ベンドット' },
      { optionId: '1', text: 'セドカン' },
      { optionId: '2', text: 'マジタニ' },
      { optionId: '3', text: 'レルート' },
      { optionId: '4', text: 'ジョネス' },
    ],
  },
  {
    quizId: '64',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\n3次試験の試験管の名前は？',
    options: [
      { optionId: '0', text: 'リッポー' },
      { optionId: '1', text: 'タッポー' },
      { optionId: '2', text: 'カッポー' },
      { optionId: '3', text: 'アッポー' },
      { optionId: '4', text: 'ジェッポー' },
    ],
  },
  {
    quizId: '65',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n試煉官5人とゴンたち5人での戦いがありました。初戦でトンパが戦った相手、ベンドットの懲役は何年？',
    options: [
      { optionId: '0', text: '199年' },
      { optionId: '1', text: '149年' },
      { optionId: '2', text: '108年' },
      { optionId: '3', text: '112年' },
      { optionId: '4', text: '968年' },
    ],
  },
  {
    quizId: '66',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n試煉官5人とゴンたち5人での戦いがありました。\nこの時、二戦目はゴン対誰だったでしょうか？',
    options: [
      { optionId: '0', text: 'セドカン' },
      { optionId: '1', text: 'ベンドット' },
      { optionId: '2', text: 'マジタニ' },
      { optionId: '3', text: 'レルート' },
      { optionId: '4', text: 'ジョネス' },
    ],
  },
  {
    quizId: '67',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n試煉官5人とゴンたち5人での戦いがありました。二戦目でゴンが戦った相手、セドカンの懲役は何年？',
    options: [
      { optionId: '0', text: '149年' },
      { optionId: '1', text: '199年' },
      { optionId: '2', text: '108年' },
      { optionId: '3', text: '112年' },
      { optionId: '4', text: '968年' },
    ],
  },
  {
    quizId: '68',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n試煉官5人とゴンたち5人での戦いがありました。三戦目でクラピカが戦った相手は誰？',
    options: [
      { optionId: '0', text: 'マジタニ' },
      { optionId: '1', text: 'ベンドット' },
      { optionId: '2', text: 'セドカン' },
      { optionId: '3', text: 'レルート' },
      { optionId: '4', text: 'ジョネス' },
    ],
  },
  {
    quizId: '69',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n試煉官5人とゴンたち5人での戦いがありました。四戦目でレオリオが戦った相手は誰？',
    options: [
      { optionId: '0', text: 'レルート' },
      { optionId: '1', text: 'ベンドット' },
      { optionId: '2', text: 'マジタニ' },
      { optionId: '3', text: 'セドカン' },
      { optionId: '4', text: 'ジョネス' },
    ],
  },
  {
    quizId: '70',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n試煉官5人とゴンたち5人での戦いがありました。五戦目でキルアが戦った相手は誰？',
    options: [
      { optionId: '0', text: 'ジョネス' },
      { optionId: '1', text: 'ベンドット' },
      { optionId: '2', text: 'マジタニ' },
      { optionId: '3', text: 'レルート' },
      { optionId: '4', text: 'セドカン' },
    ],
  },
  {
    quizId: '71',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n試煉官5人とゴンたち5人での戦いがありました。三戦目でクラピカが戦った相手、マジタニの胸には何個のハートがある？',
    options: [
      { optionId: '0', text: '19個' },
      { optionId: '1', text: '20個' },
      { optionId: '2', text: '33個' },
      { optionId: '3', text: '21個' },
      { optionId: '4', text: '34個' },
    ],
  },
  {
    quizId: '72',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からレベルマックスの問題です。\n三次試験通過第一号はヒソカでした。所要時間は？',
    options: [
      { optionId: '0', text: '6時間17分' },
      { optionId: '1', text: '8時間18分' },
      { optionId: '2', text: '5時間4分' },
      { optionId: '3', text: '10時間8分' },
      { optionId: '4', text: '6時間16分' },
    ],
  },
  {
    quizId: '73',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n試煉官5人とゴンたち5人での戦いがありました。五戦目でキルアが戦った相手、ジョネスのコードネームは何？',
    options: [
      { optionId: '0', text: '解体屋' },
      { optionId: '1', text: '解剖屋' },
      { optionId: '2', text: '分割屋' },
      { optionId: '3', text: '分裂屋' },
      { optionId: '4', text: '廃止屋' },
    ],
  },
  {
    quizId: '74',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n試煉官5人とゴンたち5人での戦いがありました。レオリオはレルートとジャンケン対決をしました。\n結果はどうなった？',
    options: [
      {
        optionId: '0',
        text: '一度、グーのアイコを挟み、レルートがパーで勝った',
      },
      {
        optionId: '1',
        text: '一度、パーのアイコを挟み、レルートがチョキで勝った',
      },
      {
        optionId: '2',
        text: '二度、グーのアイコを挟み、レルートがパーで勝った',
      },
      {
        optionId: '3',
        text: '二度、グーのアイコを挟み、レルートがグーで勝った',
      },
      {
        optionId: '4',
        text: '一度、チョキのアイコを挟み、レオリオがグーで勝った',
      },
    ],
  },
  {
    quizId: '75',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\nレオリオが戦った相手、レルートの罪は何？',
    options: [
      { optionId: '0', text: '希少生物売買、賭博違反法' },
      { optionId: '1', text: '詐欺、恐喝' },
      { optionId: '2', text: '連続爆弾魔' },
      { optionId: '3', text: '結婚詐欺、美人局' },
      { optionId: '4', text: '横領罪、背任罪' },
    ],
  },
  {
    quizId: '76',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n最後の多数決は、「5人で行けるが長くて困難な道、3人しか行けないが「短くて簡単な道、どちらかを選ぶ」でした。\n短く簡単な道は3分ほどでゴールに着きますが、長くて困難な道はどんなに早くても攻略に何時間かかる？',
    options: [
      { optionId: '0', text: '45時間' },
      { optionId: '1', text: '50時間' },
      { optionId: '2', text: '40時間' },
      { optionId: '3', text: '35時間' },
      { optionId: '4', text: '30時間' },
    ],
  },
  {
    quizId: '77',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、三次試験からの問題です。\n三次試験通過人数は何人？',
    options: [
      { optionId: '0', text: '25人（内1名死亡）' },
      { optionId: '1', text: '19人（内1名死亡）' },
      { optionId: '2', text: '26人（内2名死亡）' },
      { optionId: '3', text: '33人（内1名死亡）' },
      { optionId: '4', text: '18人（内2名死亡）' },
    ],
  },
  {
    quizId: '78',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\n四次試験の試験会場の場所は？',
    options: [
      { optionId: '0', text: 'ゼビル島' },
      { optionId: '1', text: 'グリーンランド' },
      { optionId: '2', text: 'ビクトリア島' },
      { optionId: '3', text: 'ミンダナオ島' },
      { optionId: '4', text: 'フエゴ島' },
    ],
  },
  {
    quizId: '79',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\nゴンのプレートナンバーは？',
    options: [
      { optionId: '0', text: '405番' },
      { optionId: '1', text: '404番' },
      { optionId: '2', text: '403番' },
      { optionId: '3', text: '44番' },
      { optionId: '4', text: '99番' },
    ],
  },
  {
    quizId: '80',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\nギタラクルのプレートナンバーは？',
    options: [
      { optionId: '0', text: '301番' },
      { optionId: '1', text: '281番' },
      { optionId: '2', text: '362番' },
      { optionId: '3', text: '246番' },
      { optionId: '4', text: '89番' },
    ],
  },
  {
    quizId: '81',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\nシシトウのプレートナンバーとキュウのプレートナンバーを足した値は？',
    options: [
      { optionId: '0', text: '194' },
      { optionId: '1', text: '192' },
      { optionId: '2', text: '451' },
      { optionId: '3', text: '470' },
      { optionId: '4', text: '121' },
    ],
  },
  {
    quizId: '82',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\nリュウのプレートナンバーは？',
    options: [
      { optionId: '0', text: '34' },
      { optionId: '1', text: '191' },
      { optionId: '2', text: '199' },
      { optionId: '3', text: '16' },
      { optionId: '4', text: '371' },
    ],
  },
  {
    quizId: '83',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\nゲレタのプレートナンバーからゴズのプレートナンバーを引いた値は？',
    options: [
      { optionId: '0', text: '13' },
      { optionId: '1', text: '8' },
      { optionId: '2', text: '355' },
      { optionId: '3', text: '350' },
      { optionId: '4', text: '83' },
    ],
  },
  {
    quizId: '84',
    question:
      'ハンター試験の時のイルミは別の名前を使用していました。\nその時の名前は？',
    options: [
      { optionId: '0', text: 'ギタラクル' },
      { optionId: '1', text: 'ポドロ' },
      { optionId: '2', text: 'ポックル' },
      { optionId: '3', text: 'キュウ' },
      { optionId: '4', text: 'ケンミ' },
    ],
  },
  {
    quizId: '85',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、四次試験からの問題です。\nヒソカはギタラクル（イルミ）からプレートを一つ貰いました。\n誰のプレート？',
    options: [
      { optionId: '0', text: 'スパー' },
      { optionId: '1', text: 'キュウ' },
      { optionId: '2', text: 'ケンミ' },
      { optionId: '3', text: 'ゴズ' },
      { optionId: '4', text: 'ソミー' },
    ],
  },
  {
    quizId: '86',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、四次試験からの問題です。\n四次試験でクラピカとレオリオは、ヒソカと対峙しました。\nクラピカはヒソカとの戦いを避けるために、一つのプレートを渡しました。\nそのプレートは誰のプレート？',
    options: [
      { optionId: '0', text: 'ソミー' },
      { optionId: '1', text: 'スパー' },
      { optionId: '2', text: 'キュウ' },
      { optionId: '3', text: 'ケンミ' },
      { optionId: '4', text: 'ゴズ' },
    ],
  },
  {
    quizId: '87',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、四次試験からの問題です。\nゴンは、ヒソカが獲物を狩る瞬間を狙って、プレートを見事奪いました。\nその時、ヒソカの獲物となり殺されたのは誰？',
    options: [
      { optionId: '0', text: 'アゴン' },
      { optionId: '1', text: 'ソミー' },
      { optionId: '2', text: 'スパー' },
      { optionId: '3', text: 'キュウ' },
      { optionId: '4', text: 'ケンミ' },
    ],
  },
  {
    quizId: '88',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、四次試験からの問題です。\nアモリ三兄弟のうち、キルアの腹を蹴っ飛ばしたの誰？',
    options: [
      { optionId: '0', text: 'イモリ' },
      { optionId: '1', text: 'アモリ' },
      { optionId: '2', text: 'ウモリ' },
      { optionId: '3', text: 'タモリ' },
      { optionId: '4', text: 'エモリ' },
    ],
  },
  {
    quizId: '89',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、四次試験からの問題です。\nキルアはアモリ三兄弟を倒した後、余分なプレートは思いっきり遠くへ投げました。プレートをキャッチしたハンゾー。\nハンゾーがキャッチしたプレートの番号は？',
    options: [
      { optionId: '0', text: '198' },
      { optionId: '1', text: '197' },
      { optionId: '2', text: '199' },
      { optionId: '3', text: '281' },
      { optionId: '4', text: '80' },
    ],
  },
  {
    quizId: '90',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、四次試験からの問題です。\nゴンたちは、レオリオのターゲットであるポンズの位置をどうやって発見した？',
    options: [
      { optionId: '0', text: 'ゴンが、ポンズの持つ薬品の匂いをたどった' },
      { optionId: '1', text: 'トンパに教えてもらった' },
      { optionId: '2', text: 'クラピカのダウジング' },
      { optionId: '3', text: '女性の叫び声がした方向へ向かった' },
      { optionId: '4', text: 'ハンゾーに教えてもらった' },
    ],
  },
  {
    quizId: '91',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、四次試験からの問題です。\nバーボンの蛇が対象者を攻撃してくる条件は二つあります。\n一つ目は「この洞窟の小部屋から出ようとする」ですが、\n二つ目は何？',
    options: [
      { optionId: '0', text: 'バーボンの体に触る' },
      { optionId: '1', text: 'バーボンに攻撃を与える' },
      { optionId: '2', text: 'バーボンと目があう' },
      { optionId: '3', text: 'バーボンが何かしらの衝撃を受ける' },
      { optionId: '4', text: 'バーボンがウイスキーを飲む' },
    ],
  },
  {
    quizId: '92',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、四次試験からの問題です。\nポンズの扱う生物は何？',
    options: [
      { optionId: '0', text: 'シビレヤリバチ' },
      { optionId: '1', text: 'セイヨウミツバチ' },
      { optionId: '2', text: 'アカガネコハナバチ' },
      { optionId: '3', text: 'フタモンアシナガバチ' },
      { optionId: '4', text: 'ミナミアオスジハナバチ' },
    ],
  },
  {
    quizId: '93',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、四次試験からの問題です。\nバーボンの死因は？',
    options: [
      { optionId: '0', text: 'アナフィラキシーショック' },
      { optionId: '1', text: 'ウォームショック' },
      { optionId: '2', text: 'コールドショック' },
      { optionId: '3', text: '神経原性ショック' },
      { optionId: '4', text: '血液分布異常性ショック' },
    ],
  },
  {
    quizId: '94',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、四次試験からの問題です。\nゴンは、ポンズと物々交換をしました。ゴンは103番（バーボン）のプレートをポンズに。ポンズはゴンに何を渡したでしょうか？',
    options: [
      { optionId: '0', text: '催眠ガス' },
      { optionId: '1', text: '解毒剤' },
      { optionId: '2', text: '246番（ポンズ）のプレート' },
      { optionId: '3', text: 'バーボンの能力の情報' },
      { optionId: '4', text: '89番（シシトウ）のプレート' },
    ],
  },
  {
    quizId: '95',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、四次試験からの問題です。\nゴンの息止め最高記録は？',
    options: [
      { optionId: '0', text: '9分44秒' },
      { optionId: '1', text: '12分11秒' },
      { optionId: '2', text: '8分7秒' },
      { optionId: '3', text: '8分18秒' },
      { optionId: '4', text: '8分22秒' },
    ],
  },
  {
    quizId: '96',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\nヒソカが四次試験終了時に保持していなかったプレートは、次のうち誰のプレート？',
    options: [
      { optionId: '0', text: 'シシトウ' },
      { optionId: '1', text: 'ゲレタ' },
      { optionId: '2', text: 'スパー' },
      { optionId: '3', text: 'アゴン' },
      { optionId: '4', text: 'ソミー' },
    ],
  },
  {
    quizId: '97',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\nハンゾーが四次試験終了時に保持していなかったプレートは誰のプレート？',
    options: [
      { optionId: '0', text: 'ソミー' },
      { optionId: '1', text: 'ハンゾー' },
      { optionId: '2', text: 'イモリ' },
      { optionId: '3', text: 'ケンミ' },
      { optionId: '4', text: 'シシトウ' },
    ],
  },
  {
    quizId: '98',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\n四次試験合格者は何人？',
    options: [
      { optionId: '0', text: '9人' },
      { optionId: '1', text: '8人' },
      { optionId: '2', text: '7人' },
      { optionId: '3', text: '10人' },
      { optionId: '4', text: '11人' },
    ],
  },
  {
    quizId: '99',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\n四次試験合格者は9人でしたが、そのうちルーキーは何人？',
    options: [
      { optionId: '0', text: '6人' },
      { optionId: '1', text: '7人' },
      { optionId: '2', text: '5人' },
      { optionId: '3', text: '8人' },
      { optionId: '4', text: '4人' },
    ],
  },
  {
    quizId: '100',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\nヒソカは四次試験後のネテロ会長との面談で、ハンターになる理由を聞かれました。ヒソカは何て答えた？',
    options: [
      {
        optionId: '0',
        text: '別になりたくはないけど、ハンター資格を持ってると色々便利だから',
      },
      {
        optionId: '1',
        text: 'ハンターにならないと対戦できない相手がいるから、あんたとかね',
      },
      { optionId: '2', text: 'これをとれば、対戦してくれるって相手がいたから' },
      { optionId: '3', text: '面白そうだから' },
      { optionId: '4', text: '暇だったから' },
    ],
  },
  {
    quizId: '101',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\nヒソカは四次試験後のネテロ会長との面談で、一番注目している相手を尋ねられました。\nヒソカは一番注目している相手を誰と答えた？',
    options: [
      { optionId: '0', text: 'キルア' },
      { optionId: '1', text: 'ゴン' },
      { optionId: '2', text: 'クラピカ' },
      { optionId: '3', text: 'ギタラクル' },
      { optionId: '4', text: 'ハンゾー' },
    ],
  },
  {
    quizId: '102',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\nヒソカは四次試験後のネテロ会長との面談で、一番戦いたくない相手を尋ねられました。\n誰と答えた？',
    options: [
      { optionId: '0', text: 'ゴン' },
      { optionId: '1', text: 'キルア' },
      { optionId: '2', text: 'ポンズ' },
      { optionId: '3', text: 'ギタラクル' },
      { optionId: '4', text: 'ポックル' },
    ],
  },
  {
    quizId: '103',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\n最終試験は四次試験終了から何日後に行われた？',
    options: [
      { optionId: '0', text: '3日後' },
      { optionId: '1', text: '2日後' },
      { optionId: '2', text: '4日後' },
      { optionId: '3', text: '5日後' },
      { optionId: '4', text: '1日後' },
    ],
  },
  {
    quizId: '104',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、最終試験からの問題です。\nトーナメント表の作成時の審査基準の正しい組み合わせは？',
    options: [
      { optionId: '0', text: '身体能力値、精神能力値、印象値' },
      { optionId: '1', text: '身体能力値、頭脳能力値、印象値' },
      { optionId: '2', text: '身体能力値、頭脳能力値、経験値' },
      { optionId: '3', text: '身体能力値、経験値、印象値' },
      { optionId: '4', text: '印象値、経験値、頭脳能力値' },
    ],
  },
  {
    quizId: '105',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、最終試験からの問題です。\n最終試験の立会人は誰？',
    options: [
      { optionId: '0', text: 'マスタ' },
      { optionId: '1', text: 'ゴトー' },
      { optionId: '2', text: 'サトツ' },
      { optionId: '3', text: 'リンダ' },
      { optionId: '4', text: 'トヨシマ' },
    ],
  },
  {
    quizId: '106',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、最終試験からの問題です。\nゴン対ハンゾーの試合で、ハンゾーは、ゴンの体のある部位を折りました。\nある部位とはどこ？',
    options: [
      { optionId: '0', text: '左腕' },
      { optionId: '1', text: '右腕' },
      { optionId: '2', text: '右足' },
      { optionId: '3', text: '左足' },
      { optionId: '4', text: '左足の親指' },
    ],
  },
  {
    quizId: '107',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、最終試験からの問題です。\nゴン対ハンゾーの試合で、ハンゾーは過去を語りながら指一本で逆立ちをしました。\nどの指一本で逆立ちをした？',
    options: [
      { optionId: '0', text: '右手の人差し指' },
      { optionId: '1', text: '左手の人差し指' },
      { optionId: '2', text: '右手の中指' },
      { optionId: '3', text: '左手の中指' },
      { optionId: '4', text: '左手の小指' },
    ],
  },
  {
    quizId: '108',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、最終試験からの問題です。\nこの時のハンゾーの年齢は？',
    options: [
      { optionId: '0', text: '18歳' },
      { optionId: '1', text: '24歳' },
      { optionId: '2', text: '25歳' },
      { optionId: '3', text: '23歳' },
      { optionId: '4', text: '22歳' },
    ],
  },
  {
    quizId: '109',
    question: 'サトツさんが、普段主にしている仕事は何？',
    options: [
      { optionId: '0', text: '遺跡の発掘と修復、保護' },
      { optionId: '1', text: '世界を回って様々な未確認生物を見つけ出す' },
      { optionId: '2', text: '賞金が懸けられた犯罪者を捜し出し、捕らえる' },
      {
        optionId: '3',
        text: '世界中のあらゆる料理と食材を探求し、新たな美味の創造を目指す',
      },
      { optionId: '4', text: '協会から依頼される仕事のみを専門とする' },
    ],
  },
  {
    quizId: '110',
    question: 'サトツさんが感動した、ジンによって修復された遺跡の名前は？',
    options: [
      { optionId: '0', text: 'ルルカ遺跡' },
      { optionId: '1', text: 'クメール遺跡' },
      { optionId: '2', text: 'スラ・スラン遺跡' },
      { optionId: '3', text: 'アンコール・ワット遺跡' },
      { optionId: '4', text: 'ワット・プー遺跡' },
    ],
  },
  {
    quizId: '111',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、最終試験からの問題です。\n第一試合ははゴン対ハンゾーでした。\n第二試合は誰対誰？',
    options: [
      { optionId: '0', text: 'クラピカ対ヒソカ' },
      { optionId: '1', text: 'ハンゾー対ポックル' },
      { optionId: '2', text: 'ヒソカ対ポドロ' },
      { optionId: '3', text: 'キルア対ポックル' },
      { optionId: '4', text: 'レオリオ対ポドロ' },
    ],
  },
  {
    quizId: '112',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、最終試験からの問題です。\n第二試合は、クラピカ対ヒソカでしたが、結果はどうなった？',
    options: [
      {
        optionId: '0',
        text: 'しばらく戦ったあとヒソカが、クラピカに何事かを囁き、その直後に負けを宣言した',
      },
      { optionId: '1', text: '開始と同時にヒソカが負けを宣言した' },
      {
        optionId: '2',
        text: 'しばらく戦ったあとクラピカが、ヒソカに何事かを囁き、その直後に負けを宣言した',
      },
      {
        optionId: '3',
        text: 'クラピカは絶対に勝てないヒソカと戦うより、次で勝つことが大切だと考えて開始と同時に負けを宣言した',
      },
      { optionId: '4', text: '勝負に決着がつかず引き分けとなった' },
    ],
  },
  {
    quizId: '113',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、最終試験からの問題です。\n第三試合は誰対誰？',
    options: [
      { optionId: '0', text: 'ハンゾー対ポックル' },
      { optionId: '1', text: 'クラピカ対ヒソカ' },
      { optionId: '2', text: 'ヒソカ対ポドロ' },
      { optionId: '3', text: 'キルア対ポックル' },
      { optionId: '4', text: 'レオリオ対ポドロ' },
    ],
  },
  {
    quizId: '114',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、最終試験からの問題です。\n第四試合は、誰対誰？',
    options: [
      { optionId: '0', text: 'ヒソカ対ポドロ' },
      { optionId: '1', text: 'ハンゾー対ポックル' },
      { optionId: '2', text: 'クラピカ対ヒソカ' },
      { optionId: '3', text: 'キルア対ポックル' },
      { optionId: '4', text: 'レオリオ対ポドロ' },
    ],
  },
  {
    quizId: '115',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、最終試験からの問題です。\n第五試合は、キルア対誰？',
    options: [
      { optionId: '0', text: 'ポックル' },
      { optionId: '1', text: 'ギタラクル' },
      { optionId: '2', text: 'ポドロ' },
      { optionId: '3', text: 'レオリオ' },
      { optionId: '4', text: 'ハンゾー' },
    ],
  },
  {
    quizId: '116',
    question:
      'ゴンがハンター試験を受けた年のハンター試験、最終試験から名言クイズです。\nキルアは、ギタラクル（イルミ）に望みを聞かれました。キルアは何と答えた？',
    options: [
      {
        optionId: '0',
        text: 'ゴンと友達になりたい\nもう人殺しなんてうんざりだ\n普通にゴンと友達になって普通に遊びたい',
      },
      { optionId: '1', text: '癖になってるんだ、音消して歩くの。' },
      {
        optionId: '2',
        text: 'ああーなんかスゲースッキリした\n完全に目が覚めた\n…いや解放されたって感じかな',
      },
      {
        optionId: '3',
        text: 'ゴン… お前は　光だ 時々眩しすぎて 真っすぐ見れないけど\nそれでもお前の 傍にいていいかな･･･？',
      },
      {
        optionId: '4',
        text: '絶対に 失いたくない\nゴンは オレの\n大切な\n――友達だ',
      },
    ],
  },
  {
    quizId: '117',
    question: 'キルアが家を出た時、家族を刺しました。刺したのは誰と誰？',
    options: [
      { optionId: '0', text: '母親とミルキ' },
      { optionId: '1', text: 'ゼノとシルバ' },
      { optionId: '2', text: 'ゴトーとカナリア' },
      { optionId: '3', text: 'ミケとカルト' },
      { optionId: '4', text: 'アルカとナニカ' },
    ],
  },
  {
    quizId: '118',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\n試験終了後、ゴンたちはハンターカードについて、説明を受けました。この中で説明されなかったものはどれ？',
    options: [
      { optionId: '0', text: '民間人が立入禁止のビルの85パーセントに入れる' },
      { optionId: '1', text: '民間人が入国禁止の国の約90パーセントに入れる' },
      { optionId: '2', text: '民間人が立入禁止地域の75パーセントに入れる' },
      { optionId: '3', text: '公的施設の95パーセントがタダで使用できる' },
      { optionId: '4', text: '銀行からの融資が一流企業なみに受けられる' },
    ],
  },
  {
    quizId: '119',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\n試験終了後、ゴンたちはハンターカードについて、説明を受けました。\nこの時、ハンターに合格したものが、一年以内カードを失う確率は、どのくらいだと説明された？',
    options: [
      { optionId: '0', text: '5人に1人' },
      { optionId: '1', text: '10人に1人' },
      { optionId: '2', text: '3人に1人' },
      { optionId: '3', text: '7人に1人' },
      { optionId: '4', text: '9人に1人' },
    ],
  },
  {
    quizId: '120',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\nこの年のハンター試験合格者は何人？',
    options: [
      { optionId: '0', text: '7人' },
      { optionId: '1', text: '6人' },
      { optionId: '2', text: '8人' },
      { optionId: '3', text: '5人' },
      { optionId: '4', text: '9人' },
    ],
  },
  {
    quizId: '121',
    question: 'ゾルディック家の住処はどこにある？',
    options: [
      { optionId: '0', text: 'ククルーマウンテンの頂上' },
      { optionId: '1', text: 'クルルーマウンテンの頂上' },
      { optionId: '2', text: 'クックルーマウンテンの頂上' },
      { optionId: '3', text: 'クルックマウンテンの頂上' },
      { optionId: '4', text: 'ククレマウンテンの頂上' },
    ],
  },
  {
    quizId: '122',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\n試験後に貰った名刺に書かれていた言葉はどれ？',
    options: [
      { optionId: '0', text: '雲隠流上忍　半蔵' },
      { optionId: '1', text: '木の葉流上忍 半蔵' },
      { optionId: '2', text: '砂隠流上忍 半蔵' },
      { optionId: '3', text: '水走流上忍 半蔵' },
      { optionId: '4', text: '山籠流上忍 半蔵' },
    ],
  },
  {
    quizId: '123',
    question:
      'ゴンがハンター試験を受けた年のハンター試験からの問題です。\n試験後、ポックルは何ハンターを目指すとゴン達に言った？',
    options: [
      { optionId: '0', text: '幻獣ハンター' },
      { optionId: '1', text: 'ビーストハンター' },
      { optionId: '2', text: '賞金首ハンター' },
      { optionId: '3', text: '財宝ハンター' },
      { optionId: '4', text: '遺跡ハンター' },
    ],
  },
  {
    quizId: '124',
    question: 'ホームコードとは何のこと？',
    options: [
      { optionId: '0', text: '留守番専用の電話' },
      { optionId: '1', text: 'ホームページアドレス' },
      { optionId: '2', text: '自宅の住所' },
      { optionId: '3', text: '実家の住所' },
      { optionId: '4', text: 'ブログのURL' },
    ],
  },
  {
    quizId: '125',
    question: 'ハンターの電波系三種の神器とは？',
    options: [
      { optionId: '0', text: 'ホームコード、ケータイ電話、電脳コード' },
      { optionId: '1', text: 'インターネット、ケータイ電話、電子辞書' },
      { optionId: '2', text: 'ホームコード、インターネット、ケータイ電話' },
      { optionId: '3', text: 'ホームコード、インターネット、電子辞書' },
      { optionId: '4', text: 'ホームコード、インターネット、ポケベル' },
    ],
  },
  {
    quizId: '126',
    question: 'ジンは第何期のハンター試験合格者？',
    options: [
      { optionId: '0', text: '267期' },
      { optionId: '1', text: '154期' },
      { optionId: '2', text: '24期' },
      { optionId: '3', text: '3,024期' },
      { optionId: '4', text: '80,514期' },
    ],
  },
  {
    quizId: '127',
    question: 'ゾルディック家の住まいククルーマウンテンがあるのはどこの国？',
    options: [
      { optionId: '0', text: 'パドキア共和国' },
      { optionId: '1', text: 'ハイチ共和国' },
      { optionId: '2', text: 'パプア・ニューギニア独立国' },
      { optionId: '3', text: 'バルバドス' },
      { optionId: '4', text: 'バハマ国' },
    ],
  },
  {
    quizId: '128',
    question:
      'ゾルディック家の住まいククルーマウンテンは、パドキア共和国の何地区にある？',
    options: [
      { optionId: '0', text: 'デントラ地区' },
      { optionId: '1', text: 'アラバマ地区' },
      { optionId: '2', text: 'アイダホ地区' },
      { optionId: '3', text: 'オハイオ地区' },
      { optionId: '4', text: 'ワイオミング地区' },
    ],
  },
  {
    quizId: '129',
    question: 'ゾルディック家の住まいククルーマウンテンの標高は？',
    options: [
      { optionId: '0', text: '3,722メートル' },
      { optionId: '1', text: '3,776メートル' },
      { optionId: '2', text: '3,193メートル' },
      { optionId: '3', text: '3,190メートル' },
      { optionId: '4', text: '3,189メートル' },
    ],
  },
  {
    quizId: '130',
    question:
      'ゴン達は◯◯観光バスを利用して、ゾルディック家の住まいであるククルーマウンテンに向かいました。\n◯◯に入る文字は？',
    options: [
      { optionId: '0', text: '号泣' },
      { optionId: '1', text: '暗殺' },
      { optionId: '2', text: '恐怖' },
      { optionId: '3', text: '極悪' },
      { optionId: '4', text: '地獄' },
    ],
  },
  {
    quizId: '131',
    question:
      'ゴン達は観光バスを利用して、ゾルディック家の住まいであるククルーマウンテンに向かいました。\nこの時バスガイドはゾルディック家は、何人家族と紹介した？',
    options: [
      { optionId: '0', text: '10人' },
      { optionId: '1', text: '9人' },
      { optionId: '2', text: '8人' },
      { optionId: '3', text: '12人' },
      { optionId: '4', text: '13人' },
    ],
  },
  {
    quizId: '132',
    question:
      'ゴン達は観光バスを利用して、ゾルディック家の住まいであるククルーマウンテンに向かいました。\nこの時バスガイドはゾルディック家の家族構成を紹介しました。\nガイドの説明になかったゾルディック家の家族は？',
    options: [
      { optionId: '0', text: '曽祖母' },
      { optionId: '1', text: '曾祖父' },
      { optionId: '2', text: '祖父' },
      { optionId: '3', text: '祖母' },
      { optionId: '4', text: '母' },
    ],
  },
  {
    quizId: '133',
    question:
      'ゴン達は観光バスを利用して、ゾルディック家の住まいであるククルーマウンテンに向かいました。\nこの時バスガイドはゾルディック家の正門をなんと紹介した？',
    options: [
      { optionId: '0', text: '黄泉への扉' },
      { optionId: '1', text: '地獄への扉' },
      { optionId: '2', text: '未知への扉' },
      { optionId: '3', text: '死への扉' },
      { optionId: '4', text: '摩訶への扉' },
    ],
  },
  {
    quizId: '134',
    question: 'ゾルディック家の番犬の名前は？',
    options: [
      { optionId: '0', text: 'ミケ' },
      { optionId: '1', text: 'ミロ' },
      { optionId: '2', text: 'タケ' },
      { optionId: '3', text: 'サロ' },
      { optionId: '4', text: 'キヌ' },
    ],
  },
  {
    quizId: '135',
    question: 'ゾルディック家の試しの門は何の扉まである？',
    options: [
      { optionId: '0', text: '7の扉' },
      { optionId: '1', text: '8の扉' },
      { optionId: '2', text: '9の扉' },
      { optionId: '3', text: '10の扉' },
      { optionId: '4', text: '11の扉' },
    ],
  },
  {
    quizId: '136',
    question: 'ゾルディック家の守衛さんの名前は？',
    options: [
      { optionId: '0', text: 'ゼブロ' },
      { optionId: '1', text: 'ジブラ' },
      { optionId: '2', text: 'クレバ' },
      { optionId: '3', text: 'シーダ' },
      { optionId: '4', text: 'ケーダブシャイン' },
    ],
  },
  {
    quizId: '137',
    question:
      'ゴンたちはキルアと会うためにゾルディック家を訪れた時の問題です。\nゼブロと一緒に住んでいる人の名前は？',
    options: [
      { optionId: '0', text: 'シークアント' },
      { optionId: '1', text: 'シークレット' },
      { optionId: '2', text: 'シークマント' },
      { optionId: '3', text: 'シークラント' },
      { optionId: '4', text: 'シークシンク' },
    ],
  },
  {
    quizId: '138',
    question:
      'ゴンたちはキルアと会うためにゾルディック家を訪れた時の問題です。\n試しの門を開けることができなかったゴンたちは、試しの門の守衛ゼブロさんが住む家で体を鍛えることになりました。\nこの時のスリッパの重さは？',
    options: [
      { optionId: '0', text: '片方20キロ' },
      { optionId: '1', text: '片方42キロ' },
      { optionId: '2', text: '片方36キロ' },
      { optionId: '3', text: '片方200キロ' },
      { optionId: '4', text: '片方30キロ' },
    ],
  },
  {
    quizId: '139',
    question:
      'ゴンたちはキルアと会うためにゾルディック家を訪れた時の問題です。\n試しの門を開けることができなかったゴンたちは、試しの門の守衛ゼブロさんが住む家で体を鍛えることになりました。\nこの家の湯のみとイスの合計は何キログラム？',
    options: [
      { optionId: '0', text: '80キログラム' },
      { optionId: '1', text: '100キログラム' },
      { optionId: '2', text: '130キログラム' },
      { optionId: '3', text: '240キログラム' },
      { optionId: '4', text: '320キログラム' },
    ],
  },
  {
    quizId: '140',
    question:
      'シークアントが部下100人を連れてゾルディック家を襲撃した時、当時10位のある執事見習いに全滅させられました。\nこの執事の名前は？',
    options: [
      { optionId: '0', text: 'カナリア' },
      { optionId: '1', text: 'ヒシタ' },
      { optionId: '2', text: 'ツボネ' },
      { optionId: '3', text: 'アマネ' },
      { optionId: '4', text: 'レイコ' },
    ],
  },
  {
    quizId: '141',
    question: 'ゼノ初登場の時、胸から垂らしていた文字は？',
    options: [
      { optionId: '0', text: '一日一殺' },
      { optionId: '1', text: '生涯現役' },
      { optionId: '2', text: '一望千里' },
      { optionId: '3', text: '一網打尽' },
      { optionId: '4', text: '一家団欒' },
    ],
  },
  {
    quizId: '142',
    question:
      'ゴンたちはキルアと会うためにゾルディック家を訪れた時の問題です。\n無事、ゴン達と再会を果たしたキルアはレオリオのことを間違えた名前で呼んでしまいました。何て呼んだ？',
    options: [
      { optionId: '0', text: 'リオレオ' },
      { optionId: '1', text: 'レアリオ' },
      { optionId: '2', text: 'イルミオ' },
      { optionId: '3', text: 'レロミオ' },
      { optionId: '4', text: 'ロミオ' },
    ],
  },
  {
    quizId: '143',
    question: '天空競技場は何階建て？',
    options: [
      { optionId: '0', text: '251階' },
      { optionId: '1', text: '525階' },
      { optionId: '2', text: '1025階' },
      { optionId: '3', text: '5055階' },
      { optionId: '4', text: '5087階' },
    ],
  },
  {
    quizId: '144',
    question: '天空競技場の高さは何メートル？',
    options: [
      { optionId: '0', text: '991メートル' },
      { optionId: '1', text: '634メートル' },
      { optionId: '2', text: '333メートル' },
      { optionId: '3', text: '1085メートル' },
      { optionId: '4', text: '2055メートル' },
    ],
  },
  {
    quizId: '145',
    question: '天空競技場は世界何位の高さを誇る建物？',
    options: [
      { optionId: '0', text: '4位' },
      { optionId: '1', text: '3位' },
      { optionId: '2', text: '5位' },
      { optionId: '3', text: '7位' },
      { optionId: '4', text: '9位' },
    ],
  },
  {
    quizId: '146',
    question:
      '天空競技場編からの問題です。\nキルアは、過去に天空競技場に一度来たことがありました。それは、キルアが何歳だった時？',
    options: [
      { optionId: '0', text: '6歳' },
      { optionId: '1', text: '7歳' },
      { optionId: '2', text: '5歳' },
      { optionId: '3', text: '4歳' },
      { optionId: '4', text: '8歳' },
    ],
  },
  {
    quizId: '147',
    question:
      '天空競技場編からレベルマックスの問題です。\n天空競技場一階では、入場者のレベル判断をします。\nこの時のゴンの番号は？',
    options: [
      { optionId: '0', text: '2055番' },
      { optionId: '1', text: '2054番' },
      { optionId: '2', text: '2039番' },
      { optionId: '3', text: '2068番' },
      { optionId: '4', text: '2070番' },
    ],
  },
  {
    quizId: '148',
    question:
      '天空競技場編からの問題です。\n天空競技場の一階では、入場者のレベル判断をします。\nゴン、ズシは一階のレベル判断で何回まで行ってよいと言われた？',
    options: [
      { optionId: '0', text: '50階' },
      { optionId: '1', text: '180階' },
      { optionId: '2', text: '45階' },
      { optionId: '3', text: '70階' },
      { optionId: '4', text: '100階' },
    ],
  },
  {
    quizId: '149',
    question:
      '空競技場編からの問題です。\n天空競技場の一階では、入場者のレベル判断をします。\nキルアは一階のレベル判断で何回まで行ってよいと言われた？',
    options: [
      { optionId: '0', text: '180階' },
      { optionId: '1', text: '50階' },
      { optionId: '2', text: '200階' },
      { optionId: '3', text: '70階' },
      { optionId: '4', text: '80階' },
    ],
  },
  {
    quizId: '150',
    question: '天空競技場の観客動員数は年間どのくらい？',
    options: [
      { optionId: '0', text: '10億人' },
      { optionId: '1', text: '1億人' },
      { optionId: '2', text: '1千万人' },
      { optionId: '3', text: '100万人' },
      { optionId: '4', text: '100億人' },
    ],
  },
  {
    quizId: '151',
    question: '天空競技場で専用の個室が用意されらのは何階から？',
    options: [
      { optionId: '0', text: '100階' },
      { optionId: '1', text: '200階' },
      { optionId: '2', text: '150階' },
      { optionId: '3', text: '300階' },
      { optionId: '4', text: '50階' },
    ],
  },
  {
    quizId: '152',
    question: '天空競技場の一階での試合のギャラはいくら？',
    options: [
      { optionId: '0', text: '152ジェニー' },
      { optionId: '1', text: '1050ジェニー' },
      { optionId: '2', text: '50ジェニー' },
      { optionId: '3', text: '0ジェニー' },
      { optionId: '4', text: '830ジェニー' },
    ],
  },
  {
    quizId: '153',
    question:
      '天空競技場編から難易度マックスの問題です。\n55階B闘技場でマイタが戦った相手は誰？',
    options: [
      { optionId: '0', text: 'チパパ' },
      { optionId: '1', text: 'マーキュリー' },
      { optionId: '2', text: 'マーズ' },
      { optionId: '3', text: 'ジュピター' },
      { optionId: '4', text: 'ヴィーナス' },
    ],
  },
  {
    quizId: '154',
    question:
      '天空競技場編から難易度マックスの問題です。\n55階B闘技場でチパパが戦った相手は誰？',
    options: [
      { optionId: '0', text: 'マイタ' },
      { optionId: '1', text: 'ウラヌス' },
      { optionId: '2', text: 'ネプチューン' },
      { optionId: '3', text: 'プルート' },
      { optionId: '4', text: 'サターン' },
    ],
  },
  {
    quizId: '155',
    question: '天空競技場編からの問題です。\nキルア対ズシ戦はどこで行われた？',
    options: [
      { optionId: '0', text: '57階A闘技場' },
      { optionId: '1', text: '55階B闘技場' },
      { optionId: '2', text: '52階C闘技場' },
      { optionId: '3', text: '55階A闘技場' },
      { optionId: '4', text: '50階B闘技場' },
    ],
  },
  {
    quizId: '156',
    question:
      '天空競技場編からの問題です。\n50階での試合のファイトマネーとしてゴンはいくら貰ったでしょうか？',
    options: [
      { optionId: '0', text: '6万ジェニー' },
      { optionId: '1', text: '1万ジェニー' },
      { optionId: '2', text: '3万ジェニー' },
      { optionId: '3', text: '9万ジェニー' },
      { optionId: '4', text: '12万ジェニー' },
    ],
  },
  {
    quizId: '157',
    question:
      '天空競技場編からの問題です。\nウイングさんが、ゴンとキルアに最初に教えた「ねん（燃）」の四大行の正しい組み合わせは？',
    options: [
      { optionId: '0', text: '点、舌、錬、発' },
      { optionId: '1', text: '天、舌、錬、発' },
      { optionId: '2', text: '天、舌、恋、発' },
      { optionId: '3', text: '点、舌、恋、発' },
      { optionId: '4', text: '点、舌、錬、初' },
    ],
  },
  {
    quizId: '158',
    question:
      '天空競技場編からの問題です。\nゴン、キルアが始めて200階クラスを訪れた時、200階クラスに現在登録されている人数を教えてもらいました。（この時はヒソカの念により引き下がった）\n何人と言われたでしょうか？',
    options: [
      { optionId: '0', text: '173人' },
      { optionId: '1', text: '25人' },
      { optionId: '2', text: '18人' },
      { optionId: '3', text: '24人' },
      { optionId: '4', text: '54人' },
    ],
  },
  {
    quizId: '159',
    question:
      'なんとかハンターっていうタイトルのマンガはいつか書こうと思っていた冨樫さん。\nなぜ「ハンター×ハンター」というタイトルになった？',
    options: [
      {
        optionId: '0',
        text: 'ダウンダウンの番組を見ている時に、『なんで二回いうねん』という発言を聞き、これだと思った',
      },
      {
        optionId: '1',
        text: 'めちゃ×2イケてるを見ている時に、俺もめちゃ×2イケたいと思ったから',
      },
      {
        optionId: '2',
        text: 'タフデントのCMにおけるみのもんたのセリフ、 「大事なことなので二度言いましたよ」を聞いた時これだと思った',
      },
      {
        optionId: '3',
        text: 'HUNTER（ハンター）と英語の読み仮名をつけた仮名で原稿を提出したら、編集者が勝手にハンターハンターと呼び出したから',
      },
      {
        optionId: '4',
        text: 'ウッチャンナンチャンが好きで、ハンター×何とかターにしたかったが、提出ぎりぎりまで面白いのが思い浮かばず、ハンターハンターとそのまま出したから',
      },
    ],
  },
  {
    quizId: '160',
    question: '冨樫さんのセンター試験の英語の成績は？',
    options: [
      { optionId: '0', text: '200点中70点' },
      { optionId: '1', text: '200点中180点' },
      { optionId: '2', text: '200点中198点' },
      { optionId: '3', text: '200点中85点' },
      { optionId: '4', text: '200点中120点' },
    ],
  },
  {
    quizId: '161',
    question:
      '天空競技場編からの問題です。\nフロアマスターは○人の最高位闘士のこと、と説明されていますが、○にはいる数字は？',
    options: [
      { optionId: '0', text: '21人' },
      { optionId: '1', text: '8人' },
      { optionId: '2', text: '24人' },
      { optionId: '3', text: '15人' },
      { optionId: '4', text: '9人' },
    ],
  },
  {
    quizId: '162',
    question: '天空競技場で、200階についた時のゴンに与えられた部屋は何号室？',
    options: [
      { optionId: '0', text: '2207号室' },
      { optionId: '1', text: '2210号室' },
      { optionId: '2', text: '3050号室' },
      { optionId: '3', text: '4023号室' },
      { optionId: '4', text: '4223号室' },
    ],
  },
  {
    quizId: '163',
    question: '天空競技場で、200階についた時のゴンに与えられた部屋は何号室？',
    options: [
      { optionId: '0', text: '2223号室' },
      { optionId: '1', text: '2211号室' },
      { optionId: '2', text: '3051号室' },
      { optionId: '3', text: '4024号室' },
      { optionId: '4', text: '4224号室' },
    ],
  },
  {
    quizId: '164',
    question:
      '天空競技場編からの問題です。\nゴン、200階クラスでの初戦の日付は？',
    options: [
      { optionId: '0', text: '3月11日' },
      { optionId: '1', text: '2月11日' },
      { optionId: '2', text: '1月11日' },
      { optionId: '3', text: '11月11日' },
      { optionId: '4', text: '12月11日' },
    ],
  },
  {
    quizId: '165',
    question:
      '天空競技場編からの問題です。\nゴン、200階クラスでの最初の対戦相手は誰？',
    options: [
      { optionId: '0', text: 'ギド' },
      { optionId: '1', text: 'サダソ' },
      { optionId: '2', text: 'リールベルト' },
      { optionId: '3', text: 'カストロ' },
      { optionId: '4', text: 'ヒソカ' },
    ],
  },
  {
    quizId: '166',
    question: '天空競技場編からの問題です。\nギドが使う技名は？',
    options: [
      { optionId: '0', text: '戦闘円舞曲' },
      { optionId: '1', text: '武闘独楽踊曲' },
      { optionId: '2', text: '追跡独楽舞曲' },
      { optionId: '3', text: '十九独楽舞部' },
      { optionId: '4', text: '自由独楽の戦争' },
    ],
  },
  {
    quizId: '167',
    question:
      '天空競技場編からの問題です。\nゴンは初戦のギド戦で多くの骨を折ってしまいます。\n次のうち折れていない骨はどれ？',
    options: [
      { optionId: '0', text: '下顎骨' },
      { optionId: '1', text: 'とう骨' },
      { optionId: '2', text: 'ろっ骨' },
      { optionId: '3', text: '尺骨' },
      { optionId: '4', text: '上腕骨' },
    ],
  },
  {
    quizId: '168',
    question:
      '天空競技場編からの問題です。\nゴンは初戦のギド戦で負傷してしまいました。\nゴンは医者に全治何ヶ月と言われた？',
    options: [
      { optionId: '0', text: '4ヶ月' },
      { optionId: '1', text: '1ヶ月' },
      { optionId: '2', text: '2ヶ月' },
      { optionId: '3', text: '3ヶ月' },
      { optionId: '4', text: '5ヶ月' },
    ],
  },
  {
    quizId: '169',
    question:
      '天空競技場編からの問題です。\nヒソカは二度目のカストロ戦前までの11戦で、相手にとられたポイントは何点？',
    options: [
      { optionId: '0', text: '4点' },
      { optionId: '1', text: '2点' },
      { optionId: '2', text: '3点' },
      { optionId: '3', text: '5点' },
      { optionId: '4', text: '6点' },
    ],
  },
  {
    quizId: '170',
    question:
      '天空競技場編からの問題です。\nキルアは、ヒソカ対カストロ戦の試合のチケットを1枚いくらで勝った？',
    options: [
      { optionId: '0', text: '15万' },
      { optionId: '1', text: '10万' },
      { optionId: '2', text: '7万' },
      { optionId: '3', text: '6万' },
      { optionId: '4', text: '5万' },
    ],
  },
  {
    quizId: '171',
    question: '天空競技場編からの問題です。\n次のうち、カストロの技名はどれ？',
    options: [
      { optionId: '0', text: '虎咬真拳' },
      { optionId: '1', text: '百壱裂拳' },
      { optionId: '2', text: '無影棍' },
      { optionId: '3', text: '阿修羅破壊豪華山' },
      { optionId: '4', text: '子供拳' },
    ],
  },
  {
    quizId: '172',
    question:
      '一つ好きなトランプのカードを数を選んで頭に思い浮かべてください。\nその数に4を足して、さらに倍にする、そこから6を引き、2で割った後、最初に思った数を引くといくつになる？',
    options: [
      { optionId: '0', text: '1' },
      { optionId: '1', text: '3' },
      { optionId: '2', text: '5' },
      { optionId: '3', text: '7' },
      { optionId: '4', text: '9' },
    ],
  },
  {
    quizId: '173',
    question:
      '天空競技場編からの問題です。\nヒソカは、カストロの敗因を何と言った？',
    options: [
      { optionId: '0', text: '容量（メモリ）の無駄使い' },
      { optionId: '1', text: '自分の能力への過信' },
      { optionId: '2', text: '努力不足' },
      { optionId: '3', text: '才能の無さ' },
      { optionId: '4', text: 'パンチの遅さ' },
    ],
  },
  {
    quizId: '174',
    question:
      '天空競技場編からの問題です。\nヒソカはカストロ戦で、勝利したものの両腕を切断されてしまいました。その切断されたヒソカの腕をマチが治してくれました。\nヒソカの腕を治したマチの技名は？',
    options: [
      { optionId: '0', text: '念糸縫合' },
      { optionId: '1', text: '念糸手術' },
      { optionId: '2', text: '結合念糸' },
      { optionId: '3', text: '念糸のダンス' },
      { optionId: '4', text: '念糸の融合' },
    ],
  },
  {
    quizId: '175',
    question:
      '天空競技場編からの問題です。\nヒソカはカストロ戦で、勝利したものの両腕を切断されてしまいました。その切断されたヒソカの腕をマチが治してくれました。\nいくらで治してくれた？',
    options: [
      { optionId: '0', text: '左手2千万、右手5千万' },
      { optionId: '1', text: '左手5千万、右手2千万' },
      { optionId: '2', text: '左手2億、右手5億' },
      { optionId: '3', text: '左手5億、右手2億' },
      { optionId: '4', text: '左手50億、右手20億' },
    ],
  },
  {
    quizId: '176',
    question:
      '天空競技場、ヒソカ対カストロ戦から問題です。\nヒソカはいつトランプから伸びている13本のオーラをカストロの全身にはりつけた？',
    options: [
      { optionId: '0', text: 'スペードのエースをカストロに投げた時' },
      { optionId: '1', text: '13枚のトランプをまいて気をそらした時' },
      { optionId: '2', text: 'カストロに左腕を攻撃された瞬間' },
      {
        optionId: '3',
        text: 'カストロに服の汚れの違いで本物が分かると告げたとき',
      },
      { optionId: '4', text: 'スカーフを投げたとき' },
    ],
  },
  {
    quizId: '177',
    question:
      '天空競技場で、マチはヒソカに伝言を伝えました。\n○月○日正午までに「暇な奴」改め「全員必ず」ヨークシンシティに集合！！\n○に入る数字は何？ ',
    options: [
      { optionId: '0', text: '8月30日' },
      { optionId: '1', text: '8月31日' },
      { optionId: '2', text: '9月1日' },
      { optionId: '3', text: '8月29日' },
      { optionId: '4', text: '9月2日' },
    ],
  },
  {
    quizId: '178',
    question: '第一回人気投票一位は誰？',
    options: [
      { optionId: '0', text: 'キルア' },
      { optionId: '1', text: 'ゴン' },
      { optionId: '2', text: 'クラピカ' },
      { optionId: '3', text: 'ヒソカ' },
      { optionId: '4', text: 'レオリオ' },
    ],
  },
  {
    quizId: '179',
    question: '第一回人気投票二位は誰？',
    options: [
      { optionId: '0', text: 'クラピカ' },
      { optionId: '1', text: 'ゴン' },
      { optionId: '2', text: 'キルア' },
      { optionId: '3', text: 'ヒソカ' },
      { optionId: '4', text: 'レオリオ' },
    ],
  },
  {
    quizId: '180',
    question:
      '第一回人気投票からの問題です。\nカイト、サトツ、イルミ（ギタラクル）、ハンゾー、ポンズの五人の中で一番順位が高かったのは誰？',
    options: [
      { optionId: '0', text: 'イルミ（ギタラクル）' },
      { optionId: '1', text: 'カイト' },
      { optionId: '2', text: 'サトツ' },
      { optionId: '3', text: 'ハンゾー' },
      { optionId: '4', text: 'ポンズ' },
    ],
  },
  {
    quizId: '181',
    question:
      '第一回人気投票からの問題です。\nアルカ、カルト、キルアの母、シルバ、ゼノの五人の中で一番順位が高かったのは誰？',
    options: [
      { optionId: '0', text: 'キルアの母' },
      { optionId: '1', text: 'アルカ' },
      { optionId: '2', text: 'カルト' },
      { optionId: '3', text: 'ゼノ' },
      { optionId: '4', text: 'シルバ' },
    ],
  },
  {
    quizId: '182',
    question:
      'ウイングさんの名言から出題です。\n○に入る言葉を選びなさい。\n「何を思い何に怒り何を好み何を求めるのか\n何処を旅し誰と出会いどんな経験をするのか・・・・\nそれらの全てが君達の○を形作るのです！」',
    options: [
      { optionId: '0', text: '念' },
      { optionId: '1', text: '人' },
      { optionId: '2', text: '器' },
      { optionId: '3', text: '心' },
      { optionId: '4', text: '基' },
    ],
  },
  {
    quizId: '183',
    question:
      'ウイングさんの名言から出題です。\n○に入る言葉を選びなさい。\n「君達はまだ発展途上です\n器もできていない\nできるだけ自分の○を大きく育てなさい\nそのための修行なのです\nガンガン鍛錬に励みなさい\nそして同じくらい人生を楽しみなさい」',
    options: [
      { optionId: '0', text: '器' },
      { optionId: '1', text: '人' },
      { optionId: '2', text: '念' },
      { optionId: '3', text: '心' },
      { optionId: '4', text: '基' },
    ],
  },
  {
    quizId: '184',
    question:
      '天空競技場からの問題です。\nゴンの200階クラス二戦目は、不戦勝で勝利。\n二戦目の対戦相手の名前は？',
    options: [
      { optionId: '0', text: 'サダソ' },
      { optionId: '1', text: 'サタン' },
      { optionId: '2', text: 'アルル' },
      { optionId: '3', text: 'アミティ' },
      { optionId: '4', text: 'カーバンクル' },
    ],
  },
  {
    quizId: '185',
    question:
      '天空競技場からの問題です。\nゴンの200階クラス二戦目のサダソ戦は、不戦勝で勝利でしたが、対戦日はいつだった？',
    options: [
      { optionId: '0', text: '41424' },
      { optionId: '1', text: '41435' },
      { optionId: '2', text: '41445' },
      { optionId: '3', text: '41414' },
      { optionId: '4', text: '41404' },
    ],
  },
  {
    quizId: '186',
    question:
      '天空競技場からの問題です。\nキルアの200階クラス初戦は、不戦勝で勝利。\n対戦相手の名前は？',
    options: [
      { optionId: '0', text: 'サダソ' },
      { optionId: '1', text: 'サタン' },
      { optionId: '2', text: 'アルル' },
      { optionId: '3', text: 'アミティ' },
      { optionId: '4', text: 'カーバンクル' },
    ],
  },
  {
    quizId: '187',
    question:
      '天空競技場からの問題です。\nキルアの200階クラス初戦は、不戦勝で勝利でしたが、対戦日はいつだった？',
    options: [
      { optionId: '0', text: '41423' },
      { optionId: '1', text: '41404' },
      { optionId: '2', text: '41414' },
      { optionId: '3', text: '41413' },
      { optionId: '4', text: '41403' },
    ],
  },
  {
    quizId: '188',
    question:
      '天空競技場編からの問題です。\nギドがゴンとの二試合目で使った技名、「ショットガンブルース」漢字でどう書く？',
    options: [
      { optionId: '0', text: '散弾独楽哀歌' },
      { optionId: '1', text: '射撃銃音楽' },
      { optionId: '2', text: '射撃銃青春歌' },
      { optionId: '3', text: '散弾駒青春歌' },
      { optionId: '4', text: '乱発弾歌謡曲' },
    ],
  },
  {
    quizId: '189',
    question:
      '天空競技場編からの問題です。\nギドがゴンとの二試合目で使った技名、「散弾独楽哀歌」\nなんて読む？',
    options: [
      { optionId: '0', text: 'ショトガンブルース' },
      { optionId: '1', text: 'サンダンゴマのソング' },
      { optionId: '2', text: 'ワーニングショットブルース' },
      { optionId: '3', text: 'トップソング' },
      { optionId: '4', text: 'デンジャートップ' },
    ],
  },
  {
    quizId: '190',
    question:
      '天空競技場編からの問題です。\n車椅子に乗りムチを振り回す新人キラーの名前は？',
    options: [
      { optionId: '0', text: 'リールベルト' },
      { optionId: '1', text: 'シェゾ' },
      { optionId: '2', text: 'ルルー' },
      { optionId: '3', text: 'ラフィーナ' },
      { optionId: '4', text: 'シグ' },
    ],
  },
  {
    quizId: '191',
    question:
      '天空競技場編からの問題です。\nすさまじいスピードで2本のムチをうならせるリールベルトが使う技名は？',
    options: [
      { optionId: '0', text: '双頭の蛇による二重唱' },
      { optionId: '1', text: '悪魔の長い爪' },
      { optionId: '2', text: '哀しみの雷' },
      { optionId: '3', text: '破壊の序曲' },
      { optionId: '4', text: '魔王降臨' },
    ],
  },
  {
    quizId: '192',
    question: '双頭の蛇による二重唱は誰が使う技？',
    options: [
      { optionId: '0', text: 'リールベルト' },
      { optionId: '1', text: 'シェゾ' },
      { optionId: '2', text: 'ルルー' },
      { optionId: '3', text: 'ラフィーナ' },
      { optionId: '4', text: 'シグ' },
    ],
  },
  {
    quizId: '193',
    question: '爆発的推進力は誰が使う技？',
    options: [
      { optionId: '0', text: 'リールベルト' },
      { optionId: '1', text: 'シェゾ' },
      { optionId: '2', text: 'ルルー' },
      { optionId: '3', text: 'ラフィーナ' },
      { optionId: '4', text: 'シグ' },
    ],
  },
  {
    quizId: '194',
    question:
      '天空競技場編からの問題です。\nリールベルトが使う「爆発的推進力」はなんて読む？',
    options: [
      { optionId: '0', text: 'オーラバースト' },
      { optionId: '1', text: 'サンダーストーム' },
      { optionId: '2', text: 'スティンシェイド' },
      { optionId: '3', text: 'アレイアード' },
      { optionId: '4', text: 'シャドウエッジ' },
    ],
  },
  {
    quizId: '195',
    question: '水見式オーラ選別法で、水の色が変わった場合は何系の念能力者？',
    options: [
      { optionId: '0', text: '放出系' },
      { optionId: '1', text: '操作系' },
      { optionId: '2', text: '具現化系' },
      { optionId: '3', text: '特質系' },
      { optionId: '4', text: '変化系' },
    ],
  },
  {
    quizId: '196',
    question:
      '水見式オーラ選別法で、水に不純物が出現した場合は何系の念能力者？',
    options: [
      { optionId: '0', text: '具現化系' },
      { optionId: '1', text: '操作系' },
      { optionId: '2', text: '放出系' },
      { optionId: '3', text: '特質系' },
      { optionId: '4', text: '変化系' },
    ],
  },
  {
    quizId: '197',
    question:
      'ヒソカのオーラ別性格分析からの出題です。\n操作系能力者の特徴は？',
    options: [
      { optionId: '0', text: '理屈屋。マイペース' },
      { optionId: '1', text: '短期で大雑把' },
      { optionId: '2', text: '気まぐれでうそつき' },
      { optionId: '3', text: '個人主義者。カリスマ性有り' },
      { optionId: '4', text: '神経質' },
    ],
  },
  {
    quizId: '198',
    question:
      'ヒソカのオーラ別性格分析からの出題です。\n放出系能力者の特徴は？',
    options: [
      { optionId: '0', text: '短期で大雑把' },
      { optionId: '1', text: '神経質' },
      { optionId: '2', text: '気まぐれでうそつき' },
      { optionId: '3', text: '個人主義者。カリスマ性有り' },
      { optionId: '4', text: '理屈屋。マイペース' },
    ],
  },
  {
    quizId: '199',
    question:
      'ヒソカのオーラ別性格分析からの出題です。\n具現化系能力者の特徴は？',
    options: [
      { optionId: '0', text: '神経質' },
      { optionId: '1', text: '短期で大雑把' },
      { optionId: '2', text: '気まぐれでうそつき' },
      { optionId: '3', text: '個人主義者。カリスマ性有り' },
      { optionId: '4', text: '理屈屋。マイペース' },
    ],
  },
  {
    quizId: '200',
    question:
      '天空競技場編からの問題です。\nヒソカはいつゴンのほっぺにバンジーガムをつけたでしょうか？',
    options: [
      { optionId: '0', text: 'オーラ別性格分析の時に飛ばしてつけた' },
      { optionId: '1', text: 'ヒジテツの時' },
      { optionId: '2', text: 'クリーンヒットの時' },
      { optionId: '3', text: 'クリティカルの時' },
      { optionId: '4', text: '両手で殴った時' },
    ],
  },
  {
    quizId: '201',
    question: '天空競技場編からの問題です。\nヒソカ対ゴン戦の結果は？',
    options: [
      { optionId: '0', text: '11-4でヒソカの勝ち' },
      { optionId: '1', text: '11-3でヒソカの勝ち' },
      { optionId: '2', text: '10-4でヒソカの勝ち' },
      { optionId: '3', text: '11-8でヒソカの勝ち' },
      { optionId: '4', text: '10-1でヒソカの勝ち' },
    ],
  },
  {
    quizId: '202',
    question:
      '天空競技場編からの問題です。\nゴン対ヒソカ戦は何月何日の出来事？',
    options: [
      { optionId: '0', text: '41465' },
      { optionId: '1', text: '41404' },
      { optionId: '2', text: '41445' },
      { optionId: '3', text: '41505' },
      { optionId: '4', text: '41526' },
    ],
  },
  {
    quizId: '203',
    question:
      'ジンがミトさんに「ゴンがハンターになったら渡してくれ」と頼んだ箱に関する問題です。\n箱の中身は、3つありました。指輪と、テープと、あとひとつは何？',
    options: [
      { optionId: '0', text: 'ROMカード' },
      { optionId: '1', text: 'RAMカード' },
      { optionId: '2', text: 'メモリーカード' },
      { optionId: '3', text: 'GAMカード' },
      { optionId: '4', text: 'GOMカード' },
    ],
  },
  {
    quizId: '204',
    question: 'グリードアインドは何というゲーム機でプレイする？',
    options: [
      { optionId: '0', text: 'ジョイステーション' },
      { optionId: '1', text: 'ジョイボーイ' },
      { optionId: '2', text: 'ジョイキューブ' },
      { optionId: '3', text: 'ジョイサターン' },
      { optionId: '4', text: 'ジョイヨン' },
    ],
  },
  {
    quizId: '205',
    question:
      'プロハンターになったばかりのクラピカが訪れた時、念を会得していないと気づき仕事の斡旋を断りました。それから半年も経たないうちに念を覚えてきたクラピカに驚きながらも、要求通りヨークシンのオークションに強いコネを持つ雇用主を紹介してくれた仲介所の名前は？',
    options: [
      { optionId: '0', text: '千耳会' },
      { optionId: '1', text: '流星会' },
      { optionId: '2', text: '尺骨会' },
      { optionId: '3', text: '夢見馬鹿会' },
      { optionId: '4', text: '流離会' },
    ],
  },
  {
    quizId: '206',
    question:
      'クラピカは念を覚えた後、仲介所で「ヨークシンで開催されるオークションに強いコネクションを持つ人物」を三人紹介してもらいました。\nそのうちの一人目の拳銃マニアが特に求めたいたものは何？',
    options: [
      { optionId: '0', text: 'ミゼット社のブルS55' },
      { optionId: '1', text: 'ベンニードロンのベンズナイフ' },
      { optionId: '2', text: 'ホーリー社のランチャー12' },
      { optionId: '3', text: 'カスト社のムム5' },
      { optionId: '4', text: 'ミニュー社のコキリン600' },
    ],
  },
  {
    quizId: '207',
    question:
      'クラピカは念を覚えた後、仲介所で「ヨークシンで開催されるオークションに強いコネクションを持つ人物」を三人紹介してもらいました。\n二人目骨董皿招集家が求めていたものは？',
    options: [
      { optionId: '0', text: 'ロド社製記念皿1655年と1657年のもの' },
      { optionId: '1', text: 'ベンニードロンの骨皿' },
      { optionId: '2', text: 'ゼリー症児の頭部で作成されたラッティー' },
      { optionId: '3', text: 'キリヒトイチゴの記念皿1521年と1624年のもの' },
      { optionId: '4', text: 'ミニュー社オリジナル限定3枚の骨董皿' },
    ],
  },
  {
    quizId: '208',
    question:
      'クラピカは念を覚えた後、仲介所で「ヨークシンで開催されるオークションに強いコネクションを持つ人物」を三人紹介してもらいました。\n次のうち、三人目の人体招集家が求めていたものは？',
    options: [
      { optionId: '0', text: 'ゼリー症児の頭部' },
      { optionId: '1', text: '闇のヘンタイ魔術師の頭部' },
      { optionId: '2', text: 'ラフィー族の眼球' },
      { optionId: '3', text: 'ツルトン族の右手、特に12歳の女' },
      { optionId: '4', text: 'ミート族の奥歯' },
    ],
  },
  {
    quizId: '209',
    question:
      'クラピカは念を覚えた後、仲介所で「ヨークシンで開催されるオークションに強いコネクションを持つ人物」を三人紹介してもらいました。\n次のうち、三人目の人体招集家が求めていたものは？',
    options: [
      { optionId: '0', text: '全身入墨皮の昇龍図極美品' },
      { optionId: '1', text: '闇のヘンタイ魔術師の頭部' },
      { optionId: '2', text: 'ラフィー族の眼球' },
      { optionId: '3', text: 'ツルトン族の右手、特に12歳の女' },
      { optionId: '4', text: 'ミート族の奥歯' },
    ],
  },
  {
    quizId: '210',
    question:
      '人体収集家の館からの出題です。\nシャッチモーノトチーノは、何体をオーラで作り、クラピカ達を襲った？',
    options: [
      { optionId: '0', text: '11人' },
      { optionId: '1', text: '12人' },
      { optionId: '2', text: '9人' },
      { optionId: '3', text: '15人' },
      { optionId: '4', text: '24人' },
    ],
  },
  {
    quizId: '211',
    question:
      'クラピカと同時期にノストラードファミリーに雇われることになったバショウ。次のうち、バショウの能力名は？',
    options: [
      { optionId: '0', text: 'グレイトハイカー' },
      { optionId: '1', text: 'ファイブセブンファイブ' },
      { optionId: '2', text: 'ジャパニーズポエム' },
      { optionId: '3', text: 'ファイブセブンファイブセブンセブン' },
      { optionId: '4', text: 'パワフルポエム' },
    ],
  },
  {
    quizId: '212',
    question: '人体収集家の館からの出題です。\nバショウの読んだ俳句はどれ？',
    options: [
      { optionId: '0', text: '俺様が殴ったものはみな燃える' },
      { optionId: '1', text: '俺様が詠んだ俳句はみな燃える' },
      { optionId: '2', text: '俺様が蹴った相手はみな消える' },
      { optionId: '3', text: '俺様が見つめた相手はみな惚れる' },
      { optionId: '4', text: '俺様が抱いた女はみな美人' },
    ],
  },
  {
    quizId: '213',
    question:
      '人体収集家の館からの出題です。\nバショウが「俺様が殴ったものはみな燃える」と詠みグレイトハイカーを発動した後のセリフは？',
    options: [
      { optionId: '0', text: 'くそったれ 燃えがイマイチ 駄作だぜ' },
      { optionId: '1', text: '秋深き 隣は何を する人ぞ' },
      { optionId: '2', text: '荒海や 佐渡に横とう 天の川' },
      { optionId: '3', text: '海が香に のっと日の出る 山路かな' },
      { optionId: '4', text: '菊の香や 奈良には古き 仏たち' },
    ],
  },
  {
    quizId: '214',
    question: '人体収集家の館からの出題です。\nバショウの読んだ俳句はどれ？',
    options: [
      { optionId: '0', text: '我が問いに 空言人が 焼かれ死ぬ' },
      { optionId: '1', text: '秋深き 隣は何を する人ぞ' },
      { optionId: '2', text: '荒海や 佐渡に横とう 天の川' },
      { optionId: '3', text: '海が香に のっと日の出る 山路かな' },
      { optionId: '4', text: '菊の香や 奈良には古き 仏たち' },
    ],
  },
  {
    quizId: '215',
    question:
      '人体収集家の館からの出題です。\nバショウの読んだ俳句「我が問いに 空言人が 焼かれ死ぬ」\nこの俳句をバショウは他のように詠み返しても良いと言いました。どのように詠み返しても良い？',
    options: [
      { optionId: '0', text: '嘘つきは 灼熱地獄に 落ちるわよ' },
      { optionId: '1', text: '嘘つきは 天に変わって お仕置きよ' },
      { optionId: '2', text: '言わぬなら 死んで償え 空言人' },
      { optionId: '3', text: '言わぬなら お仕置きするぞ ホトトギス' },
      { optionId: '4', text: '嘘つきは 火炎放射で お仕置きよ' },
    ],
  },
  {
    quizId: '216',
    question: '人体収集家の館からの出題です。\nヴェーゼが使った能力名は？',
    options: [
      { optionId: '0', text: '180分の恋奴隷' },
      { optionId: '1', text: '接吻で全部を奪う' },
      { optionId: '2', text: '唇奪いの下僕' },
      { optionId: '3', text: '卑しい卑しい犬使い' },
      { optionId: '4', text: '接吻されし下僕' },
    ],
  },
  {
    quizId: '217',
    question:
      '人体収集家の館からの出題です。\nヴェーゼが使った技「180分の恋奴隷」は何と読む？',
    options: [
      { optionId: '0', text: 'インスタントラヴァー' },
      { optionId: '1', text: 'ハートラバー' },
      { optionId: '2', text: 'スリーオクロックラバー' },
      { optionId: '3', text: 'ゴッドマウスラバー' },
      { optionId: '4', text: 'セクシャルラバー' },
    ],
  },
  {
    quizId: '218',
    question:
      'ゴンが持っていたジョイステーションのロムカードについての問題です。このロムカードにはジョイステーション何ブロック分の容量があった？',
    options: [
      { optionId: '0', text: '30ブロック' },
      { optionId: '1', text: '20ブロック' },
      { optionId: '2', text: '300ブロック' },
      { optionId: '3', text: '200ブロック' },
      { optionId: '4', text: '3,000ブロック' },
    ],
  },
  {
    quizId: '219',
    question: 'グリードアイランドの発売年度は？',
    options: [
      { optionId: '0', text: '1987年' },
      { optionId: '1', text: '1989年' },
      { optionId: '2', text: '1988年' },
      { optionId: '3', text: '1986年' },
      { optionId: '4', text: '1985年' },
    ],
  },
  {
    quizId: '220',
    question: 'グリードアイランドの製作発売元は？',
    options: [
      { optionId: '0', text: '株式会社マリリン' },
      { optionId: '1', text: '株式会社プリリン' },
      { optionId: '2', text: 'アリリン株式会社' },
      { optionId: '3', text: 'モモリン株式会社' },
      { optionId: '4', text: '株式会社チチリン' },
    ],
  },
  {
    quizId: '221',
    question: '1ジェニーは約何円？',
    options: [
      { optionId: '0', text: '0.9円' },
      { optionId: '1', text: '5円' },
      { optionId: '2', text: '2円' },
      { optionId: '3', text: '1.5円' },
      { optionId: '4', text: '0.1円' },
    ],
  },
  {
    quizId: '222',
    question: 'ミルキに教えて貰ったハンター専用サイトの名前は？',
    options: [
      { optionId: '0', text: '狩人の酒場' },
      { optionId: '1', text: '人が居ないバー' },
      { optionId: '2', text: 'ハンターの館' },
      { optionId: '3', text: 'ファイブオクロック' },
      { optionId: '4', text: '一流の酒場' },
    ],
  },
  {
    quizId: '223',
    question:
      'ミルキに教えて貰ったハンター専用サイトで、グリードアインドの情報を得るためにゴンたちはお金を払いました。\nいくら支払った？',
    options: [
      { optionId: '0', text: '2000万円' },
      { optionId: '1', text: '1000万円' },
      { optionId: '2', text: '500万円' },
      { optionId: '3', text: '3000万円' },
      { optionId: '4', text: '7500万円' },
    ],
  },
  {
    quizId: '224',
    question: 'グリードアイランドの総合入手難易度は？',
    options: [
      { optionId: '0', text: 'G' },
      { optionId: '1', text: 'H' },
      { optionId: '2', text: 'E' },
      { optionId: '3', text: 'F' },
      { optionId: '4', text: 'D' },
    ],
  },
  {
    quizId: '225',
    question:
      'ノストラードファミリーの護衛団の採用試験からの問題です。\n試験内容は、人体収集家が望む品のリストの中から何か一つを一ヶ月以内に持ってくることでした。\nクラピカが持ってきたものは何？',
    options: [
      { optionId: '0', text: '名女優セーラの毛髪 DNA鑑定書付き' },
      { optionId: '1', text: 'エジプーシャ石墓埋葬品のミイラ右腕' },
      { optionId: '2', text: '龍皮病患者の皮膚' },
      { optionId: '3', text: '一角族の頭蓋骨' },
      { optionId: '4', text: 'ゼリー症児の頭部' },
    ],
  },
  {
    quizId: '226',
    question:
      'ノストラードファミリーの護衛団の採用試験からの問題です。\n試験内容は、人体収集家が望む品のリストの中から何か一つを一ヶ月以内に持ってくることでした。\nバショウが持ってきたものは何？',
    options: [
      { optionId: '0', text: 'エジプーシャ石墓埋葬品のミイラ右腕' },
      { optionId: '1', text: '名女優セーラの毛髪 DNA鑑定書付き' },
      { optionId: '2', text: '龍皮病患者の皮膚' },
      { optionId: '3', text: '一角族の頭蓋骨' },
      { optionId: '4', text: 'ゼリー症児の頭部' },
    ],
  },
  {
    quizId: '227',
    question:
      'ノストラードファミリーの護衛団の採用試験からの問題です。\n試験内容は、人体収集家が望む品のリストの中から何か一つを一ヶ月以内に持ってくることでした。\nセンリツが持ってきたものは何？',
    options: [
      { optionId: '0', text: '龍皮病患者の皮膚' },
      { optionId: '1', text: 'エジプーシャ石墓埋葬品のミイラ右腕' },
      { optionId: '2', text: '名女優セーラの毛髪 DNA鑑定書付き' },
      { optionId: '3', text: '一角族の頭蓋骨' },
      { optionId: '4', text: 'ゼリー症児の頭部' },
    ],
  },
  {
    quizId: '228',
    question:
      'ノストラードファミリーの護衛団の採用試験からの問題です。\n試験内容は、人体収集家が望む品のリストの中から何か一つを一ヶ月以内に持ってくることでした。\nヴェーゼが持ってきたものは何？',
    options: [
      { optionId: '0', text: '一角族の頭蓋骨' },
      { optionId: '1', text: 'エジプーシャ石墓埋葬品のミイラ右腕' },
      { optionId: '2', text: '龍皮病患者の皮膚' },
      { optionId: '3', text: '名女優セーラの毛髪 DNA鑑定書付き' },
      { optionId: '4', text: 'ゼリー症児の頭部' },
    ],
  },
  {
    quizId: '229',
    question: 'ノストラードファミリーの護衛団のリーダーの名前は？',
    options: [
      { optionId: '0', text: 'ダルツォルネ' },
      { optionId: '1', text: 'バルディエル' },
      { optionId: '2', text: 'ダブリス' },
      { optionId: '3', text: 'リリス' },
      { optionId: '4', text: 'ゼルエル' },
    ],
  },
  {
    quizId: '230',
    question:
      'ノストラードファミリーがオークション会場へ向かうときに離陸した、ヨークシン郊外の空港名は？',
    options: [
      { optionId: '0', text: 'リンゴーン空港' },
      { optionId: '1', text: 'アラエル空港' },
      { optionId: '2', text: 'レリエル空港' },
      { optionId: '3', text: 'サンダルフォン空港' },
      { optionId: '4', text: 'アルミサエル空港' },
    ],
  },
  {
    quizId: '231',
    question: 'ゴンとキルアがヨークシンで買った携帯は何？',
    options: [
      { optionId: '0', text: 'ビートル07型' },
      { optionId: '1', text: 'イロウル11型' },
      { optionId: '2', text: 'サハクィエル10型' },
      { optionId: '3', text: 'マトリエル9型' },
      { optionId: '4', text: 'イスラフェル7型' },
    ],
  },
  {
    quizId: '232',
    question:
      'ヨークシン編からの問題です。\nいくらで、ゴンとキルアは携帯電話「ビートル07型」を１台いくらで買った？',
    options: [
      { optionId: '0', text: '11万580J' },
      { optionId: '1', text: '5万8,980J' },
      { optionId: '2', text: '8万720J' },
      { optionId: '3', text: '1万500J' },
      { optionId: '4', text: '34万5,420J' },
    ],
  },
  {
    quizId: '233',
    question:
      'ヨークシン編からの問題です。\nゴンとキルアは携帯電話「ビートル07型」をレオリオの値切りによって一台「11万580J」で購入するすることができました。\nレオリオは同じ機種をいくらで買ったと自慢していたでしょうか？',
    options: [
      { optionId: '0', text: '8万29J' },
      { optionId: '1', text: '7万18J' },
      { optionId: '2', text: '6万980J' },
      { optionId: '3', text: '7万180J' },
      { optionId: '4', text: '5万9,800J' },
    ],
  },
  {
    quizId: '234',
    question:
      'ヨークシン編から難易度マックスの問題です。\nネオンの占いに9月分から追加されたのは、ロットフェリ様ともう一人は誰？',
    options: [
      { optionId: '0', text: 'トリンク様' },
      { optionId: '1', text: 'ガキエル様' },
      { optionId: '2', text: 'ラミエル様' },
      { optionId: '3', text: 'シャムシエル様' },
      { optionId: '4', text: 'サキエル様' },
    ],
  },
  {
    quizId: '235',
    question:
      'ヨークシン編から難易度マックスの問題です。\nネオンの占いに9月分から追加されたのは、トリンク様ともう一人は誰？',
    options: [
      { optionId: '0', text: 'ロットフェリ様' },
      { optionId: '1', text: 'ガキエル様' },
      { optionId: '2', text: 'ラミエル様' },
      { optionId: '3', text: 'シャムシエル様' },
      { optionId: '4', text: 'サキエル様' },
    ],
  },
  {
    quizId: '236',
    question: 'ヨークシン編からの問題です。ネオンの能力名は？',
    options: [
      { optionId: '0', text: '天使の自動筆記' },
      { optionId: '1', text: '未来の道しるべ' },
      { optionId: '2', text: '悪魔の占い' },
      { optionId: '3', text: '自動未来日記' },
      { optionId: '4', text: '天使の悪戯' },
    ],
  },
  {
    quizId: '237',
    question:
      'ヨークシン編からの問題です。\n旅団が13人集まったのはどれくらいぶり？',
    options: [
      { optionId: '0', text: '3年2ヶ月' },
      { optionId: '1', text: '3年6ヶ月' },
      { optionId: '2', text: '8ヶ月' },
      { optionId: '3', text: '4年10ヶ月' },
      { optionId: '4', text: '1年7ヶ月' },
    ],
  },
  {
    quizId: '238',
    question:
      'ヨークシン編からの問題です。\nコルコ王女のミイラが競売にかけられた場所は？',
    options: [
      { optionId: '0', text: 'セメタリービル' },
      { optionId: '1', text: 'ブルジュハリーファビル' },
      { optionId: '2', text: 'アブラージュ・アル・ベイト・タワーズホテル' },
      { optionId: '3', text: 'ウィリス・タワービル' },
      { optionId: '4', text: 'ペトロナスツインタワービル' },
    ],
  },
  {
    quizId: '239',
    question:
      'ヨークシン編からの問題です。\nノストラードファミリーが競り落とそうとしているは誰の使用済みティッシュ？',
    options: [
      { optionId: '0', text: '俳優ソン・リマーチ' },
      { optionId: '1', text: '女優レイ' },
      { optionId: '2', text: '俳優シンジ' },
      { optionId: '3', text: '女優アスカ' },
      { optionId: '4', text: '俳優トウジ' },
    ],
  },
  {
    quizId: '240',
    question:
      'ヨークシン編からの問題です。\nコルコ王女のミイラを競り落とすために、ノストラードファミリーから参加したのは3人です。\n誰と誰と誰？',
    options: [
      { optionId: '0', text: 'イワレンコフ、トチーノ、ヴェーゼ' },
      { optionId: '1', text: 'イワレンコフ、リンセン、ヴェーゼ' },
      { optionId: '2', text: 'イワレンコフ、トチーノ、スクワラ' },
      { optionId: '3', text: 'リンセン、トチーノ、ヴェーゼ' },
      { optionId: '4', text: 'イワレンコフ、スクワラ、ヴェーゼ' },
    ],
  },
  {
    quizId: '241',
    question:
      'ヨークシン編からの問題です。\n競売方法の一つ。物々競売の俗称とは？',
    options: [
      { optionId: '0', text: '交わし' },
      { optionId: '1', text: '縛り' },
      { optionId: '2', text: 'ヨコ抜き' },
      { optionId: '3', text: 'アトヅケ' },
      { optionId: '4', text: 'ヤキヅケ' },
    ],
  },
  {
    quizId: '242',
    question: '競売方法の一つ。条件競売の俗称とは？',
    options: [
      { optionId: '0', text: '縛り' },
      { optionId: '1', text: '交わし' },
      { optionId: '2', text: 'ヨコ抜き' },
      { optionId: '3', text: 'アトヅケ' },
      { optionId: '4', text: 'ヤキヅケ' },
    ],
  },
  {
    quizId: '243',
    question:
      'センリツはある楽譜を探すために今の仕事につきました。ある楽譜とは？',
    options: [
      { optionId: '0', text: '闇のソナタ' },
      { optionId: '1', text: '集結の園へ' },
      { optionId: '2', text: '残光の天使のテーゼ' },
      { optionId: '3', text: '魂のルフラン' },
      { optionId: '4', text: '桜流し' },
    ],
  },
  {
    quizId: '244',
    question:
      'センリツは「闇のソナタ」という楽譜を探すために今の仕事につきました。闇のソナタは4つの楽器の楽譜があります。\n4つの楽器以外を選べ。',
    options: [
      { optionId: '0', text: 'チェロ' },
      { optionId: '1', text: 'ピアノ' },
      { optionId: '2', text: 'バイオリン' },
      { optionId: '3', text: 'フルート' },
      { optionId: '4', text: 'ハーブ' },
    ],
  },
  {
    quizId: '245',
    question:
      'ヨークシン編からの問題です。\nシャッチモーノ・トチーノの能力名は？',
    options: [
      { optionId: '0', text: '縁の下の11人' },
      { optionId: '1', text: '11人の念人形たち' },
      { optionId: '2', text: 'トチーノと11人の悪魔' },
      { optionId: '3', text: '最後の11人' },
      { optionId: '4', text: '人の造りしもの' },
    ],
  },
  {
    quizId: '246',
    question:
      'ヨークシン編からの問題です。\n競売品の移動は隠獣のメンバーが行いました。\nその隠獣のメンバーの名前は？',
    options: [
      { optionId: '0', text: '梟' },
      { optionId: '1', text: '鷲' },
      { optionId: '2', text: '鷹' },
      { optionId: '3', text: '蝙蝠' },
      { optionId: '4', text: '燕' },
    ],
  },
  {
    quizId: '247',
    question:
      'ヨークシン編からの問題です。\nウボォーギンがマフィア軍団と戦った場所はどこ？',
    options: [
      { optionId: '0', text: 'ゴルドー砂漠' },
      { optionId: '1', text: 'サハラ砂漠' },
      { optionId: '2', text: 'チワワ砂漠' },
      { optionId: '3', text: 'グレートサンデイ砂漠' },
      { optionId: '4', text: 'パタゴニア砂漠' },
    ],
  },
  {
    quizId: '248',
    question:
      'ヨークシン編、ウボォーギンと隠獣との戦いからの問題です。\n土に潜る隠獣の名前は？',
    options: [
      { optionId: '0', text: '蚯蚓' },
      { optionId: '1', text: '蛭' },
      { optionId: '2', text: '病犬' },
      { optionId: '3', text: '豪猪' },
      { optionId: '4', text: '梟' },
    ],
  },
  {
    quizId: '249',
    question:
      'ヨークシン編、ウボォーギンと隠獣との戦いからの問題です。\n体毛を自由に操り強靭な針にも変えることができる隠獣の名前は？',
    options: [
      { optionId: '0', text: '豪猪' },
      { optionId: '1', text: '蛭' },
      { optionId: '2', text: '病犬' },
      { optionId: '3', text: '蚯蚓' },
      { optionId: '4', text: '梟' },
    ],
  },
  {
    quizId: '250',
    question:
      'ヨークシン編、ウボォーギンと隠獣との戦いからの問題です。\n体内に大小無数のヒルを飼っている隠獣の名前は？',
    options: [
      { optionId: '0', text: '蛭' },
      { optionId: '1', text: '蚯蚓' },
      { optionId: '2', text: '病犬' },
      { optionId: '3', text: '蚯蚓' },
      { optionId: '4', text: '梟' },
    ],
  },
  {
    quizId: '251',
    question: 'フランクリンは何系の念能力者？',
    options: [
      { optionId: '0', text: '放出系' },
      { optionId: '1', text: '操作系' },
      { optionId: '2', text: '強化系' },
      { optionId: '3', text: '変化系' },
      { optionId: '4', text: '具現化系' },
    ],
  },
  {
    quizId: '252',
    question:
      'ウボォーギンの技「ビックバンインパクト」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '超破壊拳' },
      { optionId: '1', text: '大衝撃拳' },
      { optionId: '2', text: '炸裂右拳' },
      { optionId: '3', text: '超崩壊拳' },
      { optionId: '4', text: '黒宇宙拳' },
    ],
  },
  {
    quizId: '253',
    question:
      'ウボォーギンが隠獣と戦っている時他の旅団メンバーはトランプで遊んでいました。\nダウトと言われたのは誰？',
    options: [
      { optionId: '0', text: 'シャルナーク' },
      { optionId: '1', text: 'マチ' },
      { optionId: '2', text: 'シズク' },
      { optionId: '3', text: 'ノブナガ' },
      { optionId: '4', text: 'フェイタン' },
    ],
  },
  {
    quizId: '254',
    question:
      'ヨークシン編、ウボォーギンと隠獣との戦いからの問題です。\n蛭（ヒル）がウボォーギンの体内にプレゼントしたヒルの名前は？',
    options: [
      { optionId: '0', text: 'マダライトヒル' },
      { optionId: '1', text: 'クロイロコウガイビル' },
      { optionId: '2', text: 'シマイシビル' },
      { optionId: '3', text: 'ヒラタビル' },
      { optionId: '4', text: 'セスジビル' },
    ],
  },
  {
    quizId: '255',
    question:
      'ヨークシン編、ウボォーギンは隠獣との戦いで体内に無数のヒルをプレゼントされてしまいました。\n対策としてアルコールを朝まで飲み続けて、どんどんオシッコをする。そして、○○したら安心とシャルナークに教えて貰いました。\nどうなったら安心？',
    options: [
      { optionId: '0', text: '黒いオシッコの直後に白いオシッコが出たら安心' },
      { optionId: '1', text: '白いオシッコの直後に黒いオシッコが出たら安心' },
      { optionId: '2', text: '白いオシッコの直後に黄色いオシッコが出たら安心' },
      { optionId: '3', text: '黒いオシッコの直後に黄色いオシッコが出たら安心' },
      { optionId: '4', text: '黄色いオシッコの直後に白いオシッコが出たら安心' },
    ],
  },
  {
    quizId: '256',
    question:
      'ヨークシン編からの問題です。\nセンリツは、旅団を目の前にして熱くなったクラピカに、一曲演奏しました。リラックスに最適な、この時演奏した曲は？',
    options: [
      { optionId: '0', text: '野の春' },
      { optionId: '1', text: 'パノラマ' },
      { optionId: '2', text: '英雄ポロネーズ' },
      { optionId: '3', text: '闇のソナタ' },
      { optionId: '4', text: 'カノン' },
    ],
  },
  {
    quizId: '257',
    question: 'シズクは何系の念能力者？',
    options: [
      { optionId: '0', text: '具現化系' },
      { optionId: '1', text: '操作系' },
      { optionId: '2', text: '強化系' },
      { optionId: '3', text: '変化系' },
      { optionId: '4', text: '放出系' },
    ],
  },
  {
    quizId: '258',
    question:
      'シズクは、念で具現化した掃除機デメちゃんを武器として使います。\nデメちゃんに吸い込まれたものは何処へ行く？',
    options: [
      { optionId: '0', text: 'シズク本人にも分からない' },
      { optionId: '1', text: '流星街' },
      { optionId: '2', text: '宇宙' },
      { optionId: '3', text: '海' },
      { optionId: '4', text: '山' },
    ],
  },
  {
    quizId: '259',
    question: '隠獣の梟が使う技「不思議で便利な大風呂敷」は何て読む？',
    options: [
      { optionId: '0', text: 'ファンファンクロス' },
      { optionId: '1', text: 'トルネイドスネーク' },
      { optionId: '2', text: 'ネオスカッドサーブ' },
      { optionId: '3', text: 'ウォーターフォール' },
      { optionId: '4', text: 'イリュージョン' },
    ],
  },
  {
    quizId: '260',
    question:
      'ヨークシン編からの問題です。\n車でクラピカ達を追跡していた時、旅団のメンバーの一人が梟に閉じ込められてしまいました。\nその閉じ込められた人は誰？',
    options: [
      { optionId: '0', text: 'ノブナガ' },
      { optionId: '1', text: 'フェイタン' },
      { optionId: '2', text: 'シズク' },
      { optionId: '3', text: 'マチ' },
      { optionId: '4', text: 'シャルナーク' },
    ],
  },
  {
    quizId: '261',
    question: 'マチは何系の念能力者？',
    options: [
      { optionId: '0', text: '変化系' },
      { optionId: '1', text: '操作系' },
      { optionId: '2', text: '強化系' },
      { optionId: '3', text: '放出系' },
      { optionId: '4', text: '具現化系' },
    ],
  },
  {
    quizId: '262',
    question:
      'マチの糸の強度は糸の長さに反比例します。\n木綿程度の強度ならどのくらいの長さまで伸ばせる？',
    options: [
      { optionId: '0', text: '世界一周' },
      { optionId: '1', text: '50キロメートル' },
      { optionId: '2', text: '流星街一周' },
      { optionId: '3', text: 'ヨークシン一周' },
      { optionId: '4', text: '50万キロメートル' },
    ],
  },
  {
    quizId: '263',
    question:
      'マチの糸の強度は糸の長さに反比例します。\n1メートル以内ならどのくらいの重量を吊ることができる？',
    options: [
      { optionId: '0', text: '1トン位' },
      { optionId: '1', text: '10トンくらい' },
      { optionId: '2', text: '100トンくらい' },
      { optionId: '3', text: '10,000トンくらい' },
      { optionId: '4', text: '1,000トンくらい' },
    ],
  },
  {
    quizId: '264',
    question:
      'ヨークシン編からの問題です。\nウボォーギンを捕まえた後、ヒソカからきたメールの内容は？',
    options: [
      { optionId: '0', text: '約束通りの例の場所で（ハート）' },
      { optionId: '1', text: 'おめでとう（ハート）' },
      { optionId: '2', text: 'お金の振込よろしく（ハート）' },
      { optionId: '3', text: '他の仲間がそっちに向かっているよ（ハート）' },
      { optionId: '4', text: '蜘蛛は頭を潰さないと死なない（ハート）' },
    ],
  },
  {
    quizId: '265',
    question:
      'ヨークシン編からの問題です。\nネオン護衛団のリーダーであったダルツォルネを殺したのは誰？',
    options: [
      { optionId: '0', text: 'フィンクス' },
      { optionId: '1', text: 'フェイタン' },
      { optionId: '2', text: 'ウボォーギン' },
      { optionId: '3', text: 'ノブナガ' },
      { optionId: '4', text: 'フランクリン' },
    ],
  },
  {
    quizId: '266',
    question: 'ウボォーギンの最終目標は次のうちどれ？',
    options: [
      { optionId: '0', text: '拳で核ミサイル同等の破壊力を出すこと' },
      { optionId: '1', text: '拳で小型ミサイル同等の破壊力を出すこと' },
      { optionId: '2', text: '生身の体で戦車同等の力を手に入れること' },
      { optionId: '3', text: '世界で一番タイマンが強い男になること' },
      { optionId: '4', text: '拳でアナブ同等の破壊力を出すこと' },
    ],
  },
  {
    quizId: '267',
    question: 'ヨークシン編からの問題です。\nノストラードのフルネームは？',
    options: [
      { optionId: '0', text: 'ライト＝ノストラード' },
      { optionId: '1', text: 'ワタリ＝ノストラード' },
      { optionId: '2', text: 'エル＝ノストラード' },
      { optionId: '3', text: 'ヒグチ＝ノストラード' },
      { optionId: '4', text: 'リューク＝ノストラード' },
    ],
  },
  {
    quizId: '268',
    question:
      'ヨークシン編からの問題です。\nウボォーギンが捕まっていたビルの所有者名義は？',
    options: [
      { optionId: '0', text: 'ポリオ物産' },
      { optionId: '1', text: 'マリオ物産' },
      { optionId: '2', text: 'ワリオ物産' },
      { optionId: '3', text: 'レオリオ物産' },
      { optionId: '4', text: 'オリオ物産' },
    ],
  },
  {
    quizId: '269',
    question:
      'バンジーガムは、ヒソカの体から離して使用した場合、ある長さ以上伸びるとゴムがちぎれてしまうと言われています。\n何メートル？',
    options: [
      { optionId: '0', text: '10メートル' },
      { optionId: '1', text: '100メートル' },
      { optionId: '2', text: '50メートル' },
      { optionId: '3', text: '500メートル' },
      { optionId: '4', text: '1,000メートル' },
    ],
  },
  {
    quizId: '270',
    question:
      'ヨークシン編からの問題です。\n幻影旅団一人につき、何ジェニーの懸賞金が掛けられた？',
    options: [
      { optionId: '0', text: '20億ジェニー' },
      { optionId: '1', text: '50億ジェニー' },
      { optionId: '2', text: '100億ジェニー' },
      { optionId: '3', text: '500億ジェニー' },
      { optionId: '4', text: '1,000億ジェニー' },
    ],
  },
  {
    quizId: '271',
    question:
      'ヨークシン編からの問題です。\nゴン、キルア、レオリオが参加した条件競売「かくれんぼ」\n旅団のメンバーを捕獲したら20億ジェニーが貰えるといった内容です。\n「かくれんぼ」の参加費は何ジェニー？',
    options: [
      { optionId: '0', text: '500万ジェニー' },
      { optionId: '1', text: '300万ジェニー' },
      { optionId: '2', text: '100万ジェニー' },
      { optionId: '3', text: '700万ジェニー' },
      { optionId: '4', text: '1,000万ジェニー' },
    ],
  },
  {
    quizId: '272',
    question:
      '「何でも切れる刀は具現化できるか否か？」\nと、クラピカは念を教えて貰っている師匠に質問されました。\nクラピカは何と答えた？',
    options: [
      { optionId: '0', text: 'できない。人間の能力の限界を超えているから' },
      { optionId: '1', text: 'できない。何でも切れない盾を切れないから。' },
      { optionId: '2', text: '分からない' },
      { optionId: '3', text: 'できる。念に不可能はないから' },
      { optionId: '4', text: 'できる。そう信じることが大事だから' },
    ],
  },
  {
    quizId: '273',
    question:
      '緋の目が発言した時のみ発動するクラピカの能力「絶対時間」\n何と読む？',
    options: [
      { optionId: '0', text: 'エンペラータイム' },
      { optionId: '1', text: 'テンイムホウノキワミ' },
      { optionId: '2', text: 'サイキカンパツノキワミ' },
      { optionId: '3', text: 'ヒャクレンジトクノキワミ' },
      { optionId: '4', text: 'ムガノキョウチ' },
    ],
  },
  {
    quizId: '274',
    question: 'クラピカの中指の鎖にはどういった効果がある？',
    options: [
      {
        optionId: '0',
        text: '幻影旅団にのみ使うことを許された鎖で、体に巻き付け対象者を捕獲し、その対象者を強制的に「絶」にする',
      },
      {
        optionId: '1',
        text: '鎖を傷口にあて、自己治癒力を強化してあらゆる傷を治療する',
      },
      {
        optionId: '2',
        text: '鎖を対象者の心臓に刺し、ルールを定めることができる',
      },
      { optionId: '3', text: 'ダウジングが可能' },
      { optionId: '4', text: '円の中に入った敵を斬ることができる' },
    ],
  },
  {
    quizId: '275',
    question: 'クラピカの親指の鎖にはどういった効果がある？',
    options: [
      {
        optionId: '0',
        text: '鎖を傷口にあて、自己治癒力を強化してあらゆる傷を治療する',
      },
      {
        optionId: '1',
        text: '鎖を対象者の心臓に刺し、ルールを定めることができる',
      },
      { optionId: '2', text: 'ダウジングが可能' },
      {
        optionId: '3',
        text: '幻影旅団にのみ使うことを許された鎖で、体に巻き付け対象者を捕獲し、その対象者を強制的に「絶」にする',
      },
      { optionId: '4', text: '円の中に入った敵を斬ることができる' },
    ],
  },
  {
    quizId: '276',
    question: 'クラピカの薬指の鎖にはどういった効果がある？',
    options: [
      { optionId: '0', text: 'ダウジングが可能' },
      {
        optionId: '1',
        text: '鎖を対象者の心臓に刺し、ルールを定めることができる',
      },
      {
        optionId: '2',
        text: '幻影旅団にのみ使うことを許された鎖で、体に巻き付け対象者を捕獲し、その対象者を強制的に「絶」にする',
      },
      {
        optionId: '3',
        text: '鎖を傷口にあて、自己治癒力を強化してあらゆる傷を治療する',
      },
      { optionId: '4', text: '円の中に入った敵を斬ることができる' },
    ],
  },
  {
    quizId: '277',
    question: 'クラピカの小指の鎖にはどういった効果がある？',
    options: [
      {
        optionId: '0',
        text: '鎖を対象者の心臓に刺し、ルールを定めることができる',
      },
      {
        optionId: '1',
        text: '幻影旅団にのみ使うことを許された鎖で、体に巻き付け対象者を捕獲し、その対象者を強制的に「絶」にする',
      },
      {
        optionId: '2',
        text: '鎖を傷口にあて、自己治癒力を強化してあらゆる傷を治療する',
      },
      { optionId: '3', text: 'ダウジングが可能' },
      { optionId: '4', text: '円の中に入った敵を斬ることができる' },
    ],
  },
  {
    quizId: '278',
    question: 'クラピカの親指の鎖の能力名は？',
    options: [
      { optionId: '0', text: '癒す親指の鎖' },
      { optionId: '1', text: '導く親指の鎖' },
      { optionId: '2', text: '律する親指の鎖' },
      { optionId: '3', text: '束縛する親指の鎖' },
      { optionId: '4', text: '捕らえる親指の鎖' },
    ],
  },
  {
    quizId: '279',
    question: 'クラピカの小指の鎖の能力名は？',
    options: [
      { optionId: '0', text: '律する小指の鎖' },
      { optionId: '1', text: '癒す小指の鎖' },
      { optionId: '2', text: '導く小指の鎖' },
      { optionId: '3', text: '束縛する小指の鎖' },
      { optionId: '4', text: '捕らえる小指の鎖' },
    ],
  },
  {
    quizId: '280',
    question:
      'ヨークシン編からの問題です。\nハンターライセンスを担保にして、ゴンはいくら借りた？',
    options: [
      { optionId: '0', text: '1億ジェニー' },
      { optionId: '1', text: '5億ジェニー' },
      { optionId: '2', text: '10億ジェニー' },
      { optionId: '3', text: '3億ジェニー' },
      { optionId: '4', text: '100億ジェニー' },
    ],
  },
  {
    quizId: '281',
    question:
      '旅団腕相撲ランキングからの問題です。\nボノレノフ、ノブナガ、マチ、クロロを腕相撲の強い順に並び変えた時、正しいのはどれ？',
    options: [
      { optionId: '0', text: '1位マチ、2位クロロ、3位ボノレノフ、4位ノブナガ' },
      { optionId: '1', text: '1位マチ、2位クロロ、3位ノブナガ、4位ボノレノフ' },
      { optionId: '2', text: '1位クロロ、2位ボノレノフ、3位マチ、4位ノブナガ' },
      { optionId: '3', text: '1位ノブナガ、2位マチ、3位ボノレノフ、4位クロロ' },
      { optionId: '4', text: '1位ボノレノフ、2位クロロ、3位マチ、4位ノブナガ' },
    ],
  },
  {
    quizId: '282',
    question:
      '旅団腕相撲ランキングからの問題です。\nヒソカ、フランクリン、フィンクス、フェイタンを腕相撲の強い順に並び変えた時、正しいのはどれ？',
    options: [
      {
        optionId: '0',
        text: '1位フィンクス、2位ヒソカ、3位フランクリン、4位フェイタン',
      },
      {
        optionId: '1',
        text: '1位フィンクス、2位フランクリン、3位ヒソカ、4位フェイタン',
      },
      {
        optionId: '2',
        text: '1位ヒソカ、2位フィンクス、3位フェイタン、4位フランクリン',
      },
      {
        optionId: '3',
        text: '1位フランクリン、2位フィンクス、3位ヒソカ、4位フェイタン',
      },
      {
        optionId: '4',
        text: '1位フランクリン、2位フィンクス、3位フェイタン、4位ヒソカ',
      },
    ],
  },
  {
    quizId: '283',
    question:
      '旅団腕相撲ランキングからの問題です。\n次のうちノブナガより、腕相撲が弱いのは誰？',
    options: [
      { optionId: '0', text: 'シャルナーク' },
      { optionId: '1', text: 'ボノレノフ' },
      { optionId: '2', text: 'マチ' },
      { optionId: '3', text: 'クロロ' },
      { optionId: '4', text: 'フェイタン' },
    ],
  },
  {
    quizId: '284',
    question:
      '旅団腕相撲ランキングからの問題です。\nコルトピ、シズク、パクノダ、シャルナークを腕相撲の強い順に並び変えた時、正しいのはどれ？',
    options: [
      {
        optionId: '0',
        text: '1位シャルナーク、2位パクノダ、3位シズク、4位コルトピ',
      },
      {
        optionId: '1',
        text: '1位シャルナーク、2位シズク、3位パクノダ、4位コルトピ',
      },
      {
        optionId: '2',
        text: '1位シズク、2位シャルナーク、3位コルトピ、4位パクノダ',
      },
      {
        optionId: '3',
        text: '1位シズク、2位パクノダ、3位シャルナーク、4位コルトピ',
      },
      {
        optionId: '4',
        text: '1位パクノダ、2位シャルナーク、3位コルトピ、4位シズク',
      },
    ],
  },
  {
    quizId: '285',
    question:
      'ヨークシン編からの問題です。\nサザンビースの入場券も兼ねている競売品目録（カタログ）はいくら？',
    options: [
      { optionId: '0', text: '1,200万ジェニー' },
      { optionId: '1', text: '500万ジェニー' },
      { optionId: '2', text: '50万ジェニー' },
      { optionId: '3', text: '120万ジェニー' },
      { optionId: '4', text: '5万ジェニー' },
    ],
  },
  {
    quizId: '286',
    question:
      'ヨークシン編からの問題です。\nゴンたちも参加した、ヨークシンで最も権威のあるオークションハウスの名前は？',
    options: [
      { optionId: '0', text: 'サザンピース' },
      { optionId: '1', text: 'ビーズピース' },
      { optionId: '2', text: 'ミスチルピース' },
      { optionId: '3', text: 'チャゲピース' },
      { optionId: '4', text: 'アムロピース' },
    ],
  },
  {
    quizId: '287',
    question:
      'ヨークシン編からの問題です。\nゴンが競売市で、買ったベンズナイフ。\nこのベンズナイフとは、誰が作ったもの？',
    options: [
      { optionId: '0', text: 'ベンニー・ドロン' },
      {
        optionId: '1',
        text: 'ジェフリー・ライオネル・ダーマーハリー・S・トルーマン',
      },
      { optionId: '2', text: 'アンドレイ・チカチーロ' },
      { optionId: '3', text: 'ヘンリー・リー・ルーカス' },
      { optionId: '4', text: 'アンリ・ランドリュー' },
    ],
  },
  {
    quizId: '288',
    question:
      'ヨークシン編からの問題です。\nお金を稼ぐためにゴンは次のような作戦を考えました。\n「まず、伝言サイトに登録して有力情報を待つ。\n情報が入って旅団を一人捕らえたら、残りの団員の居場所を吐かせて捕まえる」\nこの作戦をゴンは何作戦と名づけた？',
    options: [
      { optionId: '0', text: '芋ずる作戦' },
      { optionId: '1', text: '念でぼろもうけ作戦' },
      { optionId: '2', text: 'ヤシマ作戦' },
      { optionId: '3', text: '根掘り葉掘り作戦' },
      { optionId: '4', text: '一人ずつ捕まえる作戦' },
    ],
  },
  {
    quizId: '289',
    question:
      'ヨークシン編からの問題です。\nお金を稼ぐためにゴン達は次のような作戦を考えました。\n「オーラが漂っている品物は天才が作った方法が高い。\n鑑定の知識がなくても、凝を使えば埋れた逸品を見つけることができる」\nこの作戦をゴンは何作戦と名づけた？',
    options: [
      { optionId: '0', text: '念でぼろもうけ作戦' },
      { optionId: '1', text: '芋ずる作戦' },
      { optionId: '2', text: '凝でぼろもうけ作戦' },
      { optionId: '3', text: 'オーラで発掘大作戦' },
      { optionId: '4', text: 'ヤシマ作戦' },
    ],
  },
  {
    quizId: '290',
    question:
      'ヨークシン編からの問題です。\nゴンたちが購入した「ムカトリーニの50枚限定リトグラフ作者の直筆サイン入り」は、いくらと査定された？',
    options: [
      { optionId: '0', text: '15万ジェニー' },
      { optionId: '1', text: '30万ジェニー' },
      { optionId: '2', text: '42万ジェニー' },
      { optionId: '3', text: '1,500ジェニー' },
      { optionId: '4', text: '125万ジェニー' },
    ],
  },
  {
    quizId: '291',
    question:
      'ヨークシン編からの問題です。\nゴンたちが購入した「アンティーク人形」は、いくらと査定された？',
    options: [
      { optionId: '0', text: '30万ジェニー' },
      { optionId: '1', text: '15万ジェニー' },
      { optionId: '2', text: '42万ジェニー' },
      { optionId: '3', text: '1,500ジェニー' },
      { optionId: '4', text: '125万ジェニー' },
    ],
  },
  {
    quizId: '292',
    question: 'ヨークシン編からの問題です。\n下見市を仕切ってる人の名前は？',
    options: [
      { optionId: '0', text: 'コネルト' },
      { optionId: '1', text: 'トルネコ' },
      { optionId: '2', text: 'ライアン' },
      { optionId: '3', text: 'アリーナ' },
      { optionId: '4', text: 'クリフト' },
    ],
  },
  {
    quizId: '293',
    question:
      'ヨークシン編からの問題です。\n木像（レイモノ）が本物でも中身をすり替える殺し技は何という？',
    options: [
      { optionId: '0', text: 'ヌキ' },
      { optionId: '1', text: 'ガン' },
      { optionId: '2', text: 'カエ' },
      { optionId: '3', text: 'ガワリ' },
      { optionId: '4', text: 'トリ' },
    ],
  },
  {
    quizId: '294',
    question:
      'ヨークシン編からの問題です。\n木像（レイモノ）も本物も全部偽者の殺し技は何という？',
    options: [
      { optionId: '0', text: 'ガン' },
      { optionId: '1', text: 'ヌキ' },
      { optionId: '2', text: 'カエ' },
      { optionId: '3', text: 'ガワリ' },
      { optionId: '4', text: 'トリ' },
    ],
  },
  {
    quizId: '295',
    question:
      'ヨークシン編からの問題です。\n素材の年代は本物と同じでも掘ったのは最近の殺し技とは？',
    options: [
      { optionId: '0', text: 'アトボリ' },
      { optionId: '1', text: 'ヤキヅケ' },
      { optionId: '2', text: 'ガン' },
      { optionId: '3', text: 'ヨコヌキ' },
      { optionId: '4', text: 'ニドボリ' },
    ],
  },
  {
    quizId: '296',
    question:
      'ヨークシン編からの問題です。\n当時の接合剤の上から新しい接合剤を塗り直す殺し技とは？',
    options: [
      { optionId: '0', text: 'ニドヅケ' },
      { optionId: '1', text: 'アトヅケ' },
      { optionId: '2', text: 'ヤキヅケ' },
      { optionId: '3', text: 'アトボリ' },
      { optionId: '4', text: 'ガン' },
    ],
  },
  {
    quizId: '297',
    question:
      'ヨークシン編からの問題です。\n一度火で接合剤を熱して溶かしてつけ直す殺し技とは？',
    options: [
      { optionId: '0', text: 'ヤキヅケ' },
      { optionId: '1', text: 'ニドヅケ' },
      { optionId: '2', text: 'アトヅケ' },
      { optionId: '3', text: 'ガン' },
      { optionId: '4', text: 'ミビラキ' },
    ],
  },
  {
    quizId: '298',
    question:
      'ヨークシン編からの問題です。\n切り口とは別に新たな穴を開け、財宝を取り出し偽物と入れ替えて穴をふさぐ殺し技とは？',
    options: [
      { optionId: '0', text: 'ヨコヌキ' },
      { optionId: '1', text: 'ベツヌキ' },
      { optionId: '2', text: 'ニドヅケ' },
      { optionId: '3', text: 'ガン' },
      { optionId: '4', text: 'ベツアケ' },
    ],
  },
  {
    quizId: '299',
    question:
      'ヨークシン編からの問題です。\nノブナガの円は半径何メートルが限界？',
    options: [
      { optionId: '0', text: '4メートル' },
      { optionId: '1', text: '3メートル' },
      { optionId: '2', text: '5メートル' },
      { optionId: '3', text: '2メートル' },
      { optionId: '4', text: '1メートル' },
    ],
  },
  {
    quizId: '300',
    question:
      'ヨークシン編からの問題です。\nゴンとキルアは旅団に捕まりました。ノブナガは二人を部屋に閉じ込め、逃げないように見張っていました。この時、ゴンとキルアはセパイルさんから教わった「殺し技」を参考にして無事逃げ出すことができました。\n何と呼ばれる殺し技を使った？',
    options: [
      { optionId: '0', text: 'ヨコヌキ' },
      { optionId: '1', text: 'ヒラキ' },
      { optionId: '2', text: 'ニドヅケ' },
      { optionId: '3', text: 'アトヅケ' },
      { optionId: '4', text: 'ヤキヅケ' },
    ],
  },
  {
    quizId: '301',
    question:
      'ヨークシン編からの問題です。\nゴンとキルアは旅団に捕まりました。ノブナガは二人を部屋に入れて逃げないように見張っていました。この時の部屋は何階？',
    options: [
      { optionId: '0', text: '5階' },
      { optionId: '1', text: '4階' },
      { optionId: '2', text: '3階' },
      { optionId: '3', text: '6階' },
      { optionId: '4', text: '7階' },
    ],
  },
  {
    quizId: '302',
    question:
      'ヨークシン編からの問題です。\nゴンとキルアは旅団に捕まりました。ノブナガは二人を部屋に閉じ込め、逃げないように見張っていました。この時、ゴンとキルアはセパイルさんから教わった殺し技「ヨコヌキ」を参考にして、横の壁を蹴り破り、無事逃げ出すことができました。\nこの時、二人が蹴り破った壁の合計枚数は何枚？',
    options: [
      { optionId: '0', text: '4枚' },
      { optionId: '1', text: '3枚' },
      { optionId: '2', text: '5枚' },
      { optionId: '3', text: '6枚' },
      { optionId: '4', text: '7枚' },
    ],
  },
  {
    quizId: '303',
    question:
      'ヨークシン編からの問題です。\nバショウは現在の仕事（ネオンの護衛）を終えたら何をする予定？',
    options: [
      { optionId: '0', text: 'バイクで世界を回る' },
      {
        optionId: '1',
        text: '故郷に帰り、自分の帰りを待ってくれている彼女と結婚する',
      },
      { optionId: '2', text: '世界に俳句の文化を広める' },
      {
        optionId: '3',
        text: '故郷に戻り、自分の俳句を飾る世界で一番大きい展覧会を開く',
      },
      { optionId: '4', text: 'ハンター試験を受ける' },
    ],
  },
  {
    quizId: '304',
    question:
      'ヨークシン編で、ゼノが着ていた服からの問題です。\n胸からタレ下げている文字は何？',
    options: [
      { optionId: '0', text: '生涯現役' },
      { optionId: '1', text: '一日一殺' },
      { optionId: '2', text: '一望千里' },
      { optionId: '3', text: '一網打尽' },
      { optionId: '4', text: '一家団欒' },
    ],
  },
  {
    quizId: '305',
    question:
      'ヨークシン編からの問題です。\n十老頭は殺し屋に幻影旅団の暗殺を依頼しました。\nこの時何人の殺し屋が集まった？',
    options: [
      { optionId: '0', text: '9人' },
      { optionId: '1', text: '8人' },
      { optionId: '2', text: '10人' },
      { optionId: '3', text: '7人' },
      { optionId: '4', text: '11人' },
    ],
  },
  {
    quizId: '306',
    question:
      'ヨークシン編からの問題です。\n十老頭直系のマフィアのボスで、何かとノストラードに絡んできた男の名前は？',
    options: [
      { optionId: '0', text: 'ゼンジ' },
      { optionId: '1', text: 'リョーマ' },
      { optionId: '2', text: 'クニミツ' },
      { optionId: '3', text: 'シュウスケ' },
      { optionId: '4', text: 'タカシ' },
    ],
  },
  {
    quizId: '307',
    question:
      'ヨークシン編からの問題です。\nクロロ対ゼノ、シルバ戦があり、また緋の眼の競売があったビルの名前は？',
    options: [
      { optionId: '0', text: 'セメタリービル' },
      { optionId: '1', text: 'サザンピース' },
      { optionId: '2', text: 'アブラージュ・アル・ベイト・タワーズホテル' },
      { optionId: '3', text: 'ウィリス・タワービル' },
      { optionId: '4', text: 'ペトロナスツインタワービル' },
    ],
  },
  {
    quizId: '308',
    question:
      'ヨークシン編からの問題です。\nクロロがネオンを連れて、セメタリービルに侵入した時の運転手はどういった人？',
    options: [
      { optionId: '0', text: '公園でスカウトしたダンボールに住む人' },
      { optionId: '1', text: '旅団に入りたがっている若者' },
      { optionId: '2', text: 'お金で心変わりした警察官' },
      { optionId: '3', text: 'お金に釣られたマフィアの下っ端' },
      {
        optionId: '4',
        text: '命を助ける代わりに運転手の仕事を任されたマフィアの下っ端',
      },
    ],
  },
  {
    quizId: '309',
    question: '幻影旅団の団長のフルネームは？',
    options: [
      { optionId: '0', text: 'クロロ＝ルシルフル' },
      { optionId: '1', text: 'クロロ＝エチゼン' },
      { optionId: '2', text: 'クロロ＝キクマル' },
      { optionId: '3', text: 'クロロ＝カミオ' },
      { optionId: '4', text: 'クロロ＝アトベ' },
    ],
  },
  {
    quizId: '310',
    question:
      'ヨークシン編からの問題です。\nネオンに占って貰った時の幻影旅団の団長クロロの年齢は？',
    options: [
      { optionId: '0', text: '26歳' },
      { optionId: '1', text: '18歳' },
      { optionId: '2', text: '23歳' },
      { optionId: '3', text: '30歳' },
      { optionId: '4', text: '29歳' },
    ],
  },
  {
    quizId: '311',
    question:
      'ヨークシン編からの問題です。\n「占いは今を一生懸命生きている人を幸せにするものです。だから私はなるべく悪いことばかり占うようにしてるのよ。そうすれば皆そうならない様に願ったり努力したりするでしょ」\nというネオンが感動したセリフを言っていた占い師は誰？',
    options: [
      { optionId: '0', text: '銀河の祖母' },
      { optionId: '1', text: '六星占術の母' },
      { optionId: '2', text: '地球の祖母' },
      { optionId: '3', text: '岸壁の母' },
      { optionId: '4', text: '古代の祖母' },
    ],
  },
  {
    quizId: '312',
    question:
      'ヨークシン編からの問題です。\n団長は、霊魂を信じています。そのため、ウボォーギンが一番やりたがってたことをしてあげました。\nウボォーギンのために何をしてあげた？',
    options: [
      { optionId: '0', text: '大暴れ' },
      { optionId: '1', text: '全てのお宝を盗むこと' },
      { optionId: '2', text: '鎖野郎に復讐をすること' },
      { optionId: '3', text: 'みんなで温泉に行くこと' },
      { optionId: '4', text: '世界一大きな葬式' },
    ],
  },
  {
    quizId: '313',
    question:
      'ヨークシン編で、クロロはネオンの首をハタキ、ネオンを気絶させました。このことに気がついた殺し屋が発したセリフからの問題です。\n「おそろしく早い手刀・・・」\nに続く言葉は？',
    options: [
      { optionId: '0', text: 'オレでなきゃ見逃しちゃうね' },
      { optionId: '1', text: 'おそろしい・・・でもそれ以上に哀しいコ・・・' },
      {
        optionId: '2',
        text: '闇の住人クロロ・・・ずいぶん成長して戻ってきたようだのォ',
      },
      { optionId: '3', text: 'おそらく俺じゃ倒せない' },
      { optionId: '4', text: '間違いない本物だ' },
    ],
  },
  {
    quizId: '314',
    question:
      'ヨークシン編から難易度マックスの問題です。\nクロロがネオンの首をハタキ、気絶させました。この時ネオンはセメタリービルのどの部屋に運ばれた？',
    options: [
      { optionId: '0', text: '501号室' },
      { optionId: '1', text: '503号室' },
      { optionId: '2', text: '502号室' },
      { optionId: '3', text: '505号室' },
      { optionId: '4', text: '307号室' },
    ],
  },
  {
    quizId: '315',
    question:
      'ヨークシン編、クロロVS十老頭に雇われた殺し屋からの問題です。\nクロロが殺し屋と戦った時に使った念魚の名前は？',
    options: [
      { optionId: '0', text: '密室遊魚' },
      { optionId: '1', text: '肉食念魚' },
      { optionId: '2', text: '空中遊魚' },
      { optionId: '3', text: '大食念魚' },
      { optionId: '4', text: '人食遊魚' },
    ],
  },
  {
    quizId: '316',
    question:
      'ヨークシン編、クロロVS十老頭に雇われた殺し屋からの問題です。\nクロロが殺し屋と戦った時に使った念魚の名前は？',
    options: [
      { optionId: '0', text: 'インドアフィッシュ' },
      { optionId: '1', text: 'ミートイートフィッシュ' },
      { optionId: '2', text: 'エアーフィッシュ' },
      { optionId: '3', text: 'ビッグイートフィッシュ' },
      { optionId: '4', text: 'マンイートフィッシュ' },
    ],
  },
  {
    quizId: '317',
    question: 'シャルナークの能力、「ブラックボイス」\n漢字でどのように書く？',
    options: [
      { optionId: '0', text: '携帯する他人の運命' },
      { optionId: '1', text: '他人を操作する携帯' },
      { optionId: '2', text: '携帯一つで操作可能' },
      { optionId: '3', text: '携帯で指示する他人' },
      { optionId: '4', text: '他人の動作は携帯で' },
    ],
  },
  {
    quizId: '318',
    question:
      'ヨークシン編からの問題です。\nゼノは本気を出せばどのくらいの範囲の円ができると言っている？',
    options: [
      { optionId: '0', text: '半径300メートル' },
      { optionId: '1', text: '半径100メートル' },
      { optionId: '2', text: '半径2キロメートル' },
      { optionId: '3', text: '半径4メートル' },
      { optionId: '4', text: '半径50メートル' },
    ],
  },
  {
    quizId: '319',
    question:
      'ヨークシン編、クロロの名言から問題です。\n「ウボォーさん聞こえますか？オレ達から貴方への◯◯◯です」\n◯◯◯に入る言葉は何？',
    options: [
      { optionId: '0', text: '鎮魂曲' },
      { optionId: '1', text: '睡蓮花' },
      { optionId: '2', text: '黄金魂' },
      { optionId: '3', text: '純恋歌' },
      { optionId: '4', text: '応援歌' },
    ],
  },
  {
    quizId: '320',
    question:
      'ヨークシン編からの名言クイズです。\nクロロ対ゼノ、シルバ戦で、クロロはナイフを使いました。シルバは、ナイフの種類をデザインから判断しました。\nシルバはどんな種類のナイフと判断した？',
    options: [
      { optionId: '0', text: 'ベンズの中期型' },
      { optionId: '1', text: 'ククリナイフの短刀' },
      { optionId: '2', text: 'スペツナズの最新型' },
      { optionId: '3', text: 'タガーの初代型' },
      { optionId: '4', text: 'ジャグリンナイフの中期型' },
    ],
  },
  {
    quizId: '321',
    question: 'クロロの能力「スキルハンター」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '盗賊の極意' },
      { optionId: '1', text: '旅団の極意' },
      { optionId: '2', text: '幻影の極意' },
      { optionId: '3', text: '狩人の盗み' },
      { optionId: '4', text: '能力の盗み' },
    ],
  },
  {
    quizId: '322',
    question:
      'ヨークシン編から難易度マックスの問題です。\nクロロの手刀により気絶してしまったネオンは、救急車で何病院に運ばれた？',
    options: [
      { optionId: '0', text: 'エル病院' },
      { optionId: '1', text: 'リューク病院' },
      { optionId: '2', text: 'メロ病院' },
      { optionId: '3', text: 'キラ病院' },
      { optionId: '4', text: 'ニア病院' },
    ],
  },
  {
    quizId: '323',
    question: 'コルトピの能力「ギャラリーフェイク」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '神の左手悪魔の右手' },
      { optionId: '1', text: '神の右手悪魔の左手' },
      { optionId: '2', text: '本物の右手偽物の左手' },
      { optionId: '3', text: '本物の左手偽物の右手' },
      { optionId: '4', text: '天使の右手悪魔の左手' },
    ],
  },
  {
    quizId: '324',
    question:
      'ヨークシン編からの問題です。\n次のうち、9月3日のオークションで出品された品はどれ？',
    options: [
      { optionId: '0', text: 'ユル国宝館から持ち出された純金の処刑刀' },
      { optionId: '1', text: '手乗りザウルス' },
      { optionId: '2', text: '超一流スポーツ選手の卵' },
      { optionId: '3', text: '死者への往復葉書' },
      { optionId: '4', text: '賢者のアクアマリン' },
    ],
  },
  {
    quizId: '325',
    question:
      'ヨークシン編からの難易度マックスの問題です。\n次のうち、9月3日のオークションで出品された品はどれ？',
    options: [
      { optionId: '0', text: '幻のライ王朝青磁気青雲文壺' },
      { optionId: '1', text: '手乗りザウルス' },
      { optionId: '2', text: '超一流スポーツ選手の卵' },
      { optionId: '3', text: '死者への往復葉書' },
      { optionId: '4', text: '賢者のアクアマリン' },
    ],
  },
  {
    quizId: '326',
    question:
      'ヨークシン編からの問題です。\nクラピカは、緋の眼をいくらで競り落とした？',
    options: [
      { optionId: '0', text: '29億ジェニー' },
      { optionId: '1', text: '5億ジェニー' },
      { optionId: '2', text: '10億ジェニー' },
      { optionId: '3', text: '15億ジェニー' },
      { optionId: '4', text: '8億ジェニー' },
    ],
  },
  {
    quizId: '327',
    question: 'レオリオの国では何歳からアルコールを飲むことが許されている？',
    options: [
      { optionId: '0', text: '16歳' },
      { optionId: '1', text: '20歳' },
      { optionId: '2', text: '18歳' },
      { optionId: '3', text: '12歳' },
      { optionId: '4', text: '何歳からでも飲むことを許されている' },
    ],
  },
  {
    quizId: '328',
    question:
      'レオリオに関する難易度マックスの問題です。\nレオリオは何歳の時からアルコールを飲んでいる？',
    options: [
      { optionId: '0', text: '12歳' },
      { optionId: '1', text: '16歳' },
      { optionId: '2', text: '18歳' },
      { optionId: '3', text: '10歳' },
      { optionId: '4', text: '5歳' },
    ],
  },
  {
    quizId: '329',
    question: '流星街の土地面積はどのくらいと説明されている？',
    options: [
      { optionId: '0', text: 'ラペ共和国と同じくらい' },
      { optionId: '1', text: 'モナコ公国と同じくらい' },
      { optionId: '2', text: 'ピトケアン諸国と同じくらい' },
      { optionId: '3', text: 'バチカン市国と同じくらい' },
      { optionId: '4', text: 'ジブラルタルと同じくらい' },
    ],
  },
  {
    quizId: '330',
    question: '流星街の土地面積はどのくらいと説明されている？',
    options: [
      { optionId: '0', text: '東京都＋埼玉県程度の広さ' },
      { optionId: '1', text: '北海道＋長野県程度の広さ' },
      { optionId: '2', text: '香川県の半分程度の広さ' },
      { optionId: '3', text: '九州全て程度の広さ' },
      { optionId: '4', text: '本州全て程度の広さ' },
    ],
  },
  {
    quizId: '331',
    question:
      '流星街は公式には無人となっていますが、実際には何人くらいの人間が住んでいると言われている？',
    options: [
      { optionId: '0', text: '800万人' },
      { optionId: '1', text: '5,000万人' },
      { optionId: '2', text: '10万人' },
      { optionId: '3', text: '45万人' },
      { optionId: '4', text: '1億人' },
    ],
  },
  {
    quizId: '332',
    question:
      '流星街から最近、唯一届いたメッセージからの問題です。\n「我々は何ものも 拒まない だから・・・」\nに続く言葉は何？',
    options: [
      { optionId: '0', text: '我々から 何も奪うな' },
      { optionId: '1', text: '我々に 構うな' },
      { optionId: '2', text: '我々に 攻撃をするな' },
      { optionId: '3', text: '我々に 近寄るな' },
      { optionId: '4', text: '我々を 放って置いてくれ' },
    ],
  },
  {
    quizId: '333',
    question:
      '流星街の住人の男が冤罪で三年間不当に拘束されました。\nこの時、流星街の住民たちは報復として、警官、裁判官、検事、目撃証人、陪審員、弁護士など彼の冤罪に関わった者を殺しました。\nその時の殺した人数は？',
    options: [
      { optionId: '0', text: '31人' },
      { optionId: '1', text: '50人' },
      { optionId: '2', text: '514人' },
      { optionId: '3', text: '7人' },
      { optionId: '4', text: '478人' },
    ],
  },
  {
    quizId: '334',
    question:
      '流星街の住人の男が冤罪で三年間不当に拘束されました。\nこの時、流星街の住民たちは報復として、警官、裁判官、検事、目撃証人、陪審員、弁護士など彼の冤罪に関わった31名を殺しました。\nその時の手段は？',
    options: [
      { optionId: '0', text: '自爆' },
      { optionId: '1', text: '核爆弾を打ち込んだ' },
      { optionId: '2', text: '幻影旅団に依頼' },
      { optionId: '3', text: 'ゾルディック家に依頼' },
      { optionId: '4', text: '流星街の住民全員で乗り込んでナイフで殺害' },
    ],
  },
  {
    quizId: '335',
    question:
      'ヨークシン編からの問題です。\nゴンたちが売りに出した木造蔵はいくらで売れた？',
    options: [
      { optionId: '0', text: '3億5500ジェニー' },
      { optionId: '1', text: '1億ジェニー' },
      { optionId: '2', text: '2億4000ジェニー' },
      { optionId: '3', text: '4億500ジェニー' },
      { optionId: '4', text: '3億1500ジェニー' },
    ],
  },
  {
    quizId: '336',
    question:
      'コルトピが複製した物は一定時間が経過すると消滅してしまいます。\nどのくらいの時間で消滅する？',
    options: [
      { optionId: '0', text: '24時間' },
      { optionId: '1', text: '12時間' },
      { optionId: '2', text: '36時間' },
      { optionId: '3', text: '48時間' },
      { optionId: '4', text: '72時間' },
    ],
  },
  {
    quizId: '337',
    question: '幻影旅団「ノブナガ」のフルネームは？',
    options: [
      { optionId: '0', text: 'ノブナガ＝ハザマ' },
      { optionId: '1', text: 'ノブナガ＝ルシルフル' },
      { optionId: '2', text: 'ノブナガ＝ドロン' },
      { optionId: '3', text: 'ノブナガ＝クルーガー' },
      { optionId: '4', text: 'ノブナガ＝マクマホン' },
    ],
  },
  {
    quizId: '338',
    question: '幻影旅団「ノブナガ」の生年月日は？',
    options: [
      { optionId: '0', text: '1970年9月8日' },
      { optionId: '1', text: '1970年7月8日' },
      { optionId: '2', text: '1960年6月6日' },
      { optionId: '3', text: '1980年5月18日' },
      { optionId: '4', text: '1978年3月3日' },
    ],
  },
  {
    quizId: '339',
    question: '幻影旅団「ノブナガ｣の血液型は？',
    options: [
      { optionId: '0', text: 'B型' },
      { optionId: '1', text: 'A型' },
      { optionId: '2', text: 'O型' },
      { optionId: '3', text: 'Ab型' },
      { optionId: '4', text: '作中で明らかになっていない' },
    ],
  },
  {
    quizId: '340',
    question:
      'ヨークシン編からの問題です。\n幻影旅団の死体が発見され（実際は偽物）、旅団の頭は死んだとクラピカは思っていました。\nその時ヒソカからクラピカに届いたメールの内容は？',
    options: [
      { optionId: '0', text: '死体は偽物★-_-△' },
      { optionId: '1', text: 'オレでなきゃ見逃しちゃうね★-_-△' },
      { optionId: '2', text: '残念★-_-△' },
      { optionId: '3', text: '約束通り例の場所で★-_-△' },
      { optionId: '4', text: '蜘蛛は生きている★-_-△' },
    ],
  },
  {
    quizId: '341',
    question: '幻影旅団「パクノダ｣は何系の念能力者？',
    options: [
      { optionId: '0', text: '特質系' },
      { optionId: '1', text: '具現化系' },
      { optionId: '2', text: '操作系' },
      { optionId: '3', text: '放出系' },
      { optionId: '4', text: '変化系' },
    ],
  },
  {
    quizId: '342',
    question:
      'ヨークシン編、クロロが団員を天使の自動書記で占った時の問題です。\nクロロはヒソカに「攫われた秘密とはなんのことだ？」と訪ねました。\nヒソカは何と答えた？',
    options: [
      { optionId: '0', text: '団員の能力' },
      { optionId: '1', text: '言えない' },
      { optionId: '2', text: '言わない' },
      { optionId: '3', text: 'アジトの位置' },
      { optionId: '4', text: '競売を襲うという情報' },
    ],
  },
  {
    quizId: '343',
    question:
      'ヨークシンに来る以前から、パクノダの能力「メモリーボブ」を知っていたのは誰？',
    options: [
      { optionId: '0', text: '団長のみ' },
      { optionId: '1', text: '団長、ノブナガ、コルトピ' },
      { optionId: '2', text: 'ノブナガ、コルトピ' },
      { optionId: '3', text: 'ノブナガのみ' },
      { optionId: '4', text: 'マチのみ' },
    ],
  },
  {
    quizId: '344',
    question:
      'ヨークシン編からの問題です。\nデータ不足で、団長が盗んだ「天使の自動書記」で占ってもらえなかった旅団のメンバーは誰？',
    options: [
      { optionId: '0', text: 'フィンクス、フェイタン、コルトピ' },
      { optionId: '1', text: 'フィンクス、フェイタン' },
      { optionId: '2', text: 'シズク、フェイタン' },
      { optionId: '3', text: 'シズク、フィンクス' },
      { optionId: '4', text: 'フェイタン、コルトピ' },
    ],
  },
  {
    quizId: '345',
    question:
      'ヨークシン編からの問題です。\n次のうち、団長が盗んだ「天使の自動書記」の占いで死の予言が出たのは誰？',
    options: [
      { optionId: '0', text: 'パクノダ' },
      { optionId: '1', text: 'フィンクス' },
      { optionId: '2', text: 'クロロ' },
      { optionId: '3', text: 'フランクリン' },
      { optionId: '4', text: 'ノブナガ' },
    ],
  },
  {
    quizId: '346',
    question:
      'ヨークシン編からの問題です。\n次のうち、団長が盗んだ「天使の自動書記」の占いで死の予言が出たのは誰？',
    options: [
      { optionId: '0', text: 'シャルナーク' },
      { optionId: '1', text: 'フィンクス' },
      { optionId: '2', text: 'クロロ' },
      { optionId: '3', text: 'フランクリン' },
      { optionId: '4', text: 'ノブナガ' },
    ],
  },
  {
    quizId: '347',
    question:
      'ヨークシンからの問題です。\n次のうち、団長が盗んだ「天使の自動書記」の占いで死の予言が出なかったのは誰？',
    options: [
      { optionId: '0', text: 'フランクリン' },
      { optionId: '1', text: 'ウボォーギン' },
      { optionId: '2', text: 'シャルナーク' },
      { optionId: '3', text: 'パクノダ' },
      { optionId: '4', text: 'シズク' },
    ],
  },
  {
    quizId: '348',
    question:
      'ヨークシン編からの問題です。\n旅団はコルトピが具現化した緋の眼を持つ者を捕らえにベーチタクルホテルへ向かいました。\nベーチタクルホテルに向かった旅団のメンバーは6人です。\n団長（クロロ）、ノブナガ、マチ、コルトピ、パクノダあと一人は誰？',
    options: [
      { optionId: '0', text: 'シズク' },
      { optionId: '1', text: 'シャルナーク' },
      { optionId: '2', text: 'フランクリン' },
      { optionId: '3', text: 'ボノレノフ' },
      { optionId: '4', text: 'フェイタン' },
    ],
  },
  {
    quizId: '349',
    question: 'ヨークシン編からの問題です。\nスクワラの彼女の名前は？',
    options: [
      { optionId: '0', text: 'エリザ' },
      { optionId: '1', text: 'テレサ' },
      { optionId: '2', text: 'ゾフィー' },
      { optionId: '3', text: 'ギーゼラ' },
      { optionId: '4', text: 'ヴァレリー' },
    ],
  },
  {
    quizId: '350',
    question: 'ヨークシン編からの問題です。\nestinto（エスティント）の意味は？',
    options: [
      {
        optionId: '0',
        text: 'やっと聞こえる程度、ごくごく弱くという意味の音楽用語',
      },
      { optionId: '1', text: '鑑定師を欺く「殺し技｣の一つ' },
      { optionId: '2', text: 'マフィアのグループの名前' },
      {
        optionId: '3',
        text: 'サザンピースオークションの入場券も兼ねた物、1,200万ジェニーする',
      },
      { optionId: '4', text: '9月3日のオークションで出品された品' },
    ],
  },
  {
    quizId: '351',
    question:
      'ヨークシン編からの問題です。\nネオンの占い能力「天使の自動書記」に必要なデータを全て挙げよ。',
    options: [
      { optionId: '0', text: '名前、生年月日、血液型' },
      { optionId: '1', text: '名前、血液型' },
      { optionId: '2', text: '名前、生年月日' },
      { optionId: '3', text: '名前、血液型、性別' },
      { optionId: '4', text: '名前、生年月日、性別' },
    ],
  },
  {
    quizId: '352',
    question:
      'ヨークシン編から難易度マックスの問題です。\nキルアとセンリツは、ベーチタクルホテルへ移動中の旅団一行を見つけました。\nそのことをキルアはクラピカに伝えました。\nこの時旅団一行はどこらへんにいた？',
    options: [
      { optionId: '0', text: 'モトバビル前コンチネンタル通り' },
      { optionId: '1', text: 'サロマデパート前の交差点' },
      { optionId: '2', text: 'リパ駅の改札' },
      { optionId: '3', text: 'カスツール駅のホーム' },
      { optionId: '4', text: 'リンゴーン空港周辺' },
    ],
  },
  {
    quizId: '353',
    question:
      'ヨークシン編から難易度マックスの問題です。\n旅団一行はコルトピが具現化した緋の眼を持つ者を捕らえに、ベーチタクルホテルへ向かいました。移動手段は電車でした。\nこの時旅団一行は何駅で降りた？',
    options: [
      { optionId: '0', text: 'リパ駅' },
      { optionId: '1', text: 'カスツール駅' },
      { optionId: '2', text: 'サロマデパート前駅' },
      { optionId: '3', text: 'モトバビル前駅' },
      { optionId: '4', text: 'リンゴーン空港駅' },
    ],
  },
  {
    quizId: '354',
    question:
      'ヨークシン編から難易度マックスの問題です。 \n旅団一行はコルトピが具現化した緋の眼を持つ者を捕らえに、ベーチタクルホテルへ電車で向かいました。\nリパ駅で降りた彼らは何口へ向かいましたか？',
    options: [
      { optionId: '0', text: 'サロマデパート方面口' },
      { optionId: '1', text: 'カスツール方面口' },
      { optionId: '2', text: '競売市方面口' },
      { optionId: '3', text: 'モトバビル方面口' },
      { optionId: '4', text: 'サザンビーチ方面口' },
    ],
  },
  {
    quizId: '355',
    question: 'スクワラは何系の念能力者？',
    options: [
      { optionId: '0', text: '操作系' },
      { optionId: '1', text: '具現化系' },
      { optionId: '2', text: '強化系' },
      { optionId: '3', text: '放出系' },
      { optionId: '4', text: '変化系' },
    ],
  },
  {
    quizId: '356',
    question: 'スクワラの能力は？',
    options: [
      { optionId: '0', text: '全面的に世話をするという条件で飼い犬を操作する' },
      { optionId: '1', text: '具現化した犬と自分の位置を変えることができる' },
      { optionId: '2', text: '具現化した犬と対象者の位置を変えることができる' },
      {
        optionId: '3',
        text: 'スクワラが悲鳴をあげたり、倒れたりしてショックを受けると犬が近くの人間を襲いかかる',
      },
      { optionId: '4', text: '1日15分間だけ犬になることができる' },
    ],
  },
  {
    quizId: '357',
    question:
      'ヨークシン編からの問題です。\nパクノダは、スクワラからクラピカのデータを引き出した後、メモリーボムを団員に撃ち込みました。\n誰に打った？',
    options: [
      { optionId: '0', text: 'ノブナガとコルトピ' },
      { optionId: '1', text: 'ノブナガとマチ' },
      { optionId: '2', text: 'コルトピとマチ' },
      { optionId: '3', text: 'ノブナガとシズク' },
      { optionId: '4', text: 'シズクとマチ' },
    ],
  },
  {
    quizId: '358',
    question:
      'ヨークシン編、キルアとゴンが旅団に捕まってしまった時（二度目）の問題です。\nベーチタクルホテルでレオリオが持ち込んだラジオから流れていた最後の曲は？',
    options: [
      { optionId: '0', text: 'MOON CHILD（ムーンチャイルド）' },
      { optionId: '1', text: 'Brandnew Gear（ブランニュー・ギア）' },
      { optionId: '2', text: 'Over the rainbow（オーバーザレインボー）' },
      { optionId: '3', text: 'ESCAPE（エスケイプ）' },
      {
        optionId: '4',
        text: 'Hallelujah in the snow（ハレルヤ・イン・ザ・スノー）',
      },
    ],
  },
  {
    quizId: '359',
    question:
      'ヨークシン編、キルアとゴンが旅団に捕まってしまった時（二度目）の問題です。\nベーチタクルホテルでレオリオが持ち込んだラジオから流れていた曲、MOON CHILD（ムーンチャイルド）をリクエストした人のペンネームは何？',
    options: [
      { optionId: '0', text: 'チョンチョン' },
      { optionId: '1', text: 'キョンキョン' },
      { optionId: '2', text: 'パニュパニュ' },
      { optionId: '3', text: 'リンリン' },
      { optionId: '4', text: 'ランラン' },
    ],
  },
  {
    quizId: '360',
    question:
      'ヨークシン編、キルアとゴンが旅団に捕まってしまった時（二度目）の問題です。\nベーチタクルホテルでレオリオが持ち込んだラジオから流れていた番組のパーソナリティの名前は？',
    options: [
      { optionId: '0', text: 'クレオ' },
      { optionId: '1', text: 'ヒカル' },
      { optionId: '2', text: 'リョウタ' },
      { optionId: '3', text: 'ジン' },
      { optionId: '4', text: 'オサム' },
    ],
  },
  {
    quizId: '361',
    question:
      'ヨークシン編、キルアとゴンが旅団に捕まってしまった時（二度目）の問題です。\n暗闇に乗じて、クロロを捕らえる作戦は何時に決行された？',
    options: [
      { optionId: '0', text: '19時' },
      { optionId: '1', text: '20時' },
      { optionId: '2', text: '21時' },
      { optionId: '3', text: '22時' },
      { optionId: '4', text: '18時' },
    ],
  },
  {
    quizId: '362',
    question:
      'ヨークシン編、キルアとゴンが旅団に捕まってしまった時（二度目）の問題です。\n暗闇に乗じて脱出を試みたキルアとゴンにより、パクノダは負傷しました。\nどこを折られた？',
    options: [
      { optionId: '0', text: '左手と奥歯' },
      { optionId: '1', text: '右足' },
      { optionId: '2', text: '右手と肋骨' },
      { optionId: '3', text: '前歯を二本' },
      { optionId: '4', text: '左手と鎖骨' },
    ],
  },
  {
    quizId: '363',
    question:
      'ヨークシン編、キルアとゴンが旅団に捕まってしまった時（二度目）の問題です。\n暗闇に乗じて、脱出を試みたキルアとゴンによりマチは負傷しました。\nマチはどこをおられた？',
    options: [
      { optionId: '0', text: 'アバラを何本か' },
      { optionId: '1', text: '左手と奥歯' },
      { optionId: '2', text: '右手と肋骨' },
      { optionId: '3', text: '右足' },
      { optionId: '4', text: '前歯を二本' },
    ],
  },
  {
    quizId: '364',
    question:
      'ヨークシン編、キルアとゴンが旅団に捕まってしまった時（二度目）の問題です。\n暗闇に乗じて、クロロを捕獲することに成功しました。この時、クラピカがパクノダに残したメッセージは何？',
    options: [
      { optionId: '0', text: '二人の記憶を話せば殺す' },
      { optionId: '1', text: '二人に危害を加えたら殺す' },
      { optionId: '2', text: '私を追ってきたら殺す' },
      { optionId: '3', text: '団員と口を聞いたら殺す' },
      { optionId: '4', text: '人質を連れて、一人でリンゴーン空港へこい' },
    ],
  },
  {
    quizId: '365',
    question:
      'ヨークシン編からの問題です。\nクロロがクラピカに捕獲された後、遅れてベーチタクルホテルで合流した旅団のメンバー3人は誰？',
    options: [
      { optionId: '0', text: 'フィンクス、フェイタン、シャルナーク' },
      { optionId: '1', text: 'ノブナガ、パクノダ、コルトピ' },
      { optionId: '2', text: 'ヒソカ、フランクリン、ボノレノフ' },
      { optionId: '3', text: 'フィンクス、ノブナガ、ボノレノフ' },
      { optionId: '4', text: 'フェイタン、フランクリン、コルトピ' },
    ],
  },
  {
    quizId: '366',
    question:
      'ヨークシン編、クロロがクラピカに捕獲された時の問題です。\nクラピカが旅団に最初に電話で与えた指示は、３つありました。\n１．「追跡はするな」\n２．「人質二人に危害を加えるな」\n３つ目は何？',
    options: [
      { optionId: '0', text: 'パクノダという女に代われ' },
      { optionId: '1', text: '今後二度と念能力を使うな' },
      { optionId: '2', text: '10分後にかけ直すから携帯を手放すな' },
      { optionId: '3', text: 'その場から動くな' },
      { optionId: '4', text: '人質の二人を出せ' },
    ],
  },
  {
    quizId: '367',
    question:
      '第二回キャラクター人気投票からの問題です。\nヒソカ、クロロ、マチ、レオリオを人気の順位並び替えるた時正しい順番は？',
    options: [
      { optionId: '0', text: 'クロロ、ヒソカ、レオリオ、マチ' },
      { optionId: '1', text: 'ヒソカ、レオリオ、クロロ、マチ' },
      { optionId: '2', text: 'レオリオ、マチ、ヒソカ、クロロ' },
      { optionId: '3', text: 'ヒソカ、クロロ、マチ、レオリオ' },
      { optionId: '4', text: 'クロロ、ヒソカ、マチ、レオリオ' },
    ],
  },
  {
    quizId: '368',
    question:
      '第二回キャラクター人気投票からの問題です。\n次のうち、サトツさんより人気がないのは誰？',
    options: [
      { optionId: '0', text: 'ネオン' },
      { optionId: '1', text: '梟（ふくろう）' },
      { optionId: '2', text: 'ズシ' },
      { optionId: '3', text: 'センリツ' },
      { optionId: '4', text: 'ポックル' },
    ],
  },
  {
    quizId: '369',
    question: '第二回キャラクター人気投票からの問題です。\n一番人気は誰？',
    options: [
      { optionId: '0', text: 'キルア' },
      { optionId: '1', text: 'ゴン' },
      { optionId: '2', text: 'クラピカ' },
      { optionId: '3', text: 'ヒソカ' },
      { optionId: '4', text: '団長' },
    ],
  },
  {
    quizId: '370',
    question:
      'ヨークシン編からの問題です。\nクラピカが団長に刺した「律する小指の鎖」のルールは二つあります。1つは「今後の念能力の使用を一切禁じること」\nもう一つは何？',
    options: [
      { optionId: '0', text: '今後旅団員との一切の接触を絶つこと' },
      { optionId: '1', text: 'クラピカについて一切情報を漏らさないこと' },
      {
        optionId: '2',
        text: '今夜0時までにゴンとキルアを小細工なしで無事に解放すること',
      },
      { optionId: '3', text: '今後二度と私たちに関わらないこと' },
      {
        optionId: '4',
        text: '他の団員の居場所と能力について嘘偽りなく話すこと',
      },
    ],
  },
  {
    quizId: '371',
    question:
      'ヨークシン編からの問題です。\nクラピカがパクノダに刺した「律する小指の鎖」のルールは二つあります。\n何と何？',
    options: [
      {
        optionId: '0',
        text: '1つ今夜0時までにゴンとキルアを小細工なしで無事に解放すること\n2つ私（クラピカ）について一情報を漏らさないこと',
      },
      {
        optionId: '1',
        text: '1つ今夜0時までにゴンとキルアを小細工なしで無事に解放すること\n2つ今後旅団員との一切の接触を絶つこと',
      },
      {
        optionId: '2',
        text: '1つ今夜0時までにゴンとキルアを小細工なしで無事に解放すること\n2つ今後の念能力の使用を一切禁じる',
      },
      {
        optionId: '3',
        text: '1つ今後の念能力の使用を一切禁じる\n2つ今後旅団員との一切の接触を絶つこと',
      },
      {
        optionId: '4',
        text: '1つ今後の念能力の使用を一切禁じる\n2つ私（クラピカ）について一情報を漏らさないこと',
      },
    ],
  },
  {
    quizId: '372',
    question:
      'ヨークシン編、団長がクラピカに解放された後からの問題です。\nパクノダは、クラピカに「律する小指の鎖」を刺されため、クラピカの情報を団員に話したら命を落としてしまいます。\nしかし、パクノダは自分の命と引き換えに、メモリーボムを使い団員に記憶を伝えました。\nこの時メモリーボムを打ち込んでいないのは誰？',
    options: [
      { optionId: '0', text: 'シズク' },
      { optionId: '1', text: 'フェイタン' },
      { optionId: '2', text: 'フィンクス' },
      { optionId: '3', text: 'マチ' },
      { optionId: '4', text: 'シャルナーク' },
    ],
  },
  {
    quizId: '373',
    question:
      'ヨークシン編、団長がクラピカに解放された後からの問題です。\nパクノダは、クラピカに「律する小指の鎖」を刺されため、クラピカの情報を団員に話したら命を落としてしまいます。\nしかし、パクノダは自分の命と引き換えに、メモリーボムを使い団員に記憶を伝えました。\nこの時メモリーボムを打ち込んでいないのは誰？',
    options: [
      { optionId: '0', text: 'ボノレノフ' },
      { optionId: '1', text: 'フランクリン' },
      { optionId: '2', text: 'フィンクス' },
      { optionId: '3', text: 'ノブナガ' },
      { optionId: '4', text: 'シャルナーク' },
    ],
  },
  {
    quizId: '374',
    question:
      'ヨークシン編9月6日からの問題です。\nゴンたちも参加した、サザンピースオークションのBホールでの最初の品は何？',
    options: [
      { optionId: '0', text: 'デオドロザウルスの糞の化石' },
      { optionId: '1', text: '幻のライ王朝青磁気青雲文壺' },
      {
        optionId: '2',
        text: '俳優ソン・リマーチの使用済みティッシュ DNA鑑定書付き',
      },
      { optionId: '3', text: '龍皮病患者の皮膚' },
      { optionId: '4', text: '名女優セーラの毛髪 DNA鑑定書付き' },
    ],
  },
  {
    quizId: '375',
    question: 'センリツは何系の能力者？',
    options: [
      { optionId: '0', text: '放出系' },
      { optionId: '1', text: '操作系' },
      { optionId: '2', text: '特質系' },
      { optionId: '3', text: '変化系' },
      { optionId: '4', text: '具現化系' },
    ],
  },
  {
    quizId: '376',
    question:
      'ヨークシン編からの問題です。\nグリードアイランド7本をサザンピースオークションに提供したプロハンターの名前は何？',
    options: [
      { optionId: '0', text: 'ジェイトサリ' },
      { optionId: '1', text: 'バッテラ' },
      { optionId: '2', text: 'セパイル' },
      { optionId: '3', text: 'ジン' },
      { optionId: '4', text: 'ツェズゲラ' },
    ],
  },
  {
    quizId: '377',
    question:
      'ヨークシン編9月6日からの問題です。\nグリードアイランド一本目をバッテラは何ジェニーで購入した？',
    options: [
      { optionId: '0', text: '305億ジェニー' },
      { optionId: '1', text: '58億ジェニー' },
      { optionId: '2', text: '76億ジェニー' },
      { optionId: '3', text: '240億ジェニー' },
      { optionId: '4', text: '280億ジェニー' },
    ],
  },
  {
    quizId: '378',
    question:
      'ヨークシン編9月6日からの問題です。\nゴンとキルアは、サザンオークションの会場で、旅団メンバーの二人と会いました。誰と誰？',
    options: [
      { optionId: '0', text: 'フェイタンとフィンクス' },
      { optionId: '1', text: 'シズクとフランクリン' },
      { optionId: '2', text: 'マチとノブナガ' },
      { optionId: '3', text: 'パクノダとフェイタン' },
      { optionId: '4', text: 'シャルナークとコルトピ' },
    ],
  },
  {
    quizId: '379',
    question:
      'ヨークシン編9月6日からの問題です。\nサザンオークションには、ゴンとキルアともう一人の三人で参加しました。あと一人は誰？',
    options: [
      { optionId: '0', text: 'セパイル' },
      { optionId: '1', text: 'レオリオ' },
      { optionId: '2', text: 'クラピカ' },
      { optionId: '3', text: 'ビスケ' },
      { optionId: '4', text: 'ヒソカ' },
    ],
  },
  {
    quizId: '380',
    question:
      'ヨークシン編9月6日からの問題です。\nゴン、キルア、セパイルの三人でサザンオークションに参加しました。\nこの時ゴンの番号は何番？（胸に付けていた番号）',
    options: [
      { optionId: '0', text: '201番' },
      { optionId: '1', text: '71番' },
      { optionId: '2', text: '16番' },
      { optionId: '3', text: '405番' },
      { optionId: '4', text: '105番' },
    ],
  },
  {
    quizId: '381',
    question:
      'ヨークシン編9月6日からの問題です。\nミルキはグリードアイランドを競り落とすためにサザンオークションに参加しました。\nこの時のミルキの番号は何番？',
    options: [
      { optionId: '0', text: '71番' },
      { optionId: '1', text: '201番' },
      { optionId: '2', text: '16番' },
      { optionId: '3', text: '33番' },
      { optionId: '4', text: '105番' },
    ],
  },
  {
    quizId: '382',
    question:
      'ヨークシン編9月6日、サザンオークションからの問題です。\n最初にグリードアイランドを落とした日のバッテラさんの番号は何番？（胸に付けていた番号）',
    options: [
      { optionId: '0', text: '16番' },
      { optionId: '1', text: '71番' },
      { optionId: '2', text: '201番' },
      { optionId: '3', text: '33番' },
      { optionId: '4', text: '105番' },
    ],
  },
  {
    quizId: '383',
    question: 'クロロが盗んだ能力を使うときの条件は？',
    options: [
      {
        optionId: '0',
        text: '本を具現化して右手に持ち、その能力のページを開いた状態にする。',
      },
      {
        optionId: '1',
        text: '本を具現化して左手に持ち、その能力のページを開いた状態にする。',
      },
      {
        optionId: '2',
        text: '使いたい能力が書かれたページを破る。（3日後またページは修復される）',
      },
      {
        optionId: '3',
        text: '使いたい能力が書かれたページを破る。（盗んだ能力は一度しか使えない）',
      },
      {
        optionId: '4',
        text: '使いたい能力が書かれているページの内容を暗記していないといけない',
      },
    ],
  },
  {
    quizId: '384',
    question: 'クロロの能力の説明として誤っているものを選べ',
    options: [
      {
        optionId: '0',
        text: '盗んだ能力は盗まれた相手が死んでも、使うことができる',
      },
      { optionId: '1', text: '能力を盗まれた相手はその能力を使えなくなる' },
      {
        optionId: '2',
        text: '相手の能力を盗むために必要な条件の一つは、相手に念に関して質問し相手がそれに答えることである',
      },
      {
        optionId: '3',
        text: '盗んだ能力を使うときは、本を具現化して右手に持ち、その能力のページを開いた状態にする',
      },
      {
        optionId: '4',
        text: '相手の能力を盗むために必要な条件の一つは、相手の念能力を実際に目で見ることである',
      },
    ],
  },
  {
    quizId: '385',
    question:
      'ヨークシン編、サザンオークションからの問題です。\nサザンオークションから7本グリードアイランドが出品されました。1本目のグリードアイランドを、305億で落札したものの何者かに盗まれてしまったバッテラ氏はめげることなく二本目のグリードアイランドも購入しました。\n9月7日に出品された2本目のグレードアイランドはいくらで購入した？',
    options: [
      { optionId: '0', text: '280億' },
      { optionId: '1', text: '320億' },
      { optionId: '2', text: '350億' },
      { optionId: '3', text: '310億' },
      { optionId: '4', text: '305億' },
    ],
  },
  {
    quizId: '386',
    question:
      'ヨークシン編、ツェズゲラの発言からの問題です。\n「練を見せろ」とは、ハンター用語でどういう意味？',
    options: [
      { optionId: '0', text: '鍛練の成果を見せろ' },
      { optionId: '1', text: '四大行の一つ、「練」を見せろ' },
      {
        optionId: '2',
        text: '体内の精孔を広げ、通常以上の大量のオーラを生み出してみろ',
      },
      { optionId: '3', text: '電気をオーラに変えること' },
      { optionId: '4', text: '壁を思いっきり殴ること' },
    ],
  },
  {
    quizId: '387',
    question:
      'ゴンとキルアはグリードアイランドプレイヤー選考会に無事合格しました。選考会の後、一度解散して契約書を読みサインをしました。そしてプレイの準備を済ませ、午後5時にある場所に集合しました。\nある場所とはどこ？',
    options: [
      { optionId: '0', text: 'ターセトル駅中央口' },
      { optionId: '1', text: 'リパ駅サロマデパート方面口' },
      { optionId: '2', text: 'カスツール駅東口' },
      { optionId: '3', text: 'リンゴーン空港駅南口' },
      { optionId: '4', text: 'サロマデパート前駅西口' },
    ],
  },
  {
    quizId: '388',
    question:
      'ゴンとキルアも参加した、バッテラ氏が開いたグリードアイランドプレイヤー選考会は何人が合格した？',
    options: [
      { optionId: '0', text: '21人' },
      { optionId: '1', text: '32人' },
      { optionId: '2', text: '18人' },
      { optionId: '3', text: '15人' },
      { optionId: '4', text: '50人' },
    ],
  },
  {
    quizId: '389',
    question:
      'ヨークシン編、サザンオークションからの問題です。\nサザンオークションから7本グリードアイランドが出品されました。1本目のグリードアイランドを、305億で落札したものの何者かに盗まれてしまいました。\n盗んだのは誰？',
    options: [
      { optionId: '0', text: 'フィンクスとフェイタン' },
      { optionId: '1', text: 'シャルナークとシズク' },
      { optionId: '2', text: 'コルトピとマチ' },
      { optionId: '3', text: 'ヒソカ' },
      { optionId: '4', text: 'フランクリンとシャルナーク' },
    ],
  },
  {
    quizId: '390',
    question:
      'バッテラ氏が開いたグリードアイランド選考会で選ばれた21名が初めてグリードアイランドに入るとき、ジャンケンで順番を決めました。一番はゴン、キルアは何番だった？',
    options: [
      { optionId: '0', text: '17番' },
      { optionId: '1', text: '2番' },
      { optionId: '2', text: '21番' },
      { optionId: '3', text: '20番' },
      { optionId: '4', text: '8番' },
    ],
  },
  {
    quizId: '391',
    question: 'グリードアイランド編からの問題です。\nフリーポケットは何コ？',
    options: [
      { optionId: '0', text: '45' },
      { optionId: '1', text: '100' },
      { optionId: '2', text: '50' },
      { optionId: '3', text: '35' },
      { optionId: '4', text: '40' },
    ],
  },
  {
    quizId: '392',
    question: 'グリードアイランド編からの問題です。\nゲームクリアの条件は？',
    options: [
      { optionId: '0', text: '指定ポケット100枚をカード化して本に揃えること' },
      {
        optionId: '1',
        text: '指定ポケット100枚とフリーポケット45枚をカード化して本に揃えること',
      },
      { optionId: '2', text: 'フリーポケット45枚をカード化して本に揃えること' },
      { optionId: '3', text: 'ゲームマスター11人を探し出すこと' },
      { optionId: '4', text: 'ゲームマスター11人を倒してカード化すること' },
    ],
  },
  {
    quizId: '393',
    question:
      'グリードアイランド編の問題です。\nキルアはスタート地点の草原でラターザに呪文（スペル）を掛けられました。\nキルアが掛けられた呪文（スペル）は何？',
    options: [
      { optionId: '0', text: '追跡（トレース）' },
      { optionId: '1', text: '密着（アドヒージョン）' },
      { optionId: '2', text: '強奪（ロブ）' },
      { optionId: '3', text: '看破（ペネレイト）' },
      { optionId: '4', text: '窃盗（シーフ）' },
    ],
  },
  {
    quizId: '394',
    question:
      'グリードアイランド編の問題です。\nキルアはスタート地点の草原で攻撃呪文の追跡（トレース）を受けました。\nキルアに追跡（トレース）を使ったのは誰？',
    options: [
      { optionId: '0', text: 'ラターザ' },
      { optionId: '1', text: 'モタリケ' },
      { optionId: '2', text: 'ドジーロ' },
      { optionId: '3', text: 'アーカ' },
      { optionId: '4', text: 'ミチロウ' },
    ],
  },
  {
    quizId: '395',
    question: 'ヨークシンの市長名は？',
    options: [
      { optionId: '0', text: 'ジトノーダ' },
      { optionId: '1', text: 'ウラメシ' },
      { optionId: '2', text: 'クワバラ' },
      { optionId: '3', text: 'クラマ' },
      { optionId: '4', text: 'ヒエイ' },
    ],
  },
  {
    quizId: '396',
    question:
      'グリードアイランド編の問題です。\nゴン達が最初に訪れた街、通称「懸賞の街」の街名は？',
    options: [
      { optionId: '0', text: 'アンドキバ' },
      { optionId: '1', text: 'ソウフラビ' },
      { optionId: '2', text: 'ドリアス' },
      { optionId: '3', text: 'リーメイロ' },
      { optionId: '4', text: 'アイアイ' },
    ],
  },
  {
    quizId: '397',
    question: 'グリードアイランド編の問題です。\nギャンブルの街の街名は？',
    options: [
      { optionId: '0', text: 'ドリアス' },
      { optionId: '1', text: 'モンテカルロ' },
      { optionId: '2', text: 'サーカスサーカス' },
      { optionId: '3', text: 'ストラトスフィア' },
      { optionId: '4', text: 'ベラッジオ' },
    ],
  },
  {
    quizId: '398',
    question: 'グリードアイランド編の問題です。\n恋愛都市の街名は？',
    options: [
      { optionId: '0', text: 'アイアイ' },
      { optionId: '1', text: 'コイコイ' },
      { optionId: '2', text: 'レンレン' },
      { optionId: '3', text: 'ドキドキ' },
      { optionId: '4', text: 'スキスキ' },
    ],
  },
  {
    quizId: '399',
    question: 'グリードアイランド編の問題です。\n魔法都市の名前は？',
    options: [
      { optionId: '0', text: 'マサドラ' },
      { optionId: '1', text: 'マサラタウン' },
      { optionId: '2', text: 'ニビシティー' },
      { optionId: '3', text: 'タマムシシティー' },
      { optionId: '4', text: 'トキワシティー' },
    ],
  },
  {
    quizId: '400',
    question:
      'グリードアイランド編、懸賞の街アンドキバの壁に貼られていたビラからの問題です。\nたずね犬を見つけたら何をもらえる？',
    options: [
      { optionId: '0', text: '呪われた幸運の女神像' },
      { optionId: '1', text: 'ガルガイダー' },
      { optionId: '2', text: '酒生みの泉' },
      { optionId: '3', text: '幸福通帳' },
      { optionId: '4', text: 'スケルトンメガネ' },
    ],
  },
  {
    quizId: '401',
    question:
      'グリードアイランド編の問題です。\nゴン達が最初にゲットしたカードは何？',
    options: [
      { optionId: '0', text: 'ガルガイダー' },
      { optionId: '1', text: '10000J' },
      { optionId: '2', text: '島の地図' },
      { optionId: '3', text: '呪われた幸運の女神像' },
      { optionId: '4', text: 'スパゲッティー' },
    ],
  },
  {
    quizId: '402',
    question:
      'グリードアイランド編の問題です。\n懸賞都市アントキバでゴンとキルアは、30分以内に大盛りスパゲッティーを食べればお題が無料、更にガルガイダーが手に入る大食いイベントにチャレンジしました。\nゴンとキルアは何分でクリアした？',
    options: [
      { optionId: '0', text: '10分と13分' },
      { optionId: '1', text: '3分と5分' },
      { optionId: '2', text: '5分と7分' },
      { optionId: '3', text: '15分と18分' },
      { optionId: '4', text: '25分と28分' },
    ],
  },
  {
    quizId: '403',
    question:
      'グリードアイランド編の問題です。\n懸賞都市アントキバでゴンとキルアは、30分以内に大盛りスパゲッティーを食べればお題が無料、更にガルガイダーが手に入る大食いイベントにチャレンジしました。 \nこの時、二人が頼んだ飲み物は何？',
    options: [
      { optionId: '0', text: 'アイスソーダ' },
      { optionId: '1', text: 'コーラ' },
      { optionId: '2', text: 'ラムネ' },
      { optionId: '3', text: 'オレンジジュース' },
      { optionId: '4', text: 'りんごジュース' },
    ],
  },
  {
    quizId: '404',
    question:
      'グリードアイランド編から難易度マックスの問題です。\n懸賞都市アントキバでゴンとキルアは、30分以内に大盛りスパゲッティーを食べればお題が無料、更にガルガイダーが手に入る大食いイベントにチャレンジしました。 \nこの時、二人が頼んだ飲み物アイスソーダは、一杯いくら？',
    options: [
      { optionId: '0', text: '340円' },
      { optionId: '1', text: '120円' },
      { optionId: '2', text: '180円' },
      { optionId: '3', text: '500円' },
      { optionId: '4', text: '350円' },
    ],
  },
  {
    quizId: '405',
    question:
      'グリードアイランド編の問題です。\n呪文（スペル）カードは全部で何種類？',
    options: [
      { optionId: '0', text: '40' },
      { optionId: '1', text: '50' },
      { optionId: '2', text: '100' },
      { optionId: '3', text: '99' },
      { optionId: '4', text: '30' },
    ],
  },
  {
    quizId: '406',
    question:
      'キルアの名言クイズです。\nグリードアイランドでゴンはキルアに感謝の気持ちを伝えました。\n「ありがと！キルアといっしょにここに来れて、ううん キルアと会えてオレ本当によかったよ！」\nこのセリフを聞いた後のキルアの心の声はどれ？',
    options: [
      {
        optionId: '0',
        text: '逆だよ ゴン オレなんだ ゴン オレ お前に あえて 本当に よかった',
      },
      {
        optionId: '1',
        text: 'ゴン・・・お前は光だ 時々 眩しすぎて 真っ直ぐ見れないけど それでも お前の傍にいていいかな・・・？',
      },
      { optionId: '2', text: 'こ・・・・・・・こいつ 大人だ・・・！！' },
      { optionId: '3', text: 'このドアホ' },
      { optionId: '4', text: 'やばい くじけそうだ 自分で決めたことなのに' },
    ],
  },
  {
    quizId: '407',
    question:
      'グリードアイランド編の問題です。\nゴンとキルアがアンドキバの9月の月例大会で使った作戦は？',
    options: [
      { optionId: '0', text: '目で勝つ大作戦' },
      { optionId: '1', text: '芋ずる作戦' },
      { optionId: '2', text: '念でぼろもうけ作戦' },
      { optionId: '3', text: 'ヤシマ作戦' },
      { optionId: '4', text: 'トモダチ作戦' },
    ],
  },
  {
    quizId: '408',
    question:
      'グリードアイランド編の問題です。\nニッケス、ゲンスルー、ジスパを中心に呪文を独占してクリアしようと目論んでいた53名（最初にゴンたちをスカウトした時の人数）の集団はアジトへ戻る時場所の発覚を防ぐため仲間を経由しています。\nこの経由係の男の名前は？',
    options: [
      { optionId: '0', text: 'コズフトロ' },
      { optionId: '1', text: 'モントール' },
      { optionId: '2', text: 'ゼンジュ' },
      { optionId: '3', text: 'ハガクシ' },
      { optionId: '4', text: 'ミチロウ' },
    ],
  },
  {
    quizId: '409',
    question:
      'グリードアイランド編の問題です。\n近距離スペルは半径何m以内なら有効？',
    options: [
      { optionId: '0', text: '20m' },
      { optionId: '1', text: '25m' },
      { optionId: '2', text: '15m' },
      { optionId: '3', text: '10m' },
      { optionId: '4', text: '30m' },
    ],
  },
  {
    quizId: '410',
    question:
      'グリードアイランド編の問題です。\nゴン達が最初に手に入れた指定ポケットのカードは？',
    options: [
      { optionId: '0', text: '真実の剣' },
      { optionId: '1', text: 'ガルガイダー' },
      { optionId: '2', text: '島の地図' },
      { optionId: '3', text: '呪われた幸運の女神像' },
      { optionId: '4', text: '酒生みの泉' },
    ],
  },
  {
    quizId: '411',
    question:
      'グリードアイランド編の問題です。\nキルアが手に入れた「真実の剣」を狙ったモタリケが使った呪文、他プレイヤー1名の指定ポケットのカードをランダムで一枚奪う呪文カード名は？',
    options: [
      { optionId: '0', text: '窃盗（シーフ）' },
      { optionId: '1', text: '掏摸（ピックポケット）' },
      { optionId: '2', text: '強奪（ロブ）' },
      { optionId: '3', text: '妥協 （コンプロマイズ）' },
      { optionId: '4', text: '堕落（コラプション）' },
    ],
  },
  {
    quizId: '412',
    question:
      'グリードアイランド編の問題です。\nキルアが手に入れた「真実の剣」を「窃盗（シーフ）」で盗もうとした男がいました。\n男の名前は？',
    options: [
      { optionId: '0', text: 'モタリケ' },
      { optionId: '1', text: 'モントール' },
      { optionId: '2', text: 'ゼンジュ' },
      { optionId: '3', text: 'ハガクシ' },
      { optionId: '4', text: 'ミチロウ' },
    ],
  },
  {
    quizId: '413',
    question:
      'グリードアイランド編の問題です。\n他プレイヤー1名のフリーポケットをランダムに一枚奪うカードは？',
    options: [
      { optionId: '0', text: '掏摸（ピックポケット）' },
      { optionId: '1', text: '窃盗（シーフ）' },
      { optionId: '2', text: '強奪（ロブ）' },
      { optionId: '3', text: '妥協 （コンプロマイズ）' },
      { optionId: '4', text: '堕落（コラプション）' },
    ],
  },
  {
    quizId: '414',
    question:
      'グリードアイランド編の問題です。\n指定ポケットカードをフリーポケットに入れたり仲間同士でカードを入れ換えてカード情報を混乱させる作戦をなんという？',
    options: [
      { optionId: '0', text: 'シャッフルカード法' },
      { optionId: '1', text: 'フルポケットガード法' },
      { optionId: '2', text: 'ミックスカード法' },
      { optionId: '3', text: 'コンフィデンシャル法' },
      { optionId: '4', text: 'クロス法' },
    ],
  },
  {
    quizId: '415',
    question:
      'グリードアイランド編の問題です。\n貴重なカードを掏摸（ピックポケット）や交換（トレード）などで失う危険を減らすためにあえてフリーポケットにいらないカードをたくさく入れておく防御法を何と呼ぶ？',
    options: [
      { optionId: '0', text: 'フルポケットガード法' },
      { optionId: '1', text: 'シャッフルカード法' },
      { optionId: '2', text: 'フリーポケットマックス法' },
      { optionId: '3', text: 'ポケットマックス法' },
      { optionId: '4', text: 'マックス法' },
    ],
  },
  {
    quizId: '416',
    question:
      'グリードアイランド編の問題です。\n他プレイヤー1名の持ちカードをどれでも好きに1枚奪うことができる呪文カードは？',
    options: [
      { optionId: '0', text: '強奪（ロブ）' },
      { optionId: '1', text: '掏摸（ピックポケット）' },
      { optionId: '2', text: '窃盗（シーフ）' },
      { optionId: '3', text: '妥協 （コンプロマイズ）' },
      { optionId: '4', text: '堕落（コラプション）' },
    ],
  },
  {
    quizId: '417',
    question:
      'グリードアイランド編の問題です。\nガルガイダーは一枚いくらで売れる？',
    options: [
      { optionId: '0', text: '30,000ジェニー' },
      { optionId: '1', text: '50,000ジェニー' },
      { optionId: '2', text: '120,000ジェニー' },
      { optionId: '3', text: '150,000ジェニー' },
      { optionId: '4', text: '70,000ジェニー' },
    ],
  },
  {
    quizId: '418',
    question:
      'グリードアイランド編の問題です。\nグリードアイランドは実在する島で行われています。\n島の大きさをシャルナークはどのくらいと判断した？',
    options: [
      { optionId: '0', text: 'コトリタナ共和国くらい' },
      { optionId: '1', text: 'ラペ共和国くらい' },
      { optionId: '2', text: 'ピトケアン諸国くらい' },
      { optionId: '3', text: 'バチカン市国くらい' },
      { optionId: '4', text: 'ジブラルタルくらい' },
    ],
  },
  {
    quizId: '419',
    question:
      'グリードアイランド編の問題です。\n島の地図は2種類あります。\n安い方は20,000ジェニーですが、高いほうはいくら？',
    options: [
      { optionId: '0', text: '650,000ジェニー' },
      { optionId: '1', text: '250,000ジェニー' },
      { optionId: '2', text: '350,000ジェニー' },
      { optionId: '3', text: '450,000ジェニー' },
      { optionId: '4', text: '550,000ジェニー' },
    ],
  },
  {
    quizId: '420',
    question:
      'グリードアイランド編の問題です。\nマサドラの場所を交換ショップで聞くといくらになるでしょうか？',
    options: [
      { optionId: '0', text: '3,000ジェニー' },
      { optionId: '1', text: '30,000ジェニー' },
      { optionId: '2', text: '100,000ジェニー' },
      { optionId: '3', text: '50,000ジェニー' },
      { optionId: '4', text: '5,000ジェニー' },
    ],
  },
  {
    quizId: '421',
    question:
      'グリードアイランドでゴンとキルアがカード化したモンスターからの出題です。\n「巨人族の中で最も巨大な種族。集団での行動を好み、縄張りに入りこんできた生物を襲う。知能は低く、弱点の目を攻撃されると意外に脆い」\nこのモンスターは？',
    options: [
      { optionId: '0', text: '1つ目巨人' },
      { optionId: '1', text: 'オイモ' },
      { optionId: '2', text: 'カーシー' },
      { optionId: '3', text: 'ドリー' },
      { optionId: '4', text: 'ブロギー' },
    ],
  },
  {
    quizId: '422',
    question:
      'グリードアイランドでゴンとキルアがカード化したモンスターからの出題です。\n「牛を丸呑みするほど巨大なトカゲ\n押されるだけで気絶してしまう程\n敏感なホクロが背中のどこかに1つ\nあり それを隠すために大小様々な\n斑点でカモフラージュしている」\nこのモンスターは？',
    options: [
      { optionId: '0', text: 'メラニントカゲ' },
      { optionId: '1', text: 'アオスジトカゲ' },
      { optionId: '2', text: 'キシノウエトカゲ' },
      { optionId: '3', text: 'ツシマスベトカゲ' },
      { optionId: '4', text: 'ヘリグロヒメトカゲ' },
    ],
  },
  {
    quizId: '423',
    question:
      'グリードアイランドでゴンとキルアがカード化したモンスターからの出題です。\n「念能力で物を操って身を守る操作系ネズミ とても臆病でいきなり他の生物と出会うだけで気絶してしまう\n繁殖力旺盛で島中どこでも見かけることができる」\nこのモンスターは？',
    options: [
      { optionId: '0', text: 'リモコンラット' },
      { optionId: '1', text: 'リモコンネズミ' },
      { optionId: '2', text: 'リモコンマウス' },
      { optionId: '3', text: 'リモコンキャット' },
      { optionId: '4', text: 'リモコンネコ' },
    ],
  },
  {
    quizId: '424',
    question:
      'グリードアイランド編からの問題です。\n「絶滅寸前の猛獣 腹の袋にモノをつめこむ修正があり長貴重なアイテムがいくつも入っているケースも少なくない」\nこのカード名は？',
    options: [
      { optionId: '0', text: 'トラエモン' },
      { optionId: '1', text: 'ボリエモン' },
      { optionId: '2', text: 'ゴロ助' },
      { optionId: '3', text: 'トラミちゃん' },
      { optionId: '4', text: 'カンダム' },
    ],
  },
  {
    quizId: '425',
    question: 'ビスケの実年齢は？\n（ゴン、キルアと初めて出会った時）',
    options: [
      { optionId: '0', text: '57歳' },
      { optionId: '1', text: '62歳' },
      { optionId: '2', text: '65歳' },
      { optionId: '3', text: '48歳' },
      { optionId: '4', text: '46歳' },
    ],
  },
  {
    quizId: '426',
    question: 'ビスケのフルネームは？',
    options: [
      { optionId: '0', text: 'ビスケット＝クルーガー' },
      { optionId: '1', text: 'ビスケット＝ルシルフル' },
      { optionId: '2', text: 'ビスケット＝ハザマ' },
      { optionId: '3', text: 'ビスケット＝マクマホン' },
      { optionId: '4', text: 'ビスケット＝ポケット' },
    ],
  },
  {
    quizId: '427',
    question:
      'グリードアイランドでゴンとキルアがカード化したモンスターからの出題です。\n「超高速で移動するボール状の生き物 固さはゴムボール程度で攻撃されてもダメージはないが 顔面に直撃の体当たりをくらうとかなりムカツく」\nこのモンスターは？',
    options: [
      { optionId: '0', text: 'マリモッチ' },
      { optionId: '1', text: 'リモコンラット' },
      { optionId: '2', text: 'メラニントカゲ' },
      { optionId: '3', text: 'バブルホース' },
      { optionId: '4', text: '一つ目巨人' },
    ],
  },
  {
    quizId: '428',
    question:
      'グリードアイランド編から難易度マックスの問題です。\nビノールトにつけられていることを知ったビスケはある作戦を立てました。その作戦とは、ビスケが一人で南へ歩き、ゴンキルアは一度北に歩きます。するとビノールトは100％ビスケの後を付けます。そこでゴンたちは高山に着いたら絶を使い引き返し二重尾行をするといった作戦です。\nゴンとキルアは高山に向かっている最中に何匹の怪物にあった？',
    options: [
      { optionId: '0', text: '3匹' },
      { optionId: '1', text: '1匹' },
      { optionId: '2', text: '5匹' },
      { optionId: '3', text: '4匹' },
      { optionId: '4', text: '2匹' },
    ],
  },
  {
    quizId: '429',
    question:
      'グリードアイランド編の問題です。\nビノールトの好物は人の肉です。特に好むのは？',
    options: [
      { optionId: '0', text: '22才の女の肉' },
      { optionId: '1', text: '22才の男の肉' },
      { optionId: '2', text: '20才の女の肉' },
      { optionId: '3', text: '20才の男の肉' },
      { optionId: '4', text: '18才の男の肉' },
    ],
  },
  {
    quizId: '430',
    question:
      'グリードアイランド編の問題です。\nビスケは、ゴンとキルアがビノールトと戦っている姿を見ながら、ゴンとキルアのことを石に例えました。\nゴンを何の石に例えた？',
    options: [
      { optionId: '0', text: 'ダイヤモンド' },
      { optionId: '1', text: 'サファイア' },
      { optionId: '2', text: 'ガーネット' },
      { optionId: '3', text: 'ルビー' },
      { optionId: '4', text: 'ブループラネット' },
    ],
  },
  {
    quizId: '431',
    question:
      'グリードアイランド編の問題です。\nビスケは、ゴンとキルアがビノールトと戦っている姿を見ながら、ゴンとキルアのことを石に例えました。\nキルアを何の石に例えた？',
    options: [
      { optionId: '0', text: 'サファイア' },
      { optionId: '1', text: 'ダイヤモンド' },
      { optionId: '2', text: 'ガーネット' },
      { optionId: '3', text: 'ルビー' },
      { optionId: '4', text: 'ブループラネット' },
    ],
  },
  {
    quizId: '432',
    question:
      'グリードアイランドでゴンとキルアがカード化したモンスターからの出題です。\n「紅白のシャボン玉で外敵を惑わし身を守る攻撃力はほとんどないが音の大きさにはびっくりするだろう」\nこのモンスターは？',
    options: [
      { optionId: '0', text: 'バブルホース' },
      { optionId: '1', text: 'ブラック・マジシャン・ガール' },
      { optionId: '2', text: '翻弄するエルフの剣士' },
      { optionId: '3', text: 'クリボー' },
      { optionId: '4', text: 'ブラック・ホール' },
    ],
  },
  {
    quizId: '433',
    question:
      '念の応用技からの問題です。\n纏の応用技で自分の肉体以外のものをオーラで纏う技術。ゴンはシャベルで穴を掘る時使っていた技。この技術を何て呼ぶ？',
    options: [
      { optionId: '0', text: '周' },
      { optionId: '1', text: '包' },
      { optionId: '2', text: '加' },
      { optionId: '3', text: '具' },
      { optionId: '4', text: '囲' },
    ],
  },
  {
    quizId: '434',
    question:
      '念の応用技からの問題です。\n「纏」と「練」の応用技。通常よりも遙かに多いオーラで肉体を強化する技術を何て呼ぶ？',
    options: [
      { optionId: '0', text: '堅' },
      { optionId: '1', text: '固' },
      { optionId: '2', text: '硬' },
      { optionId: '3', text: '守' },
      { optionId: '4', text: '壁' },
    ],
  },
  {
    quizId: '435',
    question:
      '念の応用技からの問題です。\n「堅」の状態で行う攻防の瞬間に「凝」で攻防力を変える技術を何て呼ぶ？',
    options: [
      { optionId: '0', text: '流' },
      { optionId: '1', text: '変' },
      { optionId: '2', text: '巡' },
      { optionId: '3', text: '換' },
      { optionId: '4', text: '動' },
    ],
  },
  {
    quizId: '436',
    question:
      '念の応用技からの問題です。\n「纏」「練」「絶」「発」「凝」を全て複合した応用技。体中のオーラを全て一カ所に集める技術。集まった箇所は凄まじい攻防力を誇るが、それ以外の攻防力が皆無になるため、そこを攻撃されると致命的なダメージを受けるを技術を何て呼ぶ？',
    options: [
      { optionId: '0', text: '硬' },
      { optionId: '1', text: '固' },
      { optionId: '2', text: '堅' },
      { optionId: '3', text: '強' },
      { optionId: '4', text: '高' },
    ],
  },
  {
    quizId: '437',
    question:
      'グリードアイランド編からの問題です。\n次の文は何の説明？\n「基本技1つ1つの流れを確認するため、あえて緩やかに攻防をおこなう組打ち。達人の相手をする場合レベルの低い使い手ではどんなにゆっくりと技を出されても受けきれないため同等の技量の者同士でないと有効な効果が得られない」',
    options: [
      { optionId: '0', text: '流々舞' },
      { optionId: '1', text: '自由組手' },
      { optionId: '2', text: '約束組手' },
      { optionId: '3', text: '打撃限定組手' },
      { optionId: '4', text: '合気道組手' },
    ],
  },
  {
    quizId: '438',
    question:
      'グリードアイランド編の問題です。\nニッケス、ゲンスルー、ジスパを中心に呪文を独占してクリアしようと目論んでいた63名ほどの集団は、実はゲンスルーにだまされおり、終盤で全員殺されてしまいました。（アベンガネは助かった）\nゲンスルーに壊滅された時、この集団は指定ポケットカードを何種類を保有していた？',
    options: [
      { optionId: '0', text: '90種類' },
      { optionId: '1', text: '95種類' },
      { optionId: '2', text: '85種類' },
      { optionId: '3', text: '93種類' },
      { optionId: '4', text: '87種類' },
    ],
  },
  {
    quizId: '439',
    question:
      'グリードアイランド編の問題です。\nニッケス、ゲンスルー、ジスパを中心に呪文を独占してクリアしようと目論んでいた63名ほどの集団がありました。\nこの集団の初期メンバーは何人？',
    options: [
      { optionId: '0', text: '10人' },
      { optionId: '1', text: '5人' },
      { optionId: '2', text: '3人' },
      { optionId: '3', text: '15人' },
      { optionId: '4', text: '20人' },
    ],
  },
  {
    quizId: '440',
    question:
      'グリードアイランド編の問題です。\nニッケス、ゲンスルーを中心に呪文を独占してクリアしようと目論んでいた63名ほどの集団がありました。\n指定ポケットカード90種類が集まった時点でゲンスルーが全員の前で自分がボマーであることを伝えました。\nゲンスルーが自分の能力を説明している時にある人物がゲンスルーに攻撃を仕掛けましたが、あっけなく返り討ちとなってしまいました。\nこのゲンスルーに攻撃を仕掛けた人物の名前は？',
    options: [
      { optionId: '0', text: 'ジスパ' },
      { optionId: '1', text: 'ニッケス' },
      { optionId: '2', text: 'アベンガネ' },
      { optionId: '3', text: 'プーハット' },
      { optionId: '4', text: 'コズフトロ' },
    ],
  },
  {
    quizId: '441',
    question:
      'ゲンスルーの能力は、一握りの火薬（リトルフラワー）ともうひとつは何？',
    options: [
      { optionId: '0', text: '命の音（カウントダウン）' },
      { optionId: '1', text: '秒読みの命（リトルライフ）' },
      { optionId: '2', text: '爆弾魔の仕掛け（トリックボマー）' },
      { optionId: '3', text: '大きい爆発（ビックフラワー）' },
      { optionId: '4', text: '一握りの命（リトルライフ）' },
    ],
  },
  {
    quizId: '442',
    question: 'ゲンスルーの能力、「カウントダウン」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '命の音' },
      { optionId: '1', text: '秒読みの命' },
      { optionId: '2', text: '爆弾魔の仕掛け' },
      { optionId: '3', text: '減る心拍数' },
      { optionId: '4', text: '心臓の音' },
    ],
  },
  {
    quizId: '443',
    question: 'ゲンスルーの能力、「リトルフラワー」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '一握りの火薬' },
      { optionId: '1', text: '爆弾魔の仕掛け' },
      { optionId: '2', text: '小さい命華' },
      { optionId: '3', text: '散りゆく花' },
      { optionId: '4', text: 'ひとかけらの純情' },
    ],
  },
  {
    quizId: '444',
    question:
      'ゲンスルーの能力、命の音（カウントダウン）は能力が発動（爆弾が具現化）してから心臓が一定数鼓動すると爆発します。\n何回心臓が鼓動すると爆発する？',
    options: [
      { optionId: '0', text: '6，000' },
      { optionId: '1', text: '4，000' },
      { optionId: '2', text: '4，500' },
      { optionId: '3', text: '5，500' },
      { optionId: '4', text: '5，000' },
    ],
  },
  {
    quizId: '445',
    question:
      'ゴン、キルアとグリードアイランドの選考会で一緒になったプーハット。\n彼は最終的には死亡してしまいます。いつ、どこで死亡した？',
    options: [
      {
        optionId: '0',
        text: 'ゲームの外で、ゲンスルーのリトルフラワーで殺された',
      },
      { optionId: '1', text: 'ゲーム序盤に怪獣に襲われて死亡した' },
      {
        optionId: '2',
        text: 'ゲーム内で、ゲンスルーの命の音（カウントダウン）で死亡した。',
      },
      {
        optionId: '3',
        text: 'ゲームの外で、フィンクス、フェイタンに殺されたに殺された',
      },
      { optionId: '4', text: 'ゲーム内で、フィンクス、フェイタンに殺された' },
    ],
  },
  {
    quizId: '446',
    question:
      'グリードアイランド編、初めてマサドラに向かった時からの問題です。\nゴン、キルア、ビスケの3人は岩石地帯からマサドラまで走って行きました。\n「ビスケは、○時間あれば楽勝だわね。出発」といい向かいました。\n何時間でマサドラへ向かった？',
    options: [
      { optionId: '0', text: '3時間' },
      { optionId: '1', text: '2時間30分' },
      { optionId: '2', text: '2時間' },
      { optionId: '3', text: '1時間30分' },
      { optionId: '4', text: '5時間' },
    ],
  },
  {
    quizId: '447',
    question:
      'グリードアイランド編からの問題です。\nゴン、キルア、ビスケの3人が初めてマサドラへ訪れた時、ビスケはあるものを購入しました。\n次のうち購入していない物を選びなさい。',
    options: [
      { optionId: '0', text: '呪文カード' },
      { optionId: '1', text: '懐中電灯' },
      { optionId: '2', text: 'スコップ' },
      { optionId: '3', text: 'ロープ' },
      { optionId: '4', text: 'トロッコ' },
    ],
  },
  {
    quizId: '448',
    question:
      '系統別修行、強化系レベル1は石割りです。\n一日に一個の石で何個割れたらクリア？',
    options: [
      { optionId: '0', text: '1,000個' },
      { optionId: '1', text: '100個' },
      { optionId: '2', text: '500個' },
      { optionId: '3', text: '300個' },
      { optionId: '4', text: '200個' },
    ],
  },
  {
    quizId: '449',
    question:
      'グリードアイランド編からの問題です。\nジャンケンの由来は古武術にあるとビスケは説明しています。\n掌の意味は何？',
    options: [
      { optionId: '0', text: 'パーで内臓破壊' },
      { optionId: '1', text: 'チョキで局部破壊' },
      { optionId: '2', text: 'グーで外部破壊' },
      { optionId: '3', text: 'パーで顔面破壊' },
      { optionId: '4', text: 'グーで金的破壊' },
    ],
  },
  {
    quizId: '450',
    question:
      'グリードアイランド編からの問題です。\nジャンケンの由来は古武術にあるとビスケは説明しています。\n指の意味は何？',
    options: [
      { optionId: '0', text: 'チョキで局部破壊' },
      { optionId: '1', text: 'パーで内臓破壊' },
      { optionId: '2', text: 'グーで外部破壊' },
      { optionId: '3', text: 'パーで顔面破壊' },
      { optionId: '4', text: 'グーで金的破壊' },
    ],
  },
  {
    quizId: '451',
    question:
      'グリードアイランド編からの問題です。\nジャンケンの由来は古武術にあるとビスケは説明しています。\n拳の意味は何？',
    options: [
      { optionId: '0', text: 'グーで外部破壊' },
      { optionId: '1', text: 'チョキで局部破壊' },
      { optionId: '2', text: 'パーで内臓破壊' },
      { optionId: '3', text: 'パーで顔面破壊' },
      { optionId: '4', text: 'グーで金的破壊' },
    ],
  },
  {
    quizId: '452',
    question:
      'グリードアイランド編からの問題です。\nレイザーが、幻影旅団に利用したゲームマスターのみが使える特別呪文カードは何？',
    options: [
      { optionId: '0', text: '排除（エリミネイト）' },
      { optionId: '1', text: '除去（リムーブ）' },
      { optionId: '2', text: '退場（ゴーアウェイ）' },
      { optionId: '3', text: '特別（スペシャル）' },
      { optionId: '4', text: '放出（イミット）' },
    ],
  },
  {
    quizId: '453',
    question:
      'レイザーが幻影旅団に利用したゲームマスターのみが使える特別呪文カード、排除（エリミネイト）からの問題です。\n排除（エリミネイト）を使うと、グリードアイランドに不当な方法で侵入した者すべてをある大陸のどこかへ飛ばすことができます。\nある大陸とはどこ？',
    options: [
      { optionId: '0', text: 'アイジエン大陸' },
      { optionId: '1', text: 'ヨルビアン大陸' },
      { optionId: '2', text: '暗黒大陸' },
      { optionId: '3', text: 'キタアメルカン大陸' },
      { optionId: '4', text: 'アイリカ大陸' },
    ],
  },
  {
    quizId: '454',
    question:
      'グリードアイランド編からの問題です。\n国外へ出る方法はトレードショップでいくらで聞ける？',
    options: [
      { optionId: '0', text: '3,000ジェニー' },
      { optionId: '1', text: '5,000ジェニー' },
      { optionId: '2', text: '10,000ジェニー' },
      { optionId: '3', text: '30,000ジェニー' },
      { optionId: '4', text: '50,000ジェニー' },
    ],
  },
  {
    quizId: '455',
    question:
      'グリードアイランドでゴンとキルアがカード化した怪物からの出題です。\n「群れで旅人を襲う狼のリーダーCクラスで最強の体力と攻撃力を誇る\n長を倒さないと部下の狼は\n際限なく出現する」\nこの怪物の名前は？',
    options: [
      { optionId: '0', text: '群狼の長' },
      { optionId: '1', text: '吠える神' },
      { optionId: '2', text: '狼のコーチング' },
      { optionId: '3', text: '郡狼のボス' },
      { optionId: '4', text: 'リーダーの遠吠え' },
    ],
  },
  {
    quizId: '456',
    question:
      'グリードアイランド編からの問題です。\n「グリードアイランドから出るとき必要な券\n所長から金で買うか所長を\n倒すと入手できる\nちなみに無理難題をいくら\n聞いてもチケットはくれない」\nこのカード名は？',
    options: [
      { optionId: '0', text: '通行チケット' },
      { optionId: '1', text: '所長の難題' },
      { optionId: '2', text: '離脱' },
      { optionId: '3', text: '外出チケット' },
      { optionId: '4', text: '所長のチケット' },
    ],
  },
  {
    quizId: '457',
    question:
      'ゴンが行った修行からの問題です。\n系統別修行、変化形レベル1は何？',
    options: [
      { optionId: '0', text: '念で、0から9までの数字を1分以内に作る' },
      {
        optionId: '1',
        text: '念で、AからZまでのアルファベット文字を1分以内につくる',
      },
      { optionId: '2', text: '体から放たれた球状のオーラを1分維持する' },
      {
        optionId: '3',
        text: '体から放たれた球状のオーラを30メートル離れたところまで飛ばす',
      },
      { optionId: '4', text: '一個の石で1,000個の石を割る' },
    ],
  },
  {
    quizId: '458',
    question:
      'キルアがハンター試験に合格した年のハンター試験からの問題です。\nこの年の試験会場はどこ？',
    options: [
      { optionId: '0', text: 'ビースカフマロ' },
      { optionId: '1', text: 'サバン' },
      { optionId: '2', text: 'デンドラ地区' },
      { optionId: '3', text: 'ヨークシン' },
      { optionId: '4', text: 'カキン国' },
    ],
  },
  {
    quizId: '459',
    question:
      'グリードアイランド編からの問題です。\nキルアはハンター試験を受けるため現実世界に戻りました。\nこの時の日付は？',
    options: [
      { optionId: '0', text: '12月29日' },
      { optionId: '1', text: '5月20日' },
      { optionId: '2', text: '1月3日' },
      { optionId: '3', text: '4月1日' },
      { optionId: '4', text: '8月15日' },
    ],
  },
  {
    quizId: '460',
    question: 'グリードアイランドにいた除念師の名前は？',
    options: [
      { optionId: '0', text: 'アベンガネ' },
      { optionId: '1', text: 'アトベカネ' },
      { optionId: '2', text: 'アンドロイド' },
      { optionId: '3', text: 'アリーナイト' },
      { optionId: '4', text: 'アンベルド' },
    ],
  },
  {
    quizId: '461',
    question:
      'グリードアイランド編から難易度マックスの問題です。\n除念師アベンガネが、ゲンスルーに付けられた爆弾を取り除いた時に唱えた呪文は何？',
    options: [
      {
        optionId: '0',
        text: 'ミガームラ\nサミンガードゥラ\nインテラミンガ\nゼンベラルブラ',
      },
      {
        optionId: '1',
        text: 'ファイヤー\nアイスストーム\nダイアキュート\nブレインダムド',
      },
      {
        optionId: '2',
        text: 'ソウルフル\nダンサブル\nリズミカル\nビックウェイブ',
      },
      { optionId: '3', text: 'イグアイン\nクリロナ\nエジル\nディマリア' },
      {
        optionId: '4',
        text: 'ゴロジカルム\nニカヒクフヨル\nイイトーニンガ\nポポイクジカ',
      },
    ],
  },
  {
    quizId: '462',
    question:
      'グリードアイランド編からの問題です。\n除念師アベンガネが、ゲンスルーに付けられた爆弾を取り除いた時に唱えた呪文\n「ミガームラ\nサミンガードゥラ\nインテラミンガ\nゼンベラルブラ」\nに続く言葉は？',
    options: [
      { optionId: '0', text: '森の精霊よ我にとりつきし不浄の念を取り去り給え' },
      { optionId: '1', text: '川の主よ我にとりつきし不浄の念を取り去り給え' },
      { optionId: '2', text: '山の神よ我にとりつきし不浄の念を取り去り給え' },
      { optionId: '3', text: '大地の母よ我にとりつきし不浄の念を取り去り給え' },
      { optionId: '4', text: '空の門番よ我にとりつきし不浄の念を取り去り給え' },
    ],
  },
  {
    quizId: '463',
    question:
      'グリードアイランド編からの問題です。\nキルアはハンター試験を受験するため一度現実世界に戻りました。\nその間にゴンとビスケはマサドラで呪文（スペル）カードを買いました。\n何枚買った？',
    options: [
      { optionId: '0', text: '60枚' },
      { optionId: '1', text: '100枚' },
      { optionId: '2', text: '40枚' },
      { optionId: '3', text: '80枚' },
      { optionId: '4', text: '20枚' },
    ],
  },
  {
    quizId: '464',
    question:
      'グリードアイランド編からの問題です。\nキルアはハンター試験を受験するため一度現実世界に戻りました。\nその間にゴンとビスケはマサドラで呪文（スペル）カードを60枚買いました。\nこの時交信（コンタクト）は何枚手に入った？',
    options: [
      { optionId: '0', text: '4枚' },
      { optionId: '1', text: '5枚' },
      { optionId: '2', text: '3枚' },
      { optionId: '3', text: '2枚' },
      { optionId: '4', text: '6枚' },
    ],
  },
  {
    quizId: '465',
    question:
      'グリードアイランド編からの問題です。\nキルアはハンター試験を受験するため一度現実世界に戻りました。\nその間にゴンとビスケはマサドラで呪文（スペル）カードを60枚買いました。\nこの時手に入ったカードの種類は24種類ですが、手に入らなかった呪文（スペル）カードは次のうちどれ？',
    options: [
      { optionId: '0', text: '左遷（レルゲイト）' },
      { optionId: '1', text: '強奪（ロブ）' },
      { optionId: '2', text: '再来（リターン）' },
      { optionId: '3', text: '初心（デパーチャー）' },
      { optionId: '4', text: '城門（キャッスルゲート）' },
    ],
  },
  {
    quizId: '466',
    question:
      'グリードアイランド編から難易度マックスの問題です。\nキルアはハンター試験を受験するため一度現実世界に戻りました。\nその間にゴンとビスケはマサドラで呪文（スペル）カードを60枚買いました。\nこの時何種類のカードを手に入れた？',
    options: [
      { optionId: '0', text: '24種類' },
      { optionId: '1', text: '20種類' },
      { optionId: '2', text: '30種類' },
      { optionId: '3', text: '32種類' },
      { optionId: '4', text: '28種類' },
    ],
  },
  {
    quizId: '467',
    question:
      'グリードアイランド編からの問題です。\nキルアはハンター試験を受験するため一度現実世界に戻りました。\nその間にゴンとビスケはマサドラで呪文（スペル）カードを60枚買いました。\nこの時、一番重複の多かった呪文（スペル）カードは何？',
    options: [
      { optionId: '0', text: '防壁（ディフェンシブウォール）' },
      { optionId: '1', text: '解析（アナリスト）' },
      { optionId: '2', text: '暗幕（ブラックアウトカーテン）' },
      { optionId: '3', text: '宝籤（ロトリー）' },
      { optionId: '4', text: '名簿（リスト）' },
    ],
  },
  {
    quizId: '468',
    question:
      'キルアがハンター試験に合格した年のハンター試験からの問題です。\nキルアは凶狸狐（キリコ）に、マンションまで送ってもらいました。\nキルアは凶狸狐（キリコ）の指示通り、ある部屋のインターホンを押して「ミエハルさんのお宅ですか」と尋ねました。\nある部屋とは何号室？',
    options: [
      { optionId: '0', text: '503号室' },
      { optionId: '1', text: '505号室' },
      { optionId: '2', text: '405号室' },
      { optionId: '3', text: '305号室' },
      { optionId: '4', text: '301号室' },
    ],
  },
  {
    quizId: '469',
    question:
      'キルアがハンター試験に合格した年のハンター試験からの問題です。\nキルアは凶狸狐（キリコ）に、マンションまで送ってもらいました。\nキルアは凶狸狐（キリコ）の指示通り、503号室のインターホンを押して「ミエハルさんのお宅ですか」と尋ねました。\nこの時どのような返答をされた？',
    options: [
      { optionId: '0', text: 'ミエハルは603号室だよ' },
      { optionId: '1', text: '駅前のディックサクラで買い物しな' },
      { optionId: '2', text: 'ミエハルは403号室だよ' },
      { optionId: '3', text: '駅前の定食屋で焼肉定食を頼みな' },
      { optionId: '4', text: 'ミエハルは今、留守だよ。30分後に戻ってきな' },
    ],
  },
  {
    quizId: '470',
    question:
      'キルアがハンター試験に合格した年のハンター試験からの問題です。\nキルアは凶狸狐（キリコ）に、マンションまで送ってもらいました。\nキルアは凶狸狐（キリコ）の指示通り、503号室のインターホンを押して「ミエハルさんのお宅ですか」と尋ねました。\n「ミエハルは603号室だよ」と返答されたため、603号室へ移動し、次の指示を受けました。\nその指示は駅前のある店で買い物をするといった指示でした。\n買い物をしたお店の名前は？',
    options: [
      { optionId: '0', text: 'ディックサクラ' },
      { optionId: '1', text: 'ケルベロス' },
      { optionId: '2', text: 'ウインディ' },
      { optionId: '3', text: 'ウッド' },
      { optionId: '4', text: 'ジャンプ' },
    ],
  },
  {
    quizId: '471',
    question:
      'キルアがハンター試験に合格した年のハンター試験からの問題です。\nこの年、試験会場までたどり着いた受験数の数は何人？',
    options: [
      { optionId: '0', text: '1489人' },
      { optionId: '1', text: '404人' },
      { optionId: '2', text: '999人' },
      { optionId: '3', text: '2474人' },
      { optionId: '4', text: '1152人' },
    ],
  },
  {
    quizId: '472',
    question:
      'キルアがハンター試験に合格した年のハンター試験からの問題です。\nこの年の一次試験の試験内容は？',
    options: [
      { optionId: '0', text: '5人ぶっ倒して、倒した相手のプレートを取る' },
      { optionId: '1', text: '10人ぶっ倒して、倒した相手のプレートを取る' },
      { optionId: '2', text: '二次試験会場までついていく' },
      { optionId: '3', text: '試験管にバレないようにカンニングをする' },
      { optionId: '4', text: '懲役100年以上の犯罪者達から2時間逃げ切る' },
    ],
  },
  {
    quizId: '473',
    question:
      'キルアがハンター試験に合格した年のハンター試験からの問題です。\nこの年のキルアの試験番号（プレート番号）は何番？',
    options: [
      { optionId: '0', text: '1219番' },
      { optionId: '1', text: '99番' },
      { optionId: '2', text: '405番' },
      { optionId: '3', text: '978番' },
      { optionId: '4', text: '1712番' },
    ],
  },
  {
    quizId: '474',
    question:
      'グリードアイランド編からの問題です。\n他プレイヤー1名と本を通じて会話することができる呪文（スペル）カードは？',
    options: [
      { optionId: '0', text: '交信（コンタクト）' },
      { optionId: '1', text: '道標（ガイドポスト）' },
      { optionId: '2', text: '名簿（リスト）' },
      { optionId: '3', text: '念視（サイトビジョン）' },
      { optionId: '4', text: '磁力（マグネティックフォース）' },
    ],
  },
  {
    quizId: '475',
    question:
      'グリードアイランド編からの問題です。\nハンター試験に合格して帰ってきたキルアに、ゴンは必殺技のチョキを見せました。\n見事細い枝を念で切ることができ、ゴンは大喜びしました。\n「えっまさか初めての成功！？」と驚くキルアに、ゴンは何と答えた？',
    options: [
      { optionId: '0', text: '違うよ！！これで5回目の成功だもんね。' },
      { optionId: '1', text: '違うよ！！これで3回目の成功だもんね。' },
      { optionId: '2', text: '違うよ！！これで7回目の成功だもんね。' },
      { optionId: '3', text: '違うよ！！これで4回目の成功だもんね。' },
      { optionId: '4', text: '違うよ！！これで9回目の成功だもんね。' },
    ],
  },
  {
    quizId: '476',
    question:
      'グリードアイランド編からの問題です。\nゴンが大木をぶっ叩いて手に入れたカードは何？',
    options: [
      { optionId: '0', text: 'キングホワイトオオクワガタ' },
      { optionId: '1', text: 'アスタコイデスノコギリクワガタ' },
      { optionId: '2', text: 'マンディブラリスフタマタクワガタ' },
      { optionId: '3', text: 'ダールマンツヤクワガタ' },
      { optionId: '4', text: 'インペリアリスツヤクワガタ' },
    ],
  },
  {
    quizId: '477',
    question:
      'グリードアイランド編からの問題です。\nゴンが大木をぶっ叩いて手に入れたカード「キングホワイトオオクワガタ」\nゴンが挑戦する前までの成功者は何人？',
    options: [
      { optionId: '0', text: '7人' },
      { optionId: '1', text: '15人' },
      { optionId: '2', text: '20人' },
      { optionId: '3', text: '5人' },
      { optionId: '4', text: '9人' },
    ],
  },
  {
    quizId: '478',
    question:
      'グリードアイランド編からの問題です。\n金粉少女は屋敷のどこに隠れていた？',
    options: [
      { optionId: '0', text: '地下四階の隠し部屋' },
      { optionId: '1', text: '5階の倉庫' },
      { optionId: '2', text: '1階のこたつの中' },
      { optionId: '3', text: 'キッチンの棚の中' },
      { optionId: '4', text: '地下1階のお風呂の中' },
    ],
  },
  {
    quizId: '479',
    question:
      'グリードアイランド編からの問題です。\n「全身から金粉をふき出す少女1日1回の入浴で約500gの金がとれる 非常に内気でずっと家からでない」\nこの指定ポケットカードは何？',
    options: [
      { optionId: '0', text: '金粉少女' },
      { optionId: '1', text: '金のなる少女' },
      { optionId: '2', text: '幼女の美金' },
      { optionId: '3', text: '入浴美少女' },
      { optionId: '4', text: '金髪少女' },
    ],
  },
  {
    quizId: '480',
    question:
      'グリードアイランド編からの問題です。\n金粉少女の入手難易度ランクはAでしたが、\n金粉少女が隠れる屋敷の門番の入手難易度ランクは？',
    options: [
      { optionId: '0', text: 'F' },
      { optionId: '1', text: 'H' },
      { optionId: '2', text: 'G' },
      { optionId: '3', text: 'E' },
      { optionId: '4', text: 'D' },
    ],
  },
  {
    quizId: '481',
    question:
      'グリードアイランド編からの問題です。\n懸賞の街（アントキバ）、1月の月例大会の商品は何？',
    options: [
      { optionId: '0', text: '聖騎士の首飾り' },
      { optionId: '1', text: '奇運アレキサンドライト' },
      { optionId: '2', text: '真実の剣' },
      { optionId: '3', text: '記憶の兜' },
      { optionId: '4', text: '美を呼ぶエメラルド' },
    ],
  },
  {
    quizId: '482',
    question:
      'グリードアイランド編からの問題です。\n「この薬に口づけをして意中の\n相手に飲ませれば その人は\nあなたの虜となる\n1粒の効き目は1週間\n1ビン500粒入り」\nこのカード名は？',
    options: [
      { optionId: '0', text: '魔女の媚薬' },
      { optionId: '1', text: '美を呼ぶエメラルド' },
      { optionId: '2', text: '魔女の若返り薬' },
      { optionId: '3', text: '長老の精力増強薬' },
      { optionId: '4', text: 'マッド博士のフェロモン剤' },
    ],
  },
  {
    quizId: '483',
    question:
      'グリードアイランド編からの問題です。\nリスキーダイスは大吉が何個ある？',
    options: [
      { optionId: '0', text: '19個' },
      { optionId: '1', text: '15個' },
      { optionId: '2', text: '21個' },
      { optionId: '3', text: '25個' },
      { optionId: '4', text: '29個' },
    ],
  },
  {
    quizId: '484',
    question:
      'グリードアイランド編からの問題です。\n「これをかぶっている時に見聞きしたことは決して忘れない\n非常に重く大きいのがタマにキズ」\nこのカード名は？',
    options: [
      { optionId: '0', text: '記憶の兜' },
      { optionId: '1', text: '記録の兜' },
      { optionId: '2', text: '保存の兜' },
      { optionId: '3', text: '貯蔵の兜' },
      { optionId: '4', text: '天才の兜' },
    ],
  },
  {
    quizId: '485',
    question:
      'グリードアイランド編からの問題です。\n懸賞都市（アントキバ）でゴンとキルアから「真実の剣」を奪ったプレイヤーは誰？',
    options: [
      { optionId: '0', text: 'カヅスール' },
      { optionId: '1', text: 'アスタ' },
      { optionId: '2', text: 'ガシタ' },
      { optionId: '3', text: 'ゼツク' },
      { optionId: '4', text: 'クズコ' },
    ],
  },
  {
    quizId: '486',
    question:
      'グリードアイランド編からの問題です。\nゴン達はカヅスール組とカードを交換しました。\nゴン達は「魔女の媚薬」を渡し、カヅスール組から何を受け取った？',
    options: [
      { optionId: '0', text: '顔パス回数券' },
      { optionId: '1', text: '魔女の痩せ薬' },
      { optionId: '2', text: '賢者のアクアマリン' },
      { optionId: '3', text: 'ブループラネット' },
      { optionId: '4', text: '税務長の籠手' },
    ],
  },
  {
    quizId: '487',
    question:
      'グリードアイランド編からの問題です。\nギャンブルの都市ドリアスで、キルアはリスキーダイスを使いスロットをしました。すると一発でスリーセブンが出ました。\nスロットの景品として手に入れたカードは何？',
    options: [
      { optionId: '0', text: 'レインボーダイヤ' },
      { optionId: '1', text: '孤独なサファイヤ' },
      { optionId: '2', text: '記憶の兜' },
      { optionId: '3', text: '魔女の媚薬' },
      { optionId: '4', text: '大ギャンブラーの卵' },
    ],
  },
  {
    quizId: '488',
    question:
      'グリードアイランド編からの問題です。\nギャンブルの都市ドリアスで、キルアはカジノ王とポーカー対決をしました。キルアはリスキーダイスを使い、ロイヤルストレートフラッシュを出し勝利しました。\nこの時手に入れたカードは何？',
    options: [
      { optionId: '0', text: 'ギャンブラーの卵' },
      { optionId: '1', text: 'レインボーダイヤ' },
      { optionId: '2', text: '記憶の兜' },
      { optionId: '3', text: '魔女の媚薬' },
      { optionId: '4', text: '孤独なサファイヤ' },
    ],
  },
  {
    quizId: '489',
    question:
      'グリードアイランド編からの問題です。\n「1日3時間手の中で温めることで1年～10年後に現実となって孵る卵 温める時に願う気持ちが強いほど早く孵化する。」\nこのカード名は？',
    options: [
      { optionId: '0', text: '大社長の卵' },
      { optionId: '1', text: '大物政治家の卵' },
      { optionId: '2', text: '超一流スポーツ選手の卵' },
      { optionId: '3', text: '大俳優の卵' },
      { optionId: '4', text: '大ギャンブラーの卵' },
    ],
  },
  {
    quizId: '490',
    question:
      'グリードアイランド編からの問題です。\n「罰を与えたい人の名前を\n唱えながらこのつえを天に\nかざすと 貴方が相手か 今まで\nより多くの悪業を成した方に\n強い災いがふりかかる」\nこのカード名は？',
    options: [
      { optionId: '0', text: '天罰のつえ' },
      { optionId: '1', text: '小悪魔のウインク' },
      { optionId: '2', text: '妖精王の忠告' },
      { optionId: '3', text: '死者への往復葉書' },
      { optionId: '4', text: '仕返し商店' },
    ],
  },
  {
    quizId: '491',
    question:
      'グリードアイランド編からの問題です。\n「長老の背伸び薬」は一粒飲むと何cm身長が伸びる？',
    options: [
      { optionId: '0', text: '1cm' },
      { optionId: '1', text: '0.5cm' },
      { optionId: '2', text: '2cm' },
      { optionId: '3', text: '5cm' },
      { optionId: '4', text: '0.1cm' },
    ],
  },
  {
    quizId: '492',
    question:
      'グリードアイランド編からの問題です。\nトレードショップで、買える情報は入手難易度が何ランクのカードまで？',
    options: [
      { optionId: '0', text: 'A' },
      { optionId: '1', text: 'S' },
      { optionId: '2', text: 'B' },
      { optionId: '3', text: 'C' },
      { optionId: '4', text: 'D' },
    ],
  },
  {
    quizId: '493',
    question:
      'グリードアイランド編からの問題です。\nリスキーダイス→宝籤（ロトリー）のコンボでゲットできるのは、入手難易度が何ランクのカードまで？',
    options: [
      { optionId: '0', text: 'A' },
      { optionId: '1', text: 'S' },
      { optionId: '2', text: 'B' },
      { optionId: '3', text: 'C' },
      { optionId: '4', text: 'D' },
    ],
  },
  {
    quizId: '494',
    question:
      'グリードアイランド編、ゲンスルー組とツェズゲラ組とがカードのトレードを行った時の問題です。\nこの時、ゲンスルー組は2枚のカードを使い相手のカードを盗みました。\nどういったコンボでツェズゲラ組のカードを盗んだ？',
    options: [
      { optionId: '0', text: '「リスキーダイス」と「税務長の篭手」' },
      { optionId: '1', text: '「リスキーダイス」と「宝籤」' },
      { optionId: '2', text: '「リスキーダイス」と「掏摸」' },
      { optionId: '3', text: '「リスキーダイス」と「窃盗」' },
      { optionId: '4', text: '「リスキーダイス」と「交換」' },
    ],
  },
  {
    quizId: '495',
    question:
      'グリードアイランド編、ゲンスルー組とツェズゲラ組とがカードのトレードを行った時の問題です。\nゲンスルー組の「闇のヒスイ」とツェズゲラ組の3種類のカードを交換しました。\nこの3枚のカードは何？',
    options: [
      { optionId: '0', text: '一坪の密林、神隠しの洞、手乗りドラゴン' },
      { optionId: '1', text: '一坪の密林、酒生みの泉、手乗りドラゴン' },
      { optionId: '2', text: '一坪の密林、酒生みの泉、７人の働く小人' },
      { optionId: '3', text: '手乗りドラゴン、酒生みの泉、７人の働く小人' },
      {
        optionId: '4',
        text: '手乗りドラゴン、ホルモンクッキー、７人の働く小人',
      },
    ],
  },
  {
    quizId: '496',
    question:
      'グリードアイランド編、ゲンスルー組とツェズゲラ組とがカードのトレードを行った時の問題です。\nこの時、ゲンスルー組は「リスキーダイス」と「税務長の篭手」のコンボを使いツェズゲラ組のカードを盗みました。\nゲンスルー組は、ツェズゲラ組が独占していたカードも2種類盗みました。\nその2種類のカード名は？',
    options: [
      { optionId: '0', text: '浮遊石、身代わりの鎧' },
      { optionId: '1', text: '超一流作家の卵、キングホワイトオオクワガタ' },
      { optionId: '2', text: '強制予約券、もしもテレビ' },
      { optionId: '3', text: '魔女の若返り薬、超一流作家の卵' },
      { optionId: '4', text: 'もしもテレビ、身代わりの鎧' },
    ],
  },
  {
    quizId: '497',
    question:
      'グリードアイランド編からの問題です。\n山林にいる山賊たちの病気を「聖騎士の首飾り」で治すともらえるカードは何？',
    options: [
      { optionId: '0', text: '奇運アレキサンドライト' },
      { optionId: '1', text: '美を呼ぶエメラルド' },
      { optionId: '2', text: '孤独なサファイヤ' },
      { optionId: '3', text: 'ブループラネット' },
      { optionId: '4', text: '一坪の海岸線' },
    ],
  },
  {
    quizId: '498',
    question:
      'グリードアイランド編からの問題です。\nカヅスールはゲンスルー組のクリアを阻止しようとしてメンバーを集めました。\nこの時集まったメンバーでないのは誰？',
    options: [
      { optionId: '0', text: 'ハガクシ組' },
      { optionId: '1', text: 'アスタ組' },
      { optionId: '2', text: 'ヤビビ組' },
      { optionId: '3', text: 'ハンゼ組' },
      { optionId: '4', text: 'ゴレイヌ' },
    ],
  },
  {
    quizId: '499',
    question:
      'グリードアイランド編からの問題です。\nキルアがカヅスールにランキングについて尋ねました。\nこの時、カヅスールが話した「ランキング」について正しい説明はどれ？',
    options: [
      {
        optionId: '0',
        text: 'ランキングで新しいプレイヤーの名前が分かっても交信コンタクトや透視フルラスコピーは使えない',
      },
      {
        optionId: '1',
        text: '知れるのはフリーポケットの枚数のみだが、別途料金で指定ポケットの枚数まで教えてくれる',
      },
      {
        optionId: '2',
        text: '同じトレードショップで50回以上買い物をすると、ランキングが聞けるようになる',
      },
      {
        optionId: '3',
        text: 'トレードショップで、プレーヤーのプレイ時間の長さをランキング形式で教えてくれる',
      },
      {
        optionId: '4',
        text: 'トレードショップでプレーヤーの倒した怪獣の数から強さをランキング形式で教えてくれる',
      },
    ],
  },
  {
    quizId: '500',
    question:
      'グリードアイランド編からの問題です。\nカヅスールはゲンスルー組のクリアを阻止しようとしてメンバーを集めました。\nメンバーが集まった時点で、ゲンスルーは96種所有していました。\n次のうち、ゲンスルー組がまだ所有していなかったカードはどれ？',
    options: [
      { optionId: '0', text: '豊作の樹' },
      { optionId: '1', text: '黄金るるぶ' },
      { optionId: '2', text: '幸福通帳' },
      { optionId: '3', text: 'きまぐれ魔人' },
      { optionId: '4', text: '妖精王の忠告' },
    ],
  },
  {
    quizId: '501',
    question:
      'グリードアイランド編からの問題です。\nカヅスールはゲンスルー組のクリアを阻止しようとしてメンバーを集めました。\nメンバーが集まった時点で、ゲンスルーは96種所有していました。\n次のうち、ゲンスルー組がまだ所有していなかったカードナンバーの組み合わせは？',
    options: [
      { optionId: '0', text: '000、2、9、75' },
      { optionId: '1', text: '000、3、15、75' },
      { optionId: '2', text: '000、2、35、78' },
      { optionId: '3', text: '000、3、9、78' },
      { optionId: '4', text: '000、2、9、85' },
    ],
  },
  {
    quizId: '502',
    question:
      'グリードアイランド編からの問題です。\n徴収（レヴィ）はある条件がそろっていれば効きません。\n条件とは？',
    options: [
      {
        optionId: '0',
        text: '堅牢（プリズン）1枚と複製（クローン）や擬態（トランスフォーム）を11枚',
      },
      { optionId: '1', text: '聖騎士の首飾りを身につけておく' },
      {
        optionId: '2',
        text: '信念の楯1枚と複製（クローン）や擬態（トランスフォーム）を11枚',
      },
      {
        optionId: '3',
        text: '聖水（ホーリーウォーター）1枚と複製（クローン）や擬態（トランスフォーム）を11枚',
      },
      {
        optionId: '4',
        text: '防壁（ディフェンシブウォール）1枚と複製（クローン）や擬態（トランスフォーム）を11枚',
      },
    ],
  },
  {
    quizId: '503',
    question:
      'グリードアイランド編からの問題です。\nゴン達がゲンスルーの能力と引き換えに、アスタと交換したカードは何？',
    options: [
      { optionId: '0', text: '「信念の楯」と「身重の石」' },
      { optionId: '1', text: '「不思議ヶ池」と「豊作の樹」' },
      { optionId: '2', text: '「きまぐれ魔人」と「妖精王の忠告」' },
      { optionId: '3', text: '「死者への往復葉書」と「ホルモンクッキー」' },
      { optionId: '4', text: '「カメレオンキャット」と「リサイクルーム」' },
    ],
  },
  {
    quizId: '504',
    question:
      'グリードアイランド編からの問題です。\n「信念の楯」を装備すると半径20メートルに入ったプレイヤーの4つのスペルを無効にします。\n無効にならないものを1つ選べ',
    options: [
      { optionId: '0', text: '離脱（リーブ）' },
      { optionId: '1', text: '左還（レルゲイト）' },
      { optionId: '2', text: '初心（テバーチャー）' },
      { optionId: '3', text: '漂流（ドリフト）' },
      { optionId: '4', text: '衝突（コリジョン）' },
    ],
  },
  {
    quizId: '505',
    question:
      'グリードアイランド編からの問題です。\n呪文スペルを使う方法を答えよ。\n（2種類あります）',
    options: [
      {
        optionId: '0',
        text: '「呪文を口で唱える方法」と「本の最後のページにカードをはめる方法」',
      },
      {
        optionId: '1',
        text: '「呪文を心で唱える方法」と「本の最初のページにカードをはめる方法」',
      },
      {
        optionId: '2',
        text: '「呪文を口で唱える方法」と「呪文を心で唱える方法」',
      },
      {
        optionId: '3',
        text: '「呪文を口で唱える方法」と「トレードショップに預けて一定時間後に作動させる方法」',
      },
      {
        optionId: '4',
        text: '「本の最後のページにカードをはめる方法」と「トレードショップに預けて一定時間後に作動させる方法」',
      },
    ],
  },
  {
    quizId: '506',
    question:
      'グリードアイランド編からの問題です。\nランクBの指定ポケットカードは、ある条件をクリアすると全部店で買えます。ある条件とは何？',
    options: [
      { optionId: '0', text: '同じトレードショップで50回以上買い物をする' },
      { optionId: '1', text: '顔パス回数券を持ってトレードショップへ行く' },
      {
        optionId: '2',
        text: 'トレードショップにお金を5千万ジェニー以上を預けてある時',
      },
      {
        optionId: '3',
        text: '一つのトレードショップでお金を500万ジェニー以上使う',
      },
      { optionId: '4', text: '全てのトレードショップで買い物をする' },
    ],
  },
  {
    quizId: '507',
    question:
      'グリードアイランド編からの問題です。\n「美を呼ぶエメラルド」と「不思議ヶ池」はあるカードを使うと楽に入手できます。\nあるカードとは？',
    options: [
      { optionId: '0', text: 'スケルトンメガネ' },
      { optionId: '1', text: '移り気リモコン' },
      { optionId: '2', text: '千年アゲハ' },
      { optionId: '3', text: '隠れ家不動産' },
      { optionId: '4', text: '闇のヒスイ' },
    ],
  },
  {
    quizId: '508',
    question:
      'グリードアイランド編からの問題です。\n一坪の海岸線がある街はどこ？',
    options: [
      { optionId: '0', text: 'ソウフラビ' },
      { optionId: '1', text: 'アンゴラ' },
      { optionId: '2', text: 'タンザニア' },
      { optionId: '3', text: 'バングラデシュ' },
      { optionId: '4', text: 'フィジー' },
    ],
  },
  {
    quizId: '509',
    question:
      'グリードアイランド編からの問題です。\n次の5人の内、ボポボと相撲対決をしたことがあるのは誰？',
    options: [
      { optionId: '0', text: 'ゼホ' },
      { optionId: '1', text: 'ジェイトサリ' },
      { optionId: '2', text: 'バッテラ' },
      { optionId: '3', text: 'ラターザ' },
      { optionId: '4', text: 'アーカ' },
    ],
  },
  {
    quizId: '510',
    question:
      'グリードアイランド編からの問題です。\nキルアがボポボに言ったセリフは次のうちどれ？',
    options: [
      { optionId: '0', text: 'おっさんオレけっこう強いけどどうする？' },
      { optionId: '1', text: 'オレの指ナイフより切れるから' },
      { optionId: '2', text: 'クセになってんだ、音殺して歩くの' },
      {
        optionId: '3',
        text: 'オレなら平気だよ、訓練してるから。毒じゃ死なない。',
      },
      { optionId: '4', text: 'オレに・・・何した？' },
    ],
  },
  {
    quizId: '511',
    question:
      'グリードアイランド編からの問題です。\n最初にレイザーと14人の悪魔と対決した時、ビスケは何の種目で対決した？',
    options: [
      { optionId: '0', text: 'リフティング' },
      { optionId: '1', text: 'ボクシング' },
      { optionId: '2', text: '相撲' },
      { optionId: '3', text: 'ボーリング' },
      { optionId: '4', text: 'バスケットボール' },
    ],
  },
  {
    quizId: '512',
    question:
      'グリードアイランド編からの問題です。\nゴン達のプレー直後にアントキバで、ボマーにより腹を吹き飛ばされて死んだプレイヤーの名前は？',
    options: [
      { optionId: '0', text: 'ジート' },
      { optionId: '1', text: 'ゼンジュ' },
      { optionId: '2', text: 'クズコ' },
      { optionId: '3', text: 'ハガクシ' },
      { optionId: '4', text: 'トクハロネ' },
    ],
  },
  {
    quizId: '513',
    question: 'グリードアイランド編からの問題です。\nベラム兄弟の名前は？',
    options: [
      { optionId: '0', text: 'ガシタとゼツク' },
      { optionId: '1', text: 'ムッタとヒビト' },
      { optionId: '2', text: 'ルフィーとエース' },
      { optionId: '3', text: 'サスケとイタチ' },
      { optionId: '4', text: 'ラオウとトキ' },
    ],
  },
  {
    quizId: '514',
    question:
      'グリードアイランド編から難易度マックスの問題です。\nキルアがゲームをプレイするときに設定したことのある名前は何？',
    options: [
      { optionId: '0', text: 'エバンス' },
      { optionId: '1', text: 'ライトニング' },
      { optionId: '2', text: 'ヴァン' },
      { optionId: '3', text: 'ティーダ' },
      { optionId: '4', text: 'ジタン' },
    ],
  },
  {
    quizId: '515',
    question:
      'グリードアイランド編、恋愛都市アイアイからの問題です。\nゴレイヌがぶつかった女と知り合うにはどうすれば良い？',
    options: [
      { optionId: '0', text: '口ゲンカする' },
      { optionId: '1', text: '不良から助けて上げる' },
      { optionId: '2', text: 'カットモデルをしてあげる' },
      { optionId: '3', text: '悩みを聞いてあげる' },
      { optionId: '4', text: '本を取る時手が触れ合う' },
    ],
  },
  {
    quizId: '516',
    question:
      'グリードアイランド編から難易度マックスの問題です。\n恋愛都市アイアイでゴンはゲームの設定と知らずに悪い奴に絡まれている女の子を助けようとしました。（結局キルアとビスケに止められるが）\nこの時、女の子に絡んでいた男達の集団名は何？',
    options: [
      { optionId: '0', text: 'ダンダ団' },
      { optionId: '1', text: 'コドラ団' },
      { optionId: '2', text: 'アルミラージ団' },
      { optionId: '3', text: 'サターンヘルム団' },
      { optionId: '4', text: 'ギャオース団' },
    ],
  },
  {
    quizId: '517',
    question:
      'グリードアイランド編からの問題です。\n交信（コンタクト）は一度会ったプレイヤーでないとできません。\nゴンたちはツェズゲラと会ったことがなかったが、交信（コンタクト）をしました。\nツェズゲラと交信（コンタクト）をどのようにしておこなった？',
    options: [
      {
        optionId: '0',
        text: 'ヒソカがツェズゲラと会ったことが会ったので代わりに呪文を唱えてもらった',
      },
      {
        optionId: '1',
        text: 'トレードショップのランキングで名前を確認し、バインダーに登録した',
      },
      {
        optionId: '2',
        text: 'ゴレイヌがツェズゲラと会ったことが会ったので代わりに呪文を唱えてもらった',
      },
      {
        optionId: '3',
        text: 'トレードショップでお金を払い、バインダーに登録してもらった',
      },
      {
        optionId: '4',
        text: '衝突（コリジョン）でたまたまツェズゲラの元へ飛べた',
      },
    ],
  },
  {
    quizId: '518',
    question:
      'グリードアイランド編からの問題です。\nツェズゲラの垂直跳びのベストは？',
    options: [
      { optionId: '0', text: '16m80cm' },
      { optionId: '1', text: '19m50cm' },
      { optionId: '2', text: '10m5cm' },
      { optionId: '3', text: '12m80cm' },
      { optionId: '4', text: '9m80cm' },
    ],
  },
  {
    quizId: '519',
    question:
      'グリードアイランド編からの問題です。\nゴンたちがレイザーと14人の悪魔と対決した時（ヒソカ参加時）、レイザー軍とボーリング対決をしたのは誰？',
    options: [
      { optionId: '0', text: 'ロドリオット' },
      { optionId: '1', text: 'ケスー' },
      { optionId: '2', text: 'バリー' },
      { optionId: '3', text: 'ゼホ' },
      { optionId: '4', text: 'バラ' },
    ],
  },
  {
    quizId: '520',
    question:
      'グリードアイランド編からの問題です。\nゴンたちがレイザーと14人の悪魔と対決した時（ヒソカ参加時）、レイザー軍とフリースロー対決をしたのは誰？',
    options: [
      { optionId: '0', text: 'ケスー' },
      { optionId: '1', text: 'ロドリオット' },
      { optionId: '2', text: 'バリー' },
      { optionId: '3', text: 'ゼホ' },
      { optionId: '4', text: 'サブ' },
    ],
  },
  {
    quizId: '521',
    question:
      'グリードアイランド編、レイザーとのドッチボール対決からの問題です。\nこのドッチボールは外野を一人の状態で始めますが、ゴン達チームの最初から外野だったのは誰？',
    options: [
      { optionId: '0', text: 'ゴレイヌの念獣（白）' },
      { optionId: '1', text: 'ゴレイヌの念獣（黒）' },
      { optionId: '2', text: 'ゴレイヌの念獣（赤）' },
      { optionId: '3', text: 'ゴレイヌの念獣（青）' },
      { optionId: '4', text: 'ゴレイヌの念獣（緑）' },
    ],
  },
  {
    quizId: '522',
    question:
      'グリードアイランド編、レイザーとのドッチボール対決からの問題です。\nゴンチームは誰がジャンプボールを行った？',
    options: [
      { optionId: '0', text: 'キルア' },
      { optionId: '1', text: 'ゴン' },
      { optionId: '2', text: 'ゴレイヌ' },
      { optionId: '3', text: 'ツェズゲラ' },
      { optionId: '4', text: 'ヒソカ' },
    ],
  },
  {
    quizId: '523',
    question:
      'グリードアイランド編、レイザーとのドッチボール対決からの問題です。\nレイザーに狙われたゴレイヌは次のように感じました。\n「強・・・・・・！速・・・避・・・・・・無理！！受け止める無事で！？出来る！？」\n続く言葉は？',
    options: [
      { optionId: '0', text: '否 死' },
      { optionId: '1', text: '来い！受けてやる！！' },
      { optionId: '2', text: '出来るさ！やってやる！' },
      { optionId: '3', text: 'いや、出来るさ！！俺は逃げない！！' },
      {
        optionId: '4',
        text: '逃げちゃダメだ。逃げちゃダメだ。逃げちゃダメだ。',
      },
    ],
  },
  {
    quizId: '524',
    question:
      'グリードアイランド編、レイザーとのドッチボール対決からの問題です。\n試合の途中でレイザーの念獣6と7は合体しました。何番になった？',
    options: [
      { optionId: '0', text: '13' },
      { optionId: '1', text: '67' },
      { optionId: '2', text: '8' },
      { optionId: '3', text: '1' },
      { optionId: '4', text: '11' },
    ],
  },
  {
    quizId: '525',
    question:
      'グリードアイランド編からの問題です。\n次のうち、「聖騎士の首飾り」についての説明として誤っているものを選べ。',
    options: [
      { optionId: '0', text: '入手難易度はBである' },
      {
        optionId: '1',
        text: 'ゴンたちは１月のアントキバ月例大会で優勝して手に入れた',
      },
      { optionId: '2', text: '身につけると贋作（フェイク）を見破ってくれる' },
      {
        optionId: '3',
        text: '身につけると複製（クローン）や擬態（トレンスフォーム）で変身した有効なカードも解呪されてしまう',
      },
      {
        optionId: '4',
        text: '身につけると常に反射（リフレクション）の効果を持つ',
      },
    ],
  },
  {
    quizId: '526',
    question:
      'グリードアイランド編からの問題です。\n次の5人のうち、ゲンスルー以外に殺害されたプレイヤーは誰？',
    options: [
      { optionId: '0', text: 'ラターザ' },
      { optionId: '1', text: 'アマナ' },
      { optionId: '2', text: 'アスタ' },
      { optionId: '3', text: 'マンヘイム' },
      { optionId: '4', text: 'スウヘイル' },
    ],
  },
  {
    quizId: '527',
    question:
      'グリードアイランド編からの問題です。\n旅団は誰の能力を使い除念師を見つけた？',
    options: [
      { optionId: '0', text: 'カルトの能力' },
      { optionId: '1', text: 'コルトピの能力' },
      { optionId: '2', text: 'ボノレノフの能力' },
      { optionId: '3', text: 'ヒソカの能力' },
      { optionId: '4', text: 'ノブナガの能力' },
    ],
  },
  {
    quizId: '528',
    question:
      'グリードアイランド編からの問題です。\n「大天使の息吹と交換することができる券/大天使の息吹のカード化限度枚数がMAXの時のみ手に入れることができる」\nこのカード名は？',
    options: [
      { optionId: '0', text: '引き換え券' },
      { optionId: '1', text: '大天使の卵' },
      { optionId: '2', text: '交換待ち券' },
      { optionId: '3', text: '小天使の息吹' },
      { optionId: '4', text: '握手券' },
    ],
  },
  {
    quizId: '529',
    question:
      'ビスケの能力である、具現化されたマッサージを得意とする魔法美容師の名前は？',
    options: [
      { optionId: '0', text: 'クッキィ' },
      { optionId: '1', text: 'ジュン' },
      { optionId: '2', text: 'ツバサ' },
      { optionId: '3', text: 'リカコ' },
      { optionId: '4', text: 'ミキィ' },
    ],
  },
  {
    quizId: '530',
    question:
      'グリードアイランド編からの問題です。\nツェズゲラと共に行動していた「ドッブル」\n彼はどのような能力を使える？',
    options: [
      { optionId: '0', text: '相手の位置を知ることができる能力' },
      {
        optionId: '1',
        text: '一度会ったことがある人のもとへ飛ぶことができる能力（死んでいたらできない）',
      },
      {
        optionId: '2',
        text: '体内に入った毒を抜くことができる能力（風邪等のウィルスにも使える）',
      },
      { optionId: '3', text: '相手の能力を知ることができる能力' },
      {
        optionId: '4',
        text: '部屋の温度を瞬時に＋-10度変更することができる能力（屋外は不可）',
      },
    ],
  },
  {
    quizId: '531',
    question:
      'グリードアイランド編からの問題です。\nツェズゲラと共に行動していた「ドッブル」\n彼はレーダーを具現化する能力者で相手の位置を知ることができます。\nこの能力名は？',
    options: [
      { optionId: '0', text: 'サイレントワーカー' },
      { optionId: '1', text: 'サーチフロムエー' },
      { optionId: '2', text: 'タウンワークサーチ' },
      { optionId: '3', text: 'ハロワーク' },
      { optionId: '4', text: 'サイレントアン' },
    ],
  },
  {
    quizId: '532',
    question:
      'グリードアイランド編からの問題です。\nツェズゲラと共に行動していた「ドッブル」\n彼はレーダーを具現化する能力者で相手の位置を知ることができます。\nこの能力名は？',
    options: [
      { optionId: '0', text: '蝿の仕事' },
      { optionId: '1', text: '千里眼の蛇' },
      { optionId: '2', text: '超複眼' },
      { optionId: '3', text: '淋しい深海魚' },
      { optionId: '4', text: '謝債発行機' },
    ],
  },
  {
    quizId: '533',
    question:
      'グリードアイランド編からの問題です。\nヒソカは、マチに「ボクが団長を殺したら？」と尋ねました。\nマチはなんと答えた？',
    options: [
      { optionId: '0', text: 'どこまでも追いかけてあたしがアンタを殺す' },
      { optionId: '1', text: 'アンタが旅団の団長に変わるだけのこと' },
      { optionId: '2', text: 'それ、笑えない冗談ね' },
      {
        optionId: '3',
        text: 'できるわけないわ。できたらアンタに私は何でもしてあげるわよ',
      },
      { optionId: '4', text: '何もしないわよ。復讐とかに興味はないもの' },
    ],
  },
  {
    quizId: '534',
    question:
      'グリードアイランド編からの問題です。\nゲンスルーと戦う前まで、ゴンは指定ポケットカードを何種類もっていた？',
    options: [
      { optionId: '0', text: '71種類' },
      { optionId: '1', text: '65種類' },
      { optionId: '2', text: '95種類' },
      { optionId: '3', text: '68種類' },
      { optionId: '4', text: '73種類' },
    ],
  },
  {
    quizId: '535',
    question:
      'グリードアイランド編からの問題です。\nゴンと戦う前までゲンスルーは指定ポケットカードを何種類持っていた？',
    options: [
      { optionId: '0', text: '97種類' },
      { optionId: '1', text: '98種類' },
      { optionId: '2', text: '96種類' },
      { optionId: '3', text: '95種類' },
      { optionId: '4', text: '94種類' },
    ],
  },
  {
    quizId: '536',
    question:
      'グリードアイランド編からの問題です。\nゴンたちはゲンスルー組と戦うことになりました。\nこの時、ビスケは誰と戦った？',
    options: [
      { optionId: '0', text: 'バラ' },
      { optionId: '1', text: 'サブ' },
      { optionId: '2', text: 'ゼホ' },
      { optionId: '3', text: 'バリー' },
      { optionId: '4', text: 'ケスー' },
    ],
  },
  {
    quizId: '537',
    question:
      'グリードアイランド編からの問題です。\nゴンたちはゲンスルー組と戦うことになりました。\nこの時、キルアは誰と戦った？',
    options: [
      { optionId: '0', text: 'サブ' },
      { optionId: '1', text: 'バラ' },
      { optionId: '2', text: 'ゼホ' },
      { optionId: '3', text: 'バリー' },
      { optionId: '4', text: 'ケスー' },
    ],
  },
  {
    quizId: '538',
    question:
      'グリードアイランド編からの問題です。\nゴン、キルア、ビスケとゲンスルー、サブ、バラは戦うことになりました。\nビスケとバラは同行（アカンパニー）でどこへ移動した？',
    options: [
      { optionId: '0', text: 'ソウフラビ' },
      { optionId: '1', text: 'ソニア' },
      { optionId: '2', text: 'ジョーカー' },
      { optionId: '3', text: 'ソラヤ' },
      { optionId: '4', text: 'イカルス' },
    ],
  },
  {
    quizId: '539',
    question:
      'グリードアイランド編からの難易度マックスの問題です。\nバラの身長は？',
    options: [
      { optionId: '0', text: '176cm' },
      { optionId: '1', text: '182cm' },
      { optionId: '2', text: '173cm' },
      { optionId: '3', text: '179cm' },
      { optionId: '4', text: '185cm' },
    ],
  },
  {
    quizId: '540',
    question:
      'グリードアイランド編からの問題です。\nビスケはなぜ真の姿を隠すのですか？\nバラとの会話の中から答えよ。',
    options: [
      { optionId: '0', text: '1切り札は隠すものだから\n2元の姿が嫌だから' },
      {
        optionId: '1',
        text: '1好きになった相手が子供だったから\n2小さい乗り物に乗れないから',
      },
      {
        optionId: '2',
        text: '1好きになった相手が子供だったから\n2切り札は隠すものだから',
      },
      {
        optionId: '3',
        text: '1小さい乗り物に乗れないから\n2切り札は隠すものだから',
      },
      {
        optionId: '4',
        text: '1女は綺麗でいたい生き物だから\n2小さい建物に入れないから',
      },
    ],
  },
  {
    quizId: '541',
    question:
      'グリードアイランド編からの問題です。\nキルアはサブとの試合で色々な技を試しました。\nキルアの使った「実験その1」の「イズツシ」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '雷掌' },
      { optionId: '1', text: '落雷' },
      { optionId: '2', text: '電光石火' },
      { optionId: '3', text: '疾風迅' },
      { optionId: '4', text: '神速' },
    ],
  },
  {
    quizId: '542',
    question:
      'グリードアイランド編からの問題です。\nバッテラ氏は恋人の病気を治せるアイテムを手に入れるために、多額のお金をかけてグリードアイランドを買い占めました。そして優秀なハンターを雇い、ゲームクリアを目指していました。しかし、バッテラ氏の恋人は死んでしまいました。そのことにより、バッテラ氏はゲームクリアはどうでも良くなり、ゲームクリアを投げました。違約金としてツェズゲラ組にいくら払った？',
    options: [
      { optionId: '0', text: '成功報酬の7割' },
      { optionId: '1', text: '40億' },
      { optionId: '2', text: '成功報酬の5割' },
      { optionId: '3', text: '一人に付き10億' },
      { optionId: '4', text: '成功報酬の3割' },
    ],
  },
  {
    quizId: '543',
    question:
      'グリードアイランド編からの問題です。\nバッテラ氏は恋人の病気を治せるアイテムを手に入れるために、多額のお金をかけてグリードアイランドを買い占めました。そして優秀なハンターを雇い、ゲームクリアを目指していました。しかし、バッテラ氏の恋人は死んでしまいました。そのことにより、バッテラ氏はゲームクリアはどうでも良くなり、ゲームクリアを投げました。違約金としてゴレイヌにいくら払った？（そのもらった額をゴン、ビスケ、キルア、ゴレイヌの4人で4等分した）',
    options: [
      { optionId: '0', text: '40億' },
      { optionId: '1', text: '80億' },
      { optionId: '2', text: '120億' },
      { optionId: '3', text: '160億' },
      { optionId: '4', text: '200億' },
    ],
  },
  {
    quizId: '544',
    question:
      'グリードアイランド編からの問題です。\n「瀕死の重傷 不治の病なんでも一息で直してくれる天使\nただし姿を現してれるのはたった一度だけ」\nこのカード名は？',
    options: [
      { optionId: '0', text: '大天使の息吹' },
      { optionId: '1', text: '大天使の囁き' },
      { optionId: '2', text: '大天使の施し' },
      { optionId: '3', text: '大天使の救い' },
      { optionId: '4', text: '大天使の魔法' },
    ],
  },
  {
    quizId: '545',
    question:
      'グリードアイランド編からの問題です。\nゴンが本（バインダー）の指定ポケットにはめた99種目のカードは何？\n（直後にNo000を賭けたクイズ大会が始まった）',
    options: [
      { optionId: '0', text: 'メイドパンダ' },
      { optionId: '1', text: 'ジャイアントパンダ' },
      { optionId: '2', text: 'レッサーパンダ' },
      { optionId: '3', text: 'カトパンダ' },
      { optionId: '4', text: 'ショーパンダ' },
    ],
  },
  {
    quizId: '546',
    question:
      'グリードアイランド編からの問題です。\nゴンが本（バインダー）に99種目をはめてから何分後にクイズ大会は始まった？',
    options: [
      { optionId: '0', text: '10分後' },
      { optionId: '1', text: '30分後' },
      { optionId: '2', text: '5分後' },
      { optionId: '3', text: '3分後' },
      { optionId: '4', text: '50分後' },
    ],
  },
  {
    quizId: '547',
    question:
      'グリードアイランド編からの問題です。\n大天使の息吹を入手するための条件は？',
    options: [
      { optionId: '0', text: 'スペルカード40種全部を集める' },
      { optionId: '1', text: '99種類の指定ポケットを集める' },
      { optionId: '2', text: 'スペルカード40種を全てを1回以上使う' },
      { optionId: '3', text: '100種類の指定ポケットを集める' },
      { optionId: '4', text: 'レイザーと悪魔の14人を倒す' },
    ],
  },
  {
    quizId: '548',
    question:
      'グリードアイランド編からの問題です。\n聖騎士の首飾りが商品となったアントキバ月例大会は何月？',
    options: [
      { optionId: '0', text: '1月' },
      { optionId: '1', text: '9月' },
      { optionId: '2', text: '3月' },
      { optionId: '3', text: '5月' },
      { optionId: '4', text: '7月' },
    ],
  },
  {
    quizId: '549',
    question: 'グリードアイランド編からの問題です。\nNo.000のタイトルは？',
    options: [
      { optionId: '0', text: '支配者の祝福' },
      { optionId: '1', text: '支配者の祝宴' },
      { optionId: '2', text: '支配者の招待' },
      { optionId: '3', text: '支配者の歓待' },
      { optionId: '4', text: '支配者の歓喜' },
    ],
  },
  {
    quizId: '550',
    question:
      'グリードアイランド編からの問題です。\nゴンが99種の指定カードを集めた直後にクイズ大会が始まりました。\nこのクイズ大会での最高得点はゴンでした。ゴンは何点だった？（100点満点）',
    options: [
      { optionId: '0', text: '87点' },
      { optionId: '1', text: '95点' },
      { optionId: '2', text: '85点' },
      { optionId: '3', text: '93点' },
      { optionId: '4', text: '78点' },
    ],
  },
  {
    quizId: '551',
    question:
      'グリードアイランド編からの問題です。\nゴンたちは、城下町リーメイロにはどのようにいった？',
    options: [
      {
        optionId: '0',
        text: 'キルアが漂流（ドリフト）を使って一度行き、そのあと同行（アカンパニー）を使い3人で行った',
      },
      {
        optionId: '1',
        text: 'ヒソカが一度いったことがある街だったので同行（アカンパニー）で一緒にいった',
      },
      {
        optionId: '2',
        text: '最寄りの街まで同行（アカンパニー）で飛び、走って向かった（50km程）',
      },
      {
        optionId: '3',
        text: 'ゴレイヌが城下町にいるので、磁力（マグネティックフォース）で行った',
      },
      {
        optionId: '4',
        text: '衝突（コリジョン）を、城下町に飛ぶまで使い続けた',
      },
    ],
  },
  {
    quizId: '552',
    question: 'グリードアイランド編からの問題です。\n城下町の読み方は？',
    options: [
      { optionId: '0', text: 'リーメイロ' },
      { optionId: '1', text: 'ファンタジーランド' },
      { optionId: '2', text: 'クリッターカントリー' },
      { optionId: '3', text: 'ウエスタンランド' },
      { optionId: '4', text: 'トゥーンタウン' },
    ],
  },
  {
    quizId: '553',
    question:
      'グリードアイランド編からの問題です。\n「この島の支配者からの招待状\n城の場所を示した地図とバッチが同封されており\nそれを持つ者のみが入城を\n許される」\nこのカード名は？',
    options: [
      { optionId: '0', text: '支配者からの招待' },
      { optionId: '1', text: '支配者からの祝福' },
      { optionId: '2', text: '支配者からの祝宴' },
      { optionId: '3', text: '支配者からの歓待' },
      { optionId: '4', text: '支配者からの歓喜' },
    ],
  },
  {
    quizId: '554',
    question:
      'グリードアイランド編からの問題です。\n「GREED ISLANDO」という名前は製作者全員のファーストネームの頭文字をとってつけました。Lは誰？',
    options: [
      { optionId: '0', text: 'リスト' },
      { optionId: '1', text: 'リカルオ' },
      { optionId: '2', text: 'レイザー' },
      { optionId: '3', text: 'リンク' },
      { optionId: '4', text: 'レン' },
    ],
  },
  {
    quizId: '555',
    question:
      'グリードアイランド編からの問題です。\nゲーム最初に説明してた女性と島外へ出る港にいた女性は双子です。\n名前は？',
    options: [
      { optionId: '0', text: 'エレナとイータ' },
      { optionId: '1', text: 'サクラとキク' },
      { optionId: '2', text: 'ギュウとラム' },
      { optionId: '3', text: 'エリとアイ' },
      { optionId: '4', text: 'メーサとリカコ' },
    ],
  },
  {
    quizId: '556',
    question:
      'グリードアイランド編からの問題です。\nゲームマスターの1人ドゥーンの改名前の名前のスペルは？',
    options: [
      { optionId: '0', text: 'WDWUNE' },
      { optionId: '1', text: 'WDUNE' },
      { optionId: '2', text: 'WDUN' },
      { optionId: '3', text: 'DWUN' },
      { optionId: '4', text: 'WDWUN' },
    ],
  },
  {
    quizId: '557',
    question:
      'グリードアイランド編からの問題です。\nゲームマスターの1人ドゥーンの名前のスペルは「WDWUNE」でした。\nしかしドゥーンは、ジンにゲーム名の辻褄合わせのために改名させられました。\n改名後のスペルは？',
    options: [
      { optionId: '0', text: 'DWUN' },
      { optionId: '1', text: 'DWUNE' },
      { optionId: '2', text: 'DUNE' },
      { optionId: '3', text: 'DONE' },
      { optionId: '4', text: 'DOON' },
    ],
  },
  {
    quizId: '558',
    question:
      'グリードアイランド編からの問題です。\nゲームをクリアしたゴンたちは現実世界にアイテムを3つ持ち帰りました。\nビスケが持ち帰ったカードは何？',
    options: [
      { optionId: '0', text: 'ブループラネット' },
      { optionId: '1', text: 'レッドプレネット' },
      { optionId: '2', text: 'ホワイトプラネット' },
      { optionId: '3', text: 'グリーンプラネット' },
      { optionId: '4', text: 'ブラックプラネット' },
    ],
  },
  {
    quizId: '559',
    question:
      'グリードアイランド編からの問題です。\nゲームをクリアしたゴンたちは現実世界にアイテムを3つ持ち帰りました。\n持ち帰った3つのカードは何？',
    options: [
      { optionId: '0', text: '一坪の海岸線、ブループラネット、聖騎士の首飾り' },
      { optionId: '1', text: '一坪の密林、ブループラネット、聖騎士の首飾り' },
      { optionId: '2', text: 'きまぐれ魔人、ブループラネット、リスキーダイス' },
      { optionId: '3', text: '一坪の密林、魔女の若返り薬、聖騎士の首飾り' },
      {
        optionId: '4',
        text: '魔女の媚薬、マッド博士の整形マシーン、レインボーダイヤ',
      },
    ],
  },
  {
    quizId: '560',
    question:
      'グリードアイランド編からの問題です。\n半径20m以内に入った人物はバインダーに名前が記憶されます。\nゴンの本（バインダー）に一番に書かれていた名前は？',
    options: [
      { optionId: '0', text: 'ニッグ' },
      { optionId: '1', text: 'ゴレイヌ' },
      { optionId: '2', text: 'ジン' },
      { optionId: '3', text: 'ジッグ' },
      { optionId: '4', text: 'グッジ' },
    ],
  },
  {
    quizId: '561',
    question:
      'グリードアイランドクリア後からの問題です。\n「ジンに会ったらまずなにをする？」とビスケに聞かれたゴンは何と答えた？',
    options: [
      {
        optionId: '0',
        text: 'もちろんキルアを紹介するよ！\n「オレの最高の友達」だって！！',
      },
      { optionId: '1', text: '一発ぶん殴ってやる！！' },
      { optionId: '2', text: 'そうだね。まずはカイトの件を謝る！' },
      { optionId: '3', text: 'まずは、ジンが今何をしているか聞く！' },
      { optionId: '4', text: '産んでくれてありがとう！って言う！' },
    ],
  },
  {
    quizId: '562',
    question:
      'グリードアイランドをクリアしたゴンとキルアは同行（アカンパニー）でカイトの元へ飛びました。この時カイトがいた場所はどこ？',
    options: [
      { optionId: '0', text: 'カキン国の奥地' },
      { optionId: '1', text: 'ヨークシンの郊外' },
      { optionId: '2', text: 'パトギア共和国の山' },
      { optionId: '3', text: 'ハス共和国の奥地' },
      { optionId: '4', text: 'ロカリオ共和国の市街地' },
    ],
  },
  {
    quizId: '563',
    question:
      'カイトと一緒にカキン国の奥地で生物調査をしていたメンバーからの問題です。\n3年間の新種発見数が1019種と、メンバーの中でトップであり、メガネをかけた小柄な男の名前は？',
    options: [
      { optionId: '0', text: 'リン＝コウシ' },
      { optionId: '1', text: 'スピーナ＝クロウ' },
      { optionId: '2', text: 'モンタ＝ユーラス' },
      { optionId: '3', text: 'ポドンゴ＝ラポイ' },
      { optionId: '4', text: 'バナナ＝カヴァーオ' },
    ],
  },
  {
    quizId: '564',
    question:
      'カイトと一緒にカキン国の奥地で生物調査をしていたメンバーからの問題です。\nメンバーの中で一番背が大きいのは誰？',
    options: [
      { optionId: '0', text: 'モンタ＝ユーラス' },
      { optionId: '1', text: 'リン＝コウシ' },
      { optionId: '2', text: 'スティック＝ディナー' },
      { optionId: '3', text: 'ポドンゴ＝ラポイ' },
      { optionId: '4', text: 'バナナ＝カヴァーオ' },
    ],
  },
  {
    quizId: '565',
    question:
      'カイトと一緒にカキン国の奥地で生物調査をしていたメンバーからの問題です。\n頻繁にダジャレを言っては「ヤハハハ」と笑っている人物の名前は？',
    options: [
      { optionId: '0', text: 'スティック＝ディナー' },
      { optionId: '1', text: 'リン＝コウシ' },
      { optionId: '2', text: 'モンタ＝ユーラス' },
      { optionId: '3', text: 'ポドンゴ＝ラポイ' },
      { optionId: '4', text: 'バナナ＝カヴァーオ' },
    ],
  },
  {
    quizId: '566',
    question:
      'カイトと一緒にカキン国の奥地で生物調査をしていたメンバーからの問題です。\n鼻がよく効く犬のような動物を飼っている人物の名前は？',
    options: [
      { optionId: '0', text: 'バナナ＝カヴァーオ' },
      { optionId: '1', text: 'リン＝コウシ' },
      { optionId: '2', text: 'モンタ＝ユーラス' },
      { optionId: '3', text: 'ポドンゴ＝ラポイ' },
      { optionId: '4', text: 'スピーナ＝クロウ' },
    ],
  },
  {
    quizId: '567',
    question:
      'カイトと一緒にカキン国の奥地で生物調査をしていたメンバーからの問題です。\nスピーナ＝クロウと幼馴染なのはメンバーのうち誰？',
    options: [
      { optionId: '0', text: 'スティック＝ディナー' },
      { optionId: '1', text: 'リン＝コウシ' },
      { optionId: '2', text: 'モンタ＝ユーラス' },
      { optionId: '3', text: 'ポドンゴ＝ラポイ' },
      { optionId: '4', text: 'バナナ＝カヴァーオ' },
    ],
  },
  {
    quizId: '568',
    question:
      'カイトと一緒にカキン国の奥地で生物調査をしていたメンバーから、難易度マックスの問題です。\nリン＝コウシは3年間で何匹の新種を発見した？',
    options: [
      { optionId: '0', text: '1,019種類' },
      { optionId: '1', text: '505種類' },
      { optionId: '2', text: '3,214種類' },
      { optionId: '3', text: '89種類' },
      { optionId: '4', text: '957種類' },
    ],
  },
  {
    quizId: '569',
    question:
      'カイトと一緒にカキン国の奥地で生物調査をしていた時からの問題です。\n新種を発見した数のトップはリン＝コウシで1019種類。\nビリはカイトです。\nカイトは3年で何種類見つけた？',
    options: [
      { optionId: '0', text: '68種類' },
      { optionId: '1', text: '4種類' },
      { optionId: '2', text: '15種類' },
      { optionId: '3', text: '25種類' },
      { optionId: '4', text: '57種類' },
    ],
  },
  {
    quizId: '570',
    question: 'カイトが発見した、新種「火を使う虎」の名前は？',
    options: [
      { optionId: '0', text: 'キャンプタイガー' },
      { optionId: '1', text: 'ファイヤータイガー' },
      { optionId: '2', text: 'ブレイズタイガー' },
      { optionId: '3', text: 'バーンファイヤー' },
      { optionId: '4', text: 'クロスフレイムタイガー' },
    ],
  },
  {
    quizId: '571',
    question:
      'カイトと一緒にカキン国の奥地で生物調査をしていた時からの問題です。\n次のうち、スティック＝ディナーが作中で言ったダジャレはどれ？',
    options: [
      { optionId: '0', text: '才能才能うるサイノー' },
      { optionId: '1', text: 'プリンは栄養たっプリン' },
      { optionId: '2', text: 'あそこのソーダやさんおいしそーだ' },
      { optionId: '3', text: '妖怪に何かようかい？' },
      { optionId: '4', text: '金曜日のおかずはフライでー' },
    ],
  },
  {
    quizId: '572',
    question:
      'カイトと一緒にカキン国の奥地で生物調査をしていた時からの問題です。\n次のうち、スティック＝ディナーが言ったダジャレはどれ？',
    options: [
      { optionId: '0', text: '意義なし！！ってイキナシ笑える' },
      { optionId: '1', text: 'アルミ缶の上に、あるみかん' },
      { optionId: '2', text: '馬の肉はうまい' },
      { optionId: '3', text: 'ナイスな椅子' },
      { optionId: '4', text: '刀を買ったな' },
    ],
  },
  {
    quizId: '573',
    question:
      'カイトと一緒にカキン国の奥地で生物調査をしていた時からの問題です。\n次のうち、スティック＝ディナーが言ったダジャレはどれ？',
    options: [
      { optionId: '0', text: '一回でかいでね' },
      { optionId: '1', text: '石が落ちた。ストーン！' },
      { optionId: '2', text: 'ナイスじゃないっす' },
      { optionId: '3', text: 'ドイツ人はどいつ' },
      { optionId: '4', text: 'おばちゃんが川にお・ばちゃーん' },
    ],
  },
  {
    quizId: '574',
    question: 'キメラアント編からの問題です。\nレイナは何才の時に殺された？',
    options: [
      { optionId: '0', text: '5才' },
      { optionId: '1', text: '4才' },
      { optionId: '2', text: '6才' },
      { optionId: '3', text: '7才' },
      { optionId: '4', text: '8才' },
    ],
  },
  {
    quizId: '575',
    question:
      'キメラアント編からの問題です。\nNGL自治国、ロカリオ共和国、ハス共和国、西ゴルドー共和国、東ゴルドー共和国の5つの国からなる連邦の名前は？',
    options: [
      { optionId: '0', text: 'ミテネ連邦' },
      { optionId: '1', text: 'ネテロ連邦' },
      { optionId: '2', text: 'アテネ連邦' },
      { optionId: '3', text: 'コロナ連邦' },
      { optionId: '4', text: 'アロネ連邦' },
    ],
  },
  {
    quizId: '576',
    question: 'キメラアント編からの問題です。\nNGL自治国のNGLは何の略称？',
    options: [
      { optionId: '0', text: 'ネオグリーンライフ' },
      { optionId: '1', text: 'ネオガラパゴスライフ' },
      { optionId: '2', text: 'ネイチャーグリーンライフ' },
      { optionId: '3', text: 'ノットグローバルリンクス' },
      { optionId: '4', text: 'ノットグローバルライフ' },
    ],
  },
  {
    quizId: '577',
    question:
      'キメラアント編の舞台は、ミテネ連邦があるNGL共和国や東ゴルドー共和国でした。\nミテネ連邦は、計5つの国から構成されています。\nNGL自治国、ロカリオ共和国、ハス共和国、東ゴルドー共和国\n残り1つは何？',
    options: [
      { optionId: '0', text: '西ゴルドー共和国' },
      { optionId: '1', text: '北ゴルドー共和国' },
      { optionId: '2', text: 'エフォード自治国' },
      { optionId: '3', text: 'ローラ共和国' },
      { optionId: '4', text: 'マスク共和国' },
    ],
  },
  {
    quizId: '578',
    question: 'キメラアント編の舞台となったNGL自治国の人口は？',
    options: [
      { optionId: '0', text: '217万人' },
      { optionId: '1', text: '40万人' },
      { optionId: '2', text: '84万人' },
      { optionId: '3', text: '18万人' },
      { optionId: '4', text: '78万人' },
    ],
  },
  {
    quizId: '579',
    question:
      'キメラアント編から、難易度マックスの問題です。\nある時、NGLに潜伏取材を試みたTVクルー3名が捕まり、1人が処刑で2人は拘留されました。\nこれは、いつの出来事？',
    options: [
      { optionId: '0', text: '1987年' },
      { optionId: '1', text: '1875年' },
      { optionId: '2', text: '1978年' },
      { optionId: '3', text: '1976年' },
      { optionId: '4', text: '1985年' },
    ],
  },
  {
    quizId: '580',
    question:
      'キメラアント編からの問題です。\nキメラアントの調査としてNGLへ入国したのは5人でした。\nカイト、ゴン、キルア。あと二人は誰？',
    options: [
      { optionId: '0', text: 'ポドンゴ＝ラポイ、スティック＝ディナー' },
      { optionId: '1', text: 'バナナ＝カヴァーオ、ポドンゴ＝ラポイ' },
      { optionId: '2', text: 'バナナ＝カヴァーオ、リン＝コウシ' },
      { optionId: '3', text: 'スピーナ＝クロウ、モンタ＝ユーラス' },
      { optionId: '4', text: 'モンタ＝ユーラス、ポドンゴ＝ラポイ' },
    ],
  },
  {
    quizId: '581',
    question:
      'キメラアント編からの問題です。\nNGLでの交通手段は主に馬です。そのため、カイトやゴン達は馬をレンタルしました。\n1馬いくらでレンタルした？',
    options: [
      { optionId: '0', text: '12,000ジェニー' },
      { optionId: '1', text: '500ジェニー' },
      { optionId: '2', text: '800ジェニー' },
      { optionId: '3', text: '1,500ジェニー' },
      { optionId: '4', text: '2,200ジェニー' },
    ],
  },
  {
    quizId: '582',
    question:
      'キメラアント編からの問題です。\nNGLでの交通手段は主に馬です。そのため、カイトやゴン達は馬をレンタルしました。\n何馬レンタルした？ ',
    options: [
      { optionId: '0', text: '3馬' },
      { optionId: '1', text: '2馬' },
      { optionId: '2', text: '4馬' },
      { optionId: '3', text: '5馬' },
      { optionId: '4', text: '6馬' },
    ],
  },
  {
    quizId: '583',
    question:
      'キメラアント編からの問題です。\nNGLでの交通手段は主に馬です。そのため、カイトやゴン達は馬をレンタルしました。\n事故などで馬を走行不可とした場合賠償金としていくら払わなければいけない？',
    options: [
      { optionId: '0', text: '500万ジェニー' },
      { optionId: '1', text: '800万ジェニー' },
      { optionId: '2', text: '1,000万ジェニー' },
      { optionId: '3', text: '1,500万ジェニー' },
      { optionId: '4', text: '1,200万ジェニー' },
    ],
  },
  {
    quizId: '584',
    question: 'ポックルの能力は？',
    options: [
      { optionId: '0', text: '七色弓箭' },
      { optionId: '1', text: '念弓炸裂' },
      { optionId: '2', text: '最速弓箭' },
      { optionId: '3', text: '奏でる弓箭' },
      { optionId: '4', text: '炎の弓箭' },
    ],
  },
  {
    quizId: '585',
    question:
      'ポックルの能力、七色弓箭（レインボウ）の内、最速の弓は何色の弓？',
    options: [
      { optionId: '0', text: '橙の矢' },
      { optionId: '1', text: '赤の矢' },
      { optionId: '2', text: '紫の矢' },
      { optionId: '3', text: '藍の矢' },
      { optionId: '4', text: '緑の矢' },
    ],
  },
  {
    quizId: '586',
    question:
      'キメラアント編からの問題です。\nポックルが戦った相手は次のうち誰？',
    options: [
      { optionId: '0', text: 'パイク' },
      { optionId: '1', text: 'レオル' },
      { optionId: '2', text: 'ラモット' },
      { optionId: '3', text: 'ユンジュ' },
      { optionId: '4', text: 'ヒナ' },
    ],
  },
  {
    quizId: '587',
    question:
      'キメラアント編からの問題です。\nゴンとキルアが最初に戦ったキメラアントは？',
    options: [
      { optionId: '0', text: 'ラモット' },
      { optionId: '1', text: 'アキット' },
      { optionId: '2', text: 'モリット' },
      { optionId: '3', text: 'サコット' },
      { optionId: '4', text: 'コロット' },
    ],
  },
  {
    quizId: '588',
    question: 'キメラアント編からの問題です。\nNGLで作られていた麻薬の種類は？',
    options: [
      { optionId: '0', text: 'D2（ディーディー）' },
      { optionId: '1', text: 'E2（イーイー）' },
      { optionId: '2', text: 'S2（エスエス）' },
      { optionId: '3', text: 'Y2（ワイワイ）' },
      { optionId: '4', text: 'X2（エックスエックス）' },
    ],
  },
  {
    quizId: '589',
    question: 'カイトの円の最大範囲は？',
    options: [
      { optionId: '0', text: '45mほど' },
      { optionId: '1', text: '300mほど' },
      { optionId: '2', text: '20mほど' },
      { optionId: '3', text: '90mほど' },
      { optionId: '4', text: '10mほど' },
    ],
  },
  {
    quizId: '590',
    question:
      'キメラアント編からの問題です。\nユンジュ（ケンタウロス）の部下であり、キルアと戦った敵の笑い方は？',
    options: [
      { optionId: '0', text: '蚊蚊蚊（カカカ）' },
      { optionId: '1', text: '血ッ血ッ血（チッチッチ）' },
      { optionId: '2', text: '羽羽羽（ハハハ）' },
      { optionId: '3', text: '腐腐腐（フフフ）' },
      { optionId: '4', text: '鵡鵡鵡（ムムム）' },
    ],
  },
  {
    quizId: '591',
    question:
      'キメラアント編からの問題です。\nカイトがユンジュ（ケンタウロス）を倒した時に使ったのは、気狂いピエロ（クレイジースロット）の何番の武器？',
    options: [
      { optionId: '0', text: '4番' },
      { optionId: '1', text: '3番' },
      { optionId: '2', text: '9番' },
      { optionId: '3', text: '2番' },
      { optionId: '4', text: '5番' },
    ],
  },
  {
    quizId: '592',
    question:
      'カイトの能力、気狂いピエロ（クレイジースロット）はルーレットで武器が決まります。\n2番の武器で使える技は？',
    options: [
      { optionId: '0', text: '死神の円舞曲' },
      { optionId: '1', text: '大釜の音楽' },
      { optionId: '2', text: '絶対的強者による摂取' },
      { optionId: '3', text: '七色の仮面' },
      { optionId: '4', text: '静止した闇' },
    ],
  },
  {
    quizId: '593',
    question:
      'キメラアント編、ハギャの名言からの問題です。\n「己の爪と牙、それが世界の中心だと思っていた。\nそれを少し振り回すと、他者の人生を終わらせることができ、自分の空腹をも満たせる。これ以上の至福はないと。\nだがそうではなかった。\n上には上がいて、オレは頂点にいなかった。」\n続きを答えよ。',
    options: [
      {
        optionId: '0',
        text: '死を代償にオレは思い知り、しかし強くなった。学習すること、それが現在の武器。',
      },
      {
        optionId: '1',
        text: '短い・・・そして愚かな夢だった。格が違う。決して覆ることのな予め決められた地位。オレの能力はオレの為に否ず！！',
      },
      {
        optionId: '2',
        text: '自分で念を覚えてみてよくわかる。あんた達もすごく強い。それでもアイツに勝てる気がしない。',
      },
      {
        optionId: '3',
        text: '王。貴方は光だ。時々眩しすぎて真っ直ぐ見れないけど、それでも貴方の傍にいていいかな？',
      },
      { optionId: '4', text: '我が王よ。其方は必ずやこの世界の頂点に立つ。' },
    ],
  },
  {
    quizId: '594',
    question: 'キメラアント編からの問題です。\nラモットは何系の念能力者？',
    options: [
      { optionId: '0', text: '強化系' },
      { optionId: '1', text: '具現化系' },
      { optionId: '2', text: '操作系' },
      { optionId: '3', text: '放出系' },
      { optionId: '4', text: '変化系' },
    ],
  },
  {
    quizId: '595',
    question:
      'キメラアント編からの問題です。\nカイトの能力、気狂いピエロ（クレイジースロット）はルーレットで武器が決まります。\nカイトがネフェルピトーと戦った時出たルーレットの数字は何番？',
    options: [
      { optionId: '0', text: '3番' },
      { optionId: '1', text: '9番' },
      { optionId: '2', text: '2番' },
      { optionId: '3', text: '5番' },
      { optionId: '4', text: '1番' },
    ],
  },
  {
    quizId: '596',
    question:
      'ネテロの名言からの問題です。\nカイトが目の前でやられているにもかかわらず、ゴンを気絶させ逃げ出してしまったキルア。\n落ち込んでいるキルアにネテロが次のように言いました。\n「最寄りの街に2人･・・！！刺客をはなった。闘る、闘らぬは自由。じゃが、倒してから追っておいで、ハンターとして生きるなら。」\n続く言葉は何？',
    options: [
      { optionId: '0', text: '猫の手は要らん。必要なのは強者のみ！' },
      { optionId: '1', text: 'ほいじゃー達者での！' },
      {
        optionId: '2',
        text: '感謝するぜ。お前と出会えた、これまでの全てに!!!',
      },
      { optionId: '3', text: '血沸く血沸く' },
      { optionId: '4', text: 'そりゃあ悪手だろ' },
    ],
  },
  {
    quizId: '597',
    question:
      'キメラアント編、キルアの心の声からの問題です。\nカイトを見殺しにしたと思い落ち込んでいるキルアに、ゴンは「カイトは生きてる！（中略）だから早く戻ろう！強くなって！！カイトを助けに！」と励まされました。\nこのセリフを聞いて、キルアが次のように感じました。\n「ゴン･・・お前は光だ。時々眩しすぎて真っ直ぐ見れないけど、」\n続く言葉は？',
    options: [
      { optionId: '0', text: 'それでもお前の傍にいていいかな？' },
      { optionId: '1', text: 'お前の友達でいていいかな？' },
      { optionId: '2', text: 'それでも一緒にいてくれるかな？' },
      { optionId: '3', text: '少しずつ俺も変わっていけるかな？' },
      { optionId: '4', text: 'ずっとお前の友達だ。' },
    ],
  },
  {
    quizId: '598',
    question: 'パームは誰の弟子？',
    options: [
      { optionId: '0', text: 'ノヴ' },
      { optionId: '1', text: 'ネテロ' },
      { optionId: '2', text: 'ナックル' },
      { optionId: '3', text: 'シュート' },
      { optionId: '4', text: 'モラウ' },
    ],
  },
  {
    quizId: '599',
    question:
      '「201話：再開」の表紙には、ヒソカ、徐念師アベンガネ、クロロの3人が描かれています。\nこの絵でクロロは何をしている？',
    options: [
      { optionId: '0', text: '漫画を読んでいる' },
      { optionId: '1', text: '聖書を読んでいる' },
      { optionId: '2', text: 'ヒソカをじっと見つめている' },
      { optionId: '3', text: 'アベンガネをじっと見つめている' },
      { optionId: '4', text: '二人に背を向けて、外の景色を見ている' },
    ],
  },
  {
    quizId: '600',
    question: 'ナックルのフルネームは何？',
    options: [
      { optionId: '0', text: 'ナックル＝バイン' },
      { optionId: '1', text: 'ナックル＝マクマホン' },
      { optionId: '2', text: 'ナックル＝クルーガー' },
      { optionId: '3', text: 'ナックル＝ルシルフル' },
      { optionId: '4', text: 'ナックル＝シベリア' },
    ],
  },
  {
    quizId: '601',
    question: 'ナックルは何ハンター？',
    options: [
      { optionId: '0', text: 'ビーストハンター' },
      { optionId: '1', text: '幻獣ハンター' },
      { optionId: '2', text: 'ＵＭＡハンター' },
      { optionId: '3', text: 'クライムハンター' },
      { optionId: '4', text: '怪物（モンスター）ハンター' },
    ],
  },
  {
    quizId: '602',
    question:
      'キメラアント編からの問題です。\nゴンとキルアが練の状態で3時間維持する特訓をしている時に、\nビスケが読んでいたエロ本のタイトルは？',
    options: [
      { optionId: '0', text: 'おとこ' },
      { optionId: '1', text: 'きんにく' },
      { optionId: '2', text: 'はだか' },
      { optionId: '3', text: 'えろほん' },
      { optionId: '4', text: 'あせ' },
    ],
  },
  {
    quizId: '603',
    question:
      'キメラアント編からの問題です。\n練を10分間伸ばすのにどのくらいかかると言われている？\n（ヒント！ビスケがゴン、キルアが練の状態を3時間維持する特訓をしてる時に言った）',
    options: [
      { optionId: '0', text: '一ヶ月' },
      { optionId: '1', text: '一年' },
      { optionId: '2', text: '半年' },
      { optionId: '3', text: '三ヶ月' },
      { optionId: '4', text: '二年' },
    ],
  },
  {
    quizId: '604',
    question:
      'キメラアント編からの問題です。\nゴン、キルアは強くなって、カイトを助けに戻るため特訓を始めました。\nビスケが、二人に命じた最初の特訓は？',
    options: [
      { optionId: '0', text: '練の状態を3時間維持すること' },
      { optionId: '1', text: '岩山をスコップで掘り、進むこと' },
      { optionId: '2', text: '練の状態を2時間維持すること' },
      { optionId: '3', text: '凝を完璧にすること' },
      { optionId: '4', text: '流を完璧にすること' },
    ],
  },
  {
    quizId: '605',
    question:
      'キメラアント編からの問題です。\n30分で8時間の睡眠に相当する休息効果が得られるビスケの能力名は？',
    options: [
      { optionId: '0', text: '桃色吐息' },
      { optionId: '1', text: '天使の施し' },
      { optionId: '2', text: '強欲の壺' },
      { optionId: '3', text: 'スケルエンジェル' },
      { optionId: '4', text: '超再生能力' },
    ],
  },
  {
    quizId: '606',
    question:
      'キメラアント編からの問題です。\nネテロ、モラウ、ノヴの三人がNGLに入って最初の一ヶ月間行おうとしたことは何？\nビスケとパームの会話のやり取りから答えなさい。',
    options: [
      { optionId: '0', text: '「探り」と「削り」' },
      { optionId: '1', text: '「挑発」と「伺い」' },
      { optionId: '2', text: '「救い」と「切捨て」' },
      { optionId: '3', text: '「脅し」と「殺し」' },
      { optionId: '4', text: '「誘惑」と「殺し」' },
    ],
  },
  {
    quizId: '607',
    question:
      'キメラアント編からの問題です。\nネテロ、ノヴ、モラウの三人がNGLを訪れた時、王が生まれる時期をどのくらいと判断して三人は行動していた？',
    options: [
      { optionId: '0', text: '最短で二ヶ月' },
      { optionId: '1', text: '最短で二週間' },
      { optionId: '2', text: '最短で一ヶ月間' },
      { optionId: '3', text: '最短で一週間' },
      { optionId: '4', text: '最短で三週間' },
    ],
  },
  {
    quizId: '608',
    question:
      'キメラアント編からの問題です。\n次のうち、ジャイロの幼少時代の説明として誤ったいるのをどれ？',
    options: [
      { optionId: '0', text: '12才の時に母親を殴り殺した' },
      {
        optionId: '1',
        text: '無口の父親の唯一の教えが、ヒトに迷惑を掛けるなだった',
      },
      {
        optionId: '2',
        text: '仕事から戻ると共同便所へ行く時以外ベッドから降りることを許されていなかった',
      },
      { optionId: '3', text: '7才までろくに言葉も話せなかった' },
      {
        optionId: '4',
        text: '寝返りを打つと派手な音で軋み、父親に怒られるので全く動かずに寝る術を身につけた',
      },
    ],
  },
  {
    quizId: '609',
    question: 'シュートのフルネームは？',
    options: [
      { optionId: '0', text: 'シュート＝マクマホン' },
      { optionId: '1', text: 'シュート＝バイン' },
      { optionId: '2', text: 'シュート＝クルーガー' },
      { optionId: '3', text: 'シュート＝ルシルフル' },
      { optionId: '4', text: 'シュート＝シベリア' },
    ],
  },
  {
    quizId: '610',
    question: 'シュートの血液型は？',
    options: [
      { optionId: '0', text: 'AB型' },
      { optionId: '1', text: 'O型' },
      { optionId: '2', text: 'A型' },
      { optionId: '3', text: 'B型' },
      { optionId: '4', text: '不明' },
    ],
  },
  {
    quizId: '611',
    question: 'シュートは何ハンター？',
    options: [
      { optionId: '0', text: 'UMAハンター' },
      { optionId: '1', text: '幻獣ハンター' },
      { optionId: '2', text: 'ビーストハンター' },
      { optionId: '3', text: 'クライムハンター' },
      { optionId: '4', text: '怪物（モンスター）ハンター' },
    ],
  },
  {
    quizId: '612',
    question:
      'キメラアント編からの問題です。\nノブとモラウはどっちの弟子が援軍として来るか賭けました。\nモラウはナックルとシュートに10万ジェニー、ノヴは5人全員が来るに100万ジェニーに賭けました\nお互いに外れたらどうする予定だった？',
    options: [
      { optionId: '0', text: '会長にプレゼント' },
      { optionId: '1', text: '打ち上げ代に使う' },
      { optionId: '2', text: '弟子にプレゼント' },
      { optionId: '3', text: '募金する' },
      { optionId: '4', text: '副会長にプレゼント（嫌味として）' },
    ],
  },
  {
    quizId: '613',
    question:
      'ネテロは、護衛軍と戦う前に\n「この任務･・・果たせぬかもな･・・誰かを犠牲にしない限り･・・」と推測していました。\n実際に任務のため、命を落としたのは誰？',
    options: [
      { optionId: '0', text: 'ネテロ' },
      { optionId: '1', text: 'ナックル' },
      { optionId: '2', text: 'モラウ' },
      { optionId: '3', text: 'シュート' },
      { optionId: '4', text: 'ゴン' },
    ],
  },
  {
    quizId: '614',
    question: 'ナックルの能力、ハコワレは漢字でどのように書く？',
    options: [
      { optionId: '0', text: '天上不知唯我独損' },
      { optionId: '1', text: '破滅への輪舞曲' },
      { optionId: '2', text: '天衣無縫の極み' },
      { optionId: '3', text: '風林火山' },
      { optionId: '4', text: '百八式波動球' },
    ],
  },
  {
    quizId: '615',
    question:
      'キメラアント編からの問題です。\nシュートは、一定以上のダメージを与えた相手の体の一部、または全部を箱に閉じ込めることができます。\nシュートはキルアとの割符を賭けた戦いで、この能力を使いキルアの体のどの部位を盗んだ？',
    options: [
      { optionId: '0', text: '左顔面' },
      { optionId: '1', text: '右顔面' },
      { optionId: '2', text: '左手' },
      { optionId: '3', text: '右足' },
      { optionId: '4', text: '右手' },
    ],
  },
  {
    quizId: '616',
    question:
      'キメラアント編からの問題です。\nペギーはいつ、どのように死んだ？',
    options: [
      {
        optionId: '0',
        text: '王が産まれた直後。王に「馳走を用意せい」と二回言わせたため、王に殺された。',
      },
      {
        optionId: '1',
        text: '王が産まれた直後。王はコルトに「尻尾を拭け」と言ったが、ペギーが拭こうとしたため王に殺された。',
      },
      {
        optionId: '2',
        text: 'ネテロ、ノヴ、モラウがNGL自治国に討伐隊として来てすぐ。ネテロにやられた。',
      },
      {
        optionId: '3',
        text: 'カイト、ゴン、キルアがNGLに着いてすぐ。ポックルにやられた。',
      },
      {
        optionId: '4',
        text: 'カイト、ゴン、キルアがNGLに着いてすぐ。カイトにやられた。',
      },
    ],
  },
  {
    quizId: '617',
    question:
      'キメラアント編からの問題です。\nキメラアントの亀はいつ、どのように死んだ？',
    options: [
      {
        optionId: '0',
        text: '王が産まれた直後。王はコルトに「尻尾を拭け」と言ったが、亀が拭こうとしたため王に殺された。',
      },
      {
        optionId: '1',
        text: '王が産まれた直後。王に「馳走を用意せい」と二回言わせたため、王に殺された。',
      },
      {
        optionId: '2',
        text: 'ネテロ、ノヴ、モラウがNGL自治国に討伐隊として来てすぐ。ネテロにやられました。',
      },
      {
        optionId: '3',
        text: 'カイト、ゴン、キルアがNGLに着いてすぐ。ポックルにやられた。',
      },
      {
        optionId: '4',
        text: 'カイト、ゴン、キルアがNGLに着いてすぐ。カイトにやられた。',
      },
    ],
  },
  {
    quizId: '618',
    question:
      'キメラアント編。\nネフェルピトーはレアモノの見極め方を王に伝えようとしました。\nしかし、その程度のことは知っていた王は、愚弄されたと思い、ネフェルピトーを殴り殺そうとします。\nこの時の王のセリフからの問題です。\n「ただ見つけて食うだけでは芸がなかろう（中略）腹はそこそこ満ちておるしな。ときにピトーよ」\n続く言葉は？',
    options: [
      {
        optionId: '0',
        text: 'おぬし、なかなか強いな。殺すつもりで殴ったのだぞ。褒めてつかわす。',
      },
      { optionId: '1', text: 'これ以上恥を上塗れと申すか' },
      {
        optionId: '2',
        text: 'お前に任せると言っておるのだ。もう余が呼ぶまで下がっておれ！',
      },
      { optionId: '3', text: '余の名前は何という？' },
      { optionId: '4', text: '貴様。コムギが襲われていたのを知っていたな？' },
    ],
  },
  {
    quizId: '619',
    question:
      'キメラアント編。\nネフェルピトーはレアモノの見極め方を王に伝えようとしました。\nしかし、その程度のことは知っていた王は、愚弄されたと思い、ネフェルピトーを殴り殺そうとします。\n「ただ見つけて食うだけでは芸がなかろう。（中略）ときにピトーよ。おぬし、なかなか強いな。殺すつもりで殴ったのだぞ。褒めてつかわす。」\nという王の言葉に対し、ピトーは何と答えた？',
    options: [
      { optionId: '0', text: '勿体無い御言葉・・・' },
      { optionId: '1', text: 'とんでもございません' },
      { optionId: '2', text: '大変感激でございます' },
      { optionId: '3', text: '非常に光栄です' },
      { optionId: '4', text: 'この力は全て王の為に・・・' },
    ],
  },
  {
    quizId: '620',
    question:
      'キメラアント編から難易度マックスの問題です。\nネテロは部下に女王蟻の臓器を治すために、李博士に連絡するように命令しました。\n李博士は何大学の博士？',
    options: [
      { optionId: '0', text: '梵林医大' },
      { optionId: '1', text: '早稲医大' },
      { optionId: '2', text: '慶王医大' },
      { optionId: '3', text: '青川医大' },
      { optionId: '4', text: '中王医大' },
    ],
  },
  {
    quizId: '621',
    question:
      'キメラアント編から難易度マックスの問題です。\nネテロは、王が産まれたことを知り、電話で部下に命令を出しました。\n命令の内容は「女王蟻の臓器を治すために、梵林医大のある博士に連絡して、外科医と人工臓器の専門家を総動員しろ。」といったものでした。\n梵林医大のある博士とは？\n名前を答えよ。',
    options: [
      { optionId: '0', text: '李' },
      { optionId: '1', text: '張' },
      { optionId: '2', text: '陳' },
      { optionId: '3', text: '王' },
      { optionId: '4', text: '劉' },
    ],
  },
  {
    quizId: '622',
    question: 'ネテロ会長が本気で戦う時だけ身につける勝負服は何？',
    options: [
      { optionId: '0', text: '「心」Tシャツ' },
      { optionId: '1', text: '「命」Tシャツ' },
      { optionId: '2', text: '「祈」Tシャツ' },
      { optionId: '3', text: '「仏」Tシャツ' },
      { optionId: '4', text: '「愛」Tシャツ' },
    ],
  },
  {
    quizId: '623',
    question:
      'キメラアント編。\nネテロはコルトに「おそらく王に、触れることさえできないだろう。その前に殺される。直属護衛軍の誰かにな。」と言われました。\nそれに対し、ネテロが答えたセリフからの問題です。\n「ホッホッホ、嬉しいのォ、この年で挑戦者か」\n続く言葉は？',
    options: [
      { optionId: '0', text: '血湧く血湧く' },
      { optionId: '1', text: 'もう退けねェのよ' },
      {
        optionId: '2',
        text: 'オレが求めた武の極みは、敗色濃い難敵にこそ全霊を以て臨む事！！',
      },
      { optionId: '3', text: '感謝するぜ。お前と出会えたこれまでの全てに！！' },
      {
        optionId: '4',
        text: '誰かを犠牲にしない限りこの任務は達成できんかも知れないのォ',
      },
    ],
  },
  {
    quizId: '624',
    question:
      'キメラアント編からの問題です。\nスピンの故郷に住む、そこにしか生息できない鳥の名前は？',
    options: [
      { optionId: '0', text: 'コクチハクチョウ' },
      { optionId: '1', text: 'シジュウカラ' },
      { optionId: '2', text: 'ハクセキレイ' },
      { optionId: '3', text: 'ハシブトガラス' },
      { optionId: '4', text: 'シラコバト' },
    ],
  },
  {
    quizId: '625',
    question:
      'キメラアント編。\n王が東ゴルドー共和国にて、命乞いする女性達にいったセリフからの問題です。\n「ははは、やはり阿呆だぞ、こいつら。足りない脳を最大限稼働してよ～～～～～く考えろ」',
    options: [
      {
        optionId: '0',
        text: 'お前らは豚や牛の命乞いに耳を貸したことがあるか？',
      },
      { optionId: '1', text: 'お前らは何匹の生物を殺してきた？' },
      { optionId: '2', text: 'お前らを生かしておくメリットが余にあるか？' },
      {
        optionId: '3',
        text: 'ギャーギャー騒ぐ虫けらの方が殺したくならないか？',
      },
      { optionId: '4', text: '産まれる前に戻るだけだろ？' },
    ],
  },
  {
    quizId: '626',
    question:
      'キメラアント編からの問題です。\n王が産まれたため、自ら王を目指そうと各地に散った師団長達。\nヂートゥが7名の市民を殺しニュースにもなった場所はどこ？',
    options: [
      { optionId: '0', text: 'パタ市郊外' },
      { optionId: '1', text: 'クウェン市郊外' },
      { optionId: '2', text: 'ドーリ市郊外' },
      { optionId: '3', text: 'クワント市郊外' },
      { optionId: '4', text: 'セトル市郊外' },
    ],
  },
  {
    quizId: '627',
    question: 'キルアがイルミの針を抜いたのはいつ？',
    options: [
      { optionId: '0', text: 'ラモットと戦った時' },
      { optionId: '1', text: 'シュートと戦った時' },
      { optionId: '2', text: 'パームと戦った時' },
      { optionId: '3', text: 'イルミと戦った時' },
      { optionId: '4', text: 'ユンジュと戦った時' },
    ],
  },
  {
    quizId: '628',
    question: 'パームのフルネームは？',
    options: [
      { optionId: '0', text: 'パーム＝シベリア' },
      { optionId: '1', text: 'パーム＝バイン' },
      { optionId: '2', text: 'パーム＝マクマホン' },
      { optionId: '3', text: 'パーム＝クルーガー' },
      { optionId: '4', text: 'パーム＝ルシルフル' },
    ],
  },
  {
    quizId: '629',
    question: 'パームの血液型は？',
    options: [
      { optionId: '0', text: 'A型' },
      { optionId: '1', text: 'O型' },
      { optionId: '2', text: 'Ab型' },
      { optionId: '3', text: 'B型' },
      { optionId: '4', text: '不明' },
    ],
  },
  {
    quizId: '630',
    question: 'ゴンと付き合った時のパームの年齢は？',
    options: [
      { optionId: '0', text: '22才' },
      { optionId: '1', text: '30才' },
      { optionId: '2', text: '28才' },
      { optionId: '3', text: '25才' },
      { optionId: '4', text: '19才' },
    ],
  },
  {
    quizId: '631',
    question:
      'キメラアント編。\nヂートゥが、モラウとナックルと戦った時の問題です。ヂートゥが、「身体能力の差は歴然！！何で埋める気？銃？頭数？」と言いました。\nそれに対しナックルは何と答えた？',
    options: [
      { optionId: '0', text: '「知恵」と「経験」かね' },
      { optionId: '1', text: '「我慢」と「辛抱」かね' },
      { optionId: '2', text: '「探り」と「削り」かね' },
      { optionId: '3', text: '「念」と「経験」かね' },
      { optionId: '4', text: '「技術」と「頭脳」かね' },
    ],
  },
  {
    quizId: '632',
    question: 'シュートの能力名は？',
    options: [
      { optionId: '0', text: '暗い宿' },
      { optionId: '1', text: '拘束の館' },
      { optionId: '2', text: '閉じ込められた空間' },
      { optionId: '3', text: '拘束の箱' },
      { optionId: '4', text: '暗闇の館' },
    ],
  },
  {
    quizId: '633',
    question: 'シュートの能力名「暗い宿」は何と読む？',
    options: [
      { optionId: '0', text: 'ホテルラフレシア' },
      { optionId: '1', text: 'ブラックホテル' },
      { optionId: '2', text: 'ホテルラフェスタ' },
      { optionId: '3', text: 'ホテルハッセル' },
      { optionId: '4', text: 'ホテルフィオーレ' },
    ],
  },
  {
    quizId: '634',
    question:
      'キメラアント編から難易度マックスの問題です。\n王が産まれたため、自ら王を目指そうと各地に散った師団長達。\nブロヴータに右目と両足を奪われた29才の方がニュース番組のインタビューを受けています。\nこの方の名前は？',
    options: [
      { optionId: '0', text: 'ツクマ' },
      { optionId: '1', text: 'サトシ' },
      { optionId: '2', text: 'タケシ' },
      { optionId: '3', text: 'タケル' },
      { optionId: '4', text: 'カシマ' },
    ],
  },
  {
    quizId: '635',
    question:
      'キメラアント編、ザザンのセリフからの問題です。\nサザン曰く、母唯一の成功はサザンを産んだことですが、母最大の失敗は何？',
    options: [
      {
        optionId: '0',
        text: '増兵するのに産卵するという古くて非効率的な方法をとらざるを得なかったこと',
      },
      { optionId: '1', text: '戦闘の喜びを知らなかったこと' },
      {
        optionId: '2',
        text: '自分が唯一の王になるとこを望まず、息子に託したこと',
      },
      { optionId: '3', text: '言葉が話せなかったこと' },
      { optionId: '4', text: '私を家に閉じ込めておかなかったこと' },
    ],
  },
  {
    quizId: '636',
    question:
      'キメラアント編からの問題です。\n王が産まれたため、自ら王を目指そうと各地に散った師団長達。\nサザンは流星街に来ていました。\nサザンにより流星街でどれくらい死人が出た？\n一番近い数字を答えよ。',
    options: [
      { optionId: '0', text: '300（三百）人' },
      { optionId: '1', text: '30（三十）人' },
      { optionId: '2', text: '3,000（三千）人' },
      { optionId: '3', text: '300,000（三十万）人' },
      { optionId: '4', text: '30,000（三万）人' },
    ],
  },
  {
    quizId: '637',
    question:
      'キメラアント編からの問題です。\nザザンの能力、クイーンショットは漢字でどのように書く？',
    options: [
      { optionId: '0', text: '審美的転生注射' },
      { optionId: '1', text: '心変わりの注射' },
      { optionId: '2', text: '180分間の奴隷' },
      { optionId: '3', text: '奴隷転生毒針注射' },
      { optionId: '4', text: '一生女王崇拝注射' },
    ],
  },
  {
    quizId: '638',
    question: 'ボノレノフは何という少数部族の末裔（まつえい）？',
    options: [
      { optionId: '0', text: 'ギュドンドンド族' },
      { optionId: '1', text: 'チワン族' },
      { optionId: '2', text: 'ウイグル族' },
      { optionId: '3', text: 'エベンキ族' },
      { optionId: '4', text: 'オロチョン族' },
    ],
  },
  {
    quizId: '639',
    question:
      'ボノレノフはギュンドンド族の末裔（まつえい）です。\nこの部族の踊る戦士のことを何という？',
    options: [
      { optionId: '0', text: 'バプ' },
      { optionId: '1', text: 'ノーテン' },
      { optionId: '2', text: 'テンパイ' },
      { optionId: '3', text: 'ゴツモ' },
      { optionId: '4', text: 'ターハイ' },
    ],
  },
  {
    quizId: '640',
    question:
      '腕を回す程パンチ力が増大する、フィンクスの能力「廻天」は何と読む？',
    options: [
      { optionId: '0', text: 'リッパーサイクロトロン' },
      { optionId: '1', text: 'リングサイクロン' },
      { optionId: '2', text: 'リングホーリー' },
      { optionId: '3', text: 'リッパーホーリー' },
      { optionId: '4', text: 'グルグルサイクロン' },
    ],
  },
  {
    quizId: '641',
    question:
      'キメラアント編、サザン群対旅団からの問題です。\nフィンクスの能力、廻天（リッパーサイクロトロン）は、腕を回すほどパンチ力が増大します。\nザザンの部下のゴリラを倒した時、何回腕を回した？',
    options: [
      { optionId: '0', text: '15回転' },
      { optionId: '1', text: '10回転' },
      { optionId: '2', text: '5回転' },
      { optionId: '3', text: '20回転' },
      { optionId: '4', text: '25回転' },
    ],
  },
  {
    quizId: '642',
    question:
      'キメラアント編、サザン群対旅団からの問題です。\nザザンがフェイタンと戦って時に履いていたスカートのブランドは何？',
    options: [
      { optionId: '0', text: 'チャネール' },
      { optionId: '1', text: 'ビートン' },
      { optionId: '2', text: 'パラダ' },
      { optionId: '3', text: 'パーバーリー' },
      { optionId: '4', text: 'グーチ' },
    ],
  },
  {
    quizId: '643',
    question:
      'キメラアント編、サザン群対旅団からの問題です。\nパイクがシズクに使った技は？',
    options: [
      { optionId: '0', text: '愛の放射線' },
      { optionId: '1', text: '夢の放射線' },
      { optionId: '2', text: '恋の放射線' },
      { optionId: '3', text: '蜘蛛の放射線' },
      { optionId: '4', text: '雲の放射線' },
    ],
  },
  {
    quizId: '644',
    question:
      'キメラアント編、サザン群対旅団からの問題です。\nカルトがザザンの部下と戦った時の技名は？',
    options: [
      { optionId: '0', text: '蛇咬の舞' },
      { optionId: '1', text: '鶴の舞' },
      { optionId: '2', text: '孔雀舞' },
      { optionId: '3', text: '花の舞' },
      { optionId: '4', text: '鬼殺しの舞' },
    ],
  },
  {
    quizId: '645',
    question:
      'キメラアント編、サザン群対旅団からの問題です。\nボノレノフがザザンの部下と戦った時、最後に使った能力名？',
    options: [
      { optionId: '0', text: '戦闘円舞曲  木星' },
      { optionId: '1', text: '戦闘円舞曲  金星' },
      { optionId: '2', text: '戦闘円舞曲  彗星' },
      { optionId: '3', text: '戦闘円舞曲  冥王星' },
      { optionId: '4', text: '戦闘円舞曲  海王星' },
    ],
  },
  {
    quizId: '646',
    question:
      'キメラアント編、サザン群対旅団からの問題です。\nフェイタンがザザンに使った能力名は？',
    options: [
      { optionId: '0', text: '許されざる者 太陽に灼かれて' },
      { optionId: '1', text: '許されざる者 虎に喰われて' },
      { optionId: '2', text: '許されざる者 落雷に殺かれて' },
      { optionId: '3', text: '許されざる者 海に溺れて' },
      { optionId: '4', text: '許されざる者 吹雪に凍らされて' },
    ],
  },
  {
    quizId: '647',
    question:
      'キメラアント編からの問題です。\nノヴ、モラウと交渉し、軍部情報などの全面提供を条件に亡命することを決めた男の名前は？',
    options: [
      { optionId: '0', text: 'マルコス' },
      { optionId: '1', text: 'ロナウド' },
      { optionId: '2', text: 'エジル' },
      { optionId: '3', text: 'シャビ' },
      { optionId: '4', text: 'ディエゴ' },
    ],
  },
  {
    quizId: '648',
    question:
      'キメラアント編からの問題です。\nコウモリは、ある能力があるため暗闇の中でも自在に飛び回り獲物を捕ることができます。\nあの能力とは超音波を出しその反響音を聞いて障害物や獲物の位置を確かめるテクニックです。\nコウモリがもつある能力とは？',
    options: [
      { optionId: '0', text: 'エコーロケーション' },
      { optionId: '1', text: 'ロコローション' },
      { optionId: '2', text: 'ターミネーション' },
      { optionId: '3', text: 'ロングバケーション' },
      { optionId: '4', text: 'サイントローション' },
    ],
  },
  {
    quizId: '649',
    question:
      'キメラアント編から難易度マックスの問題です。\n蛇は○○器官と呼ばれる熱センサーを持っています。これによって蛇は暗闇でも獲物の放つ熱を感じ、その大きさや形、距離までも測定できると言われています。\n蛇が持っている○○器官とは何？',
    options: [
      { optionId: '0', text: 'ピット器官' },
      { optionId: '1', text: 'ゴット器官' },
      { optionId: '2', text: 'ミット器官' },
      { optionId: '3', text: 'シット器官' },
      { optionId: '4', text: 'ロット器官' },
    ],
  },
  {
    quizId: '650',
    question:
      'キメラアント編からの問題です。\nゴンはフクロウ（途中でゴリラモードになるキメラアント）とコウモリと戦いました。\nフクロウの着ていた服に書かれていた番号は何番？',
    options: [
      { optionId: '0', text: '3329' },
      { optionId: '1', text: '3524' },
      { optionId: '2', text: '1547' },
      { optionId: '3', text: '254' },
      { optionId: '4', text: '1546' },
    ],
  },
  {
    quizId: '651',
    question:
      'キメラアント編からの問題です。\nゴンはフクロウ（途中でゴリラモードになるキメラアント）とコウモリと戦いました。\nコウモリが使った能力「シークレットノイズ」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '超不協輪怨' },
      { optionId: '1', text: '内緒騒音' },
      { optionId: '2', text: '誰不知嫌音' },
      { optionId: '3', text: '隠鳴不快音' },
      { optionId: '4', text: '遠聞耳障嫌' },
    ],
  },
  {
    quizId: '652',
    question:
      'キメラアント編からの問題です。\nゴンはフクロウ（途中でゴリラモードになるキメラアント）とコウモリと戦いました。\nコウモリが使った能力「超不協輪怨」は何と読む？',
    options: [
      { optionId: '0', text: 'シークレットノイズ' },
      { optionId: '1', text: 'スーパーノイズ' },
      { optionId: '2', text: 'バットマンボイス' },
      { optionId: '3', text: 'バットマンノイズ' },
      { optionId: '4', text: 'バットガールノイズ' },
    ],
  },
  {
    quizId: '653',
    question:
      'キメラアント編からの問題です。\nモラウはヂートゥ討伐にあるハンターを推しました。\n（結局は、違うハンターが討伐にあたりヂートゥを逃がした）\nモラウは誰を推した？',
    options: [
      { optionId: '0', text: 'リァッケ' },
      { optionId: '1', text: 'チードル' },
      { optionId: '2', text: 'クルック' },
      { optionId: '3', text: 'サッチョウ' },
      { optionId: '4', text: 'ギンタ' },
    ],
  },
  {
    quizId: '654',
    question: '「協専」とは何の略？',
    options: [
      { optionId: '0', text: '協会の斡旋専門' },
      { optionId: '1', text: '協会の頭脳専門' },
      { optionId: '2', text: '協会の教師専門' },
      { optionId: '3', text: '協会の救助専門' },
      { optionId: '4', text: '協会の選挙専門' },
    ],
  },
  {
    quizId: '655',
    question:
      'ナックルの能力、天上不知唯我独損（ハコワレ）は敵についたポットクリンが一定秒数ごとに敵に対して利息アップを告知します。\n何秒ごとに利息が上がる？',
    options: [
      { optionId: '0', text: '10秒' },
      { optionId: '1', text: '5秒' },
      { optionId: '2', text: '20秒' },
      { optionId: '3', text: '30秒' },
      { optionId: '4', text: '15秒' },
    ],
  },
  {
    quizId: '656',
    question:
      'ナックルの能力、天上不知唯我独損（ハコワレ）は敵についたポットクリンが10秒ごとに敵に対して利息アップを告知します。しかし敵がナックルから一定の距離以上離れると利息のカウントは中止されます。\nどのくらいの距離を離れると利息のカウントは中止される？',
    options: [
      { optionId: '0', text: '100メートル' },
      { optionId: '1', text: '50メートル' },
      { optionId: '2', text: '1キロメートル' },
      { optionId: '3', text: '500メートル' },
      { optionId: '4', text: '20メートル' },
    ],
  },
  {
    quizId: '657',
    question:
      'キメラアント編からの問題です。\nイカルゴは何団の兵隊長蟻だった？',
    options: [
      { optionId: '0', text: 'レオル団' },
      { optionId: '1', text: 'ヂートゥ団' },
      { optionId: '2', text: 'ブロヴータ団' },
      { optionId: '3', text: 'ビホーン団' },
      { optionId: '4', text: 'ウェルフィン団' },
    ],
  },
  {
    quizId: '658',
    question:
      'キメラアント編、イカルゴ対キルアと戦いからの問題です。\nイカルゴは遠隔からある生物を弾として、キルアを狙撃していました。\n弾として使っていた生物は何？',
    options: [
      { optionId: '0', text: '特別製のでかいノミ' },
      { optionId: '1', text: '特別製のでかいマムシ' },
      { optionId: '2', text: '特別製のでかいムカデ' },
      { optionId: '3', text: '特別製のでかいテントウムシ' },
      { optionId: '4', text: '特別製のでかいタンゴムシ' },
    ],
  },
  {
    quizId: '659',
    question:
      'キメラアント編、イカルゴ対キルアと戦いからの問題です。\nイカルゴは遠隔から特別製のノミを弾として、キルアを狙撃していました。\nこのノミは垂直跳びでどのくらい飛ぶことができる？',
    options: [
      { optionId: '0', text: '200メートル' },
      { optionId: '1', text: '100メートル' },
      { optionId: '2', text: '20メートル' },
      { optionId: '3', text: '10メートル' },
      { optionId: '4', text: '2メートル' },
    ],
  },
  {
    quizId: '660',
    question:
      'キメラアント編、イカルゴ対キルアと戦いから、難易度マックスの問題です。\nイカルゴはキルアに自身がリスペクトしているイカの種類を話しました？\nイカルゴが特に憧れるフォルムを持つイカとは何という種類のイカ？',
    options: [
      { optionId: '0', text: 'ユウレイイカ' },
      { optionId: '1', text: 'アオリイカ' },
      { optionId: '2', text: 'モンゴウイカ' },
      { optionId: '3', text: 'ホタルイカ' },
      { optionId: '4', text: 'カミナリイカ' },
    ],
  },
  {
    quizId: '661',
    question:
      'キメラアント編、オロソ兄妹VSキルアからの問題です。\nオロソ兄妹（ダーツの能力を使いキルアを痛めつけた兄妹）は妹が念で創ったバッジを敵の体に付着することで発動します\nバッジをキルアに貼り付けたのは誰？',
    options: [
      { optionId: '0', text: 'コバーン' },
      { optionId: '1', text: 'ノータリン' },
      { optionId: '2', text: 'イカルゴ' },
      { optionId: '3', text: 'トッビウーオ' },
      { optionId: '4', text: 'シャメ' },
    ],
  },
  {
    quizId: '662',
    question:
      'キメラアント編からの問題です。\nダーツの能力を使いキルアを襲った兄妹は何兄妹？',
    options: [
      { optionId: '0', text: 'オロソ兄妹' },
      { optionId: '1', text: 'タチバナ兄妹' },
      { optionId: '2', text: 'ベラム兄妹' },
      { optionId: '3', text: 'ドクロ兄妹' },
      { optionId: '4', text: 'ウチュウ兄妹' },
    ],
  },
  {
    quizId: '663',
    question:
      'キメラアント編、オロソ兄妹VSキルアからの問題です。\nダーツの能力を使いキルアを襲ったオロソ兄妹の能力名「ダツDEダーツ」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '死亡遊戯' },
      { optionId: '1', text: '命懸けの投矢' },
      { optionId: '2', text: '念魚遊戯' },
      { optionId: '3', text: '投矢の餌食' },
      { optionId: '4', text: '念魚の投矢' },
    ],
  },
  {
    quizId: '664',
    question:
      'キメラアント編、ダーツの能力を使いキルアを襲ったオロソ兄妹の能力、死亡遊戯（ダツDEダーツ）からの問題です。\nオロセ兄妹が使ったプロの公式戦でも使われるダーツのゲームの種類は？',
    options: [
      { optionId: '0', text: 'ゼロワンの501' },
      { optionId: '1', text: 'クリケット' },
      { optionId: '2', text: 'カウントアップ' },
      { optionId: '3', text: 'ローテーション' },
      { optionId: '4', text: 'スプラット' },
    ],
  },
  {
    quizId: '665',
    question: 'キメラアント編からの問題です。\nメレオロンが人間の時の名前は？',
    options: [
      { optionId: '0', text: 'ジェイル' },
      { optionId: '1', text: 'ビャクヤ' },
      { optionId: '2', text: 'レンジ' },
      { optionId: '3', text: 'トウシロウ' },
      { optionId: '4', text: 'イチゴ' },
    ],
  },
  {
    quizId: '666',
    question:
      'キメラアント編、イカルゴ対キルアと戦いからの問題です。\nキルアは敵であるイカルゴを助け、逃がしました。\nキルアはなぜイカルゴを助けた？',
    options: [
      {
        optionId: '0',
        text: 'かっこいいから。違うカタチで会えてたら友達になれたなって思うくらいに',
      },
      { optionId: '1', text: '殺すと死後の念でゴンが危険にさらされるため' },
      {
        optionId: '2',
        text: '放って置いてもいつでもやれるし、敵の情報を次々流してくれるから',
      },
      {
        optionId: '3',
        text: '依頼主がやられた為、仕事でなくなったから。キルアは殺しが趣味なわけでないから',
      },
      { optionId: '4', text: 'ゴンがイカルゴを殺すのは辞めろと言ったから' },
    ],
  },
  {
    quizId: '667',
    question:
      'キメラアント編、ダーツの能力を使いキルアを襲ったオロソ兄妹の能力、「死亡遊戯（ダツDEダーツ）」からの問題です。\n左肩は何ポイント？',
    options: [
      { optionId: '0', text: '54ポイント' },
      { optionId: '1', text: '37ポイント' },
      { optionId: '2', text: '49ポイント' },
      { optionId: '3', text: '25ポイント' },
      { optionId: '4', text: '29ポイント' },
    ],
  },
  {
    quizId: '668',
    question:
      'キメラアント編、ダーツの能力を使いキルアを襲ったオロソ兄妹の能力、「死亡遊戯（ダツDEダーツ）」からの問題です。\n右肘は何ポイント？',
    options: [
      { optionId: '0', text: '27ポイント' },
      { optionId: '1', text: '37ポイント' },
      { optionId: '2', text: '49ポイント' },
      { optionId: '3', text: '25ポイント' },
      { optionId: '4', text: '29ポイント' },
    ],
  },
  {
    quizId: '669',
    question:
      'ダーツの能力を使いキルアを襲ったオロソ兄妹の能力、死亡遊戯（ダツDEダーツ）からの問題です。\n額は何ポイント？',
    options: [
      { optionId: '0', text: '40ポイント' },
      { optionId: '1', text: '37ポイント' },
      { optionId: '2', text: '49ポイント' },
      { optionId: '3', text: '25ポイント' },
      { optionId: '4', text: '29ポイント' },
    ],
  },
  {
    quizId: '670',
    question:
      'ダーツの能力を使いキルアを襲ったオロソ兄妹の能力、死亡遊戯（ダツDEダーツ）からの問題です。\n右手甲は何ポイント？',
    options: [
      { optionId: '0', text: '18ポイント' },
      { optionId: '1', text: '37ポイント' },
      { optionId: '2', text: '49ポイント' },
      { optionId: '3', text: '25ポイント' },
      { optionId: '4', text: '29ポイント' },
    ],
  },
  {
    quizId: '671',
    question: 'キルアのダーツのカウントアップでの最高記録は何点？',
    options: [
      { optionId: '0', text: '1440ポイント' },
      { optionId: '1', text: '1200ポイント' },
      { optionId: '2', text: '1550ポイント' },
      { optionId: '3', text: '1860ポイント' },
      { optionId: '4', text: '1800ポイント' },
    ],
  },
  {
    quizId: '672',
    question:
      'キメラアント編からの問題です。\nメレオロンの第2の能力、「メレオロンが呼吸を止めている間は、何人たりともメレオロンの存在に気付かない」\nこの能力名は？',
    options: [
      { optionId: '0', text: '神の不在証明' },
      { optionId: '1', text: '完璧な不在証明' },
      { optionId: '2', text: '不在の究極系' },
      { optionId: '3', text: '透明蟻の悪事' },
      { optionId: '4', text: '居ない居ない作戦' },
    ],
  },
  {
    quizId: '673',
    question: 'キメラアント編からの問題です。\n王は何局で、碁のプロを倒した？',
    options: [
      { optionId: '0', text: '10局' },
      { optionId: '1', text: '8局' },
      { optionId: '2', text: '6局' },
      { optionId: '3', text: '4局' },
      { optionId: '4', text: '5局' },
    ],
  },
  {
    quizId: '674',
    question: 'モラウの能力、ディープパープルは漢字でどのように書く？',
    options: [
      { optionId: '0', text: '紫煙機兵隊' },
      { optionId: '1', text: '深紫煙兵隊' },
      { optionId: '2', text: '紫色煙軍隊' },
      { optionId: '3', text: '深紫煙軍隊' },
      { optionId: '4', text: '紫煙軍隊' },
    ],
  },
  {
    quizId: '675',
    question: 'モラウが作れる紫煙機兵隊（ディープパープル）の最大数は何体？',
    options: [
      { optionId: '0', text: '216体' },
      { optionId: '1', text: '251体' },
      { optionId: '2', text: '151体' },
      { optionId: '3', text: '51体' },
      { optionId: '4', text: '476体' },
    ],
  },
  {
    quizId: '676',
    question:
      'キメラアント編、モラウ対ヂートゥからの問題です。\nヂートゥの能力は、触れた対象者と共に異空間に飛び、鬼ごっこをするといったものです。\n能力をかけられた相手は一定時間以内にヂートゥをタッチしなければいけません。\n何時間以内にヂートゥをタッチしないといけない？',
    options: [
      { optionId: '0', text: '8時間' },
      { optionId: '1', text: '10時間' },
      { optionId: '2', text: '12時間' },
      { optionId: '3', text: '14時間' },
      { optionId: '4', text: '16時間' },
    ],
  },
  {
    quizId: '677',
    question: 'ノヴの能力、「4次元マンション」は何と読む？',
    options: [
      { optionId: '0', text: 'ハイドアンドシーク' },
      { optionId: '1', text: 'フォーディメンシー' },
      { optionId: '2', text: 'ドラエモンポケット' },
      { optionId: '3', text: 'ワールドタイム' },
      { optionId: '4', text: 'アロエヨーク' },
    ],
  },
  {
    quizId: '678',
    question:
      'ノヴの能力、「4次元マンション（ハイドアンドシーク）」は何階立てのマンション？',
    options: [
      { optionId: '0', text: '4階立て' },
      { optionId: '1', text: '5階立て' },
      { optionId: '2', text: '3階立て' },
      { optionId: '3', text: '6階立て' },
      { optionId: '4', text: '2階立て' },
    ],
  },
  {
    quizId: '679',
    question:
      'ノヴの能力、「4次元マンション（ハイドアンドシーク）」は4階立てのマンションですが、\n全部で何部屋ある？',
    options: [
      { optionId: '0', text: '21部屋' },
      { optionId: '1', text: '19部屋' },
      { optionId: '2', text: '17部屋' },
      { optionId: '3', text: '15部屋' },
      { optionId: '4', text: '13部屋' },
    ],
  },
  {
    quizId: '680',
    question:
      'キメラアント編、軍儀からの問題です。\n王が考えついた帥を孤立する作戦「離隠」、正しくは何という？',
    options: [
      { optionId: '0', text: '孤孤狸固' },
      { optionId: '1', text: '穴熊' },
      { optionId: '2', text: '美濃' },
      { optionId: '3', text: '矢倉' },
      { optionId: '4', text: '舟囲い' },
    ],
  },
  {
    quizId: '681',
    question:
      'キメラアント編、モラウ対ヂートゥからの問題です。\n追い詰められたヂートゥは新たな能力を産みだします。\n新たな能力とは何？',
    options: [
      { optionId: '0', text: 'ホウガンとクロウ' },
      { optionId: '1', text: 'サッカーボールと野球ボール' },
      { optionId: '2', text: '盾と矛' },
      { optionId: '3', text: '携帯電話とパソコン' },
      { optionId: '4', text: '刀と弓' },
    ],
  },
  {
    quizId: '682',
    question: 'キメラアント編からの問題です。\nフラッタは誰にやられた？',
    options: [
      { optionId: '0', text: 'ノヴ' },
      { optionId: '1', text: 'モラウ' },
      { optionId: '2', text: 'キルア' },
      { optionId: '3', text: 'ネテロ' },
      { optionId: '4', text: 'シュート' },
    ],
  },
  {
    quizId: '683',
    question:
      'キメラアント編からの問題です。\nレオルの能力、レンタルポッドは漢字でどのように書く？',
    options: [
      { optionId: '0', text: '謝債発行機' },
      { optionId: '1', text: '貸借念能力' },
      { optionId: '2', text: '恩受能力借' },
      { optionId: '3', text: '他人能力使' },
      { optionId: '4', text: '盗賊の極意' },
    ],
  },
  {
    quizId: '684',
    question:
      'キメラアント編からの問題です。\nレオルの能力、「謝債発行機（レンタルポッド）」は、対象者に恩を売り、その見返りとして対象者の特殊能力を一時的に借りることができます。\nレンタル一回につき、どのくらいの時間他人の能力を使うことができる？',
    options: [
      { optionId: '0', text: '1時間' },
      { optionId: '1', text: '10分' },
      { optionId: '2', text: '30分' },
      { optionId: '3', text: '1日' },
      { optionId: '4', text: '8時間' },
    ],
  },
  {
    quizId: '685',
    question:
      'キメラアント編からの問題です。\n王はコムギに軍儀で賭けをしようと提案しました。\n賭けの内容はコムギが勝ったらコムギが望むものを何でもあげ、コムギが負けたら何かもらうといったものでした。\nコムギが負けたら何をもらうと王は言った？\n（結局この賭けはおこなわれなかった）',
    options: [
      { optionId: '0', text: '左腕' },
      { optionId: '1', text: '右腕' },
      { optionId: '2', text: '母親' },
      { optionId: '3', text: '父親' },
      { optionId: '4', text: '両耳' },
    ],
  },
  {
    quizId: '686',
    question:
      'キメラアント編からの問題です。\nコムギが王に言った軍儀の棋士の格言とは何？',
    options: [
      { optionId: '0', text: '軍儀王 一度負ければ ただの人' },
      { optionId: '1', text: '相穴熊では角より金' },
      { optionId: '2', text: '一歩千金' },
      { optionId: '3', text: '王手するより縛りと必至' },
      { optionId: '4', text: '鬼より怖い両王手' },
    ],
  },
  {
    quizId: '687',
    question: 'キメラアント編からの問題です。\nコムギは何人家族？',
    options: [
      { optionId: '0', text: '12人家族' },
      { optionId: '1', text: '8人家族' },
      { optionId: '2', text: '10人家族' },
      { optionId: '3', text: '11人家族' },
      { optionId: '4', text: '9人家族' },
    ],
  },
  {
    quizId: '688',
    question:
      'キメラアント編からの問題です。\n王はコムギに何か賭けようと提案しました。\nその時、コムギの軍儀に対する覚悟を知り、王は自分が許せなくなり、自分の体の一部をちぎりました。\nどの部位をちぎった？',
    options: [
      { optionId: '0', text: '左腕' },
      { optionId: '1', text: '右腕' },
      { optionId: '2', text: '左足' },
      { optionId: '3', text: '右足' },
      { optionId: '4', text: '尻尾' },
    ],
  },
  {
    quizId: '689',
    question:
      'キメラアント編からの問題です。\nビゼフ長官は女性を数名宮殿に呼びました。\n何人呼んだ？',
    options: [
      { optionId: '0', text: '5人' },
      { optionId: '1', text: '4人' },
      { optionId: '2', text: '6人' },
      { optionId: '3', text: '7人' },
      { optionId: '4', text: '8人' },
    ],
  },
  {
    quizId: '690',
    question:
      'キメラアント編から難易度マックスの問題です。\nビゼフ長官は肉のリストから5名の女性を選びました。\nこの時呼んだNoは？',
    options: [
      { optionId: '0', text: '2・16・79・103・119' },
      { optionId: '1', text: '2・18・87・106・119' },
      { optionId: '2', text: '5・26・79・108・159' },
      { optionId: '3', text: '17・18・27・29・36' },
      { optionId: '4', text: '22・26・79・118・57' },
    ],
  },
  {
    quizId: '691',
    question:
      'キメラアント編からの問題です。\nノヴが4次元マンションの出口を設置するため宮殿に侵入した時、兵隊蟻と遭遇してしまいました。\nその時ノヴが使った能力「スクリーム」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '窓を開く者' },
      { optionId: '1', text: '瞬間的に消え去るもの' },
      { optionId: '2', text: '異次元への移動' },
      { optionId: '3', text: '外の世界' },
      { optionId: '4', text: 'マンションへの移動' },
    ],
  },
  {
    quizId: '692',
    question:
      'キメラアント編、モラウ対レオルからの問題です。\nレオルがモラウと戦った時に聞いていた音楽のバンド名は？',
    options: [
      { optionId: '0', text: 'ブラックプラネット' },
      { optionId: '1', text: 'ブラックストーンズ' },
      { optionId: '2', text: 'トラネス' },
      { optionId: '3', text: 'スイーツスマイル' },
      { optionId: '4', text: 'ポップコーンハネムーン' },
    ],
  },
  {
    quizId: '693',
    question:
      'キメラアント編、モラウ対レオルからの問題です。\nレオルがモラウと戦った時に使った能力、TUBE（イナムラ）は誰からレンタルしたもの？',
    options: [
      { optionId: '0', text: 'グラチャン' },
      { optionId: '1', text: 'クルック' },
      { optionId: '2', text: 'チードル' },
      { optionId: '3', text: 'パリストン' },
      { optionId: '4', text: 'サンビカ' },
    ],
  },
  {
    quizId: '694',
    question:
      'キメラアント編から難易度マックスの問題です。\nキルアがイカルゴに運ばれた病院での治療費はいくらだった？',
    options: [
      { optionId: '0', text: '180万ジェニー' },
      { optionId: '1', text: '120万ジェニー' },
      { optionId: '2', text: '150万ジェニー' },
      { optionId: '3', text: '130万ジェニー' },
      { optionId: '4', text: '170万ジェニー' },
    ],
  },
  {
    quizId: '695',
    question:
      'キメラアント編、キルアがイカルゴを仲間に誘った時からの問題です。\n仲間に誘われて泣きながら喜ぶイカルゴに対して、キルアはこれからイカルゴが突っ込む世界は非常に厳しい世界だと伝えます。\nキルアが「来れるか、こっちへ？」と言った時イカルゴはなんて答えた？',
    options: [
      {
        optionId: '0',
        text: 'へっ愚問だな。目の前に楽園だぜ？\n行くさ。何をおいてもな！！',
      },
      {
        optionId: '1',
        text: 'こんな日を待ちわびていた。\n当たり前だろ？行くさ！',
      },
      {
        optionId: '2',
        text: 'キルア・・・お前は光だ。時々眩しすぎて真っ直ぐ見れないけど、それでもキルアの傍にいていいかな・・・？',
      },
      {
        optionId: '3',
        text: '生まれ変わる日がついに来た。\n行くさ！！今日が俺の誕生日だ！！！',
      },
      { optionId: '4', text: '当たり前だ！！！俺はもう人間だ！！！！！' },
    ],
  },
  {
    quizId: '696',
    question:
      'キメラアント編からの問題です。\nレオル団雑務兵「シドレ」\n人間の時の名前は？',
    options: [
      { optionId: '0', text: 'レイナ' },
      { optionId: '1', text: 'ジュリナ' },
      { optionId: '2', text: 'ユウコ' },
      { optionId: '3', text: 'ミナミ' },
      { optionId: '4', text: 'アツコ' },
    ],
  },
  {
    quizId: '697',
    question:
      'キメラアント編からの問題です。\n終戦後、ブロヴータの助けもあり、無事故郷に帰ることができたレイナ。\nレイナは何団の雑務兵だった？',
    options: [
      { optionId: '0', text: 'レオル' },
      { optionId: '1', text: 'ウェルフィン' },
      { optionId: '2', text: 'ペギー' },
      { optionId: '3', text: 'コルト' },
      { optionId: '4', text: 'ヂートゥ' },
    ],
  },
  {
    quizId: '698',
    question:
      'キメラアント編からの問題のす。\n終戦後、ブロヴータの助けもあり、無事故郷に帰ることができたレイナ。\nレイナの蟻として名前は何？',
    options: [
      { optionId: '0', text: 'シドレ' },
      { optionId: '1', text: 'ジュリナ' },
      { optionId: '2', text: 'ユウコ' },
      { optionId: '3', text: 'ミナミ' },
      { optionId: '4', text: 'アツコ' },
    ],
  },
  {
    quizId: '699',
    question:
      'キメラアント編からの問題です。\nノヴが4次元マンションの出口を設置するため宮殿に侵入した時、兵隊蟻と遭遇してしまいました。\nこの兵隊蟻の名前は？',
    options: [
      { optionId: '0', text: 'タラゲッテ' },
      { optionId: '1', text: 'マエノレ' },
      { optionId: '2', text: 'インザギ' },
      { optionId: '3', text: 'シドレ' },
      { optionId: '4', text: 'コバーン' },
    ],
  },
  {
    quizId: '700',
    question:
      'キメラアント編からの問題です。\n宮殿突入直後、イカルゴのためにキルアは二匹の戦闘兵蟻を倒します。\nこの二人の蟻の名前は？',
    options: [
      { optionId: '0', text: 'インザギ、マエノレ' },
      { optionId: '1', text: 'レイケイ、ゴラン' },
      { optionId: '2', text: 'チオーナ、バイタル' },
      { optionId: '3', text: 'ゼム、ポコロ' },
      { optionId: '4', text: 'ガフツ、ビホーン' },
    ],
  },
  {
    quizId: '701',
    question:
      'キメラアント編からの問題です。\nヂートゥの新能力「モンローウォーク」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '紋露戦苦' },
      { optionId: '1', text: '月海徒歩' },
      { optionId: '2', text: '門炉魚句' },
      { optionId: '3', text: '猫蟻戦火' },
      { optionId: '4', text: '揉呂楽来' },
    ],
  },
  {
    quizId: '702',
    question:
      'キメラアント編からの問題です。\nヂートゥの新能力「紋露戦苦」は何と読む？',
    options: [
      { optionId: '0', text: 'モンローウォーク' },
      { optionId: '1', text: 'モンローバトル' },
      { optionId: '2', text: 'モンローペイン' },
      { optionId: '3', text: 'モンローマリリン' },
      { optionId: '4', text: 'モンローノーマ' },
    ],
  },
  {
    quizId: '703',
    question:
      'キメラアント編からの問題です。\n討伐隊が宮殿に突入するおよそ2～3分ほど前、東ゴルドー共和国のはるか上空を飛ぶ怪鳥から二人の男が飛び降りました。\nこのことに一番初めに気がついたのは誰？',
    options: [
      { optionId: '0', text: 'ピトー' },
      { optionId: '1', text: 'プフ' },
      { optionId: '2', text: 'ユピー' },
      { optionId: '3', text: 'キルア' },
      { optionId: '4', text: '王' },
    ],
  },
  {
    quizId: '704',
    question:
      'キメラアント編からの問題です。\n宮殿突入10秒前。モラウのカウントダウンと共に、ゴンの瞳が深く暗く、そして静かに冷たく沈んでいきました。\nこのことに気がついたのは誰？',
    options: [
      { optionId: '0', text: 'キルア' },
      { optionId: '1', text: 'モラウ' },
      { optionId: '2', text: 'イカルゴ' },
      { optionId: '3', text: 'シュート' },
      { optionId: '4', text: 'ナックル' },
    ],
  },
  {
    quizId: '705',
    question: 'ゼノの能力「ドラゴンダイブ」\n漢字でどのように書く？',
    options: [
      { optionId: '0', text: '龍星群' },
      { optionId: '1', text: '雷龍' },
      { optionId: '2', text: '龍空潜' },
      { optionId: '3', text: '龍流竜' },
      { optionId: '4', text: '無数竜' },
    ],
  },
  {
    quizId: '706',
    question:
      'キメラアント編からの問題です。\nピトーが全力で戦う時に発現させる念能力「テレプシコーラ」\n漢字でどのように書く？',
    options: [
      { optionId: '0', text: '黒子無想' },
      { optionId: '1', text: '黒白分明' },
      { optionId: '2', text: '弾丸黒子' },
      { optionId: '3', text: '暗黒時代' },
      { optionId: '4', text: '円頂黒衣' },
    ],
  },
  {
    quizId: '707',
    question:
      'キメラアント編からの問題です。\nピトーが全力で戦う時に発現させる念能力「黒子無想」\n何と読む？',
    options: [
      { optionId: '0', text: 'テレプシコーラ' },
      { optionId: '1', text: 'テレプシソーダ' },
      { optionId: '2', text: 'テレプシファンタ' },
      { optionId: '3', text: 'テレプシサイダー' },
      { optionId: '4', text: 'テレプシペプシ' },
    ],
  },
  {
    quizId: '708',
    question:
      'キメラアント編。\nピトーがネテロに黒子夢想（テレプシコーラ）を使おうとした時、ネテロが言った名言からの問題です。\n「ほっほ。受け攻めいくつか予想しとったが、」\n続く言葉は何？',
    options: [
      { optionId: '0', text: 'そりゃ悪手だろ。蟻んコ' },
      { optionId: '1', text: 'お互い大変だな。蟻んコ' },
      { optionId: '2', text: 'いい技だ。太刀筋が見えぬ' },
      { optionId: '3', text: 'そんなに死にたいか？' },
      { optionId: '4', text: 'まぁすぐに詰んでやろう' },
    ],
  },
  {
    quizId: '709',
    question: '一日一万回感謝の正拳突きを始めたのは、ネテロが何才の時？',
    options: [
      { optionId: '0', text: '46歳' },
      { optionId: '1', text: '52歳' },
      { optionId: '2', text: '38歳' },
      { optionId: '3', text: '40歳' },
      { optionId: '4', text: '44歳' },
    ],
  },
  {
    quizId: '710',
    question:
      'ネテロ。46歳。冬。\n己の肉体と武術に限界を感じ悩みに悩み抜いた結果、彼がたどり着いた結果は感謝であった。\n気を整えて、拝み、祈り、構えて、突く。\nこの一連の動作を一日何回やった？',
    options: [
      { optionId: '0', text: '一万回' },
      { optionId: '1', text: '千回' },
      { optionId: '2', text: '十万回' },
      { optionId: '3', text: '百万回' },
      { optionId: '4', text: '一千万回' },
    ],
  },
  {
    quizId: '711',
    question:
      'ネテロが46歳から始めた一日一万回の感謝の正拳突き。\n一万回突き終えるまで初日はどのくらいの時間がかかった？',
    options: [
      { optionId: '0', text: '18時間以上' },
      { optionId: '1', text: '19時間以上' },
      { optionId: '2', text: '20時間以上' },
      { optionId: '3', text: '21時間以上' },
      { optionId: '4', text: '22時間以上' },
    ],
  },
  {
    quizId: '712',
    question:
      'キメラアント編からの問題です。\nネフェルピトーが王の腕やコムギを修復した能力「玩具修理者」。\nなんと読む？',
    options: [
      { optionId: '0', text: 'ドクタープライス' },
      { optionId: '1', text: 'ドールリペアー' },
      { optionId: '2', text: 'デビルドクター' },
      { optionId: '3', text: 'デビルリペアー' },
      { optionId: '4', text: 'ムーブホスピタル' },
    ],
  },
  {
    quizId: '713',
    question:
      'キメラアント編からの問題です。\nネフェルピトーが、王の腕やコムギを修復した能力「ドクタープライス」\n漢字でどのように書く？',
    options: [
      { optionId: '0', text: '玩具修理者' },
      { optionId: '1', text: '完全完璧修理者' },
      { optionId: '2', text: '悪魔医者' },
      { optionId: '3', text: '聖母修理者' },
      { optionId: '4', text: '高値段医者' },
    ],
  },
  {
    quizId: '714',
    question:
      'キメラアント編からの問題です。\n宮殿突入直後。ユピーが形態変化と好戦的な笑みを見せた時シュートは動きを止めました。\nなぜ動きを止めた？',
    options: [
      {
        optionId: '0',
        text: '自分がこれ以上接近するとユピーはそれを迎え撃つ。その攻撃が万が一にも前にいるはずのナックル達に命中することを避けるため',
      },
      { optionId: '1', text: '精神的に遅れをとったから' },
      {
        optionId: '2',
        text: 'ピトーの円が全く感じられず、目の前には1階にいるはずのないユピーが立っているという「あり得ない場面」だったから',
      },
      {
        optionId: '3',
        text: '今まで見たことのない圧倒的強さを誇る怪物を目の前にして圧倒されたから',
      },
      {
        optionId: '4',
        text: '一個の生命に対する慈愛溢れる振る舞い。これを侵しては大義を失い、人ですらなくなるから。',
      },
    ],
  },
  {
    quizId: '715',
    question:
      'キメラアント編からの問題です。\n龍星群（ドラゴンダイブ）が宮殿に降り注いでいくのを見て、プフは3階玉座の間へ急ぎました。\n凄まじい振動と共に大階段が崩壊する轟音の鳴り響く中、玉座へたどり着いたプフ。\n主のいない王座の間でプフは何をした？',
    options: [
      { optionId: '0', text: '静かに微笑んだ' },
      { optionId: '1', text: '高らかに笑った' },
      { optionId: '2', text: '思い出し笑いをした' },
      { optionId: '3', text: '照れ笑いをした' },
      { optionId: '4', text: '大爆笑した' },
    ],
  },
  {
    quizId: '716',
    question:
      'キメラアント編からの問題です。\n龍星群（ドラゴンダイブ）が宮殿を貫いた瞬間、ピトーは円を出し王の居場所を知りました。\n王はどこにいた？',
    options: [
      { optionId: '0', text: '西塔2Ｆ迎賓の間' },
      { optionId: '1', text: '東塔2Ｆ琥珀の間' },
      { optionId: '2', text: '東塔3Ｆ鳳凰の間' },
      { optionId: '3', text: '東塔4Ｆ芙蓉の間' },
      { optionId: '4', text: '西塔3Ｆ鶴の間' },
    ],
  },
  {
    quizId: '717',
    question:
      'キメラアント編からの問題です。\nユピーに対して、ナックルの能力、天上不知唯我独損（ハコワレ）が発動したのは宮殿突入何秒後の出来事？\n一番近いものを選べ。',
    options: [
      { optionId: '0', text: '3秒01' },
      { optionId: '1', text: '3秒28' },
      { optionId: '2', text: '5秒41' },
      { optionId: '3', text: '4秒24' },
      { optionId: '4', text: '6秒11' },
    ],
  },
  {
    quizId: '718',
    question:
      'キメラアント編からの問題です。\nユピーの拳（パンチ）により大階段が崩壊されたのは、宮殿突入何秒後の出来事？\n一番近いものを選べ。',
    options: [
      { optionId: '0', text: '3秒28' },
      { optionId: '1', text: '18秒56' },
      { optionId: '2', text: '1分25秒44' },
      { optionId: '3', text: '2分8秒64' },
      { optionId: '4', text: '12分3秒11' },
    ],
  },
  {
    quizId: '719',
    question:
      'キメラアント編からの問題です。\n遺体を我が身の様に操作できる、イカルゴの能力名は？',
    options: [
      { optionId: '0', text: '死体とあそぶな子供達' },
      { optionId: '1', text: '死体とあそぶ子供達' },
      { optionId: '2', text: '死体とあそぶ大人達' },
      { optionId: '3', text: '死体とあそぶな大人達' },
      { optionId: '4', text: '死体とあそぶ金持ち達' },
    ],
  },
  {
    quizId: '720',
    question:
      'キメラアント編からの問題です。\nシュートは片足を腕に乗せ、ある部位を隠すというスタイルでユピーと戦いました。\n正しいスタイルはどれ？',
    options: [
      { optionId: '0', text: '左足で腕の上に立ち、右目をふさぐ' },
      { optionId: '1', text: '右足で腕の上に立ち、右目をふさぐ' },
      { optionId: '2', text: '左足で腕の上に立ち、両耳をふさぐ' },
      { optionId: '3', text: '左足で腕の上に立ち、左目をふさぐ' },
      { optionId: '4', text: '右足で腕の上に立ち、両耳をふさぐ' },
    ],
  },
  {
    quizId: '721',
    question:
      'キメラアント編からの問題です。\n宮殿に侵入後にキルアが殺した二人の戦闘兵「インザギ」と「マエノレ」は何団の戦闘兵？',
    options: [
      { optionId: '0', text: 'ウェルフィン' },
      { optionId: '1', text: 'レオル' },
      { optionId: '2', text: 'コルト' },
      { optionId: '3', text: 'ブロヴータ' },
      { optionId: '4', text: 'ヂートゥ' },
    ],
  },
  {
    quizId: '722',
    question:
      'キメラアント編からの問題です。\nプフと王を分断するために使ったモラウの能力名は？',
    options: [
      { optionId: '0', text: '監獄ロック' },
      { optionId: '1', text: '暗い宿' },
      { optionId: '2', text: '脱出不可の煙牢屋' },
      { optionId: '3', text: 'ショーシャンクの壁' },
      { optionId: '4', text: '煙部屋' },
    ],
  },
  {
    quizId: '723',
    question:
      'キメラアント編の時、ゼノが来ていた服の胸に書かれていた文字は何？',
    options: [
      { optionId: '0', text: '生涯現役' },
      { optionId: '1', text: '一日一殺' },
      { optionId: '2', text: '感謝感激' },
      { optionId: '3', text: '行雲流水' },
      { optionId: '4', text: '風光明媚' },
    ],
  },
  {
    quizId: '724',
    question:
      'キメラアント編からの問題です。\n王座の間を覆うモラウの煙を、ゴンが発見したのは宮殿突入何秒後の出来事？\n一番近い時間を答えよ。',
    options: [
      { optionId: '0', text: '6秒52' },
      { optionId: '1', text: '8秒73' },
      { optionId: '2', text: '3秒28' },
      { optionId: '3', text: '3秒01' },
      { optionId: '4', text: '18秒56' },
    ],
  },
  {
    quizId: '725',
    question:
      'キメラアント編からの問題です。\nプフの能力「スピリチュアルメッセージ」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '鱗粉乃愛泉' },
      { optionId: '1', text: '蠅の王' },
      { optionId: '2', text: '微生物達の手紙' },
      { optionId: '3', text: '散乱乃衆知' },
      { optionId: '4', text: '真実乃剣' },
    ],
  },
  {
    quizId: '726',
    question:
      'キメラアント編からの問題です。\n王とネテロを運ぶために、ゼノが使った能力名は？',
    options: [
      { optionId: '0', text: '龍頭戯画' },
      { optionId: '1', text: '龍星群' },
      { optionId: '2', text: '雷龍' },
      { optionId: '3', text: '龍流竜' },
      { optionId: '4', text: '暴走竜' },
    ],
  },
  {
    quizId: '727',
    question:
      'キメラアント編からの問題です。\nゼノの龍頭戯画（ドラゴンヘッド）に運ばれ、王とネテロが宮殿を離れたのは突入してからどのくらい時間が経った時ですか？\n一番近い時間を答えよ。',
    options: [
      { optionId: '0', text: '18秒56' },
      { optionId: '1', text: '3秒01' },
      { optionId: '2', text: '3秒28' },
      { optionId: '3', text: '5秒41' },
      { optionId: '4', text: '1分25秒44' },
    ],
  },
  {
    quizId: '728',
    question:
      'キメラアント編からの問題です。\nフラッタの死体を借りているイカルゴが、エレベーターに乗ろうとした時、ヂートゥ、ブロヴーダと遭遇してしまいました。\nこれは、突入してからどのくらい時間が経った時？',
    options: [
      { optionId: '0', text: '18秒68' },
      { optionId: '1', text: '35秒44' },
      { optionId: '2', text: '52秒11' },
      { optionId: '3', text: '1分5秒84' },
      { optionId: '4', text: '2分2秒14' },
    ],
  },
  {
    quizId: '729',
    question:
      'キメラアント編からの問題です。\nフラッタの死体を借りているイカルゴが、エレベータにたどり着いたのと同時に、廊下の両側の扉が開きました。\n扉から出て来たのは誰と誰？',
    options: [
      { optionId: '0', text: 'ヂートゥとブロヴーダ' },
      { optionId: '1', text: 'ヂートゥとウェルフィン' },
      { optionId: '2', text: 'ウェルフィンとブロヴーダ' },
      { optionId: '3', text: 'ヒナとブロヴーダ' },
      { optionId: '4', text: 'ヒナとウェルフィン' },
    ],
  },
  {
    quizId: '730',
    question:
      'キメラアント編からの問題です。\n宮殿地下へのエレベーターを利用するには様々な制約があります。\n「地下から上へ登る時は一人しか乗れない。」\n「番号登録時の身体データが著しく異なる場合エレベーター内に閉じ込めれる」等です。\nこのような制約を受けずにエレベーターを利用できるのは二人だけいます。\n誰と誰？',
    options: [
      { optionId: '0', text: 'ビセフとマルコス' },
      { optionId: '1', text: 'ディーゴとビセフ' },
      { optionId: '2', text: 'ディーゴとマルコス' },
      { optionId: '3', text: 'ピトーとプフ' },
      { optionId: '4', text: 'プフとビセフ' },
    ],
  },
  {
    quizId: '731',
    question:
      'キメラアント編からの問題です。\nコムギを治療していたピトーのもとに、ゴンとキルアが現れます。\n勝負を申し込むゴン、一歩引いて状況を分析するキルア。\n二人を見たピトーは何をした？',
    options: [
      {
        optionId: '0',
        text: '両膝を地面に突き、頭を下げ、手の平を上に向けた（害意のないことを示す所作）',
      },
      {
        optionId: '1',
        text: '両膝、両方の手の平、頭を地面につけ、謝罪した（土下座）',
      },
      { optionId: '2', text: '仰向けになり、害意のないことを示した' },
      {
        optionId: '3',
        text: '左膝を地面につけ、右膝は立て、立てた膝の上にを肘を置き、頭を下げ、敵の言うことを聞こうとした',
      },
      {
        optionId: '4',
        text: '背筋を伸ばし、直立に立ち、右肘を張り、右手を額に置いた（敬礼）',
      },
    ],
  },
  {
    quizId: '732',
    question:
      'キメラアント編。\nコムギを治療していたピトーのもとに、ゴンとキルアが現れます。\n勝負を申し込むゴン、一歩引いて状況を分析するキルア、コムギを助けさせてくれと望むピトー。\nカイトに対しては非道いことをしたのに、\nコムギを救けようとしているピトーにゴンは怒り、構わず攻撃をしようとします。\nそれを止めたキルア。\nその時ゴンがキルアに言った言葉からの問題です。\n「････････････････キルアは･･･････いいよね。冷静でいられて、」\n続く言葉は？',
    options: [
      { optionId: '0', text: '関係ないからっ' },
      { optionId: '1', text: '感情がないからっ' },
      { optionId: '2', text: '平気で人も殺せるもんね・・・・・・' },
      { optionId: '3', text: 'そして嫌なことから逃げてて' },
      { optionId: '4', text: 'どうでもいいからっ' },
    ],
  },
  {
    quizId: '733',
    question:
      'キメラアント編からの問題です。\nフラッタは何団に所属するキメラアント？\n師団長の名前を答えよ。',
    options: [
      { optionId: '0', text: 'レオル' },
      { optionId: '1', text: 'ヂートゥ' },
      { optionId: '2', text: 'ウェルフィン' },
      { optionId: '3', text: 'コルト' },
      { optionId: '4', text: 'メレオロン' },
    ],
  },
  {
    quizId: '734',
    question:
      'ナックルの能力、天上不知唯我独損（ハコワレ）が発動するとあるマスコットが対象者に付きます。\nこのマスコットの名前は？',
    options: [
      { optionId: '0', text: 'ポットクリン' },
      { optionId: '1', text: 'ポックル' },
      { optionId: '2', text: 'ジャックポット' },
      { optionId: '3', text: 'モンキーポット' },
      { optionId: '4', text: 'ホットポット' },
    ],
  },
  {
    quizId: '735',
    question:
      'キメラアント編から難易度マックスの問題です。\nユピーに対して、ナックルは天上不知唯我独損（ハコワレ）を発動させました。\n天上不知唯我独損（ハコワレ）が発動してから10秒経過時点での借金（ポットクリンの数字）はいくつ？',
    options: [
      { optionId: '0', text: '649' },
      { optionId: '1', text: '647' },
      { optionId: '2', text: '632' },
      { optionId: '3', text: '524' },
      { optionId: '4', text: '499' },
    ],
  },
  {
    quizId: '736',
    question:
      'キメラアント編から難易度マックスの問題です。\nユピーに対して、メレオロンとのコンボでナックルは天上不知唯我独損（ハコワレ）を発動させました。\n最初に神の共犯者を解除した時の借金（ポットクリンの数字）はいくつ？',
    options: [
      { optionId: '0', text: '322' },
      { optionId: '1', text: '315' },
      { optionId: '2', text: '649' },
      { optionId: '3', text: '647' },
      { optionId: '4', text: '524' },
    ],
  },
  {
    quizId: '737',
    question:
      'キメラアント編からの問題です。\nプフの能力、麟粉乃愛泉（スピリチュアルメッセージ）は相手の周囲を鱗粉で覆い、オーラの流れを鮮明にすることで相手の精神状態を知ることができます。\nモラウが監獄ロックでプフを閉じ込めた直後、プフは麟粉乃愛泉（スピリチュアルメッセージ）を使い、モラウの精神状態を調べました。\nその結果は？',
    options: [
      { optionId: '0', text: '警戒2、覚悟3、自信5' },
      { optionId: '1', text: '自信2、不安3、使命5' },
      { optionId: '2', text: '希望1、自信2、覚悟7' },
      { optionId: '3', text: '称賛2、自信3、使命5' },
      { optionId: '4', text: '不安3、覚悟3、警戒4' },
    ],
  },
  {
    quizId: '738',
    question:
      'キメラアント編からの問題です。\n宮殿地下へのエレベーターは降下は自由に行えますが、上昇時には暗証番号の入力が求められます。\n何桁の暗証番号が求めれる？',
    options: [
      { optionId: '0', text: '8桁' },
      { optionId: '1', text: '12桁' },
      { optionId: '2', text: '16桁' },
      { optionId: '3', text: '20桁' },
      { optionId: '4', text: '24桁' },
    ],
  },
  {
    quizId: '739',
    question:
      'キメラアント編からの問題です。\nコムギを治療していたピトーの元に、ゴンとキルアが現れます。\nピトーは「ゴンに対し敵意がないこと」、「治療が終わったあとも何もしないでゴンの言うことを聞くこと」を証明するために自身の体の一部を破壊しました。\nどこを破壊した？',
    options: [
      { optionId: '0', text: '左腕' },
      { optionId: '1', text: '右腕' },
      { optionId: '2', text: '右足' },
      { optionId: '3', text: '左足' },
      { optionId: '4', text: '両足' },
    ],
  },
  {
    quizId: '740',
    question:
      'キメラアント編から難易度マックスの問題です。\nユピーに対して、ナックルは天上不知唯我独損（ハコワレ）を発動させました。\n天上不知唯我独損（ハコワレ）が発動してから20秒経過時点での借金（ポットクリンの数字）はいくつ？',
    options: [
      { optionId: '0', text: '354' },
      { optionId: '1', text: '649' },
      { optionId: '2', text: '584' },
      { optionId: '3', text: '1020' },
      { optionId: '4', text: '151' },
    ],
  },
  {
    quizId: '741',
    question:
      'キメラアント編からの問題です。\nウェルフィンの能力、「ミサイルマン」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '卵男' },
      { optionId: '1', text: '大浦洞男' },
      { optionId: '2', text: '銀河男' },
      { optionId: '3', text: '薔薇男' },
      { optionId: '4', text: '鉄砲男' },
    ],
  },
  {
    quizId: '742',
    question:
      'キメラアント編からの問題です。\nユピーは生まれて初めて精神に過大な負荷（ストレス）を受けることで凄まじい破壊力を手に入れました。（ナックルは爆発と表現していた）\n初めての破壊には大きな快感が伴い、その直後にある感情に襲われました。\nどういった感情に襲われた？',
    options: [
      { optionId: '0', text: '強い喪失感' },
      { optionId: '1', text: '敵に対する惜しみない称賛' },
      { optionId: '2', text: '聖母の愛' },
      { optionId: '3', text: '今までにない怒り' },
      { optionId: '4', text: '今までの全てに対する感謝' },
    ],
  },
  {
    quizId: '743',
    question:
      'キメラアント編からの問題です。\nナックルは、過去に仲間を逃がすため警官を殴り倒し、パトカー4台白バイ2台を相手に脚力のみで一昼夜走り回り、結局逃げおおせたことがあります。\nそれはいつのできごと？',
    options: [
      { optionId: '0', text: '小学校卒業の日' },
      { optionId: '1', text: '小学校入学式の日' },
      { optionId: '2', text: '中学校卒業の日' },
      { optionId: '3', text: '中学校入学の日' },
      { optionId: '4', text: '幼稚園入学の日' },
    ],
  },
  {
    quizId: '744',
    question: 'キメラアント編からの問題です。\nヂートゥは誰に殺された？',
    options: [
      { optionId: '0', text: 'シルバ' },
      { optionId: '1', text: 'ゼノ' },
      { optionId: '2', text: 'ピトー' },
      { optionId: '3', text: 'ナックル' },
      { optionId: '4', text: 'モラウ' },
    ],
  },
  {
    quizId: '745',
    question:
      'キメラアント編からの問題です。\n宮殿北部の地下にはトンボを連想させる形の巨大な倉庫群が広がっています。\nビセフが女性たちを囲って密かに私物化していたのは何エリアの倉庫？',
    options: [
      { optionId: '0', text: 'Dエリア' },
      { optionId: '1', text: 'Aエリア' },
      { optionId: '2', text: 'Bエリア' },
      { optionId: '3', text: 'Cエリア' },
      { optionId: '4', text: 'Dエリア' },
    ],
  },
  {
    quizId: '746',
    question:
      'キメラアント編から難易度マックスの問題です。\n宮殿北部の地下にはトンボを連想させる形の巨大な倉庫群が広がっています。\nAエリアは何用の倉庫？',
    options: [
      { optionId: '0', text: '武器・弾薬庫エリア' },
      { optionId: '1', text: '文化財・国宝エリア' },
      { optionId: '2', text: '総帥専用私物エリア' },
      { optionId: '3', text: '非常食・備蓄エリア' },
      { optionId: '4', text: '総帥専用シェルターエリア' },
    ],
  },
  {
    quizId: '747',
    question:
      'キメラアント編からの問題です。\n宮殿北部の地下にはトンボを連想させる形の巨大な倉庫群が広がっています。\nBエリアは何用の倉庫？',
    options: [
      { optionId: '0', text: '文化財・国宝エリア' },
      { optionId: '1', text: '武器・弾薬庫エリア' },
      { optionId: '2', text: '総帥専用私物エリア' },
      { optionId: '3', text: '非常食・備蓄エリア' },
      { optionId: '4', text: '総帥専用シェルターエリア' },
    ],
  },
  {
    quizId: '748',
    question:
      'キメラアント編からの問題です。\n宮殿北部の地下にはトンボを連想させる形の巨大な倉庫群が広がっています。\nCエリアは何用の倉庫？',
    options: [
      { optionId: '0', text: '総帥専用私物エリア' },
      { optionId: '1', text: '文化財・国宝エリア' },
      { optionId: '2', text: '武器・弾薬庫エリア' },
      { optionId: '3', text: '警備兵エリア' },
      { optionId: '4', text: '非常食・備蓄エリア' },
    ],
  },
  {
    quizId: '749',
    question:
      'キメラアント編から難易度マックスの問題です。\n宮殿北部の地下にはトンボを連想させる形の巨大な倉庫群が広がっています。\nDエリアは何用の倉庫？',
    options: [
      { optionId: '0', text: '非常食・備蓄エリア' },
      { optionId: '1', text: '文化財・国宝エリア' },
      { optionId: '2', text: '武器・弾薬庫エリア' },
      { optionId: '3', text: '警備兵エリア' },
      { optionId: '4', text: '総帥専用シェルターエリア' },
    ],
  },
  {
    quizId: '750',
    question:
      'キメラアント編から難易度マックスの問題です。\n宮殿北部の地下にはトンボを連想させる形の巨大な倉庫群が広がっています。\nEエリアは何用の倉庫？',
    options: [
      { optionId: '0', text: '総帥専用シェルターエリア' },
      { optionId: '1', text: '文化財・国宝エリア' },
      { optionId: '2', text: '武器・弾薬庫エリア' },
      { optionId: '3', text: '警備兵エリア' },
      { optionId: '4', text: '非常食・備蓄エリア' },
    ],
  },
  {
    quizId: '751',
    question:
      'キメラアント編から難易度マックスの問題です。\n宮殿北部の地下にはトンボを連想させる形の巨大な倉庫群が広がっています。\nFエリアは何用の倉庫？',
    options: [
      { optionId: '0', text: '警備兵エリア' },
      { optionId: '1', text: '文化財・国宝エリア' },
      { optionId: '2', text: '武器・弾薬庫エリア' },
      { optionId: '3', text: '総帥専用シェルターエリア' },
      { optionId: '4', text: '非常食・備蓄エリア' },
    ],
  },
  {
    quizId: '752',
    question:
      'キメラアント編からの問題です。\nビセフの肉として宮殿に侵入した時のパームの仮名は？',
    options: [
      { optionId: '0', text: 'シンカー＝ベル' },
      { optionId: '1', text: 'スクリュー＝ベル' },
      { optionId: '2', text: 'カーブ＝ベル' },
      { optionId: '3', text: 'ストレート＝ベル' },
      { optionId: '4', text: 'スライダー＝ベル' },
    ],
  },
  {
    quizId: '753',
    question:
      'キメラアント編からの問題です。\nパームが残した念の文字をイカルゴは凝によって読み取りました。\n何と書かれていた？',
    options: [
      {
        optionId: '0',
        text: '宮殿へ、決行時まで連絡無き場合、亡き者として行動されたし',
      },
      {
        optionId: '1',
        text: 'やつらは悪魔。恐らく私は命を落とす、後は頼みます',
      },
      { optionId: '2', text: '今から王を視るため宮殿へ向かう。' },
      { optionId: '3', text: '王は宮殿に女性といる。私はそこへ向かう' },
      { optionId: '4', text: '私は恐らく死ぬ。それでも宮殿へ向かう。' },
    ],
  },
  {
    quizId: '754',
    question:
      'キメラアント編からの問題です。\n死にかけたナックルを助けたキルアの能力「ナルカミ」\n漢字でどのように書く？',
    options: [
      { optionId: '0', text: '落雷' },
      { optionId: '1', text: '鳴神' },
      { optionId: '2', text: '神雷' },
      { optionId: '3', text: '電気落下' },
      { optionId: '4', text: '鳴流歌観' },
    ],
  },
  {
    quizId: '755',
    question:
      'キメラアント編からの問題です。\nキルアの落雷（ナルカミ）により硬直しているユピーに対して、ナックルは何発パンチをぶち込んだ？',
    options: [
      { optionId: '0', text: '8発' },
      { optionId: '1', text: '6発' },
      { optionId: '2', text: '7発' },
      { optionId: '3', text: '5発' },
      { optionId: '4', text: '4発' },
    ],
  },
  {
    quizId: '756',
    question:
      'キルアの神速（カンムル）は性質上、大きく2つ分けることができます。\n1つ目は自分の意思で肉体を操作する「電光石火」です。\nでは、2つ目の相手の動きに感応して自動的に肉体が働くものを何と呼ぶ？',
    options: [
      { optionId: '0', text: '疾風迅雷' },
      { optionId: '1', text: '高速移動' },
      { optionId: '2', text: '十万電撃' },
      { optionId: '3', text: '超越状態' },
      { optionId: '4', text: '無我境地' },
    ],
  },
  {
    quizId: '757',
    question:
      'キルアの神速（カンムル）は性質上、大きく2つ分けることができます。\n1つは、相手の動きに感応して自動的に肉体が働く「疾風迅雷」です。\nでは、もう1つの自分の意思で肉体を操作するものを何と呼ぶ？',
    options: [
      { optionId: '0', text: '電光石火' },
      { optionId: '1', text: '高速移動' },
      { optionId: '2', text: '先制攻撃' },
      { optionId: '3', text: '無我境地' },
      { optionId: '4', text: '極風迅雷' },
    ],
  },
  {
    quizId: '758',
    question:
      'キメラアント編からの問題です。\nプフにキセルを奪われたモラウと、ユピーとの戦いが開始した時、紫煙機兵隊は何体いた？',
    options: [
      { optionId: '0', text: '89体' },
      { optionId: '1', text: '45体' },
      { optionId: '2', text: '70体' },
      { optionId: '3', text: '82体' },
      { optionId: '4', text: '61体' },
    ],
  },
  {
    quizId: '759',
    question:
      'キメラアント編からの問題です。\nイカルゴとブロヴーダとの戦いで、イカルゴが今までに自らの手で殺した人の数が明らかになりました。\n死体を操る能力を持つイカルゴですが、自らの手で何人の敵を殺したことがありますか？\nブロヴーダと戰う以前の人数を答えよ。',
    options: [
      { optionId: '0', text: '0人' },
      { optionId: '1', text: '1人' },
      { optionId: '2', text: '2人' },
      { optionId: '3', text: '3人' },
      { optionId: '4', text: '5人' },
    ],
  },
  {
    quizId: '760',
    question:
      'キメラアント編からの問題です。\n瓦礫に下敷きになり、動けなくなっていたビゼフ長官。\nビセフ長官はある条件のもと、ヒナに助けて貰いました。\nビセフ長官がヒナと交わしたある条件とは？',
    options: [
      { optionId: '0', text: 'ヒナに宮殿地下に眠る財宝を何でもあげる' },
      { optionId: '1', text: 'ヒナに一生服従する' },
      {
        optionId: '2',
        text: 'ビセフ長官が持つ国外にある豪邸をヒナにプレゼントする',
      },
      {
        optionId: '3',
        text: 'ビセフ長官の権力のもと、ヒナを無事に東ゴルドー国外に連れ出してあげる',
      },
      { optionId: '4', text: 'パームの居場所を吐く' },
    ],
  },
  {
    quizId: '761',
    question:
      'キメラアント編からの問題です。\n瓦礫に下敷きになり、動けなくなっていたビゼフ長官。\nビゼフ長官はあるキメラアントに助けて貰いました。\n誰に助けて貰った？',
    options: [
      { optionId: '0', text: 'ヒナ' },
      { optionId: '1', text: 'ウェルフィン' },
      { optionId: '2', text: 'ブロヴーダ' },
      { optionId: '3', text: 'メレオロン' },
      { optionId: '4', text: 'イカルゴ' },
    ],
  },
  {
    quizId: '762',
    question:
      'キメラアント編からの問題です。\nヒナ、レイナ、ビセフが地下へ財宝を取りに向かっている時、背後から尾行していた者がいます。\n尾行していたのは誰？',
    options: [
      { optionId: '0', text: 'ウェルフィン' },
      { optionId: '1', text: 'イカルゴ' },
      { optionId: '2', text: 'モラウ' },
      { optionId: '3', text: 'ブロヴーダ' },
      { optionId: '4', text: 'メレオロン' },
    ],
  },
  {
    quizId: '763',
    question: 'モラウがナックルの「怒った顔の分身」を出すのはどんな時？',
    options: [
      {
        optionId: '0',
        text: 'ナックルがぶち切れて周りが全く見えていない時（一度分身に混ざって一息ついて、現状でやるべきことを考えろというサイン）',
      },
      {
        optionId: '1',
        text: 'ナックルが油断している時（ナックルは詰が甘いという欠点があり、最後まで気を引き締めて戦えというサイン）',
      },
      {
        optionId: '2',
        text: '敵が圧倒的に強いと感じた時（とにかく逃げろというサイン）',
      },
      { optionId: '3', text: 'チャンスだと思ったとき（GOサイン）' },
      {
        optionId: '4',
        text: 'モラウに体力の限界が来たとき（短時間で勝負を決めろというサイン）',
      },
    ],
  },
  {
    quizId: '764',
    question:
      'キメラアント編からの問題です。\nコムギを治療しているピトーと、それを待っているゴンのもとに、監獄ロックから脱出したプフが来ました。\nピトーと会話を始めたプフに、ゴンが放った第一声は？',
    options: [
      { optionId: '0', text: 'お前には関係ない、黙ってろ' },
      { optionId: '1', text: 'プフ、次ゴタゴタいったらそいつ（コムギ）を殺す' },
      { optionId: '2', text: '嘘つけ、お前は先刻、俺を殺そうとした' },
      { optionId: '3', text: '終わったな、立て' },
      {
        optionId: '4',
        text: '俺はプフを信じるよ。お前もオレを信じてくれるだろ？',
      },
    ],
  },
  {
    quizId: '765',
    question:
      'キメラアント編から、難易度マックスの問題です。\nユピーに対して、ナックルは天上不知唯我独損（ハコワレ）を発動させました。\n宮殿に突入してから、7分53秒49が経過した時のポットクリンの数値はいくつ？',
    options: [
      { optionId: '0', text: '60610' },
      { optionId: '1', text: '50091' },
      { optionId: '2', text: '40410' },
      { optionId: '3', text: '74120' },
      { optionId: '4', text: '83350' },
    ],
  },
  {
    quizId: '766',
    question:
      'キメラアント編からの問題です。\nコムギを治療しているピトーと、それを待っているゴンの下に、監獄ロックから脱出したプフがきました。\nその時、プフはゴンの命令によりその場から動くことができなくなってしまいました。\nそこで、プフは自身の体を分割できる能力「蠅の王（ベルゼブブ）」を使い、外殻だけ残し、残りの体で王の下へ向かいました。\n全体のどのくらいの量で王の下へ向かった？',
    options: [
      { optionId: '0', text: '0.857142857142857' },
      { optionId: '1', text: '0.833333333333333' },
      { optionId: '2', text: '0.8' },
      { optionId: '3', text: '0.875' },
      { optionId: '4', text: '0.888888888888889' },
    ],
  },
  {
    quizId: '767',
    question:
      'キメラアント編、王VSネテロからの問題です。\n王はネテロに「力」を何のために使うと話した？',
    options: [
      { optionId: '0', text: '弱く･･･しかし生かすべき者を守るため' },
      { optionId: '1', text: '敗者を虐げるため' },
      { optionId: '2', text: '余の欲望を満たすため' },
      { optionId: '3', text: '余を邪魔する者達を排除するため' },
      { optionId: '4', text: '退屈しのぎに' },
    ],
  },
  {
    quizId: '768',
    question:
      'キメラアント編、モラウ、ナックルVSユピーからの問題です。\nモラウの紫煙機兵隊も全滅させ、あとは疲れきって動けなくなっているモラウを殺すのみとなったユピー。\n戦闘の最中に驚異的な速さで進化しモラウ達との実力差を更に大きく引き離したユピーが、この時抱いていた感情とは？',
    options: [
      { optionId: '0', text: '敗者への賞賛' },
      { optionId: '1', text: '強い喪失感' },
      { optionId: '2', text: '聖母の愛' },
      { optionId: '3', text: '今までにない怒り' },
      { optionId: '4', text: '今までの全てに対する感謝' },
    ],
  },
  {
    quizId: '769',
    question:
      'キメラアント編からの問題です。\nユピーにポットクリンを解除したのは、宮殿突入してからどのくらいの時間が経過してから？',
    options: [
      { optionId: '0', text: '11分39秒07' },
      { optionId: '1', text: '15分14秒33' },
      { optionId: '2', text: '7分31秒17' },
      { optionId: '3', text: '9分10秒23' },
      { optionId: '4', text: '24分57秒43' },
    ],
  },
  {
    quizId: '770',
    question:
      'キメラアント編、王VSネテロからの問題です。\nネテロが王に対して最初に使った百式観音は、何乃拳（なんのて）？',
    options: [
      { optionId: '0', text: '壱乃拳' },
      { optionId: '1', text: '参乃拳' },
      { optionId: '2', text: '零乃拳' },
      { optionId: '3', text: '伍乃拳' },
      { optionId: '4', text: '九乃拳' },
    ],
  },
  {
    quizId: '771',
    question:
      'キメラアント編、王VSネテロからの問題です。\nネテロが王に対して二回目に使った百式観音は、何乃拳（なんのて）？',
    options: [
      { optionId: '0', text: '参乃拳' },
      { optionId: '1', text: '零乃拳' },
      { optionId: '2', text: '伍乃拳' },
      { optionId: '3', text: '九乃拳' },
      { optionId: '4', text: '弐乃拳' },
    ],
  },
  {
    quizId: '772',
    question:
      'キメラアント編、王VSネテロからの問題です。\nネテロとの戦いを拒む王。しかしネテロのある言葉を聞き、王は戦闘する気になりました。\nネテロは王に何と言った？',
    options: [
      { optionId: '0', text: '俺に勝ったらお前の名前を教えてやる' },
      { optionId: '1', text: 'コムギをやったのは俺' },
      {
        optionId: '2',
        text: '俺と戦わなければ、今から仲間に電話をかけてコムギを殺す',
      },
      { optionId: '3', text: '俺を倒せばお前が全人類のNo.1だ' },
      { optionId: '4', text: 'もし、俺を殺らなければ他の蟻を全員殺す' },
    ],
  },
  {
    quizId: '773',
    question:
      'キメラアント編からの問題です。\n一度は自殺を計ったパームでしたが、ピトーとプフにより実験兵士として治されました。\nピトーとプフは、パームのことを何と呼んでいる？',
    options: [
      { optionId: '0', text: '一号' },
      { optionId: '1', text: '二号' },
      { optionId: '2', text: '三号' },
      { optionId: '3', text: '四号' },
      { optionId: '4', text: '五号' },
    ],
  },
  {
    quizId: '774',
    question:
      'キメラアント編からの問題です。\nドラゴンヘッドに乗り、王とネテロは宮殿から移動しました。\n二人は宮殿から見てどの方角へ移動した？',
    options: [
      { optionId: '0', text: '南' },
      { optionId: '1', text: '北東' },
      { optionId: '2', text: '北' },
      { optionId: '3', text: '北西' },
      { optionId: '4', text: '東' },
    ],
  },
  {
    quizId: '775',
    question:
      'キメラアント編、ウェルフィンVSイカルゴからの問題です。\n宮殿地下でイカルゴと戦ったウェルフィン。\nウェルフィンはイカルゴと戦う前に、倉庫へ向かう扉を開けました。\nなぜ、倉庫へ向かう扉を開けた？',
    options: [
      {
        optionId: '0',
        text: '倉庫にあるお宝を取りに向かっていたヒナ、レイナ、ビセフを入れてあげるため',
      },
      { optionId: '1', text: '自分の逃げ道を確保するため' },
      { optionId: '2', text: '王に命じられたから' },
      { optionId: '3', text: 'プフに命じられたから' },
      {
        optionId: '4',
        text: 'イカルゴを倒した後、すぐに倉庫に眠る財宝を取りにいけるため',
      },
    ],
  },
  {
    quizId: '776',
    question:
      'キメラアント編、王VSネテロからの問題です。\nネテロと王の開戦直後、ネテロの凄まじい攻撃が続きます。\nこの時、王は極限までに時が圧縮され、意識のみがかろうじて捉えるネテロの残像を追いながら、ある感情に支配されていました。\nどういった感情に支配されていた？',
    options: [
      { optionId: '0', text: '敵への惜しみ無き賞賛' },
      { optionId: '1', text: '始めて感じる恐怖' },
      { optionId: '2', text: '強い喪失感' },
      { optionId: '3', text: '今までにない怒り' },
      { optionId: '4', text: '今までの全てに対する感謝' },
    ],
  },
  {
    quizId: '777',
    question:
      'キメラアント編、王VSネテロからの問題です。\n王との戦闘中にネテロが言った言葉、\n「いつからだ･･･？敵の攻撃を待つ様になったのは。\n一体いつからだ、負けた相手がアタマを下げながら差し出してくる両の手に間を置かず答えられる様になったのは？\nそんなんじゃねェだろ！！オレが求めた武の極みは！」\n続く言葉は何？',
    options: [
      { optionId: '0', text: '敗色濃い難敵にこそ全霊を以って臨む事！！' },
      {
        optionId: '1',
        text: '小さな敵には恐る恐る対する。大敵の場合は恐れず、十死一生の戦いをやるぞという気概を君主から示す',
      },
      { optionId: '2', text: '真の勇士とは責任感が強く律儀な人間である' },
      { optionId: '3', text: '武士は常に、自分をいたらぬ者と思うことが肝心だ' },
      {
        optionId: '4',
        text: '義に背けば勝っても勝ちではなく、義を貫けば負けても負けではない',
      },
    ],
  },
  {
    quizId: '778',
    question:
      'キメラアント編、キルアVSパームからの問題です。\n実験兵士１号として産まれ変わったパーム。\n毛髪で自信を武装するパームの新しい能力名は？',
    options: [
      { optionId: '0', text: '暗黒の鬼婦神' },
      { optionId: '1', text: '髪の強堅鎧' },
      { optionId: '2', text: '闇からの生還' },
      { optionId: '3', text: '暗黒の死者蘇生' },
      { optionId: '4', text: '黒髪の魔術師' },
    ],
  },
  {
    quizId: '779',
    question:
      'キメラアント編、キルアVSパームからの問題です。\n実験兵士１号として産まれ変わったパーム。\n毛髪で自信を武装するパームの新しい能力名は？',
    options: [
      { optionId: '0', text: 'ブラックウィドウ' },
      { optionId: '1', text: 'ブラックマジシャン' },
      { optionId: '2', text: 'クリッター' },
      { optionId: '3', text: 'レッドアイズブラックドラゴン' },
      { optionId: '4', text: 'ダークフレーム' },
    ],
  },
  {
    quizId: '780',
    question:
      'キメラアント編からの問題です。\nゴンはピトーに、予定より10分早くコムギの治療を終わらせるように命じました。\nこれは宮殿突入からどれくらいの時間が経った時？',
    options: [
      { optionId: '0', text: '25分31秒87' },
      { optionId: '1', text: '20分17秒10' },
      { optionId: '2', text: '23分37秒17' },
      { optionId: '3', text: '17分10秒41' },
      { optionId: '4', text: '14分9秒77' },
    ],
  },
  {
    quizId: '781',
    question:
      'キメラアント編、ウェルフィンVSイカルゴからの問題です。\nウェルフィンの能力、卵男（ミサイルマン）でイカルゴの体内に生物を埋め込みました。\n埋め込んだ生物とは何？',
    options: [
      { optionId: '0', text: '黒百足（クロムカデ）' },
      { optionId: '1', text: '白蚯蚓（シロミミズ）' },
      { optionId: '2', text: '白蛭（シロヒル）' },
      { optionId: '3', text: '黒蚤（クロノミ）' },
      { optionId: '4', text: '黒団子虫（クロダンゴムシ）' },
    ],
  },
  {
    quizId: '782',
    question:
      'キメラアント編、ウェルフィンVSイカルゴからの問題です。\nイカルゴに敗れたウェルフィンは、正直に告白します。\nウェルフィンが蟻として、生まれ変わったとき最初に思ったのは「まだ、覚えてやがった」でした。\n一番忘れたかった記憶はしっかり覚えていたのです。\nウェルフィンが一番忘れたかった記憶とは何？',
    options: [
      { optionId: '0', text: '首を締める父親と背後で見ている女' },
      { optionId: '1', text: '自分をゴミのように見つめる父親の顔' },
      {
        optionId: '2',
        text: '妹を守って上げられず、目の前で殺されてしまったこと',
      },
      {
        optionId: '3',
        text: '親切心で財布を拾ってあげたのに、盗人と疑われてボコボコにされたこと',
      },
      { optionId: '4', text: '同胞が全滅させれた時のこと' },
    ],
  },
  {
    quizId: '783',
    question:
      'キメラアント編、王VSネテロからの問題です。\n王が最初に切ったネテロの身体の部位はどこ？',
    options: [
      { optionId: '0', text: '右足' },
      { optionId: '1', text: '左足' },
      { optionId: '2', text: '右手' },
      { optionId: '3', text: '左手' },
      { optionId: '4', text: '首' },
    ],
  },
  {
    quizId: '784',
    question: 'キメラアント編からの問題です。\n王の名前は？',
    options: [
      { optionId: '0', text: 'メルエム' },
      { optionId: '1', text: 'エルエム' },
      { optionId: '2', text: 'エムメル' },
      { optionId: '3', text: 'メルエル' },
      { optionId: '4', text: 'エルメム' },
    ],
  },
  {
    quizId: '785',
    question:
      'キメラアント編、王VSネテロからの問題です。\nネテロが使った爆弾の名前は？',
    options: [
      { optionId: '0', text: '貧者の薔薇' },
      { optionId: '1', text: '貧者の鬱金香' },
      { optionId: '2', text: '強者の薔薇' },
      { optionId: '3', text: '強者の鬱金香' },
      { optionId: '4', text: '富豪の薔薇' },
    ],
  },
  {
    quizId: '786',
    question:
      'キメラアント編、王VSネテロからの問題です。\nネテロが使った爆弾「貧者の薔薇」は何と読む？',
    options: [
      { optionId: '0', text: 'ミニチュアローズ' },
      { optionId: '1', text: 'クイーンエリザベス' },
      { optionId: '2', text: 'アイスバーグ' },
      { optionId: '3', text: 'イングリットバーグマン' },
      { optionId: '4', text: 'ピース' },
    ],
  },
  {
    quizId: '787',
    question:
      'キメラアント編から難易度マックスの問題です。\n貧者の薔薇（ミニチュアローズ）はのべ250を超える国や地域でその10倍もの花を咲かせ、多くの人の命を奪ってきました。\n貧者の薔薇はいままでに、何人の命を奪った？',
    options: [
      { optionId: '0', text: '512万人' },
      { optionId: '1', text: '34万人' },
      { optionId: '2', text: '351万人' },
      { optionId: '3', text: '401万人' },
      { optionId: '4', text: '284万人' },
    ],
  },
  {
    quizId: '788',
    question:
      'キメラアント編からの問題です。\n貧者の薔薇（ミニチュアローズ）により瀕死状態になった王。\nそれを見たプフは、自分自身の細胞を王に食べさせました。\nプフの細胞を食べた王が言った感想は、次のうちどれ？',
    options: [
      {
        optionId: '0',
        text: 'えもいえぬ美味…楽園の…空気を吸うがごとく…力が…みるみる満ちてくるのがわかる…まさに妖精の霧（ミスト）…',
      },
      {
        optionId: '1',
        text: '花嫁の美しく透明な…白いヴェール…しなやかで気高く…その奥に潜む表情を和らげてくれる…ヴェールそのものの優しさがあふれている…',
      },
      {
        optionId: '2',
        text: '甘く…柔らかい香り…これはメイプルシロップをたっぷりかけた…パンケーキ…？あ………あなたは………クレオパトラ？ひと言で表すならば…エレガンス',
      },
      {
        optionId: '3',
        text: '何と力強く濃厚な…天界から降り落ちたとしか思えぬ…まさに…天使の雫…',
      },
      {
        optionId: '4',
        text: '蜂蜜のような甘みと石を舐めるようなミネラル感…ヘーゼルナッツや梨…そしてどこかレモンのような後味がいつまでも残る…',
      },
    ],
  },
  {
    quizId: '789',
    question:
      'キメラアント編からの問題です。\n貧者の薔薇（ミニチュアローズ）により瀕死状態になった王。\nそれを見たプフは自分自身の細胞を王に食べさせました。\n次いでユピーも自身の細胞を液体に変えて、王に食べさせました。\nユピーの細胞を食べた王が言った感想は、次のうちどれ？',
    options: [
      {
        optionId: '0',
        text: '何と力強く濃厚な…天界から降り落ちたとしか思えぬ…まさに…天使の雫…',
      },
      {
        optionId: '1',
        text: '花嫁の美しく透明な…白いヴェール…しなやかで気高く…その奥に潜む表情を和らげてくれる…ヴェールそのものの優しさがあふれている…',
      },
      {
        optionId: '2',
        text: '甘く…柔らかい香り…これはメイプルシロップをたっぷりかけた…パンケーキ…？あ………あなたは………クレオパトラ？ひと言で表すならば…エレガンス',
      },
      {
        optionId: '3',
        text: 'えもいえぬ美味…楽園の…空気を吸うがごとく…力が…みるみる満ちてくるのがわかる…まさに妖精の霧（ミスト）…',
      },
      {
        optionId: '4',
        text: '蜂蜜のような甘みと石を舐めるようなミネラル感…ヘーゼルナッツや梨…そしてどこかレモンのような後味がいつまでも残る…',
      },
    ],
  },
  {
    quizId: '790',
    question:
      'キメラアント編からの問題です。\nピトーがコムギの治療を終えたのは、宮殿突入からどれくらい時間が経った時？',
    options: [
      { optionId: '0', text: '49分57秒81' },
      { optionId: '1', text: '40分41秒11' },
      { optionId: '2', text: '1時間7分04' },
      { optionId: '3', text: '58分41秒14' },
      { optionId: '4', text: '38分46秒87' },
    ],
  },
  {
    quizId: '791',
    question:
      'キメラアント編からの問題です。\nコムギの治療を終えたピトーと、ゴンは、カイトを治しにある場所へ向かいました。\nどこへ向かった？',
    options: [
      { optionId: '0', text: 'ペイジン' },
      { optionId: '1', text: 'シンハイ' },
      { optionId: '2', text: 'キュウサイコウ' },
      { optionId: '3', text: 'コウシュウ' },
      { optionId: '4', text: 'セイト' },
    ],
  },
  {
    quizId: '792',
    question:
      'キメラアント編からの問題です。\nコムギの治療を終えたピトー。\nそれを見たゴンはピトーに「立て、すぐにペイジンへ向かう。俺たちなら走った方がはやい」と言いました。\nそれに対して、ピトーが「出来れば彼女を…」といいかけた時、\n少年漫画の主人公ゴンはピトーに何と言った？',
    options: [
      { optionId: '0', text: 'ピトー、次ゴタゴタ言ったらそいつを殺す' },
      { optionId: '1', text: '少し黙れ、ピトー' },
      { optionId: '2', text: '……そんなに死にたいか？' },
      { optionId: '3', text: '黙ってろ' },
      {
        optionId: '4',
        text: 'ピトー、自分が死なないとでも思ってるんじゃないか？',
      },
    ],
  },
  {
    quizId: '793',
    question:
      'キメラアント編から難易度マックスの問題です。\nプフが、ナックルに付けられた「ポットクリン」\n付けられた直後ののポットクリン数字はいくつ？',
    options: [
      { optionId: '0', text: '233' },
      { optionId: '1', text: '221' },
      { optionId: '2', text: '214' },
      { optionId: '3', text: '198' },
      { optionId: '4', text: '257' },
    ],
  },
  {
    quizId: '794',
    question:
      'キメラアント編からの問題です。\n貧者の薔薇（ミニチュアローズ）を浴びせられながらも、一命をとりとめ、更にパワーアップして宮殿に帰ってきた王。\n王が宮殿に戻ってきた時、ナックルはどこにいた？',
    options: [
      { optionId: '0', text: '人民の中に紛れ込んでいた' },
      { optionId: '1', text: 'モラウを病院に運ぶためにNGLを出た' },
      { optionId: '2', text: '宮殿地下へ向かっていた' },
      { optionId: '3', text: '大階段付近で身を潜めていた' },
      { optionId: '4', text: '東棟1階でイカルゴと作戦会議をしていた' },
    ],
  },
  {
    quizId: '795',
    question:
      'キメラアント編からの問題です。\n貧者の薔薇（ミニチュアローズ）を浴びせられながらも、一命をとりとめ、更にパワーアップして宮殿に帰ってきた王。\n王が宮殿に戻ってきた時、メレオロンはどこにいた？',
    options: [
      { optionId: '0', text: '人民の中に紛れ込んでいた' },
      { optionId: '1', text: 'モラウを病院に運ぶためにNGLを出た' },
      { optionId: '2', text: '宮殿地下へ向かっていた' },
      { optionId: '3', text: '大階段付近で身を潜めていた' },
      { optionId: '4', text: '東棟1階でイカルゴと作戦会議をしていた' },
    ],
  },
  {
    quizId: '796',
    question:
      'キメラアント編からの問題です。\nパームの能力「ウインクブルー」は漢字でどのように書く？',
    options: [
      { optionId: '0', text: '淋しい深海魚' },
      { optionId: '1', text: '青の悲しみ' },
      { optionId: '2', text: '片瞳の哀しさ' },
      { optionId: '3', text: '哀しい涙' },
      { optionId: '4', text: '淋しい大階段' },
    ],
  },
  {
    quizId: '797',
    question:
      'パームの能力、淋しい深海魚（ウインクブルー）の説明として誤っているのはどれ？',
    options: [
      {
        optionId: '0',
        text: '対象者に触れながら水晶を視ると、3時間前までの過去も視れる',
      },
      { optionId: '1', text: '4人目からは古い順に視えなくなる' },
      { optionId: '2', text: '左目だけで視ると水晶に記憶された者の現在が映る' },
      { optionId: '3', text: '右目だけで見た者は水晶に記憶される' },
      { optionId: '4', text: 'この能力で視えるのは3人まで' },
    ],
  },
  {
    quizId: '798',
    question:
      'キメラアント編からの問題です。\nパームの能力「淋しい深海魚（ウインクブルー）」は、右目だけで見た対象者を3人まで水晶に記憶することができ、左目だけでみると対象者が映った水晶を視ることができます。\n貧者の薔薇（ミニチュアローズ）を喰らいながら一命をとりとめ、更にパワーアップして宮殿に王が帰ってきた時、パームの水晶に記憶されていた3人は誰？',
    options: [
      { optionId: '0', text: 'プフ、キルア、ゴン' },
      { optionId: '1', text: '王、ピトー、キルア' },
      { optionId: '2', text: 'ユピー、ププ、ピトー' },
      { optionId: '3', text: 'ゴン、ププ、ピトー' },
      { optionId: '4', text: 'ナックル、ゴン、ピトー' },
    ],
  },
  {
    quizId: '799',
    question:
      'キメラアント編からの問題です。\nウェルフィンが人間の時の名前は？',
    options: [
      { optionId: '0', text: 'ザイカハル' },
      { optionId: '1', text: 'アルル' },
      { optionId: '2', text: 'シェゾ' },
      { optionId: '3', text: 'レムレス' },
      { optionId: '4', text: 'カーバンクル' },
    ],
  },
  {
    quizId: '800',
    question:
      'キメラアント編からの問題です。\n貧者の薔薇（ミニチュアローズ）を浴びせられながらも、一命をとりとめ、更にパワーアップして宮殿に帰ってきた王。\n王の一度目の円により居場所がばれ、捕らえられたのは誰と誰？',
    options: [
      { optionId: '0', text: 'ナックルとメレオロン' },
      { optionId: '1', text: 'ナックルとシュート' },
      { optionId: '2', text: 'イカルゴとパーム' },
      { optionId: '3', text: 'パームとメレオロン' },
      { optionId: '4', text: 'シュートとイカルゴ' },
    ],
  },
  {
    quizId: '801',
    question:
      'キメラアント編からの問題です。\n貧者の薔薇（ミニチュアローズ）を浴びせられながらも、一命をとりとめ、更にパワーアップして宮殿に帰ってき王。\nしかし、王は記憶喪失になってしまいました。\n自分の無くなった記憶を思い出している時、宮殿で軍儀の駒を見つけました。\n「軍儀で誰かと戦っていたこと」、「そしてその者にまだ一度も勝っていないこと」を、思い出しました。\n王は宮殿で、軍儀の何の駒を見つけた？',
    options: [
      { optionId: '0', text: '帥' },
      { optionId: '1', text: '馬' },
      { optionId: '2', text: '兵' },
      { optionId: '3', text: '弓' },
      { optionId: '4', text: '槍' },
    ],
  },
  {
    quizId: '802',
    question:
      'キメラアント編、王が貧者の薔薇（ミニチュアローズ）を浴びされながらも復活した後から問題です。\n自分に残された命が少ないと知った王は、最後の時間をどのように過ごしたいと望んだ？',
    options: [
      { optionId: '0', text: 'コムギと過ごしたい' },
      { optionId: '1', text: 'ピトーと過ごしたい' },
      { optionId: '2', text: 'パームと過ごしたい' },
      { optionId: '3', text: 'プフと過ごしたい' },
      { optionId: '4', text: 'ユピーと過ごしたい' },
    ],
  },
  {
    quizId: '803',
    question:
      'キメラアント編、王が貧者の薔薇（ミニチュアローズ）を浴びされながらも復活した後から問題です。\n王がコムギを見つけた時、コムギは寝言を言っていました。\nコムギは寝言で何と言っていた？',
    options: [
      { optionId: '0', text: '4-7-1\n帥' },
      { optionId: '1', text: '9-9-1\n帥' },
      { optionId: '2', text: '9-2-1\n中将新' },
      { optionId: '3', text: '4-6-2\n忍' },
      { optionId: '4', text: '2-6-1\n騎馬' },
    ],
  },
  {
    quizId: '804',
    question:
      'キメラアント編、終戦後からの問題です。\nウェルフィンが一番好きな言葉をブロヴータに教えて上げました。\nウェルフィンが一番好きな言葉とは何？',
    options: [
      { optionId: '0', text: '死ぬまで死ぬなよ' },
      { optionId: '1', text: '明日があるさ、明日がある' },
      { optionId: '2', text: '自由に死のうぜ' },
      { optionId: '3', text: '次会うときは生きてろよ' },
      { optionId: '4', text: '気楽に生きようぜ' },
    ],
  },
  {
    quizId: '805',
    question:
      'キメラアント編、終戦後、ジャイロを捜して流星街へ向かった三名は誰？',
    options: [
      { optionId: '0', text: 'ウェルフィン、ヒナ、ビセフ' },
      { optionId: '1', text: 'ウェルフィン、ヒナ、マルコス' },
      { optionId: '2', text: 'ブロヴータ、レイナ、ヒナ' },
      { optionId: '3', text: 'ブロヴータ、ウェルフィン、ヒナ' },
      { optionId: '4', text: 'ビセフ、ヒナ、ブロヴータ' },
    ],
  },
  {
    quizId: '806',
    question: 'キメラアント編終戦後、ブロヴータはどのような行動をとった？',
    options: [
      { optionId: '0', text: 'レイナと故郷へ戻った' },
      {
        optionId: '1',
        text: 'ウェルフィン、ヒナ、ビセフと共に流星街へ向かった',
      },
      { optionId: '2', text: 'カイトの下で死ぬまで働くことにした' },
      { optionId: '3', text: 'ヂートゥと共にNGLに向かうことにした' },
      { optionId: '4', text: 'コルトと共に東ゴルドーに残ることにした' },
    ],
  },
  {
    quizId: '807',
    question:
      'キメラアント編、終戦後。\n隠居暮らしをしている本当のディーゴ総帥が描かれたシーンがあります。\nこのシーンの詩から問題です。\n「さあ乾杯しやう。乾杯しやうぢゃないか、人といふものどもに。善人も悪人もいつの世も人はくり返す。膿むには余りに長く、学ぶには余りに短い時の螺旋状。だからこそ好く欲し、好く発するのだろう？\n命など陽と地と詩とで満たされるほどのものなのに。」\nこの詩は「人といふもの」より一部抜粋したものです。\n「人といふもの」の作者は誰？',
    options: [
      { optionId: '0', text: '菊池正央' },
      { optionId: '1', text: '岡崎真一' },
      { optionId: '2', text: '寺島伸夫' },
      { optionId: '3', text: '本城蓮' },
      { optionId: '4', text: '高木泰士' },
    ],
  },
  {
    quizId: '808',
    question:
      'キメラアント編、終戦後。\n本当のディーゴ総帥が描かれたシーンがあります。\nこの時の詩から問題です。\n「さあ乾杯しやう。乾杯しやうぢゃないか、人といふものどもに。善人も悪人もいつの世も人はくり返す。膿むには余りに長く、学ぶには余りに短い時の螺旋状。だからこそ好く欲し、好く発するのだろう？\n命など陽と地と詩とで満たされるほどのものなのに。」\nこの詩は菊池正央さんが書いた書物より一部抜粋したものです。\n何という書物？',
    options: [
      { optionId: '0', text: '人といふもの' },
      { optionId: '1', text: '風にふかれて' },
      { optionId: '2', text: '乾杯' },
      { optionId: '3', text: '陽と地と詩と' },
      { optionId: '4', text: '晴天雨読' },
    ],
  },
  {
    quizId: '809',
    question:
      'キメラアント編、終戦後からの問題です。\n王の生死確認を行ったのは誰？',
    options: [
      { optionId: '0', text: 'パーム' },
      { optionId: '1', text: 'モラウ' },
      { optionId: '2', text: 'イカルゴ' },
      { optionId: '3', text: 'ナックル' },
      { optionId: '4', text: 'コルト' },
    ],
  },
  {
    quizId: '810',
    question:
      'キメラアント編、終戦後から難易度マックスの問題です。\n王は最後の時をコムギと軍儀をしながら過ごしました。\nこの時、コムギが見つけた「9-2-1中将新」に対するの新手は？',
    options: [
      { optionId: '0', text: '4-6-2\n忍' },
      { optionId: '1', text: '9-9-1\n帥' },
      { optionId: '2', text: '7-9-1\n兵' },
      { optionId: '3', text: '4-7-1\n帥' },
      { optionId: '4', text: '2-6-1\n騎馬' },
    ],
  },
  {
    quizId: '811',
    question:
      'キメラアント編、終戦後から難易度マックスの問題です。\n王は最後の時をコムギと軍儀をしながら過ごしました。\nこの時、コムギの新手「4-6-2忍」に対して、王が打った逆新手は？',
    options: [
      { optionId: '0', text: '2-6-1\n騎馬' },
      { optionId: '1', text: '9-2-1\n中将新' },
      { optionId: '2', text: '9-9-1\n帥' },
      { optionId: '3', text: '7-9-1\n兵' },
      { optionId: '4', text: '4-7-1\n帥' },
    ],
  },
  {
    quizId: '812',
    question: '選挙編からの問題です。\n十二支んの「辰」の名前は？',
    options: [
      { optionId: '0', text: 'ボトバイ' },
      { optionId: '1', text: 'クルック' },
      { optionId: '2', text: 'サイユウ' },
      { optionId: '3', text: 'サッチョウ' },
      { optionId: '4', text: 'ギンタ' },
    ],
  },
  {
    quizId: '813',
    question: '選挙編からの問題です。\n十二支んの「羊」の名前は？',
    options: [
      { optionId: '0', text: 'ギンタ' },
      { optionId: '1', text: 'クルック' },
      { optionId: '2', text: 'サイユウ' },
      { optionId: '3', text: 'サッチョウ' },
      { optionId: '4', text: 'ボトバイ' },
    ],
  },
  {
    quizId: '814',
    question:
      '選挙編からの問題です。\n十二支んはそれぞれコードネーム（子、丑、虎・・・）があります。\n十二支んの「カンザイ」のコードネームは何？',
    options: [
      { optionId: '0', text: '寅（とら）' },
      { optionId: '1', text: '丑（うし）' },
      { optionId: '2', text: '申（さる）' },
      { optionId: '3', text: '亥（い）' },
      { optionId: '4', text: '午（うま）' },
    ],
  },
  {
    quizId: '815',
    question:
      '選挙編からの問題です。\n十二支んはそれぞれコードネーム（子、丑、虎・・・）があります。\n十二支んの「ジン」のコードネームは何？',
    options: [
      { optionId: '0', text: '亥（い）' },
      { optionId: '1', text: '戌（いぬ）' },
      { optionId: '2', text: '寅（とら）' },
      { optionId: '3', text: '丑（うし）' },
      { optionId: '4', text: '午（うま）' },
    ],
  },
  {
    quizId: '816',
    question:
      '選挙編からの問題です。\n十二支んはそれぞれコードネーム（子、丑、虎・・・）があります。\n十二支んの「サッチョウ」のコードネームは何？',
    options: [
      { optionId: '0', text: '午（うま）' },
      { optionId: '1', text: '亥（い）' },
      { optionId: '2', text: '戌（いぬ）' },
      { optionId: '3', text: '虎（とら）' },
      { optionId: '4', text: '丑（うし）' },
    ],
  },
  {
    quizId: '817',
    question:
      '選挙編からの問題です。\nパリストンが副会長になってから消息不明になったハンターの数は何人？',
    options: [
      { optionId: '0', text: '18人' },
      { optionId: '1', text: '10人' },
      { optionId: '2', text: '25人' },
      { optionId: '3', text: '7人' },
      { optionId: '4', text: '16人' },
    ],
  },
  {
    quizId: '818',
    question:
      '選挙編からの問題です。\nパリストンが副会長になる前に消息不明になったハンターの数は年平均何人？',
    options: [
      { optionId: '0', text: '0.6人' },
      { optionId: '1', text: '1.4人' },
      { optionId: '2', text: '6人' },
      { optionId: '3', text: '3人' },
      { optionId: '4', text: '0.2人' },
    ],
  },
  {
    quizId: '819',
    question:
      '選挙編からの問題です。\n次期会長選挙のルールはくじで決めることにしました。\n十二支ん全員に紙を配り、自分が最適だと考えるルールを記載します。\nそれを折り、くじとしました。\nこの時、ルールを書いた紙を何回折りにした？',
    options: [
      { optionId: '0', text: '3つ折り' },
      { optionId: '1', text: '1つ折り' },
      { optionId: '2', text: '2つ折り' },
      { optionId: '3', text: '4つ折り' },
      { optionId: '4', text: '折らずにそのまま' },
    ],
  },
  {
    quizId: '820',
    question:
      '選挙編からの問題です。\n次期会長選挙の達成難易度をネテロはどのくらいだと言った？',
    options: [
      { optionId: '0', text: '達成難易度D' },
      { optionId: '1', text: '達成難易度C' },
      { optionId: '2', text: '達成難易度B' },
      { optionId: '3', text: '達成難易度E' },
      { optionId: '4', text: '達成難易度A' },
    ],
  },
  {
    quizId: '821',
    question:
      '選挙編からの問題です。\nネテロが辞職したあと行われた会長総選挙は、第何代目の会長を決めるための選挙？',
    options: [
      { optionId: '0', text: '13代目' },
      { optionId: '1', text: '14代目' },
      { optionId: '2', text: '15代目' },
      { optionId: '3', text: '16代目' },
      { optionId: '4', text: '17代目' },
    ],
  },
  {
    quizId: '822',
    question:
      '選挙編からの問題です。\n第13代会長総選挙、一回目の投票はいつ行われた？',
    options: [
      { optionId: '0', text: '8月8日' },
      { optionId: '1', text: '10月10日' },
      { optionId: '2', text: '7月7日' },
      { optionId: '3', text: '1月1日' },
      { optionId: '4', text: '3月3日' },
    ],
  },
  {
    quizId: '823',
    question:
      '第13代会長総選挙のルールから問題です。\n別地での不在投票はどのような時できる？',
    options: [
      { optionId: '0', text: '選挙対策委員（3名以上）の立会いがある時' },
      { optionId: '1', text: '星を持っているハンターが事情がある時' },
      {
        optionId: '2',
        text: '現地に行けない事情があり、それを十二支んが認めた時',
      },
      {
        optionId: '3',
        text: 'ハンター協会から直々に仕事を受けており、その仕事の関係で戦況に参加できない時',
      },
      {
        optionId: '4',
        text: '交通機関が乱れており、それを証明するものがある時',
      },
    ],
  },
  {
    quizId: '824',
    question:
      '選挙編からの問題です。\n第13代会長総選挙、一回目の投票時、ヒソカはハンターの品定めを行いました。\nヒソカはカンザイ（申）を何点と定めた？',
    options: [
      { optionId: '0', text: '85点' },
      { optionId: '1', text: '80点' },
      { optionId: '2', text: '90点' },
      { optionId: '3', text: '95点' },
      { optionId: '4', text: '77点' },
    ],
  },
  {
    quizId: '825',
    question:
      '選挙編からの問題です。\n第13代会長総選挙、一回目の投票時、ヒソカはハンターの品定めを行いました。\nヒソカはギンタ（羊）を何点と定めた？',
    options: [
      { optionId: '0', text: '90点' },
      { optionId: '1', text: '80点' },
      { optionId: '2', text: '85点' },
      { optionId: '3', text: '95点' },
      { optionId: '4', text: '77点' },
    ],
  },
  {
    quizId: '826',
    question:
      '選挙編からの問題です。\n第13代会長総選挙、一回目の投票時、ヒソカはハンターの品定めを行いました。\nヒソカはピヨン（卯）を何点と定めた？',
    options: [
      { optionId: '0', text: '77点' },
      { optionId: '1', text: '80点' },
      { optionId: '2', text: '74点' },
      { optionId: '3', text: '75点' },
      { optionId: '4', text: '85点' },
    ],
  },
  {
    quizId: '827',
    question:
      '選挙編からの問題です。\n第13代会長総選挙、一回目の投票時、ヒソカはハンターの品定めを行いました。\nヒソカはイルミを何点と定めた？',
    options: [
      { optionId: '0', text: '95点' },
      { optionId: '1', text: '80点' },
      { optionId: '2', text: '90点' },
      { optionId: '3', text: '88点' },
      { optionId: '4', text: '77点' },
    ],
  },
  {
    quizId: '828',
    question:
      '第13代会長総選挙、一回目の投票時からの問題です。\nヒソカは誰に投票した？',
    options: [
      { optionId: '0', text: '誰にも投票していない（白紙）' },
      { optionId: '1', text: 'ゴン' },
      { optionId: '2', text: 'ジン' },
      { optionId: '3', text: 'イルミ' },
      { optionId: '4', text: 'キルア' },
    ],
  },
  {
    quizId: '829',
    question: '第13代会長総選挙、一回目の投票結果からの問題です。\n第3位は誰？',
    options: [
      { optionId: '0', text: 'イックションペ' },
      { optionId: '1', text: 'ボトバイ' },
      { optionId: '2', text: 'ミザイストム' },
      { optionId: '3', text: 'サッチョウ' },
      { optionId: '4', text: 'キューティー' },
    ],
  },
  {
    quizId: '830',
    question:
      '第13代会長総選挙、一回目の投票結果からの問題です。\nサトツさんには何票入った？',
    options: [
      { optionId: '0', text: '3票' },
      { optionId: '1', text: '4票' },
      { optionId: '2', text: '2票' },
      { optionId: '3', text: '1票' },
      { optionId: '4', text: '5票' },
    ],
  },
  {
    quizId: '831',
    question:
      '第13代会長総選挙、一回目の投票結果からの問題です。\nツェズゲラには何票入った？',
    options: [
      { optionId: '0', text: '6票' },
      { optionId: '1', text: '5票' },
      { optionId: '2', text: '3票' },
      { optionId: '3', text: '7票' },
      { optionId: '4', text: '4票' },
    ],
  },
  {
    quizId: '832',
    question:
      '第13代会長総選挙、一回目の投票結果からの問題です。\n次の内、欠席票でないハンターを選べ。\n（選挙に参加し、投票したハンターを選べ）',
    options: [
      { optionId: '0', text: 'イルミ' },
      { optionId: '1', text: 'ゴン' },
      { optionId: '2', text: 'シュート' },
      { optionId: '3', text: 'クラピカ' },
      { optionId: '4', text: 'キルア' },
    ],
  },
  {
    quizId: '833',
    question:
      '第13代会長総選挙、一回目の投票結果からの問題です。\nモラウ、ピヨン、ジン、テラデイン、ビスケの中で、一番多くの票を得たのは誰？',
    options: [
      { optionId: '0', text: 'モラウ' },
      { optionId: '1', text: 'ピヨン' },
      { optionId: '2', text: 'ジン' },
      { optionId: '3', text: 'テラデイン' },
      { optionId: '4', text: 'ビスケ' },
    ],
  },
  {
    quizId: '834',
    question:
      '第13代会長総選挙、一回目の投票結果からの問題です。\nカンザイ、ピヨン、ジン、テラデイン、ビスケの中で、一番多くの票を得たのは誰？',
    options: [
      { optionId: '0', text: 'ピヨン' },
      { optionId: '1', text: 'カンザイ' },
      { optionId: '2', text: 'ジン' },
      { optionId: '3', text: 'テラデイン' },
      { optionId: '4', text: 'ビスケ' },
    ],
  },
  {
    quizId: '835',
    question: 'ネテロはなぜパリストンを副会長に選んだ？',
    options: [
      {
        optionId: '0',
        text: 'イエスマンじゃつまらない。ワシが側に置いときたいのは、最も苦手なタイプだから',
      },
      { optionId: '1', text: 'あぁ見えて、実は寂しがり屋で可愛げがあるから' },
      {
        optionId: '2',
        text: '強いから。2番目に強いものが副会長になるのは当然だから',
      },
      {
        optionId: '3',
        text: '恩があるから。トラブルを解決してもらったお礼に選んだ',
      },
      {
        optionId: '4',
        text: 'なんとなく。別に誰でも良かったけど、ヤツが真っ先に立候補してきたから',
      },
    ],
  },
  {
    quizId: '836',
    question: '試しの門の守衛ゼブロが住む家の受話器の重さは何キログラム？',
    options: [
      { optionId: '0', text: '20キログラム' },
      { optionId: '1', text: '30キログラム' },
      { optionId: '2', text: '40キログラム' },
      { optionId: '3', text: '50キログラム' },
      { optionId: '4', text: '10キログラム' },
    ],
  },
  {
    quizId: '837',
    question:
      'アルカ編からの問題です。\nピトーとの戦いで無惨な体になってしまったゴン。\nゴンを助けるために、キルアは実家に戻りました。\nこの時、キルアがは試しの門を何まで開けた？',
    options: [
      { optionId: '0', text: '5' },
      { optionId: '1', text: '4' },
      { optionId: '2', text: '3' },
      { optionId: '3', text: '6' },
      { optionId: '4', text: '7' },
    ],
  },
  {
    quizId: '838',
    question:
      'アルカ編からの問題です。\nアルカの部屋にはある物が、たくさんあります。\n何がある？',
    options: [
      { optionId: '0', text: 'ぬいぐるみ' },
      { optionId: '1', text: 'お面' },
      { optionId: '2', text: 'コケシ' },
      { optionId: '3', text: 'ゲーム' },
      { optionId: '4', text: '化粧品' },
    ],
  },
  {
    quizId: '839',
    question:
      'アルカ編からの問題です。\nアルカのオネダリを4回断り犠牲となった最初の執事は誰？',
    options: [
      { optionId: '0', text: 'ミツバ' },
      { optionId: '1', text: 'ヤスハ' },
      { optionId: '2', text: 'ハサム' },
      { optionId: '3', text: 'カスガ' },
      { optionId: '4', text: 'ムーナ' },
    ],
  },
  {
    quizId: '840',
    question:
      'アルカ編からの問題です。\nアルカのおねだりを4回連続で断ると「断った者」と「その者が最も愛している者」最低でも二人の人間が同時に死にます。\nアルカのおねだりを4回断り死んでしまったミツバ。\n「ミツバが最も愛している者」としてに犠牲になったのは誰？',
    options: [
      { optionId: '0', text: 'ハサム' },
      { optionId: '1', text: 'ヤスハ' },
      { optionId: '2', text: 'カスガ' },
      { optionId: '3', text: 'ムーナ' },
      { optionId: '4', text: 'カルト' },
    ],
  },
  {
    quizId: '841',
    question:
      'アルカ編からの問題です。\nピトーとの戦いで無惨な体になってしまったゴン。\nゴンを助けるために、キルアは実家に戻り、アルカの力を借りようとしていました。\nこの時のアルカは、「おねだり」が済んでいない状態でした。\nつまり、誰かがした「お願い」の尻拭いをしなければなりません。\nキルアが戻ってきた時、最後に「お願い」をアルカにしていたのは誰？',
    options: [
      { optionId: '0', text: 'ミルキ' },
      { optionId: '1', text: 'ハサム' },
      { optionId: '2', text: 'ヤスハ' },
      { optionId: '3', text: 'ムーナ' },
      { optionId: '4', text: 'カルト' },
    ],
  },
  {
    quizId: '842',
    question:
      'アルカ編からの問題です。\nピトーとの戦いで無惨な体になってしまったゴン。\nゴンを助けるために、キルアは実家に戻り、アルカの力を借りようとしていました。\nこの時のアルカは、「おねだり」が済んでいない状態でした。\nミルキがした「お願い」の尻拭いをしなければ、なりません。\nミルキがアルカにしていたお願いとは何？',
    options: [
      { optionId: '0', text: '当時最新だったパソコン' },
      { optionId: '1', text: '激レアなフィギア' },
      { optionId: '2', text: '入手困難なゲームソフト' },
      { optionId: '3', text: 'カキン国でしか取れない魚の料理' },
      { optionId: '4', text: 'カキン国でしか取れない卵の料理' },
    ],
  },
  {
    quizId: '843',
    question:
      'アルカ編からの問題です。\n「億万長者になりたい」と、アルカにお願いした執事の名前は？',
    options: [
      { optionId: '0', text: 'ヤスハ' },
      { optionId: '1', text: 'ハサム' },
      { optionId: '2', text: 'カナリア' },
      { optionId: '3', text: 'カスガ' },
      { optionId: '4', text: 'ムーナ' },
    ],
  },
  {
    quizId: '844',
    question:
      'アルカ編からの問題です。\n億万長者になりたいと、アルカにお願いした執事のヤスハ。\nお願いは叶い、ヤスハの下に大金が届きました。\nどのようにして大金がヤスハの下に届いた？',
    options: [
      {
        optionId: '0',
        text: '現金輸送船がヤスハの上空に現れ、空からお札が大量に降ってきた',
      },
      { optionId: '1', text: '宝くじが当たった' },
      { optionId: '2', text: '老婆がヤスハの元に現れ、現金500億を渡した' },
      {
        optionId: '3',
        text: '隣町の銀行で大爆発が起こり、風に舞いお金がヤスハの下へ飛んできた',
      },
      { optionId: '4', text: '森の木の葉が全て札に変わった' },
    ],
  },
  {
    quizId: '845',
    question:
      'アルカ編からの問題です。\nアルカのおねだりを4回断ってしまい、67人の犠牲者を出した執事の名前は？',
    options: [
      { optionId: '0', text: 'カスガ' },
      { optionId: '1', text: 'ヤスハ' },
      { optionId: '2', text: 'ハサム' },
      { optionId: '3', text: 'カナリア' },
      { optionId: '4', text: 'ムーナ' },
    ],
  },
  {
    quizId: '846',
    question:
      'アルカ編からの問題です。\nアルカのおねだりを4回断ってしまい13人の犠牲者を出した観光客の名前は？',
    options: [
      { optionId: '0', text: 'ムーナ' },
      { optionId: '1', text: 'ヤスハ' },
      { optionId: '2', text: 'ハサム' },
      { optionId: '3', text: 'カナリア' },
      { optionId: '4', text: 'カスガ' },
    ],
  },
  {
    quizId: '847',
    question:
      'アルカ編からの問題です。\nアルカが黒目の状態をキルアはなんと呼ぶ？',
    options: [
      { optionId: '0', text: 'ナニカ' },
      { optionId: '1', text: 'ウラアルカ' },
      { optionId: '2', text: 'カルア' },
      { optionId: '3', text: 'クロコ' },
      { optionId: '4', text: 'ブラック' },
    ],
  },
  {
    quizId: '848',
    question: 'テラデイン＝ニュートラルは何ハンター？',
    options: [
      { optionId: '0', text: 'ヘッドハンター' },
      { optionId: '1', text: 'シーハンター' },
      { optionId: '2', text: '遺跡ハンター' },
      { optionId: '3', text: 'ウイルスハンター' },
      { optionId: '4', text: 'ブラックリストハンター' },
    ],
  },
  {
    quizId: '849',
    question: 'モラウのフルネームは？',
    options: [
      { optionId: '0', text: 'モラウ＝マッカーナーシ' },
      { optionId: '1', text: 'モラウ＝コバヤカワ' },
      { optionId: '2', text: 'モラウ＝アンビシャス' },
      { optionId: '3', text: 'モラウ＝ニュートラル' },
      { optionId: '4', text: 'モラウ＝ノートン' },
    ],
  },
  {
    quizId: '850',
    question:
      '選挙編からの問題です。\n第13代会長総選挙、四回目の投票結果で6位となった、イックションペ＝カットゥーチャの説明として正しいものを選べ。',
    options: [
      { optionId: '0', text: '一つ星を持つ、ハッカーハンター。電脳世界の住人' },
      {
        optionId: '1',
        text: '二つ星ハンターで、人材発掘・育成のスペシャリスト。ハンター試験の抜本的見直しを要求している',
      },
      { optionId: '2', text: 'ジンをぶっ倒した超新星。医者を目指して勉強中' },
      {
        optionId: '3',
        text: '三つ星ハンター。十二支んの御意見番。名実共に最も会長に近い男',
      },
      {
        optionId: '4',
        text: '一つ星を持つ、ウイルスハンター。ハンター協会の女医さん',
      },
    ],
  },
  {
    quizId: '851',
    question:
      '選挙編からの問題です。\n第13代会長総選挙、五回目の投票結果で7位となった、テラデイン＝ニュートラルの説明として正しいものを選べ。',
    options: [
      {
        optionId: '0',
        text: '二つ星ハンターで、人材発掘・育成のスペシャリスト。ハンター試験の抜本的見直しを要求している',
      },
      { optionId: '1', text: '一つ星を持つ、ハッカーハンター。電脳世界の住人' },
      { optionId: '2', text: 'ジンをぶっ倒した超新星。医者を目指して勉強中' },
      {
        optionId: '3',
        text: '三つ星ハンター。十二支んの御意見番。名実共に最も会長に近い男',
      },
      {
        optionId: '4',
        text: '一つ星を持つ、ウイルスハンター。ハンター協会の女医さん。',
      },
    ],
  },
  {
    quizId: '852',
    question:
      '選挙編からの問題です。\n第13代会長総選挙、五回目の投票結果で11位となった、サンビカ＝ノートンの説明として正しいものを選べ。',
    options: [
      {
        optionId: '0',
        text: '一つ星を持つ、ウイルスハンター。ハンター協会の女医さん',
      },
      {
        optionId: '1',
        text: '二つ星ハンターで、人材発掘・育成のスペシャリスト。ハンター試験の抜本的見直しを要求している',
      },
      { optionId: '2', text: '一つ星を持つ、ハッカーハンター。電脳世界の住人' },
      { optionId: '3', text: 'ジンをぶっ倒した超新星。医者を目指して勉強中' },
      {
        optionId: '4',
        text: '三つ星ハンター。十二支んの御意見番。名実共に最も会長に近い男',
      },
    ],
  },
  {
    quizId: '853',
    question: 'レオリオのフルネームは？',
    options: [
      { optionId: '0', text: 'レオリオ＝パラディナイト' },
      { optionId: '1', text: 'レオリオ＝マッカーナーシ' },
      { optionId: '2', text: 'レオリオ＝コバヤカワ' },
      { optionId: '3', text: 'レオリオ＝アンビシャス' },
      { optionId: '4', text: 'レオリオ＝ニュートラル' },
    ],
  },
  {
    quizId: '854',
    question: '十二支んの良心、「ミザイストム（丑）」のフルネームは？',
    options: [
      { optionId: '0', text: 'ミザイストム＝ナナ' },
      { optionId: '1', text: 'ミザイストム＝マッカーナーシ' },
      { optionId: '2', text: 'ミザイストム＝コバヤカワ' },
      { optionId: '3', text: 'ミザイストム＝アンビシャス' },
      { optionId: '4', text: 'ミザイストム＝ニュートラル' },
    ],
  },
  {
    quizId: '855',
    question: '十二支んの御意見番、「ボトバイ（辰）」のフルネームは？',
    options: [
      { optionId: '0', text: 'ボトバイ＝ギガンテ' },
      { optionId: '1', text: 'ボトバイ＝マッカーナーシ' },
      { optionId: '2', text: 'ボトバイ＝コバヤカワ' },
      { optionId: '3', text: 'ボトバイ＝アンビシャス' },
      { optionId: '4', text: 'ボトバイ＝ニュートラル' },
    ],
  },
  {
    quizId: '856',
    question: '次のうち、三ツ星（トリプル）ハンターは誰？',
    options: [
      { optionId: '0', text: 'ボトバイ＝ギガンテ' },
      { optionId: '1', text: 'ジン＝フリークス' },
      { optionId: '2', text: 'イックションペ＝カットゥーチャ' },
      { optionId: '3', text: 'テラデイン＝ニュートラル' },
      { optionId: '4', text: 'サッチョウ＝コバヤカワ' },
    ],
  },
  {
    quizId: '857',
    question: '次のうち、二ツ星（ダブル）ハンターは誰？',
    options: [
      { optionId: '0', text: 'ビスケット＝クルーガー' },
      { optionId: '1', text: 'ボトバイ＝ギガンテ' },
      { optionId: '2', text: 'キューティー＝ビュティー' },
      { optionId: '3', text: 'モラウ＝マッカーナーシ' },
      { optionId: '4', text: 'チードル＝ヨークシャー' },
    ],
  },
  {
    quizId: '858',
    question: '十二支んの頭脳、「チードル（戌）」のフルネームは？',
    options: [
      { optionId: '0', text: 'チードル＝ヨークシャー' },
      { optionId: '1', text: 'チードル＝ギガンテ' },
      { optionId: '2', text: 'チードル＝ビュティー' },
      { optionId: '3', text: 'チードル＝マッカーナーシ' },
      { optionId: '4', text: 'チードル＝クルーガー' },
    ],
  },
  {
    quizId: '859',
    question: '十二支んの「パリストン（子）」のフルネームは？',
    options: [
      { optionId: '0', text: 'パリストン＝ヒル' },
      { optionId: '1', text: 'パリストン＝クルーガー' },
      { optionId: '2', text: 'パリストン＝ギガンテ' },
      { optionId: '3', text: 'パリストン＝ビュティー' },
      { optionId: '4', text: 'パリストン＝マッカーナーシ' },
    ],
  },
  {
    quizId: '860',
    question: '協会最年長ハンターの「リンネ＝オードブル」は何ハンター？',
    options: [
      { optionId: '0', text: 'グルメハンター' },
      { optionId: '1', text: 'ヘッドハンター' },
      { optionId: '2', text: 'シーハンター' },
      { optionId: '3', text: '遺跡ハンター' },
      { optionId: '4', text: 'ウイルスハンター' },
    ],
  },
  {
    quizId: '861',
    question:
      '王を倒すためにネテロ会長が自爆した日、ハンター協会所有の大型飛行船が東ゴルドーへ向かいました。\n何機が東ゴルドーへ向かった？',
    options: [
      { optionId: '0', text: '100機' },
      { optionId: '1', text: '1,000機' },
      { optionId: '2', text: '500機' },
      { optionId: '3', text: '2,000機' },
      { optionId: '4', text: '3,000機' },
    ],
  },
  {
    quizId: '862',
    question:
      '王を倒すために、ネテロ会長が自爆した日、ハンター協会所有の大型飛行船100機が東ゴルドーへ向かいました。\nそこで、蟻に配合された半獣人のマユが回収されました。\n何個のマユが回収された？',
    options: [
      { optionId: '0', text: '約5,000個' },
      { optionId: '1', text: '約3,000個' },
      { optionId: '2', text: '約1,000個' },
      { optionId: '3', text: '約500個' },
      { optionId: '4', text: '約200個' },
    ],
  },
  {
    quizId: '863',
    question:
      '選挙編からの問題です。\nジンがチードルに教えたＸ（エックス）デーとはいつのこと？',
    options: [
      { optionId: '0', text: '次のハンター試験日' },
      { optionId: '1', text: '第13代会長総選挙が終わる日' },
      {
        optionId: '2',
        text: 'ハンター協会が回収した、蟻に配合された半獣人のマユ5000個が羽化する日',
      },
      { optionId: '3', text: '東ゴルドーの新総帥が決まる日' },
      { optionId: '4', text: 'NGLの新総帥が決まる' },
    ],
  },
  {
    quizId: '864',
    question:
      '選挙編からの問題です。\n次の5人の内、第13代会長総選挙でベスト4入りしていない人物を選べ。',
    options: [
      { optionId: '0', text: 'ジン' },
      { optionId: '1', text: 'レオリオ' },
      { optionId: '2', text: 'チードル' },
      { optionId: '3', text: 'パリストン' },
      { optionId: '4', text: 'ミザイストム' },
    ],
  },
  {
    quizId: '865',
    question:
      'アルカ編からの問題です。\nキルアがアルカを連れて、ゴンの待つ病院についた時、周囲を見張っていてくれた仲間たちがいます。\nこの時、この場にいなかったのは誰？',
    options: [
      { optionId: '0', text: 'レオリオ' },
      { optionId: '1', text: 'センリツ' },
      { optionId: '2', text: 'ゴレイヌ' },
      { optionId: '3', text: 'ハンゾー' },
      { optionId: '4', text: 'ビスケ' },
    ],
  },
  {
    quizId: '866',
    question:
      'アルカ編からの問題です。\nキルアがアルカを連れて、ゴンの待つ病院についた時、周囲を見張っていてくれた仲間たちがいます。\nこの時、この場にいなかったのは誰？',
    options: [
      { optionId: '0', text: 'ツェズゲラ' },
      { optionId: '1', text: 'センリツ' },
      { optionId: '2', text: 'ゴレイヌ' },
      { optionId: '3', text: 'ハンゾー' },
      { optionId: '4', text: 'ビスケ' },
    ],
  },
  {
    quizId: '867',
    question:
      '選挙編からの問題です。\nパリストンが演説で話した会長に必要な三つの条件とは何？',
    options: [
      { optionId: '0', text: '戦闘力、経験、器' },
      { optionId: '1', text: '頭脳、愛、金' },
      { optionId: '2', text: '経験、熱意、戦闘力' },
      { optionId: '3', text: '信頼、熱意、経験' },
      { optionId: '4', text: '戦闘力、熱意、頭脳' },
    ],
  },
  {
    quizId: '868',
    question: '十二支んの良心、「ミザイストム（丑）」は何ハンター？',
    options: [
      { optionId: '0', text: '犯罪（クライム）ハンター' },
      { optionId: '1', text: 'ヘッドハンター' },
      { optionId: '2', text: 'シーハンター' },
      { optionId: '3', text: '遺跡ハンター' },
      { optionId: '4', text: 'ウイルスハンター' },
    ],
  },
  {
    quizId: '869',
    question:
      '選挙編からの問題です。\nジンがゴンに教えた「仲間に謝る時のルール」とは、どんなルール？',
    options: [
      {
        optionId: '0',
        text: '次はどうするか、そいつと約束する。そしてそれを絶対守ること',
      },
      { optionId: '1', text: '目を見て、誠意を以て本気で謝る' },
      {
        optionId: '2',
        text: '何に対して誤っているのかを明確にする。論理的に謝る',
      },
      {
        optionId: '3',
        text: '絶対に言い訳をしてはいけない。全てが自分が悪いのだと思った時だけ謝る。逆に少しでも、相手にも責任があると思ったら謝ってはならない。',
      },
      {
        optionId: '4',
        text: '本気で謝る。謝った後は水に流し、もう二度とその話をしてはいけない',
      },
    ],
  },
  {
    quizId: '870',
    question:
      '選挙編からの問題です。\nパリストンが13代目の会長となった直後に重大発表をしました。\nパリストンがした重大発表とは何？',
    options: [
      {
        optionId: '0',
        text: 'チードルを副会長に指名して、この場で会長を辞すること',
      },
      {
        optionId: '1',
        text: 'ネテロには息子がいること。そして、息子を狩ることを宣言',
      },
      {
        optionId: '2',
        text: '蟻に配合された半獣人のマユ5,000個を回収したこと',
      },
      { optionId: '3', text: 'ジンが十二支んを離脱すること' },
      {
        optionId: '4',
        text: 'ハンター十カ条とハンター試験の見直しについて、信任投票を行うこと',
      },
    ],
  },
  {
    quizId: '871',
    question: 'キメラアントのコアラが、生前にしていた仕事は？',
    options: [
      { optionId: '0', text: '人を消す仕事' },
      { optionId: '1', text: 'アパレルの店員' },
      { optionId: '2', text: '農家' },
      { optionId: '3', text: '警察' },
      { optionId: '4', text: 'プロのハンター' },
    ],
  },
  {
    quizId: '872',
    question:
      '選挙編終了後、世界樹の天辺で、ゴンとジンは会話をしました。\nこの世界樹の高さは何m？',
    options: [
      { optionId: '0', text: '1784m' },
      { optionId: '1', text: '987m' },
      { optionId: '2', text: '4531m' },
      { optionId: '3', text: '3776m' },
      { optionId: '4', text: '634m' },
    ],
  },
  {
    quizId: '873',
    question:
      '選挙編終了後、世界樹の天辺で、ゴンとジンは会話をしました。\nこの世界樹は、ある高さまでエレベーターで行けます。\nどの高さまでエレベーターでいける？',
    options: [
      { optionId: '0', text: '500m地点' },
      { optionId: '1', text: '1,000m地点' },
      { optionId: '2', text: '700m地点' },
      { optionId: '3', text: '100m地点' },
      { optionId: '4', text: '300m地点' },
    ],
  },
  {
    quizId: '874',
    question:
      '選挙編終了後、世界樹の天辺で、ゴンとジンは会話をしました。\nこの世界樹は、年間約3,000人が挑戦しますが、実際頂上まで無事に登り、降りて来られるのはどのくらいの人数？',
    options: [
      { optionId: '0', text: '30人' },
      { optionId: '1', text: '15人' },
      { optionId: '2', text: '5人' },
      { optionId: '3', text: '2人' },
      { optionId: '4', text: '10人' },
    ],
  },
  {
    quizId: '875',
    question:
      '選挙編終了後、世界樹の天辺で、ゴンとジンは会話をしました。\nこの世界樹を登るには、ある年齢に達するまでは登れません。\nただし、何か特別な資格が免許があれば登れます。（ゴンはハンター証で登れた）\n通常は、何歳未満の人は世界樹に登ることができない？',
    options: [
      { optionId: '0', text: '18歳未満' },
      { optionId: '1', text: '15歳未満' },
      { optionId: '2', text: '20歳未満' },
      { optionId: '3', text: '16歳未満' },
      { optionId: '4', text: '22歳未満' },
    ],
  },
  {
    quizId: '876',
    question:
      '選挙編終了後、世界樹の天辺で、ゴンとジンは会話をしました。\nこの時ゴンは、世界樹の天辺に登るのに、500m地点からどのくらい時間がかかった？',
    options: [
      { optionId: '0', text: '20分' },
      { optionId: '1', text: '30分' },
      { optionId: '2', text: '40分' },
      { optionId: '3', text: '10分' },
      { optionId: '4', text: '5分' },
    ],
  },
  {
    quizId: '877',
    question:
      '選挙編終了後、世界樹の天辺で、ゴンとジンは会話をしました。\nこの時、ジンはゴンに「この世界」には、「外側」があることを教え、更に「この世界の外側」に行くために、最低限必要な必要な四つのものも教えます。\nジンがゴンに教えた、「外」に行くのに必要な四つに含まれないものを選べ。\n（注意！問は【含まれないもの】です。）',
    options: [
      { optionId: '0', text: '権力' },
      { optionId: '1', text: '許可' },
      { optionId: '2', text: '手段' },
      { optionId: '3', text: '資格' },
      { optionId: '4', text: '契約' },
    ],
  },
  {
    quizId: '878',
    question:
      '選挙編終了後、モラウとノヴは、亡くなったネテロへ高級なお酒をプレゼントしました。\nいくらのお酒をプレゼントした？',
    options: [
      { optionId: '0', text: '1,100,000（110万）' },
      { optionId: '1', text: '1,000,000（100万）' },
      { optionId: '2', text: '100,000（10万）' },
      { optionId: '3', text: '110,000（11万）' },
      { optionId: '4', text: '11,000,000（1100万）' },
    ],
  },
  {
    quizId: '879',
    question: 'チードルは何代目のハンター協会会長？',
    options: [
      { optionId: '0', text: '14代目' },
      { optionId: '1', text: '13代目' },
      { optionId: '2', text: '12代目' },
      { optionId: '3', text: '11代目' },
      { optionId: '4', text: '10代目' },
    ],
  },
  {
    quizId: '880',
    question: '選挙編終了後からの問題です。\nカキン帝国の国王の名前は？',
    options: [
      { optionId: '0', text: 'ホイコーロ国王' },
      { optionId: '1', text: 'チャーシュー国王' },
      { optionId: '2', text: 'ニラレバ国王' },
      { optionId: '3', text: 'チャーハン国王' },
      { optionId: '4', text: 'チンゲンサイ国王' },
    ],
  },
  {
    quizId: '881',
    question: '選挙編終了後からの問題です。\n近代5大陸のことを何と呼ぶ？',
    options: [
      { optionId: '0', text: 'V5' },
      { optionId: '1', text: 'G5' },
      { optionId: '2', text: 'C5' },
      { optionId: '3', text: 'Z5' },
      { optionId: '4', text: 'N5' },
    ],
  },
  {
    quizId: '882',
    question:
      '選挙編終了後からの問題です。\nカキン帝国は、ある事件をきっかけに帝国社会主義から議会民主主義へシフトしました。\nある事件とは何？',
    options: [
      { optionId: '0', text: '真林間事件' },
      { optionId: '1', text: '満州事件' },
      { optionId: '2', text: '虎ノ門事件' },
      { optionId: '3', text: '壬申事件' },
      { optionId: '4', text: '保元事件' },
    ],
  },
  {
    quizId: '883',
    question:
      '選挙編終了後からの問題です。\nカキン帝国は、真林間事件をきっかけに帝国社会主義からシフトしました。\n何主義へシフトした？',
    options: [
      { optionId: '0', text: '議会民主主義' },
      { optionId: '1', text: '資本主義' },
      { optionId: '2', text: '共産主義' },
      { optionId: '3', text: '修正資本主義' },
      { optionId: '4', text: '天皇制民主主義' },
    ],
  },
  {
    quizId: '884',
    question: 'ネテロのフルネームは？',
    options: [
      { optionId: '0', text: 'アイザック＝ネテロ' },
      { optionId: '1', text: 'ヒューストン＝ネテロ' },
      { optionId: '2', text: 'モビット＝ネテロ' },
      { optionId: '3', text: 'コートック＝ネテロ' },
      { optionId: '4', text: 'ジョイン＝ネテロ' },
    ],
  },
];
