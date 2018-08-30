// Given
//  a diagram name
//  an archimate element type
//  a property
//  a colorizing function
//  Make a heatmap out of the diagram by colorizing the elements of type componenttype, according property values and the colorizing fuction
// Michel Bénard, 2018

//-------------------------
// get a diagram by name
function selectDiagram(diagramName)
{
  return $("archimate-diagram-model").filter("."+diagramName).first() ;
}
//-------------------------
// given a value return a color code
function colorize(status)
{
  if (status=="planned") return "#FF0000";
  else if (status =="deployed") return "#00FF00";
  else return "#0000FF";
}
//-------------------------
//  for diagram diagramName , colorize  components of componentType according to their propertyName values
function makeHeatMap(diagramName,componentType,propertyName,colorfunc)
{
  diagram = selectDiagram(diagramName);
  visuals = $(diagram).find(componentType);


  visuals.forEach(function(vis) {
    var propertyValue = vis.prop(propertyName);
    var color = colorfunc(propertyValue);
   vis.fillColor=color;
  })
}

// callexample
makeHeatMap("heatmap-cycle","application-component","cycle",colorize) 
