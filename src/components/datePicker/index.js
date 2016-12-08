import InputModel from 'components/common/form/inputModel'
import summary1 from 'components/common/form/summary1'
import data1 from 'components/datePicker/data1'
import data2 from 'components/datePicker/data2'
import data3 from 'components/datePicker/data3'

export default {
    data(){
        return {
            html:'',
            title11:'日期选择器 ',
            smtitle:' Data DataPicker',
            cssinclude:'该表单控件基于:bootstrap.min.css 、 font-awesome.min.css',
            jsinclude:'该表单控件基于:jquery.min.js 、 bootstrap.min.js，依赖Element组件'
        }
    },
    components: {
        InputModel,summary1,data1,data2,data3
    },
    mounted(){
        this.html = HTMLFormat($('.p-datatime').html());
    }
    
}