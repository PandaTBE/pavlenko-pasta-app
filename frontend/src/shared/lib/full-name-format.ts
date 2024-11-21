/**
 * Функция для получения инициалов
 * @example "FirstName MiddleName LastName" => "FL"
 */
export const makeInitials = (value: string) => {
    const splittedValue = value.split(' ');
    let initials = splittedValue[0].substring(0, 1).toUpperCase();

    if (splittedValue.length > 1) {
        initials += splittedValue[1].substring(0, 1).toUpperCase();
    }
    return initials;
};

/**
 * Функция для форматирования ФИО
 * @example "FirstName MiddleName LastName" => "MiddleName F. L."
 */
export const makeMiddleNameWithInitial = (value: string) => {
    const nameParts = value.trim().split(' ');

    const [middleName, firstName, lastName] = nameParts;

    const firstNameInitial = firstName?.charAt(0).toUpperCase();
    const lastNameInitial = lastName?.charAt(0).toUpperCase();

    const formattedName = `${middleName}${
        firstNameInitial ? ` ${firstNameInitial}.` : ''
    }${lastNameInitial ? ` ${lastNameInitial}.` : ''}`;

    return formattedName;
};

export const makeFullName = ({
    middleName,
    firstName,
    lastName,
}: {
    middleName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
}) => {
    return [middleName, firstName, lastName].filter(Boolean).join(' ');
};
