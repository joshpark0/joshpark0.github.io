function copy_to_email() {
  var copyText = document.getElementById('email');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('Copy');
  alert('이메일이 복사되었습니다, 감사합니다.');
}
