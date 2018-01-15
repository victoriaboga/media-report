/*


var inputHeaders = [["", ""]];
var inputLists = [[["Rolling average", "Number of hits"], ["Category", "Symptom"]]];

*/

function createButtonList(numberOfListInPair) {
  var divButtonList = document.createElement('div');
  if (numberOfListInPair % 2 !== 0) {
    divButtonList.className = 'buttonList rightList';
  } else {
    divButtonList.className = 'buttonList leftList';
  }
  return divButtonList;
}
function createHeaderForButtonList(numberOfListInPair, inputHeaders) {
  var divButtonListHeader = document.createElement('div');
  divButtonListHeader.className = 'btnListHeader';
  divButtonListHeader.innerHTML = inputHeaders[0][numberOfListInPair];
  return divButtonListHeader;
}
function createButtonValueIndex(numberOfButtonInList, pairsOfListsCount) {
  return 'r' + '_' + (numberOfButtonInList + 1) + '_' + (pairsOfListsCount + 1);
}
function createButtonIdIndex(numberOfListInPair, numberOfButtonInList, pairsOfListsCount) {
  return 'r' + '_' + (numberOfListInPair + 1) + '_' + (numberOfButtonInList + 1) + '_' + (pairsOfListsCount + 1);
}
function createDivForButtonAndLabel(divButtonClass, buttonId) {
  var divRadio = document.createElement('div');
  divRadio.className = divButtonClass;
  divRadio.setAttribute('id', 'div' + buttonId);
  return divRadio;
}
function createButtonForList(numberOfListInPair, numberOfCard, buttonValue, buttonId) {
  var inputRadio = document.createElement('input');
  inputRadio.setAttribute('type', 'radio');
  if (numberOfListInPair % 2 !== 0) {
    inputRadio.setAttribute('name', 'right' + (numberOfCard + 1));
  }
  else {
    inputRadio.setAttribute('name', 'left' + (numberOfCard + 1));
  }
  inputRadio.setAttribute('value', buttonValue);
  inputRadio.setAttribute('id', buttonId);
  inputRadio.className = 'radiobuttonBlueInput';
  return inputRadio;
}
function createLabelForButtonInList(numberOfListInPair, numberOfButtonInList, buttonIdIndex, customButtonAppearance, inputLists) {
  var labelForRadioBlue = document.createElement('label');
  labelForRadioBlue.className = buttonIdIndex + 'label';
  labelForRadioBlue.setAttribute('for', buttonIdIndex);

  var innerHtmlForLabel = customButtonAppearance;
  labelForRadioBlue.innerHTML = innerHtmlForLabel + inputLists[0][numberOfListInPair][numberOfButtonInList];
  return labelForRadioBlue;
}
function checkButtonsOnInitialPositions(numberOfListInPair, numberOfButtonInList, currentButton, divForCurrentButton, separatedInputTextI, pairsOfListsCount, delimiterForStatesInOnePair, checkedDiv) {
  if (numberOfButtonInList == separatedInputTextI[pairsOfListsCount].split(delimiterForStatesInOnePair)[numberOfListInPair]) {
    currentButton.setAttribute('checked', 'true');
    divForCurrentButton.style.backgroundColor = checkedDiv.backgroundColor;
  }
}
function applyStyleForOneButton(currentDiv, currentLabel, outerCircleStrokeColor, outerCircleFillColor, innerCircleFillColor, textColor) {
  var outerCircle = currentDiv.getElementsByClassName('outerBlueCircle');
  var innerCircle = currentDiv.getElementsByClassName('innerBlueCircle');
  outerCircle[0].style.stroke = outerCircleStrokeColor;
  outerCircle[0].style.fill = outerCircleFillColor;
  innerCircle[0].style.fill = innerCircleFillColor;

  currentLabel.style.color = textColor;
}
function applyStylesForAllButtonsInLists(separatedInputTextI, numberOfListInPair, currentDiv, currentLabel, pairsOfListsCount, delimiterForStatesInOnePair, uncheckedDiv, checkedDiv, j) {
  if (j == separatedInputTextI[pairsOfListsCount].split(delimiterForStatesInOnePair)[numberOfListInPair]) {
    applyStyleForOneButton(currentDiv, currentLabel, checkedDiv.outerCircleColor, checkedDiv.outerCircleFill, checkedDiv.innerCircleColor, checkedDiv.textColor);
  }
  else {
    applyStyleForOneButton(currentDiv, currentLabel, uncheckedDiv.outerCircleColor, uncheckedDiv.outerCircleFill, uncheckedDiv.innerCircleColor, uncheckedDiv.textColor);
  }
}
function handleButtonClick(delimiterForStatesInOnePair, buttonToClickClass, delimiterForStatesOfDifferentPairs, button, uncheckedDiv, checkedDiv, listInput) {
  var currentButtonId = button.getAttribute('id');
  var divToChange = document.getElementById('div' + currentButtonId);
  var currentList = divToChange.parentNode;
  var divsInCurrentList = currentList.childNodes;

  var divChosenPreviouslyId = findWhichButtonWasCheckedBeforeClick(divsInCurrentList);
  var previousDivToChange = document.getElementById(divChosenPreviouslyId);

  if (divChosenPreviouslyId.substring(3) !== currentButtonId) {
    changeDivStyleOnClick(previousDivToChange, divToChange, uncheckedDiv.backgroundColor, checkedDiv.backgroundColor);

    var outerCircle = divToChange.getElementsByClassName('outerBlueCircle');
    var innerCircle = divToChange.getElementsByClassName('innerBlueCircle');
    var previousOuterCircle = previousDivToChange.getElementsByClassName('outerBlueCircle');
    var previousInnerCircle = previousDivToChange.getElementsByClassName('innerBlueCircle');

    changeButtonStyleOnClick(outerCircle, innerCircle, previousOuterCircle, previousInnerCircle, checkedDiv, uncheckedDiv);

    var previousButtonId = divChosenPreviouslyId.substring(3);
    var currentLabelToChange = divToChange.getElementsByClassName(currentButtonId + 'label');
    var previousLabelToChange = previousDivToChange.getElementsByClassName(previousButtonId + 'label');
    changeLabelStyleOnClick(currentLabelToChange[0], previousLabelToChange[0], uncheckedDiv.backgroundColor, uncheckedDiv.textColor);

    var separateButtonIndexForPosition = currentButtonId.split('_');
    var currentButtonPosition = [separateButtonIndexForPosition[1], separateButtonIndexForPosition[2], separateButtonIndexForPosition[3]];

    var inputText = listInput.getAttribute('value');
    var separatedInputText = inputText.split(delimiterForStatesOfDifferentPairs);

    var newInputText = changeInputTextOnClick(separatedInputText, currentButtonPosition, delimiterForStatesInOnePair, delimiterForStatesOfDifferentPairs);

    listInput.setAttribute('value', newInputText);
    var buttonToClick = document.getElementsByClassName(buttonToClickClass)[0];
    buttonToClick.click();
  }
}
function findWhichButtonWasCheckedBeforeClick(divsInCurrentList) {
  var result;
  for (var i = divsInCurrentList.length - 1; i >= 0; i--) {
    var currentDivId = divsInCurrentList[i].getAttribute('id');
    if (!document.getElementById(currentDivId.substring(3)).checked) {
      result = currentDivId;
      break;
    }
  }
  return result;
}
function changeDivStyleOnClick(previousDivToChange, divToChange, uncheckedDivBackgroundColor, checkedDivBackgroundColor) {
  previousDivToChange.style.backgroundColor = uncheckedDivBackgroundColor;
  divToChange.style.backgroundColor = checkedDivBackgroundColor;
}
function changeButtonStyleOnClick(outerCircle, innerCircle, previousOuterCircle, previousInnerCircle, checkedDiv, uncheckedDiv) {
  outerCircle[0].style.stroke = checkedDiv.outerCircleColor;
  outerCircle[0].style.fill = checkedDiv.outerCircleFill;
  innerCircle[0].style.fill = checkedDiv.innerCircleColor;
  previousOuterCircle[0].style.stroke = uncheckedDiv.outerCircleColor;
  previousOuterCircle[0].style.fill = uncheckedDiv.outerCircleFill;
  previousInnerCircle[0].style.fill = uncheckedDiv.innerCircleColor;
}
function changeLabelStyleOnClick(currentLabelToChange, previousLabelToChange, uncheckedDivBackgroundColor, textOnUncheckedButtonsColor) {
  currentLabelToChange.style.color = uncheckedDivBackgroundColor;
  previousLabelToChange.style.color = textOnUncheckedButtonsColor;
}
function changeInputTextOnClick(separatedInputText, currentButtonPosition, delimiterForStatesInOnePair, delimiterForStatesOfDifferentPairs) {
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

function SetChartSettingsCheckers(inputHeaders, inputLists) {
  /* Config */
  var checkedDiv = { backgroundColor: '#5787f4', textColor: '#ffffff', outerCircleColor: '#ffffff', outerCircleFill: 'transparent', innerCircleColor: '#ffffff' };
  var uncheckedDiv = { backgroundColor: '#ffffff', textColor: '#000000', outerCircleColor: '#5787f4', outerCircleFill: '#ffffff', innerCircleColor: '#ffffff'};

  var customButtonAppearance = '<svg class="radioBtnReplacement" cx="50%" cy="70%"><circle r="5" class="outerBlueCircle"/> <circle r="2" class="innerBlueCircle"/></svg>';

  var containerClassName = 'card-parameters';
  var buttonToClickClass = 'reportal-button';
  var divButtonClass = 'radiobutton-blue';
  var delimiterForStatesOfDifferentPairs = ' ';
  var delimiterForStatesInOnePair = '_';
  var listInputClass = 'inputForStateOfSwitchers';
  /* EndConfig*/

  var listInput = document.getElementsByClassName(listInputClass)[0].children[0].children[0];
  var mainContainer = document.getElementsByClassName(containerClassName);
  var inputTextI = listInput.getAttribute('value');
  var separatedInputTextI = inputTextI.split(delimiterForStatesOfDifferentPairs);
  var pairsOfListsCount = -1;


  for (var l = 0; l < separatedInputTextI.length; l++) {
    if (mainContainer[l].childElementCount == 0) {
      pairsOfListsCount++;
      var outerContainer = document.createElement('div');
      outerContainer.className = 'outerContainer';
      mainContainer[l].appendChild(outerContainer);

      for (var i = 0; i < inputHeaders[0].length; i++) {
        /* create containers for each switcher */
        var divButtonList = createButtonList(i);
        var divButtonListHeader = createHeaderForButtonList(i, inputHeaders);

        outerContainer.appendChild(divButtonList);
        divButtonList.appendChild(divButtonListHeader);

        for (var j = 0; j < inputLists[0][i].length; j++) {
          /* create elements inside each container for each option */
          var buttonValueIndex = createButtonValueIndex(j, pairsOfListsCount);
          var buttonIdIndex = createButtonIdIndex(i, j, pairsOfListsCount);

          var divRadio = createDivForButtonAndLabel(divButtonClass, buttonIdIndex);
          var inputRadio = createButtonForList(i, l, buttonValueIndex, buttonIdIndex);
          var labelForRadio= createLabelForButtonInList(i, j, buttonIdIndex, customButtonAppearance, inputLists);

          inputTextI = listInput.getAttribute('value');
          separatedInputTextI = inputTextI.split(delimiterForStatesOfDifferentPairs);

          checkButtonsOnInitialPositions(i, j, inputRadio, divRadio, separatedInputTextI, pairsOfListsCount, delimiterForStatesInOnePair, checkedDiv);

          divButtonList.appendChild(divRadio);
          divRadio.appendChild(inputRadio);
          divRadio.appendChild(labelForRadio);

          applyStylesForAllButtonsInLists(separatedInputTextI, i, divRadio, labelForRadio, pairsOfListsCount, delimiterForStatesInOnePair, uncheckedDiv, checkedDiv, j);

          inputRadio.addEventListener('click', function(){handleButtonClick(delimiterForStatesInOnePair, buttonToClickClass, delimiterForStatesOfDifferentPairs, this, uncheckedDiv, checkedDiv, listInput);}, false);
        }
      }
    }
  }
}


export default { createButtonList, createHeaderForButtonList, createButtonValueIndex, createButtonIdIndex, createDivForButtonAndLabel, createButtonForList, createLabelForButtonInList,
                checkButtonsOnInitialPositions, applyStyleForOneButton, applyStylesForAllButtonsInLists, handleButtonClick, findWhichButtonWasCheckedBeforeClick, changeButtonStyleOnClick,
                changeDivStyleOnClick, changeLabelStyleOnClick, changeInputTextOnClick, SetChartSettingsCheckers };
