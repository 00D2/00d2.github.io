const t=JSON.parse('{"key":"v-705d9bc3","path":"/network/other/Http%E5%A4%B4%E9%83%A8HOST%E4%B8%BA%E7%A9%BANginx%E8%BF%94%E5%9B%9E400%E9%94%99%E8%AF%AF.html","title":"Http头部HOST为空Nginx返回400错误","lang":"zh-CN","frontmatter":{"index":129,"icon":"f5","title":"Http头部HOST为空Nginx返回400错误","author":"乐码农","date":"2018-08-16T00:00:00.000Z","category":["网络"],"tag":["f5","健康检查"]},"headers":[{"level":2,"title":"F5健康检查失效","slug":"f5健康检查失效","link":"#f5健康检查失效","children":[]},{"level":2,"title":"F5健康检查规则","slug":"f5健康检查规则","link":"#f5健康检查规则","children":[]},{"level":2,"title":"NGINX返回400","slug":"nginx返回400","link":"#nginx返回400","children":[]},{"level":2,"title":"HTTP头部HOST不能为空","slug":"http头部host不能为空","link":"#http头部host不能为空","children":[]}],"git":{"createdTime":1654527613000,"updatedTime":1654868607000,"contributors":[{"name":"00D2","email":"shijinguosjg@gmail.com","commits":3}]},"readingTime":{"minutes":3.67,"words":1101},"localizedDate":"2018年8月16日","filePathRelative":"network/other/Http头部HOST为空Nginx返回400错误.md","excerpt":"<h2> F5健康检查失效</h2>\\n<p>现场环境是使用F5做负载均衡，即F5对外提供服务地址和端口，F5负载转发请求到后端业务服务器。环境是客户的测试环境，F5也是客户的。我们向客户提交F5转发策略和F5健康检查策略，等待网络开通。本来以为不用担心这一块问题，但客户的网络部门配置完成后，网络一直不通。由于未接触过F5所以前面不知怎么和客户沟通，后拿到F5账号和密码，登录进去后开始定位问题。</p>\\n<p>进去F5登录界面后，看到配置的转发策略中，后端服务器健康检查是失效的，即F5认为后端服务器不在线。这是怎么回事？</p>\\n<h2> F5健康检查规则</h2>\\n<p>这里首先弄清F5健康检查规则是怎么回事？</p>"}');export{t as data};
