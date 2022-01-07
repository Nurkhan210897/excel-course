export class DomListener {
    constructor($root) {
        if (!$root) {
            throw new Error(`no $root provider for DomListener`)
        }
        this.$root = $root
    }

    initDOMListeners() {

    }

    removeDOMListeners() {

    }

}