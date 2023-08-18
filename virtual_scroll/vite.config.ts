import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
    },
    server: {
        host: true, // host设置为true才可以使用network的形式，以ip访问项目
        port: 8080, // 端口号
        open: true, // 自动打开浏览器
        cors: true, // 跨域设置允许
        strictPort: true // 如果端口已占用直接退出
        // 接口代理
    }
})
