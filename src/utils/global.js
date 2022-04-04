const closeAppLoading = () => {
  setTimeout(() => {
    const loadingDom = document.querySelector("#loading");
    loadingDom.style.display = "none";
  }, 30);
  // 以下为动效，效果一般隐藏掉
  // loadingDom.style.animation = 'opacity-hide-keyframes .2s linear'
  // setTimeout(()=>{
  //   loadingDom.style.display = 'none'
  // }, 200)
};

export default {
  install(Vue) {
    Vue.prototype.$closeAppLoading = closeAppLoading; // 关闭html中的loading  只有在路由中meta属性中添加loading为true时  才需要手动调用this.$closeAppLoading()来关闭
    // Vue.prototype.$Toast = Toast;  已经注入到全局里，这里不需要重复注入
  },
};