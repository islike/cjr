# 残疾人就业网  
> 网站基础框架页面预览 [线上访问](https://tolike.top/cjr/#/)

## 使用步骤
```
# 克隆库到本地
git clone https://github.com/islike/cjr.git

# 安装依赖
npm install

# 创建并切换至新分支(name 为自己分配到的任务 如：selfCenter)
git checkout -b name  

# 运行本地开发
npm run dev
```
## 开发文件位置
>cjr/src/pages/
在里面找到自己分配到的页面就可以直接开发了

## 开发完成后推送步骤
```
# 提交前先同步远程仓库，看看有没有其他人有更新，否则自己的代码将无法提交上去 
git pull
# 添加所有文件到暂存区
git add .
# 将改动提交到HEAD
git commit -m "update describe"
# 将改动提交到远端仓库(name为自己创建的分支名)
git push origin name
```
