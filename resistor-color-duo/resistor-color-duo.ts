export function decodedValue(color: any[]) {
  
  var colors = "Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Grey, White";
  var colorsList = colors.split(", ");
  var value = "";
  
  for (var i = 0; i < color.length; i++){
    
    for (var j = 0; j < colorsList.length; j++){

      if (color[i] == colorsList[j].toLowerCase()){
        value += ""+j; 
      }
    }

    if (i == 1){
      break;
    }
  }

  return parseInt(value);
}
