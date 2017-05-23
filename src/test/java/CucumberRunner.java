/**
 * Created by APARAJITA on 5/22/17.
 */

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
//@CucumberOptions(format={"html:/Users/LION_2/IdeaProjects/Product_Test/reports/test-report/html-test-report"},tags= "@smokeTest")
@CucumberOptions( format={"json:/Users/LION_2/IdeaProjects/Product_Test/reports/test-report/cucumber.json"})
public class CucumberRunner {

}