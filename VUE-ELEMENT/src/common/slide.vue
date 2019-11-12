<template>
  <div class="sidebar">
    <el-menu default-active="2" background-color="#eeeeee" active-text-color="#67C23A" class="el-menu-vertical-demo" router>
            <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                <span slot="title">首  页</span>
            </el-menu-item>
            <el-menu-item index="/main/user-manage">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/main/table">用户列表</el-menu-item>
                    <el-menu-item index="3-2">用户信息</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 200px;
    left: 0;
    top: 70px;
    bottom: 0;
    background-color: #2e363f;
  }
  .sidebar > ul{
    height: 100%;
  }
</style>