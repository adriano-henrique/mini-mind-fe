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

export type GetFoldersResponse = {
    ok: boolean,
    statusText: string,
    data: GetFoldersData,
    status: number,
}