export const birthdate = {
    rules: [{required: true, message: 'Выберите дату рождения'}],
};
export const name = {
    rules: [{required: true, message: 'Введите имя'}],
};
export const surname = {
    rules: [{required: true, message: 'Введите фамилию'}],
};
export const middleName = {
    rules: [{required: true, message: 'Введите отчество'}],
};
export const phone = {
    rules: [{required: true, message: 'Введите номер телефона'}],
};
export const email = {
    rules: [{type: 'email', message: 'Не валидный E-mail',}, {required: true, message: 'Введите E-mail',}],
};
export const password = {
    rules: [{required: true, message: 'Введите пароль',}],
};
export const confirmPassword = {
    rules: [{required: true, message: 'Подтвердите пароль',}]
};
export const nameOrganization = {
    rules: [{required: true, message: 'Введите имя организации'}],
};
export const sex = {
    rules: [{required: true, message: 'Выберите пол'}],
};
export const eventName = {
    rules: [{required: true, message: 'Введите название мероприятия'}],
};
export const place = {
    rules: [{required: true, message: 'Введите место проведения'}],
};
export const gerne = {
    rules: [{required: true, message: 'Выберите жанр'}],
};
export const date = {
    rules: [{required: true, message: 'Выберите дату и время проведени мероприятия'}],
};