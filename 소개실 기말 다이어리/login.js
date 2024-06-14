document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 여기에 로그인 로직을 추가하세요.
    // 예를 들어, 서버로 데이터를 전송하고 응답을 처리할 수 있습니다.

    alert('로그인 성공!');
});

