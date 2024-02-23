import React, { useEffect } from "react";
import FolderService, { GetFoldersData, GetFoldersResponse } from "../services/folder";
import { MiniMindError } from "../types/error";

export default function MiniMindHeader() {
    const [folders, setFolders] = React.useState<GetFoldersData | null>(null)
    useEffect(() => {
        FolderService.getAllFolders()
        .then((response: GetFoldersResponse) => {
            setFolders(response.data)
            console.log(response.data)
        }).catch((e: Error) => {
            console.log(e);
        })
    }, [])
    return <div>{folders?.data.length}</div>
}