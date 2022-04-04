import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

declare module "vue/types/vue" {
  interface Element {
    [propName: string]: any;
  }
  interface Vue {
    readonly $refs: { [key: string]: Vue | Element | Vue[] | Element[]};
    [propName: string]: any;
  }
}
