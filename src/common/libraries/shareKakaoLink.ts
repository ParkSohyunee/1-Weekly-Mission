declare const window: typeof globalThis & {
  Kakao: any;
};

export const shareOnKakao = (userId: number, folderId: number) => {
  const hostURL = window.location.href;

  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    }
  }

  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "폴더",
      description: "링크",
      imageUrl: "이미지 URL",
      link: {
        mobileWebUrl: `${hostURL}/shared?user=${userId}&folder=${folderId}`,
        webUrl: `${hostURL}/shared?user=${userId}&folder=${folderId}`,
      },
    },
  });
};
