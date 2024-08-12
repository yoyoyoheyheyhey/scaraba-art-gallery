interface Moment {
  id: number;
  title: string;
  image: string;
}

const releasedGifIds = [1]; // ここにリリース済みのGIFのIDを追加
const arAddresses: Record<number, string> = {
  1: 'https://arweave.net/r_kwzt-eU1EMKabRrlfwPgs0yFCFQ3WDGD3hKMSAeKk',
}
const momentsOf39: Moment[] = [];
for (let id = 1; id <= 39; id++) {
  // IDがreleasedGifIds配列に含まれているかどうかで画像のパスを切り替え
  const imagePath = arAddresses[id]
                    ? arAddresses[id] 
                    : '/Brutal/img/placeholder.png';

  momentsOf39.push({
    id: id,
    title: `Moment #${id}`,
    image: imagePath,
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
