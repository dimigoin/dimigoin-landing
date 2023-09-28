const installButtonText = document.querySelector('#button #text');
const installButtonIcon = document.querySelector('#button #icon');

switch (getMobileOperatingSystem()) {
  case 'iOS':
    installButtonText.textContent = '앱스토어에서 받기';
    installButtonIcon.src = '/svg/ios-button.svg';
    break;
  case 'Android':
    installButtonText.textContent = '플레이스토어에서 받기';
    installButtonIcon.src = '/svg/aos-button.svg';
    break;
  default:
    installButtonText.textContent = '웹 버전 디미고인 사용하기';
    installButtonIcon.src = '/svg/web-button.svg';
    break;
}