/* 
 * login页面
 */
async function login(ctx,next){

  await ctx.render('login')
}

/* 
 * login检测
*/
async function chatLogin(ctx,next){

  const { nickName } = ctx.request.body

  /* 设置cookie超时时间为1天 */
  ctx.cookies.set('user', JSON.stringify({nickName}),{ maxAge: 24 * 60 * 60 * 1000 }) 
  
  if(nickName){
    // await  ctx.redirect('/chat')

    ctx.response.body = { status : 'success'}
  }
  
}

/* 
 * chat 页面 
*/
async function chat(ctx,next){

  let user = ctx.cookies.get('user')

  if(user){
    user = JSON.parse(user)

    if(user.nickName){
      await ctx.render('chat')
    }else{
      ctx.redirect('/')
    }
  }else{
    ctx.redirect('/')
  }
  
  
}

module.exports = {
  login,
  chatLogin,
  chat
}