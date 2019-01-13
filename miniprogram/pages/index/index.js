// pages/index/index.js
Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "../../images/item1.png",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '大众文学',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
            },
            {
              child_id: 2,
              name: '类型文学',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
            },
            {
              child_id: 3,
              name: '经典文学',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
            },
            {
              child_id: 4,
              name: '网络文学',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
            },
            {
              child_id: 5,
              name: '绘本漫画',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
            },
            {
              child_id: 6,
              name: '影视改编',
              image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "../../images/item2.png",
        ishaveChild: false,
        children:
          []
      },
      {
        cate_id: 3,
        cate_name: "../../images/item3.png",
        ishaveChild: false,
        children:
          []
      },
      {
        cate_id: 4,
        cate_name: "../../images/item4.png",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})