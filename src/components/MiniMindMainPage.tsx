import { GetFoldersData } from "../types/folder";
import { HttpStatusCode } from "axios";
import MiniMindFolderAccordion from "./folder-list/MiniMindFolderAccordion";
import { useFetchMiniMindAPI } from "../hooks/useFetchMiniMindAPI";
import { LoadingSpinner } from "./ui/loading";

export default function MiniMindMainPage() {
    const { data, isPending, responseStatus, error } = useFetchMiniMindAPI<GetFoldersData>("/folder/all")    

    if (responseStatus !== HttpStatusCode.Ok || !data) {
        return <div>Something went wrong</div>
    }

    if (isPending) {
        return <div className="w-full">
            <div className="flex justify-center items-center">
                <LoadingSpinner size={50} />
            </div>
        </div>
    }
    return <div className="w-full">
            <MiniMindFolderAccordion foldersData={data} />
        </div>
}