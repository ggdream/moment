import Http from './net'

declare module 'vue/types/vue' {
    interface Vue {
        $http: Http
    }
}
