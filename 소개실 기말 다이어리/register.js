document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // 여기에 회원가입 로직을 추가하세요.
    // 예를 들어, 서버로 데이터를 전송하고 응답을 처리할 수 있습니다.

    if (password === confirmPassword) {
        alert('회원가입 성공!');
    } else {
        alert('비밀번호가 일치하지 않습니다.');
    }
});
