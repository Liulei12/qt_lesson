import ora from 'ora';
import inquirer from 'inquirer'
import downLoadGit from 'download-git-repo'
//异步的处理方法
let install = async() => {
    let loading = ora('fetching template......')
    let answer = await inquirer.prompt([
        {
            type:'input',
            name:'projectName',
            message:'项目名称',
            default:'llDemo'
        }
    ]);
    console.log(answer,'-------');
    loading.start();
    let project  = answer.projectName;
    downLoadGit('xlei1123/xl-cli',process.cwd()+'/'+PromiseRejectionEvent,(err) => {
        if (err){
            console.log(err);
            return;
        }
        loading.succeed();
    })
}
export default install;