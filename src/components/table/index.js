import InputModel from 'components/common/form/inputModel'
import form1 from 'components/common/form/form'
import readOnly from 'components/common/form/readonly'
import checkBox from 'components/common/form/checkBox'
import raDios from 'components/common/form/raDios'
export default {
    data(){
        return {
            html:'',
            readOnly:'',
            checkBox:'',
            raDios:''
        }
    },
    components: {
        InputModel,form1,readOnly,checkBox,raDios
    },
    mounted(){
        this.html = HTMLFormat($('.form1').html());
        this.readOnly = HTMLFormat($('.readOnly').html());
        this.checkBox = HTMLFormat($('.checkBox').html());
        this.raDios = HTMLFormat($('.raDios').html());
    }
    
}