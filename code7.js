gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDTryAgainObjects1= [];
gdjs.Game_32OverCode.GDTryAgainObjects2= [];
gdjs.Game_32OverCode.GDScoreObjects1= [];
gdjs.Game_32OverCode.GDScoreObjects2= [];
gdjs.Game_32OverCode.GDDismissalObjects1= [];
gdjs.Game_32OverCode.GDDismissalObjects2= [];
gdjs.Game_32OverCode.GDScoreTier2Objects1= [];
gdjs.Game_32OverCode.GDScoreTier2Objects2= [];
gdjs.Game_32OverCode.GDScoreTier1Objects1= [];
gdjs.Game_32OverCode.GDScoreTier1Objects2= [];
gdjs.Game_32OverCode.GDScoreTier3Objects1= [];
gdjs.Game_32OverCode.GDScoreTier3Objects2= [];
gdjs.Game_32OverCode.GDScoreTier4Objects1= [];
gdjs.Game_32OverCode.GDScoreTier4Objects2= [];
gdjs.Game_32OverCode.GDYouScoreObjects1= [];
gdjs.Game_32OverCode.GDYouScoreObjects2= [];
gdjs.Game_32OverCode.GDScoreTier5Objects1= [];
gdjs.Game_32OverCode.GDScoreTier5Objects2= [];
gdjs.Game_32OverCode.GDScoreTier6Objects1= [];
gdjs.Game_32OverCode.GDScoreTier6Objects2= [];
gdjs.Game_32OverCode.GDHighScoreTitleObjects1= [];
gdjs.Game_32OverCode.GDHighScoreTitleObjects2= [];
gdjs.Game_32OverCode.GDHihestObjects1= [];
gdjs.Game_32OverCode.GDHihestObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32OverCode.conditionTrue_1 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_1 = {val:false};


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dismissal"), gdjs.Game_32OverCode.GDDismissalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32OverCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreObjects1[i].setString("Your Score is " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 100)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Meltdown.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.Game_32OverCode.GDDismissalObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDDismissalObjects1[i].setString("Dismissal reason: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6));
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Hihest"), gdjs.Game_32OverCode.GDHihestObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouScore"), gdjs.Game_32OverCode.GDYouScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDYouScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDYouScoreObjects1[i].setString("You - " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) / 100)));
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDHihestObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDHihestObjects1[i].setString("High Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) / 100)));
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) > 42000;
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8137396);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreTier1"), gdjs.Game_32OverCode.GDScoreTier1Objects1);
gdjs.copyArray(runtimeScene.getObjects("YouScore"), gdjs.Game_32OverCode.GDYouScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDYouScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDYouScoreObjects1[i].setY(gdjs.Game_32OverCode.GDYouScoreObjects1[i].getY() - (30));
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreTier1Objects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreTier1Objects1[i].setY(gdjs.Game_32OverCode.GDScoreTier1Objects1[i].getY() + (30));
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) > 184700;
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9233324);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreTier2"), gdjs.Game_32OverCode.GDScoreTier2Objects1);
gdjs.copyArray(runtimeScene.getObjects("YouScore"), gdjs.Game_32OverCode.GDYouScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDYouScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDYouScoreObjects1[i].setY(gdjs.Game_32OverCode.GDYouScoreObjects1[i].getY() - (30));
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreTier2Objects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreTier2Objects1[i].setY(gdjs.Game_32OverCode.GDScoreTier2Objects1[i].getY() + (30));
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) > 289900;
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10094924);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreTier3"), gdjs.Game_32OverCode.GDScoreTier3Objects1);
gdjs.copyArray(runtimeScene.getObjects("YouScore"), gdjs.Game_32OverCode.GDYouScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDYouScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDYouScoreObjects1[i].setY(gdjs.Game_32OverCode.GDYouScoreObjects1[i].getY() - (30));
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreTier3Objects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreTier3Objects1[i].setY(gdjs.Game_32OverCode.GDScoreTier3Objects1[i].getY() + (30));
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) > 379400;
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8107340);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreTier4"), gdjs.Game_32OverCode.GDScoreTier4Objects1);
gdjs.copyArray(runtimeScene.getObjects("YouScore"), gdjs.Game_32OverCode.GDYouScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDYouScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDYouScoreObjects1[i].setY(gdjs.Game_32OverCode.GDYouScoreObjects1[i].getY() - (30));
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreTier4Objects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreTier4Objects1[i].setY(gdjs.Game_32OverCode.GDScoreTier4Objects1[i].getY() + (30));
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) > 477600;
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9424732);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreTier5"), gdjs.Game_32OverCode.GDScoreTier5Objects1);
gdjs.copyArray(runtimeScene.getObjects("YouScore"), gdjs.Game_32OverCode.GDYouScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDYouScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDYouScoreObjects1[i].setY(gdjs.Game_32OverCode.GDYouScoreObjects1[i].getY() - (30));
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreTier5Objects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreTier5Objects1[i].setY(gdjs.Game_32OverCode.GDScoreTier5Objects1[i].getY() + (30));
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) > 553700;
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9684964);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreTier6"), gdjs.Game_32OverCode.GDScoreTier6Objects1);
gdjs.copyArray(runtimeScene.getObjects("YouScore"), gdjs.Game_32OverCode.GDYouScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDYouScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDYouScoreObjects1[i].setY(gdjs.Game_32OverCode.GDYouScoreObjects1[i].getY() - (30));
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreTier6Objects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreTier6Objects1[i].setY(gdjs.Game_32OverCode.GDScoreTier6Objects1[i].getY() + (30));
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
gdjs.Game_32OverCode.GDDismissalObjects1.length = 0;
gdjs.Game_32OverCode.GDDismissalObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreTier2Objects1.length = 0;
gdjs.Game_32OverCode.GDScoreTier2Objects2.length = 0;
gdjs.Game_32OverCode.GDScoreTier1Objects1.length = 0;
gdjs.Game_32OverCode.GDScoreTier1Objects2.length = 0;
gdjs.Game_32OverCode.GDScoreTier3Objects1.length = 0;
gdjs.Game_32OverCode.GDScoreTier3Objects2.length = 0;
gdjs.Game_32OverCode.GDScoreTier4Objects1.length = 0;
gdjs.Game_32OverCode.GDScoreTier4Objects2.length = 0;
gdjs.Game_32OverCode.GDYouScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDYouScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreTier5Objects1.length = 0;
gdjs.Game_32OverCode.GDScoreTier5Objects2.length = 0;
gdjs.Game_32OverCode.GDScoreTier6Objects1.length = 0;
gdjs.Game_32OverCode.GDScoreTier6Objects2.length = 0;
gdjs.Game_32OverCode.GDHighScoreTitleObjects1.length = 0;
gdjs.Game_32OverCode.GDHighScoreTitleObjects2.length = 0;
gdjs.Game_32OverCode.GDHihestObjects1.length = 0;
gdjs.Game_32OverCode.GDHihestObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
