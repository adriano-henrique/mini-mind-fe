import axios from "axios"
import api from "./api"
import { Folder } from "../types/folder"
import { MiniMindError } from "../types/error"
import { buildEmptyGetFoldersResponse, buildError } from "../utils/utils"

export type GetFoldersData = {
    data: Array<Folder>,
    message: string,
    status: string,
}

export type GetFoldersResponse = {
    data: GetFoldersData,
    status: number,
}

async function getAllFolders(): Promise<GetFoldersResponse> {
    try {
        const data = await api.get("/folder/all")
        const response = {
            data: data["data"],
            status: data["status"]
        } as GetFoldersResponse
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message)
            return buildEmptyGetFoldersResponse(error.message)
        } else {
            console.log('unexpected error: ', error)
            return buildEmptyGetFoldersResponse('Unexpected error happened')
        }
    }
}

const FolderService = {
    getAllFolders
}

export default FolderService