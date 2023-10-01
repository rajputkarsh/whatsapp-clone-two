
export const ERROR_MESSAGE = {
    SOMETHING_WENT_WRONG: 'Something went wrong',
    INVALID_EMAIL: 'Invalid Email',
    USER_NOT_FOUND: 'User not found',
}

export const ERROR = (message = "", error = "") => {
    return {
        error,
        message,
    }
}