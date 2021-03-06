$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 2,
  "name": "To test my cucumber test is running I want to run a test feature file.",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running-i-want-to-run-a-test-feature-file.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Cucumber setup",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running-i-want-to-run-a-test-feature-file.;cucumber-setup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on ebay page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I search sony tv",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select the screen size",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select random product",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on add to cart button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I close additional purchase",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on proceed to checkout",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "run should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefinition.goToEbay()"
});
formatter.result({
  "duration": 3616448926,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created exception\nfrom disconnected: unable to connect to renderer\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.29.461585 (0be2cd95f834e9ee7c46bcc7cf405b483f5ae83b),platform\u003dMac OS X 10.10.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.30 seconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027macLion.local\u0027, ip: \u0027192.168.1.18\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_152-ea\u0027\nDriver info: driver.version: ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$22(ProtocolHandshake.java:365)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:368)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:159)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:250)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:184)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:171)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\n\tat TestDefinition.goToEbay(TestDefinition.java:22)\n\tat ✽.Given I am on ebay page(test.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "TestDefinition.searchSonyTv()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestDefinition.selectScreenSize()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestDefinition.selectRandomProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestDefinition.clickAddToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestDefinition.closeAdditionalPurchase()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestDefinition.proceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestDefinition.thenStatements()"
});
formatter.result({
  "status": "skipped"
});
});