import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

/**
 * Created by aparajita on 15/05/17.
 */
public class TestDefinition {

     WebDriver driver=null;

    @Given("^I am on ebay page")

    public void goToEbay() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "/Users/LION_2/Downloads/AparajitaDocs/chromedriver");
        DesiredCapabilities caps = DesiredCapabilities.chrome();
        caps.setCapability("browser_version", "58.0.3029.110");
        driver = new ChromeDriver(caps);
        driver.get("https://www.ebay.com");
        throw new PendingException();
    }

    @When("^I search sony tv")
    public void searchSonyTv() throws Throwable {
        WebElement searchBox;
        searchBox = driver.findElement(By.id("gh-ac"));
        searchBox.sendKeys("sony tv");
        searchBox.submit();
        throw new PendingException();
    }

    @When ("^I select the screen size")
    public void selectScreenSize() {
        driver.findElements(By.className("search-guidance__text-item-link")).get(0).click();
    }

    @When ("^I select random product")
    public void selectRandomProduct() {
        driver.findElement(By.className("vip")).click();
    }

    @When ("^I click on add to cart button")
    public void clickAddToCart() {
        driver.findElement(By.id("binBtn_btn")).click();
    }

    @When ("^I close additional purchase")
    public void closeAdditionalPurchase() {
        driver.findElement(By.id("addNoThx")).click();
    }

    @When ("^I click on proceed to checkout")
    public void proceedToCheckout() {
        driver.findElement(By.id("gtChk")).click();
        driver.close();
    }
    @Then("^run should be successful")
    public void thenStatements(){
        System.out.println("Then statement executed successfully. ");
    }


}
