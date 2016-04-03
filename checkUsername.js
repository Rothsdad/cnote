/**
 * Created by rothsdad on 16/4/1.
 */

// 校验登录名：只能输入3-20个以字母开头、可带数字、“_”的字符串
function isValidUsername(s) {
    var pattern = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){2,19}$/;
    if (!pattern.exec(s)) {
        return false;
    }
    else {
        return true;
    }
}
exports.isValidUsername = isValidUsername;