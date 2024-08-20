// plugins/lazyBackground.ts
import type { App, DirectiveBinding } from 'vue';

interface BackgroundImageBinding {
  src: string; // 実際の画像
  loading: string; // ローディング画像
}

export default {
  install(app: App) {
    app.directive('lazy-background', {
      mounted(el: HTMLElement, binding: DirectiveBinding<BackgroundImageBinding>) {
        el.style.backgroundImage = `url(${binding.value.loading})`; // 初期ローディング画像
        el.classList.add('loading'); // ローディングクラスを追加

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.style.backgroundImage = `url(${binding.value.src})`; // 実際の画像に更新
              el.classList.remove('loading'); // ローディングクラスを削除
              observer.unobserve(el);
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(el);
      }
    });
  }
};
