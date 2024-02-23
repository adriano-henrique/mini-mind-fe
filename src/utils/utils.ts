import { GetFoldersResponse } from "../services/folder";
import { MiniMindError } from "../types/error";

export function buildError(message: string): MiniMindError {
    return {
        message: message
    }
}

export function buildEmptyGetFoldersResponse(errorMessage: string): GetFoldersResponse {
    return {
        data: {
            data: [],
            message: errorMessage,
            status: 'FE Error'
        },
        status: -1
    }
}