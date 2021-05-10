gdjs.GameCode = {};
gdjs.GameCode.GDBluePlayerObjects1= [];
gdjs.GameCode.GDBluePlayerObjects2= [];
gdjs.GameCode.GDBluePlayerObjects3= [];
gdjs.GameCode.GDFlyingEnemyObjects1= [];
gdjs.GameCode.GDFlyingEnemyObjects2= [];
gdjs.GameCode.GDFlyingEnemyObjects3= [];
gdjs.GameCode.GDBlueCrystal2Objects1= [];
gdjs.GameCode.GDBlueCrystal2Objects2= [];
gdjs.GameCode.GDBlueCrystal2Objects3= [];
gdjs.GameCode.GDSmallNotBluePlatformObjects1= [];
gdjs.GameCode.GDSmallNotBluePlatformObjects2= [];
gdjs.GameCode.GDSmallNotBluePlatformObjects3= [];
gdjs.GameCode.GDSmallBluePlatformObjects1= [];
gdjs.GameCode.GDSmallBluePlatformObjects2= [];
gdjs.GameCode.GDSmallBluePlatformObjects3= [];
gdjs.GameCode.GDPurpleFloorObjects1= [];
gdjs.GameCode.GDPurpleFloorObjects2= [];
gdjs.GameCode.GDPurpleFloorObjects3= [];
gdjs.GameCode.GDYellowFloorObjects1= [];
gdjs.GameCode.GDYellowFloorObjects2= [];
gdjs.GameCode.GDYellowFloorObjects3= [];
gdjs.GameCode.GDBlueFloorObjects1= [];
gdjs.GameCode.GDBlueFloorObjects2= [];
gdjs.GameCode.GDBlueFloorObjects3= [];
gdjs.GameCode.GDGreenFloorObjects1= [];
gdjs.GameCode.GDGreenFloorObjects2= [];
gdjs.GameCode.GDGreenFloorObjects3= [];
gdjs.GameCode.GDRedFloorObjects1= [];
gdjs.GameCode.GDRedFloorObjects2= [];
gdjs.GameCode.GDRedFloorObjects3= [];
gdjs.GameCode.GDGreenFlagObjects1= [];
gdjs.GameCode.GDGreenFlagObjects2= [];
gdjs.GameCode.GDGreenFlagObjects3= [];
gdjs.GameCode.GDLivesObjects1= [];
gdjs.GameCode.GDLivesObjects2= [];
gdjs.GameCode.GDLivesObjects3= [];
gdjs.GameCode.GDTimerObjects1= [];
gdjs.GameCode.GDTimerObjects2= [];
gdjs.GameCode.GDTimerObjects3= [];
gdjs.GameCode.GDPointsObjects1= [];
gdjs.GameCode.GDPointsObjects2= [];
gdjs.GameCode.GDPointsObjects3= [];
gdjs.GameCode.GDIgnoreTimeObjects1= [];
gdjs.GameCode.GDIgnoreTimeObjects2= [];
gdjs.GameCode.GDIgnoreTimeObjects3= [];
gdjs.GameCode.GDIgnoreDamageObjects1= [];
gdjs.GameCode.GDIgnoreDamageObjects2= [];
gdjs.GameCode.GDIgnoreDamageObjects3= [];
gdjs.GameCode.GDIgnoreEnemyObjects1= [];
gdjs.GameCode.GDIgnoreEnemyObjects2= [];
gdjs.GameCode.GDIgnoreEnemyObjects3= [];
gdjs.GameCode.GDOverheatObjects1= [];
gdjs.GameCode.GDOverheatObjects2= [];
gdjs.GameCode.GDOverheatObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.condition4IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 6;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Promotion", false);
}}

}


{


{
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGreenFlagObjects1Objects = Hashtable.newFrom({"GreenFlag": gdjs.GameCode.GDGreenFlagObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBlueCrystal2Objects1Objects = Hashtable.newFrom({"BlueCrystal2": gdjs.GameCode.GDBlueCrystal2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlyingEnemyObjects1Objects = Hashtable.newFrom({"FlyingEnemy": gdjs.GameCode.GDFlyingEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects1});gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
/* Reuse gdjs.GameCode.GDFlyingEnemyObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyingEnemyObjects1[i].getX() < 75 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDFlyingEnemyObjects1[k] = gdjs.GameCode.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyingEnemyObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyingEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].setY(-(40));
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("IgnoreDamage"), gdjs.GameCode.GDIgnoreDamageObjects1);
gdjs.copyArray(runtimeScene.getObjects("IgnoreEnemy"), gdjs.GameCode.GDIgnoreEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("IgnoreTime"), gdjs.GameCode.GDIgnoreTimeObjects1);
{for(var i = 0, len = gdjs.GameCode.GDIgnoreTimeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDIgnoreTimeObjects1[i].setString("NO Timeout Game Over: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.GameCode.GDIgnoreDamageObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDIgnoreDamageObjects1[i].setString("NO Zero Lives Game Over: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.GameCode.GDIgnoreEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDIgnoreEnemyObjects1[i].setString("NO Player Reset from Damage: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.GameCode.GDPointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.GameCode.GDTimerObjects1);
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) / 100))));
}
}{for(var i = 0, len = gdjs.GameCode.GDPointsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPointsObjects1[i].setString("Points: " + gdjs.evtTools.common.toString((gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 100)) + (gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) / 100))));
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{runtimeScene.getVariables().getFromIndex(2).sub(1 + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) * 0.000025));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.GameCode.GDFlyingEnemyObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Reset.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].resetTimer("Delay");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = ((gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) / 100)) > 999);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(100000);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lives"), gdjs.GameCode.GDLivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.GameCode.GDPointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.GameCode.GDTimerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDLivesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLivesObjects1[i].setString(gdjs.GameCode.GDLivesObjects1[i].getString() + (gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))))));
}
}{for(var i = 0, len = gdjs.GameCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTimerObjects1[i].setString(gdjs.GameCode.GDTimerObjects1[i].getString() + (gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))))));
}
}{for(var i = 0, len = gdjs.GameCode.GDPointsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPointsObjects1[i].setString(gdjs.GameCode.GDPointsObjects1[i].getString() + (gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Point"))))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PointTracker");
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) <= 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == -(1);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Reactor meltdown");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == -(1);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Workplace injury");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenFlag"), gdjs.GameCode.GDGreenFlagObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGreenFlagObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueCrystal2"), gdjs.GameCode.GDBlueCrystal2Objects1);
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
{runtimeScene.getVariables().getFromIndex(1).add(5000);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1000);
}{for(var i = 0, len = gdjs.GameCode.GDBlueCrystal2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlueCrystal2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].returnVariable(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Impact.wav", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueCrystal2"), gdjs.GameCode.GDBlueCrystal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBlueCrystal2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)) != 1 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBlueCrystal2Objects1 */
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].returnVariable(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBlueCrystal2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlueCrystal2Objects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Cool.wav", false, 10, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Overheat"), gdjs.GameCode.GDOverheatObjects1);
{for(var i = 0, len = gdjs.GameCode.GDOverheatObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDOverheatObjects1[i].setOpacity(255 - (255 * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) / 1000)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueCrystal2"), gdjs.GameCode.GDBlueCrystal2Objects1);
{for(var i = 0, len = gdjs.GameCode.GDBlueCrystal2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlueCrystal2Objects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.GameCode.GDFlyingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlyingEnemyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == -(1);
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8434068);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Lives"), gdjs.GameCode.GDLivesObjects1);
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.GameCode.GDLivesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLivesObjects1[i].setString("Lives: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)))));
}
}{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].returnVariable(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].returnVariable(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8436396);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage");
}{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Damage.wav", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Damage");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8438028);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
{runtimeScene.getVariables().getFromIndex(2).setNumber(1000);
}{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].setPosition(5,420);
}
}{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].returnVariable(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Reset.wav", false, 10, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.GameCode.GDFlyingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyingEnemyObjects1[i].getY() >= 460 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlyingEnemyObjects1[k] = gdjs.GameCode.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyingEnemyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyingEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].setY(-(60));
}
}{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].resetTimer("Delay");
}
}{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].unpauseTimer("Delay");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Impact2.wav", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.GameCode.GDFlyingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyingEnemyObjects1[i].timerElapsedTime("Delay", gdjs.randomInRange(1, 1000)) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlyingEnemyObjects1[k] = gdjs.GameCode.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyingEnemyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyingEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].pauseTimer("Delay");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.GameCode.GDFlyingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyingEnemyObjects1[i].timerPaused("Delay") ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlyingEnemyObjects1[k] = gdjs.GameCode.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyingEnemyObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyingEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].addForce(0, 80 + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) * 0.005), 0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDBluePlayerObjects1[i].getX() <= 0) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].addForce(-(400), 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDBluePlayerObjects1[i].getX() >= 800) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].addForce(400, 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).add(1500);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).sub(1500);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).mul(-(1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Walk.wav", false, 10, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).mul(-(1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Walk.wav", false, 10, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).mul(-(1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Walk.wav", false, 10, 1);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBluePlayerObjects1.length = 0;
gdjs.GameCode.GDBluePlayerObjects2.length = 0;
gdjs.GameCode.GDBluePlayerObjects3.length = 0;
gdjs.GameCode.GDFlyingEnemyObjects1.length = 0;
gdjs.GameCode.GDFlyingEnemyObjects2.length = 0;
gdjs.GameCode.GDFlyingEnemyObjects3.length = 0;
gdjs.GameCode.GDBlueCrystal2Objects1.length = 0;
gdjs.GameCode.GDBlueCrystal2Objects2.length = 0;
gdjs.GameCode.GDBlueCrystal2Objects3.length = 0;
gdjs.GameCode.GDSmallNotBluePlatformObjects1.length = 0;
gdjs.GameCode.GDSmallNotBluePlatformObjects2.length = 0;
gdjs.GameCode.GDSmallNotBluePlatformObjects3.length = 0;
gdjs.GameCode.GDSmallBluePlatformObjects1.length = 0;
gdjs.GameCode.GDSmallBluePlatformObjects2.length = 0;
gdjs.GameCode.GDSmallBluePlatformObjects3.length = 0;
gdjs.GameCode.GDPurpleFloorObjects1.length = 0;
gdjs.GameCode.GDPurpleFloorObjects2.length = 0;
gdjs.GameCode.GDPurpleFloorObjects3.length = 0;
gdjs.GameCode.GDYellowFloorObjects1.length = 0;
gdjs.GameCode.GDYellowFloorObjects2.length = 0;
gdjs.GameCode.GDYellowFloorObjects3.length = 0;
gdjs.GameCode.GDBlueFloorObjects1.length = 0;
gdjs.GameCode.GDBlueFloorObjects2.length = 0;
gdjs.GameCode.GDBlueFloorObjects3.length = 0;
gdjs.GameCode.GDGreenFloorObjects1.length = 0;
gdjs.GameCode.GDGreenFloorObjects2.length = 0;
gdjs.GameCode.GDGreenFloorObjects3.length = 0;
gdjs.GameCode.GDRedFloorObjects1.length = 0;
gdjs.GameCode.GDRedFloorObjects2.length = 0;
gdjs.GameCode.GDRedFloorObjects3.length = 0;
gdjs.GameCode.GDGreenFlagObjects1.length = 0;
gdjs.GameCode.GDGreenFlagObjects2.length = 0;
gdjs.GameCode.GDGreenFlagObjects3.length = 0;
gdjs.GameCode.GDLivesObjects1.length = 0;
gdjs.GameCode.GDLivesObjects2.length = 0;
gdjs.GameCode.GDLivesObjects3.length = 0;
gdjs.GameCode.GDTimerObjects1.length = 0;
gdjs.GameCode.GDTimerObjects2.length = 0;
gdjs.GameCode.GDTimerObjects3.length = 0;
gdjs.GameCode.GDPointsObjects1.length = 0;
gdjs.GameCode.GDPointsObjects2.length = 0;
gdjs.GameCode.GDPointsObjects3.length = 0;
gdjs.GameCode.GDIgnoreTimeObjects1.length = 0;
gdjs.GameCode.GDIgnoreTimeObjects2.length = 0;
gdjs.GameCode.GDIgnoreTimeObjects3.length = 0;
gdjs.GameCode.GDIgnoreDamageObjects1.length = 0;
gdjs.GameCode.GDIgnoreDamageObjects2.length = 0;
gdjs.GameCode.GDIgnoreDamageObjects3.length = 0;
gdjs.GameCode.GDIgnoreEnemyObjects1.length = 0;
gdjs.GameCode.GDIgnoreEnemyObjects2.length = 0;
gdjs.GameCode.GDIgnoreEnemyObjects3.length = 0;
gdjs.GameCode.GDOverheatObjects1.length = 0;
gdjs.GameCode.GDOverheatObjects2.length = 0;
gdjs.GameCode.GDOverheatObjects3.length = 0;

gdjs.GameCode.eventsList2(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
