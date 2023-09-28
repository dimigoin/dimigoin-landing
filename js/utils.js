const storeLink = document.querySelector('#header #link');
const installButtonText = document.querySelector('#button #text');
const installButtonIcon = document.querySelector('#button #icon');

switch (getMobileOperatingSystem()) {
  case 'iOS':
    storeLink.target = '_blank';
    storeLink.href = 'https://redirect.dimigo.in/app-ios';
    installButtonText.textContent = '앱스토어에서 받기';
    installButtonIcon.src = '/svg/ios-button.svg';
    break;
  case 'Android':
    storeLink.target = '_blank';
    storeLink.href = 'https://redirect.dimigo.in/app-aos';
    installButtonText.textContent = '플레이스토어에서 받기';
    installButtonIcon.src = '/svg/aos-button.svg';
    break;
  default:
    storeLink.href = 'javascript:void(0);';
    storeLink.addEventListener('click', () => {
      alert('웹 버전은 현재 준비중입니다!');
      return false;
    });
    installButtonText.textContent = '웹 버전 디미고인 사용하기';
    installButtonIcon.src = '/svg/web-button.svg';
    break;
}