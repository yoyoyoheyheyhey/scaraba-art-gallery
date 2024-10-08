interface Moment {
  id: number;
  title: string;
  image: string;
  openSea: string | undefined;
  thumbnail: string | undefined;
}

// ここにリリース済みのGIFのIDを追加
const releasedGifIds = [1, 10, 7, 29, 6, 34, 12, 19, 37, 30, 35, 8, 15, 31, 20, 26, 17, 36, 14, 11, 3, 22, 24, 18, 23, 33, 2, 32, 5, 28, 4, 38, 16, 9, 25, 21, 13, 27, 39];

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
  26: '5gTCP5WrapIbWISioAPyXiY4wFQOubbgcC6_OVA8ivg',
  17: 'h6P2lhLT9dxhmSx1R1aOEIh8esfnIZIi2Lr-9onwfsw',
  36: '-t1iZVBY5uxJVHQ-M533TilouH6k7-d-mTw2kWlr6LM',
  14: 'rcikUQ8iGOtVebPvY5voAzZbE8dqs67C8IfSbH7ReyA',
  11: '6fzRTHgLeVOdEdGKsad-t7uX5m-tJA31BgV6i8b8kSY',
  3: 'PNWFK-zn-gV4TAQ5487L13EjWYZqGX2wsUZc5Ei82o4',
  22: 'pft7WSP_D8DI9XNCYue6wfchNYx1FsXcbRA2m-QPJQE',
  24: 'MZm2hrWHcXzsy2RkTj9UTuw8YBtNq4jrq3TRIh7tuLo',
  18: 'X3Nmbb6pQ9MDHEmtQEbtfLbT26YsrSfy7VySvncKUKY',
  23: 'TNB4g245AaP-0eHUm017Te6ryxI4JP4ITThjqrE1dFs',
  33: 'nJjPzIYMs5TCzNj1MkJ0yhMG3DObxJbx6J49nwH6Zjw',
  2: 'dniyIzND6cOq2KM-90UY2Su_c6t8TQZmv-c1NQsv-jQ',
  32: 'D6r8H2tikIlaMmAZZ-RI7fnf4Stx8eauIkoH3oEq52U',
  5: 'iEN1wX69YVdNV4zs1ScOs6RysY02EcwWc3GMiOyj9mQ',
  28: 'rtyPOiewOWJAGbJubK1ZKuFID0YL4UvJR4HK8AumwVI',
  4: 'UBQLZYbrmWAxe7pYTlTJ0lOFGO0Hmn87iEEOJrLQmqU',
  38: 'urK8vBjAIqQYiS3t_AhXaZZ5CkLmoWVzTcQIEc9As0k',
  16: '4Vd8IzYHyZhF8Z-ETwdeL2MEdSlJ8zR2ERwYwLXycjw',
  9: 'VPSczywyBstgOTwS3A2_jhLoZ3Ew5KerUlVBESy3GGI',
  25: 'ycQiTCrMfiZyP9yH-awHY6PqgQkARxUG10mw-HOaMw8',
  21: 'h5l8hydwQ3UU0vBuBJvrSOZSPr6qxT-qHcGn6kcTXFI',
  13: '6Dfv_TIwl4pIPDswPWVKXkDBq44lGb7yGpon1-SZRso',
  27: 'IkAeGn6Z6KljL8cGrmzlPD5GTwFwucmv1o4Ra6Dc1zw',
  39: 'WzK604wY1fQ5BMtJbe6q9DSSdUe9uuFlJ7a3HMzCdtI',
}
const momentsOf39: Moment[] = [];
for (let id = 1; id <= 39; id++) {
  // IDがreleasedGifIds配列に含まれているかどうかで画像のパスを切り替え
  let image = '/img/scaraba/placeholder.png';
  let openSea;
  let thumbnail;
  if (releasedGifIds.includes(id)) {
    image = `https://arweave.net/${arAddresses[id]}`;
    openSea = `https://opensea.io/assets/ethereum/0x81acc0d528fae8f9c17963ff47538582f4886386/${releasedGifIds.indexOf(id)+1}`;
    thumbnail = `/img/conlliu/thumbnails/${id}.png`;
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
