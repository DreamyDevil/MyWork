import { Instance, SnapshotIn} from 'mobx-state-tree'
import { ResultFromGoogle } from './ResultFromGoogle'
import { RootStore$ } from './RootStore$.store'

export interface IRoot$ extends Instance<typeof RootStore$> {
}

export interface ISnapshotContentGoogleModelIn extends SnapshotIn<typeof ResultFromGoogle> {
}