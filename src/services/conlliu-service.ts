interface Moment {
  id: number;
  title: string;
  image: string;
  openSea: string | undefined;
  thumbnail: string | undefined;
}

const releasedGifIds = [1, 10, 7, 29, 6, 34, 12, 19, 37, 30, 35, 8, 15, 31, 20]; // ここにリリース済みのGIFのIDを追加

const arAddresses: Record<number, string> = {
  1: 'r_kwzt-eU1EMKabRrlfwPgs0yFCFQ3WDGD3hKMSAeKk',
  10: 'sfhr5x2gTCr1SeAMzMpPCkEhZCijbJqqNU12cv_g9f8',
  7: 'O5lXZ54s4IbV6GnvFIaR2F93_kB_Rb2qXJF3R6nRHGY',
  29: 'CC23Mu6JBh_DBAx748E4b1PiA2xinlOpG3BKpq0ZZgQ',
  6: '9HX3puXGR1LpJUx8jR79tOsx6mwj9Xz63wWlOPDW0N0',
  34: 'T3ruUnVIHdROC3pjcoyFoNbhCdnyjAhIgufzggthsfo',
  12: 'd_hFD8y-sp_Yf4di0sEdGWuEqo4HiTDcMpR4YhLYGzY',
  19: 'FgapHf7ut3urEgcIlxlWtL7g2P_jK8eLkdwqwP0dKd0',
  37: 'WU4KS9TfWLwu_yB0Qu3UtaQ7Rus_5ULJ0lme9zvyDR4',
  30: 'eczCDoQqAtoj4D5e17r2oRnxnthJtRyEjq28dwHpLh8',
  35: 'kehdmz_UBP2xpQnzyQf3mlYWbWgo1_TFikt87lre_6Q',
  8: 'hFHuxDLpuuEkdWgLXmmJR2V0Q6ZWMtbUrxKTHuJNtbo',
  15: '5KUlHu1FBCJ3z147YO8nUAA2b-udAKpVYQOfy9J3oYk',
  31: 'QjTbFaiTZ1vfdiRz8aGPAMcqq5vpn3fgJ_3u9qFWoxg',
  20: 'MESDdPc_tRYO5ffb3OXTlOPPHBcb2BGfbDYSFwwaRr8',
}
const momentsOf39: Moment[] = [];
for (let id = 1; id <= 39; id++) {
  // IDがreleasedGifIds配列に含まれているかどうかで画像のパスを切り替え
  let image = '/Brutal/img/placeholder.png';
  let openSea;
  let thumbnail;
  if (releasedGifIds.includes(id)) {
    image = `https://arweave.net/${arAddresses[id]}`;
    openSea = `https://opensea.io/assets/ethereum/0x81acc0d528fae8f9c17963ff47538582f4886386/${releasedGifIds.indexOf(id)+1}`;
    thumbnail = `/Brutal/img/conlliu/thumbnails/${id}.png`;
  }

  momentsOf39.push({
    id,
    title: `Moment #${id}`,
    image,
    openSea,
    thumbnail,
  });
}

function fetchRandomMomentsOf8(): Moment[] {
const releasedMoments = momentsOf39.filter(moment => releasedGifIds.includes(moment.id));
const unreleasedMoments = momentsOf39.filter(moment => !releasedGifIds.includes(moment.id));

// それぞれをシャッフル
const shuffledReleased = _shuffleArray(releasedMoments);
const shuffledUnreleased = _shuffleArray(unreleasedMoments);

// 再結合して最初の8つの要素を取り出す
const combinedMoments = [...shuffledReleased, ...shuffledUnreleased];

return combinedMoments.slice(0, 8);
}

// 配列をシャッフルする関数
function _shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 要素をスワップ
  }
  return array;
}

export { momentsOf39, fetchRandomMomentsOf8 }
