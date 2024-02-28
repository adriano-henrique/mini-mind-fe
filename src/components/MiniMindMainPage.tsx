import React, { useEffect } from "react";
import FolderService, { GetFoldersData, GetFoldersResponse } from "../services/folder";
import { HttpStatusCode } from "axios";
import MiniMindFolderAccordion from "./folder-list/MiniMindFolderAccordion";

export default function MiniMindMainPage() {
    const [responseStatus, setResponseStatus] = React.useState<number>(0)
    const [folders, setFolders] = React.useState<GetFoldersData | null>(null)
    useEffect(() => {
        FolderService.getAllFolders()
        .then((response: GetFoldersResponse) => {
            setResponseStatus(response.status)
            setFolders(response.data)
        }).catch((e: Error) => {
            console.log(e);
        })
    }, [])

    if (responseStatus !== HttpStatusCode.Ok || !folders) {
        return <div>Something went wrong</div>
    }
    return <div className="w-full">
            <MiniMindFolderAccordion foldersData={folders} />
        </div>
}