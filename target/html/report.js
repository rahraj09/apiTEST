$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/FutureDateExchangeRate.feature");
formatter.feature({
  "name": "Verify different features of Exchange Rates API for specific mentioned Date",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify if Current Date Exchange rate response is received while triggering request for any future date",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Currency-exchange rate API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "FuturedateExchangeRate.currency_exchange_rate_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the API URL for the mentioned future date exchange rate \"/2021-03-25\"",
  "keyword": "When "
});
formatter.match({
  "location": "FuturedateExchangeRate.i_hit_the_API_URL_for_the_mentioned_future_date_exchange_rate(String)"
});
formatter.write("Response of the request is :{\"rates\":{\"CAD\":1.4877,\"HKD\":9.2352,\"ISK\":151.4,\"PHP\":57.795,\"DKK\":7.4364,\"HUF\":367.94,\"CZK\":26.127,\"AUD\":1.5365,\"RON\":4.8853,\"SEK\":10.1743,\"IDR\":17128.99,\"INR\":86.2155,\"BRL\":6.571,\"RUB\":88.075,\"HRK\":7.5758,\"JPY\":129.54,\"THB\":36.672,\"CHF\":1.1066,\"SGD\":1.597,\"PLN\":4.62,\"BGN\":1.9558,\"TRY\":8.6354,\"CNY\":7.7413,\"NOK\":10.2018,\"NZD\":1.6598,\"ZAR\":17.5051,\"USD\":1.1891,\"MXN\":24.16,\"ILS\":3.9213,\"GBP\":0.85763,\"KRW\":1344.69,\"MYR\":4.8842},\"base\":\"EUR\",\"date\":\"2021-03-19\"}\u003cbr\u003e");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returns the success response with status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "FuturedateExchangeRate.api_returns_the_success_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response with Current date is received",
  "keyword": "And "
});
formatter.match({
  "location": "FuturedateExchangeRate.the_response_with_Current_date_is_received()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/IncorrectExchangeRateURL.feature");
formatter.feature({
  "name": "Verify different features of Exchange Rates API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify if 400 BAD VALUE ERROR response is received for incorrect URL for Exchange rates request",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Exchange rate API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefIncorrectURL.exchange_rate_api_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the API URL with endpoint as \"/351latest\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefIncorrectURL.i_hit_the_api_url_with_endpoint_as(String)"
});
formatter.write("Response of the request is :{\"error\":\"time data \u0027351latest\u0027 does not match format \u0027%Y-%m-%d\u0027\"}\u003cbr\u003e");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Error Code 400 should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefIncorrectURL.api_error_code_should_be_displayed(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/LatestExchangeRate.feature");
formatter.feature({
  "name": "Verify different features of Exchange Rates API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify the success Status is received while hitting for Exchange Rate request",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Currency Exchange rate API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefLatestSuccessCode.Currency_exchange_rate_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the API URL for the latest currency exchange rates with endpoint as \"/latest\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefLatestSuccessCode.i_hit_the_API_URL_for_the_latest_currency_exchange_rates_with_endpoint_as(String)"
});
formatter.write("Response of the request is :{\"rates\":{\"CAD\":1.4877,\"HKD\":9.2352,\"ISK\":151.4,\"PHP\":57.795,\"DKK\":7.4364,\"HUF\":367.94,\"CZK\":26.127,\"AUD\":1.5365,\"RON\":4.8853,\"SEK\":10.1743,\"IDR\":17128.99,\"INR\":86.2155,\"BRL\":6.571,\"RUB\":88.075,\"HRK\":7.5758,\"JPY\":129.54,\"THB\":36.672,\"CHF\":1.1066,\"SGD\":1.597,\"PLN\":4.62,\"BGN\":1.9558,\"TRY\":8.6354,\"CNY\":7.7413,\"NOK\":10.2018,\"NZD\":1.6598,\"ZAR\":17.5051,\"USD\":1.1891,\"MXN\":24.16,\"ILS\":3.9213,\"GBP\":0.85763,\"KRW\":1344.69,\"MYR\":4.8842},\"base\":\"EUR\",\"date\":\"2021-03-19\"}\u003cbr\u003e");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returns the response with status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefLatestSuccessCode.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the Response is generated for Latest Exchange rates request",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Currency Exchange rate API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefLatestSuccessCode.Currency_exchange_rate_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the API URL for the latest currency exchange rates with endpoint as \"/latest\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefLatestSuccessCode.i_hit_the_API_URL_for_the_latest_currency_exchange_rates_with_endpoint_as(String)"
});
formatter.write("Response of the request is :{\"rates\":{\"CAD\":1.4877,\"HKD\":9.2352,\"ISK\":151.4,\"PHP\":57.795,\"DKK\":7.4364,\"HUF\":367.94,\"CZK\":26.127,\"AUD\":1.5365,\"RON\":4.8853,\"SEK\":10.1743,\"IDR\":17128.99,\"INR\":86.2155,\"BRL\":6.571,\"RUB\":88.075,\"HRK\":7.5758,\"JPY\":129.54,\"THB\":36.672,\"CHF\":1.1066,\"SGD\":1.597,\"PLN\":4.62,\"BGN\":1.9558,\"TRY\":8.6354,\"CNY\":7.7413,\"NOK\":10.2018,\"NZD\":1.6598,\"ZAR\":17.5051,\"USD\":1.1891,\"MXN\":24.16,\"ILS\":3.9213,\"GBP\":0.85763,\"KRW\":1344.69,\"MYR\":4.8842},\"base\":\"EUR\",\"date\":\"2021-03-19\"}\u003cbr\u003e");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returns the response with status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefLatestSuccessCode.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response is getting pulled with all the exchange rate data for different currencies",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefLatestSuccessCode.response_is_getting_pulled_with_all_the_exchange_rate_data_for_different_currencies()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/SpecificDateExchangeRate.feature");
formatter.feature({
  "name": "Verify different features of Exchange Rates API for specific mentioned Date",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify if Success Status Code is generated while triggering GET Request for specific date",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Currency-Exchange rate API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "SpecificcDateExchangeRate.currency_Exchange_rate_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the API URL for the specific date exchange rate with endpoint as \"/2021-03-17\"",
  "keyword": "When "
});
formatter.match({
  "location": "SpecificcDateExchangeRate.i_hit_the_API_URL_for_the_specific_date_exchange_rate_with_endpoint_as(String)"
});
formatter.write("Response of the request is :{\"rates\":{\"CAD\":1.4852,\"HKD\":9.2476,\"ISK\":151.4,\"PHP\":57.982,\"DKK\":7.436,\"HUF\":367.74,\"CZK\":26.159,\"AUD\":1.5427,\"RON\":4.8874,\"SEK\":10.1355,\"IDR\":17216.3,\"INR\":86.429,\"BRL\":6.7299,\"RUB\":87.8245,\"HRK\":7.5765,\"JPY\":130.02,\"THB\":36.656,\"CHF\":1.1047,\"SGD\":1.6036,\"PLN\":4.6136,\"BGN\":1.9558,\"TRY\":8.9498,\"CNY\":7.7435,\"NOK\":10.1213,\"NZD\":1.6618,\"ZAR\":17.718,\"USD\":1.1907,\"MXN\":24.6882,\"ILS\":3.9155,\"GBP\":0.85668,\"KRW\":1346.65,\"MYR\":4.9075},\"base\":\"EUR\",\"date\":\"2021-03-17\"}\u003cbr\u003e");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the response with status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "SpecificcDateExchangeRate.api_return_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the Response is received while hitting Exchange rate Request with specific Date",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Currency-Exchange rate API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "SpecificcDateExchangeRate.currency_Exchange_rate_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the API URL for the specific date exchange rate with endpoint as \"/2021-03-17\"",
  "keyword": "When "
});
formatter.match({
  "location": "SpecificcDateExchangeRate.i_hit_the_API_URL_for_the_specific_date_exchange_rate_with_endpoint_as(String)"
});
formatter.write("Response of the request is :{\"rates\":{\"CAD\":1.4852,\"HKD\":9.2476,\"ISK\":151.4,\"PHP\":57.982,\"DKK\":7.436,\"HUF\":367.74,\"CZK\":26.159,\"AUD\":1.5427,\"RON\":4.8874,\"SEK\":10.1355,\"IDR\":17216.3,\"INR\":86.429,\"BRL\":6.7299,\"RUB\":87.8245,\"HRK\":7.5765,\"JPY\":130.02,\"THB\":36.656,\"CHF\":1.1047,\"SGD\":1.6036,\"PLN\":4.6136,\"BGN\":1.9558,\"TRY\":8.9498,\"CNY\":7.7435,\"NOK\":10.1213,\"NZD\":1.6618,\"ZAR\":17.718,\"USD\":1.1907,\"MXN\":24.6882,\"ILS\":3.9155,\"GBP\":0.85668,\"KRW\":1346.65,\"MYR\":4.9075},\"base\":\"EUR\",\"date\":\"2021-03-17\"}\u003cbr\u003e");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the response with status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "SpecificcDateExchangeRate.api_return_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response is getting pulled for the specific date",
  "keyword": "And "
});
formatter.match({
  "location": "SpecificcDateExchangeRate.response_is_getting_pulled_for_the_specific_date()"
});
formatter.result({
  "status": "passed"
});
});