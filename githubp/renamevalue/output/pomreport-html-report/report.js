$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:renamevalue/renva.feature");
formatter.feature({
  "name": "Test Calculator",
  "description": "This file describes calculator functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add two numbers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter 20 in the calculator",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I press add",
  "keyword": "And "
});
formatter.match({
  "location": "renamevalue.class1.I_press_add()"
});
formatter.result({
  "status": "skipped"
});
});