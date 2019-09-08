export const notifRequestError = {
    status: false,
    msg: 'requestError',
    message: {
        tr: '',
        en: ''
    }
}

export const notifSuccess = (data) => {
    return {
        status: true,
        msg: 'success',
        data: data,
        message: {
            tr: '',
            en: ''
        }
    }
}