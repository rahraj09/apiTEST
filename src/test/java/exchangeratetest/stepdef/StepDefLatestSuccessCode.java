package exchangeratetest.stepdef;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import exchangeratetest.runner.TestBase;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class StepDefLatestSuccessCode extends TestBase {

	String server = LoadProperties().getProperty("url");
	RequestSpecification req_spec = null;
	Response resp = null;

	Scenario scn;

	@Before
	public void setUp(Scenario s) {
		this.scn = s;
	}

	@Given("Currency Exchange rate API is up and running")
	public void Currency_exchange_rate_API_is_up_and_running() {
		req_spec = given().baseUri(server);
	}

	@When("I hit the API URL for the latest currency exchange rates with endpoint as {string}")
	public void i_hit_the_API_URL_for_the_latest_currency_exchange_rates_with_endpoint_as(String endPoint) {
		resp = req_spec.when().get(endPoint);
		scn.write("Response of the request is :" + resp.asString() + "<br>");
	}

	@Then("API returns the response with status code as {int}")
	public void api_returns_the_response_with_status_code_as(Integer int1) {
		resp.then().assertThat().statusCode(200);
	}

	@Then("Response is getting pulled with all the exchange rate data for different currencies")
	public void response_is_getting_pulled_with_all_the_exchange_rate_data_for_different_currencies() {
		resp.then().assertThat().statusCode(200).body("rates", not(emptyArray()));
	}

}
