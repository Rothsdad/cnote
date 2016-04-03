/**
 * Created by rothsdad on 16/4/1.
 */

// 校验密码：长度不能少于6，必须同时包含数字、小写字母、大写字母
function isValidPassword(s) {
    var pattern = /^(\d(?!\d*$)|[A-z])[A-z0-9]*$/;
    if (!pattern.exec(s)) {
        return false;
    }
    else {
        return true;
    }
}
exports.isValidPassword = isValidPassword;