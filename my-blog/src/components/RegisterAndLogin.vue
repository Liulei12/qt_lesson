<template>
  <el-dialog title="登录" :visible.sync="dialogVisible" @close="cancel">
    <el-form label-width="80px">
      <el-form-item label="邮箱">
        <el-input v-model="params.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="params.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-formItem v-if="handleFlag === 'register'" label="昵称">
        <el-input v-model="params.name" placeholder="用户名或昵称" autocomplete="off"></el-input>
      </el-formItem>
      <el-formItem v-if="handleFlag === 'register'" label="手机">
        <el-input v-model="params.phone" placeholder="手机号" autocomplete="off"></el-input>
      </el-formItem>
      <el-formItem v-if="handleFlag === 'register'" label="简介" >
        <el-input v-model="params.desc" placeholder="个人简介" autocomplete="off"></el-input>
      </el-formItem>
    </el-form>
    <div class="dialog-footer" slot="footer">
      <el-button type="success" @click="handleOAuth">github 授权登录</el-button>
      <el-button v-if="handleFlag==='register'" type="primary" @click="handleOk">注册</el-button>
      <el-button v-else type="primary" @click="handleOk">登录</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from "vue-property-decorator";
import { promises } from "dns";
@Component
export default class RegisterAndLogin extends Vue {
  @Prop({ default: false }) private visible!: boolean;
  @Prop({ default: false }) private handleFlag!: string;
  private params: any = {
    email: "",
    password: "",
    name: "",
    phone: "",
    desc: "",
  };
  get dialogVisible(): boolean {
    return this.visible;
  }
  @Emit()
  private cancel(): boolean {
    return false;
  }
  private handleOAuth(): void {
    // 保存授权之前的页面链接
    let preventHistory: object = {
      name: this.$route.name,
      query: this.$route.query
    };
    window.sessionStorage.preventHistory = JSON.stringify(preventHistory);
    window.location.href =
      "https://github.com/login?client_id=6de90ab270aea2bdb01c&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D6de90ab270aea2bdb01c%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A8080.cn%252Flogin";
  }
  private handleOk(): void {
    const reg = new RegExp(
      "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"
    );
    if (!reg.test(this.params.email)) {
      this.$message.error("请输入正确的邮箱格式");
    } else {
      if (!this.params.password) {
        this.$message.error("密码不能为空");
      }
    }
    //登录操作
    this.submit()
  }
  private async submit(): Promise<void> {
    let data: any = ''
    if(this.handleFlag === 'register'){
      data = await this.$https.post(this.$urls.register,this.params)
    }else{
      data = await this.$https.post(this.$urls.login,this.params)
    }
  }
}
</script>

<style>
</style>