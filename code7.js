gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDTryAgainObjects1= [];
gdjs.Game_32OverCode.GDTryAgainObjects2= [];
gdjs.Game_32OverCode.GDScoreObjects1= [];
gdjs.Game_32OverCode.GDScoreObjects2= [];
gdjs.Game_32OverCode.GDNewObjectObjects1= [];
gdjs.Game_32OverCode.GDNewObjectObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Game_32OverCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32OverCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreObjects1[i].setString("Your Score is " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 100)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Meltdown.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.Game_32OverCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDNewObjectObjects1[i].setString("Dismissal reason: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDTryAgainObjects1.length = 0;
gdjs.Game_32OverCode.GDTryAgainObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDNewObjectObjects1.length = 0;
gdjs.Game_32OverCode.GDNewObjectObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
