gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.GDTitleObjects1= [];
gdjs.Start_32ScreenCode.GDTitleObjects2= [];
gdjs.Start_32ScreenCode.GDNewObjectObjects1= [];
gdjs.Start_32ScreenCode.GDNewObjectObjects2= [];
gdjs.Start_32ScreenCode.GDIceObjects1= [];
gdjs.Start_32ScreenCode.GDIceObjects2= [];
gdjs.Start_32ScreenCode.GDObstacleObjects1= [];
gdjs.Start_32ScreenCode.GDObstacleObjects2= [];
gdjs.Start_32ScreenCode.GDYouObjects1= [];
gdjs.Start_32ScreenCode.GDYouObjects2= [];
gdjs.Start_32ScreenCode.GDIceNameObjects1= [];
gdjs.Start_32ScreenCode.GDIceNameObjects2= [];
gdjs.Start_32ScreenCode.GDObstacleNameObjects1= [];
gdjs.Start_32ScreenCode.GDObstacleNameObjects2= [];
gdjs.Start_32ScreenCode.GDYouNameObjects1= [];
gdjs.Start_32ScreenCode.GDYouNameObjects2= [];
gdjs.Start_32ScreenCode.GDCheatsObjects1= [];
gdjs.Start_32ScreenCode.GDCheatsObjects2= [];
gdjs.Start_32ScreenCode.GDPressStartToSpaceObjects1= [];
gdjs.Start_32ScreenCode.GDPressStartToSpaceObjects2= [];

gdjs.Start_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDTitleObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTitleObjects2.length = 0;
gdjs.Start_32ScreenCode.GDNewObjectObjects1.length = 0;
gdjs.Start_32ScreenCode.GDNewObjectObjects2.length = 0;
gdjs.Start_32ScreenCode.GDIceObjects1.length = 0;
gdjs.Start_32ScreenCode.GDIceObjects2.length = 0;
gdjs.Start_32ScreenCode.GDObstacleObjects1.length = 0;
gdjs.Start_32ScreenCode.GDObstacleObjects2.length = 0;
gdjs.Start_32ScreenCode.GDYouObjects1.length = 0;
gdjs.Start_32ScreenCode.GDYouObjects2.length = 0;
gdjs.Start_32ScreenCode.GDIceNameObjects1.length = 0;
gdjs.Start_32ScreenCode.GDIceNameObjects2.length = 0;
gdjs.Start_32ScreenCode.GDObstacleNameObjects1.length = 0;
gdjs.Start_32ScreenCode.GDObstacleNameObjects2.length = 0;
gdjs.Start_32ScreenCode.GDYouNameObjects1.length = 0;
gdjs.Start_32ScreenCode.GDYouNameObjects2.length = 0;
gdjs.Start_32ScreenCode.GDCheatsObjects1.length = 0;
gdjs.Start_32ScreenCode.GDCheatsObjects2.length = 0;
gdjs.Start_32ScreenCode.GDPressStartToSpaceObjects1.length = 0;
gdjs.Start_32ScreenCode.GDPressStartToSpaceObjects2.length = 0;

gdjs.Start_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
