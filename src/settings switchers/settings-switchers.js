/*


var inputHeaders = [["", ""]];
var inputLists = [[["Rolling average", "Number of hits"], ["Category", "Symptom"]]];

*/
function SetChartSettingsCheckers(inputHeaders,inputLists) {
  /*Config*/
  var checkedDivBackgroundColor = "#5787f4";
  var uncheckedDivBackgroundColor = "#ffffff";

  var textOnCheckedButtonsColor = "#ffffff";
  var textOnUncheckedButtonsColor = "#000000";

  var outerCircleStrokeForCheckedButtonsColor = "#ffffff";
  var outerCircleFillForCheckedButtonsColor = "none";
  var innerCircleFillForCheckedButtonsColor = "#ffffff";

  var outerCircleStrokeForUncheckedButtonsColor = "#5787f4";
  var outerCircleFillForUncheckedButtonsColor = "#ffffff";
  var innerCircleFillForUncheckedButtonsColor = "#ffffff";

  var customButtonAppearance = '<svg class="radioBtnReplacement"><circle r="5" class="outerBlueCircle"/><circle r="2" class="innerBlueCircle"/></svg>';

  var containerClassName = "card-parameters";
  var buttonToClickClass = "reportal-button";
  var delimiterForStatesOfDifferentPairs = ' ';
  var delimiterForStatesInOnePair = '_';
  var listInputClass = "inputForStateOfSwitchers";
  /*EndConfig*/

  //var listInput = document.getElementById(listInputId);
  var listInput = document.getElementsByClassName(listInputClass)[0];
  var mainContainer = document.getElementsByClassName(containerClassName);
  var numberOfListInDiv = listInput.getAttribute("value").split(delimiterForStatesOfDifferentPairs);
  var inputTextI = listInput.getAttribute("value");
  var separatedInputTextI = inputTextI.split(delimiterForStatesOfDifferentPairs);
  var pairsOfListsCount = -1;


  for (var l = 0; l < separatedInputTextI.length; l++) {
    if (mainContainer[l].childElementCount == 0) {
      pairsOfListsCount++;
      var outerContainer = document.createElement('div');
      outerContainer.className = "outerContainer";
      mainContainer[l].appendChild(outerContainer);

      for (var i = 0; i < inputHeaders[0].length; i++) {
        var divButtonList = createButtonList(i);
        var divButtonListHeader = createHeaderForButtonList(i);

        outerContainer.appendChild(divButtonList);
        divButtonList.appendChild(divButtonListHeader);

        for (var j = 0; j < inputLists[0][i].length; j++) {
          var buttonValueIndex = createButtonValueIndex(j);
          var buttonIdIndex = createButtonIdIndex(i, j);

          var divRadioBlue = createDivForButtonAndLabel(buttonIdIndex);
          var inputRadioBlue = createButtonForList(i, l, buttonValueIndex, buttonIdIndex);
          var labelForRadioBlue = createLabelForButtonInList(i, j);

          inputTextI = listInput.getAttribute("value");
          separatedInputTextI = inputTextI.split(delimiterForStatesOfDifferentPairs);

          checkButtonsOnInitialPositions(i, j, inputRadioBlue, divRadioBlue);

          divButtonList.appendChild(divRadioBlue);
          divRadioBlue.appendChild(inputRadioBlue);
          divRadioBlue.appendChild(labelForRadioBlue);


          applyStylesForAllButtonsInLists(separatedInputTextI, i, divRadioBlue, labelForRadioBlue);

          inputRadioBlue.addEventListener("click", handleButtonClick);
        }
      }
    }
  }
}
function createButtonList(numberOfListInPair) {
  var divButtonList = document.createElement('div');
  if (numberOfListInPair % 2 !== 0) {
    divButtonList.className = "buttonList rightList";
  }
  else {
    divButtonList.className = "buttonList leftList";
  }
  divButtonList.setAttribute("id", "leftList");
  return divButtonList;
}

function createHeaderForButtonList(numberOfListInPair) {
  var divButtonListHeader = document.createElement('div');
  divButtonListHeader.className = "btnListHeader";
  divButtonListHeader.innerHTML = inputHeaders[0][numberOfListInPair];
  return divButtonListHeader;
}

function createButtonValueIndex(numberOfButtonInList) {
  return 'r' + '_' + (numberOfButtonInList + 1) + '_' + (pairsOfListsCount + 1);
}

function createButtonIdIndex(numberOfListInPair, numberOfButtonInList) {
  return 'r' + '_' + (numberOfListInPair + 1) + '_' + (numberOfButtonInList + 1) + '_' + (pairsOfListsCount + 1);
}

function createDivForButtonAndLabel(buttonId) {
  var divRadioBlue = document.createElement('div');
  divRadioBlue.className = "radiobutton-blue";
  divRadioBlue.setAttribute("id", 'div' + buttonId);
  return divRadioBlue;
}

function createButtonForList(numberOfListInPair, numberOfCard, buttonValue, buttonId) {
  var inputRadioBlue = document.createElement('input');
  inputRadioBlue.setAttribute("type", "radio");
  if (numberOfListInPair % 2 !== 0) {
    inputRadioBlue.setAttribute("name", "right" + (numberOfCard + 1));
  }
  else {
    inputRadioBlue.setAttribute("name", "left" + (numberOfCard + 1));
  }
  inputRadioBlue.setAttribute("value", buttonValue);
  inputRadioBlue.setAttribute("id", buttonId);
  inputRadioBlue.className = "radiobuttonBlueInput";
  return inputRadioBlue;
}

function createLabelForButtonInList(numberOfListInPair, numberOfButtonInList) {
  var labelForRadioBlue = document.createElement('label');
  labelForRadioBlue.className = buttonIdIndex + "label";
  labelForRadioBlue.setAttribute("for", buttonIdIndex);

  var innerHtmlForLabel = customButtonAppearance;
  labelForRadioBlue.innerHTML = innerHtmlForLabel + inputLists[0][numberOfListInPair][numberOfButtonInList];
  return labelForRadioBlue;
}

function checkButtonsOnInitialPositions(numberOfListInPair, numberOfButtonInList, currentButton, divForCurrentButton) {
  if (numberOfButtonInList == separatedInputTextI[pairsOfListsCount].split(delimiterForStatesInOnePair)[numberOfListInPair]) {
    currentButton.setAttribute("checked", "true");
    divForCurrentButton.style.backgroundColor = checkedDivBackgroundColor;
  }
}

function applyStylesForAllButtonsInLists(separatedInputTextI, numberOfListInPair, currentDiv, currentLabel) {
  if (j == separatedInputTextI[pairsOfListsCount].split(delimiterForStatesInOnePair)[numberOfListInPair]) {
    applyStyleForOneButton(currentDiv, currentLabel, outerCircleStrokeForCheckedButtonsColor, outerCircleFillForCheckedButtonsColor, innerCircleFillForCheckedButtonsColor, textOnCheckedButtonsColor);
  }
  else {
    applyStyleForOneButton(currentDiv, currentLabel, outerCircleStrokeForUncheckedButtonsColor, outerCircleFillForUncheckedButtonsColor, innerCircleFillForUncheckedButtonsColor, textOnUncheckedButtonsColor);
  }
}

function applyStyleForOneButton(currentDiv, currentLabel, outerCircleStrokeColor, outerCircleFillColor, innerCircleFillColor, textColor) {
  var outerCircle = currentDiv.getElementsByClassName("outerBlueCircle");
  var innerCircle = currentDiv.getElementsByClassName("innerBlueCircle");
  outerCircle[0].style.stroke = outerCircleStrokeColor;
  outerCircle[0].style.fill = outerCircleFillColor;
  innerCircle[0].style.fill = innerCircleFillColor;

  currentLabel.style.color = textColor;
}


function handleButtonClick() {
  var currentButtonId = this.getAttribute("id");
  var divToChange = document.getElementById("div" + currentButtonId);
  var currentButton = document.getElementById(currentButtonId);
  var currentList = divToChange.parentNode;
  var divsInCurrentList = currentList.childNodes;

  var divChosenPreviouslyId = findWhichButtonWasCheckedBeforeClick(divsInCurrentList);
  var previousDivToChange = document.getElementById(divChosenPreviouslyId);

  if (divChosenPreviouslyId.substring(3) !== currentButtonId) {
    changeDivStyleOnClick(previousDivToChange, divToChange);

    var outerCircle = divToChange.getElementsByClassName("outerBlueCircle");
    var innerCircle = divToChange.getElementsByClassName("innerBlueCircle");
    var previousOuterCircle = previousDivToChange.getElementsByClassName("outerBlueCircle");
    var previousInnerCircle = previousDivToChange.getElementsByClassName("innerBlueCircle");

    changeButtonStyleOnClick(outerCircle, innerCircle, previousOuterCircle, previousInnerCircle);

    var previousButtonId = divChosenPreviouslyId.substring(3);
    var currentLabelToChange = divToChange.getElementsByClassName(currentButtonId + 'label');
    var previousLabelToChange = previousDivToChange.getElementsByClassName(previousButtonId + 'label');
    changeLabelStyleOnClick(currentLabelToChange[0], previousLabelToChange[0]);

    var separateButtonIndexForPosition = currentButtonId.split('_');
    var currentButtonPosition = [separateButtonIndexForPosition[1], separateButtonIndexForPosition[2], separateButtonIndexForPosition[3]];

    var inputText = listInput.getAttribute("value");
    var separatedInputText = inputText.split(delimiterForStatesInOnePair);

    var newInputText = changeInputTextOnClick(separatedInputText, currentButtonPosition);

    listInput.setAttribute("value", newInputText);
    var buttonToClick = document.getElementsByClassName(buttonToClickClass)[0];
    viewmode.showWait();
    buttonToClick.click();
  }
}

function findWhichButtonWasCheckedBeforeClick(divsInCurrentList) {
  var result;
  for (var i = divsInCurrentList.length - 1; i >= 0; i--) {
    var currentDivId = divsInCurrentList[i].getAttribute("id");
    if (!document.getElementById(currentDivId.substring(3)).checked) {
      result = currentDivId;
      break;
    }
  }
  return result;
}

function changeDivStyleOnClick(previousDivToChange, divToChange) {
  previousDivToChange.style.backgroundColor = uncheckedDivBackgroundColor;
  divToChange.style.backgroundColor = checkedDivBackgroundColor;
}

function changeButtonStyleOnClick(outerCircle, innerCircle, previousOuterCircle, previousInnerCircle) {
  outerCircle[0].style.stroke = outerCircleStrokeForCheckedButtonsColor;
  outerCircle[0].style.fill = outerCircleFillForCheckedButtonsColor;
  innerCircle[0].style.fill = innerCircleFillForCheckedButtonsColor;
  previousOuterCircle[0].style.stroke = outerCircleStrokeForUncheckedButtonsColor;
  previousOuterCircle[0].style.fill = outerCircleFillForUncheckedButtonsColor;
  previousInnerCircle[0].style.fill = innerCircleFillForUncheckedButtonsColor;
}

function changeLabelStyleOnClick(currentLabelToChange, previousLabelToChange) {
  currentLabelToChange.style.color = uncheckedDivBackgroundColor;
  previousLabelToChange.style.color = textOnUncheckedButtonsColor;
}

function changeInputTextOnClick(separatedInputText, currentButtonPosition) {
  var result = '';
  for (var j = 0; j < separatedInputText.length; j++) {
    var separatedInputForEachPair = separatedInputText[j].split(delimiterForStatesInOnePair);
    if (j+1 == currentButtonPosition[2]) {
      if (currentButtonPosition[0] == '1') {
        if (separatedInputForEachPair[0] == '0') {
          result += '1' + delimiterForStatesInOnePair + separatedInputForEachPair[1] + delimiterForStatesOfDifferentPairs;
        }
        else if (separatedInputForEachPair[0] == '1') {
          result += '0' + delimiterForStatesInOnePair + separatedInputForEachPair[1] + delimiterForStatesOfDifferentPairs;
        }
      }
      else if (currentButtonPosition[0] == '2') {
        if (separatedInputForEachPair[1] == '0') {
          result += separatedInputForEachPair[0] + delimiterForStatesInOnePair + '1' + delimiterForStatesOfDifferentPairs;
        }
        else if (separatedInputForEachPair[1] == '1') {
          result += separatedInputForEachPair[0] + delimiterForStatesInOnePair + '0' + delimiterForStatesOfDifferentPairs;
        }
      }
    }
    else {
      result += separatedInputText[j] + delimiterForStatesOfDifferentPairs;
    }
  }
  return result;
}
