require('./main.css');

import MDHierarchy from "./hierarchy/hierarchy";
import TransformMenuAt from "./navigation/menu-transformer";
import SideNav from './side-nav/side-nav';


import { createButtonList, createHeaderForButtonList, createButtonValueIndex, createButtonIdIndex, createDivForButtonAndLabel, createButtonForList, createLabelForButtonInList,
  checkButtonsOnInitialPositions, applyStyleForOneButton, applyStylesForAllButtonsInLists, handleButtonClick, findWhichButtonWasCheckedBeforeClick, changeButtonStyleOnClick,
  changeDivStyleOnClick, changeLabelStyleOnClick, changeInputTextOnClick, SetChartSettingsCheckers} from './settings switchers/settings-switchers';
import renderMiddleLevel from './somc-symptom-overview-page-scripts/hierarchy-table-updates';

window.Reportal = window.Reportal || {};
window.Reportal.TransformMenuAt = TransformMenuAt;
window.Reportal.SideNav = SideNav;
window.Reportal.hierarchyUpgrade = MDHierarchy.upgrade;

window.SOMC = window.SOMC || {};
window.SOMC.renderMiddleLevel = renderMiddleLevel;
window.SOMC.Switchers = { createButtonList, createHeaderForButtonList, createButtonValueIndex, createButtonIdIndex, createDivForButtonAndLabel, createButtonForList, createLabelForButtonInList,
  checkButtonsOnInitialPositions, applyStyleForOneButton, applyStylesForAllButtonsInLists, handleButtonClick, findWhichButtonWasCheckedBeforeClick, changeButtonStyleOnClick,
  changeDivStyleOnClick, changeLabelStyleOnClick, changeInputTextOnClick, SetChartSettingsCheckers };
