package renamevalue;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {
				"html:src/test/java/renamevalue/output/pomreport-html-report",
				"junit:src/test/java/renamevalue/output/pomre.xml",
				"json:src/test/java/renamevalue/output/pomr.json"
		}
		)
public class class2 {

}
