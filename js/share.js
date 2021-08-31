const url = 'https://todayeat.netlify.app/';

function setShare(){
  // 음식결과
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  // 카카오 공유했을 때 나올 타이틀
  const shareTitle = '오늘 뭐 먹지? 추천 결과';
  // 공유했을 때 나올 음식 이름
  const shareDes = infoList[resultAlt].name;
  // 각 음식 사진주소
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  // 공유 링크
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });
}