const _ = require('lodash')


/* 
 * 获取随机头像
*/
function getRandomAvatar(){

  // 放在网络图床中的图片
  const avatars = [
    'http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/chat/avatar1.png',
    'http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/chat/avatar2.png',
    'http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/chat/avatar3.png',
    'http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/chat/avatar4.png',
    'http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/chat/avatar5.png'
  ]

  // 获取随机数组下标
  let index = _.random(0,4)

  return  avatars[index]
}



module.exports = {
  getRandomAvatar
}