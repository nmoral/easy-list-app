
const zxcvbn = require('zxcvbn');

export default class PasswordStrengthCalculator {
    readonly level:number;
    constructor(password: string) {
        if (7 < password.length) {
            let information = zxcvbn(password);
            this.level = information.score;
            return;
        }

        this.level = -1;
    }

    getMessage() {
        switch (this.level) {
            case -1:
                return 'Le mot de passe doit faire plus de 8 caractères'
            case 0:
                return 'faible';
            case 1:
                return 'acceptable'
            case 2:
                return 'bonne'
            case 3:
                return 'fort'
            case 4:
                return 'très fort'
            default:
                return '';
        }
    }

    getBaseMeterClass() {
        return 'w'+(19 * (this.level+1));
    }
}