

// 常量， 登录页面名称
import * as Settings from '@/store/config.js';



import AssetTypeMgr from './asset-type-mgr.vue';


export default {  
    title: '资产管理', 
    roles: [Settings.ROLE_AUTH_ADMIN] ,
    children: [ 
        
        { path: 'assettypes', component: AssetTypeMgr, title: 'Asset Type Management', roles: [Settings.ROLE_AUTH_ADMIN] },
    ]

};