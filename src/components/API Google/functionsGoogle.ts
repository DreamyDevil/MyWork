import { ISnapshotContentGoogleModelIn} from './interfaceGoogle'


export function makeSnapshotInFromGoogle(res: any): ISnapshotContentGoogleModelIn[] {

    return res.data.results.map((res: ISnapshotContentGoogleModelIn) => {
        return {
            description: res.description,
            link: res.link,
            title: res.title
        }
    })

}