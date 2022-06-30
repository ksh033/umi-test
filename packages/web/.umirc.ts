import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  mfsu: true,
  chainWebpack(memo, { env, webpack }) {
    // 设置 alias
    memo.module.noParse(/coordinate-convert.js$/)
    //memo.module.noParse('../node_modules\/coordinate-convert\/coordinate-convert\.js/')
    //memo.resolve.alias.set('foo', '/tmp/to/foo');

    // 添加额外插件
    // memo.plugin('hello').use(Plugin, [...args]);

    // 删除 Umi 内置插件
    // memo.plugins.delete('hmr');
  },
  // chainWebpack: (chainConfig) => {

  //   chainConfig.module.noParse('/node_modules\/coordinate-convert\/coordinate-convert\.js/')

  // },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});

