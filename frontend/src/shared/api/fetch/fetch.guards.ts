import {
    GenericError,
    InvalidDataError,
    INVALID_DATA,
    PreparationError,
    PREPARATION,
    HttpError,
    HTTP,
    NetworkError,
    NETWORK,
} from './fetch.types';

export function isInvalidDataError(
    error: GenericError<string>,
): error is InvalidDataError {
    return error?.errorType === INVALID_DATA;
}

export function isPreparationError(
    error: GenericError<string>,
): error is PreparationError {
    return error?.errorType === PREPARATION;
}

export function isHttpError(error: GenericError<string>): error is HttpError {
    return error?.errorType === HTTP;
}

export function isHttpErrorCode<Code extends number>(code: Code | Code[]) {
    return function isExactHttpError(
        error: GenericError<string>,
    ): error is HttpError<Code> {
        if (!isHttpError(error)) {
            return false;
        }

        const codes = Array.isArray(code) ? code : [code];

        return codes.includes(error.status as Code);
    };
}

export function isNetworkError(
    error: GenericError<string>,
): error is NetworkError {
    return error?.errorType === NETWORK;
}
