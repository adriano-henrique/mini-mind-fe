export type Folder = {
    id: string,
    folderName: string,
    userID: string,
}

export type GetFoldersData = {
    data: Array<Folder>,
    message: string,
    status: string,
}

export type GetMindData = {
    data: MindResponse,
    message: string,
    status: string,
}

export type MindResponse = {
    folderNuggets: Array<FolderNuggets>,
    userID: string,
}

export type FolderNuggets = {
    folderID: string,
    folderName: string,
    nuggets: Array<Nugget>,
}

export type Nugget = {
    nuggetID: string,
    key: string,
    value: string,
    folderID: string,
}

export type GetFoldersResponse = {
    ok: boolean,
    statusText: string,
    data: GetFoldersData,
    status: number,
}