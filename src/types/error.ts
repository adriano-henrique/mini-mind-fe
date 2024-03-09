export type MiniMindError = {
    message: string,
    errorType: string,
}

export enum ErrorType {
    AXIOS_ERROR = "AXIOS_ERROR",
    UNKNOWN_ERROR = "UNKNOWN_ERROR",
}