import InputModel from 'components/common/form/inputModel'
import summary1 from 'components/common/form/summary1' 
import tabLine from 'components/common/tabline/tabaLine' 

export default {
    data(){
        return {
            html:'<i class="fa fa-500px"></i>',
            htmlSpan:'<sapn class="icon-user"></sapn>',
            htmlS:'<span class="glyphicon glyphicon-asterisk"></span>',
            checkBox:'',
            raDios:'',
            title11:'图标',
            smtitle:'Basic Color',
            cssinclude:'该表单控件基于:bootstrap.min.css 、 font-awesome.min.css',
            jsinclude:'该表单控件基于:jquery.min.js 、 bootstrap.min.js'
            
        }
    },
    components: {
        InputModel,summary1,tabLine
    },
    mounted(){
//        this.html = HTMLFormat($('.form1').html());
    }
    
}