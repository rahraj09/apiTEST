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

public class FuturedateExchangeRate extends TestBase {

	String server = LoadProperties().getProperty("url");
	RequestSpecification req_spec = null;
	Response resp = null;
	String Currentdate = java.time.LocalDate.now().minusDays(3).toString();
	

	Scenario scn;

	@Before
	public void setUp(Scenario s) {
		this.scn = s;
	}

	@Given("Currency-exchange rate API is up and running")
	public void currency_exchange_rate_API_is_up_and_running() {
		req_spec = given().baseUri(server);
	}

	@When("I hit the API URL for the mentioned future date exchange rate {string}")
	public void i_hit_the_API_URL_for_the_mentioned_future_date_exchange_rate(String futuredate) {
		resp = req_spec.when().get(futuredate);
		scn.write("Response of the request is :" + resp.asString() + "<br>");
	}

	@Then("API returns the success response with status code as {int}")
	public void api_returns_the_success_response_with_status_code_as(Integer int1) {
		resp.then().assertThat().statusCode(200);
	}

	@Then("The response with Current date is received")
	public void the_response_with_Current_date_is_received() {
		resp.then().assertThat().body("date", equalTo(Currentdate));
	}

}
