Component({

  properties: {
    pics: {
      type: Array,
      value: []
    }
  },

  methods: {
    onTapImg: function (e) {
      let scope = this;
      wx.previewImage({
        current: e.currentTarget.dataset.url,
        urls: scope.data.pics
      })
    }
  },

  attached: function () {
    let scope = this;
    wx.getSystemInfo({
      success: function (res) {
        scope.setData({
          height: res.windowHeight
        })
      }
    })
  }
})
