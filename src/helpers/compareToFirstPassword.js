export const  compareToFirstPassword = ( form , rule, value, callback) => {
    console.log(form);
    if (value && value !== form.getFieldValue('password')) {
        callback('Пароль и его подтверждение не совпадают');
    } else {
        callback();
    }
};