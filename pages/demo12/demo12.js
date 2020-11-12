Page({
  data: {
    //  1 标签字符串 方便
      // html:'<div class="nav J_Nav clearfix " role="navigation"><h2>主题市场</h2><ul class="nav-hd "><li><a href="//www.tmall.com?acm=lb-zebra-634493-8609789.1003.4.8190923&amp;scm=1003.4.lb-zebra-634493-8609789.OTHER_15917289417141_8190923">天猫</a></li><li><a href="//ju.taobao.com?acm=lb-zebra-634493-8609789.1003.4.8190923&amp;scm=1003.4.lb-zebra-634493-8609789.OTHER_15917285569652_8190923">聚划算</a></li><li><a href="//chaoshi.tmall.com?acm=lb-zebra-634493-8609789.1003.4.8190923&amp;scm=1003.4.lb-zebra-634493-8609789.OTHER_15917297112113_8190923">天猫超市</a></li> </ul></div>'
    // 数组对象
    html:[
      {
        // 1 div 标签，由name来指定
        name:'div',
        //2 标签上有哪些属性
        attrs:{
          // class style 
          class:'my_div',
          style:" color:red;",
        },
        //3 子节点 children 要接收的类型和nodes第二种类型一致
        children:[
          {
            name:'p',
            attrs:{},
            //放文本
            children:[
              {
                type:'text',
                text:'hello'
              } 
            ]
          }
        ]
      
    },
    ]

    }
})