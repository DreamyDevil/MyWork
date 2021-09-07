import { types } from 'mobx-state-tree'


export const ResultFromGoogle = types.model('ResultFromGoogle', {
    title: '',
    description: '',
    link: '',
})