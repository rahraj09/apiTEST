package exchangeratetest.runner;

import org.junit.runner.RunWith;

/* For HTML results of the execution run refer the path --->target/html/index.html*/

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features", glue = { "exchangeratetest.stepdef" }, tags = {}, plugin = {
		
		
		
		
		"pretty", "html:target/html/", "json:target/json/file.json", }, dryRun = false

)
public class RunnerTest {

	// "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"
}
