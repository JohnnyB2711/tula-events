export const birthdate = {
    rules: [{type: 'object', required: true, message: 'Выберите дату рождения!'}],
};
export const name = {
    rules: [{type: 'object', required: true, message: 'Введите имя!'}],
};
export const surname = {
    rules: [{type: 'object', required: true, message: 'Введите фамилию!'}],
};
export const middleName = {
    rules: [{type: 'object', required: true, message: 'Введите отчество!'}],
};
export const phone = {
    rules: [{type: 'object', required: true, message: 'Введите номер телефона!'}],
};
export const email = {
    rules: [{
        type: 'email',
        message: 'Не валидный E-mail!',
    },
        {
            required: true,
            message: 'Введите E-mail!',
        }],
};
export const password = {
    rules: [
        {
            required: true,
            message: 'Введите пароль!',
        },
      /*  {
            validator: this.validateToNextPassword,
        },*/
    ],
};
export const confirmPassword = {
    rules: [
        {
            required: true,
            message: 'Please confirm your password!',
        },
        {
            validator: (rule, value, callback) => {
                const {form} = this.props;
                if (value && value !== form.getFieldValue('password')) {
                    callback('Two passwords that you enter is inconsistent!');
                } else {
                    callback();
                }
            }
        },
    ],
};
export const nameOrganization={
    rules: [{type: 'object', required: true, message: 'Введите имя организации!'}],
};