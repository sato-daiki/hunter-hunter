import { Message } from '@/types/message';

export const NUMBER_QUESTION = 50;
export const APP_URL = 'iOS:https://onl.la/Ni5J8Ep';

const SCORE_MESSAGE_0: Message = {
  title: '『不真面目野郎』',
  description: 'そりゃ悪手だろ。蟻ンコ。',
};
const SCORE_MESSAGE_5: Message = {
  title: '『・・・・』',
  description: 'ここは墓場貴様のな',
};
const SCORE_MESSAGE_10: Message = {
  title: '『タイトルだけ知ってる』',
  description:
    '点数ひっくいなぁーwwwwww五択だから感でも20点は取れますよwwwwwwwwwえーとりあえず、お疲れwwww',
};
const SCORE_MESSAGE_15: Message = {
  title: '『誰も相手にしない』',
  description:
    '悔しいねー悔しいねーwwwwまた得意の言い訳でもいって自己を正当化しなwww',
};
const SCORE_MESSAGE_20: Message = {
  title: '『嘘つき』',
  description:
    '漫画好きです！と言ったものの、実際に会話を始めると、アタフタするタイプ。そもそも、全部読んだことあるのか？',
};
const SCORE_MESSAGE_25: Message = {
  title: '『口だけ君』',
  description:
    'あんたこの前オタク自慢してへんかった？wwwwwほんまあんたって口だけやな(^o^)',
};
const SCORE_MESSAGE_30: Message = {
  title: '『ニワカ』',
  description:
    '断言しよう。君はオタクでない。漫画を読んだことがある、ただそれだけのこと。オタクと二度と名乗ってはならぬ。',
};
const SCORE_MESSAGE_35: Message = {
  title: '『お調子者』',
  description:
    '化けの皮が剥がされましたね。アナタはオタクでありません。ニワカですwwwww',
};
const SCORE_MESSAGE_40: Message = {
  title: '『にわかwww』',
  description:
    'その点数でオタクですかwwwwいつから、漫画読んだことある人がオタクになったんだよwww',
};
const SCORE_MESSAGE_45: Message = {
  title: '『笑われ者』',
  description:
    '50点いかないで、オタクぶるとかwwwマジうけるんですけどwwwwお笑いの才能はあるかもねwwww',
};
const SCORE_MESSAGE_50: Message = {
  title: '『wwww』',
  description:
    'えっ？？？wwwwこの漫画好きなんじゃなかったけ？wwwwww口だけですね(^o^)よっ！口だけマン！！',
};
const SCORE_MESSAGE_55: Message = {
  title: '『自称オタク（）』',
  description:
    'ここらへんに漫画オタクがいるって聞いたんだけどなー？いないなー？まさか、この点数の人が言うわけないしなー',
};
const SCORE_MESSAGE_60: Message = {
  title: '『凡人』',
  description:
    'まぁ、漫画は読んだことあるんだろうね。でも決してオタクでない。欲しいのは強者のみ！！',
};
const SCORE_MESSAGE_65: Message = {
  title: '『一般人上級』',
  description:
    '一度や二度読んだだけでは、決して辿りつけることができない域。単なるクソニワカ野郎ではないことは認めよう。だが、ただそれだけのこと。',
};
const SCORE_MESSAGE_70: Message = {
  title: '『漫画愛』',
  description:
    '其の方の漫画に対する愛、しかと受け取った。しかし、愛だけでは越えられぬ壁がある。また来なさい。',
};
const SCORE_MESSAGE_75: Message = {
  title: '『井の中の蛙大河を知らず』',
  description:
    'あなたは、なかなか詳しい。しかし世界は広い。上には上がいるのさ。',
};
const SCORE_MESSAGE_80: Message = {
  title: '『惜しい』',
  description:
    'ずいぶん研究を重ねて来たのだろう。本当に漫画が好きなんだろう。普通の漫画好きに届かぬ域。一流になるまであと少し。',
};
const SCORE_MESSAGE_85: Message = {
  title: '『紙一重』',
  description: '猫の手はいらん。必要なのは強者のみ。',
};
const SCORE_MESSAGE_90: Message = {
  title: '『オタク』',
  description:
    'おぬし、なかなか強いな。解かせぬつもりで、作ったのだぞ。褒めて遣わす。合格じゃ。其は一人前のオタクじゃ。',
};
const SCORE_MESSAGE_95: Message = {
  title: '『選ばれし者』',
  description:
    '天賦の才を持つ者が更に、その才を全て投げ出してようやく得られるほどの点数。',
};
const SCORE_MESSAGE_100: Message = {
  title: '『個の極地』',
  description:
    '其の方が己を高めんが為捧ぎ続けた永き時その成果、しかと受け取った。一個が修練の末届きうる限界。それを卓越した稀有な事例といえよう。天晴れだ。',
};

export const getMessage = (score: number) => {
  if (score === 100) {
    return SCORE_MESSAGE_100;
  } else if (score > 95) {
    return SCORE_MESSAGE_95;
  } else if (score > 90) {
    return SCORE_MESSAGE_90;
  } else if (score > 85) {
    return SCORE_MESSAGE_85;
  } else if (score > 80) {
    return SCORE_MESSAGE_80;
  } else if (score > 75) {
    return SCORE_MESSAGE_75;
  } else if (score > 70) {
    return SCORE_MESSAGE_70;
  } else if (score > 65) {
    return SCORE_MESSAGE_65;
  } else if (score > 60) {
    return SCORE_MESSAGE_60;
  } else if (score > 55) {
    return SCORE_MESSAGE_55;
  } else if (score > 50) {
    return SCORE_MESSAGE_50;
  } else if (score > 45) {
    return SCORE_MESSAGE_45;
  } else if (score > 40) {
    return SCORE_MESSAGE_40;
  } else if (score > 35) {
    return SCORE_MESSAGE_35;
  } else if (score > 30) {
    return SCORE_MESSAGE_30;
  } else if (score > 25) {
    return SCORE_MESSAGE_25;
  } else if (score > 20) {
    return SCORE_MESSAGE_20;
  } else if (score > 15) {
    return SCORE_MESSAGE_15;
  } else if (score > 10) {
    return SCORE_MESSAGE_10;
  } else if (score > 5) {
    return SCORE_MESSAGE_5;
  }
  return SCORE_MESSAGE_0;
};
