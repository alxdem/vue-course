export default {
  install(Vue, options) {
    Vue.prototype.$message = function (text) {
      window.M.toast({html: text})
    }

    console.log(options);

    Vue.prototype.$error = function (html) {
      window.M.toast({html: `[Ошибка]: ${html}`})
    }
  }
}
