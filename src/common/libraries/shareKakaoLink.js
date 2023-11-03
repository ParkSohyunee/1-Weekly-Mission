export const shareKakao = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }
  }

  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "제목",
      description: "설명",
      imageUrl: "이미지 URL",
      link: {
        mobileWebUrl: "http://localhost:3000/shared?user=1&folder=40",
        webUrl: "http://localhost:3000/shared?user=1&folder=40",
      },
    },
  });
};