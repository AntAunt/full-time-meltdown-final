gdjs.PromotionCode = {};
gdjs.PromotionCode.GDAnnouncementObjects1= [];
gdjs.PromotionCode.GDAnnouncementObjects2= [];
gdjs.PromotionCode.GDContextObjects1= [];
gdjs.PromotionCode.GDContextObjects2= [];
gdjs.PromotionCode.GDCurrentScoreObjects1= [];
gdjs.PromotionCode.GDCurrentScoreObjects2= [];
gdjs.PromotionCode.GDContinueObjects1= [];
gdjs.PromotionCode.GDContinueObjects2= [];
gdjs.PromotionCode.GDFunnyCommentObjects1= [];
gdjs.PromotionCode.GDFunnyCommentObjects2= [];

gdjs.PromotionCode.conditionTrue_0 = {val:false};
gdjs.PromotionCode.condition0IsTrue_0 = {val:false};
gdjs.PromotionCode.condition1IsTrue_0 = {val:false};
gdjs.PromotionCode.condition2IsTrue_0 = {val:false};


gdjs.PromotionCode.eventsList0 = function(runtimeScene) {

{


gdjs.PromotionCode.condition0IsTrue_0.val = false;
{
gdjs.PromotionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PromotionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "New Life.wav", false, 10, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Context"), gdjs.PromotionCode.GDContextObjects1);
gdjs.copyArray(runtimeScene.getObjects("CurrentScore"), gdjs.PromotionCode.GDCurrentScoreObjects1);
{for(var i = 0, len = gdjs.PromotionCode.GDContextObjects1.length ;i < len;++i) {
    gdjs.PromotionCode.GDContextObjects1[i].setString("You have been promoted to Engineer no. " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))) + "!");
}
}{for(var i = 0, len = gdjs.PromotionCode.GDCurrentScoreObjects1.length ;i < len;++i) {
    gdjs.PromotionCode.GDCurrentScoreObjects1[i].setString("Current Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) / 100));
}
}}

}


{


gdjs.PromotionCode.condition0IsTrue_0.val = false;
{
gdjs.PromotionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > 4;
}if (gdjs.PromotionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Context"), gdjs.PromotionCode.GDContextObjects1);
{for(var i = 0, len = gdjs.PromotionCode.GDContextObjects1.length ;i < len;++i) {
    gdjs.PromotionCode.GDContextObjects1[i].setString("You are now the High Engineer, this is the highest promotion.");
}
}{for(var i = 0, len = gdjs.PromotionCode.GDContextObjects1.length ;i < len;++i) {
    gdjs.PromotionCode.GDContextObjects1[i].setX(150);
}
}}

}


{



}


{


gdjs.PromotionCode.condition0IsTrue_0.val = false;
gdjs.PromotionCode.condition1IsTrue_0.val = false;
{
gdjs.PromotionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.PromotionCode.condition0IsTrue_0.val ) {
{
gdjs.PromotionCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.PromotionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


gdjs.PromotionCode.condition0IsTrue_0.val = false;
gdjs.PromotionCode.condition1IsTrue_0.val = false;
{
gdjs.PromotionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.PromotionCode.condition0IsTrue_0.val ) {
{
gdjs.PromotionCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.PromotionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game2", false);
}}

}


{


gdjs.PromotionCode.condition0IsTrue_0.val = false;
gdjs.PromotionCode.condition1IsTrue_0.val = false;
{
gdjs.PromotionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}if ( gdjs.PromotionCode.condition0IsTrue_0.val ) {
{
gdjs.PromotionCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.PromotionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game3", false);
}}

}


{


gdjs.PromotionCode.condition0IsTrue_0.val = false;
gdjs.PromotionCode.condition1IsTrue_0.val = false;
{
gdjs.PromotionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3;
}if ( gdjs.PromotionCode.condition0IsTrue_0.val ) {
{
gdjs.PromotionCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.PromotionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game4", false);
}}

}


{


gdjs.PromotionCode.condition0IsTrue_0.val = false;
gdjs.PromotionCode.condition1IsTrue_0.val = false;
{
gdjs.PromotionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 4;
}if ( gdjs.PromotionCode.condition0IsTrue_0.val ) {
{
gdjs.PromotionCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.PromotionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game5", false);
}}

}


{


gdjs.PromotionCode.condition0IsTrue_0.val = false;
gdjs.PromotionCode.condition1IsTrue_0.val = false;
{
gdjs.PromotionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > 4;
}if ( gdjs.PromotionCode.condition0IsTrue_0.val ) {
{
gdjs.PromotionCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.PromotionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game6", false);
}}

}


};

gdjs.PromotionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PromotionCode.GDAnnouncementObjects1.length = 0;
gdjs.PromotionCode.GDAnnouncementObjects2.length = 0;
gdjs.PromotionCode.GDContextObjects1.length = 0;
gdjs.PromotionCode.GDContextObjects2.length = 0;
gdjs.PromotionCode.GDCurrentScoreObjects1.length = 0;
gdjs.PromotionCode.GDCurrentScoreObjects2.length = 0;
gdjs.PromotionCode.GDContinueObjects1.length = 0;
gdjs.PromotionCode.GDContinueObjects2.length = 0;
gdjs.PromotionCode.GDFunnyCommentObjects1.length = 0;
gdjs.PromotionCode.GDFunnyCommentObjects2.length = 0;

gdjs.PromotionCode.eventsList0(runtimeScene);
return;

}

gdjs['PromotionCode'] = gdjs.PromotionCode;
