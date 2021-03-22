package exchangeratetest.stepdef;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import exchangeratetest.runner.TestBase;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class StepDefIncorrectURL extends TestBase {

	String server = LoadProperties().getProperty("url");
	RequestSpecification req_spec = null;
	Response resp = null;

	Scenario scn;

	@Before
	public void setUp(Scenario s) {
		this.scn = s;
	}

	@Given("Exchange rate API is up and running")
	public void exchange_rate_api_is_up_and_running() {
		req_spec = given().baseUri(server);
	}

	@When("I hit the API URL with endpoint as {string}")
	public void i_hit_the_api_url_with_endpoint_as(String string1) {
		resp = req_spec.when().get(string1);
		scn.write("Response of the request is :" + resp.asString() + "<br>");
	}

	@Then("API Error Code {int} should be displayed")
	public void api_error_code_should_be_displayed(Integer int1) {
		resp.then().assertThat().statusCode(int1);
	}

}
