import { types } from 'mobx-state-tree'


export const ResultFromGoogle = types.model('ResultFromGoogle', {
    description: '',
    link: '',
    title: '',
})