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

public class SpecificcDateExchangeRate extends TestBase {

	String server = LoadProperties().getProperty("url");
	RequestSpecification req_spec = null;
	Response resp = null;

	Scenario scn;

	@Before
	public void setUp(Scenario s) {
		this.scn = s;
	}

	@Given("Currency-Exchange rate API is up and running")
	public void currency_Exchange_rate_API_is_up_and_running() {
		req_spec = given().baseUri(server);
	}

	@When("I hit the API URL for the specific date exchange rate with endpoint as {string}")
	public void i_hit_the_API_URL_for_the_specific_date_exchange_rate_with_endpoint_as(String date) {
		resp = req_spec.when().get(date);
		scn.write("Response of the request is :" + resp.asString() + "<br>");
	}

	@Then("API return the response with status code as {int}")
	public void api_return_the_response_with_status_code_as(Integer int1) {
		resp.then().assertThat().statusCode(200);
	}

	@Then("Response is getting pulled for the specific date")
	public void response_is_getting_pulled_for_the_specific_date() {
		resp.then().assertThat().statusCode(200).assertThat().body("rates", not(emptyArray())).assertThat().body("date",
				equalTo("2021-03-17"));

	}

}
