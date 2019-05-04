import Vue from 'vue'
import {
  Button,
  Icon,
  Row,
  Col,
  Collapse,
  CollapseItem,
  Menu,
  MenuItem,
  Form,
  FormItem,
  Input,
  Notification,
  Card
} from 'element-ui'

Vue.use(Button)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Card)

Vue.prototype.$notify = Notification
