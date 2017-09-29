import * as types from './mutation_type'
export default{
    [types.SEND_A](state,aData){
        state.amsg=aData;
    },
    [types.SEND_B](state,bData){
        state.bmsg=bData;
    },
    [types.Send_ModelId](state,mdoelIdData){
        state.modelId = mdoelIdData;
    },
    [types.Send_TreeModelId](state,treeMdoelIdData){
        state.treeModelId= treeMdoelIdData;
    }

}