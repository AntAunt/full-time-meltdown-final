gdjs.SettingsCode = {};
gdjs.SettingsCode.GDOptionsObjects1= [];
gdjs.SettingsCode.GDOptionsObjects2= [];
gdjs.SettingsCode.GDCheatsObjects1= [];
gdjs.SettingsCode.GDCheatsObjects2= [];
gdjs.SettingsCode.GDTitleObjects1= [];
gdjs.SettingsCode.GDTitleObjects2= [];
gdjs.SettingsCode.GDSubtitleObjects1= [];
gdjs.SettingsCode.GDSubtitleObjects2= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.SettingsCode.condition2IsTrue_0 = {val:false};


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == -(1);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) > 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) - (20));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Walk.wav", false, 10, 1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).mul(-(1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Walk.wav", false, 10, 1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).mul(-(1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Walk.wav", false, 10, 1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).mul(-(1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Walk.wav", false, 10, 1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).mul(-(1));
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 1;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) < 100;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) + (20));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Walk.wav", false, 10, 1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).mul(-(1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Walk.wav", false, 10, 1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Screen", false);
}}

}


{



}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num2");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 1;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(100000);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Promotion", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 2;
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num3");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Promotion", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(200000);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 3;
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num4");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Promotion", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(300000);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 4;
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num5");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Promotion", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(400000);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 5;
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num6");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Promotion", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(500000);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num1");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Promotion", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDOptionsObjects1.length = 0;
gdjs.SettingsCode.GDOptionsObjects2.length = 0;
gdjs.SettingsCode.GDCheatsObjects1.length = 0;
gdjs.SettingsCode.GDCheatsObjects2.length = 0;
gdjs.SettingsCode.GDTitleObjects1.length = 0;
gdjs.SettingsCode.GDTitleObjects2.length = 0;
gdjs.SettingsCode.GDSubtitleObjects1.length = 0;
gdjs.SettingsCode.GDSubtitleObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
