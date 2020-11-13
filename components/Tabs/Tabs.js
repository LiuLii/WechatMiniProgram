// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //要接收的数据名称
    // abc:{
    //   //要接收数据的类型
    //   type:String,
    //   value:''
    // }
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
  1 页面 .js文件中 存放回调函数 存放在data同层级下
  2 组件 .js文件， 存放事件回调函数的时候 必须存放在 methods下 
   */

 

  methods: {
    handleItemTap(e){
      console.log('点击我！')

      // 1绑定点击事件  在menthods中获取
      /*
        2 获取被点击的索引
        3 获取原数组
        4 对数组循环
          获取索引
      
        5 触发父组件的自定义事件 同时传递数据
          this.tiggerEvent("","")
      */
     //2 获取索引
     const {index} = e.currentTarget.dataset;

     //5触发父组件的自定义事件 同时传递数据
      this.triggerEvent("itemChange",{index});

     //3 获取data中的数组
     // 结构 对复杂类型 进行结构时 复制了一份 变量的引用而已
     // 不要直接修改 this.data.数据
     //最严谨的做法 重新拷贝一份数组 ，在对备份的数组进行操作
    //  let tabs = JSON.parse(JSON.stringify(this.data.tabs))
    //  let {tabs} = this.data;
    //  let tabs = this.data.tabs;
     //4 循环处理
    //  tabs.forEach((v,i) => i==index?v.isActive=true:v.isActive=false)

     //5 最后再把改变之后的数组赋值给原数组
    //  this.setData({
    //    tabs
    //  })
    // },
    }
  }
})
